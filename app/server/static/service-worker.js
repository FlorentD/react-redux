if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,t)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const n={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return n;default:return e(r)}}))).then((e=>{const r=t(...e);return s.default||(s.default=r),s}))})))}}define("./service-worker.js",["./workbox-e4f1ac2f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/static/427.88d46eea93ef501e377f.js",revision:null},{url:"/static/app.5b745102e5aa75f20d2e.js",revision:null},{url:"/static/app.d81762b8c349abbe4d10.css",revision:null},{url:"/static/index.html",revision:"9ef580c7425d870f6871dfd9621532ee"},{url:"/static/vendors.972cce12b1d7dcafaebe.js",revision:null}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
