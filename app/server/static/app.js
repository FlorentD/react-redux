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

require("core-js/modules/es.function.name");

require("core-js/modules/es.json.to-string-tag");

require("core-js/modules/es.math.to-string-tag");

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

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\nhtml, body, #body {\n  height: 100%;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  color: rgb(0, 0, 0);\n  &:visited {\n    color: blue;\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

!function (e) {
  function t(t) {
    for (var r, i, c = t[0], l = t[1], u = t[2], p = 0, f = []; p < c.length; p++) {
      i = c[p], Object.prototype.hasOwnProperty.call(o, i) && o[i] && f.push(o[i][0]), o[i] = 0;
    }

    for (r in l) {
      Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    }

    for (s && s(t); f.length;) {
      f.shift()();
    }

    return a.push.apply(a, u || []), n();
  }

  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, c = 1; c < n.length; c++) {
        var l = n[c];
        0 !== o[l] && (r = !1);
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
          c = document.createElement("script");
      c.charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.src = function (e) {
        return i.p + "" + ({}[e] || e) + ".js";
      }(e);
      var l = new Error();

      a = function a(t) {
        c.onerror = c.onload = null, clearTimeout(u);
        var n = o[e];

        if (0 !== n) {
          if (n) {
            var r = t && ("load" === t.type ? "missing" : t.type),
                a = t && t.target && t.target.src;
            l.message = "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")", l.name = "ChunkLoadError", l.type = r, l.request = a, n[1](l);
          }

          o[e] = void 0;
        }
      };

      var u = setTimeout(function () {
        a({
          type: "timeout",
          target: c
        });
      }, 12e4);
      c.onerror = c.onload = a, document.head.appendChild(c);
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
    if (4 & t && "object" == (0, _typeof2.default)(e) && e && e.__esModule) return e;
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
      return e.default;
    } : function () {
      return e;
    };
    return i.d(t, "a", t), t;
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.p = "/static/", i.oe = function (e) {
    throw console.error(e), e;
  };
  var c = window.webpackJsonp = window.webpackJsonp || [],
      l = c.push.bind(c);
  c.push = t, c = c.slice();

  for (var u = 0; u < c.length; u++) {
    t(c[u]);
  }

  var s = l;
  a.push([377, 1]), n();
}({
  174: function _(e, t, n) {
    "use strict";

    n.d(t, "b", function () {
      return p;
    }), n.d(t, "c", function () {
      return f;
    });
    var r = n(1),
        o = n.n(r),
        a = n(190),
        i = n(191),
        c = n.n(i);
    var l = new a.a("reactredux-fr-db");
    l.version(1).stores({
      films: "++id,title,image"
    });

    function u(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    var s = {
      films: []
    };

    var p = function p() {
      return /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(e) {
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.t0 = e;

                  _context2.t1 = function (e) {
                    return {
                      type: "FILM/UPDATE_FILMS",
                      payload: {
                        films: e
                      }
                    };
                  };

                  _context2.next = 4;
                  return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
                    var e, _e, _t;

                    return _regenerator.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return l.films.toArray();

                          case 2:
                            e = _context.sent;

                            if (navigator.onLine) {
                              _context.next = 5;
                              break;
                            }

                            return _context.abrupt("return", e);

                          case 5:
                            if (!c()(e)) {
                              _context.next = 15;
                              break;
                            }

                            _context.next = 8;
                            return fetch("https://startmeup.herokuapp.com/api/movies");

                          case 8:
                            _e = _context.sent;
                            _context.next = 11;
                            return _e.json();

                          case 11:
                            _t = _context.sent;
                            _context.next = 14;
                            return l.films.bulkPut(_t);

                          case 14:
                            return _context.abrupt("return", _t);

                          case 15:
                            return _context.abrupt("return", (fetch("https://startmeup.herokuapp.com/api/movies").then(function (e) {
                              return e.json();
                            }).then(function (e) {
                              return l.films.bulkPut(e);
                            }), e));

                          case 16:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }))();

                case 4:
                  _context2.t2 = _context2.sent;
                  _context2.t3 = (0, _context2.t1)(_context2.t2);
                  (0, _context2.t0)(_context2.t3);

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
    },
        f = function f(e) {
      return e.FILM.films;
    };

    t.a = {
      FILM: function FILM() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : s;
        var t = arguments.length > 1 ? arguments[1] : undefined;

        switch (t.type) {
          case "FILM/UPDATE_FILMS":
            return function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(n), !0).forEach(function (t) {
                  o()(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
              }

              return e;
            }({}, e, {}, t.payload);

          default:
            return e;
        }
      }
    };
  },
  203: function _(e, t) {
    "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js").then(function (e) {
      console.log("Registration successful, scope is:", e.scope);
    }).catch(function (e) {
      console.log("Service worker registration failed, error:", e);
    });
  },
  377: function _(e, t, n) {
    "use strict";

    n.r(t);
    n(203);
    var r = n(0),
        o = n.n(r),
        a = n(26),
        i = n(77),
        c = n(55),
        l = n(56),
        u = n(31),
        s = n(384),
        p = n(389);
    var f = {
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

    var m = function m(e) {
      return e.MENU.menu;
    };

    var d = {
      MENU: function MENU() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : f;
        return e.type, e;
      }
    };

    var b = function b() {
      return o.a.createElement(p.a, null, Object(i.c)(m).map(function (_ref3) {
        var e = _ref3.id,
            t = _ref3.label,
            n = _ref3.link;
        return o.a.createElement(p.a.Item, {
          key: e,
          name: e
        }, o.a.createElement(c.b, {
          to: n
        }, t));
      }));
    },
        h = n(390),
        y = n(49),
        g = n(388);

    var v = null;
    "undefined" != typeof window && "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function (e) {
      return e.pushManager.getSubscription().then( /*#__PURE__*/function () {
        var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(t) {
          var n, r;
          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!t) {
                    _context3.next = 2;
                    break;
                  }

                  return _context3.abrupt("return", t);

                case 2:
                  _context3.next = 4;
                  return fetch("/vapidPublicKey");

                case 4:
                  n = _context3.sent;

                  _context3.t0 = function (e) {
                    var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/-/g, "+").replace(/_/g, "/"),
                        n = window.atob(t),
                        r = new Uint8Array(n.length);

                    for (var _e2 = 0; _e2 < n.length; ++_e2) {
                      r[_e2] = n.charCodeAt(_e2);
                    }

                    return r;
                  };

                  _context3.next = 8;
                  return n.text();

                case 8:
                  _context3.t1 = _context3.sent;
                  r = (0, _context3.t0)(_context3.t1);
                  return _context3.abrupt("return", e.pushManager.subscribe({
                    userVisibleOnly: !0,
                    applicationServerKey: r
                  }));

                case 11:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x2) {
          return _ref4.apply(this, arguments);
        };
      }());
    }).then(function (e) {
      return v = e;
    });
    var O = l.b.div.withConfig({
      displayName: "main__NotificationButton",
      componentId: "sc-14cy0bs-0"
    })(["margin:50px;"]);

    var E = function E() {
      return o.a.createElement(h.a, {
        as: "h2",
        icon: !0,
        textAlign: "center"
      }, o.a.createElement(y.a, {
        name: "users",
        circular: !0
      }), o.a.createElement(h.a.Content, null, "Main"), o.a.createElement(O, null, o.a.createElement(g.a, {
        positive: !0,
        onClick: function onClick() {
          fetch("/sendNotification", {
            method: "post",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify({
              subscription: v
            })
          }).then(function () {
            return console.info("notification sent");
          });
        }
      }, "Send my a notification please !")));
    };

    var w = function w() {
      return o.a.createElement("h1", null, "Why");
    };

    var j = function j() {
      return o.a.createElement("h1", null, "About");
    },
        P = function P() {
      return o.a.createElement("div", null, "PAGE NOT FOUND :-(");
    },
        k = n(387);

    var _ = function _() {
      if ("undefined" == typeof navigator) return null;

      var _Object = Object(r.useState)(navigator.onLine),
          _Object2 = (0, _slicedToArray2.default)(_Object, 2),
          e = _Object2[0],
          t = _Object2[1],
          _Object3 = Object(r.useState)(!1),
          _Object4 = (0, _slicedToArray2.default)(_Object3, 2),
          n = _Object4[0],
          a = _Object4[1],
          _Object5 = Object(r.useState)(!1),
          _Object6 = (0, _slicedToArray2.default)(_Object5, 2),
          i = _Object6[0],
          c = _Object6[1];

      return Object(r.useEffect)(function () {
        var e = function e() {
          return t(!0);
        },
            n = function n() {
          t(!1), a(!0);
        };

        return window.addEventListener("online", e), window.addEventListener("offline", n), function () {
          window.removeEventListener("online", e), window.removeEventListener("offline", n);
        };
      }, []), Object(r.useEffect)(function () {
        if (t && n) {
          c(!0);

          var _e3 = setTimeout(function () {
            return c(!1);
          }, 2e3);

          return function () {
            return clearTimeout(_e3);
          };
        }
      }, [e]), e && !i ? null : e && i ? o.a.createElement(k.a, {
        success: !0
      }, o.a.createElement(k.a.Header, null, "Welcome back on web ! 🎉")) : o.a.createElement(k.a, {
        warning: !0
      }, o.a.createElement(k.a.Header, null, "You seem to be offline 😭"));
    },
        S = n(189),
        L = n.n(S),
        M = n(391),
        D = n(386),
        T = n(383);

    var A = L()({
      loader: function loader() {
        return n.e(2).then(n.bind(null, 379)).catch(function (e) {
          return console.error(e);
        });
      },
      modules: ["./Films"],
      webpack: function webpack() {
        return [379];
      },
      loading: function loading() {
        return o.a.createElement(M.a, null, o.a.createElement(D.a, {
          active: !0
        }, o.a.createElement(T.a, {
          indeterminate: !0
        }, "Loading")));
      }
    });
    var x = l.a(_templateObject()),
        N = l.b.div.withConfig({
      displayName: "app__Layout",
      componentId: "vbjlqm-0"
    })(["padding:10px;background-image:url('/image/background.jpg');background-position:center;background-size:cover;background-attachment:fixed;background-color:#f0efef;color:black;height:100%;"]);

    var I = function I() {
      return o.a.createElement(N, null, o.a.createElement(x, null), o.a.createElement(b, null), o.a.createElement(_, null), o.a.createElement(s.a, null, o.a.createElement(u.c, null, o.a.createElement(u.a, {
        exact: !0,
        path: "/",
        component: E
      }), o.a.createElement(u.a, {
        path: "/why",
        component: w
      }), o.a.createElement(u.a, {
        path: "/about",
        component: j
      }), o.a.createElement(u.a, {
        path: "/films",
        component: A
      }), o.a.createElement(u.a, {
        component: P
      }))));
    },
        C = n(33),
        F = n(1),
        U = n.n(F),
        W = n(174);

    function R(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    var J = Object(C.c)(function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? R(Object(n), !0).forEach(function (t) {
          U()(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }({}, d, {}, W.a)),
        q = n(192),
        z = n(28),
        B = n.n(z);

    var H = function H(e) {
      return function (t) {
        return function (n) {
          B()(n) ? console.info(["%c", "call ", n.name.slice(1), "()"].join(""), "font-weight:bold;") : (console.group(n.type), console.info("dispatching", n));
          var r = t(n);
          return B()(n) || (console.info("next state", e.getState()), console.groupEnd(n.type)), r;
        };
      };
    };

    var K = window.__PRELOADED_STATE__;
    delete window.__PRELOADED_STATE__;
    var V = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || C.d;
    var X = Object(C.e)(J, K, V(Object(C.a)(q.a, H)));
    Object(a.hydrate)(o.a.createElement(c.a, null, o.a.createElement(i.a, {
      store: X
    }, o.a.createElement(I, null))), document.getElementById("body"));
  }
});