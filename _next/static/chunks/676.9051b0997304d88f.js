(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [676],
  {
    7544: function (e, t, s) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = s(2265),
        a = s(7715),
        i = n && "object" == typeof n && "default" in n ? n : { default: n },
        r = function () {
          return (r =
            Object.assign ||
            function (e) {
              for (var t, s = 1, n = arguments.length; s < n; s++)
                for (var a in (t = arguments[s]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        };
      function l(e, t) {
        var s = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            0 > t.indexOf(n) &&
            (s[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (n = Object.getOwnPropertySymbols(e); a < n.length; a++)
            0 > t.indexOf(n[a]) &&
              Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
              (s[n[a]] = e[n[a]]);
        }
        return s;
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
      var o = (function () {
          function e() {}
          return (
            (e.prototype.observe = function () {}),
            (e.prototype.unobserve = function () {}),
            (e.prototype.disconnect = function () {}),
            e
          );
        })(),
        d = globalThis.ResizeObserver || o,
        u = void 0 !== globalThis.ResizeObserver,
        f = !u,
        h = {
          useDevicePixelRatio: !0,
          fitCanvasToArtboardHeight: !1,
          useOffscreenRenderer: !0,
          shouldResizeCanvasToContainer: !0,
        };
      function m(e) {
        return Object.assign({}, h, e);
      }
      function v(e) {
        var t,
          s,
          a,
          i,
          r,
          l,
          o,
          h,
          v,
          x,
          g,
          p = e.riveLoaded,
          w = void 0 !== p && p,
          y = e.canvasRef,
          j = e.containerRef,
          b = e.options,
          N = e.onCanvasHasResized,
          R = e.artboardBounds,
          C = m(void 0 === b ? {} : b),
          k = n.useState({ height: 0, width: 0 }),
          E = k[0],
          O = E.height,
          P = E.width,
          z = k[1],
          T = n.useState({ height: 0, width: 0 }),
          S = T[0],
          I = S.height,
          M = S.width,
          A = T[1],
          H = n.useState(!0),
          L = H[0],
          D = H[1],
          G = C.fitCanvasToArtboardHeight,
          U = C.shouldResizeCanvasToContainer,
          V = C.useDevicePixelRatio,
          _ = C.customDevicePixelRatio,
          Z =
            (void 0 === (t = U) && (t = !0),
            (a = (s = n.useState({ width: 0, height: 0 }))[0]),
            (i = s[1]),
            n.useEffect(function () {
              if ("undefined" != typeof window && t) {
                var e = function () {
                  i({ width: window.innerWidth, height: window.innerHeight });
                };
                return (
                  f && (e(), window.addEventListener("resize", e)),
                  function () {
                    return window.removeEventListener("resize", e);
                  }
                );
              }
            }, []),
            (o = n.useRef(
              new d(
                ((r = function (e) {
                  u &&
                    i({
                      width: e[e.length - 1].contentRect.width,
                      height: e[e.length - 1].contentRect.height,
                    });
                }),
                (l = 0),
                function () {
                  for (var e = this, t = [], s = 0; s < arguments.length; s++)
                    t[s] = arguments[s];
                  clearTimeout(l),
                    (l = window.setTimeout(function () {
                      return r.apply(e, t);
                    }, 0));
                })
              )
            )),
            n.useEffect(
              function () {
                var e = o.current;
                if (t) {
                  var s = j.current;
                  return (
                    j.current && u && e.observe(j.current),
                    function () {
                      e.disconnect(), s && u && e.unobserve(s);
                    }
                  );
                }
                e.disconnect();
              },
              [j, o]
            ),
            a),
          F =
            ((h = _ || c()),
            (x = (v = n.useState(h))[0]),
            (g = v[1]),
            n.useEffect(
              function () {
                if ("undefined" != typeof window && "matchMedia" in window) {
                  var e = function () {
                      g(_ || c());
                    },
                    t = window.matchMedia(
                      "screen and (resolution: ".concat(x, "dppx)")
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
              [x, _]
            ),
            x),
          B = null != R ? R : {},
          Y = B.maxX,
          W = B.maxY,
          K = n.useCallback(
            function () {
              var e,
                t,
                s,
                n,
                a =
                  null !==
                    (t =
                      null === (e = j.current) || void 0 === e
                        ? void 0
                        : e.clientWidth) && void 0 !== t
                    ? t
                    : 0,
                i =
                  null !==
                    (n =
                      null === (s = j.current) || void 0 === s
                        ? void 0
                        : s.clientHeight) && void 0 !== n
                    ? n
                    : 0;
              return G && R
                ? { width: a, height: (R.maxY / R.maxX) * a }
                : { width: a, height: i };
            },
            [j, G, Y, W]
          );
        n.useEffect(
          function () {
            if (U && j.current && w) {
              var e = K(),
                t = e.width,
                s = e.height,
                n = !1;
              if (y.current) {
                var a = t !== P || s !== O;
                if (
                  (C.fitCanvasToArtboardHeight &&
                    a &&
                    ((j.current.style.height = s + "px"), (n = !0)),
                  C.useDevicePixelRatio)
                ) {
                  if (a || t * F !== M || s * F !== I) {
                    var i = F * t,
                      r = F * s;
                    (y.current.width = i),
                      (y.current.height = r),
                      (y.current.style.width = t + "px"),
                      (y.current.style.height = s + "px"),
                      A({ width: i, height: r }),
                      (n = !0);
                  }
                } else
                  a &&
                    ((y.current.width = t),
                    (y.current.height = s),
                    A({ width: t, height: s }),
                    (n = !0));
                z({ width: t, height: s });
              }
              N && (L || n) && N && N(), L && D(!1);
            }
          },
          [y, j, Z, F, K, L, D, I, M, O, P, N, U, G, V, w]
        );
      }
      function x(e) {
        var t = e.setContainerRef,
          s = e.setCanvasRef,
          n = e.className,
          a = void 0 === n ? "" : n,
          c = e.style,
          o = e.children,
          d = l(e, [
            "setContainerRef",
            "setCanvasRef",
            "className",
            "style",
            "children",
          ]),
          u = r({ width: "100%", height: "100%" }, c);
        return i.default.createElement(
          "div",
          r({ ref: t, className: a }, !a && { style: u }),
          i.default.createElement(
            "canvas",
            r(
              { ref: s, style: { verticalAlign: "top", width: 0, height: 0 } },
              d
            ),
            o
          )
        );
      }
      function g(e, t) {
        void 0 === t && (t = {});
        var s = n.useRef(null),
          l = n.useRef(null),
          c = n.useState(null),
          o = c[0],
          d = c[1],
          u = !!e,
          f = m(t),
          h = n.useCallback(
            function () {
              o && (o.startRendering(), o.resizeToCanvas());
            },
            [o]
          );
        v({
          riveLoaded: !!o,
          canvasRef: s,
          containerRef: l,
          options: f,
          onCanvasHasResized: h,
          artboardBounds: null == o ? void 0 : o.bounds,
        });
        var g = n.useCallback(
            function (t) {
              if (t && e && u) {
                var n = f.useOffscreenRenderer,
                  i = new a.Rive(
                    r(r({ useOffscreenRenderer: n }, e), { canvas: t })
                  );
                i.on(a.EventType.Load, function () {
                  s.current ? d(i) : i.cleanup();
                });
              } else
                null === t &&
                  s.current &&
                  ((s.current.height = 0), (s.current.width = 0));
              s.current = t;
            },
            [u]
          ),
          p = n.useCallback(function (e) {
            l.current = e;
          }, []);
        n.useEffect(
          function () {
            var e = new IntersectionObserver(function (e) {
              e[0].isIntersecting
                ? o && o.startRendering()
                : o && o.stopRendering();
            });
            return (
              s.current && e.observe(s.current),
              function () {
                e.disconnect();
              }
            );
          },
          [o]
        ),
          n.useEffect(
            function () {
              return function () {
                o && (o.cleanup(), d(null));
              };
            },
            [o]
          );
        var w = null == e ? void 0 : e.animations;
        n.useEffect(
          function () {
            o &&
              w &&
              (o.isPlaying
                ? (o.stop(o.animationNames), o.play(w))
                : o.isPaused && (o.stop(o.animationNames), o.pause(w)));
          },
          [w, o]
        );
        var y = n.useCallback(
          function (e) {
            return i.default.createElement(
              x,
              r({ setContainerRef: p, setCanvasRef: g }, e)
            );
          },
          [g, p]
        );
        return {
          canvas: s.current,
          container: l.current,
          setCanvasRef: g,
          setContainerRef: p,
          rive: o,
          RiveComponent: y,
        };
      }
      (t.default = function (e) {
        var t = e.src,
          s = e.artboard,
          n = e.animations,
          a = e.stateMachines,
          c = e.layout,
          o = e.useOffscreenRenderer,
          d = e.shouldDisableRiveListeners,
          u = e.shouldResizeCanvasToContainer,
          f = e.automaticallyHandleEvents,
          h = e.children,
          m = l(e, [
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
          v = g(
            {
              src: t,
              artboard: s,
              animations: n,
              layout: c,
              stateMachines: a,
              autoplay: !0,
              shouldDisableRiveListeners: void 0 !== d && d,
              automaticallyHandleEvents: void 0 !== f && f,
            },
            {
              useOffscreenRenderer: void 0 === o || o,
              shouldResizeCanvasToContainer: void 0 === u || u,
            }
          ).RiveComponent;
        return i.default.createElement(v, r({}, m), h);
      }),
        (t.useResizeCanvas = v),
        (t.useRive = g),
        (t.useStateMachineInput = function (e, t, s, i) {
          var r = n.useState(null),
            l = r[0],
            c = r[1];
          return (
            n.useEffect(
              function () {
                function n() {
                  if (((e && t && s) || c(null), e && t && s)) {
                    var n = e.stateMachineInputs(t);
                    if (n) {
                      var a = n.find(function (e) {
                        return e.name === s;
                      });
                      void 0 !== i && a && (a.value = i), c(a || null);
                    }
                  } else c(null);
                }
                n(),
                  e &&
                    e.on(a.EventType.Play, function () {
                      n();
                    });
              },
              [e]
            ),
            l
          );
        }),
        Object.keys(a).forEach(function (e) {
          "default" === e ||
            t.hasOwnProperty(e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return a[e];
              },
            });
        });
    },
    6676: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return f;
          },
        });
      var n = s(7437),
        a = s(2265);
      let i = (e) => {
        let { delay: t, children: s } = e,
          [i, r] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            let e = setTimeout(() => {
              r(!0);
            }, 700 * t);
            return () => clearTimeout(e);
          }, [t]),
          (0, n.jsx)("div", {
            className: "transition-opacity duration-1000 ease-in ".concat(
              i ? "opacity-100" : "opacity-0"
            ),
            children: s,
          })
        );
      };
      var r = () =>
          (0, n.jsx)("div", {
            className:
              "hidden lg:flex absolute w-screen h-full   items-center justify-center   inset-0 z-20 uppercase font-sourceCode  bottom-10 text-base",
            children: (0, n.jsxs)("div", {
              className: " flex gap-64 items-center",
              children: [
                (0, n.jsxs)("div", {
                  className: "flex  flex-col gap-5",
                  children: [
                    (0, n.jsx)(i, {
                      delay: 1,
                      children: (0, n.jsxs)("div", {
                        className: " w-full h-full",
                        children: [
                          (0, n.jsx)("div", {
                            className: "w-72 py-3",
                            children:
                              "Reward High Performance Compute Providers",
                          }),
                          (0, n.jsx)("img", {
                            src: "/images/markers/1.svg",
                            className: "",
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)(i, {
                      delay: 2,
                      children: (0, n.jsxs)("div", {
                        className: "-translate-y-14 w-full h-full",
                        children: [
                          (0, n.jsx)("div", {
                            className: "w-72 py-3",
                            children:
                              "Usage fees for end-user products like ZkSurfer",
                          }),
                          (0, n.jsx)("img", {
                            src: "/images/markers/2.svg",
                            className: "",
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)(i, {
                      delay: 3,
                      children: (0, n.jsxs)("div", {
                        className: " w-full h-full relative -translate-y-10",
                        children: [
                          (0, n.jsx)("div", {
                            className: " absolute bottom-3",
                            children: "Community Governance ",
                          }),
                          (0, n.jsx)("img", {
                            src: "/images/markers/2.svg",
                            className: "scale-y-[-1] ",
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)(i, {
                      delay: 4,
                      children: (0, n.jsxs)("div", {
                        className: "-translate-y-16 w-full h-full relative ",
                        children: [
                          (0, n.jsx)("div", {
                            className: "w-72 absolute bottom-3",
                            children: "Ecosystem Grants ",
                          }),
                          (0, n.jsx)("img", {
                            src: "/images/markers/1.svg",
                            className: "scale-y-[-1] ",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "flex  flex-col gap-5 ",
                  children: [
                    (0, n.jsx)(i, {
                      delay: 5,
                      children: (0, n.jsxs)("div", {
                        className: " w-full h-full ",
                        children: [
                          (0, n.jsx)("div", {
                            className: "w-72 py-3 ml-auto text-right",
                            children:
                              "Economic Penalties for Data Poisoning/Malicious behaviour",
                          }),
                          (0, n.jsx)("img", {
                            src: "/images/markers/1.svg",
                            className: " scale-x-[-1]",
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)(i, {
                      delay: 6,
                      children: (0, n.jsxs)("div", {
                        className: "-translate-y-10 w-full h-full",
                        children: [
                          (0, n.jsx)("div", {
                            className: "w-72 py-2 ml-auto text-right",
                            children: "Usage Credits for ZkAGI API",
                          }),
                          (0, n.jsx)("img", {
                            src: "/images/markers/2.svg",
                            className: " scale-x-[-1] ",
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)(i, {
                      delay: 7,
                      children: (0, n.jsxs)("div", {
                        className: " w-full h-full relative -translate-y-5",
                        children: [
                          (0, n.jsx)("div", {
                            className:
                              "absolute w-72 bottom-3 right-0 ml-auto text-right",
                            children:
                              "Usage Fees for High Performance Compute Consumers",
                          }),
                          (0, n.jsx)("img", {
                            src: "/images/markers/2.svg",
                            className: " scale-x-[-1] scale-y-[-1] ",
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)(i, {
                      delay: 8,
                      children: (0, n.jsxs)("div", {
                        className: "-translate-y-10 w-full h-full relative ",
                        children: [
                          (0, n.jsx)("div", {
                            className:
                              "w-72  ml-auto absolute bottom-3 right-0 text-right",
                            children: "Reward AI trainers and Retrainers",
                          }),
                          (0, n.jsx)("img", {
                            src: "/images/markers/1.svg",
                            className: " scale-x-[-1] scale-y-[-1] ",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        l = s(7544),
        c = s.n(l);
      let o = (e) => {
        let { delay: t, children: s } = e,
          [i, r] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            let e = setTimeout(() => {
              r(!0);
            }, 700 * t);
            return () => clearTimeout(e);
          }, [t]),
          (0, n.jsx)("div", {
            className: "transition-opacity duration-1000 ease-in ".concat(
              i ? "opacity-100" : "opacity-0"
            ),
            children: s,
          })
        );
      };
      var d = () =>
          (0, n.jsx)("div", {
            className:
              "translate-x-12 flex lg:hidden absolute w-full h-full   items-center justify-center   inset-0 z-20 uppercase font-sourceCode scale-90 bottom-10",
            children: (0, n.jsxs)("div", {
              className: "flex  flex-col gap-6 text-xs text-right",
              children: [
                (0, n.jsx)(o, {
                  delay: 1,
                  children: (0, n.jsxs)("div", {
                    className: " w-[280px] h-[120px]",
                    children: [
                      (0, n.jsx)("div", {
                        className: "w-56 py-3 ml-auto",
                        children:
                          "AI computation & training data medium of exchange",
                      }),
                      (0, n.jsx)("img", {
                        src: "/images/markers/4.svg",
                        className: "scale-y-[-1] w-full",
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)(o, {
                  delay: 2,
                  children: (0, n.jsxs)("div", {
                    className: "-translate-y-[55px] w-[280px] h-[42px]",
                    children: [
                      (0, n.jsx)("div", {
                        className: "w-56 py-3 ml-auto",
                        children:
                          "Usage fees for end-user products like ZkTerminal",
                      }),
                      (0, n.jsx)("img", {
                        src: "/images/markers/3.svg",
                        className: "scale-y-[-1] w-full",
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)(o, {
                  delay: 3,
                  children: (0, n.jsxs)("div", {
                    className: "-translate-y-6 w-[280px] h-[42px]",
                    children: [
                      (0, n.jsx)("div", {
                        className: "w-56  ml-auto",
                        children: "Community Governance ",
                      }),
                      (0, n.jsx)("img", {
                        src: "/images/markers/2.svg",
                        className: "scale-x-[-1] w-full ",
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)(o, {
                  delay: 4,
                  children: (0, n.jsxs)("div", {
                    className: " w-[280px] ",
                    children: [
                      (0, n.jsx)("div", {
                        className: "w-56 ml-auto pb-1",
                        children: "Ecosystem Grants ",
                      }),
                      (0, n.jsx)("img", {
                        src: "/images/markers/2.svg",
                        className: "scale-x-[-1] w-full",
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)(o, {
                  delay: 5,
                  children: (0, n.jsxs)("div", {
                    className: " w-[280px] h-[120px] -translate-y-10",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "w-56 py-3 ml-auto translate-y-8",
                        children: [
                          "Economic Penalties for Data Poisoning/Malicious behaviour",
                          " ",
                        ],
                      }),
                      (0, n.jsx)("img", {
                        src: "/images/markers/2.svg",
                        className: "scale-x-[-1]  scale-y-[-1] w-full",
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)(o, {
                  delay: 6,
                  children: (0, n.jsxs)("div", {
                    className: "-translate-y-[55px] w-[280px] h-[42px]",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "w-56 py-3 ml-auto translate-y-9",
                        children: ["Usage Credits for ZkAGI API\xa0", " "],
                      }),
                      (0, n.jsx)("img", {
                        src: "/images/markers/2.svg",
                        className: "scale-x-[-1] scale-y-[-1]  w-full",
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)(o, {
                  delay: 7,
                  children: (0, n.jsxs)("div", {
                    className: "-translate-y-12 w-[280px] h-[36px]",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "w-56  ml-auto translate-y-14",
                        children: [
                          "Usage Fees for High Performance Compute Consumers",
                          " ",
                        ],
                      }),
                      (0, n.jsx)("img", {
                        src: "/images/markers/3.svg",
                        className: " w-full ",
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)(o, {
                  delay: 8,
                  children: (0, n.jsxs)("div", {
                    className: "-translate-y-16 w-[280px] ",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "w-56 ml-auto translate-y-[100px]",
                        children: ["Reward AI trainers and Retrainers", " "],
                      }),
                      (0, n.jsx)("img", {
                        src: "/images/markers/4.svg",
                        className: " w-full",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        u = s(3473),
        f = () => {
          let [e, t] = (0, a.useState)(!1),
            s = (0, a.useRef)(null),
            { ref: i, inView: o } = (0, u.YD)({
              triggerOnce: !0,
              threshold: 0.5,
            });
          return (
            (0, a.useEffect)(() => {
              s.current.play();
            }, []),
            (0, n.jsxs)("div", {
              ref: i,
              className: "h-[1600px] w-full relative ",
              children: [
                (0, n.jsx)(r, {}),
                (0, n.jsx)(d, {}),
                (0, n.jsxs)("div", {
                  className:
                    " overflow-hidden inset-0 z-10 flex flex-col w-screen h-[1600px] items-center justify-center",
                  children: [
                    (0, n.jsx)("div", {
                      className: " hidden lg:flex  absolute inset-0 z-0 ",
                      children: (0, n.jsx)("video", {
                        ref: s,
                        id: "video-bg",
                        style: {
                          width: "100%",
                          height: "100%",
                          top: "0",
                          left: "0",
                          objectFit: "cover",
                        },
                        muted: !0,
                        controls: !1,
                        children: (0, n.jsx)("source", {
                          src: "/videos/coin.webm",
                          type: "video/webm",
                        }),
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "w-[800px] sm:w-[1200px] lg:w-full scale-[1.3]   z-10 h-[150vh] -translate-x-40  lg:scale-[1] lg:-translate-x-0",
                      children: (0, n.jsx)(c(), {
                        src: "/rive/coin.riv",
                        stateMachines: "State Machine 1",
                        layout: new l.Layout({ fit: l.Fit.Cover }),
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className:
                    "py-10 lg:py-20 w-full  lg:max-w-7xl  md:max-w-3xl     mx-auto absolute top-0 inset-x-0 z-20 flex  flex-col justify-between items-center  ",
                  children: (0, n.jsxs)("div", {
                    className:
                      "  w-full  h-full font-light flex flex-col items-center lg:items-start px-5 gap-5 lg:flex-row  lg:justify-between",
                    children: [
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-col items-center lg:items-start gap-5  min-w-max",
                        children: [
                          (0, n.jsx)("div", {
                            className:
                              "font-sourceCode text-zkNeonGreen border border-zkNeonGreen px-3 py-1 rounded-full text-sm max-w-fit",
                            children: "TOKEN",
                          }),
                          (0, n.jsxs)("div", {
                            className:
                              "flex flex-col items-center lg:items-start",
                            children: [
                              (0, n.jsx)("div", {
                                className: "text-2xl lg:text-4xl ",
                                children: "The power of",
                              }),
                              (0, n.jsx)("div", {
                                className: " text-3xl lg:text-6xl",
                                children: "$ZkAGI",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          " flex flex-col items-center lg:items-start justify-between gap-3 text-sm max-w-xl",
                        children: [
                          (0, n.jsx)("div", {
                            className:
                              "font-sourceCode text-center lg:text-start",
                            children:
                              "$ZKAGI is a utility token for Human-2-machine, Machine-2-Machine and Machine-2-Human payments of AI computations & training on the verifiable & decentralized network.",
                          }),
                          (0, n.jsx)("div", { className: "pt-3 " }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)("div", {
                  className:
                    " w-full  lg:max-w-7xl md:max-w-3xl     mx-auto absolute bottom-20 inset-x-0 z-20 flex  flex-col justify-between items-center  ",
                  children: (0, n.jsxs)("div", {
                    className:
                      "relative  max-w-lg lg:max-w-4xl text-lg text-center lg:text-3xl px-5 md:px-0 font-light",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "-inset-0.5 bg-animated-bg absolute blur-xl animate opacity-10",
                      }),
                      "The highly-tuned and robust infra leverages cutting-edge tech like decentralised P2P GPU hosting and Federated learning encapsulated with zero-knowledge proofs to tap into various transformers at blazing hot speeds.",
                    ],
                  }),
                }),
              ],
            })
          );
        };
    },
    3473: function (e, t, s) {
      "use strict";
      s.d(t, {
        YD: function () {
          return o;
        },
      });
      var n = s(2265),
        a = Object.defineProperty,
        i = new Map(),
        r = new WeakMap(),
        l = 0,
        c = void 0;
      function o() {
        var e;
        let {
            threshold: t,
            delay: s,
            trackVisibility: a,
            rootMargin: o,
            root: d,
            triggerOnce: u,
            skip: f,
            initialInView: h,
            fallbackInView: m,
            onChange: v,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {},
          [x, g] = n.useState(null),
          p = n.useRef(),
          [w, y] = n.useState({ inView: !!h, entry: void 0 });
        (p.current = v),
          n.useEffect(() => {
            let e;
            if (!f && x)
              return (
                (e = (function (e, t) {
                  let s =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    n =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : c;
                  if (void 0 === window.IntersectionObserver && void 0 !== n) {
                    let a = e.getBoundingClientRect();
                    return (
                      t(n, {
                        isIntersecting: n,
                        target: e,
                        intersectionRatio:
                          "number" == typeof s.threshold ? s.threshold : 0,
                        time: 0,
                        boundingClientRect: a,
                        intersectionRect: a,
                        rootBounds: a,
                      }),
                      () => {}
                    );
                  }
                  let {
                      id: a,
                      observer: o,
                      elements: d,
                    } = (function (e) {
                      let t = Object.keys(e)
                          .sort()
                          .filter((t) => void 0 !== e[t])
                          .map((t) => {
                            var s;
                            return ""
                              .concat(t, "_")
                              .concat(
                                "root" === t
                                  ? (s = e.root)
                                    ? (r.has(s) ||
                                        ((l += 1), r.set(s, l.toString())),
                                      r.get(s))
                                    : "0"
                                  : e[t]
                              );
                          })
                          .toString(),
                        s = i.get(t);
                      if (!s) {
                        let n;
                        let a = new Map(),
                          r = new IntersectionObserver((t) => {
                            t.forEach((t) => {
                              var s;
                              let i =
                                t.isIntersecting &&
                                n.some((e) => t.intersectionRatio >= e);
                              e.trackVisibility &&
                                void 0 === t.isVisible &&
                                (t.isVisible = i),
                                null == (s = a.get(t.target)) ||
                                  s.forEach((e) => {
                                    e(i, t);
                                  });
                            });
                          }, e);
                        (n =
                          r.thresholds ||
                          (Array.isArray(e.threshold)
                            ? e.threshold
                            : [e.threshold || 0])),
                          (s = { id: t, observer: r, elements: a }),
                          i.set(t, s);
                      }
                      return s;
                    })(s),
                    u = d.get(e) || [];
                  return (
                    d.has(e) || d.set(e, u),
                    u.push(t),
                    o.observe(e),
                    function () {
                      u.splice(u.indexOf(t), 1),
                        0 === u.length && (d.delete(e), o.unobserve(e)),
                        0 === d.size && (o.disconnect(), i.delete(a));
                    }
                  );
                })(
                  x,
                  (t, s) => {
                    y({ inView: t, entry: s }),
                      p.current && p.current(t, s),
                      s.isIntersecting && u && e && (e(), (e = void 0));
                  },
                  {
                    root: d,
                    rootMargin: o,
                    threshold: t,
                    trackVisibility: a,
                    delay: s,
                  },
                  m
                )),
                () => {
                  e && e();
                }
              );
          }, [Array.isArray(t) ? t.toString() : t, x, d, o, u, f, a, m, s]);
        let j = null == (e = w.entry) ? void 0 : e.target,
          b = n.useRef();
        x ||
          !j ||
          u ||
          f ||
          b.current === j ||
          ((b.current = j), y({ inView: !!h, entry: void 0 }));
        let N = [g, w.inView, w.entry];
        return (N.ref = N[0]), (N.inView = N[1]), (N.entry = N[2]), N;
      }
      n.Component;
    },
  },
]);
