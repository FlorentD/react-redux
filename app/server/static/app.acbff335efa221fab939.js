"use strict";

require("core-js/modules/esnext.async-iterator.map.js");

require("core-js/modules/esnext.iterator.map.js");

require("core-js/modules/esnext.async-iterator.reduce.js");

require("core-js/modules/esnext.iterator.constructor.js");

require("core-js/modules/esnext.iterator.reduce.js");

require("core-js/modules/esnext.async-iterator.for-each.js");

require("core-js/modules/esnext.iterator.for-each.js");

!function () {
  var e,
      n,
      t = {
    2974: function (e, n, t) {
      "use strict";

      var r = {};
      t.r(r);
      var l = {};
      t.r(l);
      var o = {};
      t.r(o), t(2658);

      var a = t(3379),
          i = t.n(a),
          u = (i()(r.default, {
        insert: "head",
        singleton: !1
      }), r.default.locals, {
        insert: "head",
        singleton: !1
      }),
          c = (i()(l.default, u), l.default.locals, {
        insert: "head",
        singleton: !1
      }),
          s = (i()(o.default, c), o.default.locals, t(7294)),
          d = t(3935),
          f = t(3727),
          m = t(6829),
          h = t(1439),
          v = new h.fe({
        uri: "/api",
        cache: new h.h4().restore(window.__APOLLO_STATE__)
      }),
          b = (t(1539), t(8674), t(2168)),
          p = t(5977),
          E = (t(1249), t(9254), [{
        id: "item1",
        label: "Main",
        link: ""
      }, {
        id: "item2",
        label: "Why",
        link: "why"
      }, {
        id: "item3",
        label: "About",
        link: "about"
      }, {
        id: "item4",
        label: "NoMatch",
        link: "nomatch"
      }, {
        id: "item5",
        label: "Filmz",
        link: "films"
      }, {
        id: "item6",
        label: "Lazy",
        link: "lazy"
      }]),
          g = function () {
        return s.createElement("ul", {
          className: "flex flex-col mt-4"
        }, E.map(function (e) {
          var n = e.id,
              t = e.label,
              r = e.link;
          return s.createElement("li", {
            key: n,
            name: n
          }, s.createElement(f.rU, {
            className: "block p-4 text-white visited:text-blue-100 font-bold hover:text-blue-200 text-xl",
            to: r
          }, t));
        }));
      },
          y = function (e) {
        var n = e.children;
        return s.createElement(s.Fragment, null, s.createElement("div", {
          className: "absolute w-full h-screen z-0 flex"
        }, s.createElement("div", {
          className: "bg-blue-800 flex-1 h-screen"
        }), s.createElement("div", {
          className: "bg-blue-100 flex-1 h-screen"
        })), s.createElement("div", {
          className: "relative w-full h-screen bg-blue-100 xl:w-xl m-auto z-10"
        }, s.createElement("div", {
          className: "grid grid-cols-12 gap-4"
        }, n)));
      };

      y.Menu = function (e) {
        var n = e.children;
        return s.createElement("div", {
          className: "col-start-1 col-end-4 co h-screen bg-blue-800 border-r-8 border-blue-900"
        }, n);
      }, y.Body = function (e) {
        var n = e.children;
        return s.createElement("div", {
          className: "col-span-9 h-screen bg-blue-100"
        }, n);
      };

      var w,
          x = y,
          k = (t(9601), t(7154)),
          N = t.n(k),
          A = function (e) {
        var n = Object.assign({}, e);
        return s.createElement("button", N()({
          className: "rounded-md bg-button hover:bg-buttonFocused py-2 px-4 text-white font-bold text-sm"
        }, n));
      },
          j = function () {
        return s.createElement("div", {
          className: "text-center"
        }, s.createElement("h1", null, "Main"), s.createElement(A, {
          onClick: function () {
            fetch("/sendNotification", {
              method: "post",
              headers: {
                "Content-type": "application/json"
              },
              body: {}
            }).then(function () {
              return console.info("notification sent");
            });
          }
        }, "Send my a notification please !"));
      },
          O = function () {
        return s.createElement("h1", null, "Why");
      },
          S = function () {
        return s.createElement("h1", null, "About");
      },
          P = function () {
        return s.createElement("div", null, "PAGE NOT FOUND :-(");
      },
          T = (t(2564), t(3038)),
          W = t.n(T),
          _ = function () {
        if ("undefined" == typeof navigator) return null;
        var e = (0, s.useState)(navigator.onLine),
            n = W()(e, 2),
            t = n[0],
            r = n[1],
            l = (0, s.useState)(!1),
            o = W()(l, 2),
            a = o[0],
            i = o[1],
            u = (0, s.useState)(!1),
            c = W()(u, 2),
            d = c[0],
            f = c[1];
        return (0, s.useEffect)(function () {
          var e = function () {
            return r(!0);
          },
              n = function () {
            r(!1), i(!0);
          };

          return window.addEventListener("online", e), window.addEventListener("offline", n), function () {
            window.removeEventListener("online", e), window.removeEventListener("offline", n);
          };
        }, []), (0, s.useEffect)(function () {
          if (r && a) {
            f(!0);
            var e = setTimeout(function () {
              return f(!1);
            }, 2e3);
            return function () {
              return clearTimeout(e);
            };
          }
        }, [t]), t && !d ? null : t && d ? s.createElement("div", null, s.createElement("span", null, "Welcome back on web ! 🎉")) : s.createElement("div", null, s.createElement("span", null, "You seem to be offline 😭"));
      },
          L = t(8655),
          M = t.n(L),
          C = function () {
        var e = (0, m.useQuery)((0, h.Ps)(w || (w = M()(["\n      {\n        films {\n          id\n          image\n          title\n        }\n      }\n    "])))),
            n = e.data;
        return e.loading ? null : s.createElement("ul", null, null == n ? void 0 : n.films.map(function (e) {
          return s.createElement("li", {
            key: e.id
          }, s.createElement("img", {
            src: e.image,
            wrapped: !0
          }), s.createElement("div", null, e.title), s.createElement("div", null, "Film."));
        }));
      },
          F = function () {
        return s.createElement(x, null, s.createElement(x.Menu, null, s.createElement(g, null)), s.createElement(_, null), s.createElement(x.Body, null, s.createElement(p.rs, null, s.createElement(p.AW, {
          exact: !0,
          path: "/"
        }, s.createElement(j, null)), s.createElement(p.AW, {
          path: "/why"
        }, s.createElement(O, null)), s.createElement(p.AW, {
          path: "/about"
        }, s.createElement(S, null)), s.createElement(p.AW, {
          path: "/films"
        }, s.createElement(C, null)), s.createElement(p.AW, {
          path: "/lazy",
          render: function () {
            var e = (0, b.ZP)(function () {
              return t.e(140).then(t.bind(t, 4140));
            });
            return s.createElement(e, null);
          }
        }), s.createElement(p.AW, null, s.createElement(P, null)))));
      };

      (0, d.render)(s.createElement(m.ApolloProvider, {
        client: v
      }, s.createElement(f.VK, null, s.createElement(F, null))), document.getElementById("body"));
    },
    2658: function () {
      "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js").then(function (e) {
        console.log("Registration successful, scope is:", e.scope);
      }).catch(function (e) {
        console.log("Service worker registration failed, error:", e);
      });
    }
  },
      r = {};

  function l(e) {
    if (r[e]) return r[e].exports;
    var n = r[e] = {
      id: e,
      loaded: !1,
      exports: {}
    };
    return t[e](n, n.exports, l), n.loaded = !0, n.exports;
  }

  l.m = t, l.x = function () {}, l.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return l.d(n, {
      a: n
    }), n;
  }, l.d = function (e, n) {
    for (var t in n) l.o(n, t) && !l.o(e, t) && Object.defineProperty(e, t, {
      enumerable: !0,
      get: n[t]
    });
  }, l.f = {}, l.e = function (e) {
    return Promise.all(Object.keys(l.f).reduce(function (n, t) {
      return l.f[t](e, n), n;
    }, []));
  }, l.u = function (e) {
    return e + ".76875f2049533c31e92d.js";
  }, l.miniCssF = function (e) {}, l.g = function () {
    if ("object" == typeof globalThis) return globalThis;

    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  }(), l.hmd = function (e) {
    return (e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
      enumerable: !0,
      set: function () {
        throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id);
      }
    }), e;
  }, l.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, e = {}, n = "react-redux:", l.l = function (t, r, o, a) {
    if (e[t]) e[t].push(r);else {
      var i, u;
      if (void 0 !== o) for (var c = document.getElementsByTagName("script"), s = 0; s < c.length; s++) {
        var d = c[s];

        if (d.getAttribute("src") == t || d.getAttribute("data-webpack") == n + o) {
          i = d;
          break;
        }
      }
      i || (u = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, l.nc && i.setAttribute("nonce", l.nc), i.setAttribute("data-webpack", n + o), i.src = t), e[t] = [r];

      var f = function (n, r) {
        i.onerror = i.onload = null, clearTimeout(m);
        var l = e[t];
        if (delete e[t], i.parentNode && i.parentNode.removeChild(i), l && l.forEach(function (e) {
          return e(r);
        }), n) return n(r);
      },
          m = setTimeout(f.bind(null, void 0, {
        type: "timeout",
        target: i
      }), 12e4);

      i.onerror = f.bind(null, i.onerror), i.onload = f.bind(null, i.onload), u && document.head.appendChild(i);
    }
  }, l.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.p = "/static/", function () {
    var e = {
      143: 0
    },
        n = [[2974, 216]];

    l.f.j = function (n, t) {
      var r = l.o(e, n) ? e[n] : void 0;
      if (0 !== r) if (r) t.push(r[2]);else {
        var o = new Promise(function (t, l) {
          r = e[n] = [t, l];
        });
        t.push(r[2] = o);
        var a = l.p + l.u(n),
            i = new Error();
        l.l(a, function (t) {
          if (l.o(e, n) && (0 !== (r = e[n]) && (e[n] = void 0), r)) {
            var o = t && ("load" === t.type ? "missing" : t.type),
                a = t && t.target && t.target.src;
            i.message = "Loading chunk " + n + " failed.\n(" + o + ": " + a + ")", i.name = "ChunkLoadError", i.type = o, i.request = a, r[1](i);
          }
        }, "chunk-" + n, n);
      }
    };

    var t = function () {},
        r = function (r, o) {
      for (var a, i, u = o[0], c = o[1], s = o[2], d = o[3], f = 0, m = []; f < u.length; f++) i = u[f], l.o(e, i) && e[i] && m.push(e[i][0]), e[i] = 0;

      for (a in c) l.o(c, a) && (l.m[a] = c[a]);

      for (s && s(l), r && r(o); m.length;) m.shift()();

      return d && n.push.apply(n, d), t();
    },
        o = self.webpackChunkreact_redux = self.webpackChunkreact_redux || [];

    function a() {
      for (var t, r = 0; r < n.length; r++) {
        for (var o = n[r], a = !0, i = 1; i < o.length; i++) {
          var u = o[i];
          0 !== e[u] && (a = !1);
        }

        a && (n.splice(r--, 1), t = l(l.s = o[0]));
      }

      return 0 === n.length && (l.x(), l.x = function () {}), t;
    }

    o.forEach(r.bind(null, 0)), o.push = r.bind(null, o.push.bind(o));
    var i = l.x;

    l.x = function () {
      return l.x = i || function () {}, (t = a)();
    };
  }(), l.x();
}();