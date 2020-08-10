"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.to-string-tag");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.array.splice");

require("core-js/modules/es.array-buffer.slice");

require("core-js/modules/es.function.bind");

require("core-js/modules/es.function.name");

require("core-js/modules/es.json.to-string-tag");

require("core-js/modules/es.math.to-string-tag");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-properties");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.repeat");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.link");

require("core-js/modules/es.typed-array.uint8-array");

require("core-js/modules/es.typed-array.copy-within");

require("core-js/modules/es.typed-array.every");

require("core-js/modules/es.typed-array.fill");

require("core-js/modules/es.typed-array.filter");

require("core-js/modules/es.typed-array.find");

require("core-js/modules/es.typed-array.find-index");

require("core-js/modules/es.typed-array.for-each");

require("core-js/modules/es.typed-array.includes");

require("core-js/modules/es.typed-array.index-of");

require("core-js/modules/es.typed-array.iterator");

require("core-js/modules/es.typed-array.join");

require("core-js/modules/es.typed-array.last-index-of");

require("core-js/modules/es.typed-array.map");

require("core-js/modules/es.typed-array.reduce");

require("core-js/modules/es.typed-array.reduce-right");

require("core-js/modules/es.typed-array.reverse");

require("core-js/modules/es.typed-array.set");

require("core-js/modules/es.typed-array.slice");

require("core-js/modules/es.typed-array.some");

require("core-js/modules/es.typed-array.sort");

require("core-js/modules/es.typed-array.subarray");

require("core-js/modules/es.typed-array.to-locale-string");

require("core-js/modules/es.typed-array.to-string");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

require("core-js/modules/web.timers");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

