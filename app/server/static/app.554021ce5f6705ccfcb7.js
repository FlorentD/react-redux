"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.to-string-tag.js");

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.array.splice.js");

require("core-js/modules/es.function.bind.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.json.to-string-tag.js");

require("core-js/modules/es.math.to-string-tag.js");

require("core-js/modules/es.object.create.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.string.link.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/web.timers.js");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

!function () {
  var e,
      n,
      t = {
    6404: function _(e, n, t) {
      "use strict";

      t(2658);

      var r,
          o,
          i = t(7294),
          l = t(3935),
          a = t(3727),
          c = t(6829),
          u = t(1439),
          d = new u.fe({
        uri: "/api",
        cache: new u.h4().restore(window.__APOLLO_STATE__)
      }),
          m = (t(1539), t(8674), t(8655)),
          s = t.n(m),
          f = t(2168),
          p = t(9163),
          h = t(5977),
          g = (t(1249), t(9254), [{
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
          b = p.ZP.ul.withConfig({
        displayName: "menu__List",
        componentId: "sc-1c9xkt1-0"
      })(["padding:0;margin:0;background-color:var(--background-color);border-radius:4px;display:flex;"]),
          v = p.ZP.li.withConfig({
        displayName: "menu__Item",
        componentId: "sc-1c9xkt1-1"
      })(["padding:12px;position:relative;font-size:smaller;::before{position:absolute;content:'';top:0;right:0;height:100%;width:1px;background:gainsboro;}"]),
          E = function E() {
        return i.createElement(b, null, g.map(function (e) {
          var n = e.id,
              t = e.label,
              r = e.link;
          return i.createElement(v, {
            key: n,
            name: n
          }, i.createElement(a.rU, {
            to: r
          }, t));
        }));
      },
          y = p.ZP.button.withConfig({
        displayName: "main__NotificationButton",
        componentId: "sc-14cy0bs-0"
      })(["margin:50px;border-radius:6px;background-color:rgb(33,186,69);cursor:pointer;padding:10px 20px;border:none;color:white;font-weight:bold;font-size:smaller;:hover{background-color:#16ab39;}"]),
          k = p.ZP.div.withConfig({
        displayName: "main__MainWrapper",
        componentId: "sc-14cy0bs-1"
      })(["text-align:center;"]),
          w = function w() {
        return i.createElement(k, null, i.createElement("h2", null, "Main"), i.createElement(y, {
          onClick: function onClick() {
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
          x = function x() {
        return i.createElement("h1", null, "Why");
      },
          _ = function _() {
        return i.createElement("h1", null, "About");
      },
          P = function P() {
        return i.createElement("div", null, "PAGE NOT FOUND :-(");
      },
          A = (t(2564), t(3038)),
          L = t.n(A),
          j = function j() {
        if ("undefined" == typeof navigator) return null;
        var e = (0, i.useState)(navigator.onLine),
            n = L()(e, 2),
            t = n[0],
            r = n[1],
            o = (0, i.useState)(!1),
            l = L()(o, 2),
            a = l[0],
            c = l[1],
            u = (0, i.useState)(!1),
            d = L()(u, 2),
            m = d[0],
            s = d[1];
        return (0, i.useEffect)(function () {
          var e = function e() {
            return r(!0);
          },
              n = function n() {
            r(!1), c(!0);
          };

          return window.addEventListener("online", e), window.addEventListener("offline", n), function () {
            window.removeEventListener("online", e), window.removeEventListener("offline", n);
          };
        }, []), (0, i.useEffect)(function () {
          if (r && a) {
            s(!0);
            var e = setTimeout(function () {
              return s(!1);
            }, 2e3);
            return function () {
              return clearTimeout(e);
            };
          }
        }, [t]), t && !m ? null : t && m ? i.createElement("div", null, i.createElement("span", null, "Welcome back on web ! 🎉")) : i.createElement("div", null, i.createElement("span", null, "You seem to be offline 😭"));
      },
          S = function S() {
        var e = (0, c.useQuery)((0, u.Ps)(r || (r = s()(["\n      {\n        films {\n          id\n          image\n          title\n        }\n      }\n    "])))),
            n = e.data;
        return e.loading ? null : i.createElement("ul", null, null == n ? void 0 : n.films.map(function (e) {
          return i.createElement("li", {
            key: e.id
          }, i.createElement("img", {
            src: e.image,
            wrapped: !0
          }), i.createElement("div", null, e.title), i.createElement("div", null, "Film."));
        }));
      },
          C = (0, p.vJ)(o || (o = s()(["\n  :root {\n    --background-color:#f0efef;\n    --primary-color: #000;\n  }\n  \n  html.dark {\n    --background-color:#000;\n    --primary-color: #f0efef;\n  }\n\n  html.theming, \n  html.theming * {\n    transition: all 0.2s linear;\n  }\n  \nhtml, body, #body {\n  height: 100%;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  color: var(--primary-color);\n  &:visited {\n    color: blue;\n  }\n}\n"]))),
          N = p.ZP.div.withConfig({
        displayName: "app__Layout",
        componentId: "vbjlqm-0"
      })(["padding:10px;background-image:url('/image/background.jpg');background-position:center;background-size:cover;background-attachment:fixed;color:var(--primary-color);height:100%;"]),
          O = function O() {
        return i.createElement(N, null, i.createElement(C, null), i.createElement(E, null), i.createElement(j, null), i.createElement("div", null, i.createElement(h.rs, null, i.createElement(h.AW, {
          exact: !0,
          path: "/"
        }, i.createElement(w, null)), i.createElement(h.AW, {
          path: "/why"
        }, i.createElement(x, null)), i.createElement(h.AW, {
          path: "/about"
        }, i.createElement(_, null)), i.createElement(h.AW, {
          path: "/films"
        }, i.createElement(S, null)), i.createElement(h.AW, {
          path: "/lazy",
          render: function render() {
            var e = (0, f.ZP)(function () {
              return t.e(140).then(t.bind(t, 4140));
            });
            return i.createElement(e, null);
          }
        }), i.createElement(h.AW, null, i.createElement(P, null)))), i.createElement("button", {
          onClick: function onClick() {
            document.documentElement.classList.add("theming"), document.documentElement.addEventListener("transitionend", function () {
              return document.documentElement.classList.remove("theming");
            }, {
              once: !0
            }), document.documentElement.classList.toggle("dark");
          }
        }, "Switch theme"));
      };

      (0, l.render)(i.createElement(c.ApolloProvider, {
        client: d
      }, i.createElement(a.VK, null, i.createElement(O, null))), document.getElementById("body"));
    },
    2658: function _() {
      "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js").then(function (e) {
        console.log("Registration successful, scope is:", e.scope);
      })["catch"](function (e) {
        console.log("Service worker registration failed, error:", e);
      });
    }
  },
      r = {};

  function o(e) {
    if (r[e]) return r[e].exports;
    var n = r[e] = {
      id: e,
      loaded: !1,
      exports: {}
    };
    return t[e](n, n.exports, o), n.loaded = !0, n.exports;
  }

  o.m = t, o.x = function () {}, o.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return o.d(n, {
      a: n
    }), n;
  }, o.d = function (e, n) {
    for (var t in n) {
      o.o(n, t) && !o.o(e, t) && Object.defineProperty(e, t, {
        enumerable: !0,
        get: n[t]
      });
    }
  }, o.f = {}, o.e = function (e) {
    return Promise.all(Object.keys(o.f).reduce(function (n, t) {
      return o.f[t](e, n), n;
    }, []));
  }, o.u = function (e) {
    return e + ".76875f2049533c31e92d.js";
  }, o.g = function () {
    if ("object" == (typeof globalThis === "undefined" ? "undefined" : (0, _typeof2["default"])(globalThis))) return globalThis;

    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == (typeof window === "undefined" ? "undefined" : (0, _typeof2["default"])(window))) return window;
    }
  }(), o.hmd = function (e) {
    return (e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
      enumerable: !0,
      set: function set() {
        throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id);
      }
    }), e;
  }, o.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, e = {}, n = "react-redux:", o.l = function (t, r, i, l) {
    if (e[t]) e[t].push(r);else {
      var a, c;
      if (void 0 !== i) for (var u = document.getElementsByTagName("script"), d = 0; d < u.length; d++) {
        var m = u[d];

        if (m.getAttribute("src") == t || m.getAttribute("data-webpack") == n + i) {
          a = m;
          break;
        }
      }
      a || (c = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, o.nc && a.setAttribute("nonce", o.nc), a.setAttribute("data-webpack", n + i), a.src = t), e[t] = [r];

      var s = function s(n, r) {
        a.onerror = a.onload = null, clearTimeout(f);
        var o = e[t];
        if (delete e[t], a.parentNode && a.parentNode.removeChild(a), o && o.forEach(function (e) {
          return e(r);
        }), n) return n(r);
      },
          f = setTimeout(s.bind(null, void 0, {
        type: "timeout",
        target: a
      }), 12e4);

      a.onerror = s.bind(null, a.onerror), a.onload = s.bind(null, a.onload), c && document.head.appendChild(a);
    }
  }, o.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, o.p = "/static/", function () {
    var e = {
      143: 0
    },
        n = [[6404, 216]];

    o.f.j = function (n, t) {
      var r = o.o(e, n) ? e[n] : void 0;
      if (0 !== r) if (r) t.push(r[2]);else {
        var i = new Promise(function (t, o) {
          r = e[n] = [t, o];
        });
        t.push(r[2] = i);
        var l = o.p + o.u(n),
            a = new Error();
        o.l(l, function (t) {
          if (o.o(e, n) && (0 !== (r = e[n]) && (e[n] = void 0), r)) {
            var i = t && ("load" === t.type ? "missing" : t.type),
                l = t && t.target && t.target.src;
            a.message = "Loading chunk " + n + " failed.\n(" + i + ": " + l + ")", a.name = "ChunkLoadError", a.type = i, a.request = l, r[1](a);
          }
        }, "chunk-" + n, n);
      }
    };

    var t = function t() {},
        r = function r(_r, i) {
      for (var l, a, c = i[0], u = i[1], d = i[2], m = i[3], s = 0, f = []; s < c.length; s++) {
        a = c[s], o.o(e, a) && e[a] && f.push(e[a][0]), e[a] = 0;
      }

      for (l in u) {
        o.o(u, l) && (o.m[l] = u[l]);
      }

      for (d && d(o), _r && _r(i); f.length;) {
        f.shift()();
      }

      return m && n.push.apply(n, m), t();
    },
        i = self.webpackChunkreact_redux = self.webpackChunkreact_redux || [];

    function l() {
      for (var t, r = 0; r < n.length; r++) {
        for (var i = n[r], l = !0, a = 1; a < i.length; a++) {
          var c = i[a];
          0 !== e[c] && (l = !1);
        }

        l && (n.splice(r--, 1), t = o(o.s = i[0]));
      }

      return 0 === n.length && (o.x(), o.x = function () {}), t;
    }

    i.forEach(r.bind(null, 0)), i.push = r.bind(null, i.push.bind(i));
    var a = o.x;

    o.x = function () {
      return o.x = a || function () {}, (t = l)();
    };
  }(), o.x();
}();