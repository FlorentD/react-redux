!function(e){function t(t){for(var s,c,o=t[0],n=t[1],l=t[2],p=0,d=[];p<o.length;p++)c=o[p],a[c]&&d.push(a[c][0]),a[c]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);for(i&&i(t);d.length;)d.shift()();return u.push.apply(u,l||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],s=!0,o=1;o<r.length;o++){var n=r[o];0!==a[n]&&(s=!1)}s&&(u.splice(t--,1),e=c(c.s=r[0]))}return e}var s={},a={0:0},u=[];function c(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=s,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(r,s,function(t){return e[t]}.bind(null,s));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var o=window.webpackJsonp=window.webpackJsonp||[],n=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var i=n;u.push([47,1]),r()}([,,,,,,,,,,,function(e,t,r){"use strict";(function(e){r.d(t,"b",function(){return p}),r.d(t,"c",function(){return d});var s,a=r(16),u=r.n(a),c=r(40);(s=r(2).enterModule)&&s(e);const o="FILM/UPDATE_FILMS",n={films:[]};function l(e=n,t){switch(t.type){case o:return u()({},e,t.payload);default:return e}}const i=e=>({type:o,payload:{films:e}}),p=()=>async e=>{const t=await Object(c.a)();e(i(t))},d=e=>e.FILM.films,_={FILM:l};var f,m;t.a=_,f=r(2).default,m=r(2).leaveModule,f&&(f.register("FILM","NAME","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),f.register(o,"UPDATE_FILMS","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),f.register(n,"initialState","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),f.register(l,"reducer","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),f.register(i,"updateFilms","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),f.register(p,"fetchFilms","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),f.register(d,"getFilms","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),f.register(_,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),m(e))}).call(this,r(4)(e))},,,function(e,t,r){"use strict";(function(e){var s;r.d(t,"b",function(){return c}),(s=r(2).enterModule)&&s(e);const a={menu:[{id:"item1",label:"Main",link:""},{id:"item2",label:"Why",link:"why"},{id:"item3",label:"About",link:"about"},{id:"item4",label:"NoMatch",link:"nomatch"},{id:"item5",label:"Films",link:"films"}]};function u(e=a){return e.type,e}const c=e=>e.MENU.menu,o={MENU:u};var n,l;t.a=o,n=r(2).default,l=r(2).leaveModule,n&&(n.register("MENU","NAME","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/redux.js"),n.register(a,"initialState","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/redux.js"),n.register(u,"reducer","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/redux.js"),n.register(c,"getMenu","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/redux.js"),n.register(o,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/redux.js"),l(e))}).call(this,r(4)(e))},,,,,,,,,,,,,,function(e,t,r){"use strict";(function(e){var s,a=r(0),u=r.n(a),c=r(69),o=r(12),n=r(2),l=r(29),i=r(34),p=r(35),d=r(36),_=r(37),f=r(38);(s=r(2).enterModule)&&s(e);const m=()=>u.a.createElement("div",{className:"container"},u.a.createElement(l.a,null),u.a.createElement(c.a,null,u.a.createElement(o.a,{exact:!0,path:"/",component:i.a}),u.a.createElement(o.a,{path:"/why",component:p.a}),u.a.createElement(o.a,{path:"/about",component:d.a}),u.a.createElement(o.a,{path:"/films",component:f.a}),u.a.createElement(o.a,{component:_.a}))),b=Object(n.hot)(e)(m);var v,j;t.a=b,v=r(2).default,j=r(2).leaveModule,v&&(v.register(m,"App","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/index.js"),v.register(b,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/index.js"),j(e))}).call(this,r(4)(e))},function(e,t,r){"use strict";(function(e){var s,a=r(0),u=r.n(a),c=r(1),o=r.n(c),n=r(9),l=r(13),i=r(32),p=r(33),d=r(14);(s=r(2).enterModule)&&s(e);const _=({menu:e})=>u.a.createElement(i.a,null,e.map(({id:e,label:t,link:r})=>u.a.createElement(p.a,{key:e,label:t,link:r})));_.propTypes={menu:o.a.arrayOf(o.a.object)};const f=Object(l.a)({menu:d.b}),m=Object(n.b)(f)(_);var b,v;t.a=m,b=r(2).default,v=r(2).leaveModule,b&&(b.register(_,"PageMenu","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/index.js"),b.register(f,"mapStateToProps","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/index.js"),b.register(m,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/index.js"),v(e))}).call(this,r(4)(e))},,,function(e,t,r){"use strict";(function(e){r(57);var s,a=r(0),u=r.n(a),c=r(1),o=r.n(c);(s=r(2).enterModule)&&s(e);const n=({children:e})=>u.a.createElement("ul",{className:"menu"},e);n.propTypes={children:o.a.arrayOf(o.a.object)};const l=n;var i,p;t.a=l,i=r(2).default,p=r(2).leaveModule,i&&(i.register(n,"Menu","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/Menu/index.js"),i.register(l,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/Menu/index.js"),p(e))}).call(this,r(4)(e))},function(e,t,r){"use strict";(function(e){var s,a=r(0),u=r.n(a),c=r(1),o=r.n(c),n=r(66);(s=r(2).enterModule)&&s(e);const l=({label:e,link:t})=>u.a.createElement("li",{className:"menuItem"},u.a.createElement(n.a,{to:t},e));l.propTypes={label:o.a.string,link:o.a.string};const i=l;var p,d;t.a=i,p=r(2).default,d=r(2).leaveModule,p&&(p.register(l,"MenuItem","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/MenuItem/index.js"),p.register(i,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/MenuItem/index.js"),d(e))}).call(this,r(4)(e))},function(e,t,r){"use strict";(function(e){var s,a=r(0),u=r.n(a);(s=r(2).enterModule)&&s(e);const c=()=>u.a.createElement("div",{className:"main"},u.a.createElement("h1",null,"Main")),o=c;var n,l;t.a=o,n=r(2).default,l=r(2).leaveModule,n&&(n.register(c,"Main","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/main/index.js"),n.register(o,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/main/index.js"),l(e))}).call(this,r(4)(e))},function(e,t,r){"use strict";(function(e){var s,a=r(0),u=r.n(a);(s=r(2).enterModule)&&s(e);const c=()=>u.a.createElement("h1",null,"Why"),o=c;var n,l;t.a=o,n=r(2).default,l=r(2).leaveModule,n&&(n.register(c,"Why","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/why/index.js"),n.register(o,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/why/index.js"),l(e))}).call(this,r(4)(e))},function(e,t,r){"use strict";(function(e){var s,a=r(0),u=r.n(a);(s=r(2).enterModule)&&s(e);const c=()=>u.a.createElement("h1",null,"About"),o=c;var n,l;t.a=o,n=r(2).default,l=r(2).leaveModule,n&&(n.register(c,"About","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/about/index.js"),n.register(o,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/about/index.js"),l(e))}).call(this,r(4)(e))},function(e,t,r){"use strict";(function(e){var s,a=r(0),u=r.n(a);(s=r(2).enterModule)&&s(e);const c=()=>u.a.createElement("div",null,"PAGE NOT FOUND :-(");var o,n;t.a=c,o=r(2).default,n=r(2).leaveModule,o&&(o.register(c,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/NoMatch.js"),n(e))}).call(this,r(4)(e))},function(e,t,r){"use strict";(function(e){var s,a=r(0),u=r.n(a),c=r(39);(s=r(2).enterModule)&&s(e);const o=()=>u.a.createElement(c.a,null,e=>u.a.createElement("ul",null,e.map(e=>u.a.createElement("li",{key:e.id},e.title)))),n=o;var l,i;t.a=n,l=r(2).default,i=r(2).leaveModule,l&&(l.register(o,"Films","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/Films.js"),l.register(n,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/Films.js"),i(e))}).call(this,r(4)(e))},function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),reselect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(13),react_redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),react_router__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(67),recompose__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(46),_redux__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(11),enterModule;enterModule=__webpack_require__(2).enterModule,enterModule&&enterModule(module);class FilmsRequest extends react__WEBPACK_IMPORTED_MODULE_0__.Component{componentWillMount(){const{staticContext:e,fetchFilms:t}=this.props;e&&e.fromServer||t()}render(){return this.props.children(this.props.films)}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}const mapStateToProps=Object(reselect__WEBPACK_IMPORTED_MODULE_1__.a)({films:_redux__WEBPACK_IMPORTED_MODULE_5__.c}),mapDispatchToProps={fetchFilms:_redux__WEBPACK_IMPORTED_MODULE_5__.b},_default=Object(recompose__WEBPACK_IMPORTED_MODULE_4__.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__.b)(mapStateToProps,mapDispatchToProps),react_router__WEBPACK_IMPORTED_MODULE_3__.a)(FilmsRequest);var reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=__webpack_require__(2).default,leaveModule=__webpack_require__(2).leaveModule,reactHotLoader&&(reactHotLoader.register(FilmsRequest,"FilmsRequest","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/FilmsRequest.js"),reactHotLoader.register(mapStateToProps,"mapStateToProps","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/FilmsRequest.js"),reactHotLoader.register(mapDispatchToProps,"mapDispatchToProps","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/FilmsRequest.js"),reactHotLoader.register(_default,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/FilmsRequest.js"),leaveModule(module))}).call(this,__webpack_require__(4)(module))},function(e,t,r){"use strict";(function(e){var s;r.d(t,"a",function(){return a}),(s=r(2).enterModule)&&s(e);const a=async()=>{const e=await fetch("https://startmeup.herokuapp.com/api/movies");return await e.json()};var u,c;u=r(2).default,c=r(2).leaveModule,u&&(u.register(a,"getFilmsAPI","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/api/getFilmsAPI.js"),c(e))}).call(this,r(4)(e))},,function(e,t,r){"use strict";(function(e){var s,a=r(7),u=r(43),c=r(44),o=r(45);(s=r(2).enterModule)&&s(e);const n=window.__PRELOADED_STATE__;delete window.__PRELOADED_STATE__,console.log(n);const l=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,i=Object(a.e)(u.a,n,l(Object(a.a)(c.a,o.a))),p=i;var d,_;t.a=p,d=r(2).default,_=r(2).leaveModule,d&&(d.register(n,"preloadedState","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/store.js"),d.register(l,"composeEnhancers","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/store.js"),d.register(i,"store","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/store.js"),d.register(p,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/store.js"),_(e))}).call(this,r(4)(e))},function(e,t,r){"use strict";(function(e){var s,a=r(16),u=r.n(a),c=r(7),o=r(14),n=r(11);(s=r(2).enterModule)&&s(e);const l=Object(c.c)(u()({},o.a,n.a));var i,p;t.a=l,i=r(2).default,p=r(2).leaveModule,i&&(i.register(l,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/reducers.js"),p(e))}).call(this,r(4)(e))},,function(e,t,r){"use strict";(function(e){var s,a=r(22),u=r.n(a);(s=r(2).enterModule)&&s(e);const c=e=>t=>r=>{u()(r)?console.info(["%c","call ",r.name.slice(1),"()"].join(""),"font-weight:bold;"):(console.group(r.type),console.info("dispatching",r));const s=t(r);return u()(r)||(console.info("next state",e.getState()),console.groupEnd(r.type)),s},o=c;var n,l;t.a=o,n=r(2).default,l=r(2).leaveModule,n&&(n.register(c,"logger","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/middleware/logger.js"),n.register(o,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/middleware/logger.js"),l(e))}).call(this,r(4)(e))},,function(e,t,r){"use strict";r.r(t);r(48);var s=r(0),a=r.n(s),u=r(27),c=r(68),o=r(28),n=r(42),l=r(9);Object(u.hydrate)(a.a.createElement(c.a,null,a.a.createElement(l.a,{store:n.a},a.a.createElement(o.a,null))),document.getElementById("body"))},function(e,t,r){},,,,,,,,,function(e,t,r){}]);