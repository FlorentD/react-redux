!function(e){function t(t){for(var a,n,s=t[0],c=t[1],u=t[2],i=0,p=[];i<s.length;i++)n=s[i],o[n]&&p.push(o[n][0]),o[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(d&&d(t);p.length;)p.shift()();return l.push.apply(l,u||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],a=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(a=!1)}a&&(l.splice(t--,1),e=n(n.s=r[0]))}return e}var a={},o={0:0},l=[];function n(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=a,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=c;l.push([47,1]),r()}([,,,,,,,,,,,,function(e,t,r){"use strict";(function(e){r.d(t,"b",function(){return i}),r.d(t,"c",function(){return p});var a,o=r(16),l=r.n(o),n=r(39);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);const s="FILM/UPDATE_FILMS",c={films:[]};function u(e=c,t){switch(t.type){case s:return l()({},e,t.payload);default:return e}}const d=e=>({type:s,payload:{films:e}}),i=()=>async e=>{const t=await Object(n.a)();e(d(t))},p=e=>e.FILM.films,f={FILM:u};var b,m;t.a=f,(b=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(b.register("FILM","NAME","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),b.register(s,"UPDATE_FILMS","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),b.register(c,"initialState","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),b.register(u,"reducer","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),b.register(d,"updateFilms","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),b.register(i,"fetchFilms","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),b.register(p,"getFilms","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),b.register(f,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js")),(m=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&m(e)}).call(this,r(2)(e))},,,function(e,t,r){"use strict";(function(e){var a;r.d(t,"b",function(){return n}),(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);const o={menu:[{id:"item1",label:"Main",link:""},{id:"item2",label:"Why",link:"why"},{id:"item3",label:"About",link:"about"},{id:"item4",label:"NoMatch",link:"nomatch"},{id:"item5",label:"Films",link:"films"}]};function l(e=o){return e.type,e}const n=e=>e.MENU.menu,s={MENU:l};var c,u;t.a=s,(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(c.register("MENU","NAME","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/redux.js"),c.register(o,"initialState","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/redux.js"),c.register(l,"reducer","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/redux.js"),c.register(n,"getMenu","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/redux.js"),c.register(s,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/redux.js")),(u=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&u(e)}).call(this,r(2)(e))},,,,,,,,,,function(e,t,r){"use strict";(function(e){var a,o=r(0),l=r.n(o),n=r(7),s=r(3),c=r(40),u=r(26),d=r(33),i=r(34),p=r(35),f=r(36),b=r(37);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);const m=n.b.div.withConfig({displayName:"app__Container",componentId:"vbjlqm-0"})(["padding:10px;background-color:#f0efef;color:black;"]),v=()=>l.a.createElement(m,null,l.a.createElement(u.a,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:d.a}),l.a.createElement(s.a,{path:"/why",component:i.a}),l.a.createElement(s.a,{path:"/about",component:p.a}),l.a.createElement(s.a,{path:"/films",component:b.a}),l.a.createElement(s.a,{component:f.a}))),j=Object(c.hot)(v);var L,G;t.a=j,(L=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(L.register(m,"Container","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/index.js"),L.register(v,"App","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/index.js"),L.register(j,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/index.js")),(G=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&G(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),l=r.n(o),n=r(4),s=r.n(n),c=r(8),u=r(27),d=r(30),i=r(15);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);const p=()=>l.a.createElement(u.a,null,Object(c.c)(i.b).map(({id:e,label:t,link:r})=>l.a.createElement(d.a,{key:e,label:t,link:r})));p.propTypes={menu:s.a.arrayOf(s.a.object)};const f=p;var b,m;t.a=f,(b=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(b.register(p,"PageMenu","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/index.js"),b.register(f,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/index.js")),(m=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&m(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),l=r.n(o),n=r(4),s=r.n(n),c=r(7);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);const u=c.b.ul.withConfig({displayName:"Menu__MenuUl",componentId:"sc-87iqw0-0"})(["display:flex;justify-content:space-around;"]),d=({children:e})=>l.a.createElement(u,null,e);d.propTypes={children:s.a.arrayOf(s.a.object)};const i=d;var p,f;t.a=i,(p=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(p.register(u,"MenuUl","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/Menu/index.js"),p.register(d,"Menu","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/Menu/index.js"),p.register(i,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/Menu/index.js")),(f=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&f(e)}).call(this,r(2)(e))},,,function(e,t,r){"use strict";(function(e){var a,o=r(0),l=r.n(o),n=r(4),s=r.n(n),c=r(7),u=r(11);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);const d=c.b.li.withConfig({displayName:"MenuItem__MenuLi",componentId:"sc-1kfc9ed-0"})(["font-weight:bold;"]),i=({label:e,link:t})=>l.a.createElement(d,null,l.a.createElement(u.b,{to:t},e));i.propTypes={label:s.a.string,link:s.a.string};const p=i;var f,b;t.a=p,(f=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(f.register(d,"MenuLi","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/MenuItem/index.js"),f.register(i,"MenuItem","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/MenuItem/index.js"),f.register(p,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/MenuItem/index.js")),(b=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&b(e)}).call(this,r(2)(e))},,,function(e,t,r){"use strict";(function(e){var a,o=r(0),l=r.n(o);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);const n=()=>l.a.createElement("div",{className:"main"},l.a.createElement("h1",null,"Main")),s=n;var c,u;t.a=s,(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(c.register(n,"Main","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/main/index.js"),c.register(s,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/main/index.js")),(u=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&u(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),l=r.n(o);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);const n=()=>l.a.createElement("h1",null,"Why"),s=n;var c,u;t.a=s,(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(c.register(n,"Why","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/why/index.js"),c.register(s,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/why/index.js")),(u=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&u(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),l=r.n(o);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);const n=()=>l.a.createElement("h1",null,"About"),s=n;var c,u;t.a=s,(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(c.register(n,"About","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/about/index.js"),c.register(s,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/about/index.js")),(u=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&u(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),l=r.n(o);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);const n=()=>l.a.createElement("div",null,"PAGE NOT FOUND :-(");var s,c;t.a=n,(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&s.register(n,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/NoMatch.js"),(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&c(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),l=r.n(o),n=r(38);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);const s=()=>l.a.createElement(n.a,null,e=>l.a.createElement("ul",null,e.map(e=>l.a.createElement("li",{key:e.id},e.title)))),c=s;var u,d;t.a=c,(u=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(u.register(s,"Films","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/Films.js"),u.register(c,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/Films.js")),(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&d(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),l=r(8),n=r(3),s=r(12);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);const c=({children:e,staticContext:t})=>{const r=Object(l.b)();return Object(o.useEffect)(()=>{t&&t.fromServer||r(Object(s.b)())},[]),e(Object(l.c)(s.c))},u=Object(n.e)(c);var d,i;t.a=u,(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(d.register(c,"FilmsRequest","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/FilmsRequest.js"),d.register(u,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/FilmsRequest.js")),(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&i(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var a;r.d(t,"a",function(){return o}),(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);const o=async()=>{const e=await fetch("https://startmeup.herokuapp.com/api/movies");return await e.json()};var l,n;(l=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&l.register(o,"getFilmsAPI","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/api/getFilmsAPI.js"),(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&n(e)}).call(this,r(2)(e))},,function(e,t,r){"use strict";(function(e){var a,o=r(9),l=r(42),n=r(44),s=r(45);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);const c=window.__PRELOADED_STATE__;delete window.__PRELOADED_STATE__;const u=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,d=Object(o.d)(l.a,c,u(Object(o.a)(n.a,s.a))),i=d;var p,f;t.a=i,(p=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(p.register(c,"preloadedState","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/store.js"),p.register(u,"composeEnhancers","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/store.js"),p.register(d,"store","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/store.js"),p.register(i,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/store.js")),(f=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&f(e)}).call(this,r(2)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(16),l=r.n(o),n=r(9),s=r(15),c=r(12);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);const u=Object(n.b)(l()({},s.a,c.a));var d,i;t.a=u,(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&d.register(u,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/reducers.js"),(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&i(e)}).call(this,r(2)(e))},,,function(e,t,r){"use strict";(function(e){var a,o=r(21),l=r.n(o);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);const n=e=>t=>r=>{l()(r)?console.info(["%c","call ",r.name.slice(1),"()"].join(""),"font-weight:bold;"):(console.group(r.type),console.info("dispatching",r));const a=t(r);return l()(r)||(console.info("next state",e.getState()),console.groupEnd(r.type)),a},s=n;var c,u;t.a=s,(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(c.register(n,"logger","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/middleware/logger.js"),c.register(s,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/middleware/logger.js")),(u=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&u(e)}).call(this,r(2)(e))},,function(e,t,r){"use strict";r.r(t),function(e){var t,a=r(0),o=r.n(a),l=r(14),n=r(7),s=r(8),c=r(11),u=r(25),d=r(41);(t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&t(e);const i=n.a`
ul {
  list-style: none;
}

a {
  color: rgb(0, 0, 0);
  &:visited {
    color: blue;
  }
}
`;var p,f;Object(l.hydrate)(o.a.createElement(c.a,null,o.a.createElement(i,null),o.a.createElement(s.a.Provider,{value:d.a},o.a.createElement(u.a,null))),document.getElementById("body")),(p=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&p.register(i,"GlobalStyle","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app.js"),(f=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&f(e)}.call(this,r(2)(e))}]);