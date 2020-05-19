"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.string.link");

(window.webpackJsonp = window.webpackJsonp || []).push([[2], {
  379: function _(e, t, a) {
    "use strict";

    a.r(t);
    var n = a(0),
        c = a.n(n),
        r = a(2),
        l = a.n(r),
        i = a(10),
        s = a.n(i),
        o = a(11),
        d = a.n(o),
        m = a(12),
        p = a.n(m),
        u = a(13),
        b = a.n(u),
        h = a(5),
        j = a.n(h),
        f = a(14),
        O = a.n(f),
        N = a(1),
        E = a.n(N),
        k = a(3),
        v = a.n(k),
        g = (a(6), a(16)),
        x = a(79),
        y = a(78),
        C = a(4),
        w = a(194),
        A = (a(35), a(149));

    function P(e) {
      var t = e.children,
          a = e.className,
          n = e.content,
          r = e.textAlign,
          i = v()(Object(g.c)(r), "description", a),
          s = Object(x.a)(P, e),
          o = Object(y.a)(P, e);
      return c.a.createElement(o, l()({}, s, {
        className: i
      }), C.a.isNil(t) ? n : t);
    }

    P.handledProps = ["as", "children", "className", "content", "textAlign"], P.propTypes = {};
    var G = P;

    function T(e) {
      var t = e.children,
          a = e.className,
          n = e.content,
          r = e.textAlign,
          i = v()(Object(g.c)(r), "header", a),
          s = Object(x.a)(T, e),
          o = Object(y.a)(T, e);
      return c.a.createElement(o, l()({}, s, {
        className: i
      }), C.a.isNil(t) ? n : t);
    }

    T.handledProps = ["as", "children", "className", "content", "textAlign"], T.propTypes = {};
    var K = T;

    function H(e) {
      var t = e.children,
          a = e.className,
          n = e.content,
          r = e.textAlign,
          i = v()(Object(g.c)(r), "meta", a),
          s = Object(x.a)(H, e),
          o = Object(y.a)(H, e);
      return c.a.createElement(o, l()({}, s, {
        className: i
      }), C.a.isNil(t) ? n : t);
    }

    H.handledProps = ["as", "children", "className", "content", "textAlign"], H.propTypes = {};
    var J = H;

    function M(e) {
      var t = e.children,
          a = e.className,
          n = e.content,
          r = e.description,
          i = e.extra,
          s = e.header,
          o = e.meta,
          d = e.textAlign,
          m = v()(Object(g.a)(i, "extra"), Object(g.c)(d), "content", a),
          p = Object(x.a)(M, e),
          u = Object(y.a)(M, e);
      return C.a.isNil(t) ? C.a.isNil(n) ? c.a.createElement(u, l()({}, p, {
        className: m
      }), Object(A.b)(K, function (e) {
        return {
          content: e
        };
      }, s, {
        autoGenerateKey: !1
      }), Object(A.b)(J, function (e) {
        return {
          content: e
        };
      }, o, {
        autoGenerateKey: !1
      }), Object(A.b)(G, function (e) {
        return {
          content: e
        };
      }, r, {
        autoGenerateKey: !1
      })) : c.a.createElement(u, l()({}, p, {
        className: m
      }), n) : c.a.createElement(u, l()({}, p, {
        className: m
      }), t);
    }

    M.handledProps = ["as", "children", "className", "content", "description", "extra", "header", "meta", "textAlign"], M.propTypes = {};
    var R = M,
        D = a(46),
        F = a.n(D);

    function S(e) {
      var t = e.centered,
          a = e.children,
          n = e.className,
          r = e.content,
          i = e.doubling,
          s = e.items,
          o = e.itemsPerRow,
          d = e.stackable,
          m = e.textAlign,
          p = v()("ui", Object(g.a)(t, "centered"), Object(g.a)(i, "doubling"), Object(g.a)(d, "stackable"), Object(g.c)(m), Object(g.f)(o), "cards", n),
          u = Object(x.a)(S, e),
          b = Object(y.a)(S, e);
      if (!C.a.isNil(a)) return c.a.createElement(b, l()({}, u, {
        className: p
      }), a);
      if (!C.a.isNil(r)) return c.a.createElement(b, l()({}, u, {
        className: p
      }), r);
      var h = F()(s, function (e) {
        var t = e.key || [e.header, e.description].join("-");
        return c.a.createElement(z, l()({
          key: t
        }, e));
      });
      return c.a.createElement(b, l()({}, u, {
        className: p
      }), h);
    }

    S.handledProps = ["as", "centered", "children", "className", "content", "doubling", "items", "itemsPerRow", "stackable", "textAlign"], S.propTypes = {};

    var q = S,
        z = function (e) {
      function t() {
        var e, a;
        s()(this, t);

        for (var n = arguments.length, c = new Array(n), r = 0; r < n; r++) {
          c[r] = arguments[r];
        }

        return a = p()(this, (e = b()(t)).call.apply(e, [this].concat(c))), E()(j()(a), "handleClick", function (e) {
          var t = a.props.onClick;
          t && t(e, a.props);
        }), a;
      }

      return O()(t, e), d()(t, [{
        key: "render",
        value: function value() {
          var e = this.props,
              a = e.centered,
              n = e.children,
              r = e.className,
              i = e.color,
              s = e.content,
              o = e.description,
              d = e.extra,
              m = e.fluid,
              p = e.header,
              u = e.href,
              b = e.image,
              h = e.link,
              j = e.meta,
              f = e.onClick,
              O = e.raised,
              N = v()("ui", i, Object(g.a)(a, "centered"), Object(g.a)(m, "fluid"), Object(g.a)(h, "link"), Object(g.a)(O, "raised"), "card", r),
              E = Object(x.a)(t, this.props),
              k = Object(y.a)(t, this.props, function () {
            if (f) return "a";
          });
          return C.a.isNil(n) ? C.a.isNil(s) ? c.a.createElement(k, l()({}, E, {
            className: N,
            href: u,
            onClick: this.handleClick
          }), w.a.create(b, {
            autoGenerateKey: !1,
            defaultProps: {
              ui: !1,
              wrapped: !0
            }
          }), (o || p || j) && c.a.createElement(R, {
            description: o,
            header: p,
            meta: j
          }), d && c.a.createElement(R, {
            extra: !0
          }, d)) : c.a.createElement(k, l()({}, E, {
            className: N,
            href: u,
            onClick: this.handleClick
          }), s) : c.a.createElement(k, l()({}, E, {
            className: N,
            href: u,
            onClick: this.handleClick
          }), n);
        }
      }]), t;
    }(n.Component);

    E()(z, "Content", R), E()(z, "Description", G), E()(z, "Group", q), E()(z, "Header", K), E()(z, "Meta", J), E()(z, "handledProps", ["as", "centered", "children", "className", "color", "content", "description", "extra", "fluid", "header", "href", "image", "link", "meta", "onClick", "raised"]), z.propTypes = {};
    var B = a(77),
        I = a(31),
        L = a(174);
    var Q = Object(I.f)(function (_ref) {
      var e = _ref.children,
          t = _ref.staticContext;
      var a = Object(B.b)();
      return Object(n.useEffect)(function () {
        t && t.fromServer || a(Object(L.b)());
      }, []), e(Object(B.c)(L.c));
    });

    t.default = function () {
      return c.a.createElement(Q, null, function (e) {
        return c.a.createElement(z.Group, null, e.map(function (e) {
          return c.a.createElement(z, {
            key: e.id
          }, c.a.createElement(w.a, {
            src: e.image,
            wrapped: !0
          }), c.a.createElement(z.Content, null, c.a.createElement(z.Header, null, e.title), c.a.createElement(z.Meta, null, "Film.")));
        }));
      });
    };
  }
}]);