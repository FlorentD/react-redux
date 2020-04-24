!function(e){function t(t){for(var r,i,c=t[0],l=t[1],u=t[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);f.length;)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={0:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+""+({}[e]||e)+".js"}(e);var l=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static/",i.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;o.push([378,1]),n()}({177:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return f}));var r=n(1),a=n.n(r),o=n(192),i=n(193),c=n.n(i);const l=new o.a("reactredux-fr-db");l.version(1).stores({films:"++id,title,image"});function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}const s={films:[]};const p=()=>async e=>{e((e=>({type:"FILM/UPDATE_FILMS",payload:{films:e}}))(await(async()=>{const e=await l.films.toArray();if(!navigator.onLine)return e;if(c()(e)){const e=await fetch("https://startmeup.herokuapp.com/api/movies"),t=await e.json();return await l.films.bulkPut(t),t}return fetch("https://startmeup.herokuapp.com/api/movies").then(e=>e.json()).then(e=>l.films.bulkPut(e)),e})()))},f=e=>e.FILM.films;t.a={FILM:function(e=s,t){switch(t.type){case"FILM/UPDATE_FILMS":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t.payload);default:return e}}}},204:function(e,t){"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then((function(e){console.log("Registration successful, scope is:",e.scope)})).catch((function(e){console.log("Service worker registration failed, error:",e)}))},378:function(e,t,n){"use strict";n.r(t);n(204);var r=n(0),a=n.n(r),o=n(26),i=n(77),c=n(55),l=n(56),u=n(31),s=n(384),p=n(389);const f={menu:[{id:"item1",label:"Main",link:""},{id:"item2",label:"Why",link:"why"},{id:"item3",label:"About",link:"about"},{id:"item4",label:"NoMatch",link:"nomatch"},{id:"item5",label:"Filmz",link:"films"}]};const m=e=>e.MENU.menu;var d={MENU:function(e=f){return e.type,e}};var b=()=>a.a.createElement(p.a,null,Object(i.c)(m).map(({id:e,label:t,link:n})=>a.a.createElement(p.a.Item,{key:e,name:e},a.a.createElement(c.b,{to:n},t)))),y=n(390),h=n(49),g=n(388);let v=null;"undefined"!=typeof window&&"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>e.pushManager.getSubscription().then(async t=>{if(t)return t;const n=await fetch("/vapidPublicKey"),r=function(e){const t=(e+"=".repeat((4-e.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),n=window.atob(t),r=new Uint8Array(n.length);for(let e=0;e<n.length;++e)r[e]=n.charCodeAt(e);return r}(await n.text());return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:r})})).then(e=>v=e);const O=l.b.div.withConfig({displayName:"main__NotificationButton",componentId:"sc-14cy0bs-0"})(["margin:50px;"]);var E=()=>a.a.createElement(y.a,{as:"h2",icon:!0,textAlign:"center"},a.a.createElement(h.a,{name:"users",circular:!0}),a.a.createElement(y.a.Content,null,"Main"),a.a.createElement(O,null,a.a.createElement(g.a,{positive:!0,onClick:()=>{fetch("/sendNotification",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({subscription:v})}).then(()=>console.info("notification sent"))}},"Send my a notification please !")));var w=()=>a.a.createElement("h1",null,"Why");var j=()=>a.a.createElement("h1",null,"About"),P=()=>a.a.createElement("div",null,"PAGE NOT FOUND :-("),k=n(387);var _=()=>{if("undefined"==typeof navigator)return null;const[e,t]=Object(r.useState)(navigator.onLine),[n,o]=Object(r.useState)(!1),[i,c]=Object(r.useState)(!1);return Object(r.useEffect)(()=>{const e=()=>t(!0),n=()=>{t(!1),o(!0)};return window.addEventListener("online",e),window.addEventListener("offline",n),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",n)}},[]),Object(r.useEffect)(()=>{if(t&&n){c(!0);const e=setTimeout(()=>c(!1),2e3);return()=>clearTimeout(e)}},[e]),e&&!i?null:e&&i?a.a.createElement(k.a,{success:!0},a.a.createElement(k.a.Header,null,"Welcome back on web ! 🎉")):a.a.createElement(k.a,{warning:!0},a.a.createElement(k.a.Header,null,"You seem to be offline 😭"))},S=n(391),L=n(386),M=n(383);const D=Object(r.lazy)(()=>n.e(2).then(n.bind(null,392)));var T=()=>a.a.createElement(r.Suspense,{fallback:a.a.createElement(S.a,null,a.a.createElement(L.a,{active:!0},a.a.createElement(M.a,{indeterminate:!0},"Loading")))},a.a.createElement(D,null));const A=l.a`
html, body, #body {
  height: 100%;
}

ul {
  list-style: none;
}

a {
  color: rgb(0, 0, 0);
  &:visited {
    color: blue;
  }
}
`,x=l.b.div.withConfig({displayName:"app__Layout",componentId:"vbjlqm-0"})(["padding:10px;background-image:url('/image/background.jpg');background-position:center;background-size:cover;background-attachment:fixed;background-color:#f0efef;color:black;height:100%;"]);var N=()=>a.a.createElement(x,null,a.a.createElement(A,null),a.a.createElement(b,null),a.a.createElement(_,null),a.a.createElement(s.a,null,a.a.createElement(u.c,null,a.a.createElement(u.a,{exact:!0,path:"/",component:E}),a.a.createElement(u.a,{path:"/why",component:w}),a.a.createElement(u.a,{path:"/about",component:j}),a.a.createElement(u.a,{path:"/films",component:T}),a.a.createElement(u.a,{component:P})))),I=n(33),C=n(1),F=n.n(C),U=n(177);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var R=Object(I.c)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){F()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d,{},U.a)),z=n(194),J=n(28),q=n.n(J);var B=e=>t=>n=>{q()(n)?console.info(["%c","call ",n.name.slice(1),"()"].join(""),"font-weight:bold;"):(console.group(n.type),console.info("dispatching",n));const r=t(n);return q()(n)||(console.info("next state",e.getState()),console.groupEnd(n.type)),r};const H=window.__PRELOADED_STATE__;delete window.__PRELOADED_STATE__;const K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||I.d;var V=Object(I.e)(R,H,K(Object(I.a)(z.a,B)));Object(o.hydrate)(a.a.createElement(c.a,null,a.a.createElement(i.a,{store:V},a.a.createElement(N,null))),document.getElementById("body"))}});