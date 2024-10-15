"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[831],{6082:e=>{e.exports=JSON.parse('{"version":{"pluginId":"docs","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/fastapi-azure-auth/","docId":"introduction","unlisted":false},{"type":"link","label":"Installation","href":"/fastapi-azure-auth/installation","docId":"installation","unlisted":false},{"type":"category","label":"Single-tenant setup","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Azure configuration","href":"/fastapi-azure-auth/single-tenant/azure_setup","docId":"single-tenant/azure_setup","unlisted":false},{"type":"link","label":"FastAPI configuration","href":"/fastapi-azure-auth/single-tenant/fastapi_configuration","docId":"single-tenant/fastapi_configuration","unlisted":false}]},{"type":"category","label":"Multi-tenant setup","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Azure configuration","href":"/fastapi-azure-auth/multi-tenant/azure_setup","docId":"multi-tenant/azure_setup","unlisted":false},{"type":"link","label":"FastAPI configuration","href":"/fastapi-azure-auth/multi-tenant/fastapi_configuration","docId":"multi-tenant/fastapi_configuration","unlisted":false},{"type":"link","label":"Accept specific tenants only","href":"/fastapi-azure-auth/multi-tenant/accept_specific_tenants_only","docId":"multi-tenant/accept_specific_tenants_only","unlisted":false}]},{"type":"category","label":"B2C setup","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Azure configuration","href":"/fastapi-azure-auth/b2c/azure_setup","docId":"b2c/azure_setup","unlisted":false},{"type":"link","label":"FastAPI configuration","href":"/fastapi-azure-auth/b2c/fastapi_configuration","docId":"b2c/fastapi_configuration","unlisted":false}]},{"type":"category","label":"Usage and FAQ","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Accessing the user object","href":"/fastapi-azure-auth/usage-and-faq/accessing_the_user","docId":"usage-and-faq/accessing_the_user","unlisted":false},{"type":"link","label":"Guest Users","href":"/fastapi-azure-auth/usage-and-faq/guest_users","docId":"usage-and-faq/guest_users","unlisted":false},{"type":"link","label":"Locking down on roles","href":"/fastapi-azure-auth/usage-and-faq/locking_down_on_roles","docId":"usage-and-faq/locking_down_on_roles","unlisted":false},{"type":"link","label":"Calling your APIs from Python","href":"/fastapi-azure-auth/usage-and-faq/calling_your_apis_from_python","docId":"usage-and-faq/calling_your_apis_from_python","unlisted":false},{"type":"link","label":"Using Microsoft Graph","href":"/fastapi-azure-auth/usage-and-faq/graph_usage","docId":"usage-and-faq/graph_usage","unlisted":false},{"type":"link","label":"Approval required on login","href":"/fastapi-azure-auth/usage-and-faq/admin_consent_when_logging_in","docId":"usage-and-faq/admin_consent_when_logging_in","unlisted":false},{"type":"link","label":"Testing","href":"/fastapi-azure-auth/usage-and-faq/testing","docId":"usage-and-faq/testing","unlisted":false},{"type":"link","label":"Troubleshooting","href":"/fastapi-azure-auth/usage-and-faq/troubleshooting","docId":"usage-and-faq/troubleshooting","unlisted":false}]},{"type":"category","label":"Settings","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Single-tenant settings","href":"/fastapi-azure-auth/settings/single_tenant","docId":"settings/single_tenant","unlisted":false},{"type":"link","label":"Multi-tenant settings","href":"/fastapi-azure-auth/settings/multi_tenant","docId":"settings/multi_tenant","unlisted":false},{"type":"link","label":"B2C settings","href":"/fastapi-azure-auth/settings/b2c","docId":"settings/b2c","unlisted":false}]}]},"docs":{"b2c/azure_setup":{"id":"b2c/azure_setup","title":"Azure configuration","description":"We\'ll need to create two application registrations for Azure AD B2C authentication to cover both direct API","sidebar":"tutorialSidebar"},"b2c/fastapi_configuration":{"id":"b2c/fastapi_configuration","title":"FastAPI configuration","description":"We\'ll do the simplest setup possible in these docs, through a one-file main.py.","sidebar":"tutorialSidebar"},"installation":{"id":"installation","title":"Installation","description":"You can install FastAPI-Azure-Auth like any other package on PyPI:","sidebar":"tutorialSidebar"},"introduction":{"id":"introduction","title":"\xa0","description":"FastAPI-Azure-Auth","sidebar":"tutorialSidebar"},"multi-tenant/accept_specific_tenants_only":{"id":"multi-tenant/accept_specific_tenants_only","title":"Accept specific tenants only","description":"If your multi-tenant application only should accept a few tenants, you\'ll have to verify issuers, or the iss field in the JWT.","sidebar":"tutorialSidebar"},"multi-tenant/azure_setup":{"id":"multi-tenant/azure_setup","title":"Azure configuration","description":"We\'ll need to create two application registrations for Azure AD authentication to cover both direct API","sidebar":"tutorialSidebar"},"multi-tenant/fastapi_configuration":{"id":"multi-tenant/fastapi_configuration","title":"FastAPI configuration","description":"We\'ll do the simplest setup possible in these docs, through a one-file main.py.","sidebar":"tutorialSidebar"},"settings/b2c":{"id":"settings/b2c","title":"B2C settings","description":"appclientid: str","sidebar":"tutorialSidebar"},"settings/multi_tenant":{"id":"settings/multi_tenant","title":"Multi-tenant settings","description":"appclientid: str","sidebar":"tutorialSidebar"},"settings/single_tenant":{"id":"settings/single_tenant","title":"Single-tenant settings","description":"appclientid: str","sidebar":"tutorialSidebar"},"single-tenant/azure_setup":{"id":"single-tenant/azure_setup","title":"Azure configuration","description":"We\'ll need to create two application registrations for Azure AD authentication to cover both direct API","sidebar":"tutorialSidebar"},"single-tenant/fastapi_configuration":{"id":"single-tenant/fastapi_configuration","title":"FastAPI configuration","description":"We\'ll do the simplest setup possible in these docs, through a one-file main.py.","sidebar":"tutorialSidebar"},"usage-and-faq/accessing_the_user":{"id":"usage-and-faq/accessing_the_user","title":"Accessing the user object","description":"You can access your user object in two ways, either with Depends() or with request.state.user.","sidebar":"tutorialSidebar"},"usage-and-faq/admin_consent_when_logging_in":{"id":"usage-and-faq/admin_consent_when_logging_in","title":"Approval required on login","description":"If you\'re met by this screen when attempting to log in:","sidebar":"tutorialSidebar"},"usage-and-faq/calling_your_apis_from_python":{"id":"usage-and-faq/calling_your_apis_from_python","title":"Calling your APIs from Python","description":"Azure setup","sidebar":"tutorialSidebar"},"usage-and-faq/graph_usage":{"id":"usage-and-faq/graph_usage","title":"Using Microsoft Graph","description":"Microsoft Graph can be used together with the","sidebar":"tutorialSidebar"},"usage-and-faq/guest_users":{"id":"usage-and-faq/guest_users","title":"Guest Users","description":"In `FastAPI-Azure-Auth` version 4 and above, guest users in single- and multi-tenant applications (not B2C) will no longer","sidebar":"tutorialSidebar"},"usage-and-faq/locking_down_on_roles":{"id":"usage-and-faq/locking_down_on_roles","title":"Locking down on roles","description":"Azure setup","sidebar":"tutorialSidebar"},"usage-and-faq/testing":{"id":"usage-and-faq/testing","title":"Testing","description":"See issue 81 for more examples.","sidebar":"tutorialSidebar"},"usage-and-faq/troubleshooting":{"id":"usage-and-faq/troubleshooting","title":"Troubleshooting","description":"Logging","sidebar":"tutorialSidebar"}}}}')}}]);