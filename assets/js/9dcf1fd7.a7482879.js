"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),k=r,m=c["".concat(p,".").concat(k)]||c[k]||d[k]||o;return n?i.createElement(m,a(a({ref:t},u),{},{components:n})):i.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const o={title:"B2C settings",sidebar_position:3},a=void 0,l={unversionedId:"settings/b2c",id:"settings/b2c",title:"B2C settings",description:"appclientid: str",source:"@site/docs/settings/b2c.mdx",sourceDirName:"settings",slug:"/settings/b2c",permalink:"/fastapi-azure-auth/settings/b2c",editUrl:"https://github.com/Intility/FastAPI-Azure-Auth/edit/main/docs/docs/settings/b2c.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"B2C settings",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Multi-tenant settings",permalink:"/fastapi-azure-auth/settings/multi_tenant"}},p={},s=[{value:"app_client_id: <code>str</code>",id:"app_client_id-str",level:3},{value:"openid_config_url: <code>str</code>",id:"openid_config_url-str",level:3},{value:"scopes: <code>Optional[dict[str, str]]</code>",id:"scopes-optionaldictstr-str",level:3},{value:"leeway: int",id:"leeway-int",level:3},{value:"validate_iss: bool",id:"validate_iss-bool",level:3},{value:"iss_callable: Callable",id:"iss_callable-callable",level:3},{value:"openid_config_use_app_id: <code>bool</code>",id:"openid_config_use_app_id-bool",level:3},{value:"openapi_authorization_url: <code>Optional[str]</code>",id:"openapi_authorization_url-optionalstr",level:3},{value:"openapi_token_url: <code>Optional[str]</code>",id:"openapi_token_url-optionalstr",level:3},{value:"openapi_description: <code>Optional[str]</code>",id:"openapi_description-optionalstr",level:3},{value:"auto_error: <code>bool</code>",id:"auto_error-bool",level:3}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"app_client_id-str"},"app_client_id: ",(0,r.kt)("inlineCode",{parentName:"h3"},"str")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"None")),(0,r.kt)("p",null,"Your applications client ID. This will be the ",(0,r.kt)("inlineCode",{parentName:"p"},"Web app")," in Azure AD"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"openid_config_url-str"},"openid_config_url: ",(0,r.kt)("inlineCode",{parentName:"h3"},"str")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"None")),(0,r.kt)("p",null,"Override OpenID config URL (used for B2C tenants)"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"scopes-optionaldictstr-str"},"scopes: ",(0,r.kt)("inlineCode",{parentName:"h3"},"Optional[dict[str, str]]")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"None")),(0,r.kt)("p",null,"Scopes, these are the ones you've configured in Azure AD B2C. Key is scope, value is a description."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    {\n        f'https://{settings.TENANT_NAME}.onmicrosoft.com/{settings.APP_CLIENT_ID}/user_impersonation': 'user_impersonation'\n    }\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"leeway-int"},"leeway: int"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"0")),(0,r.kt)("p",null,'By adding leeway, you define a tolerance window in terms of seconds, allowing the token to be\nconsidered valid even if it falls within the leeway time before or after the "exp" or "nbf" times.'),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"validate_iss-bool"},"validate_iss: bool"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"True")),(0,r.kt)("p",null,"Whether to validate the token issuer or not. This can be skipped to allow anyone to log in."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"iss_callable-callable"},"iss_callable: Callable"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"None")),(0,r.kt)("p",null,"Async function that has to accept a ",(0,r.kt)("inlineCode",{parentName:"p"},"tid")," and return a ",(0,r.kt)("inlineCode",{parentName:"p"},"iss")," / raise an InvalidIssuer exception\nThis is required when validate_iss is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),". For examples, see\n",(0,r.kt)("a",{parentName:"p",href:"../multi-tenant/accept_specific_tenants_only"},"Accept specific tenants only")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"openid_config_use_app_id-bool"},"openid_config_use_app_id: ",(0,r.kt)("inlineCode",{parentName:"h3"},"bool")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"False")),(0,r.kt)("p",null,"Set this to True if you're using claims-mapping. If you're unsure, leave at False. Read more in the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-protocols-oidc#sample-response"},"Azure docs"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"openapi_authorization_url-optionalstr"},"openapi_authorization_url: ",(0,r.kt)("inlineCode",{parentName:"h3"},"Optional[str]")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"None")),(0,r.kt)("p",null,"Override OpenAPI authorization URL"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"openapi_token_url-optionalstr"},"openapi_token_url: ",(0,r.kt)("inlineCode",{parentName:"h3"},"Optional[str]")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"None")),(0,r.kt)("p",null,"Override OpenAPI token URL"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"openapi_description-optionalstr"},"openapi_description: ",(0,r.kt)("inlineCode",{parentName:"h3"},"Optional[str]")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"None")),(0,r.kt)("p",null,"Override OpenAPI description"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"auto_error-bool"},"auto_error: ",(0,r.kt)("inlineCode",{parentName:"h3"},"bool")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"True")),(0,r.kt)("p",null,"Set this to False if you are using multiple authentication libraries.  This will return rather than\nthrowing authentication exceptions."))}d.isMDXComponent=!0}}]);