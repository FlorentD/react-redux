!function(e){function t(t){for(var a,n,s=t[0],u=t[1],d=t[2],i=0,f=[];i<s.length;i++)n=s[i],o[n]&&f.push(o[n][0]),o[n]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);for(c&&c(t);f.length;)f.shift()();return l.push.apply(l,d||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],a=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(a=!1)}a&&(l.splice(t--,1),e=n(n.s=r[0]))}return e}var a={},o={0:0},l=[];function n(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=a,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=u;l.push([49,1]),r()}([,,,,,,,,,,,,function(e,t,r){"use strict";(function(e){r.d(t,"b",function(){return i}),r.d(t,"c",function(){return f});var a,o=r(15),l=r.n(o),n=r(40);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const s="FILM/UPDATE_FILMS",u={films:[]};function d(e=u,t){switch(t.type){case s:return l()({},e,t.payload);default:return e}}const c=e=>({type:s,payload:{films:e}}),i=()=>async e=>{const t=await Object(n.a)();e(c(t))},f=e=>e.FILM.films,p={FILM:d};var b,m;t.a=p,(b=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(b.register("FILM","NAME","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),b.register(s,"UPDATE_FILMS","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),b.register(u,"initialState","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),b.register(d,"reducer","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),b.register(c,"updateFilms","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),b.register(i,"fetchFilms","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),b.register(f,"getFilms","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),b.register(p,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js")),(m=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&m(e)}).call(this,r(2)(e))},,function(e,t,r){"use strict";(function(e){var a;r.d(t,"b",function(){return n}),(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const o={menu:[{id:"item1",label:"Main",link:""},{id:"item2",label:"Why",link:"why"},{id:"item3",label:"About",link:"about"},{id:"item4",label:"NoMatch",link:"nomatch"},{id:"item5",label:"Films",link:"films"}]};function l(e=o){return e.type,e}const n=e=>e.MENU.menu,s={MENU:l};var u,d;t.a=s,(u=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(u.register("MENU","NAME","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/redux.js"),u.register(o,"initialState","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/redux.js"),u.register(l,"reducer","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/redux.js"),u.register(n,"getMenu","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/redux.js"),u.register(s,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/redux.js")),(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&d(e)}).call(this,r(2)(e))},,,,,,,,,,,,function(e,t,r){"use strict";(function(e){var a,o=r(0),l=r.n(o),n=r(8),s=r(3),u=r(41),d=r(27),c=r(34),i=r(35),f=r(36),p=r(37),b=r(38);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const m=n.a`
ul {
  list-style: none;
}

a {
  color: rgb(0, 0, 0);
  &:visited {
    color: blue;
  }
}
`,L=n.b.div.withConfig({displayName:"app__Container",componentId:"vbjlqm-0"})(["padding:10px;background-color:#f0efef;color:black;"]),G=()=>l.a.createElement(L,null,l.a.createElement(m,null),l.a.createElement(d.a,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:c.a}),l.a.createElement(s.a,{path:"/why",component:i.a}),l.a.createElement(s.a,{path:"/about",component:f.a}),l.a.createElement(s.a,{path:"/films",component:b.a}),l.a.createElement(s.a,{component:p.a}))),H=Object(u.hot)(G);var v,j;t.a=H,(v=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(v.register(m,"GlobalStyle","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/index.js"),v.register(L,"Container","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/index.js"),v.register(G,"App","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/index.js"),v.register(H,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/index.js")),(j=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&j(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),l=r.n(o),n=r(4),s=r.n(n),u=r(7),d=r(28),c=r(31),i=r(14);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);var f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const p=()=>l.a.createElement(d.a,null,Object(u.c)(i.b).map(({id:e,label:t,link:r})=>l.a.createElement(c.a,{key:e,label:t,link:r})));f(p,"useMappedState{}",()=>[u.c]),p.propTypes={menu:s.a.arrayOf(s.a.object)};const b=p;var m,L;t.a=b,(m=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(m.register(p,"PageMenu","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/index.js"),m.register(b,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/index.js")),(L=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&L(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),l=r.n(o),n=r(4),s=r.n(n),u=r(8);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const d=u.b.ul.withConfig({displayName:"Menu__MenuUl",componentId:"sc-87iqw0-0"})(["display:flex;justify-content:space-around;"]),c=({children:e})=>l.a.createElement(d,null,e);c.propTypes={children:s.a.arrayOf(s.a.object)};const i=c;var f,p;t.a=i,(f=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(f.register(d,"MenuUl","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/Menu/index.js"),f.register(c,"Menu","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/Menu/index.js"),f.register(i,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/Menu/index.js")),(p=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&p(e)}).call(this,r(2)(e))},,,function(e,t,r){"use strict";(function(e){var a,o=r(0),l=r.n(o),n=r(4),s=r.n(n),u=r(8),d=r(11);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const c=u.b.li.withConfig({displayName:"MenuItem__MenuLi",componentId:"sc-1kfc9ed-0"})(["font-weight:bold;"]),i=({label:e,link:t})=>l.a.createElement(c,null,l.a.createElement(d.b,{to:t},e));i.propTypes={label:s.a.string,link:s.a.string};const f=i;var p,b;t.a=f,(p=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(p.register(c,"MenuLi","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/MenuItem/index.js"),p.register(i,"MenuItem","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/MenuItem/index.js"),p.register(f,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/MenuItem/index.js")),(b=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&b(e)}).call(this,r(2)(e))},,,function(e,t,r){"use strict";(function(e){var a,o=r(0),l=r.n(o);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const n=()=>l.a.createElement("div",{className:"main"},l.a.createElement("h1",null,"Main")),s=n;var u,d;t.a=s,(u=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(u.register(n,"Main","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/main/index.js"),u.register(s,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/main/index.js")),(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&d(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),l=r.n(o);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const n=()=>l.a.createElement("h1",null,"Why"),s=n;var u,d;t.a=s,(u=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(u.register(n,"Why","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/why/index.js"),u.register(s,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/why/index.js")),(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&d(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),l=r.n(o);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const n=()=>l.a.createElement("h1",null,"About"),s=n;var u,d;t.a=s,(u=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(u.register(n,"About","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/about/index.js"),u.register(s,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/about/index.js")),(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&d(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),l=r.n(o);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const n=()=>l.a.createElement("div",null,"PAGE NOT FOUND :-(");var s,u;t.a=n,(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&s.register(n,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/NoMatch.js"),(u=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&u(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),l=r.n(o),n=r(39);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const s=()=>l.a.createElement(n.a,null,e=>l.a.createElement("ul",null,e.map(e=>l.a.createElement("li",{key:e.id},e.title)))),u=s;var d,c;t.a=u,(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(d.register(s,"Films","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/Films.js"),d.register(u,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/Films.js")),(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&c(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),l=r(7),n=r(3),s=r(12);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);var u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const d=({children:e,staticContext:t})=>{const r=Object(l.b)();return Object(o.useEffect)(()=>{t&&t.fromServer||r(Object(s.b)())},[]),e(Object(l.c)(s.c))};u(d,"useDispatch{dispatch}\nuseEffect{}\nuseMappedState{}",()=>[l.b,l.c]);const c=Object(n.f)(d);var i,f;t.a=c,(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(i.register(d,"FilmsRequest","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/FilmsRequest.js"),i.register(c,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/FilmsRequest.js")),(f=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&f(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var a;r.d(t,"a",function(){return o}),(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const o=async()=>{const e=await fetch("https://startmeup.herokuapp.com/api/movies");return await e.json()};var l,n;(l=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&l.register(o,"getFilmsAPI","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/api/getFilmsAPI.js"),(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&n(e)}).call(this,r(2)(e))},,function(e,t,r){"use strict";(function(e){var a,o=r(9),l=r(43),n=r(45),s=r(46);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const u=window.__PRELOADED_STATE__;delete window.__PRELOADED_STATE__;const d=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,c=Object(o.d)(l.a,u,d(Object(o.a)(n.a,s.a))),i=c;var f,p;t.a=i,(f=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(f.register(u,"preloadedState","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/store.js"),f.register(d,"composeEnhancers","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/store.js"),f.register(c,"store","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/store.js"),f.register(i,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/store.js")),(p=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&p(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(15),l=r.n(o),n=r(9),s=r(14),u=r(12);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const d=Object(n.b)(l()({},s.a,u.a));var c,i;t.a=d,(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&c.register(d,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/reducers.js"),(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&i(e)}).call(this,r(2)(e))},,,function(e,t,r){"use strict";(function(e){var a,o=r(22),l=r.n(o);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const n=e=>t=>r=>{l()(r)?console.info(["%c","call ",r.name.slice(1),"()"].join(""),"font-weight:bold;"):(console.group(r.type),console.info("dispatching",r));const a=t(r);return l()(r)||(console.info("next state",e.getState()),console.groupEnd(r.type)),a},s=n;var u,d;t.a=s,(u=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(u.register(n,"logger","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/middleware/logger.js"),u.register(s,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/middleware/logger.js")),(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&d(e)}).call(this,r(2)(e))},,,function(e,t,r){"use strict";r.r(t);var a=r(0),o=r.n(a),l=r(25),n=r(7),s=r(11),u=r(26),d=r(42);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;Object(l.hydrate)(o.a.createElement(s.a,null,o.a.createElement(n.a.Provider,{value:d.a},o.a.createElement(u.a,null))),document.getElementById("body"))}]);