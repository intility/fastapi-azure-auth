(()=>{"use strict";var e,t,r,a,o,d={},f={};function n(e){var t=f[e];if(void 0!==t)return t.exports;var r=f[e]={id:e,loaded:!1,exports:{}};return d[e].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=d,n.c=f,e=[],n.O=(t,r,a,o)=>{if(!r){var d=1/0;for(i=0;i<e.length;i++){r=e[i][0],a=e[i][1],o=e[i][2];for(var f=!0,c=0;c<r.length;c++)(!1&o||d>=o)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(f=!1,o<d&&(d=o));if(f){e.splice(i--,1);var b=a();void 0!==b&&(t=b)}}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[r,a,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);n.r(o);var d={};t=t||[null,r({}),r([]),r(r)];for(var f=2&a&&e;"object"==typeof f&&!~t.indexOf(f);f=r(f))Object.getOwnPropertyNames(f).forEach((t=>d[t]=()=>e[t]));return d.default=()=>e,n.d(o,d),o},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"assets/js/"+({46:"9dcf1fd7",57:"4640ce17",58:"94d9bb9b",90:"8641a95d",105:"1ad6a286",205:"624fcd96",273:"0e0048d6",283:"b7b10d73",303:"a633a1c5",369:"fdf5c168",467:"0b387740",474:"b5a82c26",514:"1be78505",529:"670d863f",557:"bccea385",570:"9e4087bc",608:"4338ef83",651:"1d3e3128",681:"77c04317",766:"5964223c",779:"e281ba72",904:"9a65b867",918:"17896441",930:"fa4d91bf",937:"972d9d57"}[e]||e)+"."+{46:"a7482879",57:"7d523f85",58:"77906501",75:"b180c2ed",90:"9d884453",105:"c906af0f",205:"5ff53491",273:"814bb460",283:"2f26f197",303:"31cbfd2d",369:"dd461a31",467:"83d404fd",474:"0b1837bb",514:"9f2ed220",529:"2575b132",557:"520dc1d6",570:"9416d37e",572:"db095a7b",608:"945739ef",635:"df40857d",651:"35e74495",681:"4e4da2d9",684:"661abb59",766:"b62daf7a",779:"ef2a5e8a",797:"532d421b",904:"31b5a7a6",918:"2cbddb3f",930:"74e82d55",937:"3b91b214"}[e]+".js",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="docs:",n.l=(e,t,r,d)=>{if(a[e])a[e].push(t);else{var f,c;if(void 0!==r)for(var b=document.getElementsByTagName("script"),i=0;i<b.length;i++){var u=b[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){f=u;break}}f||(c=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,n.nc&&f.setAttribute("nonce",n.nc),f.setAttribute("data-webpack",o+r),f.src=e),a[e]=[t];var l=(t,r)=>{f.onerror=f.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),c&&document.head.appendChild(f)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/fastapi-azure-auth/",n.gca=function(e){return e={17896441:"918","9dcf1fd7":"46","4640ce17":"57","94d9bb9b":"58","8641a95d":"90","1ad6a286":"105","624fcd96":"205","0e0048d6":"273",b7b10d73:"283",a633a1c5:"303",fdf5c168:"369","0b387740":"467",b5a82c26:"474","1be78505":"514","670d863f":"529",bccea385:"557","9e4087bc":"570","4338ef83":"608","1d3e3128":"651","77c04317":"681","5964223c":"766",e281ba72:"779","9a65b867":"904",fa4d91bf:"930","972d9d57":"937"}[e]||e,n.p+n.u(e)},(()=>{var e={552:0,532:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^5[35]2$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var d=n.p+n.u(t),f=new Error;n.l(d,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),d=r&&r.target&&r.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+d+")",f.name="ChunkLoadError",f.type=o,f.request=d,a[1](f)}}),"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,d=r[0],f=r[1],c=r[2],b=0;if(d.some((t=>0!==e[t]))){for(a in f)n.o(f,a)&&(n.m[a]=f[a]);if(c)var i=c(n)}for(t&&t(r);b<d.length;b++)o=d[b],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(i)},r=self.webpackChunkdocs=self.webpackChunkdocs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();