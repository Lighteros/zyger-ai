"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [271],
  {
    5050: function (t, e, i) {
      i.d(e, {
        p: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)({});
    },
    9791: function (t, e, i) {
      i.d(e, {
        _: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    7797: function (t, e, i) {
      i.d(e, {
        O: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)(null);
    },
    2981: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return r;
        },
      });
      var n = i(565);
      let s = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function r(t, e) {
        let i = !1,
          r = !0,
          o = { delta: 0, timestamp: 0, isProcessing: !1 },
          a = () => (i = !0),
          l = s.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  n = !1,
                  s = !1,
                  r = new WeakSet(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  r.has(e) && (l.schedule(e), t()), e(o);
                }
                let l = {
                  schedule: (t, s = !1, o = !1) => {
                    let a = o && n ? e : i;
                    return s && r.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    i.delete(t), r.delete(t);
                  },
                  process: (t) => {
                    if (((o = t), n)) {
                      s = !0;
                      return;
                    }
                    (n = !0),
                      ([e, i] = [i, e]),
                      e.forEach(a),
                      e.clear(),
                      (n = !1),
                      s && ((s = !1), l.process(t));
                  },
                };
                return l;
              })(a)),
              t
            ),
            {}
          ),
          {
            read: u,
            resolveKeyframes: h,
            update: d,
            preRender: c,
            render: p,
            postRender: m,
          } = l,
          f = () => {
            let s = n.c.useManualTiming ? o.timestamp : performance.now();
            (i = !1),
              (o.delta = r
                ? 1e3 / 60
                : Math.max(Math.min(s - o.timestamp, 40), 1)),
              (o.timestamp = s),
              (o.isProcessing = !0),
              u.process(o),
              h.process(o),
              d.process(o),
              c.process(o),
              p.process(o),
              m.process(o),
              (o.isProcessing = !1),
              i && e && ((r = !1), t(f));
          },
          v = () => {
            (i = !0), (r = !0), o.isProcessing || t(f);
          };
        return {
          schedule: s.reduce((t, e) => {
            let n = l[e];
            return (
              (t[e] = (t, e = !1, s = !1) => (i || v(), n.schedule(t, e, s))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < s.length; e++) l[s[e]].cancel(t);
          },
          state: o,
          steps: l,
        };
      }
    },
    6219: function (t, e, i) {
      i.d(e, {
        Pn: function () {
          return r;
        },
        Wi: function () {
          return s;
        },
        frameData: function () {
          return o;
        },
        yL: function () {
          return a;
        },
      });
      var n = i(5085);
      let {
        schedule: s,
        cancel: r,
        state: o,
        steps: a,
      } = (0, i(2981).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : n.Z,
        !0
      );
    },
    9993: function (t, e, i) {
      let n;
      i.d(e, {
        X: function () {
          return a;
        },
      });
      var s = i(565),
        r = i(6219);
      function o() {
        n = void 0;
      }
      let a = {
        now: () => (
          void 0 === n &&
            a.set(
              r.frameData.isProcessing || s.c.useManualTiming
                ? r.frameData.timestamp
                : performance.now()
            ),
          n
        ),
        set: (t) => {
          (n = t), queueMicrotask(o);
        },
      };
    },
    5271: function (t, e, i) {
      function n(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      i.d(e, {
        E: function () {
          return rs;
        },
      });
      let s = (t) => Array.isArray(t);
      function r(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function o(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function a(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, i) => {
              (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
            }),
          e
        );
      }
      function l(t, e, i, n) {
        if ("function" == typeof e) {
          let [s, r] = a(n);
          e = e(void 0 !== i ? i : t.custom, s, r);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [s, r] = a(n);
          e = e(void 0 !== i ? i : t.custom, s, r);
        }
        return e;
      }
      function u(t, e, i) {
        let n = t.getProps();
        return l(n, e, void 0 !== i ? i : n.custom, t);
      }
      let h = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        d = ["initial", ...h],
        c = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        p = new Set(c),
        m = (t) => 1e3 * t,
        f = (t) => t / 1e3,
        v = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        g = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        y = { type: "keyframes", duration: 0.8 },
        x = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        P = (t, { keyframes: e }) =>
          e.length > 2
            ? y
            : p.has(t)
            ? t.startsWith("scale")
              ? g(e[1])
              : v
            : x;
      function w(t, e) {
        return t ? t[e] || t.default || t : void 0;
      }
      var T,
        b,
        S,
        A = i(565);
      let V = { current: !1 },
        D = (t) => null !== t;
      function E(t, { repeat: e, repeatType: i = "loop" }, n) {
        let s = t.filter(D),
          r = e && "loop" !== i && e % 2 == 1 ? 0 : s.length - 1;
        return r && void 0 !== n ? n : s[r];
      }
      var M = i(6219),
        C = i(5085);
      let k = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function R(t, e, i, n) {
        if (t === e && i === n) return C.Z;
        let s = (e) =>
          (function (t, e, i, n, s) {
            let r, o;
            let a = 0;
            do (r = k((o = e + (i - e) / 2), n, s) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(r) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : k(s(t), e, n));
      }
      let L = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        j = (t) => (e) => 1 - t(1 - e),
        F = R(0.33, 1.53, 0.69, 0.99),
        B = j(F),
        O = L(B),
        I = (t) =>
          (t *= 2) < 1 ? 0.5 * B(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        U = (t) => 1 - Math.sin(Math.acos(t)),
        W = j(U),
        $ = L(U),
        N = (t) => /^0[^.\s]+$/u.test(t);
      var X = i(2159);
      let z = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        Y = (t) => (e) => "string" == typeof e && e.startsWith(t),
        K = Y("--"),
        H = Y("var(--"),
        Z = (t) => !!H(t) && q.test(t.split("/*")[0].trim()),
        q =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        _ = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        G = (t, e, i) => (i > e ? e : i < t ? t : i),
        J = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        Q = { ...J, transform: (t) => G(0, 1, t) },
        tt = { ...J, default: 1 },
        te = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        ti = te("deg"),
        tn = te("%"),
        ts = te("px"),
        tr = te("vh"),
        to = te("vw"),
        ta = {
          ...tn,
          parse: (t) => tn.parse(t) / 100,
          transform: (t) => tn.transform(100 * t),
        },
        tl = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        tu = (t) => t === J || t === ts,
        th = (t, e) => parseFloat(t.split(", ")[e]),
        td =
          (t, e) =>
          (i, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let s = n.match(/^matrix3d\((.+)\)$/u);
            if (s) return th(s[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/u);
              return e ? th(e[1], t) : 0;
            }
          },
        tc = new Set(["x", "y", "z"]),
        tp = c.filter((t) => !tc.has(t)),
        tm = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: td(4, 13),
          y: td(5, 14),
        };
      (tm.translateX = tm.x), (tm.translateY = tm.y);
      let tf = (t) => (e) => e.test(t),
        tv = [
          J,
          ts,
          tn,
          ti,
          to,
          tr,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        tg = (t) => tv.find(tf(t)),
        ty = new Set(),
        tx = !1,
        tP = !1;
      function tw() {
        if (tP) {
          let t = Array.from(ty).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                tp.forEach((i) => {
                  let n = t.getValue(i);
                  void 0 !== n &&
                    (e.push([i, n.get()]),
                    n.set(i.startsWith("scale") ? 1 : 0));
                }),
                e
              );
            })(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var n;
                  null === (n = t.getValue(e)) || void 0 === n || n.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (tP = !1), (tx = !1), ty.forEach((t) => t.complete()), ty.clear();
      }
      function tT() {
        ty.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (tP = !0);
        });
      }
      class tb {
        constructor(t, e, i, n, s, r = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = s),
            (this.isAsync = r);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (ty.add(this),
                tx || ((tx = !0), M.Wi.read(tT), M.Wi.resolveKeyframes(tw)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          for (let s = 0; s < t.length; s++)
            if (null === t[s]) {
              if (0 === s) {
                let s = null == n ? void 0 : n.get(),
                  r = t[t.length - 1];
                if (void 0 !== s) t[0] = s;
                else if (i && e) {
                  let n = i.readValue(e, r);
                  null != n && (t[0] = n);
                }
                void 0 === t[0] && (t[0] = r), n && void 0 === s && n.set(t[0]);
              } else t[s] = t[s - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            ty.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), ty.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      let tS = (t) => Math.round(1e5 * t) / 1e5,
        tA = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        tV =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        tD = (t, e) => (i) =>
          !!(
            ("string" == typeof i && tV.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        tE = (t, e, i) => (n) => {
          if ("string" != typeof n) return n;
          let [s, r, o, a] = n.match(tA);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(r),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        tM = (t) => G(0, 255, t),
        tC = { ...J, transform: (t) => Math.round(tM(t)) },
        tk = {
          test: tD("rgb", "red"),
          parse: tE("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            tC.transform(t) +
            ", " +
            tC.transform(e) +
            ", " +
            tC.transform(i) +
            ", " +
            tS(Q.transform(n)) +
            ")",
        },
        tR = {
          test: tD("#"),
          parse: function (t) {
            let e = "",
              i = "",
              n = "",
              s = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (n = t.substring(5, 7)),
                  (s = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (n = t.substring(3, 4)),
                  (s = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (n += n),
                  (s += s)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(n, 16),
                alpha: s ? parseInt(s, 16) / 255 : 1,
              }
            );
          },
          transform: tk.transform,
        },
        tL = {
          test: tD("hsl", "hue"),
          parse: tE("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: n = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            tn.transform(tS(e)) +
            ", " +
            tn.transform(tS(i)) +
            ", " +
            tS(Q.transform(n)) +
            ")",
        },
        tj = {
          test: (t) => tk.test(t) || tR.test(t) || tL.test(t),
          parse: (t) =>
            tk.test(t) ? tk.parse(t) : tL.test(t) ? tL.parse(t) : tR.parse(t),
          transform: (t) =>
            "string" == typeof t
              ? t
              : t.hasOwnProperty("red")
              ? tk.transform(t)
              : tL.transform(t),
        },
        tF =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        tB = "number",
        tO = "color",
        tI =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function tU(t) {
        let e = t.toString(),
          i = [],
          n = { color: [], number: [], var: [] },
          s = [],
          r = 0,
          o = e
            .replace(
              tI,
              (t) => (
                tj.test(t)
                  ? (n.color.push(r), s.push(tO), i.push(tj.parse(t)))
                  : t.startsWith("var(")
                  ? (n.var.push(r), s.push("var"), i.push(t))
                  : (n.number.push(r), s.push(tB), i.push(parseFloat(t))),
                ++r,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: o, indexes: n, types: s };
      }
      function tW(t) {
        return tU(t).values;
      }
      function t$(t) {
        let { split: e, types: i } = tU(t),
          n = e.length;
        return (t) => {
          let s = "";
          for (let r = 0; r < n; r++)
            if (((s += e[r]), void 0 !== t[r])) {
              let e = i[r];
              e === tB
                ? (s += tS(t[r]))
                : e === tO
                ? (s += tj.transform(t[r]))
                : (s += t[r]);
            }
          return s;
        };
      }
      let tN = (t) => ("number" == typeof t ? 0 : t),
        tX = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              "string" == typeof t &&
              ((null === (e = t.match(tA)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(tF)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: tW,
          createTransformer: t$,
          getAnimatableNone: function (t) {
            let e = tW(t);
            return t$(t)(e.map(tN));
          },
        },
        tz = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function tY(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(tA) || [];
        if (!n) return t;
        let s = i.replace(n, ""),
          r = tz.has(e) ? 1 : 0;
        return n !== i && (r *= 100), e + "(" + r + s + ")";
      }
      let tK = /\b([a-z-]*)\(.*?\)/gu,
        tH = {
          ...tX,
          getAnimatableNone: (t) => {
            let e = t.match(tK);
            return e ? e.map(tY).join(" ") : t;
          },
        },
        tZ = { ...J, transform: Math.round },
        tq = {
          borderWidth: ts,
          borderTopWidth: ts,
          borderRightWidth: ts,
          borderBottomWidth: ts,
          borderLeftWidth: ts,
          borderRadius: ts,
          radius: ts,
          borderTopLeftRadius: ts,
          borderTopRightRadius: ts,
          borderBottomRightRadius: ts,
          borderBottomLeftRadius: ts,
          width: ts,
          maxWidth: ts,
          height: ts,
          maxHeight: ts,
          top: ts,
          right: ts,
          bottom: ts,
          left: ts,
          padding: ts,
          paddingTop: ts,
          paddingRight: ts,
          paddingBottom: ts,
          paddingLeft: ts,
          margin: ts,
          marginTop: ts,
          marginRight: ts,
          marginBottom: ts,
          marginLeft: ts,
          backgroundPositionX: ts,
          backgroundPositionY: ts,
          rotate: ti,
          rotateX: ti,
          rotateY: ti,
          rotateZ: ti,
          scale: tt,
          scaleX: tt,
          scaleY: tt,
          scaleZ: tt,
          skew: ti,
          skewX: ti,
          skewY: ti,
          distance: ts,
          translateX: ts,
          translateY: ts,
          translateZ: ts,
          x: ts,
          y: ts,
          z: ts,
          perspective: ts,
          transformPerspective: ts,
          opacity: Q,
          originX: ta,
          originY: ta,
          originZ: ts,
          zIndex: tZ,
          size: ts,
          fillOpacity: Q,
          strokeOpacity: Q,
          numOctaves: tZ,
        },
        t_ = {
          ...tq,
          color: tj,
          backgroundColor: tj,
          outlineColor: tj,
          fill: tj,
          stroke: tj,
          borderColor: tj,
          borderTopColor: tj,
          borderRightColor: tj,
          borderBottomColor: tj,
          borderLeftColor: tj,
          filter: tH,
          WebkitFilter: tH,
        },
        tG = (t) => t_[t];
      function tJ(t, e) {
        let i = tG(t);
        return (
          i !== tH && (i = tX),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let tQ = new Set(["auto", "none", "0"]);
      class t0 extends tb {
        constructor(t, e, i, n, s) {
          super(t, e, i, n, s, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && Z((n = n.trim()))) {
              let s = (function t(e, i, n = 1) {
                (0, X.k)(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [s, r] = (function (t) {
                  let e = _.exec(t);
                  if (!e) return [,];
                  let [, i, n, s] = e;
                  return [`--${null != i ? i : n}`, s];
                })(e);
                if (!s) return;
                let o = window.getComputedStyle(i).getPropertyValue(s);
                if (o) {
                  let t = o.trim();
                  return z(t) ? parseFloat(t) : t;
                }
                return Z(r) ? t(r, i, n + 1) : r;
              })(n, e.current);
              void 0 !== s && (t[i] = s),
                i === t.length - 1 && (this.finalKeyframe = n);
            }
          }
          if ((this.resolveNoneKeyframes(), !tl.has(i) || 2 !== t.length))
            return;
          let [n, s] = t,
            r = tg(n),
            o = tg(s);
          if (r !== o) {
            if (tu(r) && tu(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var n;
            ("number" == typeof (n = t[e])
              ? 0 === n
              : null === n || "none" === n || "0" === n || N(n)) && i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let n,
                s = 0;
              for (; s < t.length && !n; ) {
                let e = t[s];
                "string" == typeof e &&
                  !tQ.has(e) &&
                  tU(e).values.length &&
                  (n = t[s]),
                  s++;
              }
              if (n && i) for (let s of e) t[s] = tJ(i, n);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = tm[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: n } = this;
          if (!e || !e.current) return;
          let s = e.getValue(i);
          s && s.jump(this.measuredOrigin, !1);
          let r = n.length - 1,
            o = n[r];
          (n[r] = tm[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      function t1(t) {
        return "function" == typeof t;
      }
      var t5 = i(9993);
      let t2 = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (tX.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      class t3 {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: s = 0,
          repeatType: r = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = t5.X.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: s,
              repeatType: r,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (tT(), tw()),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = t5.X.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: n,
            velocity: s,
            delay: r,
            onComplete: o,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (t, e, i, n) {
              let s = t[0];
              if (null === s) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let r = t[t.length - 1],
                o = t2(s, e),
                a = t2(r, e);
              return (
                (0, X.K)(
                  o === a,
                  `You are trying to animate ${e} from "${s}" to "${r}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${r} via the \`style\` property.`
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (("spring" === i || t1(i)) && n))
              );
            })(t, i, n, s)
          ) {
            if (V.current || !r) {
              null == a || a(E(t, this.options, e)),
                null == o || o(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(t, e);
          !1 !== u &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        flatten() {
          (this.options.type = "keyframes"), (this.options.ease = "linear");
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      let t9 = (t, e, i) => {
          let n = e - t;
          return 0 === n ? 1 : (i - t) / n;
        },
        t6 = (t, e, i = 10) => {
          let n = "",
            s = Math.max(Math.round(e / i), 2);
          for (let e = 0; e < s; e++) n += t(t9(0, s - 1, e)) + ", ";
          return `linear(${n.substring(0, n.length - 2)})`;
        };
      var t4 = i(3476);
      function t8(t, e, i) {
        let n = Math.max(e - 5, 0);
        return (0, t4.R)(i - t(n), e - n);
      }
      let t7 = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function et(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      function ee(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      let ei = ["duration", "bounce"],
        en = ["stiffness", "damping", "mass"];
      function es(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function er(t = t7.visualDuration, e = t7.bounce) {
        let i;
        let n =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: s, restDelta: r } = n,
          o = n.keyframes[0],
          a = n.keyframes[n.keyframes.length - 1],
          l = { done: !1, value: o },
          {
            stiffness: u,
            damping: h,
            mass: d,
            duration: c,
            velocity: p,
            isResolvedFromDuration: v,
          } = (function (t) {
            let e = {
              velocity: t7.velocity,
              stiffness: t7.stiffness,
              damping: t7.damping,
              mass: t7.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!es(t, en) && es(t, ei)) {
              if (t.visualDuration) {
                let i = (2 * Math.PI) / (1.2 * t.visualDuration),
                  n = i * i,
                  s = 2 * G(0.05, 1, 1 - t.bounce) * Math.sqrt(n);
                e = { ...e, mass: t7.mass, stiffness: n, damping: s };
              } else {
                let i = (function ({
                  duration: t = t7.duration,
                  bounce: e = t7.bounce,
                  velocity: i = t7.velocity,
                  mass: n = t7.mass,
                }) {
                  let s, r;
                  (0, X.K)(
                    t <= m(t7.maxDuration),
                    "Spring duration must be 10 seconds or less"
                  );
                  let o = 1 - e;
                  (o = G(t7.minDamping, t7.maxDamping, o)),
                    (t = G(t7.minDuration, t7.maxDuration, f(t))),
                    o < 1
                      ? ((s = (e) => {
                          let n = e * o,
                            s = n * t;
                          return 0.001 - ((n - i) / et(e, o)) * Math.exp(-s);
                        }),
                        (r = (e) => {
                          let n = e * o * t,
                            r = Math.pow(o, 2) * Math.pow(e, 2) * t,
                            a = et(Math.pow(e, 2), o);
                          return (
                            ((n * i + i - r) *
                              Math.exp(-n) *
                              (-s(e) + 0.001 > 0 ? -1 : 1)) /
                            a
                          );
                        }))
                      : ((s = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                        (r = (e) => t * t * (i - e) * Math.exp(-e * t)));
                  let a = (function (t, e, i) {
                    let n = i;
                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                    return n;
                  })(s, r, 5 / t);
                  if (((t = m(t)), isNaN(a)))
                    return {
                      stiffness: t7.stiffness,
                      damping: t7.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(a, 2) * n;
                    return {
                      stiffness: e,
                      damping: 2 * o * Math.sqrt(n * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...i, mass: t7.mass }).isResolvedFromDuration = !0;
              }
            }
            return e;
          })({ ...n, velocity: -f(n.velocity || 0) }),
          g = p || 0,
          y = h / (2 * Math.sqrt(u * d)),
          x = a - o,
          P = f(Math.sqrt(u / d)),
          w = 5 > Math.abs(x);
        if (
          (s || (s = w ? t7.restSpeed.granular : t7.restSpeed.default),
          r || (r = w ? t7.restDelta.granular : t7.restDelta.default),
          y < 1)
        ) {
          let t = et(P, y);
          i = (e) =>
            a -
            Math.exp(-y * P * e) *
              (((g + y * P * x) / t) * Math.sin(t * e) + x * Math.cos(t * e));
        } else if (1 === y)
          i = (t) => a - Math.exp(-P * t) * (x + (g + P * x) * t);
        else {
          let t = P * Math.sqrt(y * y - 1);
          i = (e) => {
            let i = Math.exp(-y * P * e),
              n = Math.min(t * e, 300);
            return (
              a -
              (i * ((g + y * P * x) * Math.sinh(n) + t * x * Math.cosh(n))) / t
            );
          };
        }
        let T = {
          calculatedDuration: (v && c) || null,
          next: (t) => {
            let e = i(t);
            if (v) l.done = t >= c;
            else {
              let n = 0;
              y < 1 && (n = 0 === t ? m(g) : t8(i, t, e));
              let o = Math.abs(n) <= s,
                u = Math.abs(a - e) <= r;
              l.done = o && u;
            }
            return (l.value = l.done ? a : e), l;
          },
          toString: () => {
            let t = Math.min(ee(T), 2e4),
              e = t6((e) => T.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
        };
        return T;
      }
      function eo({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: s = 10,
        bounceStiffness: r = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let d, c;
        let p = t[0],
          m = { done: !1, value: p },
          f = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          g = i * e,
          y = p + g,
          x = void 0 === o ? y : o(y);
        x !== y && (g = x - p);
        let P = (t) => -g * Math.exp(-t / n),
          w = (t) => x + P(t),
          T = (t) => {
            let e = P(t),
              i = w(t);
            (m.done = Math.abs(e) <= u), (m.value = m.done ? x : i);
          },
          b = (t) => {
            f(m.value) &&
              ((d = t),
              (c = er({
                keyframes: [m.value, v(m.value)],
                velocity: t8(w, t, m.value),
                damping: s,
                stiffness: r,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          b(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (c || void 0 !== d || ((e = !0), T(t), b(t)),
              void 0 !== d && t >= d)
                ? c.next(t - d)
                : (e || T(t), m);
            },
          }
        );
      }
      let ea = R(0.42, 0, 1, 1),
        el = R(0, 0, 0.58, 1),
        eu = R(0.42, 0, 0.58, 1),
        eh = (t) => Array.isArray(t) && "number" != typeof t[0],
        ed = (t) => Array.isArray(t) && "number" == typeof t[0],
        ec = {
          linear: C.Z,
          easeIn: ea,
          easeInOut: eu,
          easeOut: el,
          circIn: U,
          circInOut: $,
          circOut: W,
          backIn: B,
          backInOut: O,
          backOut: F,
          anticipate: I,
        },
        ep = (t) => {
          if (ed(t)) {
            (0, X.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, n, s] = t;
            return R(e, i, n, s);
          }
          return "string" == typeof t
            ? ((0, X.k)(void 0 !== ec[t], `Invalid easing type '${t}'`), ec[t])
            : t;
        },
        em = (t, e) => (i) => e(t(i)),
        ef = (...t) => t.reduce(em),
        ev = (t, e, i) => t + (e - t) * i;
      function eg(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      function ey(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let ex = (t, e, i) => {
          let n = t * t,
            s = i * (e * e - n) + n;
          return s < 0 ? 0 : Math.sqrt(s);
        },
        eP = [tR, tk, tL],
        ew = (t) => eP.find((e) => e.test(t));
      function eT(t) {
        let e = ew(t);
        if (
          ((0, X.K)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === tL &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let s = 0,
                r = 0,
                o = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - n;
                (s = eg(a, n, t + 1 / 3)),
                  (r = eg(a, n, t)),
                  (o = eg(a, n, t - 1 / 3));
              } else s = r = o = i;
              return {
                red: Math.round(255 * s),
                green: Math.round(255 * r),
                blue: Math.round(255 * o),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let eb = (t, e) => {
          let i = eT(t),
            n = eT(e);
          if (!i || !n) return ey(t, e);
          let s = { ...i };
          return (t) => (
            (s.red = ex(i.red, n.red, t)),
            (s.green = ex(i.green, n.green, t)),
            (s.blue = ex(i.blue, n.blue, t)),
            (s.alpha = ev(i.alpha, n.alpha, t)),
            tk.transform(s)
          );
        },
        eS = new Set(["none", "hidden"]);
      function eA(t, e) {
        return (i) => ev(t, e, i);
      }
      function eV(t) {
        return "number" == typeof t
          ? eA
          : "string" == typeof t
          ? Z(t)
            ? ey
            : tj.test(t)
            ? eb
            : eM
          : Array.isArray(t)
          ? eD
          : "object" == typeof t
          ? tj.test(t)
            ? eb
            : eE
          : ey;
      }
      function eD(t, e) {
        let i = [...t],
          n = i.length,
          s = t.map((t, i) => eV(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = s[e](t);
          return i;
        };
      }
      function eE(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let s in i)
          void 0 !== t[s] && void 0 !== e[s] && (n[s] = eV(t[s])(t[s], e[s]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let eM = (t, e) => {
        let i = tX.createTransformer(e),
          n = tU(t),
          s = tU(e);
        return n.indexes.var.length === s.indexes.var.length &&
          n.indexes.color.length === s.indexes.color.length &&
          n.indexes.number.length >= s.indexes.number.length
          ? (eS.has(t) && !s.values.length) || (eS.has(e) && !n.values.length)
            ? eS.has(t)
              ? (i) => (i <= 0 ? t : e)
              : (i) => (i >= 1 ? e : t)
            : ef(
                eD(
                  (function (t, e) {
                    var i;
                    let n = [],
                      s = { color: 0, var: 0, number: 0 };
                    for (let r = 0; r < e.values.length; r++) {
                      let o = e.types[r],
                        a = t.indexes[o][s[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      (n[r] = l), s[o]++;
                    }
                    return n;
                  })(n, s),
                  s.values
                ),
                i
              )
          : ((0, X.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            ey(t, e));
      };
      function eC(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? ev(t, e, i)
          : eV(t)(t, e);
      }
      function ek({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        let s = eh(n) ? n.map(ep) : ep(n),
          r = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: i = !0, ease: n, mixer: s } = {}) {
            let r = t.length;
            if (
              ((0, X.k)(
                r === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === r)
            )
              return () => e[0];
            if (2 === r && t[0] === t[1]) return () => e[1];
            t[0] > t[r - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let o = (function (t, e, i) {
                let n = [],
                  s = i || eC,
                  r = t.length - 1;
                for (let i = 0; i < r; i++) {
                  let r = s(t[i], t[i + 1]);
                  e && (r = ef(Array.isArray(e) ? e[i] || C.Z : e, r)),
                    n.push(r);
                }
                return n;
              })(e, n, s),
              a = o.length,
              l = (e) => {
                let i = 0;
                if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                let n = t9(t[i], t[i + 1], e);
                return o[i](n);
              };
            return i ? (e) => l(G(t[0], t[r - 1], e)) : l;
          })(
            (i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let n = 1; n <= e; n++) {
                        let s = t9(0, e, n);
                        t.push(ev(i, 1, s));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(s)
                ? s
                : e.map(() => s || eu).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((r.value = o(e)), (r.done = e >= t), r),
        };
      }
      let eR = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => M.Wi.update(e, !0),
            stop: () => (0, M.Pn)(e),
            now: () =>
              M.frameData.isProcessing ? M.frameData.timestamp : t5.X.now(),
          };
        },
        eL = { decay: eo, inertia: eo, tween: ek, keyframes: ek, spring: er },
        ej = (t) => t / 100;
      class eF extends t3 {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: i,
              element: n,
              keyframes: s,
            } = this.options,
            r = (null == n ? void 0 : n.KeyframeResolver) || tb;
          (this.resolver = new r(
            s,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            n
          )),
            this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes)
              );
        }
        initPlayback(t) {
          let e, i;
          let {
              type: n = "keyframes",
              repeat: s = 0,
              repeatDelay: r = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = t1(n) ? n : eL[n] || ek;
          l !== ek &&
            "number" != typeof t[0] &&
            ((e = ef(ej, eC(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration && (u.calculatedDuration = ee(u));
          let { calculatedDuration: h } = u,
            d = h + r;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: d,
            totalDuration: d * (s + 1) - r,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: s,
            mirroredGenerator: r,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return s.next(0);
          let {
            delay: d,
            repeat: c,
            repeatType: p,
            repeatDelay: m,
            onUpdate: f,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let v = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? v < 0 : v > u;
          (this.currentTime = Math.max(v, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let y = this.currentTime,
            x = s;
          if (c) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, c + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), m && (i -= m / h))
                  : "mirror" === p && (x = r)),
              (y = G(0, 1, i) * h);
          }
          let P = g ? { done: !1, value: a[0] } : x.next(y);
          o && (P.value = o(P.value));
          let { done: w } = P;
          g ||
            null === l ||
            (w =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let T =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && w));
          return (
            T && void 0 !== n && (P.value = E(a, this.options, n)),
            f && f(P.value),
            T && this.finish(),
            P
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? f(t.calculatedDuration) : 0;
        }
        get time() {
          return f(this.currentTime);
        }
        set time(t) {
          (t = m(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = f(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = eR, onPlay: e, startTime: i } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let n = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = n - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = n)
            : (this.startTime = null != i ? i : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let eB = new Set(["opacity", "clipPath", "filter", "transform"]);
      function eO(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let eI = { linearEasing: void 0 },
        eU = (function (t, e) {
          let i = eO(t);
          return () => {
            var t;
            return null !== (t = eI[e]) && void 0 !== t ? t : i();
          };
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        eW = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        e$ = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: eW([0, 0.65, 0.55, 1]),
          circOut: eW([0.55, 0, 1, 0.45]),
          backIn: eW([0.31, 0.01, 0.66, -0.59]),
          backOut: eW([0.33, 1.53, 0.69, 0.99]),
        };
      function eN(t, e) {
        (t.timeline = e), (t.onfinish = null);
      }
      let eX = eO(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        ez = { anticipate: I, backInOut: O, circInOut: $ };
      class eY extends t3 {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: i,
            element: n,
            keyframes: s,
          } = this.options;
          (this.resolver = new t0(
            s,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            n
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, n;
          let {
            duration: s = 300,
            times: r,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
            startTime: h,
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            ("string" == typeof o && eU() && o in ez && (o = ez[o]),
            t1((n = this.options).type) ||
              "spring" === n.type ||
              !(function t(e) {
                return !!(
                  ("function" == typeof e && eU()) ||
                  !e ||
                  ("string" == typeof e && (e in e$ || eU())) ||
                  ed(e) ||
                  (Array.isArray(e) && e.every(t))
                );
              })(n.ease))
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: n,
                element: l,
                ...u
              } = this.options,
              h = (function (t, e) {
                let i = new eF({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: t[0] },
                  s = [],
                  r = 0;
                for (; !n.done && r < 2e4; )
                  s.push((n = i.sample(r)).value), (r += 10);
                return {
                  times: void 0,
                  keyframes: s,
                  duration: r - 10,
                  ease: "linear",
                };
              })(t, u);
            1 === (t = h.keyframes).length && (t[1] = t[0]),
              (s = h.duration),
              (r = h.times),
              (o = h.ease),
              (a = "keyframes");
          }
          let d = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: s = 300,
              repeat: r = 0,
              repeatType: o = "loop",
              ease: a = "easeInOut",
              times: l,
            } = {}
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let h = (function t(e, i) {
              if (e)
                return "function" == typeof e && eU()
                  ? t6(e, i)
                  : ed(e)
                  ? eW(e)
                  : Array.isArray(e)
                  ? e.map((e) => t(e, i) || e$.easeOut)
                  : e$[e];
            })(a, s);
            return (
              Array.isArray(h) && (u.easing = h),
              t.animate(u, {
                delay: n,
                duration: s,
                easing: Array.isArray(h) ? "linear" : h,
                fill: "both",
                iterations: r + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: s,
            times: r,
            ease: o,
          });
          return (
            (d.startTime = null != h ? h : this.calcStartTime()),
            this.pendingTimeline
              ? (eN(d, this.pendingTimeline), (this.pendingTimeline = void 0))
              : (d.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set(E(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: d,
              duration: s,
              times: r,
              type: a,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return f(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return f(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = m(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return C.Z;
            let { animation: i } = e;
            eN(i, t);
          } else this.pendingTimeline = t;
          return C.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: n,
            type: s,
            ease: r,
            times: o,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: a,
                element: l,
                ...u
              } = this.options,
              h = new eF({
                ...u,
                keyframes: i,
                duration: n,
                type: s,
                ease: r,
                times: o,
                isGenerator: !0,
              }),
              d = m(this.time);
            t.setWithVelocity(h.sample(d - 10).value, h.sample(d).value, 10);
          }
          let { onStop: a } = this.options;
          a && a(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: n,
            repeatType: s,
            damping: r,
            type: o,
          } = t;
          return (
            eX() &&
            i &&
            eB.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !n &&
            "mirror" !== s &&
            0 !== r &&
            "inertia" !== o
          );
        }
      }
      let eK = eO(() => void 0 !== window.ScrollTimeline);
      class eH {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t, e) {
          let i = this.animations.map((i) =>
            eK() && i.attachTimeline ? i.attachTimeline(t) : e(i)
          );
          return () => {
            i.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        flatten() {
          this.runAll("flatten");
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      let eZ =
          (t, e, i, n = {}, s, r) =>
          (o) => {
            let a = w(n, t) || {},
              l = a.delay || n.delay || 0,
              { elapsed: u = 0 } = n;
            u -= m(l);
            let h = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...a,
              delay: -u,
              onUpdate: (t) => {
                e.set(t), a.onUpdate && a.onUpdate(t);
              },
              onComplete: () => {
                o(), a.onComplete && a.onComplete();
              },
              name: t,
              motionValue: e,
              element: r ? void 0 : s,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: n,
              staggerDirection: s,
              repeat: r,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(a) && (h = { ...h, ...P(t, h) }),
              h.duration && (h.duration = m(h.duration)),
              h.repeatDelay && (h.repeatDelay = m(h.repeatDelay)),
              void 0 !== h.from && (h.keyframes[0] = h.from);
            let d = !1;
            if (
              ((!1 !== h.type && (0 !== h.duration || h.repeatDelay)) ||
                ((h.duration = 0), 0 !== h.delay || (d = !0)),
              (V.current || A.c.skipAnimations) &&
                ((d = !0), (h.duration = 0), (h.delay = 0)),
              d && !r && void 0 !== e.get())
            ) {
              let t = E(h.keyframes, a);
              if (void 0 !== t)
                return (
                  M.Wi.update(() => {
                    h.onUpdate(t), h.onComplete();
                  }),
                  new eH([])
                );
            }
            return !r && eY.supports(h) ? new eY(h) : new eF(h);
          },
        eq = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        e_ = (t) => (s(t) ? t[t.length - 1] || 0 : t);
      var eG = i(804);
      let eJ = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        eQ = "data-" + eJ("framerAppearId");
      var e0 = i(8322);
      function e1(t, e) {
        let i = t.getValue("willChange");
        if ((0, e0.i)(i) && i.add) return i.add(e);
      }
      function e5(t, e, { delay: i = 0, transitionOverride: n, type: s } = {}) {
        var r;
        let {
          transition: o = t.getDefaultTransition(),
          transitionEnd: a,
          ...l
        } = e;
        n && (o = n);
        let h = [],
          d = s && t.animationState && t.animationState.getState()[s];
        for (let e in l) {
          let n = t.getValue(
              e,
              null !== (r = t.latestValues[e]) && void 0 !== r ? r : null
            ),
            s = l[e];
          if (
            void 0 === s ||
            (d &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), n;
              })(d, e))
          )
            continue;
          let a = { delay: i, ...w(o || {}, e) },
            u = !1;
          if (window.MotionHandoffAnimation) {
            let i = t.props[eQ];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, M.Wi);
              null !== t && ((a.startTime = t), (u = !0));
            }
          }
          e1(t, e),
            n.start(
              eZ(
                e,
                n,
                s,
                t.shouldReduceMotion && p.has(e) ? { type: !1 } : a,
                t,
                u
              )
            );
          let c = n.animation;
          c && h.push(c);
        }
        return (
          a &&
            Promise.all(h).then(() => {
              M.Wi.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: n = {},
                      ...s
                    } = u(t, e) || {};
                    for (let e in (s = { ...s, ...i })) {
                      let i = e_(s[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, (0, eG.BX)(i));
                    }
                  })(t, a);
              });
            }),
          h
        );
      }
      function e2(t, e, i = {}) {
        var n;
        let s = u(
            t,
            e,
            "exit" === i.type
              ? null === (n = t.presenceContext) || void 0 === n
                ? void 0
                : n.custom
              : void 0
          ),
          { transition: r = t.getDefaultTransition() || {} } = s || {};
        i.transitionOverride && (r = i.transitionOverride);
        let o = s ? () => Promise.all(e5(t, s, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: s = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = r;
                  return (function (t, e, i = 0, n = 0, s = 1, r) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * n,
                      l = 1 === s ? (t = 0) => t * n : (t = 0) => a - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(e3)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              e2(t, e, { ...r, delay: i + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, s + n, o, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = r;
        if (!l) return Promise.all([o(), a(i.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function e3(t, e) {
        return t.sortNodePosition(e);
      }
      let e9 = d.length,
        e6 = [...h].reverse(),
        e4 = h.length;
      function e8(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function e7() {
        return {
          animate: e8(!0),
          whileInView: e8(),
          whileHover: e8(),
          whileTap: e8(),
          whileDrag: e8(),
          whileFocus: e8(),
          exit: e8(),
        };
      }
      class it {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class ie extends it {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let n;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            n = Promise.all(e.map((e) => e2(t, e, i)));
                          else if ("string" == typeof e) n = e2(t, e, i);
                          else {
                            let s =
                              "function" == typeof e ? u(t, e, i.custom) : e;
                            n = Promise.all(e5(t, s, i));
                          }
                          return n.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, i)
                      )
                    ),
                  i = e7(),
                  a = !0,
                  l = (e) => (i, n) => {
                    var s;
                    let r = u(
                      t,
                      n,
                      "exit" === e
                        ? null === (s = t.presenceContext) || void 0 === s
                          ? void 0
                          : s.custom
                        : void 0
                    );
                    if (r) {
                      let { transition: t, transitionEnd: e, ...n } = r;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function h(u) {
                  let { props: h } = t,
                    c =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < e9; t++) {
                          let n = d[t],
                            s = e.props[n];
                          (o(s) || !1 === s) && (i[n] = s);
                        }
                        return i;
                      })(t.parent) || {},
                    p = [],
                    m = new Set(),
                    f = {},
                    v = 1 / 0;
                  for (let e = 0; e < e4; e++) {
                    var g;
                    let d = e6[e],
                      y = i[d],
                      x = void 0 !== h[d] ? h[d] : c[d],
                      P = o(x),
                      w = d === u ? y.isActive : null;
                    !1 === w && (v = e);
                    let T = x === c[d] && x !== h[d] && P;
                    if (
                      (T && a && t.manuallyAnimateOnMount && (T = !1),
                      (y.protectedKeys = { ...f }),
                      (!y.isActive && null === w) ||
                        (!x && !y.prevProp) ||
                        n(x) ||
                        "boolean" == typeof x)
                    )
                      continue;
                    let b =
                        ((g = y.prevProp),
                        "string" == typeof x
                          ? x !== g
                          : !!Array.isArray(x) && !r(x, g)),
                      S =
                        b || (d === u && y.isActive && !T && P) || (e > v && P),
                      A = !1,
                      V = Array.isArray(x) ? x : [x],
                      D = V.reduce(l(d), {});
                    !1 === w && (D = {});
                    let { prevResolvedValues: E = {} } = y,
                      M = { ...E, ...D },
                      C = (e) => {
                        (S = !0),
                          m.has(e) && ((A = !0), m.delete(e)),
                          (y.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in M) {
                      let e = D[t],
                        i = E[t];
                      if (!f.hasOwnProperty(t))
                        (s(e) && s(i) ? r(e, i) : e === i)
                          ? void 0 !== e && m.has(t)
                            ? C(t)
                            : (y.protectedKeys[t] = !0)
                          : null != e
                          ? C(t)
                          : m.add(t);
                    }
                    (y.prevProp = x),
                      (y.prevResolvedValues = D),
                      y.isActive && (f = { ...f, ...D }),
                      a && t.blockInitialAnimation && (S = !1);
                    let k = !(T && b) || A;
                    S &&
                      k &&
                      p.push(
                        ...V.map((t) => ({
                          animation: t,
                          options: { type: d },
                        }))
                      );
                  }
                  if (m.size) {
                    let e = {};
                    m.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        s = t.getValue(i);
                      s && (s.liveStyle = !0), (e[i] = null != n ? n : null);
                    }),
                      p.push({ animation: e });
                  }
                  let y = !!p.length;
                  return (
                    a &&
                      (!1 === h.initial || h.initial === h.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (y = !1),
                    (a = !1),
                    y ? e(p) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: h,
                  setActive: function (e, n) {
                    var s;
                    if (i[e].isActive === n) return Promise.resolve();
                    null === (s = t.variantChildren) ||
                      void 0 === s ||
                      s.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, n);
                      }),
                      (i[e].isActive = n);
                    let r = h(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return r;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = e7()), (a = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          n(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let ii = 0;
      class is extends it {
        constructor() {
          super(...arguments), (this.id = ii++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive("exit", !t);
          e && !t && n.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let ir = { x: !1, y: !1 };
      function io(t, e) {
        let i = (function (t, e, i) {
            if (t instanceof Element) return [t];
            if ("string" == typeof t) {
              let e = document.querySelectorAll(t);
              return e ? Array.from(e) : [];
            }
            return Array.from(t);
          })(t),
          n = new AbortController();
        return [i, { passive: !0, ...e, signal: n.signal }, () => n.abort()];
      }
      function ia(t) {
        return (e) => {
          "touch" === e.pointerType || ir.x || ir.y || t(e);
        };
      }
      let il = (t) =>
          "mouse" === t.pointerType
            ? "number" != typeof t.button || t.button <= 0
            : !1 !== t.isPrimary,
        iu = new WeakSet();
      function ih(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function id(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 })
        );
      }
      let ic = (t, e) => {
          let i = t.currentTarget;
          if (!i) return;
          let n = ih(() => {
            if (iu.has(i)) return;
            id(i, "down");
            let t = ih(() => {
              id(i, "up");
            });
            i.addEventListener("keyup", t, e),
              i.addEventListener("blur", () => id(i, "cancel"), e);
          });
          i.addEventListener("keydown", n, e),
            i.addEventListener(
              "blur",
              () => i.removeEventListener("keydown", n),
              e
            );
        },
        ip = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        im = (t, e) => !!e && (t === e || im(t, e.parentElement));
      function iv(t) {
        return il(t) && !(ir.x || ir.y);
      }
      function ig(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let iy = (t) => (e) => il(e) && t(e, ig(e));
      function ix(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      function iP(t, e, i, n) {
        return ix(t, e, iy(i), n);
      }
      let iw = (t, e) => Math.abs(t - e);
      class iT {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n,
            dragSnapToOrigin: s = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = iA(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                s =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(iw(t.x, e.x) ** 2 + iw(t.y, e.y) ** 2) >= 3);
              if (!n && !s) return;
              let { point: r } = i,
                { timestamp: o } = M.frameData;
              this.history.push({ ...r, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              n ||
                (a && a(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = ib(e, this.transformPagePoint)),
                M.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: s,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && s && s(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let r = iA(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : ib(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, r), n && n(t, r);
            }),
            !il(t))
          )
            return;
          (this.dragSnapToOrigin = s),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = n || window);
          let r = ib(ig(t), this.transformPagePoint),
            { point: o } = r,
            { timestamp: a } = M.frameData;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, iA(r, this.history)),
            (this.removeListeners = ef(
              iP(this.contextWindow, "pointermove", this.handlePointerMove),
              iP(this.contextWindow, "pointerup", this.handlePointerUp),
              iP(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, M.Pn)(this.updatePoint);
        }
      }
      function ib(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function iS(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function iA({ point: t }, e) {
        return {
          point: t,
          delta: iS(t, iV(e)),
          offset: iS(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              s = iV(t);
            for (
              ;
              i >= 0 && ((n = t[i]), !(s.timestamp - n.timestamp > m(0.1)));

            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let r = f(s.timestamp - n.timestamp);
            if (0 === r) return { x: 0, y: 0 };
            let o = { x: (s.x - n.x) / r, y: (s.y - n.y) / r };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function iV(t) {
        return t[t.length - 1];
      }
      function iD(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function iE(t) {
        return t.max - t.min;
      }
      function iM(t, e, i, n = 0.5) {
        (t.origin = n),
          (t.originPoint = ev(e.min, e.max, t.origin)),
          (t.scale = iE(i) / iE(e)),
          (t.translate = ev(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function iC(t, e, i, n) {
        iM(t.x, e.x, i.x, n ? n.originX : void 0),
          iM(t.y, e.y, i.y, n ? n.originY : void 0);
      }
      function ik(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + iE(e));
      }
      function iR(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + iE(e));
      }
      function iL(t, e, i) {
        iR(t.x, e.x, i.x), iR(t.y, e.y, i.y);
      }
      function ij(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function iF(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function iB(t, e, i) {
        return { min: iO(t, e), max: iO(t, i) };
      }
      function iO(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let iI = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        iU = () => ({ x: iI(), y: iI() }),
        iW = () => ({ min: 0, max: 0 }),
        i$ = () => ({ x: iW(), y: iW() });
      function iN(t) {
        return [t("x"), t("y")];
      }
      function iX({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function iz(t) {
        return void 0 === t || 1 === t;
      }
      function iY({ scale: t, scaleX: e, scaleY: i }) {
        return !iz(t) || !iz(e) || !iz(i);
      }
      function iK(t) {
        return (
          iY(t) ||
          iH(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function iH(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function iZ(t, e, i, n, s) {
        return void 0 !== s && (t = n + s * (t - n)), n + i * (t - n) + e;
      }
      function iq(t, e = 0, i = 1, n, s) {
        (t.min = iZ(t.min, e, i, n, s)), (t.max = iZ(t.max, e, i, n, s));
      }
      function i_(t, { x: e, y: i }) {
        iq(t.x, e.translate, e.scale, e.originPoint),
          iq(t.y, i.translate, i.scale, i.originPoint);
      }
      function iG(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function iJ(t, e, i, n, s = 0.5) {
        let r = ev(t.min, t.max, s);
        iq(t, e, i, r, n);
      }
      function iQ(t, e) {
        iJ(t.x, e.x, e.scaleX, e.scale, e.originX),
          iJ(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function i0(t, e) {
        return iX(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let i1 = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        i5 = new WeakMap();
      class i2 {
        constructor(t) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = i$()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new iT(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(ig(t).point);
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: n,
                  onDragStart: s,
                } = this.getProps();
                if (
                  i &&
                  !n &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock =
                    "x" === i || "y" === i
                      ? ir[i]
                        ? null
                        : ((ir[i] = !0),
                          () => {
                            ir[i] = !1;
                          })
                      : ir.x || ir.y
                      ? null
                      : ((ir.x = ir.y = !0),
                        () => {
                          ir.x = ir.y = !1;
                        })),
                  !this.openDragLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  iN((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (tn.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[t];
                        if (n) {
                          let t = iE(n);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  s && M.Wi.postRender(() => s(t, e)),
                  e1(this.visualElement, "transform");
                let { animationState: r } = this.visualElement;
                r && r.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: n,
                  onDirectionLock: s,
                  onDrag: r,
                } = this.getProps();
                if (!i && !this.openDragLock) return;
                let { offset: o } = e;
                if (n && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      s &&
                      s(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  r && r(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                iN((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: n,
              contextWindow: i1(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: s } = this.getProps();
          s && M.Wi.postRender(() => s(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !i3(t, n, this.currentDirection)) return;
          let s = this.getAxisMotionValue(t),
            r = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (r = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? ev(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? ev(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(r, this.constraints[t], this.elastic[t])),
            s.set(r);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            s = this.constraints;
          e && iD(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && n
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: n, right: s }
              ) {
                return { x: ij(t.x, i, s), y: ij(t.y, e, n) };
              })(n.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: iB(t, "left", "right"), y: iB(t, "top", "bottom") }
              );
            })(i)),
            s !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              iN((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !iD(e)) return !1;
          let n = e.current;
          (0, X.k)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: s } = this.visualElement;
          if (!s || !s.layout) return !1;
          let r = (function (t, e, i) {
              let n = i0(t, i),
                { scroll: s } = e;
              return s && (iG(n.x, s.offset.x), iG(n.y, s.offset.y)), n;
            })(n, s.root, this.visualElement.getTransformPagePoint()),
            o = { x: iF((t = s.layout.layoutBox).x, r.x), y: iF(t.y, r.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = iX(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: s,
              dragSnapToOrigin: r,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            iN((o) => {
              if (!i3(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              r && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            e1(this.visualElement, t),
            i.start(eZ(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          iN((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          iN((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          iN((e) => {
            let { drag: i } = this.getProps();
            if (!i3(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              s = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: r } = n.layout.layoutBox[e];
              s.set(t[e] - ev(i, r, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!iD(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          iN((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = iE(t),
                  s = iE(e);
                return (
                  s > n
                    ? (i = t9(e.min, e.max - n, t.min))
                    : n > s && (i = t9(t.min, t.max - s, e.min)),
                  G(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: s } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            iN((e) => {
              if (!i3(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: s, max: r } = this.constraints[e];
              i.set(ev(s, r, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          i5.set(this.visualElement, this);
          let t = iP(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              iD(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            n = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            M.Wi.read(e);
          let s = ix(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            r = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (iN((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            s(), t(), n(), r && r();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: s = !1,
              dragElastic: r = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: s,
            dragElastic: r,
            dragMomentum: o,
          };
        }
      }
      function i3(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class i9 extends it {
        constructor(t) {
          super(t),
            (this.removeGroupControls = C.Z),
            (this.removeListeners = C.Z),
            (this.controls = new i2(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || C.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let i6 = (t) => (e, i) => {
        t && M.Wi.postRender(() => t(e, i));
      };
      class i4 extends it {
        constructor() {
          super(...arguments), (this.removePointerDownListener = C.Z);
        }
        onPointerDown(t) {
          this.session = new iT(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: i1(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: i6(t),
            onStart: i6(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, n && M.Wi.postRender(() => n(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = iP(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var i8 = i(7437),
        i7 = i(2265),
        nt = i(7797),
        ne = i(5050);
      let ni = (0, i7.createContext)({}),
        nn = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function ns(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let nr = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!ts.test(t)) return t;
              t = parseFloat(t);
            }
            let i = ns(t, e.target.x),
              n = ns(t, e.target.y);
            return `${i}% ${n}%`;
          },
        },
        no = {},
        { schedule: na, cancel: nl } = (0, i(2981).Z)(queueMicrotask, !1);
      class nu extends i7.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: s } = t;
          Object.assign(no, nd),
            s &&
              (e.group && e.group.add(s),
              i && i.register && n && i.register(s),
              s.root.didUpdate(),
              s.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              s.setOptions({
                ...s.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (nn.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: s,
            } = this.props,
            r = i.projection;
          return (
            r &&
              ((r.isPresent = s),
              n || t.layoutDependency !== e || void 0 === e
                ? r.willUpdate()
                : this.safeToRemove(),
              t.isPresent === s ||
                (s
                  ? r.promote()
                  : r.relegate() ||
                    M.Wi.postRender(() => {
                      let t = r.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            na.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function nh(t) {
        let [e, i] = (function () {
            let t = (0, i7.useContext)(nt.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: n } = t,
              s = (0, i7.useId)();
            (0, i7.useEffect)(() => n(s), []);
            let r = (0, i7.useCallback)(() => i && i(s), [s, i]);
            return !e && i ? [!1, r] : [!0];
          })(),
          n = (0, i7.useContext)(ne.p);
        return (0, i8.jsx)(nu, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, i7.useContext)(ni),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let nd = {
        borderRadius: {
          ...nr,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: nr,
        borderTopRightRadius: nr,
        borderBottomLeftRadius: nr,
        borderBottomRightRadius: nr,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let n = tX.parse(t);
            if (n.length > 5) return t;
            let s = tX.createTransformer(t),
              r = "number" != typeof n[0] ? 1 : 0,
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (n[0 + r] /= o), (n[1 + r] /= a);
            let l = ev(o, a, 0.5);
            return (
              "number" == typeof n[2 + r] && (n[2 + r] /= l),
              "number" == typeof n[3 + r] && (n[3 + r] /= l),
              s(n)
            );
          },
        },
      };
      var nc = i(2428);
      let np = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        nm = np.length,
        nf = (t) => ("string" == typeof t ? parseFloat(t) : t),
        nv = (t) => "number" == typeof t || ts.test(t);
      function ng(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let ny = nP(0, 0.5, W),
        nx = nP(0.5, 0.95, C.Z);
      function nP(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i(t9(t, e, n)));
      }
      function nw(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function nT(t, e) {
        nw(t.x, e.x), nw(t.y, e.y);
      }
      function nb(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function nS(t, e, i, n, s) {
        return (
          (t -= e),
          (t = n + (1 / i) * (t - n)),
          void 0 !== s && (t = n + (1 / s) * (t - n)),
          t
        );
      }
      function nA(t, e, [i, n, s], r, o) {
        !(function (t, e = 0, i = 1, n = 0.5, s, r = t, o = t) {
          if (
            (tn.test(e) &&
              ((e = parseFloat(e)), (e = ev(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = ev(r.min, r.max, n);
          t === r && (a -= e),
            (t.min = nS(t.min, e, i, a, s)),
            (t.max = nS(t.max, e, i, a, s));
        })(t, e[i], e[n], e[s], e.scale, r, o);
      }
      let nV = ["x", "scaleX", "originX"],
        nD = ["y", "scaleY", "originY"];
      function nE(t, e, i, n) {
        nA(t.x, e, nV, i ? i.x : void 0, n ? n.x : void 0),
          nA(t.y, e, nD, i ? i.y : void 0, n ? n.y : void 0);
      }
      function nM(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function nC(t) {
        return nM(t.x) && nM(t.y);
      }
      function nk(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function nR(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function nL(t, e) {
        return nR(t.x, e.x) && nR(t.y, e.y);
      }
      function nj(t) {
        return iE(t.x) / iE(t.y);
      }
      function nF(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      var nB = i(8746);
      class nO {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, nB.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, nB.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let nI = (t, e) => t.depth - e.depth;
      class nU {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, nB.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, nB.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(nI),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      function nW(t) {
        let e = (0, e0.i)(t) ? t.get() : t;
        return eq(e) ? e.toValue() : e;
      }
      let n$ = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        nN = "undefined" != typeof window && void 0 !== window.MotionDebug,
        nX = ["", "X", "Y", "Z"],
        nz = { visibility: "hidden" },
        nY = 0;
      function nK(t, e, i, n) {
        let { latestValues: s } = e;
        s[t] && ((i[t] = s[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function nH({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: s,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = nY++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  nN &&
                    (n$.totalNodes =
                      n$.resolvedTargetDeltas =
                      n$.recalculatedProjection =
                        0),
                  this.nodes.forEach(n_),
                  this.nodes.forEach(n2),
                  this.nodes.forEach(n3),
                  this.nodes.forEach(nG),
                  nN && window.MotionDebug.record(n$);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new nU());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new nc.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: n, layout: s, visualElement: r } = this.options;
            if (
              (r && !r.current && r.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (s || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = t5.X.now(),
                      n = ({ timestamp: e }) => {
                        let s = e - i;
                        s >= 250 && ((0, M.Pn)(n), t(s - 250));
                      };
                    return M.Wi.read(n, !0), () => (0, M.Pn)(n);
                  })(n, 0)),
                  nn.hasAnimatedSinceResize &&
                    ((nn.hasAnimatedSinceResize = !1), this.nodes.forEach(n5));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                r &&
                (n || s) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let s =
                        this.options.transition ||
                        r.getDefaultTransition() ||
                        st,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = r.getProps(),
                      l = !this.targetLayout || !nL(this.targetLayout, n) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = { ...w(s, "layout"), onPlay: o, onComplete: a };
                      (r.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || n5(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, M.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(n9),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let n = i.props[eQ];
                  if (window.MotionHasOptimisedAnimation(n, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      n,
                      "transform",
                      M.Wi,
                      !(t || i)
                    );
                  }
                  let { parent: s } = e;
                  s && !s.hasCheckedOptimisedAppear && t(s);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(nQ);
              return;
            }
            this.isUpdating || this.nodes.forEach(n0),
              (this.isUpdating = !1),
              this.nodes.forEach(n1),
              this.nodes.forEach(nZ),
              this.nodes.forEach(nq),
              this.clearAllSnapshots();
            let t = t5.X.now();
            (M.frameData.delta = G(0, 1e3 / 60, t - M.frameData.timestamp)),
              (M.frameData.timestamp = t),
              (M.frameData.isProcessing = !0),
              M.yL.update.process(M.frameData),
              M.yL.preRender.process(M.frameData),
              M.yL.render.process(M.frameData),
              (M.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), na.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(nJ), this.sharedNodes.forEach(n6);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              M.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            M.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = i$()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = n(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!s) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !nC(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              r = n !== this.prevTransformTemplateValue;
            t &&
              (e || iK(this.latestValues) || r) &&
              (s(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              sn((e = n).x),
              sn(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return i$();
            let i = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(sr)
              )
            ) {
              let { scroll: t } = this.root;
              t && (iG(i.x, t.offset.x), iG(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = i$();
            if (
              (nT(i, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e],
                { scroll: s, options: r } = n;
              n !== this.root &&
                s &&
                r.layoutScroll &&
                (s.wasRoot && nT(i, t),
                iG(i.x, s.offset.x),
                iG(i.y, s.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = i$();
            nT(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                iQ(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                iK(n.latestValues) && iQ(i, n.latestValues);
            }
            return iK(this.latestValues) && iQ(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = i$();
            nT(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !iK(i.latestValues)) continue;
              iY(i.latestValues) && i.updateSnapshot();
              let n = i$();
              nT(n, i.measurePageBox()),
                nE(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n
                );
            }
            return iK(this.latestValues) && nE(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                M.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, n, s;
            let r = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = r.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = r.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = r.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== r;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = M.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = i$()),
                    (this.relativeTargetOrigin = i$()),
                    iL(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    nT(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = i$()), (this.targetWithTransforms = i$())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (n = this.relativeTarget),
                      (s = this.relativeParent.target),
                      ik(i.x, n.x, s.x),
                      ik(i.y, n.y, s.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : nT(this.target, this.layout.layoutBox),
                      i_(this.target, this.targetDelta))
                    : nT(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = i$()),
                      (this.relativeTargetOrigin = i$()),
                      iL(this.relativeTargetOrigin, this.target, t.target),
                      nT(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                nN && n$.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              iY(this.parent.latestValues) ||
              iH(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === M.frameData.timestamp &&
                (n = !1),
              n)
            )
              return;
            let { layout: s, layoutId: r } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(s || r))
            )
              return;
            nT(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, n = !1) {
              let s, r;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  r = (s = i[a]).projectionDelta;
                  let { visualElement: o } = s.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (n &&
                      s.options.layoutScroll &&
                      s.scroll &&
                      s !== s.root &&
                      iQ(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
                    r && ((e.x *= r.x.scale), (e.y *= r.y.scale), i_(t, r)),
                    n && iK(s.latestValues) && iQ(t, s.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = i$()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (nb(this.prevProjectionDelta.x, this.projectionDelta.x),
                nb(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              iC(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                nF(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                nF(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              nN && n$.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = iU()),
              (this.projectionDelta = iU()),
              (this.projectionDeltaWithTransform = iU());
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let n = this.snapshot,
              s = n ? n.latestValues : {},
              r = { ...this.latestValues },
              o = iU();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = i$(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              d = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(n7)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (n4(o.x, t.x, n),
                  n4(o.y, t.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, c, p, m;
                  iL(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    n8(p.x, m.x, a.x, n),
                    n8(p.y, m.y, a.y, n),
                    i &&
                      ((u = this.relativeTarget),
                      (c = i),
                      nk(u.x, c.x) && nk(u.y, c.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = i$()),
                    nT(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = r),
                  (function (t, e, i, n, s, r) {
                    s
                      ? ((t.opacity = ev(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          ny(n)
                        )),
                        (t.opacityExit = ev(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          nx(n)
                        )))
                      : r &&
                        (t.opacity = ev(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          n
                        ));
                    for (let s = 0; s < nm; s++) {
                      let r = `border${np[s]}Radius`,
                        o = ng(e, r),
                        a = ng(i, r);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || nv(o) === nv(a)
                          ? ((t[r] = Math.max(ev(nf(o), nf(a), n), 0)),
                            (tn.test(a) || tn.test(o)) && (t[r] += "%"))
                          : (t[r] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = ev(e.rotate || 0, i.rotate || 0, n));
                  })(r, s, this.latestValues, n, d, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, M.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = M.Wi.update(() => {
                (nn.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let n = (0, e0.i)(0) ? 0 : (0, eG.BX)(0);
                    return n.start(eZ("", n, 1e3, i)), n.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: s,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                ss(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || i$();
                let e = iE(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let n = iE(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + n);
              }
              nT(e, i),
                iQ(e, s),
                iC(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  s
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new nO()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let n = {};
            i.z && nK("z", t, n, this.animationValues);
            for (let e = 0; e < nX.length; e++)
              nK(`rotate${nX[e]}`, t, n, this.animationValues),
                nK(`skew${nX[e]}`, t, n, this.animationValues);
            for (let e in (t.render(), n))
              t.setStaticValue(e, n[e]),
                this.animationValues && (this.animationValues[e] = n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return nz;
            let n = { visibility: "" },
              s = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  nW(null == t ? void 0 : t.pointerEvents) || ""),
                (n.transform = s ? s(this.latestValues, "") : "none"),
                n
              );
            let r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    nW(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !iK(this.latestValues) &&
                  ((e.transform = s ? s({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = r.animationValues || r.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = (function (t, e, i) {
                let n = "",
                  s = t.x.translate / e.x,
                  r = t.y.translate / e.y,
                  o = (null == i ? void 0 : i.z) || 0;
                if (
                  ((s || r || o) &&
                    (n = `translate3d(${s}px, ${r}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: s,
                    rotateY: r,
                    skewX: o,
                    skewY: a,
                  } = i;
                  t && (n = `perspective(${t}px) ${n}`),
                    e && (n += `rotate(${e}deg) `),
                    s && (n += `rotateX(${s}deg) `),
                    r && (n += `rotateY(${r}deg) `),
                    o && (n += `skewX(${o}deg) `),
                    a && (n += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`),
                  n || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              s && (n.transform = s(o, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            r.animationValues
              ? (n.opacity =
                  r === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (n.opacity =
                  r === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            no)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = no[t],
                s = "none" === n.transform ? o[t] : e(o[t], r);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) n[i[e]] = s;
              } else n[t] = s;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  r === this
                    ? nW(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(nQ),
              this.root.sharedNodes.clear();
          }
        };
      }
      function nZ(t) {
        t.updateLayout();
      }
      function nq(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: s } = t.options,
            r = i.source !== t.layout.source;
          "size" === s
            ? iN((t) => {
                let n = r ? i.measuredBox[t] : i.layoutBox[t],
                  s = iE(n);
                (n.min = e[t].min), (n.max = n.min + s);
              })
            : ss(s, i.layoutBox, e) &&
              iN((n) => {
                let s = r ? i.measuredBox[n] : i.layoutBox[n],
                  o = iE(e[n]);
                (s.max = s.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = iU();
          iC(o, e, i.layoutBox);
          let a = iU();
          r
            ? iC(a, t.applyTransform(n, !0), i.measuredBox)
            : iC(a, e, i.layoutBox);
          let l = !nC(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: s, layout: r } = n;
              if (s && r) {
                let o = i$();
                iL(o, i.layoutBox, s.layoutBox);
                let a = i$();
                iL(a, e, r.layoutBox),
                  nL(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function n_(t) {
        nN && n$.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function nG(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function nJ(t) {
        t.clearSnapshot();
      }
      function nQ(t) {
        t.clearMeasurements();
      }
      function n0(t) {
        t.isLayoutDirty = !1;
      }
      function n1(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function n5(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function n2(t) {
        t.resolveTargetDelta();
      }
      function n3(t) {
        t.calcProjection();
      }
      function n9(t) {
        t.resetSkewAndRotation();
      }
      function n6(t) {
        t.removeLeadSnapshot();
      }
      function n4(t, e, i) {
        (t.translate = ev(e.translate, 0, i)),
          (t.scale = ev(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function n8(t, e, i, n) {
        (t.min = ev(e.min, i.min, n)), (t.max = ev(e.max, i.max, n));
      }
      function n7(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let st = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        se = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        si = se("applewebkit/") && !se("chrome/") ? Math.round : C.Z;
      function sn(t) {
        (t.min = si(t.min)), (t.max = si(t.max));
      }
      function ss(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(nj(e) - nj(i))))
        );
      }
      function sr(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let so = nH({
          attachResizeListener: (t, e) => ix(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        sa = { current: void 0 },
        sl = nH({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!sa.current) {
              let t = new so({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (sa.current = t);
            }
            return sa.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function su(t, e, i) {
        let { props: n } = t;
        t.animationState &&
          n.whileHover &&
          t.animationState.setActive("whileHover", "Start" === i);
        let s = n["onHover" + i];
        s && M.Wi.postRender(() => s(e, ig(e)));
      }
      class sh extends it {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [n, s, r] = io(t, i),
                o = ia((t) => {
                  let { target: i } = t,
                    n = e(t);
                  if (!n || !i) return;
                  let r = ia((t) => {
                    n(t), i.removeEventListener("pointerleave", r);
                  });
                  i.addEventListener("pointerleave", r, s);
                });
              return (
                n.forEach((t) => {
                  t.addEventListener("pointerenter", o, s);
                }),
                r
              );
            })(
              t,
              (t) => (su(this.node, t, "Start"), (t) => su(this.node, t, "End"))
            ));
        }
        unmount() {}
      }
      class sd extends it {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = ef(
            ix(this.node.current, "focus", () => this.onFocus()),
            ix(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      function sc(t, e, i) {
        let { props: n } = t;
        t.animationState &&
          n.whileTap &&
          t.animationState.setActive("whileTap", "Start" === i);
        let s = n["onTap" + ("End" === i ? "" : i)];
        s && M.Wi.postRender(() => s(e, ig(e)));
      }
      class sp extends it {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [n, s, r] = io(t, i),
                o = (t) => {
                  let n = t.currentTarget;
                  if (!iv(t) || iu.has(n)) return;
                  iu.add(n);
                  let r = e(t),
                    o = (t, e) => {
                      window.removeEventListener("pointerup", a),
                        window.removeEventListener("pointercancel", l),
                        iv(t) &&
                          iu.has(n) &&
                          (iu.delete(n), r && r(t, { success: e }));
                    },
                    a = (t) => {
                      o(t, i.useGlobalTarget || im(n, t.target));
                    },
                    l = (t) => {
                      o(t, !1);
                    };
                  window.addEventListener("pointerup", a, s),
                    window.addEventListener("pointercancel", l, s);
                };
              return (
                n.forEach((t) => {
                  ip.has(t.tagName) || -1 !== t.tabIndex || (t.tabIndex = 0),
                    (i.useGlobalTarget ? window : t).addEventListener(
                      "pointerdown",
                      o,
                      s
                    ),
                    t.addEventListener("focus", (t) => ic(t, s), s);
                }),
                r
              );
            })(
              t,
              (t) => (
                sc(this.node, t, "Start"),
                (t, { success: e }) => sc(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget }
            ));
        }
        unmount() {}
      }
      let sm = new WeakMap(),
        sf = new WeakMap(),
        sv = (t) => {
          let e = sm.get(t.target);
          e && e(t);
        },
        sg = (t) => {
          t.forEach(sv);
        },
        sy = { some: 0, all: 1 };
      class sx extends it {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: n = "some", once: s } = t,
            r = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof n ? n : sy[n],
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              sf.has(i) || sf.set(i, {});
              let n = sf.get(i),
                s = JSON.stringify(e);
              return (
                n[s] ||
                  (n[s] = new IntersectionObserver(sg, { root: t, ...e })),
                n[s]
              );
            })(e);
            return (
              sm.set(t, i),
              n.observe(t),
              () => {
                sm.delete(t), n.unobserve(t);
              }
            );
          })(this.node.current, r, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), s && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              r = e ? i : n;
            r && r(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      var sP = i(9791);
      let sw = (0, i7.createContext)({});
      var sT = i(9033);
      let sb = (0, i7.createContext)({ strict: !1 });
      function sS(t) {
        return n(t.animate) || d.some((e) => o(t[e]));
      }
      function sA(t) {
        return !!(sS(t) || t.variants);
      }
      function sV(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let sD = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        sE = {};
      for (let t in sD) sE[t] = { isEnabled: (e) => sD[t].some((t) => !!e[t]) };
      var sM = i(7282);
      let sC = Symbol.for("motionComponentSymbol"),
        sk = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function sR(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (sk.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      function sL(t, { style: e, vars: i }, n, s) {
        for (let r in (Object.assign(t.style, e, s && s.getProjectionStyles(n)),
        i))
          t.style.setProperty(r, i[r]);
      }
      let sj = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function sF(t, e, i, n) {
        for (let i in (sL(t, e, void 0, n), e.attrs))
          t.setAttribute(sj.has(i) ? i : eJ(i), e.attrs[i]);
      }
      function sB(t, { layout: e, layoutId: i }) {
        return (
          p.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!no[t] || "opacity" === t))
        );
      }
      function sO(t, e, i) {
        var n;
        let { style: s } = t,
          r = {};
        for (let o in s)
          ((0, e0.i)(s[o]) ||
            (e.style && (0, e0.i)(e.style[o])) ||
            sB(o, t) ||
            (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n
              ? void 0
              : n.liveStyle) !== void 0) &&
            (r[o] = s[o]);
        return r;
      }
      function sI(t, e, i) {
        let n = sO(t, e, i);
        for (let i in t)
          ((0, e0.i)(t[i]) || (0, e0.i)(e[i])) &&
            (n[
              -1 !== c.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return n;
      }
      var sU = i(458);
      let sW = (t) => (e, i) => {
          let s = (0, i7.useContext)(sw),
            r = (0, i7.useContext)(nt.O),
            o = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: t,
                  createRenderState: e,
                  onMount: i,
                },
                s,
                r,
                o
              ) {
                let a = {
                  latestValues: (function (t, e, i, s) {
                    let r = {},
                      o = s(t, {});
                    for (let t in o) r[t] = nW(o[t]);
                    let { initial: a, animate: u } = t,
                      h = sS(t),
                      d = sA(t);
                    e &&
                      d &&
                      !h &&
                      !1 !== t.inherit &&
                      (void 0 === a && (a = e.initial),
                      void 0 === u && (u = e.animate));
                    let c = !!i && !1 === i.initial,
                      p = (c = c || !1 === a) ? u : a;
                    if (p && "boolean" != typeof p && !n(p)) {
                      let e = Array.isArray(p) ? p : [p];
                      for (let i = 0; i < e.length; i++) {
                        let n = l(t, e[i]);
                        if (n) {
                          let { transitionEnd: t, transition: e, ...i } = n;
                          for (let t in i) {
                            let e = i[t];
                            if (Array.isArray(e)) {
                              let t = c ? e.length - 1 : 0;
                              e = e[t];
                            }
                            null !== e && (r[t] = e);
                          }
                          for (let e in t) r[e] = t[e];
                        }
                      }
                    }
                    return r;
                  })(s, r, o, t),
                  renderState: e(),
                };
                return i && (a.mount = (t) => i(s, t, a)), a;
              })(t, e, s, r);
          return i ? o() : (0, sU.h)(o);
        },
        s$ = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        sN = () => ({ ...s$(), attrs: {} }),
        sX = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        sz = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        sY = c.length;
      function sK(t, e, i) {
        let { style: n, vars: s, transformOrigin: r } = t,
          o = !1,
          a = !1;
        for (let t in e) {
          let i = e[t];
          if (p.has(t)) {
            o = !0;
            continue;
          }
          if (K(t)) {
            s[t] = i;
            continue;
          }
          {
            let e = sX(i, tq[t]);
            t.startsWith("origin") ? ((a = !0), (r[t] = e)) : (n[t] = e);
          }
        }
        if (
          (!e.transform &&
            (o || i
              ? (n.transform = (function (t, e, i) {
                  let n = "",
                    s = !0;
                  for (let r = 0; r < sY; r++) {
                    let o = c[r],
                      a = t[o];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof a
                          ? a === (o.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(a)) ||
                      i
                    ) {
                      let t = sX(a, tq[o]);
                      if (!l) {
                        s = !1;
                        let e = sz[o] || o;
                        n += `${e}(${t}) `;
                      }
                      i && (e[o] = t);
                    }
                  }
                  return (
                    (n = n.trim()),
                    i ? (n = i(e, s ? "" : n)) : s && (n = "none"),
                    n
                  );
                })(e, t.transform, i))
              : n.transform && (n.transform = "none")),
          a)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = r;
          n.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      function sH(t, e, i) {
        return "string" == typeof t ? t : ts.transform(e + i * t);
      }
      let sZ = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        sq = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function s_(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: n,
          originX: s,
          originY: r,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        d
      ) {
        if ((sK(t, u, d), h)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: c, style: p, dimensions: m } = t;
        c.transform && (m && (p.transform = c.transform), delete c.transform),
          m &&
            (void 0 !== s || void 0 !== r || p.transform) &&
            (p.transformOrigin = (function (t, e, i) {
              let n = sH(e, t.x, t.width),
                s = sH(i, t.y, t.height);
              return `${n} ${s}`;
            })(m, void 0 !== s ? s : 0.5, void 0 !== r ? r : 0.5)),
          void 0 !== e && (c.x = e),
          void 0 !== i && (c.y = i),
          void 0 !== n && (c.scale = n),
          void 0 !== o &&
            (function (t, e, i = 1, n = 0, s = !0) {
              t.pathLength = 1;
              let r = s ? sZ : sq;
              t[r.offset] = ts.transform(-n);
              let o = ts.transform(e),
                a = ts.transform(i);
              t[r.array] = `${o} ${a}`;
            })(c, o, a, l, !1);
      }
      let sG = (t) => "string" == typeof t && "svg" === t.toLowerCase(),
        sJ = {
          useVisualState: sW({
            scrapeMotionValuesFromProps: sI,
            createRenderState: sN,
            onMount: (t, e, { renderState: i, latestValues: n }) => {
              M.Wi.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                M.Wi.render(() => {
                  s_(i, n, sG(e.tagName), t.transformTemplate), sF(e, i);
                });
            },
          }),
        },
        sQ = {
          useVisualState: sW({
            scrapeMotionValuesFromProps: sO,
            createRenderState: s$,
          }),
        };
      function s0(t, e, i) {
        for (let n in e) (0, e0.i)(e[n]) || sB(n, i) || (t[n] = e[n]);
      }
      let s1 = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function s5(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          s1.has(t)
        );
      }
      let s2 = (t) => !s5(t);
      try {
        (T = require("@emotion/is-prop-valid").default) &&
          (s2 = (t) => (t.startsWith("on") ? !s5(t) : T(t)));
      } catch (t) {}
      let s3 = { current: null },
        s9 = { current: !1 },
        s6 = new WeakMap(),
        s4 = [...tv, tj, tX],
        s8 = (t) => s4.find(tf(t)),
        s7 = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class rt {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: s,
            visualState: r,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = tb),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = t5.X.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                M.Wi.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l } = r;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.blockInitialAnimation = !!s),
            (this.isControllingVariants = sS(e)),
            (this.isVariantNode = sA(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in h) {
            let e = h[t];
            void 0 !== a[t] && (0, e0.i)(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            s6.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            s9.current ||
              (function () {
                if (((s9.current = !0), sM.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (s3.current = t.matches);
                    t.addListener(e), e();
                  } else s3.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || s3.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (s6.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, M.Pn)(this.notifyUpdate),
          (0, M.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let n = p.has(t),
            s = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && M.Wi.preRender(this.notifyUpdate),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              s(), r(), i && i(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in sE) {
            let e = sE[t];
            if (!e) continue;
            let { isEnabled: i, Feature: n } = e;
            if (
              (!this.features[t] &&
                n &&
                i(this.props) &&
                (this.features[t] = new n(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : i$();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < s7.length; e++) {
            let i = s7[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let n in e) {
              let s = e[n],
                r = i[n];
              if ((0, e0.i)(s)) t.addValue(n, s);
              else if ((0, e0.i)(r)) t.addValue(n, (0, eG.BX)(s, { owner: t }));
              else if (r !== s) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(s) : e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, (0, eG.BX)(void 0 !== e ? e : s, { owner: t }));
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, eG.BX)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let n =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != n &&
              ("string" == typeof n && (z(n) || N(n))
                ? (n = parseFloat(n))
                : !s8(n) && tX.test(e) && (n = tJ(t, e)),
              this.setBaseTarget(t, (0, e0.i)(n) ? n.get() : n)),
            (0, e0.i)(n) ? n.get() : n
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: n } = this.props;
          if ("string" == typeof n || "object" == typeof n) {
            let s = l(
              this.props,
              n,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            s && (i = s[t]);
          }
          if (n && void 0 !== i) return i;
          let s = this.getBaseTargetFromProps(this.props, t);
          return void 0 === s || (0, e0.i)(s)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : s;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new nc.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class re extends rt {
        constructor() {
          super(...arguments), (this.KeyframeResolver = t0);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, e0.i)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      class ri extends re {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = sL);
        }
        readValueFromInstance(t, e) {
          if (p.has(e)) {
            let t = tG(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              n = (K(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return i0(t, e);
        }
        build(t, e, i) {
          sK(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return sO(t, e, i);
        }
      }
      class rn extends re {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = i$);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (p.has(e)) {
            let t = tG(e);
            return (t && t.default) || 0;
          }
          return (e = sj.has(e) ? e : eJ(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return sI(t, e, i);
        }
        build(t, e, i) {
          s_(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          sF(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = sG(t.tagName)), super.mount(t);
        }
      }
      let rs = (function (t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (i, n) =>
            "create" === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n)),
        });
      })(
        ((b = {
          animation: { Feature: ie },
          exit: { Feature: is },
          inView: { Feature: sx },
          tap: { Feature: sp },
          focus: { Feature: sd },
          hover: { Feature: sh },
          pan: { Feature: i4 },
          drag: { Feature: i9, ProjectionNode: sl, MeasureLayout: nh },
          layout: { ProjectionNode: sl, MeasureLayout: nh },
        }),
        (S = (t, e) =>
          sR(t)
            ? new rn(e)
            : new ri(e, { allowProjection: t !== i7.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function (t) {
            let {
              preloadedFeatures: e,
              createVisualElement: i,
              useRender: n,
              useVisualState: s,
              Component: r,
            } = t;
            e &&
              (function (t) {
                for (let e in t) sE[e] = { ...sE[e], ...t[e] };
              })(e);
            let a = (0, i7.forwardRef)(function (t, e) {
              var a;
              let l;
              let u = {
                  ...(0, i7.useContext)(sP._),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      i = (0, i7.useContext)(ne.p).id;
                    return i && void 0 !== e ? i + "-" + e : e;
                  })(t),
                },
                { isStatic: h } = u,
                d = (function (t) {
                  let { initial: e, animate: i } = (function (t, e) {
                    if (sS(t)) {
                      let { initial: e, animate: i } = t;
                      return {
                        initial: !1 === e || o(e) ? e : void 0,
                        animate: o(i) ? i : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, i7.useContext)(sw));
                  return (0, i7.useMemo)(
                    () => ({ initial: e, animate: i }),
                    [sV(e), sV(i)]
                  );
                })(t),
                c = s(t, h);
              if (!h && sM.j) {
                (0, i7.useContext)(sb).strict;
                let t = (function (t) {
                  let { drag: e, layout: i } = sE;
                  if (!e && !i) return {};
                  let n = { ...e, ...i };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == i ? void 0 : i.isEnabled(t))
                        ? n.MeasureLayout
                        : void 0,
                    ProjectionNode: n.ProjectionNode,
                  };
                })(u);
                (l = t.MeasureLayout),
                  (d.visualElement = (function (t, e, i, n, s) {
                    var r, o;
                    let { visualElement: a } = (0, i7.useContext)(sw),
                      l = (0, i7.useContext)(sb),
                      u = (0, i7.useContext)(nt.O),
                      h = (0, i7.useContext)(sP._).reducedMotion,
                      d = (0, i7.useRef)(null);
                    (n = n || l.renderer),
                      !d.current &&
                        n &&
                        (d.current = n(t, {
                          visualState: e,
                          parent: a,
                          props: i,
                          presenceContext: u,
                          blockInitialAnimation: !!u && !1 === u.initial,
                          reducedMotionConfig: h,
                        }));
                    let c = d.current,
                      p = (0, i7.useContext)(ni);
                    c &&
                      !c.projection &&
                      s &&
                      ("html" === c.type || "svg" === c.type) &&
                      (function (t, e, i, n) {
                        let {
                          layoutId: s,
                          layout: r,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = e;
                        (t.projection = new i(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: s,
                            layout: r,
                            alwaysMeasureLayout: !!o || (a && iD(a)),
                            visualElement: t,
                            animationType: "string" == typeof r ? r : "both",
                            initialPromotionConfig: n,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(d.current, i, s, p);
                    let m = (0, i7.useRef)(!1);
                    (0, i7.useInsertionEffect)(() => {
                      c && m.current && c.update(i, u);
                    });
                    let f = i[eQ],
                      v = (0, i7.useRef)(
                        !!f &&
                          !(null === (r = window.MotionHandoffIsComplete) ||
                          void 0 === r
                            ? void 0
                            : r.call(window, f)) &&
                          (null === (o = window.MotionHasOptimisedAnimation) ||
                          void 0 === o
                            ? void 0
                            : o.call(window, f))
                      );
                    return (
                      (0, sT.L)(() => {
                        c &&
                          ((m.current = !0),
                          (window.MotionIsMounted = !0),
                          c.updateFeatures(),
                          na.render(c.render),
                          v.current &&
                            c.animationState &&
                            c.animationState.animateChanges());
                      }),
                      (0, i7.useEffect)(() => {
                        c &&
                          (!v.current &&
                            c.animationState &&
                            c.animationState.animateChanges(),
                          v.current &&
                            (queueMicrotask(() => {
                              var t;
                              null ===
                                (t = window.MotionHandoffMarkAsComplete) ||
                                void 0 === t ||
                                t.call(window, f);
                            }),
                            (v.current = !1)));
                      }),
                      c
                    );
                  })(r, c, u, i, t.ProjectionNode));
              }
              return (0, i8.jsxs)(sw.Provider, {
                value: d,
                children: [
                  l && d.visualElement
                    ? (0, i8.jsx)(l, { visualElement: d.visualElement, ...u })
                    : null,
                  n(
                    r,
                    t,
                    ((a = d.visualElement),
                    (0, i7.useCallback)(
                      (t) => {
                        t && c.mount && c.mount(t),
                          a && (t ? a.mount(t) : a.unmount()),
                          e &&
                            ("function" == typeof e
                              ? e(t)
                              : iD(e) && (e.current = t));
                      },
                      [a]
                    )),
                    c,
                    h,
                    d.visualElement
                  ),
                ],
              });
            });
            return (a[sC] = r), a;
          })({
            ...(sR(t) ? sJ : sQ),
            preloadedFeatures: b,
            useRender: (function (t = !1) {
              return (e, i, n, { latestValues: s }, r) => {
                let o = (
                    sR(e)
                      ? function (t, e, i, n) {
                          let s = (0, i7.useMemo)(() => {
                            let i = sN();
                            return (
                              s_(i, e, sG(n), t.transformTemplate),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            s0(e, t.style, t), (s.style = { ...e, ...s.style });
                          }
                          return s;
                        }
                      : function (t, e) {
                          let i = {},
                            n = (function (t, e) {
                              let i = t.style || {},
                                n = {};
                              return (
                                s0(n, i, t),
                                Object.assign(
                                  n,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, i7.useMemo)(() => {
                                      let i = s$();
                                      return (
                                        sK(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                n
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (n.userSelect =
                                n.WebkitUserSelect =
                                n.WebkitTouchCallout =
                                  "none"),
                              (n.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = n),
                            i
                          );
                        }
                  )(i, s, r, e),
                  a = (function (t, e, i) {
                    let n = {};
                    for (let s in t)
                      ("values" !== s || "object" != typeof t.values) &&
                        (s2(s) ||
                          (!0 === i && s5(s)) ||
                          (!e && !s5(s)) ||
                          (t.draggable && s.startsWith("onDrag"))) &&
                        (n[s] = t[s]);
                    return n;
                  })(i, "string" == typeof e, t),
                  l = e !== i7.Fragment ? { ...a, ...o, ref: n } : {},
                  { children: u } = i,
                  h = (0, i7.useMemo)(() => ((0, e0.i)(u) ? u.get() : u), [u]);
                return (0, i7.createElement)(e, { ...l, children: h });
              };
            })(e),
            createVisualElement: S,
            Component: t,
          });
        })
      );
    },
    565: function (t, e, i) {
      i.d(e, {
        c: function () {
          return n;
        },
      });
      let n = { skipAnimations: !1, useManualTiming: !1 };
    },
    8746: function (t, e, i) {
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function s(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, {
        cl: function () {
          return s;
        },
        y4: function () {
          return n;
        },
      });
    },
    7282: function (t, e, i) {
      i.d(e, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof window;
    },
    2428: function (t, e, i) {
      i.d(e, {
        L: function () {
          return s;
        },
      });
      var n = i(8746);
      class s {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, n.y4)(this.subscriptions, t),
            () => (0, n.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let s = 0; s < n; s++) {
                let n = this.subscriptions[s];
                n && n(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    458: function (t, e, i) {
      i.d(e, {
        h: function () {
          return s;
        },
      });
      var n = i(2265);
      function s(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    9033: function (t, e, i) {
      i.d(e, {
        L: function () {
          return s;
        },
      });
      var n = i(2265);
      let s = i(7282).j ? n.useLayoutEffect : n.useEffect;
    },
    3476: function (t, e, i) {
      i.d(e, {
        R: function () {
          return n;
        },
      });
      function n(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    804: function (t, e, i) {
      i.d(e, {
        BX: function () {
          return h;
        },
      });
      var n = i(2428),
        s = i(3476),
        r = i(9993),
        o = i(6219);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.version = "11.15.0"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = r.X.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = r.X.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = a(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new n.L());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  o.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = r.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, s.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    8322: function (t, e, i) {
      i.d(e, {
        i: function () {
          return n;
        },
      });
      let n = (t) => !!(t && t.getVelocity);
    },
    2159: function (t, e, i) {
      i.d(e, {
        K: function () {
          return s;
        },
        k: function () {
          return r;
        },
      });
      var n = i(5085);
      let s = n.Z,
        r = n.Z;
    },
    5085: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (t) => t;
    },
  },
]);
