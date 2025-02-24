import asyncio
from datetime import datetime, timedelta

import httpx
import pytest
import respx
from asgi_lifespan import LifespanManager
from demo_project.api.dependencies import azure_scheme
from demo_project.main import app
from httpx import AsyncClient
from tests.utils import build_access_token, build_openid_keys, keys_url, openid_config_url, openid_configuration

from fastapi_azure_auth.openid_config import OpenIdConfig


@pytest.mark.anyio
async def test_http_error_old_config_found(respx_mock, mock_config_timestamp):
    azure_scheme.openid_config._config_timestamp = datetime.now() - timedelta(weeks=1)
    respx_mock.get('https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration').respond(
        status_code=500
    )
    async with AsyncClient(
        app=app, base_url='http://test', headers={'Authorization': f'Bearer {build_access_token()}'}
    ) as ac:
        response = await ac.get('api/v1/hello')
    assert response.json() == {'detail': 'Connection to Azure Entra ID is down. Unable to fetch provider configuration'}


@pytest.mark.anyio
async def test_http_error_no_config_cause_crash_on_startup(respx_mock):
    respx_mock.get(
        'https://login.microsoftonline.com/intility_tenant_id/v2.0/.well-known/openid-configuration'
    ).respond(status_code=500)
    with pytest.raises(RuntimeError):
        async with LifespanManager(app=app):
            async with AsyncClient(
                app=app, base_url='http://test', headers={'Authorization': f'Bearer {build_access_token()}'}
            ) as ac:
                await ac.get('api/v1/hello')


@pytest.mark.anyio
async def test_app_id_provided(respx_mock):
    openid_config = OpenIdConfig('intility_tenant', multi_tenant=False, app_id='1234567890')
    respx_mock.get(
        'https://login.microsoftonline.com/intility_tenant/v2.0/.well-known/openid-configuration?appid=1234567890'
    ).respond(json=openid_configuration())
    respx_mock.get('https://login.microsoftonline.com/intility_tenant/discovery/v2.0/keys').respond(
        json=build_openid_keys()
    )
    await openid_config.load_config()
    assert len(openid_config.signing_keys) == 2


@pytest.mark.anyio
async def test_custom_config_id(respx_mock):
    openid_config = OpenIdConfig(
        'intility_tenant',
        multi_tenant=False,
        config_url='https://login.microsoftonline.com/override_tenant/v2.0/.well-known/openid-configuration',
    )
    respx_mock.get('https://login.microsoftonline.com/override_tenant/v2.0/.well-known/openid-configuration').respond(
        json=openid_configuration()
    )
    respx_mock.get('https://login.microsoftonline.com/intility_tenant/discovery/v2.0/keys').respond(
        json=build_openid_keys()
    )
    await openid_config.load_config()
    assert len(openid_config.signing_keys) == 2


async def test_concurrent_refresh_requests():
    """Test that concurrent refreshes are handled correctly"""
    with respx.mock(assert_all_called=True) as mock:

        async def slow_config_response(*args, **kwargs):
            await asyncio.sleep(0.2)
            return httpx.Response(200, json=openid_configuration())

        async def slow_keys_response(*args, **kwargs):
            await asyncio.sleep(0.2)
            return httpx.Response(200, json=build_openid_keys())

        config_route = mock.get(openid_config_url()).mock(side_effect=slow_config_response)
        keys_route = mock.get(keys_url()).mock(side_effect=slow_keys_response)

        azure_scheme.openid_config._config_timestamp = None

        tasks = [azure_scheme.openid_config.load_config() for _ in range(5)]
        await asyncio.gather(*tasks)

        assert len(config_route.calls) == 1, "Config endpoint called multiple times"
        assert len(keys_route.calls) == 1, "Keys endpoint called multiple times"
        assert len(azure_scheme.openid_config.signing_keys) == 2
