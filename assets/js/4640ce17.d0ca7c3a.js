"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["740"],{6355:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"usage-and-faq/graph_usage","title":"Using Microsoft Graph","description":"Microsoft Graph can be used together with the","source":"@site/docs/usage-and-faq/graph_usage.mdx","sourceDirName":"usage-and-faq","slug":"/usage-and-faq/graph_usage","permalink":"/fastapi-azure-auth/usage-and-faq/graph_usage","draft":false,"unlisted":false,"editUrl":"https://github.com/Intility/FastAPI-Azure-Auth/edit/main/docs/docs/usage-and-faq/graph_usage.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Using Microsoft Graph","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Calling your APIs from Python","permalink":"/fastapi-azure-auth/usage-and-faq/calling_your_apis_from_python"},"next":{"title":"Approval required on login","permalink":"/fastapi-azure-auth/usage-and-faq/admin_consent_when_logging_in"}}'),t=i("5893"),r=i("65");let o={title:"Using Microsoft Graph",sidebar_position:5},a=void 0,c={},d=[{value:"Backend API App Registration",id:"backend-api-app-registration",level:3},{value:"OpenAPI App Registration",id:"openapi-app-registration",level:3},{value:"Code",id:"code",level:3}];function l(e){let n={a:"a",admonition:"admonition",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/graph/overview",children:"Microsoft Graph"})," can be used together with the\n",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-on-behalf-of-flow",children:"On Behalf Flow (OBO)"}),",\nbut in order to make this work you must alter your app registration configuration a bit."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["This documentation is based off ",(0,t.jsx)(n.a,{href:"https://github.com/Intility/fastapi-azure-auth/issues/40",children:"issue #40"})]})}),"\n",(0,t.jsx)(n.h3,{id:"backend-api-app-registration",children:"Backend API App Registration"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Head over to ",(0,t.jsx)(n.a,{href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps",children:"Azure -> Azure Active Directory -> App registrations"}),",\nand select your ",(0,t.jsx)(n.strong,{children:"Backend API"})," Application Registration"]}),"\n",(0,t.jsxs)(n.li,{children:["Navigate to the ",(0,t.jsx)(n.code,{children:"Manifest"})," in the menu on the left"]}),"\n",(0,t.jsxs)(n.li,{children:["Add your OpenAPI/Swagger ClientID to the ",(0,t.jsx)(n.code,{children:"knownClientApplications"})," (saved as ",(0,t.jsx)(n.code,{children:"OPENAPI_CLIENT_ID"})," in your ",(0,t.jsx)(n.code,{children:".env"}),")"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"manifest",src:i(8349).Z+"",width:"802",height:"147"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"API permissions"})," and ensure ",(0,t.jsx)(n.code,{children:"User.Read"})," is there. If not, follow the steps in the picture below:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Add a permission"})}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Microsoft Graph"})," under ",(0,t.jsx)(n.code,{children:"Microsoft APIs"})]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Delegated permissions"})]}),"\n",(0,t.jsxs)(n.li,{children:["Search for and select ",(0,t.jsx)(n.code,{children:"User.Read"})]}),"\n",(0,t.jsx)(n.li,{children:"Click add permission"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"user_read",src:i(6142).Z+"",width:"1648",height:"756"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Certificates & Secrets"})," and create a secret for your backend to use in order to fetch a Graph token","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"New client secret"})}),"\n",(0,t.jsx)(n.li,{children:"Give it a name"}),"\n",(0,t.jsx)(n.li,{children:"Add"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"graph_secret",src:i(3270).Z+"",width:"1633",height:"590"})}),"\n",(0,t.jsx)(n.h3,{id:"openapi-app-registration",children:"OpenAPI App Registration"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Head back to ",(0,t.jsx)(n.a,{href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps",children:"Azure -> Azure Active Directory -> App registrations"}),",\nand select your ",(0,t.jsx)(n.strong,{children:"OpenAPI/Swagger"})," Application Registration"]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"API permissions"})," in the menu on the left"]}),"\n",(0,t.jsxs)(n.li,{children:["Add ",(0,t.jsx)(n.code,{children:"email"}),", ",(0,t.jsx)(n.code,{children:"offline_access"}),", ",(0,t.jsx)(n.code,{children:"openid"}),", ",(0,t.jsx)(n.code,{children:"profile"})," scopes","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Add a permission"})}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Microsoft Graph"})," under ",(0,t.jsx)(n.code,{children:"Microsoft APIs"})]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Delegated permissions"})]}),"\n",(0,t.jsx)(n.li,{children:"Select the permissions"}),"\n",(0,t.jsx)(n.li,{children:"Click add permission"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"user_read",src:i(3965).Z+"",width:"1628",height:"893"})}),"\n",(0,t.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,t.jsxs)(n.p,{children:["You can now fetch a graph token using the\n",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-on-behalf-of-flow",children:"OBO flow"}),".\nA full code example of an API using Graph can be found in the\n",(0,t.jsx)(n.a,{href:"https://github.com/Intility/fastapi-azure-auth/blob/main/demo_project/api/api_v1/endpoints/graph.py",children:"demo project"}),"."]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},3270:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/graph_secret-b4da05b15a168d4b6120248773fe17b6.png"},8349:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/manifest-fdaeb884d1407a9f61cc7325cc172e8f.png"},3965:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/openapi_scopes-f744e9bf7ba0952ad8a3c6aca24b2675.png"},6142:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/user_read-f97edbde88fe0f1624c1d1d8bd6ed952.png"},65:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return o}});var s=i(7294);let t={},r=s.createContext(t);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);