(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [457],
  {
    7544: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(2265),
        i = n(7715),
        a = r && "object" == typeof r && "default" in r ? r : { default: r },
        o = function () {
          return (o =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        };
      function s(e, t) {
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
      function u() {
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
        l = globalThis.ResizeObserver || c,
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
          a,
          o,
          s,
          c,
          h,
          p,
          w,
          g,
          m = e.riveLoaded,
          b = void 0 !== m && m,
          y = e.canvasRef,
          R = e.containerRef,
          x = e.options,
          C = e.onCanvasHasResized,
          E = e.artboardBounds,
          O = v(void 0 === x ? {} : x),
          k = r.useState({ height: 0, width: 0 }),
          P = k[0],
          j = P.height,
          z = P.width,
          L = k[1],
          S = r.useState({ height: 0, width: 0 }),
          T = S[0],
          N = T.height,
          M = T.width,
          H = S[1],
          D = r.useState(!0),
          A = D[0],
          I = D[1],
          B = O.fitCanvasToArtboardHeight,
          _ = O.shouldResizeCanvasToContainer,
          Y = O.useDevicePixelRatio,
          G = O.customDevicePixelRatio,
          W =
            (void 0 === (t = _) && (t = !0),
            (i = (n = r.useState({ width: 0, height: 0 }))[0]),
            (a = n[1]),
            r.useEffect(function () {
              if ("undefined" != typeof window && t) {
                var e = function () {
                  a({ width: window.innerWidth, height: window.innerHeight });
                };
                return (
                  f && (e(), window.addEventListener("resize", e)),
                  function () {
                    return window.removeEventListener("resize", e);
                  }
                );
              }
            }, []),
            (c = r.useRef(
              new l(
                ((o = function (e) {
                  d &&
                    a({
                      width: e[e.length - 1].contentRect.width,
                      height: e[e.length - 1].contentRect.height,
                    });
                }),
                (s = 0),
                function () {
                  for (var e = this, t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  clearTimeout(s),
                    (s = window.setTimeout(function () {
                      return o.apply(e, t);
                    }, 0));
                })
              )
            )),
            r.useEffect(
              function () {
                var e = c.current;
                if (t) {
                  var n = R.current;
                  return (
                    R.current && d && e.observe(R.current),
                    function () {
                      e.disconnect(), n && d && e.unobserve(n);
                    }
                  );
                }
                e.disconnect();
              },
              [R, c]
            ),
            i),
          X =
            ((h = G || u()),
            (w = (p = r.useState(h))[0]),
            (g = p[1]),
            r.useEffect(
              function () {
                if ("undefined" != typeof window && "matchMedia" in window) {
                  var e = function () {
                      g(G || u());
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
              [w, G]
            ),
            w),
          F = null != E ? E : {},
          V = F.maxX,
          Z = F.maxY,
          q = r.useCallback(
            function () {
              var e,
                t,
                n,
                r,
                i =
                  null !==
                    (t =
                      null === (e = R.current) || void 0 === e
                        ? void 0
                        : e.clientWidth) && void 0 !== t
                    ? t
                    : 0,
                a =
                  null !==
                    (r =
                      null === (n = R.current) || void 0 === n
                        ? void 0
                        : n.clientHeight) && void 0 !== r
                    ? r
                    : 0;
              return B && E
                ? { width: i, height: (E.maxY / E.maxX) * i }
                : { width: i, height: a };
            },
            [R, B, V, Z]
          );
        r.useEffect(
          function () {
            if (_ && R.current && b) {
              var e = q(),
                t = e.width,
                n = e.height,
                r = !1;
              if (y.current) {
                var i = t !== z || n !== j;
                if (
                  (O.fitCanvasToArtboardHeight &&
                    i &&
                    ((R.current.style.height = n + "px"), (r = !0)),
                  O.useDevicePixelRatio)
                ) {
                  if (i || t * X !== M || n * X !== N) {
                    var a = X * t,
                      o = X * n;
                    (y.current.width = a),
                      (y.current.height = o),
                      (y.current.style.width = t + "px"),
                      (y.current.style.height = n + "px"),
                      H({ width: a, height: o }),
                      (r = !0);
                  }
                } else
                  i &&
                    ((y.current.width = t),
                    (y.current.height = n),
                    H({ width: t, height: n }),
                    (r = !0));
                L({ width: t, height: n });
              }
              C && (A || r) && C && C(), A && I(!1);
            }
          },
          [y, R, W, X, q, A, I, N, M, j, z, C, _, B, Y, b]
        );
      }
      function w(e) {
        var t = e.setContainerRef,
          n = e.setCanvasRef,
          r = e.className,
          i = void 0 === r ? "" : r,
          u = e.style,
          c = e.children,
          l = s(e, [
            "setContainerRef",
            "setCanvasRef",
            "className",
            "style",
            "children",
          ]),
          d = o({ width: "100%", height: "100%" }, u);
        return a.default.createElement(
          "div",
          o({ ref: t, className: i }, !i && { style: d }),
          a.default.createElement(
            "canvas",
            o(
              { ref: n, style: { verticalAlign: "top", width: 0, height: 0 } },
              l
            ),
            c
          )
        );
      }
      function g(e, t) {
        void 0 === t && (t = {});
        var n = r.useRef(null),
          s = r.useRef(null),
          u = r.useState(null),
          c = u[0],
          l = u[1],
          d = !!e,
          f = v(t),
          h = r.useCallback(
            function () {
              c && (c.startRendering(), c.resizeToCanvas());
            },
            [c]
          );
        p({
          riveLoaded: !!c,
          canvasRef: n,
          containerRef: s,
          options: f,
          onCanvasHasResized: h,
          artboardBounds: null == c ? void 0 : c.bounds,
        });
        var g = r.useCallback(
            function (t) {
              if (t && e && d) {
                var r = f.useOffscreenRenderer,
                  a = new i.Rive(
                    o(o({ useOffscreenRenderer: r }, e), { canvas: t })
                  );
                a.on(i.EventType.Load, function () {
                  n.current ? l(a) : a.cleanup();
                });
              } else
                null === t &&
                  n.current &&
                  ((n.current.height = 0), (n.current.width = 0));
              n.current = t;
            },
            [d]
          ),
          m = r.useCallback(function (e) {
            s.current = e;
          }, []);
        r.useEffect(
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
          r.useEffect(
            function () {
              return function () {
                c && (c.cleanup(), l(null));
              };
            },
            [c]
          );
        var b = null == e ? void 0 : e.animations;
        r.useEffect(
          function () {
            c &&
              b &&
              (c.isPlaying
                ? (c.stop(c.animationNames), c.play(b))
                : c.isPaused && (c.stop(c.animationNames), c.pause(b)));
          },
          [b, c]
        );
        var y = r.useCallback(
          function (e) {
            return a.default.createElement(
              w,
              o({ setContainerRef: m, setCanvasRef: g }, e)
            );
          },
          [g, m]
        );
        return {
          canvas: n.current,
          container: s.current,
          setCanvasRef: g,
          setContainerRef: m,
          rive: c,
          RiveComponent: y,
        };
      }
      (t.default = function (e) {
        var t = e.src,
          n = e.artboard,
          r = e.animations,
          i = e.stateMachines,
          u = e.layout,
          c = e.useOffscreenRenderer,
          l = e.shouldDisableRiveListeners,
          d = e.shouldResizeCanvasToContainer,
          f = e.automaticallyHandleEvents,
          h = e.children,
          v = s(e, [
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
          p = g(
            {
              src: t,
              artboard: n,
              animations: r,
              layout: u,
              stateMachines: i,
              autoplay: !0,
              shouldDisableRiveListeners: void 0 !== l && l,
              automaticallyHandleEvents: void 0 !== f && f,
            },
            {
              useOffscreenRenderer: void 0 === c || c,
              shouldResizeCanvasToContainer: void 0 === d || d,
            }
          ).RiveComponent;
        return a.default.createElement(p, o({}, v), h);
      }),
        (t.useResizeCanvas = p),
        (t.useRive = g),
        (t.useStateMachineInput = function (e, t, n, a) {
          var o = r.useState(null),
            s = o[0],
            u = o[1];
          return (
            r.useEffect(
              function () {
                function r() {
                  if (((e && t && n) || u(null), e && t && n)) {
                    var r = e.stateMachineInputs(t);
                    if (r) {
                      var i = r.find(function (e) {
                        return e.name === n;
                      });
                      void 0 !== a && i && (i.value = a), u(i || null);
                    }
                  } else u(null);
                }
                r(),
                  e &&
                    e.on(i.EventType.Play, function () {
                      r();
                    });
              },
              [e]
            ),
            s
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
    2457: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(7437),
        i = n(7544),
        a = n(2265);
      t.default = () => {
        let e = (0, a.useRef)(null),
          t = "State Machine 1",
          { rive: n, RiveComponent: o } = (0, i.useRive)({
            src: "/rive/gpu.riv",
            stateMachines: t,
            artboard: "New Artboard",
            autoplay: !0,
            layout: new i.Layout({ fit: i.Fit.Contain }),
          });
        e.current = (0, i.useStateMachineInput)(n, t, "Scroll");
        let s = () => {
          let t = window.innerHeight;
          e.current &&
            (e.current.value =
              window.scrollY - 2 * t + 100 * (t > 768 ? 5 : 2));
        };
        return (
          (0, a.useEffect)(
            () => (
              e.current && window.addEventListener("scroll", s),
              () => {
                e.current && window.removeEventListener("scroll", s);
              }
            ),
            [e.current, n]
          ),
          (0, r.jsxs)("div", {
            className: "relative h-full bg-zkDarkerBackground   ",
            children: [
              (0, r.jsxs)("div", {
                className:
                  "absolute w-full h-[calc(30vh)]  md:h-[calc(50vh)] lg:h-[calc(60vh)] xl:h-[calc(90vh)] flex flex-col gap-5 justify-start items-center pb-16 ",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "text-zkLightBlue border border-zkBlue px-4 py-1 rounded-full text-sm font-sourceCode",
                    children: "PRIVACY API",
                  }),
                  (0, r.jsx)("div", {
                    className: "text-3xl font-light ",
                    children: "Get Started with ZkAGI",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "text-zkDarkPurple text-center text-md lg:text-xl ",
                    children: "Absolute privacy for code & trade execution",
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className:
                  "mt-20 md:my-0 h-[calc(40vh)]  md:h-[calc(50vh)] lg:h-[calc(60vh)] xl:h-[calc(90vh)]  bg-zkDarkerBackground",
                children: (0, r.jsx)(o, {}),
              }),
            ],
          })
        );
      };
    },
  },
]);
