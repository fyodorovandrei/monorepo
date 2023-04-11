"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[122],{9613:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>s});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),l=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},g=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",Q={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,g=A(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,s=u["".concat(i,".").concat(d)]||u[d]||Q[d]||a;return n?o.createElement(s,p(p({ref:t},g),{},{components:n})):o.createElement(s,p({ref:t},g))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=d;var A={};for(var i in t)hasOwnProperty.call(t,i)&&(A[i]=t[i]);A.originalType=e,A[u]="string"==typeof e?e:r,p[1]=A;for(var l=2;l<a;l++)p[l]=n[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>Q,frontMatter:()=>a,metadata:()=>A,toc:()=>l});var o=n(1163),r=(n(9496),n(9613));const a={sidebar_position:5},p="Popup",A={unversionedId:"features/popup",id:"features/popup",title:"Popup",description:"Popups are windows, which are opened on the top of Web App. They provide another",source:"@site/docs/features/popup.md",sourceDirName:"features",slug:"/features/popup",permalink:"/ru/docs/features/popup",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sidebar",previous:{title:"Main button",permalink:"/ru/docs/features/main-button"},next:{title:"Theme",permalink:"/ru/docs/features/theme"}},i={},l=[],g={toc:l},u="wrapper";function Q(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,o.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"popup"},"Popup"),(0,r.kt)("p",null,"Popups are windows, which are opened on the top of Web App. They provide another\nlevel of interaction with user, so developer will not have to implement them by\nhimself. Nevertheless, popups are not that flexible currently."),(0,r.kt)("p",null,"Platform allows opening new popups with custom ",(0,r.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"buttons"),".\nThese parameters restrictions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"title")," - length is from 0 to 64 symbols"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message")," - length is from 1 to 256 symbols"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"buttons")," - count is from 1 to 3 buttons")),(0,r.kt)("p",null,"Developer is allowed to set each button's ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),". Maximum length of\n",(0,r.kt)("inlineCode",{parentName:"p"},"text")," is 64 symbols. ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," determines how button should look like. You can\nalso use special types, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"ok"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"close")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cancel"),". Telegram will\nuse special colors for them and specify localized text according to button\ntype."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"popup.png",src:n(1503).Z,width:"480",height:"233"})),(0,r.kt)("p",null,"When popup is closed, Telegram will emit connected event with clicked button id.\nTelegram will also emit event in case, no buttons were clicked."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru/docs/apps-communication/methods#web_app_open_popup"},"Web App method")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru/docs/apps-communication/events#popup_closed"},"Emitted event"))))}Q.isMDXComponent=!0},1503:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);