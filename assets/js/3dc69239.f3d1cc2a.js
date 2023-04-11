"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[131],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(1163),a=(n(9496),n(9613));const o={},i="ThemeParams",l={unversionedId:"libraries/twa-sdk/components/theme-params",id:"libraries/twa-sdk/components/theme-params",title:"ThemeParams",description:"The component which contains an information about currently used theme by",source:"@site/docs/libraries/twa-sdk/components/theme-params.md",sourceDirName:"libraries/twa-sdk/components",slug:"/libraries/twa-sdk/components/theme-params",permalink:"/docs/libraries/twa-sdk/components/theme-params",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"QRScanner",permalink:"/docs/libraries/twa-sdk/components/qr-scanner"},next:{title:"Viewport",permalink:"/docs/libraries/twa-sdk/components/viewport"}},s={},c=[{value:"Initialization",id:"initialization",level:2},{value:"Requesting fresh theme params",id:"requesting-fresh-theme-params",level:2},{value:"Creating the synchronized instance",id:"creating-the-synchronized-instance",level:2},{value:"Colors",id:"colors",level:2},{value:"Events",id:"events",level:2}],m={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"themeparams"},(0,a.kt)("inlineCode",{parentName:"h1"},"ThemeParams")),(0,a.kt)("p",null,"The component which contains an information about currently used theme by\nthe application. There is more information about this component in this\n",(0,a.kt)("a",{parentName:"p",href:"/docs/features/theme"},"documentation"),"."),(0,a.kt)("h2",{id:"initialization"},"Initialization"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import {ThemeParams} from '@twa.js/sdk';\n  \nconst themeParams = new ThemeParams({\n  backgroundColor: '#ffaabb',\n  buttonColor: '#113222',\n  buttonTextColor: '#aabc33',\n  hintColor: '#00ff00',\n  linkColor: '#a32213',\n  secondaryBackgroundColor: '#000000',\n  textColor: '#aaaaaa',\n});  \n")),(0,a.kt)("h2",{id:"requesting-fresh-theme-params"},"Requesting fresh theme params"),(0,a.kt)("p",null,"To get the fresh theme parameters information, developer could use the\n",(0,a.kt)("inlineCode",{parentName:"p"},"request")," static method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import {Bridge} from '@twa.js/bridge';\n\nThemeParams.request(Bridge.init()).then(console.log);\n\n// Output:\n// { backgroundColor: '#ffaabb', ... }\n")),(0,a.kt)("h2",{id:"creating-the-synchronized-instance"},"Creating the synchronized instance"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeParams")," is capable of returning an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeParams")," which\nis synchronized with its actual state in the Telegram application. To\nget it, use static the ",(0,a.kt)("inlineCode",{parentName:"p"},"synced()")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import {ThemeParams} from '@twa.js/sdk';\nimport {Bridge} from '@twa.js/bridge';\n\nconst themeParams = ThemeParams.synced(Bridge.init(), {\n  backgroundColor: '#ffaacc',\n  buttonColor: '#1123aa',\n  buttonTextColor: '#aadfbb',\n  hintColor: '#113123',\n  linkColor: '#ffaacc',\n  secondaryBackgroundColor: '#cccccc',\n  textColor: '#000000',\n});\n\n// themeParams will be automatically updated in case, Telegram changed\n// theme parameters.\n")),(0,a.kt)("h2",{id:"colors"},"Colors"),(0,a.kt)("p",null,"List of colors, provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeParams"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"backgroundColor: RGB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"buttonColor: RGB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"buttonTextColor: RGB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hintColor: RGB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"linkColor: RGB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"secondaryBackgroundColor: RGB | null")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"textColor: RGB"))),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("p",null,"Events available for ",(0,a.kt)("a",{parentName:"p",href:"../about#events"},"listening"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"change: () => void"))))}u.isMDXComponent=!0}}]);