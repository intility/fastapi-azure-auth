"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[943],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),g=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=g(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=g(t),d=a,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var g=2;g<o;g++)i[g]=t[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5563:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>g});var r=t(8168),a=(t(6540),t(5680));const o={title:"Troubleshooting",sidebar_position:8},i=void 0,s={unversionedId:"usage-and-faq/troubleshooting",id:"usage-and-faq/troubleshooting",title:"Troubleshooting",description:"Logging",source:"@site/docs/usage-and-faq/troubleshooting.mdx",sourceDirName:"usage-and-faq",slug:"/usage-and-faq/troubleshooting",permalink:"/fastapi-azure-auth/usage-and-faq/troubleshooting",editUrl:"https://github.com/Intility/FastAPI-Azure-Auth/edit/main/docs/docs/usage-and-faq/troubleshooting.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Troubleshooting",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Testing",permalink:"/fastapi-azure-auth/usage-and-faq/testing"},next:{title:"Single-tenant settings",permalink:"/fastapi-azure-auth/settings/single_tenant"}},l={},g=[{value:"Logging",id:"logging",level:2}],c={toc:g},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"logging"},"Logging"),(0,a.yg)("p",null,"If you run into any problems, set the logging level to ",(0,a.yg)("inlineCode",{parentName:"p"},"DEBUG")," and check the logs for more information."),(0,a.yg)("p",null,"Below an example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python",metastring:'title="logging_config.py"',title:'"logging_config.py"'},"from logging.config import dictConfig\n\nLOGGING = {\n    'version': 1,\n    'disable_existing_loggers': False,\n    'formatters': {\n        'verbose': {\n            'format': '%(levelname)s %(asctime)s %(name)s %(message)s'\n        },\n    },\n    'handlers': {\n        'console': {\n            'class': 'logging.StreamHandler',\n            'formatter': 'verbose',\n        },\n    },\n    'loggers': {\n        'fastapi_azure_auth': {'handlers': ['console'], 'level': 'DEBUG', 'propagate': False},\n    },\n}\n\ndictConfig(LOGGING)\n")),(0,a.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,a.yg)("div",{parentName:"div",className:"admonition-heading"},(0,a.yg)("h5",{parentName:"div"},(0,a.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,a.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.yg)("div",{parentName:"div",className:"admonition-content"},(0,a.yg)("p",{parentName:"div"},"It is recommended to call the ",(0,a.yg)("inlineCode",{parentName:"p"},"dictConfig()")," function before the FastAPI (and ",(0,a.yg)("inlineCode",{parentName:"p"},"fastapi-azure-auth"),") initialization."))))}u.isMDXComponent=!0}}]);