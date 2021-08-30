"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[340],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,g=d["".concat(p,".").concat(f)]||d[f]||l[f]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8163:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Guest Users",sidebar_position:3},p=void 0,u={unversionedId:"single-tenant/guest_users",id:"single-tenant/guest_users",isDocsHomePage:!1,title:"Guest Users",description:"By default, guest users in your tenant will be able to access your APIs. You can block this in code by checking",source:"@site/docs/single-tenant/guest_users.mdx",sourceDirName:"single-tenant",slug:"/single-tenant/guest_users",permalink:"/fastapi-azure-auth/single-tenant/guest_users",editUrl:"https://github.com/Intility/FastAPI-Azure-Auth/edit/main/docs/docs/single-tenant/guest_users.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Guest Users",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"FastAPI configuration",permalink:"/fastapi-azure-auth/single-tenant/fastapi_configuration"},next:{title:"Locking down on roles",permalink:"/fastapi-azure-auth/single-tenant/locking_down_on_roles"}},c=[],l={toc:c};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, guest users in your tenant will be able to access your APIs. You can block this in code by checking\nthe users ",(0,o.kt)("inlineCode",{parentName:"p"},"tid")," is equal to yours, or preferably by configuring Azure AD. If you're using Azure AD, the user\nwill be denied to sign in, instead of getting a 403 when he's fetches his token."),(0,o.kt)("p",null,"Go to ",(0,o.kt)("strong",{parentName:"p"},"all")," your ",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/AllApps/menuId/"},"Enterprise Applications"),"\nand do the following steps. You can find your Enterprise Application either by searching on the Client ID in the\n",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/AllApps/menuId/"},"Enterprise Applications")," menu,\nor by first navigating to your ",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps"},"App registration")," and\nclicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"Managed application in local directory")," link:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"guest_1_link_from_appreg",src:n(3652).Z})),(0,o.kt)("p",null,"Under ",(0,o.kt)("strong",{parentName:"p"},"Properties"),", enable ",(0,o.kt)("inlineCode",{parentName:"p"},"User assignment required?")," and ",(0,o.kt)("strong",{parentName:"p"},"Save"),"."),(0,o.kt)("p",null,"Then, go to ",(0,o.kt)("strong",{parentName:"p"},"Users and groups"),", and ",(0,o.kt)("strong",{parentName:"p"},"add user/group"),". Find users or a fitting group and assign it to the role Default Access."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Groups you select should have all users as direct members of the group. Nested groups does not work with Enterprise Applications."))))}d.isMDXComponent=!0},3652:function(e,t,n){t.Z=n.p+"assets/images/guest_1_link_from_appreg-f3f5fda78fb5cb79bb78b786b48edc9e.png"}}]);