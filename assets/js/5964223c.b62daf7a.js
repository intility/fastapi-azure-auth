"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[766],{1957:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),i=(n(7294),n(3905)),o=n(8930);const r={title:"FastAPI configuration",sidebar_position:2},s=void 0,l={unversionedId:"multi-tenant/fastapi_configuration",id:"multi-tenant/fastapi_configuration",title:"FastAPI configuration",description:"We'll do the simplest setup possible in these docs, through a one-file main.py.",source:"@site/docs/multi-tenant/fastapi_configuration.mdx",sourceDirName:"multi-tenant",slug:"/multi-tenant/fastapi_configuration",permalink:"/fastapi-azure-auth/multi-tenant/fastapi_configuration",editUrl:"https://github.com/Intility/FastAPI-Azure-Auth/edit/main/docs/docs/multi-tenant/fastapi_configuration.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"FastAPI configuration",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Azure configuration",permalink:"/fastapi-azure-auth/multi-tenant/azure_setup"},next:{title:"Accept specific tenants only",permalink:"/fastapi-azure-auth/multi-tenant/accept_specific_tenants_only"}},p={},u=[{value:"Getting started",id:"getting-started",level:2},{value:"Add your settings",id:"add-your-settings",level:2},{value:"Configure <code>CORS</code>",id:"configure-cors",level:2},{value:"Configure OpenAPI Documentation",id:"configure-openapi-documentation",level:2},{value:"Implementing FastAPI-Azure-Auth",id:"implementing-fastapi-azure-auth",level:2},{value:"Add loading of OpenID Configuration on startup",id:"add-loading-of-openid-configuration-on-startup",level:2},{value:"Adding authentication to our view",id:"adding-authentication-to-our-view",level:2},{value:"Testing it out",id:"testing-it-out",level:2},{value:"Last thing..",id:"last-thing",level:3}],d={toc:u},c="wrapper";function m(t){let{components:e,...r}=t;return(0,i.kt)(c,(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We'll do the ",(0,i.kt)("strong",{parentName:"p"},"simplest setup possible")," in these docs, through a one-file ",(0,i.kt)("inlineCode",{parentName:"p"},"main.py"),".\nHowever, it's highly recommended that you read the chapters about bigger applications\n",(0,i.kt)("a",{parentName:"p",href:"https://fastapi.tiangolo.com/tutorial/bigger-applications/"},"here"),", and invest in a good project structure."),(0,i.kt)("p",null,"We assume you've done the FastAPI tutorial and have dependencies installed, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"FastAPI")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Gunicorn"),"."),(0,i.kt)("p",null,'For a more "real life" project example, look at the\n',(0,i.kt)("a",{parentName:"p",href:"https://github.com/Intility/fastapi-azure-auth/tree/main/demo_project"},"demo_project")," on GitHub. This is configured\nas a single-tenant, but can easily be converted into a multi-tenant if you follow along here."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"First, either create your ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file and fill out your variables or insert them directly in your settings later."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env"',title:'".env"'},"APP_CLIENT_ID=\nOPENAPI_CLIENT_ID=\n")),(0,i.kt)("p",null,"Create your ",(0,i.kt)("inlineCode",{parentName:"p"},"main.py")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},"from fastapi import FastAPI\nimport uvicorn\n\napp = FastAPI()\n\n\n@app.get(\"/\")\nasync def root():\n    return {\"message\": \"Hello World\"}\n\nif __name__ == '__main__':\n    uvicorn.run('main:app', host='localhost', port=8000, reload=True)\n")),(0,i.kt)("p",null,"Run your application and ensure that everything works on ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8000/docs"},"http://localhost:8000/docs")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You need to run the application on the configured port in Azure AD for the next steps to work!"))),(0,i.kt)("h2",{id:"add-your-settings"},"Add your settings"),(0,i.kt)("p",null,"First, add your settings to the application. We'll need these later. The way I've set it up will look for a ",(0,i.kt)("inlineCode",{parentName:"p"},".env"),"-file\nto populate your settings, but you can also just set a ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," value directly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'{3-4,7-18} title="main.py"',"{3-4,7-18}":!0,title:'"main.py"'},"import uvicorn\nfrom fastapi import FastAPI\nfrom pydantic import AnyHttpUrl\nfrom pydantic_settings import BaseSettings, SettingsConfigDict\n\n\nclass Settings(BaseSettings):\n    BACKEND_CORS_ORIGINS: list[str | AnyHttpUrl] = ['http://localhost:8000']\n    OPENAPI_CLIENT_ID: str = \"\"\n    APP_CLIENT_ID: str = \"\"\n\n    model_config = SettingsConfigDict(\n        env_file='.env',\n        env_file_encoding='utf-8',\n        case_sensitive=True\n    )\n\nsettings = Settings()\n\napp = FastAPI()\n\n@app.get(\"/\")\nasync def root():\n    return {\"message\": \"Hello World\"}\n\n\nif __name__ == '__main__':\n    uvicorn.run('main:app', host='localhost', port=8000, reload=True)\n")),(0,i.kt)("h2",{id:"configure-cors"},"Configure ",(0,i.kt)("inlineCode",{parentName:"h2"},"CORS")),(0,i.kt)("p",null,"Now, let's configure our ",(0,i.kt)("inlineCode",{parentName:"p"},"CORS"),". Without ",(0,i.kt)("inlineCode",{parentName:"p"},"CORS")," your OpenAPI docs won't work as expected:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'{3,23-30} title="main.py"',"{3,23-30}":!0,title:'"main.py"'},"import uvicorn\nfrom fastapi import FastAPI\nfrom fastapi.middleware.cors import CORSMiddleware\nfrom pydantic import AnyHttpUrl\nfrom pydantic_settings import BaseSettings, SettingsConfigDict\n\n\nclass Settings(BaseSettings):\n    BACKEND_CORS_ORIGINS: list[Union[str, AnyHttpUrl]] = ['http://localhost:8000']\n    OPENAPI_CLIENT_ID: str = \"\"\n    APP_CLIENT_ID: str = \"\"\n\n    model_config = SettingsConfigDict(\n        env_file='.env',\n        env_file_encoding='utf-8',\n        case_sensitive=True\n    )\n\nsettings = Settings()\n\napp = FastAPI()\n\nif settings.BACKEND_CORS_ORIGINS:\n    app.add_middleware(\n        CORSMiddleware,\n        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],\n        allow_credentials=True,\n        allow_methods=['*'],\n        allow_headers=['*'],\n    )\n\n\n@app.get(\"/\")\nasync def root():\n    return {\"message\": \"Hello World\"}\n\n\nif __name__ == '__main__':\n    uvicorn.run('main:app', host='localhost', port=8000, reload=True)\n")),(0,i.kt)("h2",{id:"configure-openapi-documentation"},"Configure OpenAPI Documentation"),(0,i.kt)("p",null,"In order for our OpenAPI documentation to work, we have to configure a few settings directly in the ",(0,i.kt)("inlineCode",{parentName:"p"},"FastAPI")," application."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'{21-27} title="main.py"',"{21-27}":!0,title:'"main.py"'},"import uvicorn\nfrom fastapi import FastAPI\nfrom fastapi.middleware.cors import CORSMiddleware\nfrom pydantic import AnyHttpUrl\nfrom pydantic_settings import BaseSettings, SettingsConfigDict\n\n\nclass Settings(BaseSettings):\n    BACKEND_CORS_ORIGINS: list[str | AnyHttpUrl] = ['http://localhost:8000']\n    OPENAPI_CLIENT_ID: str = \"\"\n    APP_CLIENT_ID: str = \"\"\n\n    model_config = SettingsConfigDict(\n        env_file='.env',\n        env_file_encoding='utf-8',\n        case_sensitive=True\n    )\n\nsettings = Settings()\n\napp = FastAPI(\n    swagger_ui_oauth2_redirect_url='/oauth2-redirect',\n    swagger_ui_init_oauth={\n        'usePkceWithAuthorizationCodeGrant': True,\n        'clientId': settings.OPENAPI_CLIENT_ID,\n    },\n)\n\nif settings.BACKEND_CORS_ORIGINS:\n    app.add_middleware(\n        CORSMiddleware,\n        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],\n        allow_credentials=True,\n        allow_methods=['*'],\n        allow_headers=['*'],\n    )\n\n\n@app.get(\"/\")\nasync def root():\n    return {\"message\": \"Hello World\"}\n\n\nif __name__ == '__main__':\n    uvicorn.run('main:app', host='localhost', port=8000, reload=True)\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"swagger_ui_oauth2_redirect_url")," setting for redirect should be as configured in Azure AD.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"swagger_ui_init_oauth")," are standard mapped OpenAPI properties. You can find documentation about them ",(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/docs/open-source-tools/swagger-ui/usage/oauth2/"},"here")),(0,i.kt)("p",null,"We've used two flags: ",(0,i.kt)("inlineCode",{parentName:"p"},"usePkceWithAuthorizationCodeGrant"),", which is the authentication flow.\n",(0,i.kt)("inlineCode",{parentName:"p"},"clientId")," is our application Client ID, which will autofill a field for the end users later."),(0,i.kt)("h2",{id:"implementing-fastapi-azure-auth"},"Implementing FastAPI-Azure-Auth"),(0,i.kt)("p",null,"Now, the fun part begins! \ud83d\ude80"),(0,i.kt)("p",null,"Import the ",(0,i.kt)("inlineCode",{parentName:"p"},"MultiTenantAzureAuthorizationCodeBearer")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"fastapi_azure_auth")," and configure it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'{6,40-46} title="main.py"',"{6,40-46}":!0,title:'"main.py"'},"import uvicorn\nfrom fastapi import FastAPI\nfrom fastapi.middleware.cors import CORSMiddleware\nfrom pydantic import AnyHttpUrl\nfrom pydantic_settings import BaseSettings, SettingsConfigDict\nfrom fastapi_azure_auth import MultiTenantAzureAuthorizationCodeBearer\n\n\nclass Settings(BaseSettings):\n    BACKEND_CORS_ORIGINS: list[str | AnyHttpUrl] = ['http://localhost:8000']\n    OPENAPI_CLIENT_ID: str = \"\"\n    APP_CLIENT_ID: str = \"\"\n\n    model_config = SettingsConfigDict(\n        env_file='.env',\n        env_file_encoding='utf-8',\n        case_sensitive=True\n    )\n\nsettings = Settings()\n\napp = FastAPI(\n    swagger_ui_oauth2_redirect_url='/oauth2-redirect',\n    swagger_ui_init_oauth={\n        'usePkceWithAuthorizationCodeGrant': True,\n        'clientId': settings.OPENAPI_CLIENT_ID,\n    },\n)\n\nif settings.BACKEND_CORS_ORIGINS:\n    app.add_middleware(\n        CORSMiddleware,\n        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],\n        allow_credentials=True,\n        allow_methods=['*'],\n        allow_headers=['*'],\n    )\n\n\nazure_scheme = MultiTenantAzureAuthorizationCodeBearer(\n    app_client_id=settings.APP_CLIENT_ID,\n    scopes={\n        f'api://{settings.APP_CLIENT_ID}/user_impersonation': 'user_impersonation',\n    },\n    validate_iss=False\n)\n\n@app.get(\"/\")\nasync def root():\n    return {\"message\": \"Hello World\"}\n\n\nif __name__ == '__main__':\n    uvicorn.run('main:app', host='localhost', port=8000, reload=True)\n")),(0,i.kt)("p",null,"As you can see we've set ",(0,i.kt)("inlineCode",{parentName:"p"},"validate_iss")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"False"),". This will make sure FastAPI-Azure-Auth don't check which ",(0,i.kt)("inlineCode",{parentName:"p"},"issuer")," (known\nas ",(0,i.kt)("inlineCode",{parentName:"p"},"iss"),") the token has. In other words, we do not care which tenant the user was authenticating through.\nIf you only want to allow a few tenants to access your API (such as your customers), see ",(0,i.kt)("a",{parentName:"p",href:"accept_specific_tenants_only"},"Accept specific tenants only"),","),(0,i.kt)("h2",{id:"add-loading-of-openid-configuration-on-startup"},"Add loading of OpenID Configuration on startup"),(0,i.kt)("p",null,"By adding ",(0,i.kt)("inlineCode",{parentName:"p"},"on_event('startup')")," we're able to load the OpenID configuration immediately, instead of doing it when\nthe first user authenticates. This isn't required, but makes things a bit quicker. When 24 hours has passed, the\nconfiguration will be considered out of date, and update when a user does a request. You can use\n",(0,i.kt)("a",{parentName:"p",href:"https://fastapi.tiangolo.com/tutorial/background-tasks/"},"background tasks")," to refresh it before that happens if you'd like."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'{50-55} title="main.py"',"{50-55}":!0,title:'"main.py"'},"import uvicorn\nfrom fastapi import FastAPI\nfrom fastapi.middleware.cors import CORSMiddleware\nfrom pydantic import AnyHttpUrl\nfrom pydantic_settings import BaseSettings, SettingsConfigDict\nfrom fastapi_azure_auth import MultiTenantAzureAuthorizationCodeBearer\n\n\nclass Settings(BaseSettings):\n    BACKEND_CORS_ORIGINS: list[str | AnyHttpUrl] = ['http://localhost:8000']\n    OPENAPI_CLIENT_ID: str = \"\"\n    APP_CLIENT_ID: str = \"\"\n\n    model_config = SettingsConfigDict(\n        env_file='.env',\n        env_file_encoding='utf-8',\n        case_sensitive=True\n    )\n\nsettings = Settings()\n\napp = FastAPI(\n    swagger_ui_oauth2_redirect_url='/oauth2-redirect',\n    swagger_ui_init_oauth={\n        'usePkceWithAuthorizationCodeGrant': True,\n        'clientId': settings.OPENAPI_CLIENT_ID,\n    },\n)\n\nif settings.BACKEND_CORS_ORIGINS:\n    app.add_middleware(\n        CORSMiddleware,\n        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],\n        allow_credentials=True,\n        allow_methods=['*'],\n        allow_headers=['*'],\n    )\n\n\nazure_scheme = MultiTenantAzureAuthorizationCodeBearer(\n    app_client_id=settings.APP_CLIENT_ID,\n    scopes={\n        f'api://{settings.APP_CLIENT_ID}/user_impersonation': 'user_impersonation',\n    },\n    validate_iss=False\n)\n\n\n@app.on_event('startup')\nasync def load_config() -> None:\n    \"\"\"\n    Load OpenID config on startup.\n    \"\"\"\n    await azure_scheme.openid_config.load_config()\n\n\n@app.get(\"/\")\nasync def root():\n    return {\"message\": \"Hello World\"}\n\n\nif __name__ == '__main__':\n    uvicorn.run('main:app', host='localhost', port=8000, reload=True)\n")),(0,i.kt)("h2",{id:"adding-authentication-to-our-view"},"Adding authentication to our view"),(0,i.kt)("p",null,"There's two ways of adding dependencies in FastAPI. You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"Depends()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Security()"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"Security()")," has an extra\nproperty called ",(0,i.kt)("inlineCode",{parentName:"p"},"scopes"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"FastAPI-Azure-Auth")," support both, but if you use ",(0,i.kt)("inlineCode",{parentName:"p"},"Security()")," you can also lock down your API\nviews based on the scope."),(0,i.kt)("p",null,"Let's do that:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'{2,58} title="main.py"',"{2,58}":!0,title:'"main.py"'},"import uvicorn\nfrom fastapi import FastAPI, Security\nfrom fastapi.middleware.cors import CORSMiddleware\nfrom pydantic import AnyHttpUrl\nfrom pydantic_settings import BaseSettings, SettingsConfigDict\nfrom fastapi_azure_auth import MultiTenantAzureAuthorizationCodeBearer\n\n\nclass Settings(BaseSettings):\n    BACKEND_CORS_ORIGINS: list[str | AnyHttpUrl] = ['http://localhost:8000']\n    OPENAPI_CLIENT_ID: str = \"\"\n    APP_CLIENT_ID: str = \"\"\n\n    model_config = SettingsConfigDict(\n        env_file='.env',\n        env_file_encoding='utf-8',\n        case_sensitive=True\n    )\n\nsettings = Settings()\n\napp = FastAPI(\n    swagger_ui_oauth2_redirect_url='/oauth2-redirect',\n    swagger_ui_init_oauth={\n        'usePkceWithAuthorizationCodeGrant': True,\n        'clientId': settings.OPENAPI_CLIENT_ID,\n    },\n)\n\nif settings.BACKEND_CORS_ORIGINS:\n    app.add_middleware(\n        CORSMiddleware,\n        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],\n        allow_credentials=True,\n        allow_methods=['*'],\n        allow_headers=['*'],\n    )\n\n\nazure_scheme = MultiTenantAzureAuthorizationCodeBearer(\n    app_client_id=settings.APP_CLIENT_ID,\n    scopes={\n        f'api://{settings.APP_CLIENT_ID}/user_impersonation': 'user_impersonation',\n    },\n    validate_iss=False\n)\n\n\n@app.on_event('startup')\nasync def load_config() -> None:\n    \"\"\"\n    Load OpenID config on startup.\n    \"\"\"\n    await azure_scheme.openid_config.load_config()\n\n\n@app.get(\"/\", dependencies=[Security(azure_scheme)])\nasync def root():\n    return {\"message\": \"Hello World\"}\n\n\nif __name__ == '__main__':\n    uvicorn.run('main:app', host='localhost', port=8000, reload=True)\n")),(0,i.kt)("h2",{id:"testing-it-out"},"Testing it out"),(0,i.kt)("p",null,"Head over to your OpenAPI documentation at ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8000/docs"},"http://localhost:8000/docs")," and check out your API documentation.\nYou'll see a new button called ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorize"),". Before clicking it, try out your API to see that you're unauthorized."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"fastapi_1_authorize_button",src:n(7017).Z,width:"1481",height:"913"}),"\n",(0,i.kt)("img",{loading:"lazy",alt:"fastapi_2_not_authenticated",src:n(9332).Z,width:"495",height:"452"})),(0,i.kt)("p",null,"Now, let's authenticate. Click the ",(0,i.kt)("strong",{parentName:"p"},"Authorize")," button. Check your scope, and leave ",(0,i.kt)("inlineCode",{parentName:"p"},"Client secret")," blank. You do not\nneed that with the PKCE flow."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"fastapi_3_authenticate",src:n(9619).Z,width:"651",height:"594"})),(0,i.kt)("p",null,"Consent to the permissions requested:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"fastapi_4_consent",src:n(8809).Z,width:"441",height:"634"})),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you get a warning that your redirect URL is wrong, you're probably using ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")))),(0,i.kt)("p",null,"Try out your API again to see that it works!"),(0,i.kt)("h3",{id:"last-thing"},"Last thing.."),(0,i.kt)("p",null,"As discussed earlier, there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"scope")," parameter to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Security()")," version of ",(0,i.kt)("inlineCode",{parentName:"p"},"Depends()"),". If you'd want to lock down\nyour API to only be accessible by those with certain scopes, you can simply pass it into the dependency."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@app.get(\"/\", dependencies=[Security(azure_scheme, scopes=['wrong_scope'])])\n")),(0,i.kt)("p",null,"If you do this and try out your API again, you'll see that you're denied."),(0,i.kt)("p",null,"You're now safe and secure! Good luck! \ud83d\udd12\ud83d\ude80"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("h4",null,"If you like this project, please leave us a star \u2764 \ufe0f\ufe0f"),(0,i.kt)(o.Z,{href:"https://github.com/intility/fastapi-azure-auth","data-color-scheme":"no-preference: dark_dimmed; light: dark_dimmed; dark: dark_dimmed;","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star intility/fastapi-azure-auth on GitHub",mdxType:"GitHubButton"},"Star")))}m.isMDXComponent=!0},7017:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/fastapi_1_authorize_button-89218f631f158bcaf32c1a2a8998e4c3.png"},9332:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/fastapi_2_not_authenticated-02088064907129c3e4ef1efe4a3799f3.png"},9619:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/fastapi_3_authenticate-7973c5e443c1baace990fc914d6169b2.png"},8809:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/fastapi_4_consent-a34723e9db6e4dff37233900773fbf50.png"}}]);