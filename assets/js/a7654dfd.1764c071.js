"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[999],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9483:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={title:"Locking down on roles",sidebar_position:4},c=void 0,u={unversionedId:"single-tenant/locking_down_on_roles",id:"single-tenant/locking_down_on_roles",isDocsHomePage:!1,title:"Locking down on roles",description:"You can lock down on roles by creating your own wrapper dependency:",source:"@site/docs/single-tenant/locking_down_on_roles.mdx",sourceDirName:"single-tenant",slug:"/single-tenant/locking_down_on_roles",permalink:"/fastapi-azure-auth/single-tenant/locking_down_on_roles",editUrl:"https://github.com/Intility/FastAPI-Azure-Auth/edit/main/docs/docs/single-tenant/locking_down_on_roles.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Locking down on roles",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Guest Users",permalink:"/fastapi-azure-auth/single-tenant/guest_users"},next:{title:"AAD Authorization",permalink:"/fastapi-azure-auth/multi-tenant/azure_setup"}},l=[],p={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can lock down on roles by creating your own wrapper dependency:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="dependencies.py"',title:'"dependencies.py"'},'from fastapi import Depends\nfrom fastapi_azure_auth.auth import InvalidAuth\nfrom fastapi_azure_auth.user import User\n\nasync def validate_is_admin_user(user: User = Depends(azure_scheme)) -> None:\n    """\n    Validated that a user is in the `AdminUser` role in order to access the API.\n    Raises a 401 authentication error if not.\n    """\n    if \'AdminUser\' not in user.roles:\n        raise InvalidAuth(\'User is not an AdminUser\')\n')),(0,i.kt)("p",null,"and then use this dependency over ",(0,i.kt)("inlineCode",{parentName:"p"},"azure_scheme"),"."))}d.isMDXComponent=!0}}]);