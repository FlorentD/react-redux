!function(e){function t(t){for(var r,c,l=t[0],i=t[1],u=t[2],p=0,f=[];p<l.length;p++)c=l[p],o[c]&&f.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(s&&s(t);f.length;)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={0:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=function(e){return c.p+""+({}[e]||e)+".js"}(e);var i=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/static/",c.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=i;a.push([52,1]),n()}({24:function(e,t,n){"use strict";var r=n(14),o=n.n(r);function a(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}n.d(t,"b",function(){return i}),n.d(t,"c",function(){return u});const c="FILM/UPDATE_FILMS",l={films:[]};const i=()=>async e=>{e((e=>({type:c,payload:{films:e}}))(await(async()=>{const e=await fetch("https://startmeup.herokuapp.com/api/movies");return await e.json()})()))},u=e=>e.FILM.films;t.a={FILM:function(e=l,t){switch(t.type){case c:return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach(function(t){o()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{},t.payload);default:return e}}}},35:function(e,t){"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then(function(e){console.log("Registration successful, scope is:",e.scope)}).catch(function(e){console.log("Service worker registration failed, error:",e)})},52:function(e,t,n){"use strict";n.r(t);n(35);var r=n(0),o=n.n(r),a=n(25),c=n(13),l=n(11),i=n(7),u=n(6),s=n(2),p=n.n(s);const f=i.b.ul.withConfig({displayName:"Menu__MenuUl",componentId:"sc-87iqw0-0"})(["display:flex;justify-content:space-around;"]),m=({children:e})=>o.a.createElement(f,null,e);m.propTypes={children:p.a.arrayOf(p.a.object)};var d=m;const b=i.b.li.withConfig({displayName:"MenuItem__MenuLi",componentId:"sc-1kfc9ed-0"})(["font-weight:bold;"]),y=({label:e,link:t})=>o.a.createElement(b,null,o.a.createElement(l.b,{to:t},e));y.propTypes={label:p.a.string,link:p.a.string};var h=y;const v={menu:[{id:"item1",label:"Main",link:""},{id:"item2",label:"Why",link:"why"},{id:"item3",label:"About",link:"about"},{id:"item4",label:"NoMatch",link:"nomatch"},{id:"item5",label:"Filmz",link:"films"}]};const g=e=>e.MENU.menu;var O={MENU:function(e=v){return e.type,e}};const E=()=>o.a.createElement(d,null,Object(c.c)(g).map(({id:e,label:t,link:n})=>o.a.createElement(h,{key:e,label:t,link:n})));E.propTypes={menu:p.a.arrayOf(p.a.object)};var w=E;var j=()=>o.a.createElement("div",{className:"main"},o.a.createElement("h1",null,"Main"));var P=()=>o.a.createElement("h1",null,"Why");var _=()=>o.a.createElement("h1",null,"About"),k=()=>o.a.createElement("div",null,"PAGE NOT FOUND :-("),M=n(30);var S=n.n(M)()({loader:()=>n.e(2).then(n.bind(null,53)).catch(e=>console.log(e)),modules:["./Films"],webpack:()=>[53],loading:()=>o.a.createElement("div",null,"Chargement")});const D=i.a`
ul {
  list-style: none;
}

a {
  color: rgb(0, 0, 0);
  &:visited {
    color: blue;
  }
}
`,T=i.b.div.withConfig({displayName:"app__Container",componentId:"vbjlqm-0"})(["padding:10px;background-color:#f0efef;color:black;"]);var N=()=>o.a.createElement(T,null,o.a.createElement(D,null),o.a.createElement(w,null),o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:"/",component:j}),o.a.createElement(u.a,{path:"/why",component:P}),o.a.createElement(u.a,{path:"/about",component:_}),o.a.createElement(u.a,{path:"/films",component:S}),o.a.createElement(u.a,{component:k}))),I=n(9),L=n(14),x=n.n(L),A=n(24);function C(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}var F=Object(I.b)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach(function(t){x()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},O,{},A.a)),U=n(32),R=n(21),W=n.n(R);var q=e=>t=>n=>{W()(n)?console.info(["%c","call ",n.name.slice(1),"()"].join(""),"font-weight:bold;"):(console.group(n.type),console.info("dispatching",n));const r=t(n);return W()(n)||(console.info("next state",e.getState()),console.groupEnd(n.type)),r};const J=window.__PRELOADED_STATE__;delete window.__PRELOADED_STATE__;const X=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||I.c;var z=Object(I.d)(F,J,X(Object(I.a)(U.a,q)));Object(a.hydrate)(o.a.createElement(l.a,null,o.a.createElement(c.a.Provider,{value:z},o.a.createElement(N,null))),document.getElementById("body"))}});