!function(){var e,n,t={1885:function(e,n,t){"use strict";t(2658);var r=t(7294),o=t(3935),i=t(5155),u=t(3727),c=t(8655),a=t.n(c),l=t(9163),s=t(5977),f=t(5712),p=(t(1249),t(9254),t(8435)),d=t(9713),m=t.n(d),b={menu:[{id:"item1",label:"Main",link:""},{id:"item2",label:"Why",link:"why"},{id:"item3",label:"About",link:"about"},{id:"item4",label:"NoMatch",link:"nomatch"},{id:"item5",label:"Filmz",link:"films"}]},h=function(e){return e.MENU.menu},v=m()({},"MENU",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;return e.type,e})),g=function(){return r.createElement(p.Z,null,(0,i.v9)(h).map((function(e){var n=e.id,t=e.label,o=e.link;return r.createElement(p.Z.Item,{key:n,name:n},r.createElement(u.rU,{to:o},t))})))},y=(t(1539),t(8674),t(9445)),E=t(5382),w=t(8237),O=(t(6992),t(9575),t(4916),t(2481),t(5306),t(2472),t(1608),t(8927),t(3105),t(5035),t(4345),t(7174),t(2846),t(4731),t(7209),t(6319),t(8867),t(7789),t(3739),t(9368),t(4483),t(2056),t(3462),t(678),t(7462),t(3824),t(5021),t(2974),t(5016),t(7757)),k=t.n(O),j=(t(5666),t(8926)),x=t.n(j),P=null;function _(e){for(var n=(e+"=".repeat((4-e.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),t=window.atob(n),r=new Uint8Array(t.length),o=0;o<t.length;++o)r[o]=t.charCodeAt(o);return r}"undefined"!=typeof window&&"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){return e.pushManager.getSubscription().then(function(){var n=x()(k().mark((function n(t){var r,o,i;return k().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=2;break}return n.abrupt("return",t);case 2:return n.next=4,fetch("/vapidPublicKey");case 4:return r=n.sent,n.next=7,r.text();case 7:return o=n.sent,i=_(o),n.abrupt("return",e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:i}));case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())})).then((function(e){return P=e}));var S=l.ZP.div.withConfig({displayName:"main__NotificationButton",componentId:"sc-14cy0bs-0"})(["margin:50px;"]),A=function(){return r.createElement(y.Z,{as:"h2",icon:!0,textAlign:"center"},r.createElement(E.Z,{name:"users",circular:!0}),r.createElement(y.Z.Content,null,"Main"),r.createElement(S,null,r.createElement(w.Z,{positive:!0,onClick:function(){fetch("/sendNotification",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({subscription:P})}).then((function(){return console.info("notification sent")}))}},"Send my a notification please !")))},Z=function(){return r.createElement("h1",null,"Why")},T=function(){return r.createElement("h1",null,"About")},M=function(){return r.createElement("div",null,"PAGE NOT FOUND :-(")},D=(t(2564),t(3038)),L=t.n(D),N=t(8788),C=function(){if("undefined"==typeof navigator)return null;var e=(0,r.useState)(navigator.onLine),n=L()(e,2),t=n[0],o=n[1],i=(0,r.useState)(!1),u=L()(i,2),c=u[0],a=u[1],l=(0,r.useState)(!1),s=L()(l,2),f=s[0],p=s[1];return(0,r.useEffect)((function(){var e=function(){return o(!0)},n=function(){o(!1),a(!0)};return window.addEventListener("online",e),window.addEventListener("offline",n),function(){window.removeEventListener("online",e),window.removeEventListener("offline",n)}}),[]),(0,r.useEffect)((function(){if(o&&c){p(!0);var e=setTimeout((function(){return p(!1)}),2e3);return function(){return clearTimeout(e)}}}),[t]),t&&!f?null:t&&f?r.createElement(N.Z,{success:!0},r.createElement(N.Z.Header,null,"Welcome back on web ! 🎉")):r.createElement(N.Z,{warning:!0},r.createElement(N.Z.Header,null,"You seem to be offline 😭"))},W=t(5766),U=t(1314),I=t(849),F=(0,r.lazy)((function(){return Promise.all([t.e(216),t.e(712)]).then(t.bind(t,7712))})),z=function(){return r.createElement(r.Suspense,{fallback:r.createElement(W.Z,null,r.createElement(U.Z,{active:!0},r.createElement(I.Z,{indeterminate:!0},"Loading")))},r.createElement(F,null))};function R(){var e=a()(["\nhtml, body, #body {\n  height: 100%;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  color: rgb(0, 0, 0);\n  &:visited {\n    color: blue;\n  }\n}\n"]);return R=function(){return e},e}var q=(0,l.vJ)(R()),B=l.ZP.div.withConfig({displayName:"app__Layout",componentId:"vbjlqm-0"})(['padding:10px;background-image:url("/image/background.jpg");background-position:center;background-size:cover;background-attachment:fixed;background-color:#f0efef;color:black;height:100%;']),K=function(){return r.createElement(B,null,r.createElement(q,null),r.createElement(g,null),r.createElement(C,null),r.createElement(f.Z,null,r.createElement(s.rs,null,r.createElement(s.AW,{exact:!0,path:"/"},r.createElement(A,null)),r.createElement(s.AW,{path:"/why"},r.createElement(Z,null)),r.createElement(s.AW,{path:"/about"},r.createElement(T,null)),r.createElement(s.AW,{path:"/films"},r.createElement(z,null)),r.createElement(s.AW,null,r.createElement(M,null)))))},V=t(4890),H=t(9495);function J(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function X(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?J(Object(t),!0).forEach((function(n){m()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):J(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Y=(0,V.UY)(X(X({},v),H.ZP)),G=t(3894),Q=(t(9600),t(7042),t(8309),t(3560)),$=t.n(Q),ee=window.__PRELOADED_STATE__;delete window.__PRELOADED_STATE__;var ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||V.qC,te=(0,V.MT)(Y,ee,ne((0,V.md)(G.Z,(function(e){return function(n){return function(t){$()(t)?console.info(["%c","call ",t.name.slice(1),"()"].join(""),"font-weight:bold;"):(console.group(t.type),console.info("dispatching",t));var r=n(t);return $()(t)||(console.info("next state",e.getState()),console.groupEnd(t.type)),r}}}))));(0,o.hydrate)(r.createElement(u.VK,null,r.createElement(i.zt,{store:te},r.createElement(K,null))),document.getElementById("body"))},9495:function(e,n,t){"use strict";t.d(n,{ZP:function(){return O},cu:function(){return E},Zh:function(){return w}});var r=t(7757),o=t.n(r),i=(t(5666),t(8926)),u=t.n(i),c=t(9713),a=t.n(c),l=(t(1539),t(8674),t(9642)),s=t(7606),f=t.n(s),p=new l.Z("reactredux-fr-db");p.version(1).stores({films:"++id,title,image"});var d=function(){var e=u()(o().mark((function e(){var n,t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.films.toArray();case 2:if(n=e.sent,navigator.onLine){e.next=7;break}return e.abrupt("return",n);case 7:if(!f()(n)){e.next=19;break}return e.next=10,fetch("https://startmeup.herokuapp.com/api/movies");case 10:return t=e.sent,e.next=13,t.json();case 13:return r=e.sent,e.next=16,p.films.bulkPut(r);case 16:return e.abrupt("return",r);case 19:fetch("https://startmeup.herokuapp.com/api/movies").then((function(e){return e.json()})).then((function(e){return p.films.bulkPut(e)}));case 20:return e.abrupt("return",n);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var h="FILM",v="".concat(h,"/UPDATE_FILMS"),g={films:[]},y=function(e){return{type:v,payload:{films:e}}},E=function(){return function(){var e=u()(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:t=e.sent,n(y(t));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},w=function(e){return e.FILM.films},O=a()({},h,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case v:return b(b({},e),n.payload);default:return e}}))},2658:function(){"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then((function(e){console.log("Registration successful, scope is:",e.scope)})).catch((function(e){console.log("Service worker registration failed, error:",e)}))}},r={};function o(e){if(r[e])return r[e].exports;var n=r[e]={id:e,loaded:!1,exports:{}};return t[e](n,n.exports,o),n.loaded=!0,n.exports}o.m=t,o.x=function(){},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,{a:n}),n},o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(n,t){return o.f[t](e,n),n}),[]))},o.u=function(e){return e+".9ba58dd639cff0052504.js"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},e={},n="react-redux:",o.l=function(t,r,i,u){if(e[t])e[t].push(r);else{var c,a;if(void 0!==i)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==n+i){c=f;break}}c||(a=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",n+i),c.src=t),e[t]=[r];var p=function(n,r){c.onerror=c.onload=null,clearTimeout(d);var o=e[t];if(delete e[t],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(r)})),n)return n(r)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),a&&document.head.appendChild(c)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},o.p="/static/",function(){var e={143:0},n=[[1885,216]];o.f.j=function(n,t){var r=o.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));t.push(r[2]=i);var u=o.p+o.u(n),c=new Error;o.l(u,(function(t){if(o.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;c.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",c.name="ChunkLoadError",c.type=i,c.request=u,r[1](c)}}),"chunk-"+n,n)}};var t=function(){},r=function(r,i){for(var u,c,a=i[0],l=i[1],s=i[2],f=i[3],p=0,d=[];p<a.length;p++)c=a[p],o.o(e,c)&&e[c]&&d.push(e[c][0]),e[c]=0;for(u in l)o.o(l,u)&&(o.m[u]=l[u]);for(s&&s(o),r&&r(i);d.length;)d.shift()();return f&&n.push.apply(n,f),t()},i=self.webpackChunkreact_redux=self.webpackChunkreact_redux||[];function u(){for(var t,r=0;r<n.length;r++){for(var i=n[r],u=!0,c=1;c<i.length;c++){var a=i[c];0!==e[a]&&(u=!1)}u&&(n.splice(r--,1),t=o(o.s=i[0]))}return 0===n.length&&(o.x(),o.x=function(){}),t}i.forEach(r.bind(null,0)),i.push=r.bind(null,i.push.bind(i));var c=o.x;o.x=function(){return o.x=c||function(){},(t=u)()}}(),o.x()}();