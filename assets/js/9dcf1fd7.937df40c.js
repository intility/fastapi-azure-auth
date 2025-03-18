"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["825"],{442:function(e,n,i){i.r(n),i.d(n,{default:()=>p,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>l});var s=JSON.parse('{"id":"settings/b2c","title":"B2C settings","description":"appclientid: str","source":"@site/docs/settings/b2c.mdx","sourceDirName":"settings","slug":"/settings/b2c","permalink":"/fastapi-azure-auth/settings/b2c","draft":false,"unlisted":false,"editUrl":"https://github.com/Intility/FastAPI-Azure-Auth/edit/main/docs/docs/settings/b2c.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"B2C settings","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Multi-tenant settings","permalink":"/fastapi-azure-auth/settings/multi_tenant"}}'),t=i("5893"),o=i("65");let r={title:"B2C settings",sidebar_position:3},l=void 0,c={},d=[{value:"app_client_id: <code>str</code>",id:"app_client_id-str",level:3},{value:"openid_config_url: <code>str</code>",id:"openid_config_url-str",level:3},{value:"scopes: <code>Optional[dict[str, str]]</code>",id:"scopes-optionaldictstr-str",level:3},{value:"leeway: int",id:"leeway-int",level:3},{value:"validate_iss: bool",id:"validate_iss-bool",level:3},{value:"iss_callable: Callable",id:"iss_callable-callable",level:3},{value:"openid_config_use_app_id: <code>bool</code>",id:"openid_config_use_app_id-bool",level:3},{value:"openapi_authorization_url: <code>Optional[str]</code>",id:"openapi_authorization_url-optionalstr",level:3},{value:"openapi_token_url: <code>Optional[str]</code>",id:"openapi_token_url-optionalstr",level:3},{value:"openapi_description: <code>Optional[str]</code>",id:"openapi_description-optionalstr",level:3},{value:"auto_error: <code>bool</code>",id:"auto_error-bool",level:3}];function a(e){let n={a:"a",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h3,{id:"app_client_id-str",children:["app_client_id: ",(0,t.jsx)(n.code,{children:"str"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Default"}),": ",(0,t.jsx)(n.code,{children:"None"})]}),"\n",(0,t.jsxs)(n.p,{children:["Your applications client ID. This will be the ",(0,t.jsx)(n.code,{children:"Web app"})," in Azure Entra ID"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"openid_config_url-str",children:["openid_config_url: ",(0,t.jsx)(n.code,{children:"str"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Default"}),": ",(0,t.jsx)(n.code,{children:"None"})]}),"\n",(0,t.jsx)(n.p,{children:"Override OpenID config URL (used for B2C tenants)"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"scopes-optionaldictstr-str",children:["scopes: ",(0,t.jsx)(n.code,{children:"Optional[dict[str, str]]"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"None"})]}),"\n",(0,t.jsx)(n.p,{children:"Scopes, these are the ones you've configured in Azure Entra ID B2C. Key is scope, value is a description."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"    {\n        f'https://{settings.TENANT_NAME}.onmicrosoft.com/{settings.APP_CLIENT_ID}/user_impersonation': 'user_impersonation'\n    }\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"leeway-int",children:"leeway: int"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"0"})]}),"\n",(0,t.jsx)(n.p,{children:'By adding leeway, you define a tolerance window in terms of seconds, allowing the token to be\nconsidered valid even if it falls within the leeway time before or after the "exp" or "nbf" times.'}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"validate_iss-bool",children:"validate_iss: bool"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"True"})]}),"\n",(0,t.jsx)(n.p,{children:"Whether to validate the token issuer or not. This can be skipped to allow anyone to log in."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"iss_callable-callable",children:"iss_callable: Callable"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"None"})]}),"\n",(0,t.jsxs)(n.p,{children:["Async function that has to accept a ",(0,t.jsx)(n.code,{children:"tid"})," and return a ",(0,t.jsx)(n.code,{children:"iss"})," / raise an InvalidIssuer exception\nThis is required when validate_iss is set to ",(0,t.jsx)(n.code,{children:"True"}),". For examples, see\n",(0,t.jsx)(n.a,{href:"../multi-tenant/accept_specific_tenants_only",children:"Accept specific tenants only"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"openid_config_use_app_id-bool",children:["openid_config_use_app_id: ",(0,t.jsx)(n.code,{children:"bool"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"False"})]}),"\n",(0,t.jsxs)(n.p,{children:["Set this to True if you're using claims-mapping. If you're unsure, leave at False. Read more in the\n",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-protocols-oidc#sample-response",children:"Azure docs"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"openapi_authorization_url-optionalstr",children:["openapi_authorization_url: ",(0,t.jsx)(n.code,{children:"Optional[str]"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"None"})]}),"\n",(0,t.jsx)(n.p,{children:"Override OpenAPI authorization URL"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"openapi_token_url-optionalstr",children:["openapi_token_url: ",(0,t.jsx)(n.code,{children:"Optional[str]"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"None"})]}),"\n",(0,t.jsx)(n.p,{children:"Override OpenAPI token URL"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"openapi_description-optionalstr",children:["openapi_description: ",(0,t.jsx)(n.code,{children:"Optional[str]"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"None"})]}),"\n",(0,t.jsx)(n.p,{children:"Override OpenAPI description"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"auto_error-bool",children:["auto_error: ",(0,t.jsx)(n.code,{children:"bool"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"True"})]}),"\n",(0,t.jsx)(n.p,{children:"Set this to False if you are using multiple authentication libraries.  This will return rather than\nthrowing authentication exceptions."})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},65:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return r}});var s=i(7294);let t={},o=s.createContext(t);function r(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);