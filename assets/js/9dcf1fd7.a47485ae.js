"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[145],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var i=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),g=r,y=c["".concat(p,".").concat(g)]||c[g]||d[g]||o;return t?i.createElement(y,a(a({ref:n},u),{},{components:t})):i.createElement(y,a({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5429:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=t(8168),r=(t(6540),t(5680));const o={title:"B2C settings",sidebar_position:3},a=void 0,l={unversionedId:"settings/b2c",id:"settings/b2c",title:"B2C settings",description:"appclientid: str",source:"@site/docs/settings/b2c.mdx",sourceDirName:"settings",slug:"/settings/b2c",permalink:"/fastapi-azure-auth/settings/b2c",editUrl:"https://github.com/Intility/FastAPI-Azure-Auth/edit/main/docs/docs/settings/b2c.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"B2C settings",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Multi-tenant settings",permalink:"/fastapi-azure-auth/settings/multi_tenant"}},p={},s=[{value:"app_client_id: <code>str</code>",id:"app_client_id-str",level:3},{value:"openid_config_url: <code>str</code>",id:"openid_config_url-str",level:3},{value:"scopes: <code>Optional[dict[str, str]]</code>",id:"scopes-optionaldictstr-str",level:3},{value:"leeway: int",id:"leeway-int",level:3},{value:"validate_iss: bool",id:"validate_iss-bool",level:3},{value:"iss_callable: Callable",id:"iss_callable-callable",level:3},{value:"openid_config_use_app_id: <code>bool</code>",id:"openid_config_use_app_id-bool",level:3},{value:"openapi_authorization_url: <code>Optional[str]</code>",id:"openapi_authorization_url-optionalstr",level:3},{value:"openapi_token_url: <code>Optional[str]</code>",id:"openapi_token_url-optionalstr",level:3},{value:"openapi_description: <code>Optional[str]</code>",id:"openapi_description-optionalstr",level:3},{value:"auto_error: <code>bool</code>",id:"auto_error-bool",level:3}],u={toc:s},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,i.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"app_client_id-str"},"app_client_id: ",(0,r.yg)("inlineCode",{parentName:"h3"},"str")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Default"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"None")),(0,r.yg)("p",null,"Your applications client ID. This will be the ",(0,r.yg)("inlineCode",{parentName:"p"},"Web app")," in Azure AD"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"openid_config_url-str"},"openid_config_url: ",(0,r.yg)("inlineCode",{parentName:"h3"},"str")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Default"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"None")),(0,r.yg)("p",null,"Override OpenID config URL (used for B2C tenants)"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"scopes-optionaldictstr-str"},"scopes: ",(0,r.yg)("inlineCode",{parentName:"h3"},"Optional[dict[str, str]]")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Default:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"None")),(0,r.yg)("p",null,"Scopes, these are the ones you've configured in Azure AD B2C. Key is scope, value is a description."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"    {\n        f'https://{settings.TENANT_NAME}.onmicrosoft.com/{settings.APP_CLIENT_ID}/user_impersonation': 'user_impersonation'\n    }\n")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"leeway-int"},"leeway: int"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Default:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"0")),(0,r.yg)("p",null,'By adding leeway, you define a tolerance window in terms of seconds, allowing the token to be\nconsidered valid even if it falls within the leeway time before or after the "exp" or "nbf" times.'),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"validate_iss-bool"},"validate_iss: bool"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Default:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"True")),(0,r.yg)("p",null,"Whether to validate the token issuer or not. This can be skipped to allow anyone to log in."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"iss_callable-callable"},"iss_callable: Callable"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Default:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"None")),(0,r.yg)("p",null,"Async function that has to accept a ",(0,r.yg)("inlineCode",{parentName:"p"},"tid")," and return a ",(0,r.yg)("inlineCode",{parentName:"p"},"iss")," / raise an InvalidIssuer exception\nThis is required when validate_iss is set to ",(0,r.yg)("inlineCode",{parentName:"p"},"True"),". For examples, see\n",(0,r.yg)("a",{parentName:"p",href:"../multi-tenant/accept_specific_tenants_only"},"Accept specific tenants only")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"openid_config_use_app_id-bool"},"openid_config_use_app_id: ",(0,r.yg)("inlineCode",{parentName:"h3"},"bool")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Default:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"False")),(0,r.yg)("p",null,"Set this to True if you're using claims-mapping. If you're unsure, leave at False. Read more in the\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-protocols-oidc#sample-response"},"Azure docs"),"."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"openapi_authorization_url-optionalstr"},"openapi_authorization_url: ",(0,r.yg)("inlineCode",{parentName:"h3"},"Optional[str]")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Default:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"None")),(0,r.yg)("p",null,"Override OpenAPI authorization URL"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"openapi_token_url-optionalstr"},"openapi_token_url: ",(0,r.yg)("inlineCode",{parentName:"h3"},"Optional[str]")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Default:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"None")),(0,r.yg)("p",null,"Override OpenAPI token URL"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"openapi_description-optionalstr"},"openapi_description: ",(0,r.yg)("inlineCode",{parentName:"h3"},"Optional[str]")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Default:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"None")),(0,r.yg)("p",null,"Override OpenAPI description"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"auto_error-bool"},"auto_error: ",(0,r.yg)("inlineCode",{parentName:"h3"},"bool")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Default:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"True")),(0,r.yg)("p",null,"Set this to False if you are using multiple authentication libraries.  This will return rather than\nthrowing authentication exceptions."))}d.isMDXComponent=!0}}]);