"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[545],{9613:(t,e,A)=>{A.d(e,{Zo:()=>s,kt:()=>p});var r=A(9496);function n(t,e,A){return e in t?Object.defineProperty(t,e,{value:A,enumerable:!0,configurable:!0,writable:!0}):t[e]=A,t}function a(t,e){var A=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),A.push.apply(A,r)}return A}function u(t){for(var e=1;e<arguments.length;e++){var A=null!=arguments[e]?arguments[e]:{};e%2?a(Object(A),!0).forEach((function(e){n(t,e,A[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(A)):a(Object(A)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(A,e))}))}return t}function b(t,e){if(null==t)return{};var A,r,n=function(t,e){if(null==t)return{};var A,r,n={},a=Object.keys(t);for(r=0;r<a.length;r++)A=a[r],e.indexOf(A)>=0||(n[A]=t[A]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)A=a[r],e.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(t,A)&&(n[A]=t[A])}return n}var o=r.createContext({}),i=function(t){var e=r.useContext(o),A=e;return t&&(A="function"==typeof t?t(e):u(u({},e),t)),A},s=function(t){var e=i(t.components);return r.createElement(o.Provider,{value:e},t.children)},d="mdxType",l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var A=t.components,n=t.mdxType,a=t.originalType,o=t.parentName,s=b(t,["components","mdxType","originalType","parentName"]),d=i(A),c=n,p=d["".concat(o,".").concat(c)]||d[c]||l[c]||a;return A?r.createElement(p,u(u({ref:e},s),{},{components:A})):r.createElement(p,u({ref:e},s))}));function p(t,e){var A=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=A.length,u=new Array(a);u[0]=c;var b={};for(var o in e)hasOwnProperty.call(e,o)&&(b[o]=e[o]);b.originalType=t,b[d]="string"==typeof t?t:n,u[1]=b;for(var i=2;i<a;i++)u[i]=A[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,A)}c.displayName="MDXCreateElement"},983:(t,e,A)=>{A.r(e),A.d(e,{assets:()=>o,contentTitle:()=>u,default:()=>l,frontMatter:()=>a,metadata:()=>b,toc:()=>i});var r=A(1163),n=(A(9496),A(9613));const a={sidebar_position:4},u="Main button",b={unversionedId:"features/main-button",id:"features/main-button",title:"Main button",description:"Main button is placed at the bottom of Telegram interface. It is rather big",source:"@site/docs/features/main-button.md",sourceDirName:"features",slug:"/features/main-button",permalink:"/ru/docs/features/main-button",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar",previous:{title:"Haptic feedback",permalink:"/ru/docs/features/haptic-feedback"},next:{title:"Popup",permalink:"/ru/docs/features/popup"}},o={},i=[],s={toc:i},d="wrapper";function l(t){let{components:e,...a}=t;return(0,n.kt)(d,(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"main-button"},"Main button"),(0,n.kt)("p",null,"Main button is placed at the bottom of Telegram interface. It is rather big\nnative component which provides mostly basic features."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"main-button.png",src:A(933).Z,width:"463",height:"174"})),(0,n.kt)("p",null,"Common use case for main button is to submit data. User could fill some form\nand then, click this button to submit it. Main button can be disabled, this will\nmake it non-clickable and as a result, application will not receive click event."),(0,n.kt)("p",null,"Additionally, developer is allowed to control button's background and text\ncolors, text and loader visibility. You could use button loader to make user\nsure, application is not frozen. This will let him know that application is\nperforming some long action - making request, for example."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"main-button-2.png",src:A(1684).Z,width:"466",height:"162"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ru/docs/apps-communication/methods#web_app_setup_main_button"},"Web App method")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ru/docs/apps-communication/events#main_button_pressed"},"Button clicked event"))))}l.isMDXComponent=!0},1684:(t,e,A)=>{A.d(e,{Z:()=>r});const r="data:image/png;base64,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gnYJIaTNzz///Oqrr953331ncjl79uzbb7/9yy+/6MOOGbRLCCFt3nrrLe3aJM8888w333yjjzxO0C4hhLR54403tGVzeeihh7799lt98OCgXUIIafP1118//vjjjVh3dnY+++yzH3744ddff719+/aXX3758ssvS/M297xzP21Au+TU5Wh3+8yZC9fVj4vIgqsjy8jdu3fv3Lmjt/7227179z799NOHH37Ym/fixYu60LCgXbICObq+u73dzvXt7QvXj3SBY2XJ2r1+YWYRMtl88sknXrtnz56d770NaJdMPlZmZy7sXjfZvdD8oEscL4PkOFeG1NxYd1YRMt0097zyacPly5d1iQFBu2TyMaLa3k3vcI92L7S3wNudx6zTdq8n20Xh7Qv2p/Rut3hsOE+7J25LvuboDt3sMscc+dpNbMFcMTLpXLt2zY/hzs6O3j0gaJdMP0aIRknRwwW7sdFUE+NO50K70Riz2Xo9bO5q8JtL2s0cK4rk/F+q2Qp112yOa7M/2+JtPdliZMK5ffu2c26Tzc1NvXtA0C5ZhfjbxO3tVr6RAv0/3J2LO+95YUabS892e45tT5R5hlCsOUrhjDp9+8hkcvfuXa/dc+fO6d0DgnbJ6qS9n7QSdPemIn6rl3FWndH2RLuZY/vvdos1298U4fHBmdwZe4qR6Ya7XQnaPQ3pPJdRoNhrM8fdbubY9meb9E0UpZrd9kxtsXaLxUjtHB0d3bx58969e3pHEp7tStDumqa5xzVvY7BPP82zBudGayzzyME9FnXPHkrqlIV3zc8ZCfYdW3ZhoeZWx+GZbXRG9yz4qKeYedH9UU/+TEbJRx99ZC165vXXX+83L+9kUKDdNc2R/Fu/uOGU7wtoN5fUaV749xtcDyIdot0j60af5Ba7VHN4S8SurSK0pN1hNpSKtT62B8ifySh5/vnn3Sg0+fDDD/VuEd63q0C7ZPExam9vTs0dqXiHGFmfvPbaa16m999//8cff6xL2Pvcxrn8LzUF2iULT3vX290DR3fEZG3y448/PvbYY96nTV566aXPP//8u+++c5/JcO3aNfWZDM8++yyfybCFdskoif6zxMn/ZzKZaL766qvmPld4tS98ApkH7RJC5s/NmzefeuoprdgkzX3uSZz7G9olhBCfO3fuvPnmm+fOndOutTl79uzFixfnfrbgg3YJISTKTz/99P7777/yyivPPffcAw88sLm5ubOzc/ny5fnet5AG7RJCSNWgXUIIqRq0SwghVYN2CSGkatAuIYRUDdolhJCqQbuEEFI1a6ldY160SwiZZoR2n1477f4R7RJCJpdGTWunXfucAe0SQqaZoF3rqzXQbvt4F+0SQqaZWLtGXGuiXWfef//7//QVE0LI8tJISf49bdW1u5U+3v3HP/+lL5oQQpaXRkrLerC7MaZ2ww3v25f+S180IYQsL42UlnWruzGeduUN78YjT//P/97U100IIctIo6ON9qawu9Vdfe1upTe8z//n3zEvIWTpaUTU6GiJt7obo2q3veHtzLvxiHna8I9//ou/sBFCKqfRTiOfRkGNiIRzl3CruzGadreiG17xrgb3ljLz/0P+sPm708ITAJMknatryIOGJ93bxeJ3LyznVndjTO1uZc0byddhFLwquCEEOOWkS2OSeMlI4S7buRuja1ebN5XvUpDjAQB1SFdiJYJw7d/QYueum3a3vHlL8gUAqEIs3OU5d2N87Tq665TyDQo+CWnnAsCakS78wUjbeOEu6dmCp452t+Rtbyff2L8AAKNgbBMLd5nO3aioXUd3zbIXVofutwXAqSZdGiuAl4+W0hKorF2P7IUTkHYuAKwZ6cKfh9RCS+NMugkAAMYD7QIAVAXtAgBUBe0CAFQF7QIAVAXtAgBUBe0CAFQF7QIAVAXtAgBUBe0CAFQF7QIAVAXtAgBUBe0CAFQF7QIAVAXtAgBUBe0CAFQF7QIAVAXtAgBUBe0CAFQF7QIAVAXtAgBUBe0CAFQF7QIAVAXtAgBUBe0CAFQF7QIAVAXtAgBUBe0CAFQF7QIAVAXtAgBUBe0CAFQF7QIAVAXtAgBUBe0CAFQF7QIAVAXtAgBUBe0CAFQF7QIAVOX/AWuB/y6qiGRaAAAAAElFTkSuQmCC"},933:(t,e,A)=>{A.d(e,{Z:()=>r});const r="data:image/png;base64,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7VznzifCaYFt4eT45cW0qn3/5rE9fv3zx4+/vvol7D5+9eHjx3dPffmnrz/Mq+DJy2L346y5H6/TSvnX16lmV+HPr+aX/Lkv4rkfflar6WqdafU9F/ZvEvHfP7751bX2/yonwpmCbeHUiJ6KVhU0bOsc92ES5ePJs6+uH7sarp2vX19PR9xu1Pe7p66Md2tUuavQnftyOv7G/3uqfzrLnx5Vnlpl6vTnTuKedl1LPoTVt1vGuhP9FWfR6xPhbMG2cGp42+qlZaBj22nFOukslRSymwvkCqOdY4WpmBPlvKAWC+dOndGwcY0c6/d1vpen6xPhfMG2cGrcdm3rPlJ792tYmca7BB0zSpurCm9vW7Xphjn710+E8wXbwskRlodvHteOKzlqIT4Oi1xXoGLG1tr2E2wrDJ4IbxVubZtexbZ3BWwLp0dYHk7ue+q/k/D01Tv/DbD46Zm7/frSSS0K8cdrf+PV3XudF63yRq3Ztfdtb2fbXGd8S/C7vzx9Nf0jt/Bx/kd5Ipwt2BZOEndz4P38V/r7eZ043zFw8nKry3DfNpjXbe7ubajBm9dtcVGZvmwwLTyDGf91S9sWdYrvOXiZhrPmpsr7IbYxcJ5gWwCAEWBbAIARYFsAgBFgWwCAEWBbAIARYFsAgBFgWwCAEWBbAIARYFsAgBFgWwCAEWBbAIARYFsAgBFgWwCAEZyTbZ1wsS0AHCfCtl+di21/j20B4OiY1HQutvU3E7AtABwn2bbeV6dr23jrFtsCwHGibevEddq2DcL9r//5Z9lVAIBDMUlJfkR2orZ9VN66/e5v/yh7CwBwKCYpjblpe3+IbfPy9t+/+2vZWwCAQzFJaczC9v4A26rl7edf/ed//2/ZYQCA8Uw6uufVlBe2J2vbR+Xy9vOvv0G4AHBwJhFNOhq2sL0/xrZxeZs+LvO3FL772z/40AwABjNpZ5LPpKB7wbPyi18nbttHankrvp8QvhPm/hfH7x785q7wR4CjpIzVM+Se48vwfS/9PYQRC9v7Q2z7qCpc5dyAM++pEGYO4I5TpsZRkiQjPTtWtffH2dYKt3TuQZDTAABjKDNxENmz/mMxrdozse2jJNyWcwEAhqA9O0q19wfaNjB3Tzo3m/dTKMcUAM6MMvEXI22TPDvkBkJisG0fyUXu7FytXQCAveBsoz07TrX3D2HbwNxV2fnTYX6TALjTlKlxAiT5WCntnUPZNiE7/wmUYwoAZ0aZ+LtQWmgQn5WHAABgdbAtAMAIsC0AwAiwLQDACLAtAMAIsC0AwAiwLQDACLAtAMAIsC0AwAiwLQDACLAtAMAIsC0AwAiwLQDACLAtAMAIsC0AwAiwLQDACLAtAMAIsC0AwAiwLQDACLAtAMAIsC0AwAiwLQDACLAtAMAIsC0AwAiwLQDACLAtAMAIsC0AwAiwLQDACLAtAMAIsC0AwAiwLQDACLAtAMAIsC0AwAiwLQDACLAtAMAIsC0AwAiwLQDACLAtAMAIsC0AwAiwLQDACLAtAMAIsC0AwAiwLQDACP4f/VbIrxfyk90AAAAASUVORK5CYII="}}]);