"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[342],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=r,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||a;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(1163),r=(n(9496),n(9613));const a={sidebar_label:"@twa.js/bridge",sidebar_position:5},o="@twa.js/bridge",s={unversionedId:"libraries/twa-bridge",id:"libraries/twa-bridge",title:"@twa.js/bridge",description:"The package which provides utilities to simplify communication between Web App",source:"@site/docs/libraries/twa-bridge.mdx",sourceDirName:"libraries",slug:"/libraries/twa-bridge",permalink:"/docs/libraries/twa-bridge",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"@twa.js/bridge",sidebar_position:5},sidebar:"sidebar",previous:{title:"@twa.js/init-data",permalink:"/docs/libraries/twa-init-data"},next:{title:"init-data-golang",permalink:"/docs/libraries/init-data-golang"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Init",id:"init",level:2},{value:"Debugging",id:"debugging",level:3},{value:"Target origin",id:"target-origin",level:3},{value:"Calling methods",id:"calling-methods",level:2},{value:"With <code>Bridge</code>",id:"with-bridge",level:3},{value:"Without <code>Bridge</code>",id:"without-bridge",level:3},{value:"Listening to events",id:"listening-to-events",level:2},{value:"Checking method support",id:"checking-method-support",level:2},{value:"Higher-level control",id:"higher-level-control",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=d("LibraryBadges"),u=d("NpmInstall"),g={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"twajsbridge"},"@twa.js/bridge"),(0,r.kt)(c,{pkg:"@twa.js/bridge",mdxType:"LibraryBadges"}),(0,r.kt)("p",null,"The package which provides utilities to simplify communication between Web App\nand Telegram native application. It also solves some across-platform data\ndifference problems to protect developers' code and save their time."),(0,r.kt)("p",null,"Developers could also use this package to make their SDK as long as it provides\nthe lowest level of control over the cross applications' communication."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(u,{pkg:"@twa.js/bridge",mdxType:"NpmInstall"}),(0,r.kt)("h2",{id:"init"},"Init"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Bridge")," component has a relatively simple API. Its primary purpose is to\nprovide communication layer between Telegram native and client applications,\nso you could call native methods and receive events from the Telegram\napplication."),(0,r.kt)("p",null,"To start using ",(0,r.kt)("inlineCode",{parentName:"p"},"Bridge"),", it is enough to use its static ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {Bridge} from '@twa.js/bridge';\n\nconst bridge = Bridge.init();\n")),(0,r.kt)("p",null,"This function will append special handler to global window object, which is\nused by Telegram native application and make this instance work correctly."),(0,r.kt)("h3",{id:"debugging"},"Debugging"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Bridge")," supports debug mode which outputs additional log messages into the\nconsole. By default, this mode is disabled. To enable it, it is required to\npass the ",(0,r.kt)("inlineCode",{parentName:"p"},"debug: true")," option while creating a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Bridge")," instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {Bridge} from '@twa.js/bridge';\n\nconst bridge = Bridge.init({debug: true});\n")),(0,r.kt)("p",null,"Or, in case when an instance already exists, just change its ",(0,r.kt)("inlineCode",{parentName:"p"},"debug")," property\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {Bridge} from '@twa.js/bridge';\n\nconst bridge = Bridge.init({debug: true});\nbridge.debug = true;\n")),(0,r.kt)("h3",{id:"target-origin"},"Target origin"),(0,r.kt)("p",null,"In case, the current bridge instance is used in a browser environment (iframe),\nwe use such function as ",(0,r.kt)("inlineCode",{parentName:"p"},"window.parent.postMessage")," which requires passing\ntarget origin to prevent sending events to untrusted parent iframes. By\ndefault, bridge uses such origin as ",(0,r.kt)("inlineCode",{parentName:"p"},"https://web.telegram.org"),". To allow\nsending events to other origins, you should use ",(0,r.kt)("inlineCode",{parentName:"p"},"targetOrigin")," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const unsafeBridge = Bridge.init({targetOrigin: '*'});\n// or\nconst safeBridge = Bridge.init({targetOrigin: 'https://myendpoint.org'});\n")),(0,r.kt)("p",null,"It is strongly recommended not to override this value as long as it could lead\nto security issues. Specify this value only for test purposes."),(0,r.kt)("h2",{id:"calling-methods"},"Calling methods"),(0,r.kt)("h3",{id:"with-bridge"},"With ",(0,r.kt)("inlineCode",{parentName:"h3"},"Bridge")),(0,r.kt)("p",null,"To call Web Apps methods, it is enough to call ",(0,r.kt)("inlineCode",{parentName:"p"},"Bridge"),"s ",(0,r.kt)("inlineCode",{parentName:"p"},"postEvent")," method.\nThis method automatically finds a correct way of sending events which depends\non the current environment. Let's take a look at a simple example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {Bridge} from '@twa.js/bridge';\n\nconst bridge = Bridge.init();\n\n// Close current application.\nbridge.postEvent('web_app_close');\n")),(0,r.kt)("p",null,"Some methods don't require parameters and can be called without an additional\nsecond parameter representing the event payload. But some events do require it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {Bridge} from '@twa.js/bridge';\n\nconst bridge = Bridge.init();\n\n// Open new popup.\nbridge.postEvent('web_app_open_popup', {\n  title: 'Web Apps Notification',\n  message: 'I love Web Apps',\n  buttons: [{type: 'ok', id: 'ok'}]\n});\n")),(0,r.kt)("h3",{id:"without-bridge"},"Without ",(0,r.kt)("inlineCode",{parentName:"h3"},"Bridge")),(0,r.kt)("p",null,"This package allows calling methods without creating a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Bridge")," instance.\nTo perform this action, you should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"postEvent")," function which has the\nsame type as ",(0,r.kt)("inlineCode",{parentName:"p"},"bridge.postEvent")," (actually, the bridge uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"postEvent"),"\nfunction internally):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {postEvent} from '@twa.js/bridge';\n\npostEvent('web_app_setup_back_button', {is_visible: true});\n")),(0,r.kt)("p",null,"Nevertheless, sometimes you need to handle events sent from the native app\nemitted as a response to the called method. For example, you would like to\ncall the ",(0,r.kt)("inlineCode",{parentName:"p"},"web_app_request_theme")," method. As a result, the native app will\nemit a ",(0,r.kt)("inlineCode",{parentName:"p"},"theme_changed")," event. Using the default bridge init flow, this event\nwill be captured by the bridge instance. We can't say the same about the bare\n",(0,r.kt)("inlineCode",{parentName:"p"},"postEvent")," function, so, do not forget about the response event (if it exists)\nhandling process."),(0,r.kt)("h2",{id:"listening-to-events"},"Listening to events"),(0,r.kt)("p",null,"Events tracking is rather simple thing too. For this purpose, we could\nuse such methods as ",(0,r.kt)("inlineCode",{parentName:"p"},"on")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe"),". To remove event listeners, we\nuse ",(0,r.kt)("inlineCode",{parentName:"p"},"off")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"unsubscribe"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {BridgeEventListener, BridgeEventName, Bridge} from '@twa.js/bridge';\n\nconst bridge = Bridge.init();\nconst listener: BridgeEventListener<'viewport_changed'> = payload => {\n  console.log('Viewport changed:', payload)\n};\nconst subListener = (event: BridgeEventName, ...args: any[]) => {\n  console.log('Event was called:', event, ...args);\n};\n\n// Add event listener.\nbridge.on('viewport_changed', listener);\n\n// Add listener for all events.\nbridge.subscribe(subListener);\n\n// Remove event listeners.\nbridge.off('viewport_changed', listener);\nbridge.unsubscribe(subListener);\n")),(0,r.kt)("h2",{id:"checking-method-support"},"Checking method support"),(0,r.kt)("p",null,"Bridge itself does not check if the Web Apps method is supported by the current\nversion of the platform. To check, if the method is supported, you could use\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"supports")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {supports} from '@twa.js/bridge';\n\nsupports('web_app_trigger_haptic_feedback', '6.0'); // false\nsupports('web_app_trigger_haptic_feedback', '6.1'); // true\n")),(0,r.kt)("p",null,"It is recommended to use this function before calling Web Apps methods to\nprevent applications from stalling and other unexpected behavior."),(0,r.kt)("h2",{id:"higher-level-control"},"Higher-level control"),(0,r.kt)("p",null,"As long as the bridge provides only low-level control, we recommend using\n",(0,r.kt)("a",{parentName:"p",href:"twa-sdk/about"},"SDK")," which implements bridge methods. It also provides\nadditional parameter checks, more intuitive method names, and easier usage."))}h.isMDXComponent=!0}}]);