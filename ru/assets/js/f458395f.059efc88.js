"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[904],{9613:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(9496);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=i,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2441:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(1163),i=(a(9496),a(9613));const r={sidebar_label:"@twa.js/init-data",sidebar_position:3},o="@twa.js/init-data",s={unversionedId:"libraries/twa-init-data",id:"libraries/twa-init-data",title:"@twa.js/init-data",description:"The package which provides utilities and types to work with the Telegram Web",source:"@site/docs/libraries/twa-init-data.mdx",sourceDirName:"libraries",slug:"/libraries/twa-init-data",permalink:"/ru/docs/libraries/twa-init-data",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"@twa.js/init-data",sidebar_position:3},sidebar:"sidebar",previous:{title:"WebApp",permalink:"/ru/docs/libraries/twa-sdk/components/web-app"},next:{title:"@twa.js/bridge",permalink:"/ru/docs/libraries/twa-bridge"}},l={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Parsing",id:"parsing",level:3},{value:"Validation",id:"validation",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},u=p("LibraryBadges"),c=p("NpmInstall"),m={toc:d},h="wrapper";function f(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"twajsinit-data"},"@twa.js/init-data"),(0,i.kt)("p",null,"The package which provides utilities and types to work with the Telegram Web\nApps init data. You can learn more about init data in this\n",(0,i.kt)("a",{parentName:"p",href:"../launch-params/init-data/about"},"documentation"),"."),(0,i.kt)(u,{pkg:"@twa.js/init-data",mdxType:"LibraryBadges"}),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)(c,{pkg:"@twa.js/init-data",mdxType:"NpmInstall"}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"parsing"},"Parsing"),(0,i.kt)("p",null,"This library contains the function ",(0,i.kt)("inlineCode",{parentName:"p"},"parseInitData")," which is able to extract\ninit data information from query parameters. Here comes the example of usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import {parseInitData} from '@twa.js/init-data';\n\n// Let's imagine, we have init data in a raw format like this. Web Apps are\n// sending it in the exact same format.\nconst initData =\n  'query_id=AAHdF6IQAAAAAN0XohDhrOrc' +\n  '&user=%7B%22id%22%3A279058397%2C%22first_name%22%3A%22Vladislav%22%2C%22last_name%22%3A%22Kibenko%22%2C%22username%22%3A%22vdkfrost%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%7D' +\n  '&auth_date=1662771648' +\n  '&hash=c501b71e775f74ce10e377dea85a7ea24ecd640b223ea86dfe453e0eaed2e2b2';\n\n// Extract init data.\nconsole.log(parseInitData(initData));\n// or\nconsole.log(parseInitData(new URLSearchParams(initData)));\n\n// Output:\n// {\n//   authDate: 2022-09-10T01:00:48.000Z,\n//   hash: 'c501b71e775f74ce10e377dea85a7ea24ecd640b223ea86dfe453e0eaed2e2b2',\n//   queryId: 'AAHdF6IQAAAAAN0XohDhrOrc',\n//   user: {\n//     id: 279058397,\n//     firstName: 'Vladislav',\n//     lastName: 'Kibenko',\n//     username: 'vdkfrost',\n//     languageCode: 'ru',\n//     isPremium: true\n//   }\n// }\n")),(0,i.kt)("p",null,"Function extracts required parameters and automatically validates their types.\nIt will throw an error in case, some property has invalid type or value."),(0,i.kt)("h3",{id:"validation"},"Validation"),(0,i.kt)("p",null,"To validate the init data signature, the function ",(0,i.kt)("inlineCode",{parentName:"p"},"validate")," is used. It\nexpects passing init data presented in raw format (search params) and\nthrows an error in some cases."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import {validate} from '@twa.js/init-data/validate';\n\nconst secretToken = '5768337691:AAH5YkoiEuPk8-FZa32hStHTqXiLPtAEhx8';\nconst initData =\n  'query_id=AAHdF6IQAAAAAN0XohDhrOrc' +\n  '&user=%7B%22id%22%3A279058397%2C%22first_name%22%3A%22Vladislav%22%2C%22last_name%22%3A%22Kibenko%22%2C%22username%22%3A%22vdkfrost%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%7D' +\n  '&auth_date=1662771648' +\n  '&hash=c501b71e775f74ce10e377dea85a7ea24ecd640b223ea86dfe453e0eaed2e2b2';\n\nvalidate(initData, secretToken);\n")),(0,i.kt)("p",null,"Function will throw an error in one of these cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"auth_date" should present integer')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"auth_date" is empty or not found')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"hash" is empty or not found')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Signature is invalid")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Init data expired"))),(0,i.kt)("p",null,"By default, the function checks the init data expiration. The default\nexpiration duration is 1 day (86_400 seconds). It is recommended to always\ncheck to init data expiration as long as it could be stolen, but still valid.\nTo disable this feature, pass ",(0,i.kt)("inlineCode",{parentName:"p"},"{expiresIn: 0}")," as the third argument."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"As long as there is no reason to validate init data on the client side, you are\nable to use validation utilities only in Node. Importing\n",(0,i.kt)("inlineCode",{parentName:"p"},"@twa.js/init-data/validation")," will lead to error as long as browser has\nno such package as ",(0,i.kt)("inlineCode",{parentName:"p"},"node:crypto"),".")))}f.isMDXComponent=!0}}]);