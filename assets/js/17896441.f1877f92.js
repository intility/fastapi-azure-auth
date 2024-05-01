"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[401],{6905:(e,t,a)=>{a.r(t),a.d(t,{default:()=>J});var n=a(6540),l=a(53),s=a(8168),i=a(1312),r=a(5489);function o(e){const{permalink:t,title:a,subLabel:l}=e;return n.createElement(r.A,{className:"pagination-nav__link",to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}function c(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(o,(0,s.A)({},t,{subLabel:n.createElement(i.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(o,(0,s.A)({},a,{subLabel:n.createElement(i.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var d=a(4586),m=a(7712),u=a(6758);const b={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(i.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(i.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=b[e.versionMetadata.banner];return n.createElement(t,e)}function v(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(i.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.A,{to:a,onClick:l},n.createElement(i.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function g(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:s}}=(0,d.A)(),{pluginId:i}=(0,m.vT)({failfast:!0}),{savePreferredVersionName:r}=(0,u.g1)(i),{latestDocSuggestion:o,latestVersionSuggestion:c}=(0,m.HW)(i),b=o??(g=c).docs.find((e=>e.id===g.mainDocId));var g;return n.createElement("div",{className:(0,l.A)(t,u.GN.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(h,{siteTitle:s,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(v,{versionLabel:c.label,to:b.path,onClick:()=>r(c.name)})))}function p(e){let{className:t}=e;const a=(0,u.rv)();return a.banner?n.createElement(g,{className:t,versionMetadata:a}):null}function E(e){let{className:t}=e;const a=(0,u.rv)();return a.badge?n.createElement("span",{className:(0,l.A)(t,u.GN.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}var N=a(8139);function f(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(i.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function A(e){let{lastUpdatedBy:t}=e;return n.createElement(i.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:u.GN.common.lastUpdated},n.createElement(i.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(f,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(A,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}const C={iconEdit:"iconEdit_dcUD"};function L(e){let{className:t,...a}=e;return n.createElement("svg",(0,s.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.A)(C.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function k(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.GN.common.editThisPage},n.createElement(L,null),n.createElement(i.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const T={tag:"tag_hD8n",tagRegular:"tagRegular_D6E_",tagWithCount:"tagWithCount_i0QQ"};function U(e){const{permalink:t,name:a,count:s}=e;return n.createElement(r.A,{href:t,className:(0,l.A)(T.tag,{[T.tagRegular]:!s,[T.tagWithCount]:s})},a,s&&n.createElement("span",null,s))}const y={tags:"tags_XVD_",tag:"tag_JSN8"};function w(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(i.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.A)(y.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:y.tag},n.createElement(U,{name:t,permalink:a}))}))))}const x={lastUpdated:"lastUpdated_foO9"};function H(e){return n.createElement("div",{className:(0,l.A)(u.GN.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(w,e)))}function B(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:i}=e;return n.createElement("div",{className:(0,l.A)(u.GN.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(k,{editUrl:t})),n.createElement("div",{className:(0,l.A)("col",x.lastUpdated)},(a||s)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:s})))}function I(e){const{content:t}=e,{metadata:a}=t,{editUrl:s,lastUpdatedAt:i,formattedLastUpdatedAt:r,lastUpdatedBy:o,tags:c}=a,d=c.length>0,m=!!(s||i||o);return d||m?n.createElement("footer",{className:(0,l.A)(u.GN.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(H,{tags:c}),m&&n.createElement(B,{editUrl:s,lastUpdatedAt:i,lastUpdatedBy:o,formattedLastUpdatedAt:r})):null}function M(e){let{toc:t,className:a,linkClassName:l,isChild:s}=e;return t.length?n.createElement("ul",{className:s?void 0:a},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(M,{isChild:!0,toc:e.children,className:a,linkClassName:l}))))):null}function D(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:r,maxHeadingLevel:o,...c}=e;const d=(0,u.pN)(),m=r??d.tableOfContents.minHeadingLevel,b=o??d.tableOfContents.maxHeadingLevel,h=(0,u.h9)({toc:t,minHeadingLevel:m,maxHeadingLevel:b}),v=(0,n.useMemo)((()=>{if(l&&i)return{linkClassName:l,linkActiveClassName:i,minHeadingLevel:m,maxHeadingLevel:b}}),[l,i,m,b]);return(0,u.i3)(v),n.createElement(M,(0,s.A)({toc:h,className:a,linkClassName:l},c))}const O={tableOfContents:"tableOfContents_cNA8",docItemContainer:"docItemContainer_WX_Y"},S="table-of-contents__link toc-highlight",V="table-of-contents__link--active";function W(e){let{className:t,...a}=e;return n.createElement("div",{className:(0,l.A)(O.tableOfContents,"thin-scrollbar",t)},n.createElement(D,(0,s.A)({},a,{linkClassName:S,linkActiveClassName:V})))}const G={tocCollapsible:"tocCollapsible_jdIR",tocCollapsibleButton:"tocCollapsibleButton_Fzxq",tocCollapsibleContent:"tocCollapsibleContent_MpvI",tocCollapsibleExpanded:"tocCollapsibleExpanded_laf4"};function F(e){let{toc:t,className:a,minHeadingLevel:s,maxHeadingLevel:r}=e;const{collapsed:o,toggleCollapsed:c}=(0,u.uW)({initialState:!0});return n.createElement("div",{className:(0,l.A)(G.tocCollapsible,{[G.tocCollapsibleExpanded]:!o},a)},n.createElement("button",{type:"button",className:(0,l.A)("clean-btn",G.tocCollapsibleButton),onClick:c},n.createElement(i.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.Nt,{lazy:!0,className:G.tocCollapsibleContent,collapsed:o},n.createElement(D,{toc:t,minHeadingLevel:s,maxHeadingLevel:r})))}var R=a(39);const z={docItemContainer:"docItemContainer_vinB",docItemCol:"docItemCol_DM6M",tocMobile:"tocMobile_TmEX"},P={breadcrumbsContainer:"breadcrumbsContainer_Xlws",breadcrumbsItemLink:"breadcrumbsItemLink_e5ie"};var X=a(6025);function q(e){let{children:t,href:a}=e;const s=(0,l.A)("breadcrumbs__link",P.breadcrumbsItemLink);return a?n.createElement(r.A,{className:s,href:a},t):n.createElement("span",{className:s},t)}function Q(e){let{children:t,active:a}=e;return n.createElement("li",{className:(0,l.A)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t)}function j(){const e=(0,X.A)("/");return n.createElement(Q,null,n.createElement(q,{href:e},"\ud83c\udfe0"))}function $(){const e=(0,u.OF)(),t=(0,u.Dt)();return e?n.createElement("nav",{className:(0,l.A)(u.GN.docs.docBreadcrumbs,P.breadcrumbsContainer),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs"},t&&n.createElement(j,null),e.map(((t,a)=>n.createElement(Q,{key:a,active:a===e.length-1},n.createElement(q,{href:t.href},t.label)))))):null}function J(e){const{content:t}=e,{metadata:a,frontMatter:s,assets:i}=t,{keywords:r,hide_title:o,hide_table_of_contents:d,toc_min_heading_level:m,toc_max_heading_level:b}=s,{description:h,title:v}=a,g=i.image??s.image,f=!o&&void 0===t.contentTitle,A=(0,u.lW)(),_=!d&&t.toc&&t.toc.length>0,C=_&&("desktop"===A||"ssr"===A);return n.createElement(n.Fragment,null,n.createElement(N.A,{title:v,description:h,keywords:r,image:g}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.A)("col",{[z.docItemCol]:!d})},n.createElement(p,null),n.createElement("div",{className:z.docItemContainer},n.createElement("article",null,n.createElement($,null),n.createElement(E,null),_&&n.createElement(F,{toc:t.toc,minHeadingLevel:m,maxHeadingLevel:b,className:(0,l.A)(u.GN.docs.docTocMobile,z.tocMobile)}),n.createElement("div",{className:(0,l.A)(u.GN.docs.docMarkdown,"markdown")},f&&n.createElement("header",null,n.createElement(R.A,{as:"h1"},v)),n.createElement(t,null)),n.createElement(I,e)),n.createElement(c,{previous:a.previous,next:a.next}))),C&&n.createElement("div",{className:"col col--3"},n.createElement(W,{toc:t.toc,minHeadingLevel:m,maxHeadingLevel:b,className:u.GN.docs.docTocDesktop}))))}},39:(e,t,a)=>{a.d(t,{A:()=>d});var n=a(8168),l=a(6540),s=a(53),i=a(1312),r=a(6758);const o={anchorWithStickyNavbar:"anchorWithStickyNavbar_mojV",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_R0VQ"};function c(e){let{as:t,id:a,...c}=e;const{navbar:{hideOnScroll:d}}=(0,r.pN)();return a?l.createElement(t,(0,n.A)({},c,{className:(0,s.A)("anchor",{[o.anchorWithHideOnScrollNavbar]:d,[o.anchorWithStickyNavbar]:!d}),id:a}),c.children,l.createElement("a",{className:"hash-link",href:`#${a}`,title:(0,i.T)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,c)}function d(e){let{as:t,...a}=e;return"h1"===t?l.createElement("h1",(0,n.A)({},a,{id:void 0}),a.children):l.createElement(c,(0,n.A)({as:t},a))}}}]);