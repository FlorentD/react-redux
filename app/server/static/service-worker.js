if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js');
      let r = Promise.resolve();
      return (
        s[e] ||
          (r = new Promise(async (r) => {
            if ('document' in self) {
              const s = document.createElement('script');
              (s.src = e), document.head.appendChild(s), (s.onload = r);
            } else importScripts(e), r();
          })),
        r.then(() => {
          if (!s[e]) throw new Error(`Module ${e} didn’t register its module`);
          return s[e];
        })
      );
    },
    r = (r, s) => {
      Promise.all(r.map(e)).then((e) => s(1 === e.length ? e[0] : e));
    },
    s = { require: Promise.resolve(r) };
  self.define = (r, t, i) => {
    s[r] ||
      (s[r] = Promise.resolve().then(() => {
        let s = {};
        const n = { uri: location.origin + r.slice(1) };
        return Promise.all(
          t.map((r) => {
            switch (r) {
              case 'exports':
                return s;
              case 'module':
                return n;
              default:
                return e(r);
            }
          })
        ).then((e) => {
          const r = i(...e);
          return s.default || (s.default = r), s;
        });
      }));
  };
}
define('./service-worker.js', ['./workbox-d69c6803'], function (e) {
  'use strict';
  self.addEventListener('message', (e) => {
    e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: '/static/140.76875f2049533c31e92d.js', revision: null },
        { url: '/static/app.0f28e9369ffa8d0f3ee4.css', revision: null },
        { url: '/static/app.7087aef111c2ac8b3988.js', revision: null },
        {
          url: '/static/index.html',
          revision: '9ce74516ef13cee594c52120ed717bfd',
        },
        { url: '/static/vendors.ab002d8e78d1208e74ee.js', revision: null },
        {
          url: '/static/vendors.ab002d8e78d1208e74ee.js.LICENSE.txt',
          revision: 'd18dba208164d01c98054a17fb168340',
        },
      ],
      {}
    ),
    e.cleanupOutdatedCaches();
});
//# sourceMappingURL=service-worker.js.map
