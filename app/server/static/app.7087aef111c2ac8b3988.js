!(function () {
  var e,
    t,
    n,
    r = {
      1613: function (e, t, n) {
        'use strict';
        n(9799);
        var r = n(7294),
          l = n(3935),
          o = n(3727),
          i = n(6829),
          a = n(1439),
          u = new a.fe({
            uri: '/api',
            cache: new a.h4().restore(window.__APOLLO_STATE__),
          }),
          c = (n(8674), n(1539), n(8783), n(6992), n(3948), n(2168)),
          s = n(5977),
          f =
            (n(1249),
            n(9254),
            [
              { id: 'item1', label: 'Main', link: '' },
              { id: 'item2', label: 'Why', link: 'why' },
              { id: 'item3', label: 'About', link: 'about' },
              { id: 'item4', label: 'NoMatch', link: 'nomatch' },
              { id: 'item5', label: 'Filmz', link: 'films' },
              { id: 'item6', label: 'Lazy', link: 'lazy' },
            ]),
          d = function () {
            return r.createElement(
              'ul',
              { className: 'flex flex-col mt-4' },
              f.map(function (e) {
                var t = e.id,
                  n = e.label,
                  l = e.link;
                return r.createElement(
                  'li',
                  { key: t, name: t },
                  r.createElement(
                    o.rU,
                    {
                      className:
                        'block p-4 text-white visited:text-blue-100 font-bold hover:text-blue-200 text-xl',
                      to: l,
                    },
                    n
                  )
                );
              })
            );
          },
          m = function (e) {
            var t = e.children;
            return r.createElement(
              r.Fragment,
              null,
              r.createElement(
                'div',
                { className: 'absolute w-full h-screen z-0 flex' },
                r.createElement('div', {
                  className: 'bg-blue-800 flex-1 h-screen',
                }),
                r.createElement('div', {
                  className: 'bg-blue-100 flex-1 h-screen',
                })
              ),
              r.createElement(
                'div',
                {
                  className:
                    'relative w-full h-screen bg-blue-100 xl:w-xl m-auto z-10',
                },
                r.createElement(
                  'div',
                  { className: 'grid grid-cols-12 gap-4' },
                  t
                )
              )
            );
          };
        (m.Menu = function (e) {
          var t = e.children;
          return r.createElement(
            'div',
            {
              className:
                'col-start-1 col-end-4 co h-screen bg-blue-800 border-r-8 border-blue-900',
            },
            t
          );
        }),
          (m.Body = function (e) {
            var t = e.children;
            return r.createElement(
              'div',
              { className: 'col-span-9 h-screen bg-blue-100' },
              t
            );
          });
        var v,
          b = m,
          h = n(2122),
          p =
            (n(9601),
            function (e) {
              var t = Object.assign({}, e);
              return r.createElement(
                'button',
                (0, h.Z)(
                  {
                    className:
                      'rounded-md bg-button hover:bg-buttonFocused py-2 px-4 text-white font-bold text-sm',
                  },
                  t
                )
              );
            }),
          E = function () {
            return r.createElement(
              'div',
              { className: 'text-center' },
              r.createElement('h1', null, 'Main'),
              r.createElement(
                p,
                {
                  onClick: function () {
                    fetch('/sendNotification', {
                      method: 'post',
                      headers: { 'Content-type': 'application/json' },
                      body: {},
                    }).then(function () {
                      return console.info('notification sent');
                    });
                  },
                },
                'Send my a notification please !'
              )
            );
          },
          g = function () {
            return r.createElement('h1', null, 'Why');
          },
          y = function () {
            return r.createElement('h1', null, 'About');
          },
          w = function () {
            return r.createElement('div', null, 'PAGE NOT FOUND :-(');
          },
          x = n(3391),
          k = function () {
            if ('undefined' == typeof navigator) return null;
            var e = (0, r.useState)(navigator.onLine),
              t = (0, x.Z)(e, 2),
              n = t[0],
              l = t[1],
              o = (0, r.useState)(!1),
              i = (0, x.Z)(o, 2),
              a = i[0],
              u = i[1],
              c = (0, r.useState)(!1),
              s = (0, x.Z)(c, 2),
              f = s[0],
              d = s[1];
            return (
              (0, r.useEffect)(function () {
                var e = function () {
                    return l(!0);
                  },
                  t = function () {
                    l(!1), u(!0);
                  };
                return (
                  window.addEventListener('online', e),
                  window.addEventListener('offline', t),
                  function () {
                    window.removeEventListener('online', e),
                      window.removeEventListener('offline', t);
                  }
                );
              }, []),
              (0, r.useEffect)(
                function () {
                  if (l && a) {
                    d(!0);
                    var e = setTimeout(function () {
                      return d(!1);
                    }, 2e3);
                    return function () {
                      return clearTimeout(e);
                    };
                  }
                },
                [n]
              ),
              n && !f
                ? null
                : n && f
                ? r.createElement(
                    'div',
                    null,
                    r.createElement('span', null, 'Welcome back on web ! 🎉')
                  )
                : r.createElement(
                    'div',
                    null,
                    r.createElement('span', null, 'You seem to be offline 😭')
                  )
            );
          },
          O = n(2465),
          N = function () {
            var e = (0, i.useQuery)(
                (0, a.Ps)(
                  v ||
                    (v = (0, O.Z)([
                      '\n      {\n        films {\n          id\n          image\n          title\n        }\n      }\n    ',
                    ]))
                )
              ),
              t = e.data;
            return e.loading
              ? null
              : r.createElement(
                  'ul',
                  null,
                  null == t
                    ? void 0
                    : t.films.map(function (e) {
                        return r.createElement(
                          'li',
                          { key: e.id },
                          r.createElement('img', { src: e.image, wrapped: !0 }),
                          r.createElement('div', null, e.title),
                          r.createElement('div', null, 'Film.')
                        );
                      })
                );
          },
          j = function () {
            return r.createElement(
              b,
              null,
              r.createElement(b.Menu, null, r.createElement(d, null)),
              r.createElement(k, null),
              r.createElement(
                b.Body,
                null,
                r.createElement(
                  s.rs,
                  null,
                  r.createElement(
                    s.AW,
                    { exact: !0, path: '/' },
                    r.createElement(E, null)
                  ),
                  r.createElement(
                    s.AW,
                    { path: '/why' },
                    r.createElement(g, null)
                  ),
                  r.createElement(
                    s.AW,
                    { path: '/about' },
                    r.createElement(y, null)
                  ),
                  r.createElement(
                    s.AW,
                    { path: '/films' },
                    r.createElement(N, null)
                  ),
                  r.createElement(s.AW, {
                    path: '/lazy',
                    render: function () {
                      var e = (0, c.ZP)(function () {
                        return n.e(140).then(n.bind(n, 4140));
                      });
                      return r.createElement(e, null);
                    },
                  }),
                  r.createElement(s.AW, null, r.createElement(w, null))
                )
              )
            );
          };
        (0, l.render)(
          r.createElement(
            i.ApolloProvider,
            { client: u },
            r.createElement(o.VK, null, r.createElement(j, null))
          ),
          document.getElementById('body')
        );
      },
      9799: function () {
        'serviceWorker' in navigator &&
          navigator.serviceWorker
            .register('/service-worker.js')
            .then(function (e) {
              console.log('Registration successful, scope is:', e.scope);
            })
            .catch(function (e) {
              console.log('Service worker registration failed, error:', e);
            });
      },
    },
    l = {};
  function o(e) {
    var t = l[e];
    if (void 0 !== t) return t.exports;
    var n = (l[e] = { id: e, loaded: !1, exports: {} });
    return r[e](n, n.exports, o), (n.loaded = !0), n.exports;
  }
  (o.m = r),
    (e = []),
    (o.O = function (t, n, r, l) {
      if (!n) {
        var i = 1 / 0;
        for (c = 0; c < e.length; c++) {
          (n = e[c][0]), (r = e[c][1]), (l = e[c][2]);
          for (var a = !0, u = 0; u < n.length; u++)
            (!1 & l || i >= l) &&
            Object.keys(o.O).every(function (e) {
              return o.O[e](n[u]);
            })
              ? n.splice(u--, 1)
              : ((a = !1), l < i && (i = l));
          a && (e.splice(c--, 1), (t = r()));
        }
        return t;
      }
      l = l || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > l; c--) e[c] = e[c - 1];
      e[c] = [n, r, l];
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, { a: t }), t;
    }),
    (o.d = function (e, t) {
      for (var n in t)
        o.o(t, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (o.f = {}),
    (o.e = function (e) {
      return Promise.all(
        Object.keys(o.f).reduce(function (t, n) {
          return o.f[n](e, t), t;
        }, [])
      );
    }),
    (o.u = function (e) {
      return e + '.76875f2049533c31e92d.js';
    }),
    (o.miniCssF = function (e) {}),
    (o.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (o.hmd = function (e) {
      return (
        (e = Object.create(e)).children || (e.children = []),
        Object.defineProperty(e, 'exports', {
          enumerable: !0,
          set: function () {
            throw new Error(
              'ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' +
                e.id
            );
          },
        }),
        e
      );
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t = {}),
    (n = 'react-redux:'),
    (o.l = function (e, r, l, i) {
      if (t[e]) t[e].push(r);
      else {
        var a, u;
        if (void 0 !== l)
          for (
            var c = document.getElementsByTagName('script'), s = 0;
            s < c.length;
            s++
          ) {
            var f = c[s];
            if (
              f.getAttribute('src') == e ||
              f.getAttribute('data-webpack') == n + l
            ) {
              a = f;
              break;
            }
          }
        a ||
          ((u = !0),
          ((a = document.createElement('script')).charset = 'utf-8'),
          (a.timeout = 120),
          o.nc && a.setAttribute('nonce', o.nc),
          a.setAttribute('data-webpack', n + l),
          (a.src = e)),
          (t[e] = [r]);
        var d = function (n, r) {
            (a.onerror = a.onload = null), clearTimeout(m);
            var l = t[e];
            if (
              (delete t[e],
              a.parentNode && a.parentNode.removeChild(a),
              l &&
                l.forEach(function (e) {
                  return e(r);
                }),
              n)
            )
              return n(r);
          },
          m = setTimeout(
            d.bind(null, void 0, { type: 'timeout', target: a }),
            12e4
          );
        (a.onerror = d.bind(null, a.onerror)),
          (a.onload = d.bind(null, a.onload)),
          u && document.head.appendChild(a);
      }
    }),
    (o.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (o.p = '/static/'),
    (function () {
      var e = { 143: 0 };
      (o.f.j = function (t, n) {
        var r = o.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else {
            var l = new Promise(function (n, l) {
              r = e[t] = [n, l];
            });
            n.push((r[2] = l));
            var i = o.p + o.u(t),
              a = new Error();
            o.l(
              i,
              function (n) {
                if (o.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var l = n && ('load' === n.type ? 'missing' : n.type),
                    i = n && n.target && n.target.src;
                  (a.message =
                    'Loading chunk ' + t + ' failed.\n(' + l + ': ' + i + ')'),
                    (a.name = 'ChunkLoadError'),
                    (a.type = l),
                    (a.request = i),
                    r[1](a);
                }
              },
              'chunk-' + t,
              t
            );
          }
      }),
        (o.O.j = function (t) {
          return 0 === e[t];
        });
      var t = function (t, n) {
          var r,
            l,
            i = n[0],
            a = n[1],
            u = n[2],
            c = 0;
          for (r in a) o.o(a, r) && (o.m[r] = a[r]);
          for (u && u(o), t && t(n); c < i.length; c++)
            (l = i[c]), o.o(e, l) && e[l] && e[l][0](), (e[i[c]] = 0);
          o.O();
        },
        n = (self.webpackChunkreact_redux = self.webpackChunkreact_redux || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var i = o.O(void 0, [216], function () {
    return o(1613);
  });
  i = o.O(i);
})();
//# sourceMappingURL=app.7087aef111c2ac8b3988.js.map
