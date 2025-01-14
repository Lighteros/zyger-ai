(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [41],
  {
    7544: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(2265),
        o = r(7715),
        i = n && "object" == typeof n && "default" in n ? n : { default: n },
        a = function () {
          return (a =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      function s(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            0 > t.indexOf(n) &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
            0 > t.indexOf(n[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
              (r[n[o]] = e[n[o]]);
        }
        return r;
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
        p = void 0 !== globalThis.ResizeObserver,
        f = !p,
        d = {
          useDevicePixelRatio: !0,
          fitCanvasToArtboardHeight: !1,
          useOffscreenRenderer: !0,
          shouldResizeCanvasToContainer: !0,
        };
      function v(e) {
        return Object.assign({}, d, e);
      }
      function h(e) {
        var t,
          r,
          o,
          i,
          a,
          s,
          u,
          d,
          h,
          y,
          m,
          b = e.riveLoaded,
          g = void 0 !== b && b,
          x = e.canvasRef,
          w = e.containerRef,
          _ = e.options,
          j = e.onCanvasHasResized,
          E = e.artboardBounds,
          O = v(void 0 === _ ? {} : _),
          T = n.useState({ height: 0, width: 0 }),
          S = T[0],
          N = S.height,
          A = S.width,
          P = T[1],
          k = n.useState({ height: 0, width: 0 }),
          C = k[0],
          R = C.height,
          L = C.width,
          z = k[1],
          D = n.useState(!0),
          M = D[0],
          I = D[1],
          F = O.fitCanvasToArtboardHeight,
          H = O.shouldResizeCanvasToContainer,
          U = O.useDevicePixelRatio,
          Q = O.customDevicePixelRatio,
          W =
            (void 0 === (t = H) && (t = !0),
            (o = (r = n.useState({ width: 0, height: 0 }))[0]),
            (i = r[1]),
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
            (u = n.useRef(
              new l(
                ((a = function (e) {
                  p &&
                    i({
                      width: e[e.length - 1].contentRect.width,
                      height: e[e.length - 1].contentRect.height,
                    });
                }),
                (s = 0),
                function () {
                  for (var e = this, t = [], r = 0; r < arguments.length; r++)
                    t[r] = arguments[r];
                  clearTimeout(s),
                    (s = window.setTimeout(function () {
                      return a.apply(e, t);
                    }, 0));
                })
              )
            )),
            n.useEffect(
              function () {
                var e = u.current;
                if (t) {
                  var r = w.current;
                  return (
                    w.current && p && e.observe(w.current),
                    function () {
                      e.disconnect(), r && p && e.unobserve(r);
                    }
                  );
                }
                e.disconnect();
              },
              [w, u]
            ),
            o),
          B =
            ((d = Q || c()),
            (y = (h = n.useState(d))[0]),
            (m = h[1]),
            n.useEffect(
              function () {
                if ("undefined" != typeof window && "matchMedia" in window) {
                  var e = function () {
                      m(Q || c());
                    },
                    t = window.matchMedia(
                      "screen and (resolution: ".concat(y, "dppx)")
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
              [y, Q]
            ),
            y),
          G = null != E ? E : {},
          V = G.maxX,
          Z = G.maxY,
          Y = n.useCallback(
            function () {
              var e,
                t,
                r,
                n,
                o =
                  null !==
                    (t =
                      null === (e = w.current) || void 0 === e
                        ? void 0
                        : e.clientWidth) && void 0 !== t
                    ? t
                    : 0,
                i =
                  null !==
                    (n =
                      null === (r = w.current) || void 0 === r
                        ? void 0
                        : r.clientHeight) && void 0 !== n
                    ? n
                    : 0;
              return F && E
                ? { width: o, height: (E.maxY / E.maxX) * o }
                : { width: o, height: i };
            },
            [w, F, V, Z]
          );
        n.useEffect(
          function () {
            if (H && w.current && g) {
              var e = Y(),
                t = e.width,
                r = e.height,
                n = !1;
              if (x.current) {
                var o = t !== A || r !== N;
                if (
                  (O.fitCanvasToArtboardHeight &&
                    o &&
                    ((w.current.style.height = r + "px"), (n = !0)),
                  O.useDevicePixelRatio)
                ) {
                  if (o || t * B !== L || r * B !== R) {
                    var i = B * t,
                      a = B * r;
                    (x.current.width = i),
                      (x.current.height = a),
                      (x.current.style.width = t + "px"),
                      (x.current.style.height = r + "px"),
                      z({ width: i, height: a }),
                      (n = !0);
                  }
                } else
                  o &&
                    ((x.current.width = t),
                    (x.current.height = r),
                    z({ width: t, height: r }),
                    (n = !0));
                P({ width: t, height: r });
              }
              j && (M || n) && j && j(), M && I(!1);
            }
          },
          [x, w, W, B, Y, M, I, R, L, N, A, j, H, F, U, g]
        );
      }
      function y(e) {
        var t = e.setContainerRef,
          r = e.setCanvasRef,
          n = e.className,
          o = void 0 === n ? "" : n,
          c = e.style,
          u = e.children,
          l = s(e, [
            "setContainerRef",
            "setCanvasRef",
            "className",
            "style",
            "children",
          ]),
          p = a({ width: "100%", height: "100%" }, c);
        return i.default.createElement(
          "div",
          a({ ref: t, className: o }, !o && { style: p }),
          i.default.createElement(
            "canvas",
            a(
              { ref: r, style: { verticalAlign: "top", width: 0, height: 0 } },
              l
            ),
            u
          )
        );
      }
      function m(e, t) {
        void 0 === t && (t = {});
        var r = n.useRef(null),
          s = n.useRef(null),
          c = n.useState(null),
          u = c[0],
          l = c[1],
          p = !!e,
          f = v(t),
          d = n.useCallback(
            function () {
              u && (u.startRendering(), u.resizeToCanvas());
            },
            [u]
          );
        h({
          riveLoaded: !!u,
          canvasRef: r,
          containerRef: s,
          options: f,
          onCanvasHasResized: d,
          artboardBounds: null == u ? void 0 : u.bounds,
        });
        var m = n.useCallback(
            function (t) {
              if (t && e && p) {
                var n = f.useOffscreenRenderer,
                  i = new o.Rive(
                    a(a({ useOffscreenRenderer: n }, e), { canvas: t })
                  );
                i.on(o.EventType.Load, function () {
                  r.current ? l(i) : i.cleanup();
                });
              } else
                null === t &&
                  r.current &&
                  ((r.current.height = 0), (r.current.width = 0));
              r.current = t;
            },
            [p]
          ),
          b = n.useCallback(function (e) {
            s.current = e;
          }, []);
        n.useEffect(
          function () {
            var e = new IntersectionObserver(function (e) {
              e[0].isIntersecting
                ? u && u.startRendering()
                : u && u.stopRendering();
            });
            return (
              r.current && e.observe(r.current),
              function () {
                e.disconnect();
              }
            );
          },
          [u]
        ),
          n.useEffect(
            function () {
              return function () {
                u && (u.cleanup(), l(null));
              };
            },
            [u]
          );
        var g = null == e ? void 0 : e.animations;
        n.useEffect(
          function () {
            u &&
              g &&
              (u.isPlaying
                ? (u.stop(u.animationNames), u.play(g))
                : u.isPaused && (u.stop(u.animationNames), u.pause(g)));
          },
          [g, u]
        );
        var x = n.useCallback(
          function (e) {
            return i.default.createElement(
              y,
              a({ setContainerRef: b, setCanvasRef: m }, e)
            );
          },
          [m, b]
        );
        return {
          canvas: r.current,
          container: s.current,
          setCanvasRef: m,
          setContainerRef: b,
          rive: u,
          RiveComponent: x,
        };
      }
      (t.default = function (e) {
        var t = e.src,
          r = e.artboard,
          n = e.animations,
          o = e.stateMachines,
          c = e.layout,
          u = e.useOffscreenRenderer,
          l = e.shouldDisableRiveListeners,
          p = e.shouldResizeCanvasToContainer,
          f = e.automaticallyHandleEvents,
          d = e.children,
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
          h = m(
            {
              src: t,
              artboard: r,
              animations: n,
              layout: c,
              stateMachines: o,
              autoplay: !0,
              shouldDisableRiveListeners: void 0 !== l && l,
              automaticallyHandleEvents: void 0 !== f && f,
            },
            {
              useOffscreenRenderer: void 0 === u || u,
              shouldResizeCanvasToContainer: void 0 === p || p,
            }
          ).RiveComponent;
        return i.default.createElement(h, a({}, v), d);
      }),
        (t.useResizeCanvas = h),
        (t.useRive = m),
        (t.useStateMachineInput = function (e, t, r, i) {
          var a = n.useState(null),
            s = a[0],
            c = a[1];
          return (
            n.useEffect(
              function () {
                function n() {
                  if (((e && t && r) || c(null), e && t && r)) {
                    var n = e.stateMachineInputs(t);
                    if (n) {
                      var o = n.find(function (e) {
                        return e.name === r;
                      });
                      void 0 !== i && o && (o.value = i), c(o || null);
                    }
                  } else c(null);
                }
                n(),
                  e &&
                    e.on(o.EventType.Play, function () {
                      n();
                    });
              },
              [e]
            ),
            s
          );
        }),
        Object.keys(o).forEach(function (e) {
          "default" === e ||
            t.hasOwnProperty(e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return o[e];
              },
            });
        });
    },
    357: function (e, t, r) {
      "use strict";
      var n, o;
      e.exports =
        (null == (n = r.g.process) ? void 0 : n.env) &&
        "object" == typeof (null == (o = r.g.process) ? void 0 : o.env)
          ? r.g.process
          : r(8081);
    },
    8081: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                r,
                n,
                o = (e.exports = {});
              function i() {
                throw Error("setTimeout has not been defined");
              }
              function a() {
                throw Error("clearTimeout has not been defined");
              }
              function s(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === i || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (r) {
                  try {
                    return t.call(null, e, 0);
                  } catch (r) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = "function" == typeof setTimeout ? setTimeout : i;
                } catch (e) {
                  t = i;
                }
                try {
                  r = "function" == typeof clearTimeout ? clearTimeout : a;
                } catch (e) {
                  r = a;
                }
              })();
              var c = [],
                u = !1,
                l = -1;
              function p() {
                u &&
                  n &&
                  ((u = !1),
                  n.length ? (c = n.concat(c)) : (l = -1),
                  c.length && f());
              }
              function f() {
                if (!u) {
                  var e = s(p);
                  u = !0;
                  for (var t = c.length; t; ) {
                    for (n = c, c = []; ++l < t; ) n && n[l].run();
                    (l = -1), (t = c.length);
                  }
                  (n = null),
                    (u = !1),
                    (function (e) {
                      if (r === clearTimeout) return clearTimeout(e);
                      if ((r === a || !r) && clearTimeout)
                        return (r = clearTimeout), clearTimeout(e);
                      try {
                        r(e);
                      } catch (t) {
                        try {
                          return r.call(null, e);
                        } catch (t) {
                          return r.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function d(e, t) {
                (this.fun = e), (this.array = t);
              }
              function v() {}
              (o.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
                c.push(new d(e, t)), 1 !== c.length || u || s(f);
              }),
                (d.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (o.title = "browser"),
                (o.browser = !0),
                (o.env = {}),
                (o.argv = []),
                (o.version = ""),
                (o.versions = {}),
                (o.on = v),
                (o.addListener = v),
                (o.once = v),
                (o.off = v),
                (o.removeListener = v),
                (o.removeAllListeners = v),
                (o.emit = v),
                (o.prependListener = v),
                (o.prependOnceListener = v),
                (o.listeners = function (e) {
                  return [];
                }),
                (o.binding = function (e) {
                  throw Error("process.binding is not supported");
                }),
                (o.cwd = function () {
                  return "/";
                }),
                (o.chdir = function (e) {
                  throw Error("process.chdir is not supported");
                }),
                (o.umask = function () {
                  return 0;
                });
            },
          },
          r = {};
        function n(e) {
          var o = r[e];
          if (void 0 !== o) return o.exports;
          var i = (r[e] = { exports: {} }),
            a = !0;
          try {
            t[e](i, i.exports, n), (a = !1);
          } finally {
            a && delete r[e];
          }
          return i.exports;
        }
        n.ab = "//";
        var o = n(229);
        e.exports = o;
      })();
    },
    4365: function (e, t, r) {
      var n,
        o = r(357);
      "undefined" != typeof self && self,
        (n = (e) =>
          (() => {
            var t = {
                7403: (e, t, r) => {
                  "use strict";
                  r.d(t, { default: () => T });
                  var n = r(4087),
                    o = r.n(n);
                  let i = function (e) {
                      return new RegExp(/<[a-z][\s\S]*>/i).test(e);
                    },
                    a = function (e, t) {
                      return Math.floor(Math.random() * (t - e + 1)) + e;
                    };
                  var s = "TYPE_CHARACTER",
                    c = "REMOVE_CHARACTER",
                    u = "REMOVE_ALL",
                    l = "REMOVE_LAST_VISIBLE_NODE",
                    p = "PAUSE_FOR",
                    f = "CALL_FUNCTION",
                    d = "ADD_HTML_TAG_ELEMENT",
                    v = "CHANGE_DELETE_SPEED",
                    h = "CHANGE_DELAY",
                    y = "CHANGE_CURSOR",
                    m = "PASTE_STRING",
                    b = "HTML_TAG";
                  function g(e) {
                    return (g =
                      "function" == typeof Symbol &&
                      "symbol" == typeof Symbol.iterator
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              "function" == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                          })(e);
                  }
                  function x(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      t &&
                        (n = n.filter(function (t) {
                          return Object.getOwnPropertyDescriptor(
                            e,
                            t
                          ).enumerable;
                        })),
                        r.push.apply(r, n);
                    }
                    return r;
                  }
                  function w(e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? x(Object(r), !0).forEach(function (t) {
                            E(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(r)
                          )
                        : x(Object(r)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t)
                            );
                          });
                    }
                    return e;
                  }
                  function _(e) {
                    return (
                      (function (e) {
                        if (Array.isArray(e)) return j(e);
                      })(e) ||
                      (function (e) {
                        if (
                          ("undefined" != typeof Symbol &&
                            null != e[Symbol.iterator]) ||
                          null != e["@@iterator"]
                        )
                          return Array.from(e);
                      })(e) ||
                      (function (e, t) {
                        if (e) {
                          if ("string" == typeof e) return j(e, void 0);
                          var r = Object.prototype.toString
                            .call(e)
                            .slice(8, -1);
                          return (
                            "Object" === r &&
                              e.constructor &&
                              (r = e.constructor.name),
                            "Map" === r || "Set" === r
                              ? Array.from(e)
                              : "Arguments" === r ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                  r
                                )
                              ? j(e, void 0)
                              : void 0
                          );
                        }
                      })(e) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })()
                    );
                  }
                  function j(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                    return n;
                  }
                  function E(e, t, r) {
                    return (
                      (t = O(t)) in e
                        ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (e[t] = r),
                      e
                    );
                  }
                  function O(e) {
                    var t = (function (e, t) {
                      if ("object" !== g(e) || null === e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, "string");
                        if ("object" !== g(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return String(e);
                    })(e);
                    return "symbol" === g(t) ? t : String(t);
                  }
                  let T = (function () {
                    var e;
                    function t(e, r) {
                      var g = this;
                      if (
                        ((function (e, t) {
                          if (!(e instanceof t))
                            throw TypeError(
                              "Cannot call a class as a function"
                            );
                        })(this, t),
                        E(this, "state", {
                          cursorAnimation: null,
                          lastFrameTime: null,
                          pauseUntil: null,
                          eventQueue: [],
                          eventLoop: null,
                          eventLoopPaused: !1,
                          reverseCalledEvents: [],
                          calledEvents: [],
                          visibleNodes: [],
                          initialOptions: null,
                          elements: {
                            container: null,
                            wrapper: document.createElement("span"),
                            cursor: document.createElement("span"),
                          },
                        }),
                        E(this, "options", {
                          strings: null,
                          cursor: "|",
                          delay: "natural",
                          pauseFor: 1500,
                          deleteSpeed: "natural",
                          loop: !1,
                          autoStart: !1,
                          devMode: !1,
                          skipAddStyles: !1,
                          wrapperClassName: "Typewriter__wrapper",
                          cursorClassName: "Typewriter__cursor",
                          stringSplitter: null,
                          onCreateTextNode: null,
                          onRemoveNode: null,
                        }),
                        E(this, "setupWrapperElement", function () {
                          g.state.elements.container &&
                            ((g.state.elements.wrapper.className =
                              g.options.wrapperClassName),
                            (g.state.elements.cursor.className =
                              g.options.cursorClassName),
                            (g.state.elements.cursor.innerHTML =
                              g.options.cursor),
                            (g.state.elements.container.innerHTML = ""),
                            g.state.elements.container.appendChild(
                              g.state.elements.wrapper
                            ),
                            g.state.elements.container.appendChild(
                              g.state.elements.cursor
                            ));
                        }),
                        E(this, "start", function () {
                          return (
                            (g.state.eventLoopPaused = !1), g.runEventLoop(), g
                          );
                        }),
                        E(this, "pause", function () {
                          return (g.state.eventLoopPaused = !0), g;
                        }),
                        E(this, "stop", function () {
                          return (
                            g.state.eventLoop &&
                              ((0, n.cancel)(g.state.eventLoop),
                              (g.state.eventLoop = null)),
                            g
                          );
                        }),
                        E(this, "pauseFor", function (e) {
                          return g.addEventToQueue(p, { ms: e }), g;
                        }),
                        E(this, "typeOutAllStrings", function () {
                          return (
                            "string" == typeof g.options.strings
                              ? g
                                  .typeString(g.options.strings)
                                  .pauseFor(g.options.pauseFor)
                              : g.options.strings.forEach(function (e) {
                                  g.typeString(e)
                                    .pauseFor(g.options.pauseFor)
                                    .deleteAll(g.options.deleteSpeed);
                                }),
                            g
                          );
                        }),
                        E(this, "typeString", function (e) {
                          var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : null;
                          if (i(e)) return g.typeOutHTMLString(e, t);
                          if (e) {
                            var r = (g.options || {}).stringSplitter,
                              n = "function" == typeof r ? r(e) : e.split("");
                            g.typeCharacters(n, t);
                          }
                          return g;
                        }),
                        E(this, "pasteString", function (e) {
                          var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : null;
                          return i(e)
                            ? g.typeOutHTMLString(e, t, !0)
                            : (e &&
                                g.addEventToQueue(m, { character: e, node: t }),
                              g);
                        }),
                        E(this, "typeOutHTMLString", function (e) {
                          var t,
                            r =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : null,
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            o =
                              (((t = document.createElement("div")).innerHTML =
                                e),
                              t.childNodes);
                          if (o.length > 0)
                            for (var i = 0; i < o.length; i++) {
                              var a = o[i],
                                s = a.innerHTML;
                              a && 3 !== a.nodeType
                                ? ((a.innerHTML = ""),
                                  g.addEventToQueue(d, {
                                    node: a,
                                    parentNode: r,
                                  }),
                                  n ? g.pasteString(s, a) : g.typeString(s, a))
                                : a.textContent &&
                                  (n
                                    ? g.pasteString(a.textContent, r)
                                    : g.typeString(a.textContent, r));
                            }
                          return g;
                        }),
                        E(this, "deleteAll", function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : "natural";
                          return g.addEventToQueue(u, { speed: e }), g;
                        }),
                        E(this, "changeDeleteSpeed", function (e) {
                          if (!e) throw Error("Must provide new delete speed");
                          return g.addEventToQueue(v, { speed: e }), g;
                        }),
                        E(this, "changeDelay", function (e) {
                          if (!e) throw Error("Must provide new delay");
                          return g.addEventToQueue(h, { delay: e }), g;
                        }),
                        E(this, "changeCursor", function (e) {
                          if (!e) throw Error("Must provide new cursor");
                          return g.addEventToQueue(y, { cursor: e }), g;
                        }),
                        E(this, "deleteChars", function (e) {
                          if (!e)
                            throw Error(
                              "Must provide amount of characters to delete"
                            );
                          for (var t = 0; t < e; t++) g.addEventToQueue(c);
                          return g;
                        }),
                        E(this, "callFunction", function (e, t) {
                          if (!e || "function" != typeof e)
                            throw Error("Callback must be a function");
                          return g.addEventToQueue(f, { cb: e, thisArg: t }), g;
                        }),
                        E(this, "typeCharacters", function (e) {
                          var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : null;
                          if (!e || !Array.isArray(e))
                            throw Error("Characters must be an array");
                          return (
                            e.forEach(function (e) {
                              g.addEventToQueue(s, { character: e, node: t });
                            }),
                            g
                          );
                        }),
                        E(this, "removeCharacters", function (e) {
                          if (!e || !Array.isArray(e))
                            throw Error("Characters must be an array");
                          return (
                            e.forEach(function () {
                              g.addEventToQueue(c);
                            }),
                            g
                          );
                        }),
                        E(this, "addEventToQueue", function (e, t) {
                          var r =
                            arguments.length > 2 &&
                            void 0 !== arguments[2] &&
                            arguments[2];
                          return g.addEventToStateProperty(
                            e,
                            t,
                            r,
                            "eventQueue"
                          );
                        }),
                        E(this, "addReverseCalledEvent", function (e, t) {
                          var r =
                            arguments.length > 2 &&
                            void 0 !== arguments[2] &&
                            arguments[2];
                          return g.options.loop
                            ? g.addEventToStateProperty(
                                e,
                                t,
                                r,
                                "reverseCalledEvents"
                              )
                            : g;
                        }),
                        E(this, "addEventToStateProperty", function (e, t) {
                          var r =
                              arguments.length > 2 &&
                              void 0 !== arguments[2] &&
                              arguments[2],
                            n = arguments.length > 3 ? arguments[3] : void 0,
                            o = { eventName: e, eventArgs: t || {} };
                          return (
                            (g.state[n] = r
                              ? [o].concat(_(g.state[n]))
                              : [].concat(_(g.state[n]), [o])),
                            g
                          );
                        }),
                        E(this, "runEventLoop", function () {
                          g.state.lastFrameTime ||
                            (g.state.lastFrameTime = Date.now());
                          var e = Date.now(),
                            t = e - g.state.lastFrameTime;
                          if (!g.state.eventQueue.length) {
                            if (!g.options.loop) return;
                            (g.state.eventQueue = _(g.state.calledEvents)),
                              (g.state.calledEvents = []),
                              (g.options = w({}, g.state.initialOptions));
                          }
                          if (
                            ((g.state.eventLoop = o()(g.runEventLoop)),
                            !g.state.eventLoopPaused)
                          ) {
                            if (g.state.pauseUntil) {
                              if (e < g.state.pauseUntil) return;
                              g.state.pauseUntil = null;
                            }
                            var r,
                              n = _(g.state.eventQueue),
                              i = n.shift();
                            if (
                              !(
                                t <=
                                (r =
                                  i.eventName === l || i.eventName === c
                                    ? "natural" === g.options.deleteSpeed
                                      ? a(40, 80)
                                      : g.options.deleteSpeed
                                    : "natural" === g.options.delay
                                    ? a(120, 160)
                                    : g.options.delay)
                              )
                            ) {
                              var x = i.eventName,
                                j = i.eventArgs;
                              switch (
                                (g.logInDevMode({
                                  currentEvent: i,
                                  state: g.state,
                                  delay: r,
                                }),
                                x)
                              ) {
                                case m:
                                case s:
                                  var E = j.character,
                                    O = j.node,
                                    T = document.createTextNode(E),
                                    S = T;
                                  g.options.onCreateTextNode &&
                                    "function" ==
                                      typeof g.options.onCreateTextNode &&
                                    (S = g.options.onCreateTextNode(E, T)),
                                    S &&
                                      (O
                                        ? O.appendChild(S)
                                        : g.state.elements.wrapper.appendChild(
                                            S
                                          )),
                                    (g.state.visibleNodes = [].concat(
                                      _(g.state.visibleNodes),
                                      [
                                        {
                                          type: "TEXT_NODE",
                                          character: E,
                                          node: S,
                                        },
                                      ]
                                    ));
                                  break;
                                case c:
                                  n.unshift({
                                    eventName: l,
                                    eventArgs: { removingCharacterNode: !0 },
                                  });
                                  break;
                                case p:
                                  var N = i.eventArgs.ms;
                                  g.state.pauseUntil = Date.now() + parseInt(N);
                                  break;
                                case f:
                                  var A = i.eventArgs,
                                    P = A.cb,
                                    k = A.thisArg;
                                  P.call(k, { elements: g.state.elements });
                                  break;
                                case d:
                                  var C = i.eventArgs,
                                    R = C.node,
                                    L = C.parentNode;
                                  L
                                    ? L.appendChild(R)
                                    : g.state.elements.wrapper.appendChild(R),
                                    (g.state.visibleNodes = [].concat(
                                      _(g.state.visibleNodes),
                                      [
                                        {
                                          type: b,
                                          node: R,
                                          parentNode:
                                            L || g.state.elements.wrapper,
                                        },
                                      ]
                                    ));
                                  break;
                                case u:
                                  var z = g.state.visibleNodes,
                                    D = j.speed,
                                    M = [];
                                  D &&
                                    M.push({
                                      eventName: v,
                                      eventArgs: { speed: D, temp: !0 },
                                    });
                                  for (var I = 0, F = z.length; I < F; I++)
                                    M.push({
                                      eventName: l,
                                      eventArgs: { removingCharacterNode: !1 },
                                    });
                                  D &&
                                    M.push({
                                      eventName: v,
                                      eventArgs: {
                                        speed: g.options.deleteSpeed,
                                        temp: !0,
                                      },
                                    }),
                                    n.unshift.apply(n, M);
                                  break;
                                case l:
                                  var H = i.eventArgs.removingCharacterNode;
                                  if (g.state.visibleNodes.length) {
                                    var U = g.state.visibleNodes.pop(),
                                      Q = U.type,
                                      W = U.node,
                                      B = U.character;
                                    g.options.onRemoveNode &&
                                      "function" ==
                                        typeof g.options.onRemoveNode &&
                                      g.options.onRemoveNode({
                                        node: W,
                                        character: B,
                                      }),
                                      W && W.parentNode.removeChild(W),
                                      Q === b &&
                                        H &&
                                        n.unshift({
                                          eventName: l,
                                          eventArgs: {},
                                        });
                                  }
                                  break;
                                case v:
                                  g.options.deleteSpeed = i.eventArgs.speed;
                                  break;
                                case h:
                                  g.options.delay = i.eventArgs.delay;
                                  break;
                                case y:
                                  (g.options.cursor = i.eventArgs.cursor),
                                    (g.state.elements.cursor.innerHTML =
                                      i.eventArgs.cursor);
                              }
                              g.options.loop &&
                                (i.eventName === l ||
                                  (i.eventArgs && i.eventArgs.temp) ||
                                  (g.state.calledEvents = [].concat(
                                    _(g.state.calledEvents),
                                    [i]
                                  ))),
                                (g.state.eventQueue = n),
                                (g.state.lastFrameTime = e);
                            }
                          }
                        }),
                        e)
                      ) {
                        if ("string" == typeof e) {
                          var x = document.querySelector(e);
                          if (!x)
                            throw Error("Could not find container element");
                          this.state.elements.container = x;
                        } else this.state.elements.container = e;
                      }
                      r && (this.options = w(w({}, this.options), r)),
                        (this.state.initialOptions = w({}, this.options)),
                        this.init();
                    }
                    return (
                      (e = [
                        {
                          key: "init",
                          value: function () {
                            var e, t;
                            this.setupWrapperElement(),
                              this.addEventToQueue(
                                y,
                                { cursor: this.options.cursor },
                                !0
                              ),
                              this.addEventToQueue(u, null, !0),
                              !window ||
                                window.___TYPEWRITER_JS_STYLES_ADDED___ ||
                                this.options.skipAddStyles ||
                                ((e =
                                  ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}"),
                                (t =
                                  document.createElement("style")).appendChild(
                                  document.createTextNode(e)
                                ),
                                document.head.appendChild(t),
                                (window.___TYPEWRITER_JS_STYLES_ADDED___ = !0)),
                              !0 === this.options.autoStart &&
                                this.options.strings &&
                                this.typeOutAllStrings().start();
                          },
                        },
                        {
                          key: "logInDevMode",
                          value: function (e) {
                            this.options.devMode && console.log(e);
                          },
                        },
                      ]),
                      (function (e, t) {
                        for (var r = 0; r < t.length; r++) {
                          var n = t[r];
                          (n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, O(n.key), n);
                        }
                      })(t.prototype, e),
                      Object.defineProperty(t, "prototype", { writable: !1 }),
                      t
                    );
                  })();
                },
                8552: (e, t, r) => {
                  var n = r(852)(r(5639), "DataView");
                  e.exports = n;
                },
                1989: (e, t, r) => {
                  var n = r(1789),
                    o = r(401),
                    i = r(7667),
                    a = r(1327),
                    s = r(1866);
                  function c(e) {
                    var t = -1,
                      r = null == e ? 0 : e.length;
                    for (this.clear(); ++t < r; ) {
                      var n = e[t];
                      this.set(n[0], n[1]);
                    }
                  }
                  (c.prototype.clear = n),
                    (c.prototype.delete = o),
                    (c.prototype.get = i),
                    (c.prototype.has = a),
                    (c.prototype.set = s),
                    (e.exports = c);
                },
                8407: (e, t, r) => {
                  var n = r(7040),
                    o = r(4125),
                    i = r(2117),
                    a = r(7518),
                    s = r(4705);
                  function c(e) {
                    var t = -1,
                      r = null == e ? 0 : e.length;
                    for (this.clear(); ++t < r; ) {
                      var n = e[t];
                      this.set(n[0], n[1]);
                    }
                  }
                  (c.prototype.clear = n),
                    (c.prototype.delete = o),
                    (c.prototype.get = i),
                    (c.prototype.has = a),
                    (c.prototype.set = s),
                    (e.exports = c);
                },
                7071: (e, t, r) => {
                  var n = r(852)(r(5639), "Map");
                  e.exports = n;
                },
                3369: (e, t, r) => {
                  var n = r(4785),
                    o = r(1285),
                    i = r(6e3),
                    a = r(9916),
                    s = r(5265);
                  function c(e) {
                    var t = -1,
                      r = null == e ? 0 : e.length;
                    for (this.clear(); ++t < r; ) {
                      var n = e[t];
                      this.set(n[0], n[1]);
                    }
                  }
                  (c.prototype.clear = n),
                    (c.prototype.delete = o),
                    (c.prototype.get = i),
                    (c.prototype.has = a),
                    (c.prototype.set = s),
                    (e.exports = c);
                },
                3818: (e, t, r) => {
                  var n = r(852)(r(5639), "Promise");
                  e.exports = n;
                },
                8525: (e, t, r) => {
                  var n = r(852)(r(5639), "Set");
                  e.exports = n;
                },
                8668: (e, t, r) => {
                  var n = r(3369),
                    o = r(619),
                    i = r(2385);
                  function a(e) {
                    var t = -1,
                      r = null == e ? 0 : e.length;
                    for (this.__data__ = new n(); ++t < r; ) this.add(e[t]);
                  }
                  (a.prototype.add = a.prototype.push = o),
                    (a.prototype.has = i),
                    (e.exports = a);
                },
                6384: (e, t, r) => {
                  var n = r(8407),
                    o = r(7465),
                    i = r(3779),
                    a = r(7599),
                    s = r(4758),
                    c = r(4309);
                  function u(e) {
                    var t = (this.__data__ = new n(e));
                    this.size = t.size;
                  }
                  (u.prototype.clear = o),
                    (u.prototype.delete = i),
                    (u.prototype.get = a),
                    (u.prototype.has = s),
                    (u.prototype.set = c),
                    (e.exports = u);
                },
                2705: (e, t, r) => {
                  var n = r(5639).Symbol;
                  e.exports = n;
                },
                1149: (e, t, r) => {
                  var n = r(5639).Uint8Array;
                  e.exports = n;
                },
                577: (e, t, r) => {
                  var n = r(852)(r(5639), "WeakMap");
                  e.exports = n;
                },
                4963: (e) => {
                  e.exports = function (e, t) {
                    for (
                      var r = -1, n = null == e ? 0 : e.length, o = 0, i = [];
                      ++r < n;

                    ) {
                      var a = e[r];
                      t(a, r, e) && (i[o++] = a);
                    }
                    return i;
                  };
                },
                4636: (e, t, r) => {
                  var n = r(2545),
                    o = r(5694),
                    i = r(1469),
                    a = r(4144),
                    s = r(5776),
                    c = r(6719),
                    u = Object.prototype.hasOwnProperty;
                  e.exports = function (e, t) {
                    var r = i(e),
                      l = !r && o(e),
                      p = !r && !l && a(e),
                      f = !r && !l && !p && c(e),
                      d = r || l || p || f,
                      v = d ? n(e.length, String) : [],
                      h = v.length;
                    for (var y in e)
                      (!t && !u.call(e, y)) ||
                        (d &&
                          ("length" == y ||
                            (p && ("offset" == y || "parent" == y)) ||
                            (f &&
                              ("buffer" == y ||
                                "byteLength" == y ||
                                "byteOffset" == y)) ||
                            s(y, h))) ||
                        v.push(y);
                    return v;
                  };
                },
                2488: (e) => {
                  e.exports = function (e, t) {
                    for (var r = -1, n = t.length, o = e.length; ++r < n; )
                      e[o + r] = t[r];
                    return e;
                  };
                },
                2908: (e) => {
                  e.exports = function (e, t) {
                    for (var r = -1, n = null == e ? 0 : e.length; ++r < n; )
                      if (t(e[r], r, e)) return !0;
                    return !1;
                  };
                },
                8470: (e, t, r) => {
                  var n = r(7813);
                  e.exports = function (e, t) {
                    for (var r = e.length; r--; ) if (n(e[r][0], t)) return r;
                    return -1;
                  };
                },
                8866: (e, t, r) => {
                  var n = r(2488),
                    o = r(1469);
                  e.exports = function (e, t, r) {
                    var i = t(e);
                    return o(e) ? i : n(i, r(e));
                  };
                },
                4239: (e, t, r) => {
                  var n = r(2705),
                    o = r(9607),
                    i = r(2333),
                    a = n ? n.toStringTag : void 0;
                  e.exports = function (e) {
                    return null == e
                      ? void 0 === e
                        ? "[object Undefined]"
                        : "[object Null]"
                      : a && a in Object(e)
                      ? o(e)
                      : i(e);
                  };
                },
                9454: (e, t, r) => {
                  var n = r(4239),
                    o = r(7005);
                  e.exports = function (e) {
                    return o(e) && "[object Arguments]" == n(e);
                  };
                },
                939: (e, t, r) => {
                  var n = r(2492),
                    o = r(7005);
                  e.exports = function e(t, r, i, a, s) {
                    return (
                      t === r ||
                      (null != t && null != r && (o(t) || o(r))
                        ? n(t, r, i, a, e, s)
                        : t != t && r != r)
                    );
                  };
                },
                2492: (e, t, r) => {
                  var n = r(6384),
                    o = r(7114),
                    i = r(8351),
                    a = r(6096),
                    s = r(4160),
                    c = r(1469),
                    u = r(4144),
                    l = r(6719),
                    p = "[object Arguments]",
                    f = "[object Array]",
                    d = "[object Object]",
                    v = Object.prototype.hasOwnProperty;
                  e.exports = function (e, t, r, h, y, m) {
                    var b = c(e),
                      g = c(t),
                      x = b ? f : s(e),
                      w = g ? f : s(t),
                      _ = (x = x == p ? d : x) == d,
                      j = (w = w == p ? d : w) == d,
                      E = x == w;
                    if (E && u(e)) {
                      if (!u(t)) return !1;
                      (b = !0), (_ = !1);
                    }
                    if (E && !_)
                      return (
                        m || (m = new n()),
                        b || l(e) ? o(e, t, r, h, y, m) : i(e, t, x, r, h, y, m)
                      );
                    if (!(1 & r)) {
                      var O = _ && v.call(e, "__wrapped__"),
                        T = j && v.call(t, "__wrapped__");
                      if (O || T) {
                        var S = O ? e.value() : e,
                          N = T ? t.value() : t;
                        return m || (m = new n()), y(S, N, r, h, m);
                      }
                    }
                    return !!E && (m || (m = new n()), a(e, t, r, h, y, m));
                  };
                },
                8458: (e, t, r) => {
                  var n = r(3560),
                    o = r(5346),
                    i = r(3218),
                    a = r(346),
                    s = /^\[object .+?Constructor\]$/,
                    c = Object.prototype,
                    u = Function.prototype.toString,
                    l = c.hasOwnProperty,
                    p = RegExp(
                      "^" +
                        u
                          .call(l)
                          .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                          .replace(
                            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                            "$1.*?"
                          ) +
                        "$"
                    );
                  e.exports = function (e) {
                    return !(!i(e) || o(e)) && (n(e) ? p : s).test(a(e));
                  };
                },
                8749: (e, t, r) => {
                  var n = r(4239),
                    o = r(1780),
                    i = r(7005),
                    a = {};
                  (a["[object Float32Array]"] =
                    a["[object Float64Array]"] =
                    a["[object Int8Array]"] =
                    a["[object Int16Array]"] =
                    a["[object Int32Array]"] =
                    a["[object Uint8Array]"] =
                    a["[object Uint8ClampedArray]"] =
                    a["[object Uint16Array]"] =
                    a["[object Uint32Array]"] =
                      !0),
                    (a["[object Arguments]"] =
                      a["[object Array]"] =
                      a["[object ArrayBuffer]"] =
                      a["[object Boolean]"] =
                      a["[object DataView]"] =
                      a["[object Date]"] =
                      a["[object Error]"] =
                      a["[object Function]"] =
                      a["[object Map]"] =
                      a["[object Number]"] =
                      a["[object Object]"] =
                      a["[object RegExp]"] =
                      a["[object Set]"] =
                      a["[object String]"] =
                      a["[object WeakMap]"] =
                        !1),
                    (e.exports = function (e) {
                      return i(e) && o(e.length) && !!a[n(e)];
                    });
                },
                280: (e, t, r) => {
                  var n = r(5726),
                    o = r(6916),
                    i = Object.prototype.hasOwnProperty;
                  e.exports = function (e) {
                    if (!n(e)) return o(e);
                    var t = [];
                    for (var r in Object(e))
                      i.call(e, r) && "constructor" != r && t.push(r);
                    return t;
                  };
                },
                2545: (e) => {
                  e.exports = function (e, t) {
                    for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
                    return n;
                  };
                },
                1717: (e) => {
                  e.exports = function (e) {
                    return function (t) {
                      return e(t);
                    };
                  };
                },
                4757: (e) => {
                  e.exports = function (e, t) {
                    return e.has(t);
                  };
                },
                4429: (e, t, r) => {
                  var n = r(5639)["__core-js_shared__"];
                  e.exports = n;
                },
                7114: (e, t, r) => {
                  var n = r(8668),
                    o = r(2908),
                    i = r(4757);
                  e.exports = function (e, t, r, a, s, c) {
                    var u = 1 & r,
                      l = e.length,
                      p = t.length;
                    if (l != p && !(u && p > l)) return !1;
                    var f = c.get(e),
                      d = c.get(t);
                    if (f && d) return f == t && d == e;
                    var v = -1,
                      h = !0,
                      y = 2 & r ? new n() : void 0;
                    for (c.set(e, t), c.set(t, e); ++v < l; ) {
                      var m = e[v],
                        b = t[v];
                      if (a)
                        var g = u ? a(b, m, v, t, e, c) : a(m, b, v, e, t, c);
                      if (void 0 !== g) {
                        if (g) continue;
                        h = !1;
                        break;
                      }
                      if (y) {
                        if (
                          !o(t, function (e, t) {
                            if (!i(y, t) && (m === e || s(m, e, r, a, c)))
                              return y.push(t);
                          })
                        ) {
                          h = !1;
                          break;
                        }
                      } else if (m !== b && !s(m, b, r, a, c)) {
                        h = !1;
                        break;
                      }
                    }
                    return c.delete(e), c.delete(t), h;
                  };
                },
                8351: (e, t, r) => {
                  var n = r(2705),
                    o = r(1149),
                    i = r(7813),
                    a = r(7114),
                    s = r(8776),
                    c = r(1814),
                    u = n ? n.prototype : void 0,
                    l = u ? u.valueOf : void 0;
                  e.exports = function (e, t, r, n, u, p, f) {
                    switch (r) {
                      case "[object DataView]":
                        if (
                          e.byteLength != t.byteLength ||
                          e.byteOffset != t.byteOffset
                        )
                          break;
                        (e = e.buffer), (t = t.buffer);
                      case "[object ArrayBuffer]":
                        return !(
                          e.byteLength != t.byteLength || !p(new o(e), new o(t))
                        );
                      case "[object Boolean]":
                      case "[object Date]":
                      case "[object Number]":
                        return i(+e, +t);
                      case "[object Error]":
                        return e.name == t.name && e.message == t.message;
                      case "[object RegExp]":
                      case "[object String]":
                        return e == t + "";
                      case "[object Map]":
                        var d = s;
                      case "[object Set]":
                        var v = 1 & n;
                        if ((d || (d = c), e.size != t.size && !v)) break;
                        var h = f.get(e);
                        if (h) return h == t;
                        (n |= 2), f.set(e, t);
                        var y = a(d(e), d(t), n, u, p, f);
                        return f.delete(e), y;
                      case "[object Symbol]":
                        if (l) return l.call(e) == l.call(t);
                    }
                    return !1;
                  };
                },
                6096: (e, t, r) => {
                  var n = r(8234),
                    o = Object.prototype.hasOwnProperty;
                  e.exports = function (e, t, r, i, a, s) {
                    var c = 1 & r,
                      u = n(e),
                      l = u.length;
                    if (l != n(t).length && !c) return !1;
                    for (var p = l; p--; ) {
                      var f = u[p];
                      if (!(c ? f in t : o.call(t, f))) return !1;
                    }
                    var d = s.get(e),
                      v = s.get(t);
                    if (d && v) return d == t && v == e;
                    var h = !0;
                    s.set(e, t), s.set(t, e);
                    for (var y = c; ++p < l; ) {
                      var m = e[(f = u[p])],
                        b = t[f];
                      if (i)
                        var g = c ? i(b, m, f, t, e, s) : i(m, b, f, e, t, s);
                      if (!(void 0 === g ? m === b || a(m, b, r, i, s) : g)) {
                        h = !1;
                        break;
                      }
                      y || (y = "constructor" == f);
                    }
                    if (h && !y) {
                      var x = e.constructor,
                        w = t.constructor;
                      x == w ||
                        !("constructor" in e) ||
                        !("constructor" in t) ||
                        ("function" == typeof x &&
                          x instanceof x &&
                          "function" == typeof w &&
                          w instanceof w) ||
                        (h = !1);
                    }
                    return s.delete(e), s.delete(t), h;
                  };
                },
                1957: (e, t, r) => {
                  var n =
                    "object" == typeof r.g &&
                    r.g &&
                    r.g.Object === Object &&
                    r.g;
                  e.exports = n;
                },
                8234: (e, t, r) => {
                  var n = r(8866),
                    o = r(9551),
                    i = r(3674);
                  e.exports = function (e) {
                    return n(e, i, o);
                  };
                },
                5050: (e, t, r) => {
                  var n = r(7019);
                  e.exports = function (e, t) {
                    var r = e.__data__;
                    return n(t)
                      ? r["string" == typeof t ? "string" : "hash"]
                      : r.map;
                  };
                },
                852: (e, t, r) => {
                  var n = r(8458),
                    o = r(7801);
                  e.exports = function (e, t) {
                    var r = o(e, t);
                    return n(r) ? r : void 0;
                  };
                },
                9607: (e, t, r) => {
                  var n = r(2705),
                    o = Object.prototype,
                    i = o.hasOwnProperty,
                    a = o.toString,
                    s = n ? n.toStringTag : void 0;
                  e.exports = function (e) {
                    var t = i.call(e, s),
                      r = e[s];
                    try {
                      e[s] = void 0;
                      var n = !0;
                    } catch (e) {}
                    var o = a.call(e);
                    return n && (t ? (e[s] = r) : delete e[s]), o;
                  };
                },
                9551: (e, t, r) => {
                  var n = r(4963),
                    o = r(479),
                    i = Object.prototype.propertyIsEnumerable,
                    a = Object.getOwnPropertySymbols,
                    s = a
                      ? function (e) {
                          return null == e
                            ? []
                            : n(a((e = Object(e))), function (t) {
                                return i.call(e, t);
                              });
                        }
                      : o;
                  e.exports = s;
                },
                4160: (e, t, r) => {
                  var n = r(8552),
                    o = r(7071),
                    i = r(3818),
                    a = r(8525),
                    s = r(577),
                    c = r(4239),
                    u = r(346),
                    l = "[object Map]",
                    p = "[object Promise]",
                    f = "[object Set]",
                    d = "[object WeakMap]",
                    v = "[object DataView]",
                    h = u(n),
                    y = u(o),
                    m = u(i),
                    b = u(a),
                    g = u(s),
                    x = c;
                  ((n && x(new n(new ArrayBuffer(1))) != v) ||
                    (o && x(new o()) != l) ||
                    (i && x(i.resolve()) != p) ||
                    (a && x(new a()) != f) ||
                    (s && x(new s()) != d)) &&
                    (x = function (e) {
                      var t = c(e),
                        r = "[object Object]" == t ? e.constructor : void 0,
                        n = r ? u(r) : "";
                      if (n)
                        switch (n) {
                          case h:
                            return v;
                          case y:
                            return l;
                          case m:
                            return p;
                          case b:
                            return f;
                          case g:
                            return d;
                        }
                      return t;
                    }),
                    (e.exports = x);
                },
                7801: (e) => {
                  e.exports = function (e, t) {
                    return null == e ? void 0 : e[t];
                  };
                },
                1789: (e, t, r) => {
                  var n = r(4536);
                  e.exports = function () {
                    (this.__data__ = n ? n(null) : {}), (this.size = 0);
                  };
                },
                401: (e) => {
                  e.exports = function (e) {
                    var t = this.has(e) && delete this.__data__[e];
                    return (this.size -= t ? 1 : 0), t;
                  };
                },
                7667: (e, t, r) => {
                  var n = r(4536),
                    o = Object.prototype.hasOwnProperty;
                  e.exports = function (e) {
                    var t = this.__data__;
                    if (n) {
                      var r = t[e];
                      return "__lodash_hash_undefined__" === r ? void 0 : r;
                    }
                    return o.call(t, e) ? t[e] : void 0;
                  };
                },
                1327: (e, t, r) => {
                  var n = r(4536),
                    o = Object.prototype.hasOwnProperty;
                  e.exports = function (e) {
                    var t = this.__data__;
                    return n ? void 0 !== t[e] : o.call(t, e);
                  };
                },
                1866: (e, t, r) => {
                  var n = r(4536);
                  e.exports = function (e, t) {
                    var r = this.__data__;
                    return (
                      (this.size += this.has(e) ? 0 : 1),
                      (r[e] =
                        n && void 0 === t ? "__lodash_hash_undefined__" : t),
                      this
                    );
                  };
                },
                5776: (e) => {
                  var t = /^(?:0|[1-9]\d*)$/;
                  e.exports = function (e, r) {
                    var n = typeof e;
                    return (
                      !!(r = null == r ? 9007199254740991 : r) &&
                      ("number" == n || ("symbol" != n && t.test(e))) &&
                      e > -1 &&
                      e % 1 == 0 &&
                      e < r
                    );
                  };
                },
                7019: (e) => {
                  e.exports = function (e) {
                    var t = typeof e;
                    return "string" == t ||
                      "number" == t ||
                      "symbol" == t ||
                      "boolean" == t
                      ? "__proto__" !== e
                      : null === e;
                  };
                },
                5346: (e, t, r) => {
                  var n,
                    o = r(4429),
                    i = (n = /[^.]+$/.exec(
                      (o && o.keys && o.keys.IE_PROTO) || ""
                    ))
                      ? "Symbol(src)_1." + n
                      : "";
                  e.exports = function (e) {
                    return !!i && i in e;
                  };
                },
                5726: (e) => {
                  var t = Object.prototype;
                  e.exports = function (e) {
                    var r = e && e.constructor;
                    return e === (("function" == typeof r && r.prototype) || t);
                  };
                },
                7040: (e) => {
                  e.exports = function () {
                    (this.__data__ = []), (this.size = 0);
                  };
                },
                4125: (e, t, r) => {
                  var n = r(8470),
                    o = Array.prototype.splice;
                  e.exports = function (e) {
                    var t = this.__data__,
                      r = n(t, e);
                    return !(
                      r < 0 ||
                      (r == t.length - 1 ? t.pop() : o.call(t, r, 1),
                      --this.size,
                      0)
                    );
                  };
                },
                2117: (e, t, r) => {
                  var n = r(8470);
                  e.exports = function (e) {
                    var t = this.__data__,
                      r = n(t, e);
                    return r < 0 ? void 0 : t[r][1];
                  };
                },
                7518: (e, t, r) => {
                  var n = r(8470);
                  e.exports = function (e) {
                    return n(this.__data__, e) > -1;
                  };
                },
                4705: (e, t, r) => {
                  var n = r(8470);
                  e.exports = function (e, t) {
                    var r = this.__data__,
                      o = n(r, e);
                    return (
                      o < 0 ? (++this.size, r.push([e, t])) : (r[o][1] = t),
                      this
                    );
                  };
                },
                4785: (e, t, r) => {
                  var n = r(1989),
                    o = r(8407),
                    i = r(7071);
                  e.exports = function () {
                    (this.size = 0),
                      (this.__data__ = {
                        hash: new n(),
                        map: new (i || o)(),
                        string: new n(),
                      });
                  };
                },
                1285: (e, t, r) => {
                  var n = r(5050);
                  e.exports = function (e) {
                    var t = n(this, e).delete(e);
                    return (this.size -= t ? 1 : 0), t;
                  };
                },
                6e3: (e, t, r) => {
                  var n = r(5050);
                  e.exports = function (e) {
                    return n(this, e).get(e);
                  };
                },
                9916: (e, t, r) => {
                  var n = r(5050);
                  e.exports = function (e) {
                    return n(this, e).has(e);
                  };
                },
                5265: (e, t, r) => {
                  var n = r(5050);
                  e.exports = function (e, t) {
                    var r = n(this, e),
                      o = r.size;
                    return (
                      r.set(e, t), (this.size += r.size == o ? 0 : 1), this
                    );
                  };
                },
                8776: (e) => {
                  e.exports = function (e) {
                    var t = -1,
                      r = Array(e.size);
                    return (
                      e.forEach(function (e, n) {
                        r[++t] = [n, e];
                      }),
                      r
                    );
                  };
                },
                4536: (e, t, r) => {
                  var n = r(852)(Object, "create");
                  e.exports = n;
                },
                6916: (e, t, r) => {
                  var n = r(5569)(Object.keys, Object);
                  e.exports = n;
                },
                1167: (e, t, r) => {
                  e = r.nmd(e);
                  var n = r(1957),
                    o = t && !t.nodeType && t,
                    i = o && e && !e.nodeType && e,
                    a = i && i.exports === o && n.process,
                    s = (function () {
                      try {
                        return (
                          (i && i.require && i.require("util").types) ||
                          (a && a.binding && a.binding("util"))
                        );
                      } catch (e) {}
                    })();
                  e.exports = s;
                },
                2333: (e) => {
                  var t = Object.prototype.toString;
                  e.exports = function (e) {
                    return t.call(e);
                  };
                },
                5569: (e) => {
                  e.exports = function (e, t) {
                    return function (r) {
                      return e(t(r));
                    };
                  };
                },
                5639: (e, t, r) => {
                  var n = r(1957),
                    o =
                      "object" == typeof self &&
                      self &&
                      self.Object === Object &&
                      self,
                    i = n || o || Function("return this")();
                  e.exports = i;
                },
                619: (e) => {
                  e.exports = function (e) {
                    return (
                      this.__data__.set(e, "__lodash_hash_undefined__"), this
                    );
                  };
                },
                2385: (e) => {
                  e.exports = function (e) {
                    return this.__data__.has(e);
                  };
                },
                1814: (e) => {
                  e.exports = function (e) {
                    var t = -1,
                      r = Array(e.size);
                    return (
                      e.forEach(function (e) {
                        r[++t] = e;
                      }),
                      r
                    );
                  };
                },
                7465: (e, t, r) => {
                  var n = r(8407);
                  e.exports = function () {
                    (this.__data__ = new n()), (this.size = 0);
                  };
                },
                3779: (e) => {
                  e.exports = function (e) {
                    var t = this.__data__,
                      r = t.delete(e);
                    return (this.size = t.size), r;
                  };
                },
                7599: (e) => {
                  e.exports = function (e) {
                    return this.__data__.get(e);
                  };
                },
                4758: (e) => {
                  e.exports = function (e) {
                    return this.__data__.has(e);
                  };
                },
                4309: (e, t, r) => {
                  var n = r(8407),
                    o = r(7071),
                    i = r(3369);
                  e.exports = function (e, t) {
                    var r = this.__data__;
                    if (r instanceof n) {
                      var a = r.__data__;
                      if (!o || a.length < 199)
                        return a.push([e, t]), (this.size = ++r.size), this;
                      r = this.__data__ = new i(a);
                    }
                    return r.set(e, t), (this.size = r.size), this;
                  };
                },
                346: (e) => {
                  var t = Function.prototype.toString;
                  e.exports = function (e) {
                    if (null != e) {
                      try {
                        return t.call(e);
                      } catch (e) {}
                      try {
                        return e + "";
                      } catch (e) {}
                    }
                    return "";
                  };
                },
                7813: (e) => {
                  e.exports = function (e, t) {
                    return e === t || (e != e && t != t);
                  };
                },
                5694: (e, t, r) => {
                  var n = r(9454),
                    o = r(7005),
                    i = Object.prototype,
                    a = i.hasOwnProperty,
                    s = i.propertyIsEnumerable,
                    c = n(
                      (function () {
                        return arguments;
                      })()
                    )
                      ? n
                      : function (e) {
                          return (
                            o(e) && a.call(e, "callee") && !s.call(e, "callee")
                          );
                        };
                  e.exports = c;
                },
                1469: (e) => {
                  var t = Array.isArray;
                  e.exports = t;
                },
                8612: (e, t, r) => {
                  var n = r(3560),
                    o = r(1780);
                  e.exports = function (e) {
                    return null != e && o(e.length) && !n(e);
                  };
                },
                4144: (e, t, r) => {
                  e = r.nmd(e);
                  var n = r(5639),
                    o = r(5062),
                    i = t && !t.nodeType && t,
                    a = i && e && !e.nodeType && e,
                    s = a && a.exports === i ? n.Buffer : void 0,
                    c = (s ? s.isBuffer : void 0) || o;
                  e.exports = c;
                },
                8446: (e, t, r) => {
                  var n = r(939);
                  e.exports = function (e, t) {
                    return n(e, t);
                  };
                },
                3560: (e, t, r) => {
                  var n = r(4239),
                    o = r(3218);
                  e.exports = function (e) {
                    if (!o(e)) return !1;
                    var t = n(e);
                    return (
                      "[object Function]" == t ||
                      "[object GeneratorFunction]" == t ||
                      "[object AsyncFunction]" == t ||
                      "[object Proxy]" == t
                    );
                  };
                },
                1780: (e) => {
                  e.exports = function (e) {
                    return (
                      "number" == typeof e &&
                      e > -1 &&
                      e % 1 == 0 &&
                      e <= 9007199254740991
                    );
                  };
                },
                3218: (e) => {
                  e.exports = function (e) {
                    var t = typeof e;
                    return null != e && ("object" == t || "function" == t);
                  };
                },
                7005: (e) => {
                  e.exports = function (e) {
                    return null != e && "object" == typeof e;
                  };
                },
                6719: (e, t, r) => {
                  var n = r(8749),
                    o = r(1717),
                    i = r(1167),
                    a = i && i.isTypedArray,
                    s = a ? o(a) : n;
                  e.exports = s;
                },
                3674: (e, t, r) => {
                  var n = r(4636),
                    o = r(280),
                    i = r(8612);
                  e.exports = function (e) {
                    return i(e) ? n(e) : o(e);
                  };
                },
                479: (e) => {
                  e.exports = function () {
                    return [];
                  };
                },
                5062: (e) => {
                  e.exports = function () {
                    return !1;
                  };
                },
                75: function (e) {
                  (function () {
                    var t, r, n, i;
                    "undefined" != typeof performance &&
                    null !== performance &&
                    performance.now
                      ? (e.exports = function () {
                          return performance.now();
                        })
                      : null != o && o.hrtime
                      ? ((e.exports = function () {
                          return (t() - i) / 1e6;
                        }),
                        (r = o.hrtime),
                        (i =
                          (t = function () {
                            var e;
                            return 1e9 * (e = r())[0] + e[1];
                          })() -
                          1e9 * o.uptime()))
                      : Date.now
                      ? ((e.exports = function () {
                          return Date.now() - n;
                        }),
                        (n = Date.now()))
                      : ((e.exports = function () {
                          return new Date().getTime() - n;
                        }),
                        (n = new Date().getTime()));
                  }.call(this));
                },
                4087: (e, t, r) => {
                  for (
                    var n = r(75),
                      o = "undefined" == typeof window ? r.g : window,
                      i = ["moz", "webkit"],
                      a = "AnimationFrame",
                      s = o["request" + a],
                      c = o["cancel" + a] || o["cancelRequest" + a],
                      u = 0;
                    !s && u < i.length;
                    u++
                  )
                    (s = o[i[u] + "Request" + a]),
                      (c =
                        o[i[u] + "Cancel" + a] ||
                        o[i[u] + "CancelRequest" + a]);
                  if (!s || !c) {
                    var l = 0,
                      p = 0,
                      f = [];
                    (s = function (e) {
                      if (0 === f.length) {
                        var t = n(),
                          r = Math.max(0, 16.666666666666668 - (t - l));
                        (l = r + t),
                          setTimeout(function () {
                            var e = f.slice(0);
                            f.length = 0;
                            for (var t = 0; t < e.length; t++)
                              if (!e[t].cancelled)
                                try {
                                  e[t].callback(l);
                                } catch (e) {
                                  setTimeout(function () {
                                    throw e;
                                  }, 0);
                                }
                          }, Math.round(r));
                      }
                      return (
                        f.push({ handle: ++p, callback: e, cancelled: !1 }), p
                      );
                    }),
                      (c = function (e) {
                        for (var t = 0; t < f.length; t++)
                          f[t].handle === e && (f[t].cancelled = !0);
                      });
                  }
                  (e.exports = function (e) {
                    return s.call(o, e);
                  }),
                    (e.exports.cancel = function () {
                      c.apply(o, arguments);
                    }),
                    (e.exports.polyfill = function (e) {
                      e || (e = o),
                        (e.requestAnimationFrame = s),
                        (e.cancelAnimationFrame = c);
                    });
                },
                8156: (t) => {
                  "use strict";
                  t.exports = e;
                },
              },
              r = {};
            function n(e) {
              var o = r[e];
              if (void 0 !== o) return o.exports;
              var i = (r[e] = { id: e, loaded: !1, exports: {} });
              return (
                t[e].call(i.exports, i, i.exports, n),
                (i.loaded = !0),
                i.exports
              );
            }
            (n.n = (e) => {
              var t = e && e.__esModule ? () => e.default : () => e;
              return n.d(t, { a: t }), t;
            }),
              (n.d = (e, t) => {
                for (var r in t)
                  n.o(t, r) &&
                    !n.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
              }),
              (n.g = (function () {
                if ("object" == typeof globalThis) return globalThis;
                try {
                  return this || Function("return this")();
                } catch (e) {
                  if ("object" == typeof window) return window;
                }
              })()),
              (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
              (n.nmd = (e) => (
                (e.paths = []), e.children || (e.children = []), e
              ));
            var i = {};
            return (
              (() => {
                "use strict";
                n.d(i, { default: () => d });
                var e = n(8156),
                  t = n.n(e),
                  r = n(7403),
                  o = n(8446),
                  a = n.n(o);
                function s(e) {
                  return (s =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e &&
                            "function" == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? "symbol"
                            : typeof e;
                        })(e);
                }
                function c(e, t) {
                  return (c = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (e, t) {
                        return (e.__proto__ = t), e;
                      })(e, t);
                }
                function u(e) {
                  if (void 0 === e)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                }
                function l(e) {
                  return (l = Object.setPrototypeOf
                    ? Object.getPrototypeOf.bind()
                    : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
                }
                function p(e) {
                  var t = (function (e, t) {
                    if ("object" !== s(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, "string");
                      if ("object" !== s(n)) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return String(e);
                  })(e);
                  return "symbol" === s(t) ? t : String(t);
                }
                var f = (function (e) {
                  !(function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw TypeError(
                        "Super expression must either be null or a function"
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(e, "prototype", { writable: !1 }),
                      t && c(e, t);
                  })(f, e);
                  var n,
                    o,
                    i =
                      ((o = (function () {
                        if (
                          "undefined" == typeof Reflect ||
                          !Reflect.construct ||
                          Reflect.construct.sham
                        )
                          return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              Reflect.construct(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (e) {
                          return !1;
                        }
                      })()),
                      function () {
                        var e,
                          t = l(f);
                        return (
                          (e = o
                            ? Reflect.construct(
                                t,
                                arguments,
                                l(this).constructor
                              )
                            : t.apply(this, arguments)),
                          (function (e, t) {
                            if (
                              t &&
                              ("object" === s(t) || "function" == typeof t)
                            )
                              return t;
                            if (void 0 !== t)
                              throw TypeError(
                                "Derived constructors may only return object or undefined"
                              );
                            return u(e);
                          })(this, e)
                        );
                      });
                  function f() {
                    var e, t, r, n;
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw TypeError("Cannot call a class as a function");
                    })(this, f);
                    for (
                      var o = arguments.length, a = Array(o), s = 0;
                      s < o;
                      s++
                    )
                      a[s] = arguments[s];
                    return (
                      (t = u((e = i.call.apply(i, [this].concat(a))))),
                      (n = { instance: null }),
                      (r = p((r = "state"))) in t
                        ? Object.defineProperty(t, r, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (t[r] = n),
                      e
                    );
                  }
                  return (
                    (n = [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this,
                            t = new r.default(
                              this.typewriter,
                              this.props.options
                            );
                          this.setState({ instance: t }, function () {
                            var r = e.props.onInit;
                            r && r(t);
                          });
                        },
                      },
                      {
                        key: "componentDidUpdate",
                        value: function (e) {
                          a()(this.props.options, e.options) ||
                            this.setState({
                              instance: new r.default(
                                this.typewriter,
                                this.props.options
                              ),
                            });
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          this.state.instance && this.state.instance.stop();
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            r = this.props.component;
                          return t().createElement(r, {
                            ref: function (t) {
                              return (e.typewriter = t);
                            },
                            className: "Typewriter",
                            "data-testid": "typewriter-wrapper",
                          });
                        },
                      },
                    ]),
                    (function (e, t) {
                      for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        (n.enumerable = n.enumerable || !1),
                          (n.configurable = !0),
                          "value" in n && (n.writable = !0),
                          Object.defineProperty(e, p(n.key), n);
                      }
                    })(f.prototype, n),
                    Object.defineProperty(f, "prototype", { writable: !1 }),
                    f
                  );
                })(e.Component);
                f.defaultProps = { component: "div" };
                let d = f;
              })(),
              i.default
            );
          })()),
        (e.exports = n(r(2265)));
    },
    4997: function (e, t, r) {
      "use strict";
      var n = r(7437);
      t.Z = (e) => {
        let { children: t, link: r } = e;
        return (0, n.jsx)("a", {
          href: r,
          target: "_blank",
          className: "",
          children: (0, n.jsx)("div", {
            className:
              " transition-all ease-out duration-250 group min-w-32   w-full overflow-hidden border-[1px] border-transparent bg-white   text-white   active:brightness-[85%] S",
            style: {
              clipPath:
                "polygon(0% 0%, calc(100% - 15px) 0%, 100% 15px, 100% 100%, 15px 100%, 0% calc(100% - 15px), 0% 100%, 0% 0%)",
            },
            children: (0, n.jsx)("div", {
              className:
                " transition-all ease-out duration-250   w-full overflow-hidden bg-[#010921]   hover:bg-white  hover:text-black active:bg-white active:text-black group-active:brightness-[85%] ",
              style: {
                clipPath:
                  " polygon(0% 0%, calc(100% - 15px) 0%, 100% 15px, 100% 100%, 15px 100%, 0% calc(100% - 15px), 0% 100%, 0% 0%)",
              },
              children: (0, n.jsx)("div", {
                className:
                  " transition-all ease-out duration-250 px-5 md:px-7 py-2 text-xs lg:text-base min-w-max text-center",
                children: t,
              }),
            }),
          }),
        });
      };
    },
    1103: function (e, t, r) {
      "use strict";
      var n = r(7437);
      t.Z = (e) => {
        let { children: t, func: r } = e;
        return (0, n.jsxs)("div", {
          className:
            "relative active:bg-opacity-80 active:brightness-[90%] pointer-events-auto",
          children: [
            (0, n.jsx)("div", {
              className:
                "-inset-0.5 bg-animated-bg absolute blur-md animate-rotateBg opacity-50",
            }),
            (0, n.jsx)("div", {
              onClick: () => r(),
              className:
                "transition-all ease-out duration-500 active:bg-opacity-80 relative cursor-pointer group block w-full overflow-hidden border-transparent bg-gradient-to-br from-zkLightPurple via-zkLightPurple to-zkIndigo p-[1px] hover:p-0",
              style: {
                clipPath:
                  "polygon(0% 0%, calc(100% - 20px) 0%, 100% 20px, 100% 100%, 20px 100%, 0% calc(100% - 20px), 0% 100%, 0% 0%)",
                backgroundImage: "linear-gradient(to right, #A4C8FF, #643ADE)",
                backgroundSize: "200% 200%",
                animation: "spinGradient 3s linear infinite",
              },
              children: (0, n.jsx)("div", {
                className:
                  "transition-all ease-out relative duration-500 active:bg-opacity-80 block w-full overflow-hidden custom-gradient hover:bg-gradient-to-r hover:from-zkPurple hover:to-zkIndigo60 active:from-zkPurple60 hover:p-[1px]",
                style: {
                  clipPath:
                    "polygon(0% 0%, calc(100% - 20px) 0%, 100% 20px, 100% 100%, 20px 100%, 0% calc(100% - 20px), 0% 100%, 0% 0%)",
                },
                children: (0, n.jsx)("div", {
                  className:
                    "transition-all ease-out duration-500 px-10 lg:px-12 py-4 text-center bg-clip-text text-transparent hover:text-white bg-gradient-to-l from-zkIndigo to-zkPurple font-bold tracking-wider",
                  children: t,
                }),
              }),
            }),
          ],
        });
      };
    },
    2554: function (e, t, r) {
      "use strict";
      var n = r(7437),
        o = r(6648),
        i = r(4997),
        a = r(2265),
        s = r(6786),
        c = r(7138);
      t.Z = () => {
        let [e, t] = (0, a.useState)(!1),
          [r, u] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(
            () => (
              window.innerWidth < 768 ? t(!0) : (t(!1), u(!1)),
              window.addEventListener("resize", () => {
                window.innerWidth < 768 ? t(!0) : (t(!1), u(!1));
              }),
              () => {
                window.removeEventListener("resize", () => {});
              }
            ),
            []
          ),
          (0, n.jsxs)("div", {
            className:
              "flex justify-between p-5  lg:max-w-7xl md:max-w-3xl     w-full ",
            children: [
              r &&
                (0, n.jsx)("div", {
                  className: "fixed inset-0 z-30  w-screen h-screen",
                  onClick: () => {
                    u(!1);
                  },
                }),
              (0, n.jsx)(c.default, {
                href: "/",
                children: (0, n.jsx)(o.default, {
                  src: "/icons/logo.png",
                  width: 100,
                  height: 100,
                  alt: "logo",
                }),
              }),
              e
                ? (0, n.jsxs)("div", {
                    className: "relative cursor-pointer",
                    onClick: () => u((e) => !e),
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex flex-col gap-[5px]",
                        children: [
                          (0, n.jsx)("div", {
                            className: "bg-white h-[3px] w-8 rounded-full",
                          }),
                          (0, n.jsx)("div", {
                            className: "bg-white h-[3px] w-8 rounded-full",
                          }),
                          (0, n.jsx)("div", {
                            className: "bg-white h-[3px] w-8 rounded-full",
                          }),
                        ],
                      }),
                      r &&
                        (0, n.jsx)(n.Fragment, {
                          children: (0, n.jsxs)("div", {
                            className:
                              "absolute z-40 right-5 top-12 flex flex-col gap-6 items-center justify-center text-white",
                            children: [
                              (0, n.jsx)("a", {
                                className: "min-w-fit text-xs  lg:text-base",
                                href: s.mx.howToUse,
                                target: "_blank",
                                children: "HOW TO USE",
                              }),
                              (0, n.jsx)("a", {
                                className: "text-xs lg:text-base text-white",
                                href: s.mx.whitePaper,
                                target: "_blank",
                                children: "WHITEPAPER",
                              }),
                              (0, n.jsx)(i.Z, {
                                link: s.VN,
                                children: "Launch App",
                              }),
                            ],
                          }),
                        }),
                    ],
                  })
                : (0, n.jsxs)("div", {
                    className: "flex gap-10 items-center justify-center",
                    children: [
                      (0, n.jsx)("a", {
                        className:
                          "min-w-fit text-sm lg:text-base hover:underline hover:underline-offset-4",
                        href: s.mx.howToUse,
                        target: "_blank",
                        children: "HOW TO USE",
                      }),
                      (0, n.jsx)("a", {
                        className:
                          "text-sm lg:text-base hover:underline hover:underline-offset-4",
                        href: s.mx.whitePaper,
                        target: "_blank",
                        children: "WHITEPAPER",
                      }),
                      (0, n.jsx)(i.Z, { link: s.VN, children: "Launch App" }),
                    ],
                  }),
            ],
          })
        );
      };
    },
    6786: function (e, t, r) {
      "use strict";
      r.d(t, {
        Qz: function () {
          return a;
        },
        Rn: function () {
          return o;
        },
        VN: function () {
          return n;
        },
        Ye: function () {
          return i;
        },
        mx: function () {
          return s;
        },
      });
      let n = "https://alexeys-organization-9.gitbook.io/zyger-ai-network",
        o = "",
        i = "https://alexeys-organization-9.gitbook.io/zyger-ai-network",
        a = "https://github.com/ZkAGI",
        s = {
          howToUse: "https://tidycal.com/zkagi/discussion",
          whitePaper:
            "https://drive.google.com/file/d/1EOFTh8TxscsZlT2fnaxJyGlD0dipAFUQ/view?usp=sharing",
          getStarted: "https://zyger-ai-app-cs.vercel.app/",
          ambassadorApply: "https://zealy.io/cw/zkagisocials/questboard",
        };
    },
    6041: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(7437),
        o = r(1103),
        i = r(2554),
        a = r(2265),
        s = r(4365),
        c = r.n(s),
        u = r(7544),
        l = r.n(u),
        p = r(6786);
      let f = (e) => {
        e && "" !== e && window.open(e, "_blank");
      };
      t.default = () => {
        let [e, t] = (0, a.useState)(!1),
          r = () => {
            t(window.scrollY > 10);
          };
        return (
          (0, a.useEffect)(
            () => (
              r(),
              window.addEventListener("scroll", r),
              () => {
                window.removeEventListener("scroll", r);
              }
            ),
            []
          ),
          (0, n.jsxs)("div", {
            className:
              "relative h-screen overflow-visible w-full flex flex-col items-center ",
            children: [
              (0, n.jsx)("div", {
                className: "fixed   flex justify-center w-full z-50  ".concat(
                  e ? "opacity-0 pointer-events-none" : "opacity-100",
                  " transition-opacity "
                ),
                children: (0, n.jsx)(i.Z, {}),
              }),
              (0, n.jsx)("div", {
                className:
                  "absolute z-0 w-full h-[calc(80vh)] md:h-full pointer-events-none lg:pointer-events-auto scale-125 md:scale-100",
                children: (0, n.jsx)(l(), {
                  src: "/rive/hero.riv",
                  stateMachines: "State Machine 1",
                  layout: new u.Layout({ fit: u.Fit.Cover }),
                }),
              }),
              (0, n.jsxs)("div", {
                className:
                  "absolute bottom-20 w-full   lg:max-w-7xl md:max-w-3xl     text-white  flex flex-col items-center md:grid md:grid-cols-7 md:gap-5 justify-between pointer-events-none",
                children: [
                  (0, n.jsxs)("div", {
                    className:
                      "w-full max-w-md text-3xl  md:text-4xl lg:text-5xl md:col-span-5  font-light md:max-w-5xl lg:max-w-6xl text-center md:text-start flex flex-col items-center md:items-start  ",
                    children: [
                      (0, n.jsx)("div", {
                        className: " whitespace-break-spaces",
                        children:
                          "World’s first privacy conscious decentralised AGI built for",
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "relative text-3xl  drop-shadow w-fit max-w-lg  md:text-4xl  lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-zkIndigo via-zkLightPurple to-zkPurple",
                        children: [
                          (0, n.jsx)(c(), {
                            options: {
                              strings: [
                                " enterprises",
                                " developers",
                                " web3 technologists",
                                " high growth startups",
                                " sovereign entrepreneurs",
                              ],
                              autoStart: !0,
                              loop: !0,
                            },
                          }),
                          (0, n.jsx)("div", {
                            className:
                              "-inset-0.5 bg-animated-bg absolute blur-3xl animate opacity-40 transition-transform ease-in-out duration-1000 delay-200",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      " flex flex-col items-center md:items-start md:col-span-2 gap-7 ",
                    children: [
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-col items-center md:items-start pt-10 text-sm lg:text-base ",
                        children: [
                          (0, n.jsx)("div", {
                            className: "text-zkIndigo font-sourceCode  ",
                            children: "Zero knowledge (Zk) Proofs x AI",
                          }),
                          (0, n.jsx)("div", {
                            className:
                              "font-sourceCode text-center md:text-start  ",
                            children:
                              "built on decentralised Physical Infrastructure Network (DePIN)",
                          }),
                        ],
                      }),
                      " ",
                      (0, n.jsx)(o.Z, {
                        func: () => {
                          f(p.mx.getStarted);
                        },
                        children: "Launch App",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
  },
]);
