(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [474],
  {
    8354: function (e, t, n) {
      var r;
      (r = function (e) {
        return (function (e) {
          function t(r) {
            if (n[r]) return n[r].exports;
            var a = (n[r] = { i: r, l: !1, exports: {} });
            return e[r].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
          }
          var n = {};
          return (
            (t.m = e),
            (t.c = n),
            (t.d = function (e, n, r) {
              t.o(e, n) ||
                Object.defineProperty(e, n, {
                  configurable: !1,
                  enumerable: !0,
                  get: r,
                });
            }),
            (t.n = function (e) {
              var n =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return t.d(n, "a", n), n;
            }),
            (t.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (t.p = ""),
            t((t.s = 0))
          );
        })([
          function (e, t, n) {
            e.exports = n(1);
          },
          function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = n(2);
            t.default = r.a;
          },
          function (e, t, n) {
            "use strict";
            function r(e, t) {
              if (!e)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t && ("object" == typeof t || "function" == typeof t)
                ? t
                : e;
            }
            var a = n(3),
              i = n.n(a),
              o = n(4),
              u = n.n(o),
              s = n(9),
              c = n.n(s),
              l = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r);
                  }
                }
                return function (t, n, r) {
                  return n && e(t.prototype, n), r && e(t, r), t;
                };
              })(),
              f = function () {},
              d = (function (e) {
                function t() {
                  var e, n, a;
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw TypeError("Cannot call a class as a function");
                  })(this, t);
                  for (
                    var i = arguments.length, o = Array(i), u = 0;
                    u < i;
                    u++
                  )
                    o[u] = arguments[u];
                  return (
                    (n = a =
                      r(
                        this,
                        (e =
                          t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                          e,
                          [this].concat(o)
                        )
                      )),
                    (a.state = { animatedValue: 0 }),
                    (a.componentDidMount = function () {
                      a.animateValue();
                    }),
                    (a.componentDidUpdate = function (e) {
                      e.value !== a.props.value && a.animateValue();
                    }),
                    (a.componentWillUnmount = function () {
                      a.stopAnimation();
                    }),
                    (a.target = { animatedValue: 0 }),
                    (a.updateValue = function (e) {
                      a.props.update(e);
                      var t = a.target.animatedValue;
                      a.setState({ animatedValue: t });
                    }),
                    (a.stopAnimation = function () {
                      a.instance &&
                        (a.instance.pause(),
                        a.instance.reset(),
                        delete a.instance);
                    }),
                    (a.animateValue = function () {
                      a.stopAnimation();
                      var e = a.props,
                        t = e.duration,
                        n = e.begin,
                        r = e.easing,
                        i = e.complete,
                        o = e.run,
                        u = e.delay,
                        s = e.value;
                      a.instance = c()({
                        targets: a.target,
                        animatedValue: s,
                        duration: t,
                        update: a.updateValue,
                        easing: r,
                        begin: n,
                        complete: i,
                        run: o,
                        delay: u,
                      });
                    }),
                    r(a, n)
                  );
                }
                return (
                  (function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw TypeError(
                        "Super expression must either be null or a function, not " +
                          typeof t
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })),
                      t &&
                        (Object.setPrototypeOf
                          ? Object.setPrototypeOf(e, t)
                          : (e.__proto__ = t));
                  })(t, e),
                  l(t, [
                    {
                      key: "render",
                      value: function () {
                        return i.a.createElement(
                          "span",
                          { className: this.props.className },
                          this.props.formatValue(
                            Number(this.state.animatedValue)
                          )
                        );
                      },
                    },
                  ]),
                  t
                );
              })(a.Component);
            (d.propTypes = {
              value: u.a.oneOfType([u.a.number, u.a.string]).isRequired,
              duration: u.a.number,
              delay: u.a.number,
              formatValue: u.a.func,
              begin: u.a.func,
              complete: u.a.func,
              run: u.a.func,
              update: u.a.func,
              easing: u.a.string,
              className: u.a.string,
            }),
              (d.defaultProps = {
                duration: 1e3,
                formatValue: function (e) {
                  return e;
                },
                easing: "linear",
                run: f,
                complete: f,
                update: f,
                begin: f,
                delay: 0,
                className: null,
              }),
              (t.a = d);
          },
          function (t, n) {
            t.exports = e;
          },
          function (e, t, n) {
            e.exports = n(5)();
          },
          function (e, t, n) {
            "use strict";
            var r = n(6),
              a = n(7),
              i = n(8);
            e.exports = function () {
              function e(e, t, n, r, o, u) {
                u !== i &&
                  a(
                    !1,
                    "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                  );
              }
              function t() {
                return e;
              }
              e.isRequired = e;
              var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
              };
              return (n.checkPropTypes = r), (n.PropTypes = n), n;
            };
          },
          function (e, t, n) {
            "use strict";
            function r(e) {
              return function () {
                return e;
              };
            }
            var a = function () {};
            (a.thatReturns = r),
              (a.thatReturnsFalse = r(!1)),
              (a.thatReturnsTrue = r(!0)),
              (a.thatReturnsNull = r(null)),
              (a.thatReturnsThis = function () {
                return this;
              }),
              (a.thatReturnsArgument = function (e) {
                return e;
              }),
              (e.exports = a);
          },
          function (e, t, n) {
            "use strict";
            var r = function (e) {};
            e.exports = function (e, t, n, a, i, o, u, s) {
              if ((r(t), !e)) {
                var c;
                if (void 0 === t)
                  c = Error(
                    "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
                  );
                else {
                  var l = [n, a, i, o, u, s],
                    f = 0;
                  (c = Error(
                    t.replace(/%s/g, function () {
                      return l[f++];
                    })
                  )).name = "Invariant Violation";
                }
                throw ((c.framesToPop = 1), c);
              }
            };
          },
          function (e, t, n) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
          },
          function (e, t) {
            var n = this;
            e.exports = (function () {
              function e(e, t) {
                for (
                  var n = e.length,
                    r = arguments.length >= 2 ? arguments[1] : void 0,
                    a = [],
                    i = 0;
                  i < n;
                  i += 1
                )
                  if (i in e) {
                    var o = e[i];
                    t.call(r, o, i, e) && a.push(o);
                  }
                return a;
              }
              function t(e) {
                var t = {};
                for (var n in e) t[n] = e[n];
                return t;
              }
              function r(e, n) {
                var r = t(e);
                for (var a in e) r[a] = n.hasOwnProperty(a) ? n[a] : e[a];
                return r;
              }
              function a(e, n) {
                var r = t(e);
                for (var a in n) r[a] = d.und(e[a]) ? n[a] : e[a];
                return r;
              }
              function i(e, t, n) {
                return Math.min(Math.max(e, t), n);
              }
              function o(e, t) {
                return d.fnc(e) ? e(t.target, t.id, t.total) : e;
              }
              function u(e) {
                var t = /-?\d*\.?\d+/g,
                  n = "" + e;
                return {
                  original: n,
                  numbers: n.match(t) ? n.match(t).map(Number) : [0],
                  strings: [],
                };
              }
              function s(e, t, n, r) {
                var a = "delay" === e;
                return t.length
                  ? (a ? Math.min : Math.max).apply(
                      Math,
                      t.map(function (t) {
                        return t[e];
                      })
                    )
                  : a
                  ? r.delay
                  : n.offset + r.delay + r.duration;
              }
              function c() {
                function n() {
                  return (
                    window.Promise &&
                    new Promise(function (e) {
                      return (V = e);
                    })
                  );
                }
                function p() {
                  S.reversed = !S.reversed;
                }
                function b(e) {
                  return S.reversed ? S.duration - e : e;
                }
                function y(t) {
                  for (
                    var n = 0, r = {}, a = S.animations, o = a.length;
                    n < o;

                  ) {
                    var u = a[n],
                      s = u.animatable,
                      c = u.tweens,
                      l = c.length - 1,
                      f = c[l];
                    l &&
                      (f =
                        e(c, function (e) {
                          return t < e.end;
                        })[0] || f);
                    for (
                      var d =
                          i(t - f.start - f.delay, 0, f.duration) / f.duration,
                        p = isNaN(d) ? 1 : f.easing(d, f.elasticity),
                        m = [],
                        g = void 0,
                        x = f.to.numbers.length,
                        v = 0;
                      v < x;
                      v += 1
                    ) {
                      var b = void 0,
                        y = f.to.numbers[v],
                        w = f.from.numbers[v];
                      (b = w + p * (y - w)), m.push(b);
                    }
                    (g = m[0]),
                      h[u.type](s.target, u.property, g, r, s.id),
                      (u.currentValue = g),
                      (n += 1);
                  }
                  (S.currentTime = t), (S.progress = (t / S.duration) * 100);
                }
                function w(e) {
                  S[e] && S[e](S);
                }
                function k() {
                  S.remaining && !0 !== S.remaining && (S.remaining -= 1);
                }
                function j(e) {
                  var t = S.duration,
                    r = S.offset,
                    a = r + S.delay,
                    i = S.currentTime,
                    o = S.reversed,
                    u = b(e);
                  S.children.length &&
                    (function (e) {
                      var t = S.children,
                        n = t.length;
                      if (e >= S.currentTime)
                        for (var r = 0; r < n; r += 1) t[r].seek(e);
                      else for (var a = n; a--; ) t[a].seek(e);
                    })(u),
                    (u >= a || !t) &&
                      (S.began || ((S.began = !0), w("begin")), w("run")),
                    u > r && u < t
                      ? y(u)
                      : (u <= r && 0 !== i && (y(0), o && k()),
                        ((u >= t && i !== t) || !t) && (y(t), o || k())),
                    w("update"),
                    e >= t &&
                      (S.remaining
                        ? ((z = M), "alternate" === S.direction && p())
                        : (S.pause(),
                          S.completed ||
                            ((S.completed = !0),
                            w("complete"),
                            "Promise" in window && (V(), (C = n())))),
                      (R = 0));
                }
                var N,
                  T,
                  O,
                  _,
                  E,
                  P,
                  I,
                  A =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  M = void 0,
                  z = void 0,
                  R = 0,
                  V = null,
                  C = n(),
                  S =
                    ((_ = r(l, A)),
                    (E = r(f, A)),
                    (P = (N = [A.targets]).map(function (e, t) {
                      return { target: e, id: t, total: N.length };
                    })),
                    (T = []),
                    (O = a(_, E)),
                    Object.keys(A).forEach(function (e) {
                      var n, r;
                      O.hasOwnProperty(e) ||
                        "targets" === e ||
                        T.push({
                          name: e,
                          offset: O.offset,
                          tweens:
                            ((n = A[e]),
                            (r = t(E)),
                            [n]
                              .map(function (e, t) {
                                var n = t ? 0 : E.delay,
                                  r = { value: e };
                                return d.und(r.delay) && (r.delay = n), r;
                              })
                              .map(function (e) {
                                return a(e, r);
                              })),
                        });
                    }),
                    (I = e(
                      (function e(t) {
                        return t.reduce(function (t, n) {
                          return t.concat(d.arr(n) ? e(n) : n);
                        }, []);
                      })(
                        P.map(function (e) {
                          return T.map(function (t) {
                            return (function (e, t) {
                              var n = (function (e, t) {
                                if (null != e[t]) return "object";
                              })(e.target, t.name);
                              if (n) {
                                var r,
                                  a =
                                    ((r = void 0),
                                    t.tweens.map(function (n) {
                                      var a,
                                        s =
                                          ((a = {}),
                                          Object.keys(n).forEach(function (t) {
                                            var r = o(n[t], e);
                                            d.arr(r) &&
                                              1 ===
                                                (r = r.map(function (t) {
                                                  return o(t, e);
                                                })).length &&
                                              (r = r[0]),
                                              (a[t] = r);
                                          }),
                                          (a.duration = parseFloat(a.duration)),
                                          (a.delay = parseFloat(a.delay)),
                                          a),
                                        c = s.value,
                                        l = e.target[t.name],
                                        f = r ? r.to.original : l,
                                        p = d.arr(c) ? c[0] : f;
                                      return (
                                        (s.from = u(p)),
                                        (s.to = u(c)),
                                        (s.start = r ? r.end : t.offset),
                                        (s.end =
                                          s.start + s.delay + s.duration),
                                        (s.easing = m[s.easing]),
                                        (s.elasticity =
                                          (1e3 - i(s.elasticity, 1, 999)) /
                                          1e3),
                                        s.isColor && (s.round = 1),
                                        (r = s),
                                        s
                                      );
                                    }));
                                return {
                                  type: n,
                                  property: t.name,
                                  animatable: e,
                                  tweens: a,
                                  duration: a[a.length - 1].end,
                                  delay: a[0].delay,
                                };
                              }
                            })(e, t);
                          });
                        })
                      ),
                      function (e) {
                        return !d.und(e);
                      }
                    )),
                    a(_, {
                      children: [],
                      animatables: P,
                      animations: I,
                      duration: s("duration", I, _, E),
                      delay: s("delay", I, _, E),
                    }));
                return (
                  (S.reset = function () {
                    var e = S.direction,
                      t = S.loop;
                    (S.currentTime = 0),
                      (S.progress = 0),
                      (S.paused = !0),
                      (S.began = !1),
                      (S.completed = !1),
                      (S.reversed = "reverse" === e),
                      (S.remaining = "alternate" === e && 1 === t ? 2 : t),
                      y(0);
                    for (var n = S.children.length; n--; )
                      S.children[n].reset();
                  }),
                  (S.tick = function (e) {
                    (M = e), z || (z = M), j((R + M - z) * c.speed);
                  }),
                  (S.seek = function (e) {
                    j(b(e));
                  }),
                  (S.pause = function () {
                    var e = g.indexOf(S);
                    e > -1 && g.splice(e, 1), (S.paused = !0);
                  }),
                  (S.play = function () {
                    S.paused &&
                      ((S.paused = !1),
                      (z = 0),
                      (R = b(S.currentTime)),
                      g.push(S),
                      x || v());
                  }),
                  (S.reverse = function () {
                    p(), (z = 0), (R = b(S.currentTime));
                  }),
                  (S.restart = function () {
                    S.pause(), S.reset(), S.play();
                  }),
                  (S.finished = C),
                  S.reset(),
                  S.autoplay && S.play(),
                  S
                );
              }
              var l = {
                  update: void 0,
                  begin: void 0,
                  run: void 0,
                  complete: void 0,
                  loop: 1,
                  direction: "normal",
                  autoplay: !0,
                  offset: 0,
                },
                f = {
                  duration: 1e3,
                  delay: 0,
                  easing: "easeOutElastic",
                  elasticity: 500,
                  round: 0,
                },
                d = {
                  arr: function (e) {
                    return Array.isArray(e);
                  },
                  fnc: function (e) {
                    return "function" == typeof e;
                  },
                  und: function (e) {
                    return void 0 === e;
                  },
                },
                p = function (e, t, n, r) {
                  if (e >= 0 && e <= 1 && n >= 0 && n <= 1) {
                    var a,
                      i = new Float32Array(11);
                    if (e !== t || n !== r)
                      for (var o = 0; o < 11; o += 1)
                        i[o] =
                          (((1 - 3 * n + 3 * e) * (a = 0.1 * o) +
                            (3 * n - 6 * e)) *
                            a +
                            3 * e) *
                          a;
                    return function (a) {
                      return e === t && n === r
                        ? a
                        : 0 === a
                        ? 0
                        : 1 === a
                        ? 1
                        : void 0;
                    };
                  }
                },
                m = (function () {
                  function e(e, t) {
                    return 0 === e || 1 === e
                      ? e
                      : -Math.pow(2, 10 * (e - 1)) *
                          Math.sin(
                            (2 *
                              Math.PI *
                              (e - 1 - (t / (2 * Math.PI)) * Math.asin(1))) /
                              t
                          );
                  }
                  var t = [
                      "Quad",
                      "Cubic",
                      "Quart",
                      "Quint",
                      "Sine",
                      "Expo",
                      "Circ",
                      "Back",
                      "Elastic",
                    ],
                    r = {
                      In: [
                        [0.55, 0.085, 0.68, 0.53],
                        [0.55, 0.055, 0.675, 0.19],
                        [0.895, 0.03, 0.685, 0.22],
                        [0.755, 0.05, 0.855, 0.06],
                        [0.47, 0, 0.745, 0.715],
                        [0.95, 0.05, 0.795, 0.035],
                        [0.6, 0.04, 0.98, 0.335],
                        [0.6, -0.28, 0.735, 0.045],
                        e,
                      ],
                      Out: [
                        [0.25, 0.46, 0.45, 0.94],
                        [0.215, 0.61, 0.355, 1],
                        [0.165, 0.84, 0.44, 1],
                        [0.23, 1, 0.32, 1],
                        [0.39, 0.575, 0.565, 1],
                        [0.19, 1, 0.22, 1],
                        [0.075, 0.82, 0.165, 1],
                        [0.175, 0.885, 0.32, 1.275],
                        function (t, n) {
                          return 1 - e(1 - t, n);
                        },
                      ],
                      InOut: [
                        [0.455, 0.03, 0.515, 0.955],
                        [0.645, 0.045, 0.355, 1],
                        [0.77, 0, 0.175, 1],
                        [0.86, 0, 0.07, 1],
                        [0.445, 0.05, 0.55, 0.95],
                        [1, 0, 0, 1],
                        [0.785, 0.135, 0.15, 0.86],
                        [0.68, -0.55, 0.265, 1.55],
                        function (t, n) {
                          return t < 0.5
                            ? e(2 * t, n) / 2
                            : 1 - e(-2 * t + 2, n) / 2;
                        },
                      ],
                    },
                    a = { linear: p(0.25, 0.25, 0.75, 0.75) };
                  return (
                    Object.keys(r).forEach(function (e) {
                      r[e].forEach(function (r, i) {
                        a["ease" + e + t[i]] = d.fnc(r) ? r : p.apply(n, r);
                      });
                    }),
                    a
                  );
                })(),
                h = {
                  css: function (e, t, n) {
                    return (e.style[t] = n);
                  },
                  attribute: function (e, t, n) {
                    return e.setAttribute(t, n);
                  },
                  object: function (e, t, n) {
                    return (e[t] = n);
                  },
                  transform: function (e, t, n, r, a) {
                    r[a] || (r[a] = []), r[a].push(t + "(" + n + ")");
                  },
                },
                g = [],
                x = 0,
                v = (function () {
                  function e() {
                    x = requestAnimationFrame(t);
                  }
                  function t(t) {
                    var n = g.length;
                    if (n) {
                      for (var r = 0; r < n; ) g[r] && g[r].tick(t), (r += 1);
                      e();
                    } else cancelAnimationFrame(x), (x = 0);
                  }
                  return e;
                })();
              return (
                (c.speed = 1),
                (c.running = g),
                (c.getValue = function (e, t) {
                  return e[t] || 0;
                }),
                (c.bezier = p),
                (c.easings = m),
                c
              );
            })();
          },
        ]);
      }),
        (e.exports = r(n(2265)));
    },
    6786: function (e, t, n) {
      "use strict";
      n.d(t, {
        Qz: function () {
          return o;
        },
        Rn: function () {
          return a;
        },
        VN: function () {
          return r;
        },
        Ye: function () {
          return i;
        },
        mx: function () {
          return u;
        },
      });
      let r = "https://alexeys-organization-9.gitbook.io/zyger-ai-network",
        a = "",
        i = "https://alexeys-organization-9.gitbook.io/zyger-ai-network",
        o = "https://github.com/ZkAGI",
        u = {
          howToUse: "https://tidycal.com/zkagi/discussion",
          whitePaper:
            "https://drive.google.com/file/d/1EOFTh8TxscsZlT2fnaxJyGlD0dipAFUQ/view?usp=sharing",
          getStarted: "https://zyger-ai-app-cs.vercel.app/",
          ambassadorApply: "https://zealy.io/cw/zkagisocials/questboard",
        };
    },
    6474: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var r = n(7437);
      let a = [
        {
          name: "TELEGRAM",
          img: "/icons/_Telegram.svg",
          link: "https://t.me/ZygerAI_ETH",
        },
        {
          name: "TWITTER",
          img: "/icons/_Twitter.svg",
          link: "https://twitter.com/ZygerAI_ETH",
        },
        {
          name: "DOCS",
          img: "/images/google-docs.png",
          link: "https://alexeys-organization-9.gitbook.io/zyger-ai-network",
        },
      ];
      var i = n(2265),
        o = (e) => {
          let { children: t, func: n } = e;
          return (0, r.jsx)("div", {
            onClick: () => n(),
            className:
              "transition-all ease-in-out duration-200 block w-full overflow-hidden   active:translate-y-0  hover:bg-white hover:text-white active:text-white p-[1px]",
            style: {
              clipPath:
                " polygon(0% 0%, calc(100% - 12px) 0%, 100% 12px, 100% 100%, 12px 100%, 0% calc(100% - 12px), 0% 100%, 0% 0%)",
            },
            children: (0, r.jsx)("div", {
              className:
                "px-3 py-3 text-center cursor-pointer text-black bg-white font-semibold hover:bg-zkBackground hover:text-white",
              style: {
                clipPath:
                  " polygon(0% 0%, calc(100% - 12px) 0%, 100% 12px, 100% 100%, 12px 100%, 0% calc(100% - 12px), 0% 100%, 0% 0%)",
              },
              children: t,
            }),
          });
        },
        u = n(6648),
        s = (e) => {
          let { children: t, link: n } = e;
          return (0, r.jsx)("a", {
            href: n,
            target: "_blank",
            rel: "noopener noreferrer",
            className:
              "block transition-all ease-out duration-250 w-full overflow-hidden bg-zkLavender hover:bg-zkPurple group-active:brightness-[85%] cursor-pointer",
            style: {
              clipPath:
                "polygon(0% 0%, calc(100% - 15px) 0%, 100% 15px, 100% 100%, 15px 100%, 0% calc(100% - 15px), 0% 100%, 0% 0%)",
            },
            children: (0, r.jsx)("div", {
              className:
                "transition-all ease-out duration-250 px-3 py-3 text-xs lg:text-base min-w-max",
              children: t,
            }),
          });
        },
        c = n(8354),
        l = n.n(c),
        f = n(6786);
      let d = (e) => {
          e && "" !== e && window.open(e, "_blank");
        },
        p = (e) => {
          let { value: t, label: n } = e;
          return (0, r.jsxs)("div", {
            className: "flex flex-col",
            children: [
              (0, r.jsx)("p", {
                className:
                  "text-6xl text-center  lg:text-7xl tracking-tight bg-clip-text bg-gradient-to-r from-zkIndigo via-zkLightPurple to-zkIndigo text-transparent",
                children: (0, r.jsx)(l(), {
                  value: parseInt(t),
                  formatValue: (e) =>
                    t.includes("K") || t.includes("+") ? t : Math.round(e),
                  easing: "linear",
                  duration: 3e3,
                  delay: 250,
                }),
              }),
              (0, r.jsx)("p", {
                className:
                  "text-white font-sourceCode text-center text-sm md:text-sm",
                children: n,
              }),
            ],
          });
        },
        m = () =>
          (0, r.jsx)("div", {
          });
      var h = () => {
        let e = (0, i.useRef)(null),
          [t, n] = (0, i.useState)(""),
          [o, c] = (0, i.useState)(""),
          l = (0, i.useRef)(null),
          [f, d] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            let t = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  e.isIntersecting &&
                    !f &&
                    (n("1245+"),
                    c("10K+"),
                    l.current && !f && (l.current.play(), d(!0)));
                });
              },
              { threshold: 0.1 }
            );
            return (
              e.current && t.observe(e.current),
              () => {
                e.current && t.unobserve(e.current);
              }
            );
          }, [f]),
          (0, r.jsx)("div", {
            className:
              "md:px-10 lg:px-12 xl:px-16 overflow-hidden flex flex-col items-center",
            children: (0, r.jsxs)("div", {
              className:
                "relative py-20  w-full h-[70rem] md:h-[80rem] 2xl:h-[90rem]  flex flex-col items-center rounded-t-[60px] bg-cover bg-center bg-no-repeat footer-box ",
              children: [
                (0, r.jsx)("video", {
                  ref: l,
                  id: "tiger",
                  src: "/videos/tiger.mp4",
                  className:
                    "absolute w-full h-full object-cover object-bottom -bottom-10 md:bottom-0 2xl:-bottom-8 4xl:-bottom-10  footer-box rounded-t-[60px]",
                  controls: !1,
                  playsInline: !0,
                  muted: !0,
                }),
                (0, r.jsxs)("div", {
                  className:
                    " w-full z-10 flex flex-col items-center px-5  max-w-xl",
                  children: [
                    (0, r.jsx)("p", {
                      className:
                        "text-white text-center font-light text-[72px] md:text-[78px] lg:text-[96px] min-w-max mt-5 lg:mt-14 xl:mt-20 mb-5 w-full -tracking-[4px]",
                      children: "Be Brave!",
                    }),
                    (0, r.jsx)("p", {
                      className:
                        "text-white font-normal font-sourceCode text-base md:text-lg w-full text-center mb-10 md:mb-12",
                      children:
                        "Zyger is built for autonomous and sovereign entrepreneurs. Together we usher a new era of privacy enabled autopreneurs.",
                    }),
                    (0, r.jsx)(m, {}),
                  ],
                }),
                (0, r.jsx)("div", {
                  className:
                    "lg:hidden flex max-w-xl w-full flex-wrap items-center justify-center gap-x-1 p-2",
                  children: a.map((e, t) =>
                    (0, r.jsx)(
                      "div",
                      {
                        className: "w-[calc((100%-16px)/2)] p-1 text-white",
                        children: (0, r.jsx)(s, {
                          link: e.link,
                          children: (0, r.jsxs)("div", {
                            className:
                              "flex items-center justify-center space-x-2",
                            children: [
                              (0, r.jsx)(u.default, {
                                alt: "icon",
                                src: e.img,
                                width: 18,
                                height: 18,
                              }),
                              (0, r.jsx)("div", {
                                className: "font-ttfirs font-normal",
                                children: e.name,
                              }),
                            ],
                          }),
                        }),
                      },
                      t
                    )
                  ),
                }),
                (0, r.jsx)("div", {
                  className:
                    "hidden lg:grid gap-x-1 p-2 lg:grid-cols-3 xl:grid-cols-3",
                  children: a.map((e, t) =>
                    (0, r.jsx)(
                      "div",
                      {
                        className: "w-44 xl:w-52 p-1",
                        children: (0, r.jsx)(s, {
                          link: e.link,
                          children: (0, r.jsxs)("div", {
                            className:
                              "flex items-center justify-center space-x-2",
                            children: [
                              (0, r.jsx)(u.default, {
                                alt: "icon",
                                src: e.img,
                                width: 18,
                                height: 18,
                              }),
                              (0, r.jsx)("div", {
                                className: "font-ttfirs font-normal",
                                children: e.name,
                              }),
                            ],
                          }),
                        }),
                      },
                      t
                    )
                  ),
                }),
              ],
            }),
          })
        );
      };
    },
  },
]);
