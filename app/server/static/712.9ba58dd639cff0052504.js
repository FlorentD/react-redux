"use strict";

require("core-js/modules/es.array.map.js");

(self.webpackChunkreact_redux = self.webpackChunkreact_redux || []).push([[712], {
  7712: function _(e, t, n) {
    "use strict";

    n.r(t), n.d(t, {
      "default": function _default() {
        return m;
      }
    }), n(1249);

    var r = n(7294),
        u = n(3626),
        c = n(695),
        l = n(5155),
        a = n(5977),
        i = n(9495),
        f = (0, a.EN)(function (e) {
      var t = e.children,
          n = e.staticContext,
          u = (0, l.I0)();
      return (0, r.useEffect)(function () {
        n && n.fromServer || u((0, i.cu)());
      }, []), t((0, l.v9)(i.Zh));
    }),
        m = function m() {
      return r.createElement(f, null, function (e) {
        return r.createElement(u.Z.Group, null, e.map(function (e) {
          return r.createElement(u.Z, {
            key: e.id
          }, r.createElement(c.Z, {
            src: e.image,
            wrapped: !0
          }), r.createElement(u.Z.Content, null, r.createElement(u.Z.Header, null, e.title), r.createElement(u.Z.Meta, null, "Film.")));
        }));
      });
    };
  }
}]);