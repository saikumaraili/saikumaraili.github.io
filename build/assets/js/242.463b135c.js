"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[242],{6535:(e,t,s)=>{s.d(t,{A:()=>f});var a=s(6540),n=s(4164),r=s(781),l=s(4581),i=s(8774),o=s(1312),c=s(6347),m=s(9169);function d(e){const{pathname:t}=(0,c.zy)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.ys)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var h=s(4848);function g(e){let{sidebar:t}=e;const s=d(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,n.A)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,n.A)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,h.jsx)("ul",{className:(0,n.A)(u.sidebarItemList,"clean-list"),children:s.map((e=>(0,h.jsx)("li",{className:u.sidebarItem,children:(0,h.jsx)(i.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var x=s(5600);function j(e){let{sidebar:t}=e;const s=d(t.items);return(0,h.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(i.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function p(e){return(0,h.jsx)(x.GX,{component:j,props:e})}function b(e){let{sidebar:t}=e;const s=(0,l.l)();return t?.items.length?"mobile"===s?(0,h.jsx)(p,{sidebar:t}):(0,h.jsx)(g,{sidebar:t}):null}function f(e){const{sidebar:t,toc:s,children:a,...l}=e,i=t&&t.items.length>0;return(0,h.jsx)(r.A,{...l,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(b,{sidebar:t}),(0,h.jsx)("main",{className:(0,n.A)("col",{"col--7":i,"col--9 col--offset-1":!i}),children:a}),s&&(0,h.jsx)("div",{className:"col col--2",children:s})]})})})}},4651:(e,t,s)=>{s.d(t,{A:()=>F});s(6540);var a=s(4164),n=s(7131),r=s(4848);function l(e){let{children:t,className:s}=e;return(0,r.jsx)("article",{className:s,children:t})}var i=s(8774);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:s,isBlogPostPage:l}=(0,n.e)(),{permalink:c,title:m}=s,d=l?"h1":"h2";return(0,r.jsx)(d,{className:(0,a.A)(o.title,t),children:l?m:(0,r.jsx)(i.A,{to:c,children:m})})}var m=s(1312),d=s(5846),u=s(6266);const h={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const s=function(){const{selectMessage:e}=(0,d.W)();return t=>{const s=Math.ceil(t);return e(s,(0,m.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}}();return(0,r.jsx)(r.Fragment,{children:s(t)})}function x(e){let{date:t,formattedDate:s}=e;return(0,r.jsx)("time",{dateTime:t,children:s})}function j(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function p(e){let{className:t}=e;const{metadata:s}=(0,n.e)(),{date:l,readingTime:i}=s,o=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,a.A)(h.container,"margin-vert--md",t),children:[(0,r.jsx)(x,{date:l,formattedDate:(c=l,o.format(new Date(c)))}),void 0!==i&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{}),(0,r.jsx)(g,{readingTime:i})]})]});var c}function b(e){return e.href?(0,r.jsx)(i.A,{...e}):(0,r.jsx)(r.Fragment,{children:e.children})}function f(e){let{author:t,className:s}=e;const{name:n,title:l,url:i,imageURL:o,email:c}=t,m=i||c&&`mailto:${c}`||void 0;return(0,r.jsxs)("div",{className:(0,a.A)("avatar margin-bottom--sm",s),children:[o&&(0,r.jsx)(b,{href:m,className:"avatar__photo-link",children:(0,r.jsx)("img",{className:"avatar__photo",src:o,alt:n})}),n&&(0,r.jsxs)("div",{className:"avatar__intro",children:[(0,r.jsx)("div",{className:"avatar__name",children:(0,r.jsx)(b,{href:m,children:(0,r.jsx)("span",{children:n})})}),l&&(0,r.jsx)("small",{className:"avatar__subtitle",children:l})]})]})}const v={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){let{className:t}=e;const{metadata:{authors:s},assets:l}=(0,n.e)();if(0===s.length)return null;const i=s.every((e=>{let{name:t}=e;return!t}));return(0,r.jsx)("div",{className:(0,a.A)("margin-top--md margin-bottom--sm",i?v.imageOnlyAuthorRow:"row",t),children:s.map(((e,t)=>(0,r.jsx)("div",{className:(0,a.A)(!i&&"col col--6",i?v.imageOnlyAuthorCol:v.authorCol),children:(0,r.jsx)(f,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(p,{}),(0,r.jsx)(A,{})]})}var _=s(440),k=s(5533);function P(e){let{children:t,className:s}=e;const{isBlogPostPage:l}=(0,n.e)();return(0,r.jsx)("div",{id:l?_.blogPostContainerID:void 0,className:(0,a.A)("markdown",s),children:(0,r.jsx)(k.A,{children:t})})}var w=s(7559),T=s(4336),I=s(2053);function y(){return(0,r.jsx)("b",{children:(0,r.jsx)(m.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function L(e){const{blogPostTitle:t,...s}=e;return(0,r.jsx)(i.A,{"aria-label":(0,m.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...s,children:(0,r.jsx)(y,{})})}function C(){const{metadata:e,isBlogPostPage:t}=(0,n.e)(),{tags:s,title:l,editUrl:i,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:m}=e,d=!t&&o,u=s.length>0;if(!(u||d||i))return null;if(t){const e=!!(i||m||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,a.A)("row","margin-top--sm",w.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(I.A,{tags:s})})}),e&&(0,r.jsx)(T.A,{className:(0,a.A)("margin-top--sm",w.G.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:m,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,a.A)("col",{"col--9":d}),children:(0,r.jsx)(I.A,{tags:s})}),d&&(0,r.jsx)("div",{className:(0,a.A)("col text--right",{"col--3":u}),children:(0,r.jsx)(L,{blogPostTitle:l,to:e.permalink})})]})}function F(e){let{children:t,className:s}=e;const i=function(){const{isBlogPostPage:e}=(0,n.e)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(l,{className:(0,a.A)(i,s),children:[(0,r.jsx)(N,{}),(0,r.jsx)(P,{children:t}),(0,r.jsx)(C,{})]})}},9022:(e,t,s)=>{s.d(t,{A:()=>l});s(6540);var a=s(4164),n=s(8774),r=s(4848);function l(e){const{permalink:t,title:s,subLabel:l,isNext:i}=e;return(0,r.jsxs)(n.A,{className:(0,a.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,r.jsx)("div",{className:"pagination-nav__label",children:s})]})}},2053:(e,t,s)=>{s.d(t,{A:()=>o});s(6540);var a=s(4164),n=s(1312),r=s(6133);const l={tags:"tags_jXut",tag:"tag_QGVx"};var i=s(4848);function o(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(n.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,a.A)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:l.tag,children:(0,i.jsx)(r.A,{...e})},e.permalink)))})]})}},7131:(e,t,s)=>{s.d(t,{e:()=>o,i:()=>i});var a=s(6540),n=s(9532),r=s(4848);const l=a.createContext(null);function i(e){let{children:t,content:s,isBlogPostPage:n=!1}=e;const i=function(e){let{content:t,isBlogPostPage:s}=e;return(0,a.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:s})),[t,s])}({content:s,isBlogPostPage:n});return(0,r.jsx)(l.Provider,{value:i,children:t})}function o(){const e=(0,a.useContext)(l);if(null===e)throw new n.dV("BlogPostProvider");return e}},5846:(e,t,s)=>{s.d(t,{W:()=>c});var a=s(6540),n=s(4586);const r=["zero","one","two","few","many","other"];function l(e){return r.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.A)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=o();return{selectMessage:(t,s)=>function(e,t,s){const a=e.split("|");if(1===a.length)return a[0];a.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=s.select(t),r=s.pluralForms.indexOf(n);return a[Math.min(r,a.length-1)]}(s,t,e)}}}}]);