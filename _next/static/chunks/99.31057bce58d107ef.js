(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [99],
  {
    7544: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(2265),
        i = n(7715),
        o = r && "object" == typeof r && "default" in r ? r : { default: r },
        s = function () {
          return (s =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        };
      function a(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            0 > t.indexOf(r[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        }
        return n;
      }
      function c() {
        return Math.min(
          Math.max(
            1,
            "undefined" != typeof window &&
              "number" == typeof window.devicePixelRatio
              ? window.devicePixelRatio
              : 1
          ),
          3
        );
      }
      "function" == typeof SuppressedError && SuppressedError;
      var u = (function () {
          function e() {}
          return (
            (e.prototype.observe = function () {}),
            (e.prototype.unobserve = function () {}),
            (e.prototype.disconnect = function () {}),
            e
          );
        })(),
        l = globalThis.ResizeObserver || u,
        d = void 0 !== globalThis.ResizeObserver,
        f = !d,
        h = {
          useDevicePixelRatio: !0,
          fitCanvasToArtboardHeight: !1,
          useOffscreenRenderer: !0,
          shouldResizeCanvasToContainer: !0,
        };
      function v(e) {
        return Object.assign({}, h, e);
      }
      function p(e) {
        var t,
          n,
          i,
          o,
          s,
          a,
          u,
          h,
          p,
          g,
          m,
          w = e.riveLoaded,
          x = void 0 !== w && w,
          b = e.canvasRef,
          y = e.containerRef,
          R = e.options,
          C = e.onCanvasHasResized,
          E = e.artboardBounds,
          O = v(void 0 === R ? {} : R),
          j = r.useState({ height: 0, width: 0 }),
          k = j[0],
          P = k.height,
          N = k.width,
          S = j[1],
          z = r.useState({ height: 0, width: 0 }),
          L = z[0],
          T = L.height,
          A = L.width,
          I = z[1],
          M = r.useState(!0),
          D = M[0],
          H = M[1],
          V = O.fitCanvasToArtboardHeight,
          B = O.shouldResizeCanvasToContainer,
          _ = O.useDevicePixelRatio,
          G = O.customDevicePixelRatio,
          Z =
            (void 0 === (t = B) && (t = !0),
            (i = (n = r.useState({ width: 0, height: 0 }))[0]),
            (o = n[1]),
            r.useEffect(function () {
              if ("undefined" != typeof window && t) {
                var e = function () {
                  o({ width: window.innerWidth, height: window.innerHeight });
                };
                return (
                  f && (e(), window.addEventListener("resize", e)),
                  function () {
                    return window.removeEventListener("resize", e);
                  }
                );
              }
            }, []),
            (u = r.useRef(
              new l(
                ((s = function (e) {
                  d &&
                    o({
                      width: e[e.length - 1].contentRect.width,
                      height: e[e.length - 1].contentRect.height,
                    });
                }),
                (a = 0),
                function () {
                  for (var e = this, t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  clearTimeout(a),
                    (a = window.setTimeout(function () {
                      return s.apply(e, t);
                    }, 0));
                })
              )
            )),
            r.useEffect(
              function () {
                var e = u.current;
                if (t) {
                  var n = y.current;
                  return (
                    y.current && d && e.observe(y.current),
                    function () {
                      e.disconnect(), n && d && e.unobserve(n);
                    }
                  );
                }
                e.disconnect();
              },
              [y, u]
            ),
            i),
          Y =
            ((h = G || c()),
            (g = (p = r.useState(h))[0]),
            (m = p[1]),
            r.useEffect(
              function () {
                if ("undefined" != typeof window && "matchMedia" in window) {
                  var e = function () {
                      m(G || c());
                    },
                    t = window.matchMedia(
                      "screen and (resolution: ".concat(g, "dppx)")
                    );
                  return (
                    t.hasOwnProperty("addEventListener")
                      ? t.addEventListener("change", e)
                      : t.addListener(e),
                    function () {
                      t.hasOwnProperty("removeEventListener")
                        ? t.removeEventListener("change", e)
                        : t.removeListener(e);
                    }
                  );
                }
              },
              [g, G]
            ),
            g),
          W = null != E ? E : {},
          U = W.maxX,
          X = W.maxY,
          F = r.useCallback(
            function () {
              var e,
                t,
                n,
                r,
                i =
                  null !==
                    (t =
                      null === (e = y.current) || void 0 === e
                        ? void 0
                        : e.clientWidth) && void 0 !== t
                    ? t
                    : 0,
                o =
                  null !==
                    (r =
                      null === (n = y.current) || void 0 === n
                        ? void 0
                        : n.clientHeight) && void 0 !== r
                    ? r
                    : 0;
              return V && E
                ? { width: i, height: (E.maxY / E.maxX) * i }
                : { width: i, height: o };
            },
            [y, V, U, X]
          );
        r.useEffect(
          function () {
            if (B && y.current && x) {
              var e = F(),
                t = e.width,
                n = e.height,
                r = !1;
              if (b.current) {
                var i = t !== N || n !== P;
                if (
                  (O.fitCanvasToArtboardHeight &&
                    i &&
                    ((y.current.style.height = n + "px"), (r = !0)),
                  O.useDevicePixelRatio)
                ) {
                  if (i || t * Y !== A || n * Y !== T) {
                    var o = Y * t,
                      s = Y * n;
                    (b.current.width = o),
                      (b.current.height = s),
                      (b.current.style.width = t + "px"),
                      (b.current.style.height = n + "px"),
                      I({ width: o, height: s }),
                      (r = !0);
                  }
                } else
                  i &&
                    ((b.current.width = t),
                    (b.current.height = n),
                    I({ width: t, height: n }),
                    (r = !0));
                S({ width: t, height: n });
              }
              C && (D || r) && C && C(), D && H(!1);
            }
          },
          [b, y, Z, Y, F, D, H, T, A, P, N, C, B, V, _, x]
        );
      }
      function g(e) {
        var t = e.setContainerRef,
          n = e.setCanvasRef,
          r = e.className,
          i = void 0 === r ? "" : r,
          c = e.style,
          u = e.children,
          l = a(e, [
            "setContainerRef",
            "setCanvasRef",
            "className",
            "style",
            "children",
          ]),
          d = s({ width: "100%", height: "100%" }, c);
        return o.default.createElement(
          "div",
          s({ ref: t, className: i }, !i && { style: d }),
          o.default.createElement(
            "canvas",
            s(
              { ref: n, style: { verticalAlign: "top", width: 0, height: 0 } },
              l
            ),
            u
          )
        );
      }
      function m(e, t) {
        void 0 === t && (t = {});
        var n = r.useRef(null),
          a = r.useRef(null),
          c = r.useState(null),
          u = c[0],
          l = c[1],
          d = !!e,
          f = v(t),
          h = r.useCallback(
            function () {
              u && (u.startRendering(), u.resizeToCanvas());
            },
            [u]
          );
        p({
          riveLoaded: !!u,
          canvasRef: n,
          containerRef: a,
          options: f,
          onCanvasHasResized: h,
          artboardBounds: null == u ? void 0 : u.bounds,
        });
        var m = r.useCallback(
            function (t) {
              if (t && e && d) {
                var r = f.useOffscreenRenderer,
                  o = new i.Rive(
                    s(s({ useOffscreenRenderer: r }, e), { canvas: t })
                  );
                o.on(i.EventType.Load, function () {
                  n.current ? l(o) : o.cleanup();
                });
              } else
                null === t &&
                  n.current &&
                  ((n.current.height = 0), (n.current.width = 0));
              n.current = t;
            },
            [d]
          ),
          w = r.useCallback(function (e) {
            a.current = e;
          }, []);
        r.useEffect(
          function () {
            var e = new IntersectionObserver(function (e) {
              e[0].isIntersecting
                ? u && u.startRendering()
                : u && u.stopRendering();
            });
            return (
              n.current && e.observe(n.current),
              function () {
                e.disconnect();
              }
            );
          },
          [u]
        ),
          r.useEffect(
            function () {
              return function () {
                u && (u.cleanup(), l(null));
              };
            },
            [u]
          );
        var x = null == e ? void 0 : e.animations;
        r.useEffect(
          function () {
            u &&
              x &&
              (u.isPlaying
                ? (u.stop(u.animationNames), u.play(x))
                : u.isPaused && (u.stop(u.animationNames), u.pause(x)));
          },
          [x, u]
        );
        var b = r.useCallback(
          function (e) {
            return o.default.createElement(
              g,
              s({ setContainerRef: w, setCanvasRef: m }, e)
            );
          },
          [m, w]
        );
        return {
          canvas: n.current,
          container: a.current,
          setCanvasRef: m,
          setContainerRef: w,
          rive: u,
          RiveComponent: b,
        };
      }
      (t.default = function (e) {
        var t = e.src,
          n = e.artboard,
          r = e.animations,
          i = e.stateMachines,
          c = e.layout,
          u = e.useOffscreenRenderer,
          l = e.shouldDisableRiveListeners,
          d = e.shouldResizeCanvasToContainer,
          f = e.automaticallyHandleEvents,
          h = e.children,
          v = a(e, [
            "src",
            "artboard",
            "animations",
            "stateMachines",
            "layout",
            "useOffscreenRenderer",
            "shouldDisableRiveListeners",
            "shouldResizeCanvasToContainer",
            "automaticallyHandleEvents",
            "children",
          ]),
          p = m(
            {
              src: t,
              artboard: n,
              animations: r,
              layout: c,
              stateMachines: i,
              autoplay: !0,
              shouldDisableRiveListeners: void 0 !== l && l,
              automaticallyHandleEvents: void 0 !== f && f,
            },
            {
              useOffscreenRenderer: void 0 === u || u,
              shouldResizeCanvasToContainer: void 0 === d || d,
            }
          ).RiveComponent;
        return o.default.createElement(p, s({}, v), h);
      }),
        (t.useResizeCanvas = p),
        (t.useRive = m),
        (t.useStateMachineInput = function (e, t, n, o) {
          var s = r.useState(null),
            a = s[0],
            c = s[1];
          return (
            r.useEffect(
              function () {
                function r() {
                  if (((e && t && n) || c(null), e && t && n)) {
                    var r = e.stateMachineInputs(t);
                    if (r) {
                      var i = r.find(function (e) {
                        return e.name === n;
                      });
                      void 0 !== o && i && (i.value = o), c(i || null);
                    }
                  } else c(null);
                }
                r(),
                  e &&
                    e.on(i.EventType.Play, function () {
                      r();
                    });
              },
              [e]
            ),
            a
          );
        }),
        Object.keys(i).forEach(function (e) {
          "default" === e ||
            t.hasOwnProperty(e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            });
        });
    },
    1099: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n(7437),
        i = n(7544),
        o = n(3473),
        s = (e) => {
          let {
              status: t,
              title: n,
              description: s,
              imageSrc: a,
              primary: c = !1,
            } = e,
            [u, l] = (0, o.YD)({ triggerOnce: !0, threshold: 0.2 }),
            { RiveComponent: d } = (0, i.useRive)({
              src: a,
              stateMachines: "State Machine 1",
              layout: new i.Layout({
                fit: i.Fit.Contain,
                alignment: i.Alignment.BottomCenter,
              }),
              autoplay: !0,
            });
          return (0, r.jsx)("div", {
            className:
              " border-[1px] border-zkLightRed  border-opacity-20 ".concat(
                c ? "lg:col-span-3 " : "lg:col-span-2 ",
                "   p-0.5 rounded-lg  overflow-hidden"
              ),
            children: (0, r.jsxs)("div", {
              className:
                "relative rounded-lg    bg-transparent h-full w-full flex flex-col  justify-between",
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "left-0 absolute flex flex-col gap-3 font-light  p-7",
                  children: [
                    t &&
                      (0, r.jsx)("div", {
                        className:
                          "text-zkNeonGreen border border-zkNeonGreen px-3 py-1 rounded-full text-xs max-w-fit font-sourceCode",
                        children: t,
                      }),
                    (0, r.jsx)("div", {
                      className: "text-3xl pt-2",
                      children: n,
                    }),
                    (0, r.jsx)("div", {
                      className: "text-lg text-zkDarkPurple ",
                      children: s,
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  ref: u,
                  className:
                    " flex flex-col justify-between h-[420px] md:h-[480px] w-[310px] sm:w-[450px] md:w-[450px] ".concat(
                      c ? " lg:w-[550px]" : "lg:w-[450px]",
                      " "
                    ),
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "absolute h-[280px] md:h-[300px] w-full md:bottom-0 mx-auto "
                          .concat(
                            a.includes("social")
                              ? "bottom-0 scale-110 md:scale-125 md:bottom-10 "
                              : "bottom-10 scale-125 ",
                            "  "
                          )
                          .concat(a.includes("privacy") ? "bottom-20 " : ""),
                      children: l && (0, r.jsx)(d, {}),
                    }),
                    a.includes("surfer") &&
                      (0, r.jsx)("div", {
                        className:
                          "z-10 absolute bg-zkPurple rounded-full w-full h-[80%] -bottom-40 blur-2xl opacity-20 pointer-events-none",
                      }),
                  ],
                }),
              ],
            }),
          });
        },
        a = () =>
          (0, r.jsxs)("div", {
            className:
              "flex flex-col items-center py-40 gap-10 px-8  lg:max-w-7xl md:max-w-3xl     mx-auto",
            children: [
              (0, r.jsx)("div", {
                className: "text-5xl font-light",
                children: "Our Products",
              }),
              (0, r.jsxs)("div", {
                className:
                  "flex flex-col items-center lg:grid lg:grid-flow-row lg:grid-cols-5 gap-3  lg:max-w-7xl md:max-w-3xl    ",
                children: [
                  (0, r.jsx)(s, {
                    title: "ZkTerminal",
                    description:
                      "End-user digital assistant product for on-chain and off-chain automation",
                    status: "CURRENTLY LIVE",
                    imageSrc: "/rive/products/surfer.riv",
                    primary: !0,
                  }),
                  (0, r.jsx)(s, {
                    title: "Zyger Compute Cluster",
                    description:
                      "Contribute GPUs and CPUs to earn Zyger tokens.",
                    status: "PRIVATE BETA",
                    imageSrc: "/rive/products/social.riv",
                  }),
                  (0, r.jsx)(s, {
                    title: "AI Agent Builder",
                    description:
                      "Build AI secret agents and super agents with features like autonomous media creation, code generation and time series transformers.",
                    imageSrc: "/rive/products/rocket.riv",
                  }),
                  (0, r.jsx)(s, {
                    title: "Zynapse API",
                    description:
                      "Leverage Zk-verified machine learning models.World is your oyster, host or use open source models on Zyger network.",
                    imageSrc: "/rive/products/privacy.riv",
                    primary: !0,
                  }),
                ],
              }),
            ],
          });
    },
    3473: function (e, t, n) {
      "use strict";
      n.d(t, {
        YD: function () {
          return u;
        },
      });
      var r = n(2265),
        i = Object.defineProperty,
        o = new Map(),
        s = new WeakMap(),
        a = 0,
        c = void 0;
      function u() {
        var e;
        let {
            threshold: t,
            delay: n,
            trackVisibility: i,
            rootMargin: u,
            root: l,
            triggerOnce: d,
            skip: f,
            initialInView: h,
            fallbackInView: v,
            onChange: p,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {},
          [g, m] = r.useState(null),
          w = r.useRef(),
          [x, b] = r.useState({ inView: !!h, entry: void 0 });
        (w.current = p),
          r.useEffect(() => {
            let e;
            if (!f && g)
              return (
                (e = (function (e, t) {
                  let n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : c;
                  if (void 0 === window.IntersectionObserver && void 0 !== r) {
                    let i = e.getBoundingClientRect();
                    return (
                      t(r, {
                        isIntersecting: r,
                        target: e,
                        intersectionRatio:
                          "number" == typeof n.threshold ? n.threshold : 0,
                        time: 0,
                        boundingClientRect: i,
                        intersectionRect: i,
                        rootBounds: i,
                      }),
                      () => {}
                    );
                  }
                  let {
                      id: i,
                      observer: u,
                      elements: l,
                    } = (function (e) {
                      let t = Object.keys(e)
                          .sort()
                          .filter((t) => void 0 !== e[t])
                          .map((t) => {
                            var n;
                            return ""
                              .concat(t, "_")
                              .concat(
                                "root" === t
                                  ? (n = e.root)
                                    ? (s.has(n) ||
                                        ((a += 1), s.set(n, a.toString())),
                                      s.get(n))
                                    : "0"
                                  : e[t]
                              );
                          })
                          .toString(),
                        n = o.get(t);
                      if (!n) {
                        let r;
                        let i = new Map(),
                          s = new IntersectionObserver((t) => {
                            t.forEach((t) => {
                              var n;
                              let o =
                                t.isIntersecting &&
                                r.some((e) => t.intersectionRatio >= e);
                              e.trackVisibility &&
                                void 0 === t.isVisible &&
                                (t.isVisible = o),
                                null == (n = i.get(t.target)) ||
                                  n.forEach((e) => {
                                    e(o, t);
                                  });
                            });
                          }, e);
                        (r =
                          s.thresholds ||
                          (Array.isArray(e.threshold)
                            ? e.threshold
                            : [e.threshold || 0])),
                          (n = { id: t, observer: s, elements: i }),
                          o.set(t, n);
                      }
                      return n;
                    })(n),
                    d = l.get(e) || [];
                  return (
                    l.has(e) || l.set(e, d),
                    d.push(t),
                    u.observe(e),
                    function () {
                      d.splice(d.indexOf(t), 1),
                        0 === d.length && (l.delete(e), u.unobserve(e)),
                        0 === l.size && (u.disconnect(), o.delete(i));
                    }
                  );
                })(
                  g,
                  (t, n) => {
                    b({ inView: t, entry: n }),
                      w.current && w.current(t, n),
                      n.isIntersecting && d && e && (e(), (e = void 0));
                  },
                  {
                    root: l,
                    rootMargin: u,
                    threshold: t,
                    trackVisibility: i,
                    delay: n,
                  },
                  v
                )),
                () => {
                  e && e();
                }
              );
          }, [Array.isArray(t) ? t.toString() : t, g, l, u, d, f, i, v, n]);
        let y = null == (e = x.entry) ? void 0 : e.target,
          R = r.useRef();
        g ||
          !y ||
          d ||
          f ||
          R.current === y ||
          ((R.current = y), b({ inView: !!h, entry: void 0 }));
        let C = [m, x.inView, x.entry];
        return (C.ref = C[0]), (C.inView = C[1]), (C.entry = C[2]), C;
      }
      r.Component;
    },
  },
]);
