"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var i=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=r,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return t?i.createElement(f,a(a({ref:n},p),{},{components:t})):i.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9131:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(1163),r=(t(9496),t(9613));const o={},a="ClosingConfirmation",l={unversionedId:"libraries/twa-sdk/components/closing-confirmation",id:"libraries/twa-sdk/components/closing-confirmation",title:"ClosingConfirmation",description:"Controls the application closing behavior. There is more",source:"@site/docs/libraries/twa-sdk/components/closing-confirmation.md",sourceDirName:"libraries/twa-sdk/components",slug:"/libraries/twa-sdk/components/closing-confirmation",permalink:"/ru/docs/libraries/twa-sdk/components/closing-confirmation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"BackButton",permalink:"/ru/docs/libraries/twa-sdk/components/back-button"},next:{title:"HapticFeedback",permalink:"/ru/docs/libraries/twa-sdk/components/haptic-feedback"}},s={},c=[{value:"Initialization",id:"initialization",level:2},{value:"Enabling and disabling",id:"enabling-and-disabling",level:2},{value:"Events",id:"events",level:2}],p={toc:c},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"closingconfirmation"},(0,r.kt)("inlineCode",{parentName:"h1"},"ClosingConfirmation")),(0,r.kt)("p",null,"Controls the application closing behavior. There is more\ninformation about this component in this\n",(0,r.kt)("a",{parentName:"p",href:"../../../features/closing-behavior"},"documentation"),"."),(0,r.kt)("h2",{id:"initialization"},"Initialization"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {ClosingConfirmation} from '@twa.js/sdk';  \nimport {Bridge} from '@twa.js/bridge';  \n  \nconst closingConfirmation = new ClosingConfirmation(Bridge.init());  \n")),(0,r.kt)("h2",{id:"enabling-and-disabling"},"Enabling and disabling"),(0,r.kt)("p",null,"To enable and disable closing confirmation, it is required to use ",(0,r.kt)("inlineCode",{parentName:"p"},"enable()"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"disable()")," functions. These methods update the ",(0,r.kt)("inlineCode",{parentName:"p"},"ClosingConfirmation"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"isEnabled")," property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"closingConfirmation.enable();  \nconsole.log(closingConfirmation.isEnabled); // true  \n  \nclosingConfirmation.disable();  \nconsole.log(closingConfirmation.isEnabled); // false  \n")),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("p",null,"Events available for the ",(0,r.kt)("a",{parentName:"p",href:"../about#events"},"listening"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isEnabledChanged: (isEnabled: boolean) => void"))))}m.isMDXComponent=!0}}]);