!function (e) {
  function t(t) {
    for (var r, i, l = t[0], c = t[1], u = t[2], f = 0, d = []; f < l.length; f++) {
      i = l[f], Object.prototype.hasOwnProperty.call(o, i) && o[i] && d.push(o[i][0]), o[i] = 0;
    }

    for (r in c) {
      Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    }

    for (s && s(t); d.length;) {
      d.shift()();
    }

    return a.push.apply(a, u || []), n();
  }

  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, l = 1; l < n.length; l++) {
        var c = n[l];
        0 !== o[c] && (r = !1);
      }

      r && (a.splice(t--, 1), e = i(i.s = n[0]));
    }

    return e;
  }

  var r = {},
      o = {
    0: 0
  },
      a = [];

  function i(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
  }

  i.e = function (e) {
    var t = [],
        n = o[e];
    if (0 !== n) if (n) t.push(n[2]);else {
      var r = new Promise(function (t, r) {
        n = o[e] = [t, r];
      });
      t.push(n[2] = r);
      var a,
          l = document.createElement("script");
      l.charset = "utf-8", l.timeout = 120, i.nc && l.setAttribute("nonce", i.nc), l.src = function (e) {
        return i.p + "" + ({}[e] || e) + ".61dd9d0218cab55a77ca.js";
      }(e);
      var c = new Error();

      a = function a(t) {
        l.onerror = l.onload = null, clearTimeout(u);
        var n = o[e];

        if (0 !== n) {
          if (n) {
            var r = t && ("load" === t.type ? "missing" : t.type),
                a = t && t.target && t.target.src;
            c.message = "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")", c.name = "ChunkLoadError", c.type = r, c.request = a, n[1](c);
          }

          o[e] = void 0;
        }
      };

      var u = setTimeout(function () {
        a({
          type: "timeout",
          target: l
        });
      }, 12e4);
      l.onerror = l.onload = a, document.head.appendChild(l);
    }
    return Promise.all(t);
  }, i.m = e, i.c = r, i.d = function (e, t, n) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, i.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, i.t = function (e, t) {
    if (1 & t && (e = i(e)), 8 & t) return e;
    if (4 & t && "object" == (0, _typeof2["default"])(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      i.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return i.d(t, "a", t), t;
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.p = "/static/", i.oe = function (e) {
    throw console.error(e), e;
  };
  var l = window.webpackJsonp = window.webpackJsonp || [],
      c = l.push.bind(l);
  l.push = t, l = l.slice();

  for (var u = 0; u < l.length; u++) {
    t(l[u]);
  }

  var s = c;
  a.push([682, 1]), n();
}({
  365: function _(e, t, n) {
    "use strict";

    n.d(t, "b", function () {
      return v;
    }), n.d(t, "c", function () {
      return O;
    });
    n(354), n(356), n(357), n(359), n(360), n(362), n(363);
    var r = n(73),
        o = n.n(r),
        a = (n(170), n(112)),
        i = n.n(a),
        l = n(2),
        c = n.n(l),
        u = (n(165), n(167), n(387)),
        s = n(388),
        f = n.n(s),
        d = new u.a("reactredux-fr-db");
    d.version(1).stores({
      films: "++id,title,image"
    });

    var h = function () {
      var e = i()(o.a.mark(function e() {
        var t, n, r;
        return o.a.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, d.films.toArray();

              case 2:
                if (t = e.sent, navigator.onLine) {
                  e.next = 7;
                  break;
                }

                return e.abrupt("return", t);

              case 7:
                if (!f()(t)) {
                  e.next = 19;
                  break;
                }

                return e.next = 10, fetch("https://startmeup.herokuapp.com/api/movies");

              case 10:
                return n = e.sent, e.next = 13, n.json();

              case 13:
                return r = e.sent, e.next = 16, d.films.bulkPut(r);

              case 16:
                return e.abrupt("return", r);

              case 19:
                fetch("https://startmeup.herokuapp.com/api/movies").then(function (e) {
                  return e.json();
                }).then(function (e) {
                  return d.films.bulkPut(e);
                });

              case 20:
                return e.abrupt("return", t);

              case 21:
              case "end":
                return e.stop();
            }
          }
        }, e);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }();

    function b(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function p(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? b(Object(n), !0).forEach(function (t) {
          c()(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    var m = "".concat("FILM", "/UPDATE_FILMS"),
        g = {
      films: []
    };

    var y = function y(e) {
      return {
        type: m,
        payload: {
          films: e
        }
      };
    },
        v = function v() {
      return function () {
        var e = i()(o.a.mark(function e(t) {
          var n;
          return o.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, h();

                case 2:
                  n = e.sent, t(y(n));

                case 4:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }();
    },
        O = function O(e) {
      return e.FILM.films;
    };

    t.a = c()({}, "FILM", function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case m:
          return p(p({}, e), t.payload);

        default:
          return e;
      }
    });
  },
  433: function _(e, t) {
    "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js").then(function (e) {
      console.log("Registration successful, scope is:", e.scope);
    })["catch"](function (e) {
      console.log("Service worker registration failed, error:", e);
    });
  },
  682: function _(e, t, n) {
    "use strict";

    n.r(t);
    n(433);
    var r = n(1),
        o = n.n(r),
        a = n(68),
        i = n(178),
        l = n(138),
        c = n(367),
        u = n.n(c),
        s = n(139),
        f = n(28),
        d = n(711),
        h = (n(420), n(445), n(718)),
        b = n(2),
        p = n.n(b),
        m = {
      menu: [{
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
      }]
    };

    var g = function g(e) {
      return e.MENU.menu;
    },
        y = p()({}, "MENU", function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m;
      return e.type, e;
    }),
        v = function v() {
      return o.a.createElement(h.a, null, Object(i.c)(g).map(function (e) {
        var t = e.id,
            n = e.label,
            r = e.link;
        return o.a.createElement(h.a.Item, {
          key: t,
          name: t
        }, o.a.createElement(l.b, {
          to: r
        }, n));
      }));
    },
        O = (n(165), n(167), n(719)),
        w = n(117),
        k = n(717),
        E = (n(316), n(553), n(322), n(557), n(559), n(564), n(570), n(572), n(573), n(574), n(575), n(576), n(577), n(578), n(579), n(580), n(581), n(582), n(584), n(585), n(586), n(587), n(588), n(589), n(590), n(591), n(592), n(593), n(594), n(73)),
        C = n.n(E),
        j = (n(170), n(112)),
        P = n.n(j),
        x = null;

    function S(e) {
      for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/-/g, "+").replace(/_/g, "/"), n = window.atob(t), r = new Uint8Array(n.length), o = 0; o < n.length; ++o) {
        r[o] = n.charCodeAt(o);
      }

      return r;
    }

    "undefined" != typeof window && "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function (e) {
      return e.pushManager.getSubscription().then(function () {
        var t = P()(C.a.mark(function t(n) {
          var r, o, a;
          return C.a.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!n) {
                    t.next = 2;
                    break;
                  }

                  return t.abrupt("return", n);

                case 2:
                  return t.next = 4, fetch("/vapidPublicKey");

                case 4:
                  return r = t.sent, t.next = 7, r.text();

                case 7:
                  return o = t.sent, a = S(o), t.abrupt("return", e.pushManager.subscribe({
                    userVisibleOnly: !0,
                    applicationServerKey: a
                  }));

                case 10:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }));
        return function (e) {
          return t.apply(this, arguments);
        };
      }());
    }).then(function (e) {
      return x = e;
    });

    var _ = s.b.div.withConfig({
      displayName: "main__NotificationButton",
      componentId: "sc-14cy0bs-0"
    })(["margin:50px;"]),
        D = function D() {
      return o.a.createElement(O.a, {
        as: "h2",
        icon: !0,
        textAlign: "center"
      }, o.a.createElement(w.a, {
        name: "users",
        circular: !0
      }), o.a.createElement(O.a.Content, null, "Main"), o.a.createElement(_, null, o.a.createElement(k.a, {
        positive: !0,
        onClick: function onClick() {
          fetch("/sendNotification", {
            method: "post",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify({
              subscription: x
            })
          }).then(function () {
            return console.info("notification sent");
          });
        }
      }, "Send my a notification please !")));
    },
        A = function A() {
      return o.a.createElement("h1", null, "Why");
    },
        L = function L() {
      return o.a.createElement("h1", null, "About");
    },
        T = function T() {
      return o.a.createElement("div", null, "PAGE NOT FOUND :-(");
    },
        M = n(114),
        W = n.n(M),
        I = n(716),
        N = function N() {
      if ("undefined" == typeof navigator) return null;
      var e = Object(r.useState)(navigator.onLine),
          t = W()(e, 2),
          n = t[0],
          a = t[1],
          i = Object(r.useState)(!1),
          l = W()(i, 2),
          c = l[0],
          u = l[1],
          s = Object(r.useState)(!1),
          f = W()(s, 2),
          d = f[0],
          h = f[1];
      return Object(r.useEffect)(function () {
        var e = function e() {
          return a(!0);
        },
            t = function t() {
          a(!1), u(!0);
        };

        return window.addEventListener("online", e), window.addEventListener("offline", t), function () {
          window.removeEventListener("online", e), window.removeEventListener("offline", t);
        };
      }, []), Object(r.useEffect)(function () {
        if (a && c) {
          h(!0);
          var e = setTimeout(function () {
            return h(!1);
          }, 2e3);
          return function () {
            return clearTimeout(e);
          };
        }
      }, [n]), n && !d ? null : n && d ? o.a.createElement(I.a, {
        success: !0
      }, o.a.createElement(I.a.Header, null, "Welcome back on web ! 🎉")) : o.a.createElement(I.a, {
        warning: !0
      }, o.a.createElement(I.a.Header, null, "You seem to be offline 😭"));
    },
        R = n(720),
        F = n(715),
        H = n(702),
        z = Object(r.lazy)(function () {
      return n.e(2).then(n.bind(null, 723));
    }),
        B = function B() {
      return o.a.createElement(r.Suspense, {
        fallback: o.a.createElement(R.a, null, o.a.createElement(F.a, {
          active: !0
        }, o.a.createElement(H.a, {
          indeterminate: !0
        }, "Loading")))
      }, o.a.createElement(z, null));
    },
        U = n(378),
        J = n(385),
        X = function X() {
      return o.a.createElement(U.a, {
        data: [{
          country: "AD",
          "hot dog": 22,
          "hot dogColor": "hsl(259, 70%, 50%)",
          burger: 61,
          burgerColor: "hsl(325, 70%, 50%)",
          sandwich: 195,
          sandwichColor: "hsl(156, 70%, 50%)",
          kebab: 126,
          kebabColor: "hsl(136, 70%, 50%)",
          fries: 120,
          friesColor: "hsl(169, 70%, 50%)",
          donut: 183,
          donutColor: "hsl(54, 70%, 50%)"
        }, {
          country: "AE",
          "hot dog": 2,
          "hot dogColor": "hsl(318, 70%, 50%)",
          burger: 183,
          burgerColor: "hsl(109, 70%, 50%)",
          sandwich: 24,
          sandwichColor: "hsl(340, 70%, 50%)",
          kebab: 90,
          kebabColor: "hsl(97, 70%, 50%)",
          fries: 60,
          friesColor: "hsl(308, 70%, 50%)",
          donut: 161,
          donutColor: "hsl(142, 70%, 50%)"
        }, {
          country: "AF",
          "hot dog": 173,
          "hot dogColor": "hsl(231, 70%, 50%)",
          burger: 189,
          burgerColor: "hsl(276, 70%, 50%)",
          sandwich: 159,
          sandwichColor: "hsl(61, 70%, 50%)",
          kebab: 39,
          kebabColor: "hsl(57, 70%, 50%)",
          fries: 65,
          friesColor: "hsl(78, 70%, 50%)",
          donut: 50,
          donutColor: "hsl(259, 70%, 50%)"
        }, {
          country: "AG",
          "hot dog": 150,
          "hot dogColor": "hsl(198, 70%, 50%)",
          burger: 176,
          burgerColor: "hsl(40, 70%, 50%)",
          sandwich: 103,
          sandwichColor: "hsl(249, 70%, 50%)",
          kebab: 77,
          kebabColor: "hsl(174, 70%, 50%)",
          fries: 199,
          friesColor: "hsl(271, 70%, 50%)",
          donut: 54,
          donutColor: "hsl(266, 70%, 50%)"
        }, {
          country: "AI",
          "hot dog": 178,
          "hot dogColor": "hsl(341, 70%, 50%)",
          burger: 60,
          burgerColor: "hsl(355, 70%, 50%)",
          sandwich: 171,
          sandwichColor: "hsl(23, 70%, 50%)",
          kebab: 28,
          kebabColor: "hsl(246, 70%, 50%)",
          fries: 62,
          friesColor: "hsl(349, 70%, 50%)",
          donut: 102,
          donutColor: "hsl(357, 70%, 50%)"
        }, {
          country: "AL",
          "hot dog": 82,
          "hot dogColor": "hsl(243, 70%, 50%)",
          burger: 43,
          burgerColor: "hsl(321, 70%, 50%)",
          sandwich: 89,
          sandwichColor: "hsl(78, 70%, 50%)",
          kebab: 42,
          kebabColor: "hsl(308, 70%, 50%)",
          fries: 70,
          friesColor: "hsl(326, 70%, 50%)",
          donut: 64,
          donutColor: "hsl(39, 70%, 50%)"
        }, {
          country: "AM",
          "hot dog": 103,
          "hot dogColor": "hsl(350, 70%, 50%)",
          burger: 180,
          burgerColor: "hsl(229, 70%, 50%)",
          sandwich: 144,
          sandwichColor: "hsl(307, 70%, 50%)",
          kebab: 66,
          kebabColor: "hsl(268, 70%, 50%)",
          fries: 162,
          friesColor: "hsl(16, 70%, 50%)",
          donut: 59,
          donutColor: "hsl(101, 70%, 50%)"
        }],
        keys: ["hot dog", "burger", "sandwich", "kebab", "fries", "donut"],
        indexBy: "country",
        margin: {
          top: 50,
          right: 130,
          bottom: 50,
          left: 60
        },
        padding: .3,
        colors: {
          scheme: "nivo"
        },
        defs: [{
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: !0
        }, {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }],
        fill: [{
          match: {
            id: "fries"
          },
          id: "dots"
        }, {
          match: {
            id: "sandwich"
          },
          id: "lines"
        }],
        borderColor: {
          from: "color",
          modifiers: [["darker", 1.6]]
        },
        axisTop: null,
        axisRight: null,
        axisBottom: {
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: 32
        },
        axisLeft: {
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40
        },
        labelSkipWidth: 12,
        labelSkipHeight: 12,
        labelTextColor: {
          from: "color",
          modifiers: [["darker", 1.6]]
        },
        legends: [{
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: !1,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: .85,
          symbolSize: 20,
          effects: [{
            on: "hover",
            style: {
              itemOpacity: 1
            }
          }]
        }],
        animate: !0,
        motionStiffness: 90,
        motionDamping: 15
      });
    },
        Y = function Y() {
      return o.a.createElement(J.a, {
        matrix: [[223, 698, 40, 129, 187], [332, 170, 1276, 101, 366], [38, 339, 313, 432, 5], [159, 42, 284, 433, 448], [1640, 339, 854, 217, 1670]],
        keys: ["John", "Raoul", "Jane", "Marcel", "Ibrahim"],
        margin: {
          top: 60,
          right: 60,
          bottom: 90,
          left: 60
        },
        valueFormat: ".2f",
        padAngle: .02,
        innerRadiusRatio: .96,
        innerRadiusOffset: .02,
        arcOpacity: 1,
        arcBorderWidth: 1,
        arcBorderColor: {
          from: "color",
          modifiers: [["darker", .4]]
        },
        ribbonOpacity: .5,
        ribbonBorderWidth: 1,
        ribbonBorderColor: {
          from: "color",
          modifiers: [["darker", .4]]
        },
        enableLabel: !0,
        label: "id",
        labelOffset: 12,
        labelRotation: -90,
        labelTextColor: {
          from: "color",
          modifiers: [["darker", 1]]
        },
        colors: {
          scheme: "nivo"
        },
        isInteractive: !0,
        arcHoverOpacity: 1,
        arcHoverOthersOpacity: .25,
        ribbonHoverOpacity: .75,
        ribbonHoverOthersOpacity: .25,
        animate: !0,
        motionStiffness: 90,
        motionDamping: 7,
        legends: [{
          anchor: "bottom",
          direction: "row",
          justify: !1,
          translateX: 0,
          translateY: 70,
          itemWidth: 80,
          itemHeight: 14,
          itemsSpacing: 0,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [{
            on: "hover",
            style: {
              itemTextColor: "#000"
            }
          }]
        }]
      });
    };

    function q() {
      var e = u()(["\nhtml, body, #body {\n  height: 100%;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  color: rgb(0, 0, 0);\n  &:visited {\n    color: blue;\n  }\n}\n"]);
      return q = function q() {
        return e;
      }, e;
    }

    var G = Object(s.a)(q()),
        K = s.b.div.withConfig({
      displayName: "app__Layout",
      componentId: "vbjlqm-0"
    })(['padding:10px;background-image:url("/image/background.jpg");background-position:center;background-size:cover;background-attachment:fixed;background-color:#f0efef;color:black;height:100%;']),
        V = function V() {
      return o.a.createElement(K, null, o.a.createElement(G, null), o.a.createElement(v, null), o.a.createElement(Y, null), o.a.createElement(X, null), o.a.createElement(N, null), o.a.createElement(d.a, null, o.a.createElement(f.c, null, o.a.createElement(f.a, {
        exact: !0,
        path: "/",
        component: D
      }), o.a.createElement(f.a, {
        path: "/why",
        component: A
      }), o.a.createElement(f.a, {
        path: "/about",
        component: L
      }), o.a.createElement(f.a, {
        path: "/films",
        component: B
      }), o.a.createElement(f.a, {
        component: T
      }))));
    },
        Q = n(83),
        Z = (n(354), n(356), n(357), n(359), n(360), n(362), n(363), n(365));

    function $(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function ee(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? $(Object(n), !0).forEach(function (t) {
          p()(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    var te = Object(Q.c)(ee(ee({}, y), Z.a)),
        ne = n(389),
        re = (n(679), n(680), n(681), n(30)),
        oe = n.n(re),
        ae = function ae(e) {
      return function (t) {
        return function (n) {
          oe()(n) ? console.info(["%c", "call ", n.name.slice(1), "()"].join(""), "font-weight:bold;") : (console.group(n.type), console.info("dispatching", n));
          var r = t(n);
          return oe()(n) || (console.info("next state", e.getState()), console.groupEnd(n.type)), r;
        };
      };
    },
        ie = window.__PRELOADED_STATE__;

    delete window.__PRELOADED_STATE__;
    var le = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Q.d,
        ce = Object(Q.e)(te, ie, le(Object(Q.a)(ne.a, ae)));
    Object(a.hydrate)(o.a.createElement(l.a, null, o.a.createElement(i.a, {
      store: ce
    }, o.a.createElement(V, null))), document.getElementById("body"));
  }
});