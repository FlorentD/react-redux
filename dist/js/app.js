!function(b){function d(a){for(var g,i,k=a[0],l=a[1],m=a[2],n=0,d=[];n<k.length;n++)i=k[n],h[i]&&d.push(h[i][0]),h[i]=0;for(g in l)Object.prototype.hasOwnProperty.call(l,g)&&(b[g]=l[g]);for(c&&c(a);d.length;)d.shift()();return j.push.apply(j,m||[]),e()}function e(){for(var a,b=0;b<j.length;b++){for(var c,d=j[b],e=!0,g=1;g<d.length;g++)c=d[g],0!==h[c]&&(e=!1);e&&(j.splice(b--,1),a=f(f.s=d[0]))}return a}function f(a){if(g[a])return g[a].exports;var c=g[a]={i:a,l:!1,exports:{}};return b[a].call(c.exports,c,c.exports,f),c.l=!0,c.exports}var g={},h={1:0},j=[];f.m=b,f.c=g,f.d=function(a,b,c){f.o(a,b)||Object.defineProperty(a,b,{configurable:!1,enumerable:!0,get:c})},f.r=function(a){Object.defineProperty(a,"__esModule",{value:!0})},f.n=function(a){var b=a&&a.__esModule?function(){return a.default}:function(){return a};return f.d(b,"a",b),b},f.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},f.p="";var a=window.webpackJsonp=window.webpackJsonp||[],k=a.push.bind(a);a.push=d,a=a.slice();for(var l=0;l<a.length;l++)d(a[l]);var c=k;j.push([97,0]),e()}({103:function(){},35:function(a,g,h){"use strict";(function(j){function e(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:s,b=arguments[1];switch(b.type){case f:return n({},a,b.payload);default:return a;}}Object.defineProperty(g,"__esModule",{value:!0});var k,n=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};(k=h(2).enterModule)&&k(j);var q,o,c,r,d,f="FILM/UPDATE_FILMS",s={films:[]},l=g.updateFilms=function(b){return{type:f,payload:{films:b}}},p=g.fetchFilms=function(){return a=regeneratorRuntime.mark(function a(b){var c,d;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://startmeup.herokuapp.com/api/movies");case 2:return c=a.sent,a.next=5,c.json();case 5:d=a.sent,b(l(d));case 7:case"end":return a.stop();}},a,void 0)}),b=function(){var b=a.apply(this,arguments);return new Promise(function(c,a){return function d(e,f){try{var g=b[e](f),h=g.value}catch(b){return void a(b)}return g.done?void c(h):Promise.resolve(h).then(function(a){d("next",a)},function(a){d("throw",a)})}("next")})},function(){return b.apply(this,arguments)};var a,b},m=g.getFilms=function(a){return a.FILM.films},t=(c=e,(o="FILM")in(q={})?Object.defineProperty(q,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):q[o]=c,q);g.default=t,r=h(2).default,d=h(2).leaveModule,r&&(r.register("FILM","NAME","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),r.register(f,"UPDATE_FILMS","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),r.register(s,"initialState","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),r.register(e,"reducer","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),r.register(l,"updateFilms","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),r.register(p,"fetchFilms","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),r.register(m,"getFilms","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),r.register(t,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js"),d(j))}).call(this,h(6)(a))},36:function(a,b,g){"use strict";(function(h){function e(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i;return a.type,a}var a;Object.defineProperty(b,"__esModule",{value:!0}),(a=g(2).enterModule)&&a(h);var j,k,l,m,c,i={menu:[{id:"item1",label:"Main",link:""},{id:"item2",label:"Why",link:"why"},{id:"item3",label:"About",link:"about"},{id:"item4",label:"NoMatch",link:"nomatch"},{id:"item5",label:"Films",link:"films"}]},n=b.getMenu=function(a){return a.MENU.menu},d=(l=e,(k="MENU")in(j={})?Object.defineProperty(j,k,{value:l,enumerable:!0,configurable:!0,writable:!0}):j[k]=l,j);b.default=d,m=g(2).default,c=g(2).leaveModule,m&&(m.register("MENU","NAME","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/redux.js"),m.register(i,"initialState","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/redux.js"),m.register(e,"reducer","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/redux.js"),m.register(n,"getMenu","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/redux.js"),m.register(d,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/redux.js"),c(h))}).call(this,g(6)(a))},55:function(a,b,d){"use strict";(function(f){Object.defineProperty(b,"__esModule",{value:!0});var e,g,h=d(54),a=(e=h)&&e.__esModule?e:{default:e};(g=d(2).enterModule)&&g(f);var j,k,l=function(b){return function(c){return function(d){(0,a.default)(d)?console.info(["%c","call ",d.name.slice(1),"()"].join(""),"font-weight:bold;"):(console.group(d.type),console.info("dispatching",d));var e=c(d);return(0,a.default)(d)||(console.info("next state",b.getState()),console.groupEnd(d.type)),e}}},c=l;b.default=c,j=d(2).default,k=d(2).leaveModule,j&&(j.register(l,"logger","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/middleware/logger.js"),j.register(c,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/middleware/logger.js"),k(f))}).call(this,d(6)(a))},57:function(a,b,f){"use strict";(function(g){function e(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,"__esModule",{value:!0});var h,j=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},k=f(17),a=e(f(36)),l=e(f(35));(h=f(2).enterModule)&&h(g);var m,c,i=(0,k.combineReducers)(j({},a.default,l.default));b.default=i,m=f(2).default,c=f(2).leaveModule,m&&(m.register(i,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/reducers.js"),c(g))}).call(this,f(6)(a))},58:function(a,b,g){"use strict";(function(h){function e(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,"__esModule",{value:!0});var j,k=g(17),o=e(g(57)),a=e(g(56)),l=e(g(55));(j=g(2).enterModule)&&j(h);var n=window.__PRELOADED_STATE__;delete window.__PRELOADED_STATE__,console.log(n);var c,i,d=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||k.compose,f=(0,k.createStore)(o.default,n,d((0,k.applyMiddleware)(a.default,l.default))),p=f;b.default=p,c=g(2).default,i=g(2).leaveModule,c&&(c.register(n,"preloadedState","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/store.js"),c.register(d,"composeEnhancers","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/store.js"),c.register(f,"store","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/store.js"),c.register(p,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/store.js"),i(h))}).call(this,g(6)(a))},62:function(module,exports,__webpack_require__){"use strict";(function(module){function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(exports,"__esModule",{value:!0});var enterModule,_createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_reselect=__webpack_require__(37),_reactRedux=__webpack_require__(26),_reactRouter=__webpack_require__(61),_recompose=__webpack_require__(60),_redux=__webpack_require__(35);enterModule=__webpack_require__(2).enterModule,enterModule&&enterModule(module);var reactHotLoader,leaveModule,FilmsRequest=function(_Component){function FilmsRequest(){return _classCallCheck(this,FilmsRequest),_possibleConstructorReturn(this,(FilmsRequest.__proto__||Object.getPrototypeOf(FilmsRequest)).apply(this,arguments))}return _inherits(FilmsRequest,_Component),_createClass(FilmsRequest,[{key:"componentWillMount",value:function(){var a=this.props,b=a.staticContext,c=a.fetchFilms;b&&b.fromServer||c()}},{key:"render",value:function(){return this.props.children(this.props.films)}},{key:"__reactstandin__regenerateByEval",value:function(key,code){this[key]=eval(code)}}]),FilmsRequest}(_react.Component),mapStateToProps=(0,_reselect.createStructuredSelector)({films:_redux.getFilms}),mapDispatchToProps={fetchFilms:_redux.fetchFilms},_default=(0,_recompose.compose)((0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps),_reactRouter.withRouter)(FilmsRequest);exports.default=_default,reactHotLoader=__webpack_require__(2).default,leaveModule=__webpack_require__(2).leaveModule,reactHotLoader&&(reactHotLoader.register(FilmsRequest,"FilmsRequest","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/FilmsRequest.js"),reactHotLoader.register(mapStateToProps,"mapStateToProps","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/FilmsRequest.js"),reactHotLoader.register(mapDispatchToProps,"mapDispatchToProps","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/FilmsRequest.js"),reactHotLoader.register(_default,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/FilmsRequest.js"),leaveModule(module))}).call(this,__webpack_require__(6)(module))},63:function(a,b,d){"use strict";(function(f){function e(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,"__esModule",{value:!0});var g,h=e(d(0)),j=e(d(62));(g=d(2).enterModule)&&g(f);var a,k,l=function(){return h.default.createElement(j.default,null,function(a){return h.default.createElement("ul",null,a.map(function(a){return h.default.createElement("li",{key:a.id},a.title)}))})},c=l;b.default=c,a=d(2).default,k=d(2).leaveModule,a&&(a.register(l,"Films","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/Films.js"),a.register(c,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/Films.js"),k(f))}).call(this,d(6)(a))},64:function(a,b,d){"use strict";(function(f){Object.defineProperty(b,"__esModule",{value:!0});var e,g,h=d(0),a=(e=h)&&e.__esModule?e:{default:e};(g=d(2).enterModule)&&g(f);var i,j,k=function(){return a.default.createElement("div",null,"PAGE NOT FOUND :-(")};b.default=k,i=d(2).default,j=d(2).leaveModule,i&&(i.register(k,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/NoMatch.js"),j(f))}).call(this,d(6)(a))},65:function(a,b,d){"use strict";(function(f){Object.defineProperty(b,"__esModule",{value:!0});var e,g,h=d(0),a=(e=h)&&e.__esModule?e:{default:e};(g=d(2).enterModule)&&g(f);var j,k,l=function(){return a.default.createElement("h1",null,"About")},c=l;b.default=c,j=d(2).default,k=d(2).leaveModule,j&&(j.register(l,"About","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/about/index.js"),j.register(c,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/about/index.js"),k(f))}).call(this,d(6)(a))},66:function(a,b,d){"use strict";(function(f){Object.defineProperty(b,"__esModule",{value:!0});var e,g,h=d(0),a=(e=h)&&e.__esModule?e:{default:e};(g=d(2).enterModule)&&g(f);var j,k,l=function(){return a.default.createElement("h1",null,"Why")},c=l;b.default=c,j=d(2).default,k=d(2).leaveModule,j&&(j.register(l,"Why","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/why/index.js"),j.register(c,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/why/index.js"),k(f))}).call(this,d(6)(a))},67:function(a,b,d){"use strict";(function(f){Object.defineProperty(b,"__esModule",{value:!0});var e,g,h=d(0),a=(e=h)&&e.__esModule?e:{default:e};(g=d(2).enterModule)&&g(f);var j,k,l=function(){return a.default.createElement("div",{className:"main"},a.default.createElement("h1",null,"Main"))},c=l;b.default=c,j=d(2).default,k=d(2).leaveModule,j&&(j.register(l,"Main","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/main/index.js"),j.register(c,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/main/index.js"),k(f))}).call(this,d(6)(a))},68:function(a,b,f){"use strict";(function(g){function e(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,"__esModule",{value:!0});var h,j=e(f(0)),k=e(f(27)),a=f(25);(h=f(2).enterModule)&&h(g);var l=function(b){var c=b.label,d=b.link;return j.default.createElement("li",{className:"menuItem"},j.default.createElement(a.Link,{to:d},c))};l.propTypes={label:k.default.string,link:k.default.string};var m,c,i=l;b.default=i,m=f(2).default,c=f(2).leaveModule,m&&(m.register(l,"MenuItem","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/MenuItem/index.js"),m.register(i,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/MenuItem/index.js"),c(g))}).call(this,f(6)(a))},69:function(a,b,d){"use strict";(function(f){function e(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,"__esModule",{value:!0});var g,h=e(d(0)),j=e(d(27));(g=d(2).enterModule)&&g(f);var a=function(a){var b=a.children;return h.default.createElement("ul",{className:"menu"},b)};a.propTypes={children:j.default.arrayOf(j.default.object)};var k,l,c=a;b.default=c,k=d(2).default,l=d(2).leaveModule,k&&(k.register(a,"Menu","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/Menu/index.js"),k.register(c,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/Menu/index.js"),l(f))}).call(this,d(6)(a))},76:function(a,g,h){"use strict";(function(j){function e(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(g,"__esModule",{value:!0});var d,k=e(h(0)),q=e(h(27)),a=h(26),l=h(37),n=e(h(69)),o=e(h(68)),c=h(36);(d=h(2).enterModule)&&d(j);var i=function(a){var b=a.menu;return k.default.createElement(n.default,null,b.map(function(a){var b=a.id,c=a.label,d=a.link;return k.default.createElement(o.default,{key:b,label:c,link:d})}))};i.propTypes={menu:q.default.arrayOf(q.default.object)};var f,p,m=(0,l.createStructuredSelector)({menu:c.getMenu}),r=(0,a.connect)(m)(i);g.default=r,f=h(2).default,p=h(2).leaveModule,f&&(f.register(i,"PageMenu","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/index.js"),f.register(m,"mapStateToProps","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/index.js"),f.register(r,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/index.js"),p(j))}).call(this,h(6)(a))},78:function(a,g,h){"use strict";(function(j){function e(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(g,"__esModule",{value:!0});var k,p=e(h(0)),q=h(25),a=h(2),l=e(h(76)),n=e(h(67)),o=e(h(66)),c=e(h(65)),i=e(h(64)),d=e(h(63));(k=h(2).enterModule)&&k(j);var f,m,r=function(){return p.default.createElement("div",{className:"container"},p.default.createElement(l.default,null),p.default.createElement(q.Switch,null,p.default.createElement(q.Route,{exact:!0,path:"/",component:n.default}),p.default.createElement(q.Route,{path:"/why",component:o.default}),p.default.createElement(q.Route,{path:"/about",component:c.default}),p.default.createElement(q.Route,{path:"/films",component:d.default}),p.default.createElement(q.Route,{component:i.default})))},b=(0,a.hot)(j)(r);g.default=b,f=h(2).default,m=h(2).leaveModule,f&&(f.register(r,"App","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/index.js"),f.register(b,"default","/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/index.js"),m(j))}).call(this,h(6)(a))},94:function(b,d,e){"use strict";function f(a){return a&&a.__esModule?a:{default:a}}e(103);var c=f(e(0)),g=e(92),h=e(25),a=f(e(78)),i=f(e(58)),j=e(26);(0,g.hydrate)(c.default.createElement(h.BrowserRouter,null,c.default.createElement(j.Provider,{store:i.default},c.default.createElement(a.default,null))),document.getElementById("body"))},97:function(a,b,c){c(96),a.exports=c(94)}});