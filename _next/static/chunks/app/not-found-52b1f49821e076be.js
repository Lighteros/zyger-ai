(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [160],
  {
    9085: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 8701));
    },
    7544: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(2265),
        r = n(7715),
        s = i && "object" == typeof i && "default" in i ? i : { default: i },
        a = function () {
          return (a =
            Object.assign ||
            function (e) {
              for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        };
      function o(e, t) {
        var n = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            0 > t.indexOf(i) &&
            (n[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
            0 > t.indexOf(i[r]) &&
              Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
              (n[i[r]] = e[i[r]]);
        }
        return n;
      }
      function l() {
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
      var c = (function () {
          function e() {}
          return (
            (e.prototype.observe = function () {}),
            (e.prototype.unobserve = function () {}),
            (e.prototype.disconnect = function () {}),
            e
          );
        })(),
        u = globalThis.ResizeObserver || c,
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
          r,
          s,
          a,
          o,
          c,
          h,
          p,
          w,
          x,
          m = e.riveLoaded,
          g = void 0 !== m && m,
          b = e.canvasRef,
          y = e.containerRef,
          R = e.options,
          j = e.onCanvasHasResized,
          E = e.artboardBounds,
          O = v(void 0 === R ? {} : R),
          C = i.useState({ height: 0, width: 0 }),
          N = C[0],
          k = N.height,
          P = N.width,
          z = C[1],
          T = i.useState({ height: 0, width: 0 }),
          S = T[0],
          L = S.height,
          H = S.width,
          M = T[1],
          _ = i.useState(!0),
          A = _[0],
          D = _[1],
          I = O.fitCanvasToArtboardHeight,
          W = O.shouldResizeCanvasToContainer,
          U = O.useDevicePixelRatio,
          Z = O.customDevicePixelRatio,
          B =
            (void 0 === (t = W) && (t = !0),
            (r = (n = i.useState({ width: 0, height: 0 }))[0]),
            (s = n[1]),
            i.useEffect(function () {
              if ("undefined" != typeof window && t) {
                var e = function () {
                  s({ width: window.innerWidth, height: window.innerHeight });
                };
                return (
                  f && (e(), window.addEventListener("resize", e)),
                  function () {
                    return window.removeEventListener("resize", e);
                  }
                );
              }
            }, []),
            (c = i.useRef(
              new u(
                ((a = function (e) {
                  d &&
                    s({
                      width: e[e.length - 1].contentRect.width,
                      height: e[e.length - 1].contentRect.height,
                    });
                }),
                (o = 0),
                function () {
                  for (var e = this, t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  clearTimeout(o),
                    (o = window.setTimeout(function () {
                      return a.apply(e, t);
                    }, 0));
                })
              )
            )),
            i.useEffect(
              function () {
                var e = c.current;
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
              [y, c]
            ),
            r),
          F =
            ((h = Z || l()),
            (w = (p = i.useState(h))[0]),
            (x = p[1]),
            i.useEffect(
              function () {
                if ("undefined" != typeof window && "matchMedia" in window) {
                  var e = function () {
                      x(Z || l());
                    },
                    t = window.matchMedia(
                      "screen and (resolution: ".concat(w, "dppx)")
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
              [w, Z]
            ),
            w),
          Y = null != E ? E : {},
          G = Y.maxX,
          V = Y.maxY,
          Q = i.useCallback(
            function () {
              var e,
                t,
                n,
                i,
                r =
                  null !==
                    (t =
                      null === (e = y.current) || void 0 === e
                        ? void 0
                        : e.clientWidth) && void 0 !== t
                    ? t
                    : 0,
                s =
                  null !==
                    (i =
                      null === (n = y.current) || void 0 === n
                        ? void 0
                        : n.clientHeight) && void 0 !== i
                    ? i
                    : 0;
              return I && E
                ? { width: r, height: (E.maxY / E.maxX) * r }
                : { width: r, height: s };
            },
            [y, I, G, V]
          );
        i.useEffect(
          function () {
            if (W && y.current && g) {
              var e = Q(),
                t = e.width,
                n = e.height,
                i = !1;
              if (b.current) {
                var r = t !== P || n !== k;
                if (
                  (O.fitCanvasToArtboardHeight &&
                    r &&
                    ((y.current.style.height = n + "px"), (i = !0)),
                  O.useDevicePixelRatio)
                ) {
                  if (r || t * F !== H || n * F !== L) {
                    var s = F * t,
                      a = F * n;
                    (b.current.width = s),
                      (b.current.height = a),
                      (b.current.style.width = t + "px"),
                      (b.current.style.height = n + "px"),
                      M({ width: s, height: a }),
                      (i = !0);
                  }
                } else
                  r &&
                    ((b.current.width = t),
                    (b.current.height = n),
                    M({ width: t, height: n }),
                    (i = !0));
                z({ width: t, height: n });
              }
              j && (A || i) && j && j(), A && D(!1);
            }
          },
          [b, y, B, F, Q, A, D, L, H, k, P, j, W, I, U, g]
        );
      }
      function w(e) {
        var t = e.setContainerRef,
          n = e.setCanvasRef,
          i = e.className,
          r = void 0 === i ? "" : i,
          l = e.style,
          c = e.children,
          u = o(e, [
            "setContainerRef",
            "setCanvasRef",
            "className",
            "style",
            "children",
          ]),
          d = a({ width: "100%", height: "100%" }, l);
        return s.default.createElement(
          "div",
          a({ ref: t, className: r }, !r && { style: d }),
          s.default.createElement(
            "canvas",
            a(
              { ref: n, style: { verticalAlign: "top", width: 0, height: 0 } },
              u
            ),
            c
          )
        );
      }
      function x(e, t) {
        void 0 === t && (t = {});
        var n = i.useRef(null),
          o = i.useRef(null),
          l = i.useState(null),
          c = l[0],
          u = l[1],
          d = !!e,
          f = v(t),
          h = i.useCallback(
            function () {
              c && (c.startRendering(), c.resizeToCanvas());
            },
            [c]
          );
        p({
          riveLoaded: !!c,
          canvasRef: n,
          containerRef: o,
          options: f,
          onCanvasHasResized: h,
          artboardBounds: null == c ? void 0 : c.bounds,
        });
        var x = i.useCallback(
            function (t) {
              if (t && e && d) {
                var i = f.useOffscreenRenderer,
                  s = new r.Rive(
                    a(a({ useOffscreenRenderer: i }, e), { canvas: t })
                  );
                s.on(r.EventType.Load, function () {
                  n.current ? u(s) : s.cleanup();
                });
              } else
                null === t &&
                  n.current &&
                  ((n.current.height = 0), (n.current.width = 0));
              n.current = t;
            },
            [d]
          ),
          m = i.useCallback(function (e) {
            o.current = e;
          }, []);
        i.useEffect(
          function () {
            var e = new IntersectionObserver(function (e) {
              e[0].isIntersecting
                ? c && c.startRendering()
                : c && c.stopRendering();
            });
            return (
              n.current && e.observe(n.current),
              function () {
                e.disconnect();
              }
            );
          },
          [c]
        ),
          i.useEffect(
            function () {
              return function () {
                c && (c.cleanup(), u(null));
              };
            },
            [c]
          );
        var g = null == e ? void 0 : e.animations;
        i.useEffect(
          function () {
            c &&
              g &&
              (c.isPlaying
                ? (c.stop(c.animationNames), c.play(g))
                : c.isPaused && (c.stop(c.animationNames), c.pause(g)));
          },
          [g, c]
        );
        var b = i.useCallback(
          function (e) {
            return s.default.createElement(
              w,
              a({ setContainerRef: m, setCanvasRef: x }, e)
            );
          },
          [x, m]
        );
        return {
          canvas: n.current,
          container: o.current,
          setCanvasRef: x,
          setContainerRef: m,
          rive: c,
          RiveComponent: b,
        };
      }
      (t.default = function (e) {
        var t = e.src,
          n = e.artboard,
          i = e.animations,
          r = e.stateMachines,
          l = e.layout,
          c = e.useOffscreenRenderer,
          u = e.shouldDisableRiveListeners,
          d = e.shouldResizeCanvasToContainer,
          f = e.automaticallyHandleEvents,
          h = e.children,
          v = o(e, [
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
          p = x(
            {
              src: t,
              artboard: n,
              animations: i,
              layout: l,
              stateMachines: r,
              autoplay: !0,
              shouldDisableRiveListeners: void 0 !== u && u,
              automaticallyHandleEvents: void 0 !== f && f,
            },
            {
              useOffscreenRenderer: void 0 === c || c,
              shouldResizeCanvasToContainer: void 0 === d || d,
            }
          ).RiveComponent;
        return s.default.createElement(p, a({}, v), h);
      }),
        (t.useResizeCanvas = p),
        (t.useRive = x),
        (t.useStateMachineInput = function (e, t, n, s) {
          var a = i.useState(null),
            o = a[0],
            l = a[1];
          return (
            i.useEffect(
              function () {
                function i() {
                  if (((e && t && n) || l(null), e && t && n)) {
                    var i = e.stateMachineInputs(t);
                    if (i) {
                      var r = i.find(function (e) {
                        return e.name === n;
                      });
                      void 0 !== s && r && (r.value = s), l(r || null);
                    }
                  } else l(null);
                }
                i(),
                  e &&
                    e.on(r.EventType.Play, function () {
                      i();
                    });
              },
              [e]
            ),
            o
          );
        }),
        Object.keys(r).forEach(function (e) {
          "default" === e ||
            t.hasOwnProperty(e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return r[e];
              },
            });
        });
    },
    4997: function (e, t, n) {
      "use strict";
      var i = n(7437);
      t.Z = (e) => {
        let { children: t, link: n } = e;
        return (0, i.jsx)("a", {
          href: n,
          target: "_blank",
          className: "",
          children: (0, i.jsx)("div", {
            className:
              " transition-all ease-out duration-250 group min-w-32   w-full overflow-hidden border-[1px] border-transparent bg-white   text-white   active:brightness-[85%] S",
            style: {
              clipPath:
                "polygon(0% 0%, calc(100% - 15px) 0%, 100% 15px, 100% 100%, 15px 100%, 0% calc(100% - 15px), 0% 100%, 0% 0%)",
            },
            children: (0, i.jsx)("div", {
              className:
                " transition-all ease-out duration-250   w-full overflow-hidden bg-[#010921]   hover:bg-white  hover:text-black active:bg-white active:text-black group-active:brightness-[85%] ",
              style: {
                clipPath:
                  " polygon(0% 0%, calc(100% - 15px) 0%, 100% 15px, 100% 100%, 15px 100%, 0% calc(100% - 15px), 0% 100%, 0% 0%)",
              },
              children: (0, i.jsx)("div", {
                className:
                  " transition-all ease-out duration-250 px-5 md:px-7 py-2 text-xs lg:text-base min-w-max text-center",
                children: t,
              }),
            }),
          }),
        });
      };
    },
    2554: function (e, t, n) {
      "use strict";
      var i = n(7437),
        r = n(6648),
        s = n(4997),
        a = n(2265),
        o = n(6786),
        l = n(7138);
      t.Z = () => {
        let [e, t] = (0, a.useState)(!1),
          [n, c] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(
            () => (
              window.innerWidth < 768 ? t(!0) : (t(!1), c(!1)),
              window.addEventListener("resize", () => {
                window.innerWidth < 768 ? t(!0) : (t(!1), c(!1));
              }),
              () => {
                window.removeEventListener("resize", () => {});
              }
            ),
            []
          ),
          (0, i.jsxs)("div", {
            className:
              "flex justify-between p-5  lg:max-w-7xl md:max-w-3xl     w-full ",
            children: [
              n &&
                (0, i.jsx)("div", {
                  className: "fixed inset-0 z-30  w-screen h-screen",
                  onClick: () => {
                    c(!1);
                  },
                }),
              (0, i.jsx)(l.default, {
                href: "/",
                children: (0, i.jsx)(r.default, {
                  src: "/icons/logo.png",
                  width: 100,
                  height: 100,
                  alt: "logo",
                }),
              }),
              e
                ? (0, i.jsxs)("div", {
                    className: "relative cursor-pointer",
                    onClick: () => c((e) => !e),
                    children: [
                      (0, i.jsxs)("div", {
                        className: "flex flex-col gap-[5px]",
                        children: [
                          (0, i.jsx)("div", {
                            className: "bg-white h-[3px] w-8 rounded-full",
                          }),
                          (0, i.jsx)("div", {
                            className: "bg-white h-[3px] w-8 rounded-full",
                          }),
                          (0, i.jsx)("div", {
                            className: "bg-white h-[3px] w-8 rounded-full",
                          }),
                        ],
                      }),
                      n &&
                        (0, i.jsx)(i.Fragment, {
                          children: (0, i.jsxs)("div", {
                            className:
                              "absolute z-40 right-5 top-12 flex flex-col gap-6 items-center justify-center text-white",
                            children: [
                              (0, i.jsx)("a", {
                                className: "text-xs lg:text-base text-white",
                                href: "https://docs.zygerai.pro",
                                target: "_blank",
                                children: "Document",
                              }),
                              (0, i.jsx)(s.Z, {
                                link: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x00000000000000000000000000000000000000",
                                target: "_blank",
                                children: "Buy $ZYGER",
                              }),
                            ],
                          }),
                        }),
                    ],
                  })
                : (0, i.jsxs)("div", {
                    className: "flex gap-10 items-center justify-center",
                    children: [
                      (0, i.jsx)("a", {
                        className:
                          "text-sm lg:text-base hover:underline hover:underline-offset-4",
                        href: "https://docs.zygerai.pro",
                        target: "_blank",
                        children: "Document",
                      }),
                      (0, i.jsx)(s.Z, { link: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x00000000000000000000000000000000000000",target:"_blank", children: "Buy $ZYGER" }),
                    ],
                  }),
            ],
          })
        );
      };
    },
    6786: function (e, t, n) {
      "use strict";
      n.d(t, {
        Qz: function () {
          return a;
        },
        Rn: function () {
          return r;
        },
        VN: function () {
          return i;
        },
        Ye: function () {
          return s;
        },
        mx: function () {
          return o;
        },
      });
      let i = "https://docs.zygerai.pro",
        r = "",
        s = "https://docs.zygerai.pro",
        a = "https://github.com/ZkAGI",
        o = {
          howToUse: "https://tidycal.com/zkagi/discussion",
          whitePaper:
            "https://drive.google.com/file/d/1EOFTh8TxscsZlT2fnaxJyGlD0dipAFUQ/view?usp=sharing",
          getStarted: "https://app.zygerai.pro",
          ambassadorApply: "https://zealy.io/cw/zkagisocials/questboard",
        };
    },
    8701: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return c;
        },
      });
      var i = n(7437),
        r = n(7544),
        s = n.n(r),
        a = n(2265),
        o = n(2554),
        l = n(4997);
      function c() {
        let [e, t] = (0, a.useState)(!1),
          n = () => {
            t(window.scrollY > 10);
          };
        return (
          (0, a.useEffect)(
            () => (
              n(),
              window.addEventListener("scroll", n),
              () => {
                window.removeEventListener("scroll", n);
              }
            ),
            []
          ),
          (0, i.jsxs)("div", {
            className:
              "relative h-screen w-full flex flex-col items-center bg-black text-white",
            children: [
              (0, i.jsx)("div", {
                className: "fixed flex justify-center w-full z-50 ".concat(
                  e ? "opacity-0 pointer-events-none" : "opacity-100",
                  " transition-opacity"
                ),
                children: (0, i.jsx)(o.Z, {}),
              }),
              (0, i.jsx)("div", {
                className: "absolute z-0 w-full h-full pointer-events-none",
                children: (0, i.jsx)(s(), {
                  src: "/rive/404.riv",
                  stateMachines: "State Machine 1",
                  layout: new r.Layout({ fit: r.Fit.Cover }),
                }),
              }),
              (0, i.jsxs)("div", {
                className:
                  "relative h-full z-10 flex flex-col items-center justify-end my-56",
                children: [
                  (0, i.jsx)("div", {
                    className: "text-4xl mb-2",
                    children: "Sorry",
                  }),
                  (0, i.jsx)("div", {
                    className: "mb-4 text-sm",
                    children: "Something went wrong . . .",
                  }),
                  (0, i.jsx)(l.Z, { link: "/", children: "HOMEPAGE" }),
                ],
              }),
            ],
          })
        );
      }
    },
  },
  function (e) {
    e.O(0, [370, 648, 138, 971, 23, 744], function () {
      return e((e.s = 9085));
    }),
      (_N_E = e.O());
  },
]);
