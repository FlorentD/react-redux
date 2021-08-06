(function(){var P={2599:function(t,i,n){"use strict";var u=n(2563),e=n(7104),o=n(2298),a=n(9412),v=n(4089),f=n(9059),d=n(6472);const m=new f.f({uri:"/api",cache:new d.h().restore(window.__APOLLO_STATE__)});var b=n(3993),p=n(6248);const y=[{id:"item1",label:"Main",link:""},{id:"item2",label:"Why",link:"why"},{id:"item3",label:"About",link:"about"},{id:"item4",label:"NoMatch",link:"nomatch"},{id:"item5",label:"Filmz",link:"films"},{id:"item6",label:"Lazy",link:"lazy"}];var w=()=>e.createElement("ul",{className:"flex flex-col mt-4"},y.map(({id:l,label:c,link:s})=>e.createElement("li",{key:l,name:l},e.createElement(a.rU,{className:"block p-4 text-white visited:text-blue-100 font-bold hover:text-blue-200 text-xl",to:s},c))));const g=({children:l})=>e.createElement(e.Fragment,null,e.createElement("div",{className:"absolute w-full h-screen z-0 flex"},e.createElement("div",{className:"bg-blue-800 flex-1 h-screen"}),e.createElement("div",{className:"bg-blue-100 flex-1 h-screen"})),e.createElement("div",{className:"relative w-full h-screen bg-blue-100 xl:w-xl m-auto z-10"},e.createElement("div",{className:"grid grid-cols-12 gap-4"},l)));g.Menu=({children:l})=>e.createElement("div",{className:"col-start-1 col-end-4 co h-screen bg-blue-800 border-r-8 border-blue-900"},l),g.Body=({children:l})=>e.createElement("div",{className:"col-span-9 h-screen bg-blue-100"},l);var A=g,L=Object.defineProperty,O=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,W=(l,c,s)=>c in l?L(l,c,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[c]=s,T=(l,c)=>{for(var s in c||(c={}))N.call(c,s)&&W(l,s,c[s]);if(O)for(var s of O(c))M.call(c,s)&&W(l,s,c[s]);return l},B=(l,c)=>{var s={};for(var h in l)N.call(l,h)&&c.indexOf(h)<0&&(s[h]=l[h]);if(l!=null&&O)for(var h of O(l))c.indexOf(h)<0&&M.call(l,h)&&(s[h]=l[h]);return s},z=l=>{var c=B(l,[]);return e.createElement("button",T({className:"rounded-md bg-button hover:bg-buttonFocused py-2 px-4 text-white font-bold text-sm"},c))},D=()=>e.createElement("div",{className:"text-center"},e.createElement("h1",null,"Main"),e.createElement(z,{onClick:()=>{fetch("/sendNotification",{method:"post",headers:{"Content-type":"application/json"},body:{}}).then(()=>console.info("notification sent"))}},"Send my a notification please !")),_=()=>e.createElement("h1",null,"Why"),G=()=>e.createElement("h1",null,"About"),R=()=>e.createElement("div",null,"PAGE NOT FOUND :-("),U=()=>{if(typeof navigator=="undefined")return null;const[l,c]=(0,e.useState)(navigator.onLine),[s,h]=(0,e.useState)(!1),[j,F]=(0,e.useState)(!1);return(0,e.useEffect)(()=>{const x=()=>c(!0),S=()=>{c(!1),h(!0)};return window.addEventListener("online",x),window.addEventListener("offline",S),()=>{window.removeEventListener("online",x),window.removeEventListener("offline",S)}},[]),(0,e.useEffect)(()=>{if(c&&s){F(!0);const x=setTimeout(()=>F(!1),2e3);return()=>clearTimeout(x)}},[l]),l&&!j?null:l&&j?e.createElement("div",null,e.createElement("span",null,"Welcome back on web ! \u{1F389}")):e.createElement("div",null,e.createElement("span",null,"You seem to be offline \u{1F62D}"))},V=n(2997),J=n(2114),K=()=>{const{data:l,loading:c}=(0,V.a)(J.Ps`
      {
        films {
          id
          image
          title
        }
      }
    `);return c?null:e.createElement("ul",null,l==null?void 0:l.films.map(s=>e.createElement("li",{key:s.id},e.createElement("img",{src:s.image,wrapped:!0}),e.createElement("div",null,s.title),e.createElement("div",null,"Film."))))},Q=()=>e.createElement(A,null,e.createElement(A.Menu,null,e.createElement(w,null)),e.createElement(U,null),e.createElement(A.Body,null,e.createElement(p.rs,null,e.createElement(p.AW,{exact:!0,path:"/"},e.createElement(D,null)),e.createElement(p.AW,{path:"/why"},e.createElement(_,null)),e.createElement(p.AW,{path:"/about"},e.createElement(G,null)),e.createElement(p.AW,{path:"/films"},e.createElement(K,null)),e.createElement(p.AW,{path:"/lazy",render:()=>{const l=(0,b.ZP)(()=>n.e(427).then(n.bind(n,1427)));return e.createElement(l,null)}}),e.createElement(p.AW,null,e.createElement(R,null)))));(0,o.render)(e.createElement(v.e,{client:m},e.createElement(a.VK,null,e.createElement(Q,null))),document.getElementById("body"))},2563:function(){"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js").then(function(t){console.log("Registration successful, scope is:",t.scope)}).catch(function(t){console.log("Service worker registration failed, error:",t)})}},k={};function r(t){var i=k[t];if(i!==void 0)return i.exports;var n=k[t]={exports:{}};return P[t](n,n.exports,r),n.exports}r.m=P,function(){var t=[];r.O=function(i,n,u,e){if(n){e=e||0;for(var o=t.length;o>0&&t[o-1][2]>e;o--)t[o]=t[o-1];t[o]=[n,u,e];return}for(var a=1/0,o=0;o<t.length;o++){for(var n=t[o][0],u=t[o][1],e=t[o][2],v=!0,f=0;f<n.length;f++)(e&!1||a>=e)&&Object.keys(r.O).every(function(E){return r.O[E](n[f])})?n.splice(f--,1):(v=!1,e<a&&(a=e));if(v){t.splice(o--,1);var d=u();d!==void 0&&(i=d)}}return i}}(),function(){r.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(i,{a:i}),i}}(),function(){r.d=function(t,i){for(var n in i)r.o(i,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce(function(i,n){return r.f[n](t,i),i},[]))}}(),function(){r.u=function(t){return""+t+".88d46eea93ef501e377f.js"}}(),function(){r.miniCssF=function(t){}}(),function(){r.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(t){if(typeof window=="object")return window}}()}(),function(){r.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){var t={},i="react-redux:";r.l=function(n,u,e,o){if(t[n]){t[n].push(u);return}var a,v;if(e!==void 0)for(var f=document.getElementsByTagName("script"),d=0;d<f.length;d++){var m=f[d];if(m.getAttribute("src")==n||m.getAttribute("data-webpack")==i+e){a=m;break}}a||(v=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",i+e),a.src=n),t[n]=[u];var b=function(y,E){a.onerror=a.onload=null,clearTimeout(p);var w=t[n];if(delete t[n],a.parentNode&&a.parentNode.removeChild(a),w&&w.forEach(function(g){return g(E)}),y)return y(E)},p=setTimeout(b.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=b.bind(null,a.onerror),a.onload=b.bind(null,a.onload),v&&document.head.appendChild(a)}}(),function(){r.r=function(t){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/static/"}(),function(){var t={143:0};r.f.j=function(u,e){var o=r.o(t,u)?t[u]:void 0;if(o!==0)if(o)e.push(o[2]);else{var a=new Promise(function(m,b){o=t[u]=[m,b]});e.push(o[2]=a);var v=r.p+r.u(u),f=new Error,d=function(m){if(r.o(t,u)&&(o=t[u],o!==0&&(t[u]=void 0),o)){var b=m&&(m.type==="load"?"missing":m.type),p=m&&m.target&&m.target.src;f.message="Loading chunk "+u+` failed.
(`+b+": "+p+")",f.name="ChunkLoadError",f.type=b,f.request=p,o[1](f)}};r.l(v,d,"chunk-"+u,u)}},r.O.j=function(u){return t[u]===0};var i=function(u,e){var o=e[0],a=e[1],v=e[2],f,d,m=0;for(f in a)r.o(a,f)&&(r.m[f]=a[f]);if(v)var b=v(r);for(u&&u(e);m<o.length;m++)d=o[m],r.o(t,d)&&t[d]&&t[d][0](),t[o[m]]=0;return r.O(b)},n=self.webpackChunkreact_redux=self.webpackChunkreact_redux||[];n.forEach(i.bind(null,0)),n.push=i.bind(null,n.push.bind(n))}();var C=r.O(void 0,[216],function(){return r(2599)});C=r.O(C)})();

//# sourceMappingURL=app.efb36135623ad5bdafc2.js.map