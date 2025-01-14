"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [280],
  {
    7025: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = r(2265);
      /**
       * @license lucide-react v0.468.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let o = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        i = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t
            .filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t)
            .join(" ")
            .trim();
        };
      /**
       * @license lucide-react v0.468.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ var s = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      /**
       * @license lucide-react v0.468.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let a = (0, n.forwardRef)((e, t) => {
          let {
            color: r = "currentColor",
            size: o = 24,
            strokeWidth: a = 2,
            absoluteStrokeWidth: l,
            className: u = "",
            children: c,
            iconNode: f,
            ...p
          } = e;
          return (0, n.createElement)(
            "svg",
            {
              ref: t,
              ...s,
              width: o,
              height: o,
              stroke: r,
              strokeWidth: l ? (24 * Number(a)) / Number(o) : a,
              className: i("lucide", u),
              ...p,
            },
            [
              ...f.map((e) => {
                let [t, r] = e;
                return (0, n.createElement)(t, r);
              }),
              ...(Array.isArray(c) ? c : [c]),
            ]
          );
        }),
        l = ((e, t) => {
          let r = (0, n.forwardRef)((r, s) => {
            let { className: l, ...u } = r;
            return (0, n.createElement)(a, {
              ref: s,
              iconNode: t,
              className: i("lucide-".concat(o(e)), l),
              ...u,
            });
          });
          return (r.displayName = "".concat(e)), r;
        })("X", [
          ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
          ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
        ]);
    },
    7830: function (e, t) {
      /**
       * @license React
       * react.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = Symbol.for("react.element"),
        n =
          (Symbol.for("react.portal"),
          Symbol.for("react.fragment"),
          Symbol.for("react.strict_mode"),
          Symbol.for("react.profiler"),
          Symbol.for("react.provider"),
          Symbol.for("react.context"),
          Symbol.for("react.forward_ref"),
          Symbol.for("react.suspense"),
          Symbol.for("react.memo"),
          Symbol.for("react.lazy"),
          {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          }),
        o = Object.assign,
        i = {};
      function s(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = i),
          (this.updater = r || n);
      }
      function a() {}
      function l(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = i),
          (this.updater = r || n);
      }
      (s.prototype.isReactComponent = {}),
        (s.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (s.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (a.prototype = s.prototype);
      var u = (l.prototype = new a());
      (u.constructor = l), o(u, s.prototype), (u.isPureReactComponent = !0);
      var c = Object.prototype.hasOwnProperty,
        f = { key: !0, ref: !0, __self: !0, __source: !0 };
      t.createElement = function (e, t, n) {
        var o,
          i = {},
          s = null,
          a = null;
        if (null != t)
          for (o in (void 0 !== t.ref && (a = t.ref),
          void 0 !== t.key && (s = "" + t.key),
          t))
            c.call(t, o) && !f.hasOwnProperty(o) && (i[o] = t[o]);
        var l = arguments.length - 2;
        if (1 === l) i.children = n;
        else if (1 < l) {
          for (var u = Array(l), p = 0; p < l; p++) u[p] = arguments[p + 2];
          i.children = u;
        }
        if (e && e.defaultProps)
          for (o in (l = e.defaultProps)) void 0 === i[o] && (i[o] = l[o]);
        return { $$typeof: r, type: e, key: s, ref: a, props: i, _owner: null };
      };
    },
    4410: function (e, t, r) {
      e.exports = r(7830);
    },
    4446: function (e, t, r) {
      r.d(t, {
        M: function () {
          return v;
        },
      });
      var n = r(7437),
        o = r(2265),
        i = r(7797),
        s = r(458),
        a = r(9791);
      class l extends o.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function u(e) {
        let { children: t, isPresent: r } = e,
          i = (0, o.useId)(),
          s = (0, o.useRef)(null),
          u = (0, o.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: c } = (0, o.useContext)(a._);
        return (
          (0, o.useInsertionEffect)(() => {
            let { width: e, height: t, top: n, left: o } = u.current;
            if (r || !s.current || !e || !t) return;
            s.current.dataset.motionPopId = i;
            let a = document.createElement("style");
            return (
              c && (a.nonce = c),
              document.head.appendChild(a),
              a.sheet &&
                a.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      i,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(e, "px !important;\n            height: ")
                    .concat(t, "px !important;\n            top: ")
                    .concat(n, "px !important;\n            left: ")
                    .concat(o, "px !important;\n          }\n        ")
                ),
              () => {
                document.head.removeChild(a);
              }
            );
          }, [r]),
          (0, n.jsx)(l, {
            isPresent: r,
            childRef: s,
            sizeRef: u,
            children: o.cloneElement(t, { ref: s }),
          })
        );
      }
      let c = (e) => {
        let {
            children: t,
            initial: r,
            isPresent: a,
            onExitComplete: l,
            custom: c,
            presenceAffectsLayout: p,
            mode: d,
          } = e,
          h = (0, s.h)(f),
          m = (0, o.useId)(),
          y = (0, o.useCallback)(
            (e) => {
              for (let t of (h.set(e, !0), h.values())) if (!t) return;
              l && l();
            },
            [h, l]
          ),
          v = (0, o.useMemo)(
            () => ({
              id: m,
              initial: r,
              isPresent: a,
              custom: c,
              onExitComplete: y,
              register: (e) => (h.set(e, !1), () => h.delete(e)),
            }),
            p ? [Math.random(), y] : [a, y]
          );
        return (
          (0, o.useMemo)(() => {
            h.forEach((e, t) => h.set(t, !1));
          }, [a]),
          o.useEffect(() => {
            a || h.size || !l || l();
          }, [a]),
          "popLayout" === d &&
            (t = (0, n.jsx)(u, { isPresent: a, children: t })),
          (0, n.jsx)(i.O.Provider, { value: v, children: t })
        );
      };
      function f() {
        return new Map();
      }
      var p = r(5050),
        d = r(2159);
      let h = (e) => e.key || "";
      function m(e) {
        let t = [];
        return (
          o.Children.forEach(e, (e) => {
            (0, o.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      var y = r(9033);
      let v = (e) => {
        let {
          children: t,
          exitBeforeEnter: r,
          custom: i,
          initial: a = !0,
          onExitComplete: l,
          presenceAffectsLayout: u = !0,
          mode: f = "sync",
        } = e;
        (0, d.k)(!r, "Replace exitBeforeEnter with mode='wait'");
        let v = (0, o.useMemo)(() => m(t), [t]),
          w = v.map(h),
          b = (0, o.useRef)(!0),
          g = (0, o.useRef)(v),
          x = (0, s.h)(() => new Map()),
          [S, k] = (0, o.useState)(v),
          [E, C] = (0, o.useState)(v);
        (0, y.L)(() => {
          (b.current = !1), (g.current = v);
          for (let e = 0; e < E.length; e++) {
            let t = h(E[e]);
            w.includes(t) ? x.delete(t) : !0 !== x.get(t) && x.set(t, !1);
          }
        }, [E, w.length, w.join("-")]);
        let R = [];
        if (v !== S) {
          let e = [...v];
          for (let t = 0; t < E.length; t++) {
            let r = E[t],
              n = h(r);
            w.includes(n) || (e.splice(t, 0, r), R.push(r));
          }
          "wait" === f && R.length && (e = R), C(m(e)), k(v);
          return;
        }
        let { forceRender: j } = (0, o.useContext)(p.p);
        return (0, n.jsx)(n.Fragment, {
          children: E.map((e) => {
            let t = h(e),
              r = v === E || w.includes(t);
            return (0, n.jsx)(
              c,
              {
                isPresent: r,
                initial: (!b.current || !!a) && void 0,
                custom: r ? void 0 : i,
                presenceAffectsLayout: u,
                mode: f,
                onExitComplete: r
                  ? void 0
                  : () => {
                      if (!x.has(t)) return;
                      x.set(t, !0);
                      let e = !0;
                      x.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (null == j || j(), C(g.current), l && l());
                    },
                children: e,
              },
              t
            );
          }),
        });
      };
    },
  },
]);
