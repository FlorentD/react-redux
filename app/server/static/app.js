!function(e){function t(t){for(var r,l,c=t[0],i=t[1],u=t[2],p=0,f=[];p<c.length;p++)l=c[p],o[l]&&f.push(o[l][0]),o[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(s&&s(t);f.length;)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={0:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=function(e){return l.p+""+({}[e]||e)+".js"}(e);var i=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/static/",l.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=i;a.push([51,1]),n()}({24:function(e,t,n){"use strict";var r=n(14),o=n.n(r);function a(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}n.d(t,"b",function(){return i}),n.d(t,"c",function(){return u});const l="FILM/UPDATE_FILMS",c={films:[]};const i=()=>async e=>{e((e=>({type:l,payload:{films:e}}))(await(async()=>{const e=await fetch("https://startmeup.herokuapp.com/api/movies");return await e.json()})()))},u=e=>e.FILM.films;t.a={FILM:function(e=c,t){switch(t.type){case l:return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach(function(t){o()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{},t.payload);default:return e}}}},51:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(25),l=n(13),c=n(11),i=n(7),u=n(6),s=n(2),p=n.n(s);const f=i.b.ul.withConfig({displayName:"Menu__MenuUl",componentId:"sc-87iqw0-0"})(["display:flex;justify-content:space-around;"]),m=({children:e})=>o.a.createElement(f,null,e);m.propTypes={children:p.a.arrayOf(p.a.object)};var d=m;const b=i.b.li.withConfig({displayName:"MenuItem__MenuLi",componentId:"sc-1kfc9ed-0"})(["font-weight:bold;"]),y=({label:e,link:t})=>o.a.createElement(b,null,o.a.createElement(c.b,{to:t},e));y.propTypes={label:p.a.string,link:p.a.string};var h=y;const O={menu:[{id:"item1",label:"Main",link:""},{id:"item2",label:"Why",link:"why"},{id:"item3",label:"About",link:"about"},{id:"item4",label:"NoMatch",link:"nomatch"},{id:"item5",label:"Filmz",link:"films"}]};const v=e=>e.MENU.menu;var g={MENU:function(e=O){return e.type,e}};const E=()=>o.a.createElement(d,null,Object(l.c)(v).map(({id:e,label:t,link:n})=>o.a.createElement(h,{key:e,label:t,link:n})));E.propTypes={menu:p.a.arrayOf(p.a.object)};var w=E;var j=()=>o.a.createElement("div",{className:"main"},o.a.createElement("h1",null,"Main"));var P=()=>o.a.createElement("h1",null,"Why");var _=()=>o.a.createElement("h1",null,"About"),k=()=>o.a.createElement("div",null,"PAGE NOT FOUND :-("),M=n(30);var D=n.n(M)()({loader:()=>n.e(2).then(n.bind(null,52)).catch(e=>console.log(e)),modules:["./Films"],webpack:()=>[52],loading:()=>o.a.createElement("div",null,"Chargement")});const S=i.a`
ul {
  list-style: none;
}

a {
  color: rgb(0, 0, 0);
  &:visited {
    color: blue;
  }
}
`,T=i.b.div.withConfig({displayName:"app__Container",componentId:"vbjlqm-0"})(["padding:10px;background-color:#f0efef;color:black;"]);var N=()=>o.a.createElement(T,null,o.a.createElement(S,null),o.a.createElement(w,null),o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:"/",component:j}),o.a.createElement(u.a,{path:"/why",component:P}),o.a.createElement(u.a,{path:"/about",component:_}),o.a.createElement(u.a,{path:"/films",component:D}),o.a.createElement(u.a,{component:k}))),I=n(9),L=n(14),x=n.n(L),A=n(24);function C(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}var F=Object(I.b)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach(function(t){x()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},g,{},A.a)),U=n(32),q=n(21),R=n.n(q);var J=e=>t=>n=>{R()(n)?console.info(["%c","call ",n.name.slice(1),"()"].join(""),"font-weight:bold;"):(console.group(n.type),console.info("dispatching",n));const r=t(n);return R()(n)||(console.info("next state",e.getState()),console.groupEnd(n.type)),r};const W=window.__PRELOADED_STATE__;delete window.__PRELOADED_STATE__;const X=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||I.c;var z=Object(I.d)(F,W,X(Object(I.a)(U.a,J)));Object(a.hydrate)(o.a.createElement(c.a,null,o.a.createElement(l.a.Provider,{value:z},o.a.createElement(N,null))),document.getElementById("body"))}});