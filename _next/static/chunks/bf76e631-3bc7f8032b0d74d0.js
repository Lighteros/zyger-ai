(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [370],
  {
    7715: function (e) {
      var t;
      (t = () =>
        (() => {
          "use strict";
          var e,
            t,
            n,
            r,
            i,
            a,
            o,
            s,
            u,
            c,
            l,
            h,
            f,
            d,
            p,
            m,
            v,
            g,
            b,
            y,
            w,
            _,
            A,
            C,
            R,
            T,
            E,
            P,
            M,
            L,
            F,
            j = [
              ,
              (e, t, n) => {
                var r;
                n.r(t), n.d(t, { default: () => i });
                let i =
                  ((r =
                    "undefined" != typeof document && document.currentScript
                      ? document.currentScript.src
                      : void 0),
                  function (e = {}) {
                    function t() {
                      function e(e) {
                        let a = r;
                        (n = t = 0),
                          (r = new Map()),
                          a.forEach((t) => {
                            try {
                              t(e);
                            } catch (e) {
                              console.error(e);
                            }
                          }),
                          this.pb(),
                          i && i.Yb();
                      }
                      let t = 0,
                        n = 0,
                        r = new Map(),
                        i = null,
                        a = null;
                      (this.requestAnimationFrame = function (i) {
                        t || (t = requestAnimationFrame(e.bind(this)));
                        let a = ++n;
                        return r.set(a, i), a;
                      }),
                        (this.cancelAnimationFrame = function (e) {
                          r.delete(e),
                            t &&
                              0 == r.size &&
                              (cancelAnimationFrame(t), (t = 0));
                        }),
                        (this.Wb = function (e) {
                          a && (document.body.remove(a), (a = null)),
                            e ||
                              (((a =
                                document.createElement(
                                  "div"
                                )).style.backgroundColor = "black"),
                              (a.style.position = "fixed"),
                              (a.style.right = 0),
                              (a.style.top = 0),
                              (a.style.color = "white"),
                              (a.style.padding = "4px"),
                              (a.innerHTML = "RIVE FPS"),
                              (e = function (e) {
                                a.innerHTML = "RIVE FPS " + e.toFixed(1);
                              }),
                              document.body.appendChild(a)),
                            (i = new (function () {
                              let t = 0,
                                n = 0;
                              this.Yb = function () {
                                var r = performance.now();
                                n
                                  ? (++t,
                                    1e3 < (r -= n) &&
                                      (e((1e3 * t) / r), (t = n = 0)))
                                  : ((n = r), (t = 0));
                              };
                            })());
                        }),
                        (this.Tb = function () {
                          a && (document.body.remove(a), (a = null)),
                            (i = null);
                        }),
                        (this.pb = function () {});
                    }
                    function n(e) {
                      console.assert(!0);
                      let t = new Map(),
                        n = -1 / 0;
                      this.push = function (r) {
                        return (
                          (r = (r + ((1 << e) - 1)) >> e),
                          t.has(r) && clearTimeout(t.get(r)),
                          t.set(
                            r,
                            setTimeout(function () {
                              t.delete(r),
                                0 == t.length
                                  ? (n = -1 / 0)
                                  : r == n &&
                                    console.assert(
                                      (n = Math.max(...t.keys())) < r
                                    );
                            }, 1e3)
                          ),
                          (n = Math.max(r, n)) << e
                        );
                      };
                    }
                    e.ready = new Promise((e, t) => {
                      (d = e), (p = t);
                    });
                    let i = e.onRuntimeInitialized;
                    e.onRuntimeInitialized = function () {
                      i && i();
                      let t = e.decodeFont;
                      e.decodeFont = function (e, n) {
                        n((e = t(e)));
                      };
                      let n = e.FileAssetLoader;
                      (e.ptrToAsset = (t) => {
                        let n = e.ptrToFileAsset(t);
                        return n.isImage
                          ? e.ptrToImageAsset(t)
                          : n.isFont
                          ? e.ptrToFontAsset(t)
                          : n;
                      }),
                        (e.CustomFileAssetLoader = n.extend(
                          "CustomFileAssetLoader",
                          {
                            __construct: function ({ loadContents: e }) {
                              this.__parent.__construct.call(this),
                                (this.Hb = e);
                            },
                            loadContents: function (t, n) {
                              return (t = e.ptrToAsset(t)), this.Hb(t, n);
                            },
                          }
                        )),
                        (e.CDNFileAssetLoader = n.extend("CDNFileAssetLoader", {
                          __construct: function () {
                            this.__parent.__construct.call(this);
                          },
                          loadContents: function (t) {
                            var n, r, i;
                            let a = e.ptrToAsset(t);
                            return (
                              "" !== (t = a.cdnUuid) &&
                              ((n = a.cdnBaseUrl + "/" + t),
                              (r = (e) => {
                                a.decode(new Uint8Array(e.response));
                              }),
                              ((i = new XMLHttpRequest()).responseType =
                                "arraybuffer"),
                              (i.onreadystatechange = function () {
                                4 == i.readyState && 200 == i.status && r(i);
                              }),
                              i.open("GET", n, !0),
                              i.send(null),
                              !0)
                            );
                          },
                        })),
                        (e.FallbackFileAssetLoader = n.extend(
                          "FallbackFileAssetLoader",
                          {
                            __construct: function () {
                              this.__parent.__construct.call(this),
                                (this.lb = []);
                            },
                            addLoader: function (e) {
                              this.lb.push(e);
                            },
                            loadContents: function (e, t) {
                              for (let n of this.lb)
                                if (n.loadContents(e, t)) return !0;
                              return !1;
                            },
                          }
                        ));
                    };
                    let a =
                        "createConicGradient createImageData createLinearGradient createPattern createRadialGradient getContextAttributes getImageData getLineDash getTransform isContextLost isPointInPath isPointInStroke measureText".split(
                          " "
                        ),
                      o = new (function () {
                        function e() {
                          if (!t) {
                            let u;
                            var e = document.createElement("canvas"),
                              n = {
                                alpha: 1,
                                depth: 0,
                                stencil: 0,
                                antialias: 0,
                                premultipliedAlpha: 1,
                                preserveDrawingBuffer: 0,
                                preferLowPowerToHighPerformance: 0,
                                failIfMajorPerformanceCaveat: 0,
                                enableExtensionsByDefault: 1,
                                explicitSwapControl: 1,
                                renderViaOffscreenBackBuffer: 1,
                              };
                            if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                              if (((u = e.getContext("webgl", n)), (r = 1), !u))
                                return (
                                  console.log(
                                    "No WebGL support. Image mesh will not be drawn."
                                  ),
                                  !1
                                );
                            } else if ((u = e.getContext("webgl2", n))) r = 2;
                            else {
                              if (!(u = e.getContext("webgl", n)))
                                return (
                                  console.log(
                                    "No WebGL support. Image mesh will not be drawn."
                                  ),
                                  !1
                                );
                              r = 1;
                            }
                            function s(e, t, n) {
                              if (
                                ((t = u.createShader(t)),
                                u.shaderSource(t, n),
                                u.compileShader(t),
                                0 < ((n = u.getShaderInfoLog(t)) || "").length)
                              )
                                throw n;
                              u.attachShader(e, t);
                            }
                            if (
                              ((i = Math.min(
                                (u = new Proxy(u, {
                                  get: (e, t) =>
                                    e.isContextLost()
                                      ? (c ||
                                          (console.error(
                                            "Cannot render the mesh because the GL Context was lost. Tried to invoke ",
                                            t
                                          ),
                                          (c = !0)),
                                        "function" == typeof e[t])
                                        ? function () {}
                                        : void 0
                                      : "function" == typeof e[t]
                                      ? function (...n) {
                                          return e[t].apply(e, n);
                                        }
                                      : e[t],
                                  set(e, t, n) {
                                    if (!e.isContextLost())
                                      return (e[t] = n), !0;
                                    c ||
                                      (console.error(
                                        "Cannot render the mesh because the GL Context was lost. Tried to set property " +
                                          t
                                      ),
                                      (c = !0));
                                  },
                                })).getParameter(u.MAX_RENDERBUFFER_SIZE),
                                u.getParameter(u.MAX_TEXTURE_SIZE)
                              )),
                              s(
                                (e = u.createProgram()),
                                u.VERTEX_SHADER,
                                "attribute vec2 vertex;\n                attribute vec2 uv;\n                uniform vec4 mat;\n                uniform vec2 translate;\n                varying vec2 st;\n                void main() {\n                    st = uv;\n                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);\n                }"
                              ),
                              s(
                                e,
                                u.FRAGMENT_SHADER,
                                "precision highp float;\n                uniform sampler2D image;\n                varying vec2 st;\n                void main() {\n                    gl_FragColor = texture2D(image, st);\n                }"
                              ),
                              u.bindAttribLocation(e, 0, "vertex"),
                              u.bindAttribLocation(e, 1, "uv"),
                              u.linkProgram(e),
                              0 <
                                ((n = u.getProgramInfoLog(e)) || "").trim()
                                  .length)
                            )
                              throw n;
                            (a = u.getUniformLocation(e, "mat")),
                              (o = u.getUniformLocation(e, "translate")),
                              u.useProgram(e),
                              u.bindBuffer(u.ARRAY_BUFFER, u.createBuffer()),
                              u.enableVertexAttribArray(0),
                              u.enableVertexAttribArray(1),
                              u.bindBuffer(
                                u.ELEMENT_ARRAY_BUFFER,
                                u.createBuffer()
                              ),
                              u.uniform1i(u.getUniformLocation(e, "image"), 0),
                              u.pixelStorei(
                                u.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                                !0
                              ),
                              (t = u);
                          }
                          return !0;
                        }
                        let t = null,
                          r = 0,
                          i = 0,
                          a = null,
                          o = null,
                          s = 0,
                          u = 0,
                          c = !1;
                        e(),
                          (this.nc = function () {
                            return e(), i;
                          }),
                          (this.Qb = function (e) {
                            t.deleteTexture && t.deleteTexture(e);
                          }),
                          (this.Ob = function (n) {
                            if (!e()) return null;
                            let i = t.createTexture();
                            return i
                              ? (t.bindTexture(t.TEXTURE_2D, i),
                                t.texImage2D(
                                  t.TEXTURE_2D,
                                  0,
                                  t.RGBA,
                                  t.RGBA,
                                  t.UNSIGNED_BYTE,
                                  n
                                ),
                                t.texParameteri(
                                  t.TEXTURE_2D,
                                  t.TEXTURE_WRAP_S,
                                  t.CLAMP_TO_EDGE
                                ),
                                t.texParameteri(
                                  t.TEXTURE_2D,
                                  t.TEXTURE_WRAP_T,
                                  t.CLAMP_TO_EDGE
                                ),
                                t.texParameteri(
                                  t.TEXTURE_2D,
                                  t.TEXTURE_MAG_FILTER,
                                  t.LINEAR
                                ),
                                2 == r
                                  ? (t.texParameteri(
                                      t.TEXTURE_2D,
                                      t.TEXTURE_MIN_FILTER,
                                      t.LINEAR_MIPMAP_LINEAR
                                    ),
                                    t.generateMipmap(t.TEXTURE_2D))
                                  : t.texParameteri(
                                      t.TEXTURE_2D,
                                      t.TEXTURE_MIN_FILTER,
                                      t.LINEAR
                                    ),
                                i)
                              : null;
                          });
                        let l = new n(8),
                          h = new n(8),
                          f = new n(10),
                          d = new n(10);
                        (this.Vb = function (n, r, i, c, p) {
                          if (e()) {
                            var m = l.push(n),
                              v = h.push(r);
                            if (t.canvas) {
                              for (var g of ((t.canvas.width != m ||
                                t.canvas.height != v) &&
                                ((t.canvas.width = m), (t.canvas.height = v)),
                              t.viewport(0, v - r, n, r),
                              t.disable(t.SCISSOR_TEST),
                              t.clearColor(0, 0, 0, 0),
                              t.clear(t.COLOR_BUFFER_BIT),
                              t.enable(t.SCISSOR_TEST),
                              i.sort((e, t) => t.xb - e.xb),
                              (m = f.push(c)),
                              s != m &&
                                (t.bufferData(
                                  t.ARRAY_BUFFER,
                                  8 * m,
                                  t.DYNAMIC_DRAW
                                ),
                                (s = m)),
                              (m = 0),
                              i))
                                t.bufferSubData(t.ARRAY_BUFFER, m, g.Ua),
                                  (m += 4 * g.Ua.length);
                              for (var b of (console.assert(m == 4 * c), i))
                                t.bufferSubData(t.ARRAY_BUFFER, m, b.Eb),
                                  (m += 4 * b.Eb.length);
                              for (var y of (console.assert(m == 8 * c),
                              (m = d.push(p)),
                              u != m &&
                                (t.bufferData(
                                  t.ELEMENT_ARRAY_BUFFER,
                                  2 * m,
                                  t.DYNAMIC_DRAW
                                ),
                                (u = m)),
                              (g = 0),
                              i))
                                t.bufferSubData(
                                  t.ELEMENT_ARRAY_BUFFER,
                                  g,
                                  y.indices
                                ),
                                  (g += 2 * y.indices.length);
                              for (let e of (console.assert(g == 2 * p),
                              (y = 0),
                              (b = !0),
                              (m = g = 0),
                              i)) {
                                e.image.Ka != y &&
                                  (t.bindTexture(
                                    t.TEXTURE_2D,
                                    e.image.Ja || null
                                  ),
                                  (y = e.image.Ka)),
                                  e.tc
                                    ? (t.scissor(
                                        e.Za,
                                        v - e.$a - e.jb,
                                        e.Ic,
                                        e.jb
                                      ),
                                      (b = !0))
                                    : b &&
                                      (t.scissor(0, v - r, n, r), (b = !1)),
                                  (i = 2 / n);
                                let s = -2 / r;
                                t.uniform4f(
                                  a,
                                  e.ha[0] * i * e.Ba,
                                  e.ha[1] * s * e.Ca,
                                  e.ha[2] * i * e.Ba,
                                  e.ha[3] * s * e.Ca
                                ),
                                  t.uniform2f(
                                    o,
                                    e.ha[4] * i * e.Ba +
                                      i * (e.Za - e.oc * e.Ba) -
                                      1,
                                    e.ha[5] * s * e.Ca +
                                      s * (e.$a - e.pc * e.Ca) +
                                      1
                                  ),
                                  t.vertexAttribPointer(
                                    0,
                                    2,
                                    t.FLOAT,
                                    !1,
                                    0,
                                    m
                                  ),
                                  t.vertexAttribPointer(
                                    1,
                                    2,
                                    t.FLOAT,
                                    !1,
                                    0,
                                    m + 4 * c
                                  ),
                                  t.drawElements(
                                    t.TRIANGLES,
                                    e.indices.length,
                                    t.UNSIGNED_SHORT,
                                    g
                                  ),
                                  (m += 4 * e.Ua.length),
                                  (g += 2 * e.indices.length);
                              }
                              console.assert(m == 4 * c),
                                console.assert(g == 2 * p);
                            }
                          }
                        }),
                          (this.canvas = function () {
                            return e() && t.canvas;
                          });
                      })(),
                      s = e.onRuntimeInitialized;
                    e.onRuntimeInitialized = function () {
                      function n(e) {
                        switch (e) {
                          case p.srcOver:
                            return "source-over";
                          case p.screen:
                            return "screen";
                          case p.overlay:
                            return "overlay";
                          case p.darken:
                            return "darken";
                          case p.lighten:
                            return "lighten";
                          case p.colorDodge:
                            return "color-dodge";
                          case p.colorBurn:
                            return "color-burn";
                          case p.hardLight:
                            return "hard-light";
                          case p.softLight:
                            return "soft-light";
                          case p.difference:
                            return "difference";
                          case p.exclusion:
                            return "exclusion";
                          case p.multiply:
                            return "multiply";
                          case p.hue:
                            return "hue";
                          case p.saturation:
                            return "saturation";
                          case p.color:
                            return "color";
                          case p.luminosity:
                            return "luminosity";
                        }
                      }
                      function r(e) {
                        return (
                          "rgba(" +
                          ((16711680 & e) >>> 16) +
                          "," +
                          ((65280 & e) >>> 8) +
                          "," +
                          ((255 & e) >>> 0) +
                          "," +
                          ((4278190080 & e) >>> 24) / 255 +
                          ")"
                        );
                      }
                      function i() {
                        for (let e of (0 < R.length &&
                          (o.Vb(C.drawWidth(), C.drawHeight(), R, T, E),
                          (R = []),
                          (E = T = 0),
                          C.reset(512, 512)),
                        A)) {
                          for (let t of e.J) t();
                          e.J = [];
                        }
                        A.clear();
                      }
                      s && s();
                      var u = e.RenderPaintStyle;
                      let c = e.RenderPath,
                        l = e.RenderPaint,
                        h = e.Renderer,
                        f = e.StrokeCap,
                        d = e.StrokeJoin,
                        p = e.BlendMode,
                        m = u.fill,
                        v = u.stroke,
                        g = e.FillRule.evenOdd,
                        b = 1;
                      var y = e.RenderImage.extend("CanvasRenderImage", {
                          __construct: function ({ la: e, ya: t } = {}) {
                            this.__parent.__construct.call(this),
                              (this.Ka = b),
                              (b = (b + 1) & 2147483647 || 1),
                              (this.la = e),
                              (this.ya = t);
                          },
                          __destruct: function () {
                            this.Ja &&
                              (o.Qb(this.Ja), URL.revokeObjectURL(this.Xa)),
                              this.__parent.__destruct.call(this);
                          },
                          decode: function (e) {
                            var t = this;
                            t.ya && t.ya(t);
                            var n = new Image();
                            (t.Xa = URL.createObjectURL(
                              new Blob([e], { type: "image/png" })
                            )),
                              (n.onload = function () {
                                (t.Gb = n),
                                  (t.Ja = o.Ob(n)),
                                  t.size(n.width, n.height),
                                  t.la && t.la(t);
                              }),
                              (n.src = t.Xa);
                          },
                        }),
                        w = c.extend("CanvasRenderPath", {
                          __construct: function () {
                            this.__parent.__construct.call(this),
                              (this.U = new Path2D());
                          },
                          rewind: function () {
                            this.U = new Path2D();
                          },
                          addPath: function (e, t, n, r, i, a, o) {
                            var s = this.U,
                              u = s.addPath;
                            e = e.U;
                            let c = new DOMMatrix();
                            (c.a = t),
                              (c.b = n),
                              (c.c = r),
                              (c.d = i),
                              (c.e = a),
                              (c.f = o),
                              u.call(s, e, c);
                          },
                          fillRule: function (e) {
                            this.Wa = e;
                          },
                          moveTo: function (e, t) {
                            this.U.moveTo(e, t);
                          },
                          lineTo: function (e, t) {
                            this.U.lineTo(e, t);
                          },
                          cubicTo: function (e, t, n, r, i, a) {
                            this.U.bezierCurveTo(e, t, n, r, i, a);
                          },
                          close: function () {
                            this.U.closePath();
                          },
                        }),
                        _ = l.extend("CanvasRenderPaint", {
                          color: function (e) {
                            this.Ya = r(e);
                          },
                          thickness: function (e) {
                            this.Jb = e;
                          },
                          join: function (e) {
                            switch (e) {
                              case d.miter:
                                this.Ia = "miter";
                                break;
                              case d.round:
                                this.Ia = "round";
                                break;
                              case d.bevel:
                                this.Ia = "bevel";
                            }
                          },
                          cap: function (e) {
                            switch (e) {
                              case f.butt:
                                this.Ha = "butt";
                                break;
                              case f.round:
                                this.Ha = "round";
                                break;
                              case f.square:
                                this.Ha = "square";
                            }
                          },
                          style: function (e) {
                            this.Ib = e;
                          },
                          blendMode: function (e) {
                            this.Fb = n(e);
                          },
                          clearGradient: function () {
                            this.ja = null;
                          },
                          linearGradient: function (e, t, n, r) {
                            this.ja = { zb: e, Ab: t, cb: n, eb: r, Sa: [] };
                          },
                          radialGradient: function (e, t, n, r) {
                            this.ja = {
                              zb: e,
                              Ab: t,
                              cb: n,
                              eb: r,
                              Sa: [],
                              lc: !0,
                            };
                          },
                          addStop: function (e, t) {
                            this.ja.Sa.push({ color: e, stop: t });
                          },
                          completeGradient: function () {},
                          draw: function (e, t, n) {
                            let i = this.Ib;
                            var a = this.Ya,
                              o = this.ja;
                            if (
                              ((e.globalCompositeOperation = this.Fb),
                              null != o)
                            ) {
                              a = o.zb;
                              var s = o.Ab;
                              let t = o.cb;
                              var u = o.eb;
                              let n = o.Sa;
                              o.lc
                                ? ((o = t - a),
                                  (u -= s),
                                  (a = e.createRadialGradient(
                                    a,
                                    s,
                                    0,
                                    a,
                                    s,
                                    Math.sqrt(o * o + u * u)
                                  )))
                                : (a = e.createLinearGradient(a, s, t, u));
                              for (let e = 0, t = n.length; e < t; e++)
                                (s = n[e]), a.addColorStop(s.stop, r(s.color));
                              (this.Ya = a), (this.ja = null);
                            }
                            switch (i) {
                              case v:
                                (e.strokeStyle = a),
                                  (e.lineWidth = this.Jb),
                                  (e.lineCap = this.Ha),
                                  (e.lineJoin = this.Ia),
                                  e.stroke(t);
                                break;
                              case m:
                                (e.fillStyle = a), e.fill(t, n);
                            }
                          },
                        });
                      let A = new Set(),
                        C = null,
                        R = [],
                        T = 0,
                        E = 0;
                      var P = (e.CanvasRenderer = h.extend("Renderer", {
                        __construct: function (e) {
                          this.__parent.__construct.call(this),
                            (this.T = [1, 0, 0, 1, 0, 0]),
                            (this.C = e.getContext("2d")),
                            (this.Va = e),
                            (this.J = []);
                        },
                        save: function () {
                          this.T.push(...this.T.slice(this.T.length - 6)),
                            this.J.push(this.C.save.bind(this.C));
                        },
                        restore: function () {
                          let e = this.T.length - 6;
                          if (6 > e)
                            throw "restore() called without matching save().";
                          this.T.splice(e),
                            this.J.push(this.C.restore.bind(this.C));
                        },
                        transform: function (e, t, n, r, i, a) {
                          let o = this.T,
                            s = o.length - 6;
                          o.splice(
                            s,
                            6,
                            o[s] * e + o[s + 2] * t,
                            o[s + 1] * e + o[s + 3] * t,
                            o[s] * n + o[s + 2] * r,
                            o[s + 1] * n + o[s + 3] * r,
                            o[s] * i + o[s + 2] * a + o[s + 4],
                            o[s + 1] * i + o[s + 3] * a + o[s + 5]
                          ),
                            this.J.push(
                              this.C.transform.bind(this.C, e, t, n, r, i, a)
                            );
                        },
                        rotate: function (e) {
                          let t = Math.sin(e);
                          (e = Math.cos(e)), this.transform(e, t, -t, e, 0, 0);
                        },
                        _drawPath: function (e, t) {
                          this.J.push(
                            t.draw.bind(
                              t,
                              this.C,
                              e.U,
                              e.Wa === g ? "evenodd" : "nonzero"
                            )
                          );
                        },
                        _drawRiveImage: function (e, t, r) {
                          var i = e.Gb;
                          if (i) {
                            var a = this.C,
                              o = n(t);
                            this.J.push(function () {
                              (a.globalCompositeOperation = o),
                                (a.globalAlpha = r),
                                a.drawImage(i, 0, 0),
                                (a.globalAlpha = 1);
                            });
                          }
                        },
                        _getMatrix: function (e) {
                          let t = this.T,
                            n = t.length - 6;
                          for (let r = 0; 6 > r; ++r) e[r] = t[n + r];
                        },
                        _drawImageMesh: function (
                          t,
                          r,
                          a,
                          s,
                          u,
                          c,
                          l,
                          h,
                          f,
                          d
                        ) {
                          var p = this.C.canvas.width,
                            m = this.C.canvas.height;
                          let v = f - l,
                            g = d - h;
                          (l = Math.max(l, 0)), (h = Math.max(h, 0));
                          let b = (f = Math.min(f, p)) - l,
                            y = (d = Math.min(d, m)) - h;
                          if (
                            (console.assert(b <= Math.min(v, p)),
                            console.assert(y <= Math.min(g, m)),
                            !(0 >= b || 0 >= y))
                          ) {
                            (f = b < v || y < g), (p = d = 1);
                            var w = Math.ceil(b * d),
                              _ = Math.ceil(y * p);
                            (m = o.nc()),
                              w > m && ((d *= m / w), (w = m)),
                              _ > m && ((p *= m / _), (_ = m)),
                              C ||
                                (C = new e.DynamicRectanizer(m)).reset(
                                  512,
                                  512
                                ),
                              0 > (m = C.addRect(w, _)) &&
                                (i(),
                                A.add(this),
                                console.assert(0 <= (m = C.addRect(w, _))));
                            var P = 65535 & m,
                              M = m >> 16;
                            R.push({
                              ha: this.T.slice(this.T.length - 6),
                              image: t,
                              Za: P,
                              $a: M,
                              oc: l,
                              pc: h,
                              Ic: w,
                              jb: _,
                              Ba: d,
                              Ca: p,
                              Ua: new Float32Array(s),
                              Eb: new Float32Array(u),
                              indices: new Uint16Array(c),
                              tc: f,
                              xb: (t.Ka << 1) | (f ? 1 : 0),
                            }),
                              (T += s.length),
                              (E += c.length);
                            var L = this.C,
                              F = n(r);
                            this.J.push(function () {
                              L.save(),
                                L.resetTransform(),
                                (L.globalCompositeOperation = F),
                                (L.globalAlpha = a);
                              let e = o.canvas();
                              e && L.drawImage(e, P, M, w, _, l, h, b, y),
                                L.restore();
                            });
                          }
                        },
                        _clipPath: function (e) {
                          this.J.push(
                            this.C.clip.bind(
                              this.C,
                              e.U,
                              e.Wa === g ? "evenodd" : "nonzero"
                            )
                          );
                        },
                        clear: function () {
                          A.add(this),
                            this.J.push(
                              this.C.clearRect.bind(
                                this.C,
                                0,
                                0,
                                this.Va.width,
                                this.Va.height
                              )
                            );
                        },
                        flush: function () {},
                        translate: function (e, t) {
                          this.transform(1, 0, 0, 1, e, t);
                        },
                      }));
                      (e.makeRenderer = function (e) {
                        let t = new P(e),
                          n = t.C;
                        return new Proxy(t, {
                          get(e, r) {
                            if ("function" == typeof e[r])
                              return function (...t) {
                                return e[r].apply(e, t);
                              };
                            if ("function" == typeof n[r]) {
                              if (-1 < a.indexOf(r))
                                throw Error(
                                  "RiveException: Method call to '" +
                                    r +
                                    "()' is not allowed, as the renderer cannot immediately pass through the return                 values of any canvas 2d context methods."
                                );
                              return function (...e) {
                                t.J.push(n[r].bind(n, ...e));
                              };
                            }
                            return e[r];
                          },
                          set(e, t, r) {
                            if (t in n) return (n[t] = r), !0;
                          },
                        });
                      }),
                        (e.decodeImage = function (e, t) {
                          new y({ la: t }).decode(e);
                        }),
                        (e.renderFactory = {
                          makeRenderPaint: function () {
                            return new _();
                          },
                          makeRenderPath: function () {
                            return new w();
                          },
                          makeRenderImage: function () {
                            let e = L;
                            return new y({
                              ya: () => {
                                e.total++;
                              },
                              la: () => {
                                if ((e.loaded++, e.loaded === e.total)) {
                                  let t = e.ready;
                                  t && (t(), (e.ready = null));
                                }
                              },
                            });
                          },
                        });
                      let M = e.load,
                        L = null;
                      (e.load = function (t, n, r = !0) {
                        let i = new e.FallbackFileAssetLoader();
                        return (
                          void 0 !== n && i.addLoader(n),
                          r &&
                            ((n = new e.CDNFileAssetLoader()), i.addLoader(n)),
                          new Promise(function (e) {
                            let n = null;
                            (L = {
                              total: 0,
                              loaded: 0,
                              ready: function () {
                                e(n);
                              },
                            }),
                              (n = M(t, i)),
                              0 == L.total && e(n);
                          })
                        );
                      }),
                        (u = new t()),
                        (e.requestAnimationFrame =
                          u.requestAnimationFrame.bind(u)),
                        (e.cancelAnimationFrame =
                          u.cancelAnimationFrame.bind(u)),
                        (e.enableFPSCounter = u.Wb.bind(u)),
                        (e.disableFPSCounter = u.Tb),
                        (u.pb = i),
                        (e.resolveAnimationFrame = i),
                        (e.cleanup = function () {
                          C && C.delete();
                        });
                    };
                    var u,
                      c,
                      l,
                      h,
                      f,
                      d,
                      p,
                      m,
                      v,
                      g = Object.assign({}, e),
                      b = "./this.program",
                      y = "object" == typeof window,
                      w = "function" == typeof importScripts,
                      _ = "";
                    (y || w) &&
                      (w
                        ? (_ = self.location.href)
                        : "undefined" != typeof document &&
                          document.currentScript &&
                          (_ = document.currentScript.src),
                      r && (_ = r),
                      (_ =
                        0 !== _.indexOf("blob:")
                          ? _.substr(
                              0,
                              _.replace(/[?#].*/, "").lastIndexOf("/") + 1
                            )
                          : ""),
                      w &&
                        (v = (e) => {
                          var t = new XMLHttpRequest();
                          return (
                            t.open("GET", e, !1),
                            (t.responseType = "arraybuffer"),
                            t.send(null),
                            new Uint8Array(t.response)
                          );
                        }),
                      (m = (e, t, n) => {
                        var r = new XMLHttpRequest();
                        r.open("GET", e, !0),
                          (r.responseType = "arraybuffer"),
                          (r.onload = () => {
                            200 == r.status || (0 == r.status && r.response)
                              ? t(r.response)
                              : n();
                          }),
                          (r.onerror = n),
                          r.send(null);
                      }));
                    var A = e.print || console.log.bind(console),
                      C = e.printErr || console.error.bind(console);
                    Object.assign(e, g),
                      (g = null),
                      e.thisProgram && (b = e.thisProgram),
                      e.wasmBinary && (R = e.wasmBinary),
                      e.noExitRuntime,
                      "object" != typeof WebAssembly &&
                        X("no native wasm support detected");
                    var R,
                      T,
                      E,
                      P,
                      M,
                      L,
                      F,
                      j,
                      S,
                      x,
                      k,
                      O = !1;
                    function I() {
                      var t = T.buffer;
                      (e.HEAP8 = P = new Int8Array(t)),
                        (e.HEAP16 = L = new Int16Array(t)),
                        (e.HEAP32 = j = new Int32Array(t)),
                        (e.HEAPU8 = M = new Uint8Array(t)),
                        (e.HEAPU16 = F = new Uint16Array(t)),
                        (e.HEAPU32 = S = new Uint32Array(t)),
                        (e.HEAPF32 = x = new Float32Array(t)),
                        (e.HEAPF64 = k = new Float64Array(t));
                    }
                    var D,
                      U = [],
                      B = [],
                      $ = [],
                      W = 0,
                      N = null,
                      Y = null;
                    function X(t) {
                      throw (
                        (e.onAbort && e.onAbort(t),
                        C((t = "Aborted(" + t + ")")),
                        (O = !0),
                        (t = new WebAssembly.RuntimeError(
                          t + ". Build with -sASSERTIONS for more info."
                        )),
                        p(t),
                        t)
                      );
                    }
                    function H(e) {
                      return e.startsWith(
                        "data:application/octet-stream;base64,"
                      );
                    }
                    if (!H((q = "canvas_advanced.wasm"))) {
                      var G = q;
                      q = e.locateFile ? e.locateFile(G, _) : _ + G;
                    }
                    function z(e) {
                      if (e == q && R) return new Uint8Array(R);
                      if (v) return v(e);
                      throw "both async and sync fetching of the wasm failed";
                    }
                    function V(e, t, n) {
                      return (function (e) {
                        if (!R && (y || w)) {
                          if (
                            "function" == typeof fetch &&
                            !e.startsWith("file://")
                          )
                            return fetch(e, { credentials: "same-origin" })
                              .then((t) => {
                                if (!t.ok)
                                  throw (
                                    "failed to load wasm binary file at '" +
                                    e +
                                    "'"
                                  );
                                return t.arrayBuffer();
                              })
                              .catch(() => z(e));
                          if (m)
                            return new Promise((t, n) => {
                              m(e, (e) => t(new Uint8Array(e)), n);
                            });
                        }
                        return Promise.resolve().then(() => z(e));
                      })(e)
                        .then((e) => WebAssembly.instantiate(e, t))
                        .then((e) => e)
                        .then(n, (e) => {
                          C("failed to asynchronously prepare wasm: " + e),
                            X(e);
                        });
                    }
                    var q,
                      J,
                      K,
                      Q = {
                        433268: (e, t, n, r, i) => {
                          if (
                            "undefined" == typeof window ||
                            void 0 ===
                              (window.AudioContext || window.webkitAudioContext)
                          )
                            return 0;
                          if (void 0 === window.h) {
                            (window.h = { Aa: 0 }),
                              (window.h.H = {}),
                              (window.h.H.za = e),
                              (window.h.H.capture = t),
                              (window.h.H.La = n),
                              (window.h.ga = {}),
                              (window.h.ga.stopped = r),
                              (window.h.ga.yb = i);
                            let a = window.h;
                            (a.D = []),
                              (a.Gc = function (e) {
                                for (var t = 0; t < a.D.length; ++t)
                                  if (null == a.D[t]) return (a.D[t] = e), t;
                                return a.D.push(e), a.D.length - 1;
                              }),
                              (a.Db = function (e) {
                                for (a.D[e] = null; 0 < a.D.length; )
                                  if (null == a.D[a.D.length - 1]) a.D.pop();
                                  else break;
                              }),
                              (a.Sc = function (e) {
                                for (var t = 0; t < a.D.length; ++t)
                                  if (a.D[t] == e) return a.Db(t);
                              }),
                              (a.sa = function (e) {
                                return a.D[e];
                              }),
                              (a.Cb = ["touchend", "click"]),
                              (a.unlock = function () {
                                for (var e = 0; e < a.D.length; ++e) {
                                  var t = a.D[e];
                                  null != t &&
                                    null != t.I &&
                                    t.state === a.ga.yb &&
                                    t.I.resume().then(
                                      () => {
                                        nl(t.qb);
                                      },
                                      (e) => {
                                        console.error(
                                          "Failed to resume audiocontext",
                                          e
                                        );
                                      }
                                    );
                                }
                                a.Cb.map(function (e) {
                                  document.removeEventListener(e, a.unlock, !0);
                                });
                              }),
                              a.Cb.map(function (e) {
                                document.addEventListener(e, a.unlock, !0);
                              });
                          }
                          return (window.h.Aa += 1), 1;
                        },
                        435446: () => {
                          void 0 !== window.h &&
                            (--window.h.Aa,
                            0 === window.h.Aa && delete window.h);
                        },
                        435610: () =>
                          void 0 !== navigator.mediaDevices &&
                          void 0 !== navigator.mediaDevices.getUserMedia,
                        435714: () => {
                          try {
                            var e = new (window.AudioContext ||
                                window.webkitAudioContext)(),
                              t = e.sampleRate;
                            return e.close(), t;
                          } catch (e) {
                            return 0;
                          }
                        },
                        435885: (e, t, n, r, i, a) => {
                          if (void 0 === window.h) return -1;
                          var o = {},
                            s = {};
                          return (
                            e == window.h.H.za && 0 != n && (s.sampleRate = n),
                            (o.I = new (window.AudioContext ||
                              window.webkitAudioContext)(s)),
                            o.I.suspend(),
                            (o.state = window.h.ga.stopped),
                            (n = 0),
                            e != window.h.H.za && (n = t),
                            (o.$ = o.I.createScriptProcessor(r, n, t)),
                            (o.$.onaudioprocess = function (n) {
                              if (
                                ((null == o.ta || 0 == o.ta.length) &&
                                  (o.ta = new Float32Array(x.buffer, i, r * t)),
                                e == window.h.H.capture || e == window.h.H.La)
                              ) {
                                for (var s = 0; s < t; s += 1)
                                  for (
                                    var u = n.inputBuffer.getChannelData(s),
                                      c = o.ta,
                                      l = 0;
                                    l < r;
                                    l += 1
                                  )
                                    c[l * t + s] = u[l];
                                nh(a, r, i);
                              }
                              if (e == window.h.H.za || e == window.h.H.La)
                                for (
                                  nf(a, r, i), s = 0;
                                  s < n.outputBuffer.numberOfChannels;
                                  ++s
                                )
                                  for (
                                    u = n.outputBuffer.getChannelData(s),
                                      c = o.ta,
                                      l = 0;
                                    l < r;
                                    l += 1
                                  )
                                    u[l] = c[l * t + s];
                              else
                                for (
                                  s = 0;
                                  s < n.outputBuffer.numberOfChannels;
                                  ++s
                                )
                                  n.outputBuffer.getChannelData(s).fill(0);
                            }),
                            (e != window.h.H.capture && e != window.h.H.La) ||
                              navigator.mediaDevices
                                .getUserMedia({ audio: !0, video: !1 })
                                .then(function (e) {
                                  (o.Da = o.I.createMediaStreamSource(e)),
                                    o.Da.connect(o.$),
                                    o.$.connect(o.I.destination);
                                })
                                .catch(function (e) {
                                  console.log("Failed to get user media: " + e);
                                }),
                            e == window.h.H.za && o.$.connect(o.I.destination),
                            (o.qb = a),
                            window.h.Gc(o)
                          );
                        },
                        438762: (e) => window.h.sa(e).I.sampleRate,
                        438835: (e) => {
                          void 0 !== (e = window.h.sa(e)).$ &&
                            ((e.$.onaudioprocess = function () {}),
                            e.$.disconnect(),
                            (e.$ = void 0)),
                            void 0 !== e.Da &&
                              (e.Da.disconnect(), (e.Da = void 0)),
                            e.I.close(),
                            (e.I = void 0),
                            (e.qb = void 0);
                        },
                        439235: (e) => {
                          window.h.Db(e);
                        },
                        439285: (e) => {
                          (e = window.h.sa(e)).I.resume(),
                            (e.state = window.h.ga.yb);
                        },
                        439424: (e) => {
                          (e = window.h.sa(e)).I.suspend(),
                            (e.state = window.h.ga.stopped);
                        },
                      },
                      Z = (t) => {
                        for (; 0 < t.length; ) t.shift()(e);
                      },
                      ee = (e, t) => {
                        for (var n = 0, r = e.length - 1; 0 <= r; r--) {
                          var i = e[r];
                          "." === i
                            ? e.splice(r, 1)
                            : ".." === i
                            ? (e.splice(r, 1), n++)
                            : n && (e.splice(r, 1), n--);
                        }
                        if (t) for (; n; n--) e.unshift("..");
                        return e;
                      },
                      et = (e) => {
                        var t = "/" === e.charAt(0),
                          n = "/" === e.substr(-1);
                        return (
                          (e = ee(
                            e.split("/").filter((e) => !!e),
                            !t
                          ).join("/")) ||
                            t ||
                            (e = "."),
                          e && n && (e += "/"),
                          (t ? "/" : "") + e
                        );
                      },
                      en = (e) => {
                        var t =
                          /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
                            .exec(e)
                            .slice(1);
                        return ((e = t[0]), (t = t[1]), e || t)
                          ? (t && (t = t.substr(0, t.length - 1)), e + t)
                          : ".";
                      },
                      er = (e) => {
                        if ("/" === e) return "/";
                        var t = (e = (e = et(e)).replace(
                          /\/$/,
                          ""
                        )).lastIndexOf("/");
                        return -1 === t ? e : e.substr(t + 1);
                      },
                      ei = () => {
                        if (
                          "object" == typeof crypto &&
                          "function" == typeof crypto.getRandomValues
                        )
                          return (e) => crypto.getRandomValues(e);
                        X("initRandomDevice");
                      },
                      ea = (e) => (ea = ei())(e);
                    function eo() {
                      for (
                        var e = "", t = !1, n = arguments.length - 1;
                        -1 <= n && !t;
                        n--
                      ) {
                        if (
                          ((t = 0 <= n ? arguments[n] : "/"),
                          "string" != typeof t)
                        )
                          throw TypeError(
                            "Arguments to path.resolve must be strings"
                          );
                        if (!t) return "";
                        (e = t + "/" + e), (t = "/" === t.charAt(0));
                      }
                      return (
                        (e = ee(
                          e.split("/").filter((e) => !!e),
                          !t
                        ).join("/")),
                        (t ? "/" : "") + e || "."
                      );
                    }
                    var es =
                        "undefined" != typeof TextDecoder
                          ? new TextDecoder("utf8")
                          : void 0,
                      eu = (e, t, n) => {
                        var r = t + n;
                        for (n = t; e[n] && !(n >= r); ) ++n;
                        if (16 < n - t && e.buffer && es)
                          return es.decode(e.subarray(t, n));
                        for (r = ""; t < n; ) {
                          var i = e[t++];
                          if (128 & i) {
                            var a = 63 & e[t++];
                            if (192 == (224 & i))
                              r += String.fromCharCode(((31 & i) << 6) | a);
                            else {
                              var o = 63 & e[t++];
                              65536 >
                              (i =
                                224 == (240 & i)
                                  ? ((15 & i) << 12) | (a << 6) | o
                                  : ((7 & i) << 18) |
                                    (a << 12) |
                                    (o << 6) |
                                    (63 & e[t++]))
                                ? (r += String.fromCharCode(i))
                                : ((i -= 65536),
                                  (r += String.fromCharCode(
                                    55296 | (i >> 10),
                                    56320 | (1023 & i)
                                  )));
                            }
                          } else r += String.fromCharCode(i);
                        }
                        return r;
                      },
                      ec = [],
                      el = (e) => {
                        for (var t = 0, n = 0; n < e.length; ++n) {
                          var r = e.charCodeAt(n);
                          127 >= r
                            ? t++
                            : 2047 >= r
                            ? (t += 2)
                            : 55296 <= r && 57343 >= r
                            ? ((t += 4), ++n)
                            : (t += 3);
                        }
                        return t;
                      },
                      eh = (e, t, n, r) => {
                        if (!(0 < r)) return 0;
                        var i = n;
                        r = n + r - 1;
                        for (var a = 0; a < e.length; ++a) {
                          var o = e.charCodeAt(a);
                          if (
                            (55296 <= o &&
                              57343 >= o &&
                              (o =
                                (65536 + ((1023 & o) << 10)) |
                                (1023 & e.charCodeAt(++a))),
                            127 >= o)
                          ) {
                            if (n >= r) break;
                            t[n++] = o;
                          } else {
                            if (2047 >= o) {
                              if (n + 1 >= r) break;
                              t[n++] = 192 | (o >> 6);
                            } else {
                              if (65535 >= o) {
                                if (n + 2 >= r) break;
                                t[n++] = 224 | (o >> 12);
                              } else {
                                if (n + 3 >= r) break;
                                (t[n++] = 240 | (o >> 18)),
                                  (t[n++] = 128 | ((o >> 12) & 63));
                              }
                              t[n++] = 128 | ((o >> 6) & 63);
                            }
                            t[n++] = 128 | (63 & o);
                          }
                        }
                        return (t[n] = 0), n - i;
                      };
                    function ef(e, t) {
                      var n = Array(el(e) + 1);
                      return (
                        (e = eh(e, n, 0, n.length)), t && (n.length = e), n
                      );
                    }
                    var ed = [];
                    function ep(e, t) {
                      (ed[e] = { input: [], F: [], W: t }), eN(e, em);
                    }
                    var em = {
                      open: function (e) {
                        var t = ed[e.node.ma];
                        if (!t) throw new eM(43);
                        (e.s = t), (e.seekable = !1);
                      },
                      close: function (e) {
                        e.s.W.ra(e.s);
                      },
                      ra: function (e) {
                        e.s.W.ra(e.s);
                      },
                      read: function (e, t, n, r) {
                        if (!e.s || !e.s.W.ib) throw new eM(60);
                        for (var i = 0, a = 0; a < r; a++) {
                          try {
                            var o = e.s.W.ib(e.s);
                          } catch (e) {
                            throw new eM(29);
                          }
                          if (void 0 === o && 0 === i) throw new eM(6);
                          if (null == o) break;
                          i++, (t[n + a] = o);
                        }
                        return i && (e.node.timestamp = Date.now()), i;
                      },
                      write: function (e, t, n, r) {
                        if (!e.s || !e.s.W.Pa) throw new eM(60);
                        try {
                          for (var i = 0; i < r; i++) e.s.W.Pa(e.s, t[n + i]);
                        } catch (e) {
                          throw new eM(29);
                        }
                        return r && (e.node.timestamp = Date.now()), i;
                      },
                    };
                    function ev(e, t) {
                      var n = e.l ? e.l.length : 0;
                      n >= t ||
                        ((t = Math.max(
                          t,
                          (n * (1048576 > n ? 2 : 1.125)) >>> 0
                        )),
                        0 != n && (t = Math.max(t, 256)),
                        (n = e.l),
                        (e.l = new Uint8Array(t)),
                        0 < e.v && e.l.set(n.subarray(0, e.v), 0));
                    }
                    var eg,
                      eb,
                      ey,
                      ew,
                      e_ = {
                        P: null,
                        V: () => e_.createNode(null, "/", 16895, 0),
                        createNode(e, t, n, r) {
                          if (24576 == (61440 & n) || 4096 == (61440 & n))
                            throw new eM(63);
                          return (
                            e_.P ||
                              (e_.P = {
                                dir: {
                                  node: {
                                    N: e_.j.N,
                                    R: e_.j.R,
                                    ka: e_.j.ka,
                                    wa: e_.j.wa,
                                    vb: e_.j.vb,
                                    Bb: e_.j.Bb,
                                    wb: e_.j.wb,
                                    tb: e_.j.tb,
                                    Ea: e_.j.Ea,
                                  },
                                  stream: { ba: e_.m.ba },
                                },
                                file: {
                                  node: { N: e_.j.N, R: e_.j.R },
                                  stream: {
                                    ba: e_.m.ba,
                                    read: e_.m.read,
                                    write: e_.m.write,
                                    qa: e_.m.qa,
                                    mb: e_.m.mb,
                                    ob: e_.m.ob,
                                  },
                                },
                                link: {
                                  node: { N: e_.j.N, R: e_.j.R, na: e_.j.na },
                                  stream: {},
                                },
                                ab: {
                                  node: { N: e_.j.N, R: e_.j.R },
                                  stream: eW,
                                },
                              }),
                            16384 == (61440 & (n = ek(e, t, n, r)).mode)
                              ? ((n.j = e_.P.dir.node),
                                (n.m = e_.P.dir.stream),
                                (n.l = {}))
                              : 32768 == (61440 & n.mode)
                              ? ((n.j = e_.P.file.node),
                                (n.m = e_.P.file.stream),
                                (n.v = 0),
                                (n.l = null))
                              : 40960 == (61440 & n.mode)
                              ? ((n.j = e_.P.link.node),
                                (n.m = e_.P.link.stream))
                              : 8192 == (61440 & n.mode) &&
                                ((n.j = e_.P.ab.node), (n.m = e_.P.ab.stream)),
                            (n.timestamp = Date.now()),
                            e && ((e.l[t] = n), (e.timestamp = n.timestamp)),
                            n
                          );
                        },
                        Oc: (e) =>
                          e.l
                            ? e.l.subarray
                              ? e.l.subarray(0, e.v)
                              : new Uint8Array(e.l)
                            : new Uint8Array(0),
                        j: {
                          N(e) {
                            var t = {};
                            return (
                              (t.Sb = 8192 == (61440 & e.mode) ? e.id : 1),
                              (t.kb = e.id),
                              (t.mode = e.mode),
                              (t.uc = 1),
                              (t.uid = 0),
                              (t.dc = 0),
                              (t.ma = e.ma),
                              16384 == (61440 & e.mode)
                                ? (t.size = 4096)
                                : 32768 == (61440 & e.mode)
                                ? (t.size = e.v)
                                : 40960 == (61440 & e.mode)
                                ? (t.size = e.link.length)
                                : (t.size = 0),
                              (t.Kb = new Date(e.timestamp)),
                              (t.rc = new Date(e.timestamp)),
                              (t.Pb = new Date(e.timestamp)),
                              (t.Lb = 4096),
                              (t.Mb = Math.ceil(t.size / t.Lb)),
                              t
                            );
                          },
                          R(e, t) {
                            if (
                              (void 0 !== t.mode && (e.mode = t.mode),
                              void 0 !== t.timestamp &&
                                (e.timestamp = t.timestamp),
                              void 0 !== t.size && ((t = t.size), e.v != t))
                            ) {
                              if (0 == t) (e.l = null), (e.v = 0);
                              else {
                                var n = e.l;
                                (e.l = new Uint8Array(t)),
                                  n && e.l.set(n.subarray(0, Math.min(t, e.v))),
                                  (e.v = t);
                              }
                            }
                          },
                          ka() {
                            throw eL[44];
                          },
                          wa: (e, t, n, r) => e_.createNode(e, t, n, r),
                          vb(e, t, n) {
                            if (16384 == (61440 & e.mode)) {
                              try {
                                var r = ex(t, n);
                              } catch (e) {}
                              if (r) for (var i in r.l) throw new eM(55);
                            }
                            delete e.parent.l[e.name],
                              (e.parent.timestamp = Date.now()),
                              (e.name = n),
                              (t.l[n] = e),
                              (t.timestamp = e.parent.timestamp),
                              (e.parent = t);
                          },
                          Bb(e, t) {
                            delete e.l[t], (e.timestamp = Date.now());
                          },
                          wb(e, t) {
                            var n,
                              r = ex(e, t);
                            for (n in r.l) throw new eM(55);
                            delete e.l[t], (e.timestamp = Date.now());
                          },
                          tb(e) {
                            var t,
                              n = [".", ".."];
                            for (t in e.l) e.l.hasOwnProperty(t) && n.push(t);
                            return n;
                          },
                          Ea: (e, t, n) => (
                            ((e = e_.createNode(e, t, 41471, 0)).link = n), e
                          ),
                          na(e) {
                            if (40960 != (61440 & e.mode)) throw new eM(28);
                            return e.link;
                          },
                        },
                        m: {
                          read(e, t, n, r, i) {
                            var a = e.node.l;
                            if (i >= e.node.v) return 0;
                            if (
                              8 < (e = Math.min(e.node.v - i, r)) &&
                              a.subarray
                            )
                              t.set(a.subarray(i, i + e), n);
                            else for (r = 0; r < e; r++) t[n + r] = a[i + r];
                            return e;
                          },
                          write(e, t, n, r, i, a) {
                            if ((t.buffer === P.buffer && (a = !1), !r))
                              return 0;
                            if (
                              (((e = e.node).timestamp = Date.now()),
                              t.subarray && (!e.l || e.l.subarray))
                            ) {
                              if (a)
                                return (e.l = t.subarray(n, n + r)), (e.v = r);
                              if (0 === e.v && 0 === i)
                                return (e.l = t.slice(n, n + r)), (e.v = r);
                              if (i + r <= e.v)
                                return e.l.set(t.subarray(n, n + r), i), r;
                            }
                            if ((ev(e, i + r), e.l.subarray && t.subarray))
                              e.l.set(t.subarray(n, n + r), i);
                            else for (a = 0; a < r; a++) e.l[i + a] = t[n + a];
                            return (e.v = Math.max(e.v, i + r)), r;
                          },
                          ba(e, t, n) {
                            if (
                              (1 === n
                                ? (t += e.position)
                                : 2 === n &&
                                  32768 == (61440 & e.node.mode) &&
                                  (t += e.node.v),
                              0 > t)
                            )
                              throw new eM(28);
                            return t;
                          },
                          qa(e, t, n) {
                            ev(e.node, t + n),
                              (e.node.v = Math.max(e.node.v, t + n));
                          },
                          mb(e, t, n, r, i) {
                            if (32768 != (61440 & e.node.mode))
                              throw new eM(43);
                            if (
                              ((e = e.node.l), 2 & i || e.buffer !== P.buffer)
                            )
                              throw (
                                ((0 < n || n + t < e.length) &&
                                  (e = e.subarray
                                    ? e.subarray(n, n + t)
                                    : Array.prototype.slice.call(e, n, n + t)),
                                (n = !0),
                                X(),
                                (t = void 0),
                                new eM(48))
                              );
                            return (n = !1), { o: (t = e.byteOffset), M: n };
                          },
                          ob: (e, t, n, r) => (
                            e_.m.write(e, t, 0, r, n, !1), 0
                          ),
                        },
                      },
                      eA = null,
                      eC = {},
                      eR = [],
                      eT = 1,
                      eE = null,
                      eP = !0,
                      eM = null,
                      eL = {},
                      eF = (e, t = {}) => {
                        if (!(e = eo(e))) return { path: "", node: null };
                        if (8 < (t = Object.assign({ gb: !0, Ra: 0 }, t)).Ra)
                          throw new eM(32);
                        e = e.split("/").filter((e) => !!e);
                        for (var n = eA, r = "/", i = 0; i < e.length; i++) {
                          var a = i === e.length - 1;
                          if (a && t.parent) break;
                          if (
                            ((n = ex(n, e[i])),
                            (r = et(r + "/" + e[i])),
                            n.xa && (!a || (a && t.gb)) && (n = n.xa.root),
                            !a || t.Ma)
                          ) {
                            for (a = 0; 40960 == (61440 & n.mode); )
                              if (
                                ((n = ez(r)),
                                (n = eF((r = eo(en(r), n)), {
                                  Ra: t.Ra + 1,
                                }).node),
                                40 < a++)
                              )
                                throw new eM(32);
                          }
                        }
                        return { path: r, node: n };
                      },
                      ej = (e) => {
                        for (var t; ; ) {
                          if (e === e.parent)
                            return (
                              (e = e.V.nb),
                              t
                                ? "/" !== e[e.length - 1]
                                  ? `${e}/${t}`
                                  : e + t
                                : e
                            );
                          (t = t ? `${e.name}/${t}` : e.name), (e = e.parent);
                        }
                      },
                      eS = (e, t) => {
                        for (var n = 0, r = 0; r < t.length; r++)
                          n = ((n << 5) - n + t.charCodeAt(r)) | 0;
                        return ((e + n) >>> 0) % eE.length;
                      },
                      ex = (e, t) => {
                        var n;
                        if ((n = (n = eI(e, "x")) ? n : e.j.ka ? 0 : 2))
                          throw new eM(n, e);
                        for (n = eE[eS(e.id, t)]; n; n = n.sc) {
                          var r = n.name;
                          if (n.parent.id === e.id && r === t) return n;
                        }
                        return e.j.ka(e, t);
                      },
                      ek = (e, t, n, r) => (
                        (t = eS((e = new ni(e, t, n, r)).parent.id, e.name)),
                        (e.sc = eE[t]),
                        (eE[t] = e)
                      ),
                      eO = (e) => {
                        var t = ["r", "w", "rw"][3 & e];
                        return 512 & e && (t += "w"), t;
                      },
                      eI = (e, t) =>
                        eP
                          ? 0
                          : t.includes("r") && !(292 & e.mode)
                          ? 2
                          : (t.includes("w") && !(146 & e.mode)) ||
                            (t.includes("x") && !(73 & e.mode))
                          ? 2
                          : 0,
                      eD = (e, t) => {
                        try {
                          return ex(e, t), 20;
                        } catch (e) {}
                        return eI(e, "wx");
                      },
                      eU = () => {
                        for (var e = 0; 4096 >= e; e++) if (!eR[e]) return e;
                        throw new eM(33);
                      },
                      eB = (e) => {
                        if (!(e = eR[e])) throw new eM(8);
                        return e;
                      },
                      e$ = (e, t = -1) => (
                        ey ||
                          (((ey = function () {
                            this.h = {};
                          }).prototype = {}),
                          Object.defineProperties(ey.prototype, {
                            object: {
                              get() {
                                return this.node;
                              },
                              set(e) {
                                this.node = e;
                              },
                            },
                            flags: {
                              get() {
                                return this.h.flags;
                              },
                              set(e) {
                                this.h.flags = e;
                              },
                            },
                            position: {
                              get() {
                                return this.h.position;
                              },
                              set(e) {
                                this.h.position = e;
                              },
                            },
                          })),
                        (e = Object.assign(new ey(), e)),
                        -1 == t && (t = eU()),
                        (e.Z = t),
                        (eR[t] = e)
                      ),
                      eW = {
                        open: (e) => {
                          (e.m = eC[e.node.ma].m), e.m.open && e.m.open(e);
                        },
                        ba: () => {
                          throw new eM(70);
                        },
                      },
                      eN = (e, t) => {
                        eC[e] = { m: t };
                      },
                      eY = (e, t) => {
                        var n = "/" === t,
                          r = !t;
                        if (n && eA) throw new eM(10);
                        if (!n && !r) {
                          var i = eF(t, { gb: !1 });
                          if (((t = i.path), (i = i.node).xa)) throw new eM(10);
                          if (16384 != (61440 & i.mode)) throw new eM(54);
                        }
                        (t = { type: e, Qc: {}, nb: t, qc: [] }),
                          ((e = e.V(t)).V = t),
                          (t.root = e),
                          n
                            ? (eA = e)
                            : i && ((i.xa = t), i.V && i.V.qc.push(t));
                      },
                      eX = (e, t, n) => {
                        var r = eF(e, { parent: !0 }).node;
                        if (!(e = er(e)) || "." === e || ".." === e)
                          throw new eM(28);
                        var i = eD(r, e);
                        if (i) throw new eM(i);
                        if (!r.j.wa) throw new eM(63);
                        return r.j.wa(r, e, t, n);
                      },
                      eH = (e, t, n) => {
                        void 0 === n && ((n = t), (t = 438)),
                          eX(e, 8192 | t, n);
                      },
                      eG = (e, t) => {
                        if (!eo(e)) throw new eM(44);
                        var n = eF(t, { parent: !0 }).node;
                        if (!n) throw new eM(44);
                        var r = eD(n, (t = er(t)));
                        if (r) throw new eM(r);
                        if (!n.j.Ea) throw new eM(63);
                        n.j.Ea(n, t, e);
                      },
                      ez = (e) => {
                        if (!(e = eF(e).node)) throw new eM(44);
                        if (!e.j.na) throw new eM(28);
                        return eo(ej(e.parent), e.j.na(e));
                      },
                      eV = (t, n, r) => {
                        if ("" === t) throw new eM(44);
                        if ("string" == typeof n) {
                          var i = {
                            r: 0,
                            "r+": 2,
                            w: 577,
                            "w+": 578,
                            a: 1089,
                            "a+": 1090,
                          }[n];
                          if (void 0 === i)
                            throw Error(`Unknown file open mode: ${n}`);
                          n = i;
                        }
                        if (
                          ((r =
                            64 & n
                              ? ((void 0 === r ? 438 : r) & 4095) | 32768
                              : 0),
                          "object" == typeof t)
                        )
                          var a = t;
                        else {
                          t = et(t);
                          try {
                            a = eF(t, { Ma: !(131072 & n) }).node;
                          } catch (e) {}
                        }
                        if (((i = !1), 64 & n)) {
                          if (a) {
                            if (128 & n) throw new eM(20);
                          } else (a = eX(t, r, 0)), (i = !0);
                        }
                        if (!a) throw new eM(44);
                        if (
                          (8192 == (61440 & a.mode) && (n &= -513),
                          65536 & n && 16384 != (61440 & a.mode))
                        )
                          throw new eM(54);
                        if (
                          !i &&
                          (r = a
                            ? 40960 == (61440 & a.mode)
                              ? 32
                              : 16384 == (61440 & a.mode) &&
                                ("r" !== eO(n) || 512 & n)
                              ? 31
                              : eI(a, eO(n))
                            : 44)
                        )
                          throw new eM(r);
                        if (512 & n && !i) {
                          if (
                            !(r =
                              "string" == typeof (r = a)
                                ? eF(r, { Ma: !0 }).node
                                : r).j.R
                          )
                            throw new eM(63);
                          if (16384 == (61440 & r.mode)) throw new eM(31);
                          if (32768 != (61440 & r.mode)) throw new eM(28);
                          if ((i = eI(r, "w"))) throw new eM(i);
                          r.j.R(r, { size: 0, timestamp: Date.now() });
                        }
                        return (
                          (n &= -131713),
                          (a = e$({
                            node: a,
                            path: ej(a),
                            flags: n,
                            seekable: !0,
                            position: 0,
                            m: a.m,
                            Hc: [],
                            error: !1,
                          })).m.open && a.m.open(a),
                          !e.logReadFiles ||
                            1 & n ||
                            (ew || (ew = {}), t in ew || (ew[t] = 1)),
                          a
                        );
                      },
                      eq = (e, t, n) => {
                        if (null === e.Z) throw new eM(8);
                        if (!e.seekable || !e.m.ba) throw new eM(70);
                        if (0 != n && 1 != n && 2 != n) throw new eM(28);
                        (e.position = e.m.ba(e, t, n)), (e.Hc = []);
                      },
                      eJ = () => {
                        eM ||
                          (((eM = function (e, t) {
                            (this.name = "ErrnoError"),
                              (this.node = t),
                              (this.xc = function (e) {
                                this.Y = e;
                              }),
                              this.xc(e),
                              (this.message = "FS error");
                          }).prototype = Error()),
                          (eM.prototype.constructor = eM),
                          [44].forEach((e) => {
                            (eL[e] = new eM(e)),
                              (eL[e].stack = "<generic error, no stack>");
                          }));
                      },
                      eK = (e, t, n) => {
                        e = et("/dev/" + e);
                        var r,
                          i = ((r = 0), t && (r |= 365), n && (r |= 146), r);
                        eb || (eb = 64);
                        var a = (eb++ << 8) | 0;
                        eN(a, {
                          open: (e) => {
                            e.seekable = !1;
                          },
                          close: () => {
                            n && n.buffer && n.buffer.length && n(10);
                          },
                          read: (e, n, r, i) => {
                            for (var a = 0, o = 0; o < i; o++) {
                              try {
                                var s = t();
                              } catch (e) {
                                throw new eM(29);
                              }
                              if (void 0 === s && 0 === a) throw new eM(6);
                              if (null == s) break;
                              a++, (n[r + o] = s);
                            }
                            return a && (e.node.timestamp = Date.now()), a;
                          },
                          write: (e, t, r, i) => {
                            for (var a = 0; a < i; a++)
                              try {
                                n(t[r + a]);
                              } catch (e) {
                                throw new eM(29);
                              }
                            return i && (e.node.timestamp = Date.now()), a;
                          },
                        }),
                          eH(e, i, a);
                      },
                      eQ = {},
                      eZ = void 0;
                    function e0() {
                      return j[((eZ += 4) - 4) >> 2];
                    }
                    function e1(e) {
                      if (void 0 === e) return "_unknown";
                      var t = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(
                        0
                      );
                      return 48 <= t && 57 >= t ? `_${e}` : e;
                    }
                    function e2(e, t) {
                      return {
                        [(e = e1(e))]: function () {
                          return t.apply(this, arguments);
                        },
                      }[e];
                    }
                    function e4() {
                      (this.M = [void 0]), (this.hb = []);
                    }
                    var e6 = new e4(),
                      e3 = void 0;
                    function e5(e) {
                      throw new e3(e);
                    }
                    var e8 = (e) => (
                        e || e5("Cannot use deleted val. handle = " + e),
                        e6.get(e).value
                      ),
                      e9 = (e) => {
                        switch (e) {
                          case void 0:
                            return 1;
                          case null:
                            return 2;
                          case !0:
                            return 3;
                          case !1:
                            return 4;
                          default:
                            return e6.qa({ ub: 1, value: e });
                        }
                      };
                    function e7(e) {
                      var t = Error,
                        n = e2(e, function (t) {
                          (this.name = e),
                            (this.message = t),
                            void 0 !== (t = Error(t).stack) &&
                              (this.stack =
                                this.toString() +
                                "\n" +
                                t.replace(/^Error(:[^\n]*)?\n/, ""));
                        });
                      return (
                        (n.prototype = Object.create(t.prototype)),
                        (n.prototype.constructor = n),
                        (n.prototype.toString = function () {
                          return void 0 === this.message
                            ? this.name
                            : `${this.name}: ${this.message}`;
                        }),
                        n
                      );
                    }
                    var te = void 0,
                      tt = void 0;
                    function tn(e) {
                      for (var t = ""; M[e]; ) t += tt[M[e++]];
                      return t;
                    }
                    var tr = [];
                    function ti() {
                      for (; tr.length; ) {
                        var e = tr.pop();
                        (e.g.fa = !1), e.delete();
                      }
                    }
                    var ta = void 0,
                      to = {};
                    function ts(e, t) {
                      for (
                        void 0 === t && e5("ptr should not be undefined");
                        e.A;

                      )
                        (t = e.oa(t)), (e = e.A);
                      return t;
                    }
                    var tu = {};
                    function tc(e) {
                      var t = tn((e = np(e)));
                      return nu(e), t;
                    }
                    function tl(e, t) {
                      var n = tu[e];
                      return (
                        void 0 === n && e5(t + " has unknown type " + tc(e)), n
                      );
                    }
                    function th() {}
                    var tf = !1;
                    function td(e) {
                      --e.count.value,
                        0 === e.count.value &&
                          (e.G ? e.L.X(e.G) : e.u.i.X(e.o));
                    }
                    var tp = {},
                      tm = void 0;
                    function tv(e) {
                      throw new tm(e);
                    }
                    function tg(e, t) {
                      return (
                        (t.u && t.o) ||
                          tv("makeClassHandle requires ptr and ptrType"),
                        !!t.L != !!t.G &&
                          tv(
                            "Both smartPtrType and smartPtr must be specified"
                          ),
                        (t.count = { value: 1 }),
                        tb(Object.create(e, { g: { value: t } }))
                      );
                    }
                    function tb(e) {
                      return "undefined" == typeof FinalizationRegistry
                        ? ((tb = (e) => e), e)
                        : ((tf = new FinalizationRegistry((e) => {
                            td(e.g);
                          })),
                          (tb = (e) => {
                            var t = e.g;
                            return t.G && tf.register(e, { g: t }, e), e;
                          }),
                          (th = (e) => {
                            tf.unregister(e);
                          }),
                          tb(e));
                    }
                    var ty = {};
                    function tw(e) {
                      for (; e.length; ) {
                        var t = e.pop();
                        e.pop()(t);
                      }
                    }
                    function t_(e) {
                      return this.fromWireType(j[e >> 2]);
                    }
                    var tA = {},
                      tC = {};
                    function tR(e, t, n) {
                      function r(t) {
                        (t = n(t)).length !== e.length &&
                          tv("Mismatched type converter count");
                        for (var r = 0; r < e.length; ++r) tE(e[r], t[r]);
                      }
                      e.forEach(function (e) {
                        tC[e] = t;
                      });
                      var i = Array(t.length),
                        a = [],
                        o = 0;
                      t.forEach((e, t) => {
                        tu.hasOwnProperty(e)
                          ? (i[t] = tu[e])
                          : (a.push(e),
                            tA.hasOwnProperty(e) || (tA[e] = []),
                            tA[e].push(() => {
                              (i[t] = tu[e]), ++o === a.length && r(i);
                            }));
                      }),
                        0 === a.length && r(i);
                    }
                    function tT(e) {
                      switch (e) {
                        case 1:
                          return 0;
                        case 2:
                          return 1;
                        case 4:
                          return 2;
                        case 8:
                          return 3;
                        default:
                          throw TypeError(`Unknown type size: ${e}`);
                      }
                    }
                    function tE(e, t, n = {}) {
                      if (!("argPackAdvance" in t))
                        throw TypeError(
                          "registerType registeredInstance requires argPackAdvance"
                        );
                      !(function (e, t, n = {}) {
                        var r = t.name;
                        if (
                          (e ||
                            e5(
                              `type "${r}" must have a positive integer typeid pointer`
                            ),
                          tu.hasOwnProperty(e))
                        ) {
                          if (n.fc) return;
                          e5(`Cannot register type '${r}' twice`);
                        }
                        (tu[e] = t),
                          delete tC[e],
                          tA.hasOwnProperty(e) &&
                            ((t = tA[e]), delete tA[e], t.forEach((e) => e()));
                      })(e, t, n);
                    }
                    function tP(e) {
                      e5(e.g.u.i.name + " instance already deleted");
                    }
                    function tM() {}
                    function tL(e, t, n) {
                      if (void 0 === e[t].B) {
                        var r = e[t];
                        (e[t] = function () {
                          return (
                            e[t].B.hasOwnProperty(arguments.length) ||
                              e5(
                                `Function '${n}' called with an invalid number of arguments (${arguments.length}) - expects one of (${e[t].B})!`
                              ),
                            e[t].B[arguments.length].apply(this, arguments)
                          );
                        }),
                          (e[t].B = []),
                          (e[t].B[r.ea] = r);
                      }
                    }
                    function tF(t, n, r) {
                      e.hasOwnProperty(t)
                        ? ((void 0 === r ||
                            (void 0 !== e[t].B && void 0 !== e[t].B[r])) &&
                            e5(`Cannot register public name '${t}' twice`),
                          tL(e, t, t),
                          e.hasOwnProperty(r) &&
                            e5(
                              `Cannot register multiple overloads of a function with the same number of arguments (${r})!`
                            ),
                          (e[t].B[r] = n))
                        : ((e[t] = n), void 0 !== r && (e[t].Pc = r));
                    }
                    function tj(e, t, n, r, i, a, o, s) {
                      (this.name = e),
                        (this.constructor = t),
                        (this.O = n),
                        (this.X = r),
                        (this.A = i),
                        (this.Zb = a),
                        (this.oa = o),
                        (this.Ub = s),
                        (this.rb = []);
                    }
                    function tS(e, t, n) {
                      for (; t !== n; )
                        t.oa ||
                          e5(
                            `Expected null or instance of ${n.name}, got an instance of ${t.name}`
                          ),
                          (e = t.oa(e)),
                          (t = t.A);
                      return e;
                    }
                    function tx(e, t) {
                      return null === t
                        ? (this.Oa && e5(`null is not a valid ${this.name}`), 0)
                        : (t.g ||
                            e5(`Cannot pass "${tV(t)}" as a ${this.name}`),
                          t.g.o ||
                            e5(
                              `Cannot pass deleted object as a pointer of type ${this.name}`
                            ),
                          tS(t.g.o, t.g.u.i, this.i));
                    }
                    function tk(e, t) {
                      if (null === t) {
                        if (
                          (this.Oa && e5(`null is not a valid ${this.name}`),
                          this.va)
                        ) {
                          var n = this.Qa();
                          return null !== e && e.push(this.X, n), n;
                        }
                        return 0;
                      }
                      if (
                        (t.g || e5(`Cannot pass "${tV(t)}" as a ${this.name}`),
                        t.g.o ||
                          e5(
                            `Cannot pass deleted object as a pointer of type ${this.name}`
                          ),
                        !this.ua &&
                          t.g.u.ua &&
                          e5(
                            `Cannot convert argument of type ${
                              t.g.L ? t.g.L.name : t.g.u.name
                            } to parameter type ${this.name}`
                          ),
                        (n = tS(t.g.o, t.g.u.i, this.i)),
                        this.va)
                      )
                        switch (
                          (void 0 === t.g.G &&
                            e5(
                              "Passing raw pointer to smart pointer is illegal"
                            ),
                          this.Bc)
                        ) {
                          case 0:
                            t.g.L === this
                              ? (n = t.g.G)
                              : e5(
                                  `Cannot convert argument of type ${
                                    t.g.L ? t.g.L.name : t.g.u.name
                                  } to parameter type ${this.name}`
                                );
                            break;
                          case 1:
                            n = t.g.G;
                            break;
                          case 2:
                            if (t.g.L === this) n = t.g.G;
                            else {
                              var r = t.clone();
                              (n = this.wc(
                                n,
                                e9(function () {
                                  r.delete();
                                })
                              )),
                                null !== e && e.push(this.X, n);
                            }
                            break;
                          default:
                            e5("Unsupporting sharing policy");
                        }
                      return n;
                    }
                    function tO(e, t) {
                      return null === t
                        ? (this.Oa && e5(`null is not a valid ${this.name}`), 0)
                        : (t.g ||
                            e5(`Cannot pass "${tV(t)}" as a ${this.name}`),
                          t.g.o ||
                            e5(
                              `Cannot pass deleted object as a pointer of type ${this.name}`
                            ),
                          t.g.u.ua &&
                            e5(
                              `Cannot convert argument of type ${t.g.u.name} to parameter type ${this.name}`
                            ),
                          tS(t.g.o, t.g.u.i, this.i));
                    }
                    function tI(e, t, n, r) {
                      (this.name = e),
                        (this.i = t),
                        (this.Oa = n),
                        (this.ua = r),
                        (this.va = !1),
                        (this.X =
                          this.wc =
                          this.Qa =
                          this.sb =
                          this.Bc =
                          this.vc =
                            void 0),
                        void 0 !== t.A
                          ? (this.toWireType = tk)
                          : ((this.toWireType = r ? tx : tO), (this.K = null));
                    }
                    function tD(t, n, r) {
                      e.hasOwnProperty(t) ||
                        tv("Replacing nonexistant public symbol"),
                        void 0 !== e[t].B && void 0 !== r
                          ? (e[t].B[r] = n)
                          : ((e[t] = n), (e[t].ea = r));
                    }
                    var tU = [],
                      tB = (e) => {
                        var t = tU[e];
                        return (
                          t ||
                            (e >= tU.length && (tU.length = e + 1),
                            (tU[e] = t = D.get(e))),
                          t
                        );
                      },
                      t$ = (t, n) => {
                        var r = [];
                        return function () {
                          if (
                            ((r.length = 0),
                            Object.assign(r, arguments),
                            t.includes("j"))
                          ) {
                            var i = e["dynCall_" + t];
                            i =
                              r && r.length
                                ? i.apply(null, [n].concat(r))
                                : i.call(null, n);
                          } else i = tB(n).apply(null, r);
                          return i;
                        };
                      };
                    function tW(e, t) {
                      var n = (e = tn(e)).includes("j") ? t$(e, t) : tB(t);
                      return (
                        "function" != typeof n &&
                          e5(
                            `unknown function pointer with signature ${e}: ${t}`
                          ),
                        n
                      );
                    }
                    var tN = void 0;
                    function tY(e, t) {
                      var n = [],
                        r = {};
                      throw (
                        (t.forEach(function e(t) {
                          r[t] ||
                            tu[t] ||
                            (tC[t]
                              ? tC[t].forEach(e)
                              : (n.push(t), (r[t] = !0)));
                        }),
                        new tN(`${e}: ` + n.map(tc).join([", "])))
                      );
                    }
                    function tX(e, t, n, r, i) {
                      var a = t.length;
                      2 > a &&
                        e5(
                          "argTypes array size mismatch! Must at least get return value and 'this' types!"
                        );
                      var o = null !== t[1] && null !== n,
                        s = !1;
                      for (n = 1; n < t.length; ++n)
                        if (null !== t[n] && void 0 === t[n].K) {
                          s = !0;
                          break;
                        }
                      var u = "void" !== t[0].name,
                        c = a - 2,
                        l = Array(c),
                        h = [],
                        f = [];
                      return function () {
                        if (
                          (arguments.length !== c &&
                            e5(
                              `function ${e} called with ${arguments.length} arguments, expected ${c} args!`
                            ),
                          (f.length = 0),
                          (h.length = o ? 2 : 1),
                          (h[0] = i),
                          o)
                        ) {
                          var n = t[1].toWireType(f, this);
                          h[1] = n;
                        }
                        for (var a = 0; a < c; ++a)
                          (l[a] = t[a + 2].toWireType(f, arguments[a])),
                            h.push(l[a]);
                        if (((a = r.apply(null, h)), s)) tw(f);
                        else
                          for (var d = o ? 1 : 2; d < t.length; d++) {
                            var p = 1 === d ? n : l[d - 2];
                            null !== t[d].K && t[d].K(p);
                          }
                        return u ? t[0].fromWireType(a) : void 0;
                      };
                    }
                    function tH(e, t) {
                      for (var n = [], r = 0; r < e; r++)
                        n.push(S[(t + 4 * r) >> 2]);
                      return n;
                    }
                    function tG(e, t, n) {
                      return (
                        e instanceof Object ||
                          e5(`${n} with invalid "this": ${e}`),
                        e instanceof t.i.constructor ||
                          e5(
                            `${n} incompatible with "this" of type ${e.constructor.name}`
                          ),
                        e.g.o ||
                          e5(
                            `cannot call emscripten binding method ${n} on deleted object`
                          ),
                        tS(e.g.o, e.g.u.i, t.i)
                      );
                    }
                    function tz(e) {
                      e >= e6.h && 0 == --e6.get(e).ub && e6.ec(e);
                    }
                    function tV(e) {
                      if (null === e) return "null";
                      var t = typeof e;
                      return "object" === t || "array" === t || "function" === t
                        ? e.toString()
                        : "" + e;
                    }
                    var tq =
                        "undefined" != typeof TextDecoder
                          ? new TextDecoder("utf-16le")
                          : void 0,
                      tJ = (e, t) => {
                        for (var n = e >> 1, r = n + t / 2; !(n >= r) && F[n]; )
                          ++n;
                        if (32 < (n <<= 1) - e && tq)
                          return tq.decode(M.subarray(e, n));
                        for (r = 0, n = ""; !(r >= t / 2); ++r) {
                          var i = L[(e + 2 * r) >> 1];
                          if (0 == i) break;
                          n += String.fromCharCode(i);
                        }
                        return n;
                      },
                      tK = (e, t, n) => {
                        if ((void 0 === n && (n = 2147483647), 2 > n)) return 0;
                        n -= 2;
                        var r = t;
                        n = n < 2 * e.length ? n / 2 : e.length;
                        for (var i = 0; i < n; ++i)
                          (L[t >> 1] = e.charCodeAt(i)), (t += 2);
                        return (L[t >> 1] = 0), t - r;
                      },
                      tQ = (e) => 2 * e.length,
                      tZ = (e, t) => {
                        for (var n = 0, r = ""; !(n >= t / 4); ) {
                          var i = j[(e + 4 * n) >> 2];
                          if (0 == i) break;
                          ++n,
                            65536 <= i
                              ? ((i -= 65536),
                                (r += String.fromCharCode(
                                  55296 | (i >> 10),
                                  56320 | (1023 & i)
                                )))
                              : (r += String.fromCharCode(i));
                        }
                        return r;
                      },
                      t0 = (e, t, n) => {
                        if ((void 0 === n && (n = 2147483647), 4 > n)) return 0;
                        var r = t;
                        n = r + n - 4;
                        for (var i = 0; i < e.length; ++i) {
                          var a = e.charCodeAt(i);
                          if (
                            (55296 <= a &&
                              57343 >= a &&
                              (a =
                                (65536 + ((1023 & a) << 10)) |
                                (1023 & e.charCodeAt(++i))),
                            (j[t >> 2] = a),
                            (t += 4) + 4 > n)
                          )
                            break;
                        }
                        return (j[t >> 2] = 0), t - r;
                      },
                      t1 = (e) => {
                        for (var t = 0, n = 0; n < e.length; ++n) {
                          var r = e.charCodeAt(n);
                          55296 <= r && 57343 >= r && ++n, (t += 4);
                        }
                        return t;
                      },
                      t2 = {};
                    function t4(e) {
                      var t = t2[e];
                      return void 0 === t ? tn(e) : t;
                    }
                    var t6,
                      t3 = [],
                      t5 = [],
                      t8 = [],
                      t9 = {},
                      t7 = () => {
                        if (!t6) {
                          var e,
                            t = {
                              USER: "web_user",
                              LOGNAME: "web_user",
                              PATH: "/",
                              PWD: "/",
                              HOME: "/home/web_user",
                              LANG:
                                (
                                  ("object" == typeof navigator &&
                                    navigator.languages &&
                                    navigator.languages[0]) ||
                                  "C"
                                ).replace("-", "_") + ".UTF-8",
                              _: b || "./this.program",
                            };
                          for (e in t9)
                            void 0 === t9[e] ? delete t[e] : (t[e] = t9[e]);
                          var n = [];
                          for (e in t) n.push(`${e}=${t[e]}`);
                          t6 = n;
                        }
                        return t6;
                      },
                      ne = (e) => 0 == e % 4 && (0 != e % 100 || 0 == e % 400),
                      nt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                      nn = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                      nr = (e, t, n, r) => {
                        function i(e, t, n) {
                          for (
                            e = "number" == typeof e ? e.toString() : e || "";
                            e.length < t;

                          )
                            e = n[0] + e;
                          return e;
                        }
                        function a(e, t) {
                          return i(e, t, "0");
                        }
                        function o(e, t) {
                          var n;
                          function r(e) {
                            return 0 > e ? -1 : 0 < e ? 1 : 0;
                          }
                          return (
                            0 === (n = r(e.getFullYear() - t.getFullYear())) &&
                              0 === (n = r(e.getMonth() - t.getMonth())) &&
                              (n = r(e.getDate() - t.getDate())),
                            n
                          );
                        }
                        function s(e) {
                          switch (e.getDay()) {
                            case 0:
                              return new Date(e.getFullYear() - 1, 11, 29);
                            case 1:
                              return e;
                            case 2:
                              return new Date(e.getFullYear(), 0, 3);
                            case 3:
                              return new Date(e.getFullYear(), 0, 2);
                            case 4:
                              return new Date(e.getFullYear(), 0, 1);
                            case 5:
                              return new Date(e.getFullYear() - 1, 11, 31);
                            case 6:
                              return new Date(e.getFullYear() - 1, 11, 30);
                          }
                        }
                        function u(e) {
                          var t = e.ca;
                          for (
                            e = new Date(new Date(e.da + 1900, 0, 1).getTime());
                            0 < t;

                          ) {
                            var n = e.getMonth(),
                              r = (ne(e.getFullYear()) ? nt : nn)[n];
                            if (t > r - e.getDate())
                              (t -= r - e.getDate() + 1),
                                e.setDate(1),
                                11 > n
                                  ? e.setMonth(n + 1)
                                  : (e.setMonth(0),
                                    e.setFullYear(e.getFullYear() + 1));
                            else {
                              e.setDate(e.getDate() + t);
                              break;
                            }
                          }
                          return (
                            (n = new Date(e.getFullYear() + 1, 0, 4)),
                            (t = s(new Date(e.getFullYear(), 0, 4))),
                            (n = s(n)),
                            0 >= o(t, e)
                              ? 0 >= o(n, e)
                                ? e.getFullYear() + 1
                                : e.getFullYear()
                              : e.getFullYear() - 1
                          );
                        }
                        var c = j[(r + 40) >> 2];
                        for (var l in ((r = {
                          Ec: j[r >> 2],
                          Dc: j[(r + 4) >> 2],
                          Fa: j[(r + 8) >> 2],
                          Ta: j[(r + 12) >> 2],
                          Ga: j[(r + 16) >> 2],
                          da: j[(r + 20) >> 2],
                          S: j[(r + 24) >> 2],
                          ca: j[(r + 28) >> 2],
                          Rc: j[(r + 32) >> 2],
                          Cc: j[(r + 36) >> 2],
                          Fc: c && c ? eu(M, c) : "",
                        }),
                        (n = n ? eu(M, n) : ""),
                        (c = {
                          "%c": "%a %b %d %H:%M:%S %Y",
                          "%D": "%m/%d/%y",
                          "%F": "%Y-%m-%d",
                          "%h": "%b",
                          "%r": "%I:%M:%S %p",
                          "%R": "%H:%M",
                          "%T": "%H:%M:%S",
                          "%x": "%m/%d/%y",
                          "%X": "%H:%M:%S",
                          "%Ec": "%c",
                          "%EC": "%C",
                          "%Ex": "%m/%d/%y",
                          "%EX": "%H:%M:%S",
                          "%Ey": "%y",
                          "%EY": "%Y",
                          "%Od": "%d",
                          "%Oe": "%e",
                          "%OH": "%H",
                          "%OI": "%I",
                          "%Om": "%m",
                          "%OM": "%M",
                          "%OS": "%S",
                          "%Ou": "%u",
                          "%OU": "%U",
                          "%OV": "%V",
                          "%Ow": "%w",
                          "%OW": "%W",
                          "%Oy": "%y",
                        })))
                          n = n.replace(RegExp(l, "g"), c[l]);
                        var h =
                            "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
                              " "
                            ),
                          f =
                            "January February March April May June July August September October November December".split(
                              " "
                            );
                        for (l in ((c = {
                          "%a": (e) => h[e.S].substring(0, 3),
                          "%A": (e) => h[e.S],
                          "%b": (e) => f[e.Ga].substring(0, 3),
                          "%B": (e) => f[e.Ga],
                          "%C": (e) => a(((e.da + 1900) / 100) | 0, 2),
                          "%d": (e) => a(e.Ta, 2),
                          "%e": (e) => i(e.Ta, 2, " "),
                          "%g": (e) => u(e).toString().substring(2),
                          "%G": (e) => u(e),
                          "%H": (e) => a(e.Fa, 2),
                          "%I": (e) => (
                            0 == (e = e.Fa) ? (e = 12) : 12 < e && (e -= 12),
                            a(e, 2)
                          ),
                          "%j": (e) => {
                            for (
                              var t = 0, n = 0;
                              n <= e.Ga - 1;
                              t += (ne(e.da + 1900) ? nt : nn)[n++]
                            );
                            return a(e.Ta + t, 3);
                          },
                          "%m": (e) => a(e.Ga + 1, 2),
                          "%M": (e) => a(e.Dc, 2),
                          "%n": () => "\n",
                          "%p": (e) => (0 <= e.Fa && 12 > e.Fa ? "AM" : "PM"),
                          "%S": (e) => a(e.Ec, 2),
                          "%t": () => "	",
                          "%u": (e) => e.S || 7,
                          "%U": (e) => a(Math.floor((e.ca + 7 - e.S) / 7), 2),
                          "%V": (e) => {
                            var t = Math.floor(
                              (e.ca + 7 - ((e.S + 6) % 7)) / 7
                            );
                            if ((2 >= (e.S + 371 - e.ca - 2) % 7 && t++, t))
                              53 == t &&
                                (4 == (n = (e.S + 371 - e.ca) % 7) ||
                                  (3 == n && ne(e.da)) ||
                                  (t = 1));
                            else {
                              t = 52;
                              var n = (e.S + 7 - e.ca - 1) % 7;
                              (4 == n || (5 == n && ne((e.da % 400) - 1))) &&
                                t++;
                            }
                            return a(t, 2);
                          },
                          "%w": (e) => e.S,
                          "%W": (e) =>
                            a(Math.floor((e.ca + 7 - ((e.S + 6) % 7)) / 7), 2),
                          "%y": (e) => (e.da + 1900).toString().substring(2),
                          "%Y": (e) => e.da + 1900,
                          "%z": (e) => {
                            var t = 0 <= (e = e.Cc);
                            return (
                              (t ? "+" : "-") +
                              String(
                                "0000" +
                                  (((e = Math.abs(e) / 60) / 60) * 100 +
                                    (e % 60))
                              ).slice(-4)
                            );
                          },
                          "%Z": (e) => e.Fc,
                          "%%": () => "%",
                        }),
                        (n = n.replace(/%%/g, "\0\0")),
                        c))
                          n.includes(l) &&
                            (n = n.replace(RegExp(l, "g"), c[l](r)));
                        return (l = ef((n = n.replace(/\0\0/g, "%")), !1))
                          .length > t
                          ? 0
                          : (P.set(l, e), l.length - 1);
                      };
                    function ni(e, t, n, r) {
                      e || (e = this),
                        (this.parent = e),
                        (this.V = e.V),
                        (this.xa = null),
                        (this.id = eT++),
                        (this.name = t),
                        (this.mode = n),
                        (this.j = {}),
                        (this.m = {}),
                        (this.ma = r);
                    }
                    Object.defineProperties(ni.prototype, {
                      read: {
                        get: function () {
                          return 365 == (365 & this.mode);
                        },
                        set: function (e) {
                          e ? (this.mode |= 365) : (this.mode &= -366);
                        },
                      },
                      write: {
                        get: function () {
                          return 146 == (146 & this.mode);
                        },
                        set: function (e) {
                          e ? (this.mode |= 146) : (this.mode &= -147);
                        },
                      },
                    }),
                      eJ(),
                      (eE = Array(4096)),
                      eY(e_, "/"),
                      eX("/tmp", 16895, 0),
                      eX("/home", 16895, 0),
                      eX("/home/web_user", 16895, 0),
                      eX("/dev", 16895, 0),
                      eN(259, { read: () => 0, write: (e, t, n, r) => r }),
                      eH("/dev/null", 259),
                      ep(1280, {
                        ib: function () {
                          e: {
                            if (!ec.length) {
                              var e = null;
                              if (
                                ("undefined" != typeof window &&
                                "function" == typeof window.prompt
                                  ? null !== (e = window.prompt("Input: ")) &&
                                    (e += "\n")
                                  : "function" == typeof readline &&
                                    null !== (e = readline()) &&
                                    (e += "\n"),
                                !e)
                              ) {
                                e = null;
                                break e;
                              }
                              ec = ef(e, !0);
                            }
                            e = ec.shift();
                          }
                          return e;
                        },
                        Pa: function (e, t) {
                          null === t || 10 === t
                            ? (A(eu(e.F, 0)), (e.F = []))
                            : 0 != t && e.F.push(t);
                        },
                        ra: function (e) {
                          e.F && 0 < e.F.length && (A(eu(e.F, 0)), (e.F = []));
                        },
                        ic: function () {
                          return {
                            Lc: 25856,
                            Nc: 5,
                            Kc: 191,
                            Mc: 35387,
                            Jc: [
                              3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15,
                              23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                              0, 0,
                            ],
                          };
                        },
                        jc: function () {
                          return 0;
                        },
                        kc: function () {
                          return [24, 80];
                        },
                      }),
                      ep(1536, {
                        Pa: function (e, t) {
                          null === t || 10 === t
                            ? (C(eu(e.F, 0)), (e.F = []))
                            : 0 != t && e.F.push(t);
                        },
                        ra: function (e) {
                          e.F && 0 < e.F.length && (C(eu(e.F, 0)), (e.F = []));
                        },
                      }),
                      eH("/dev/tty", 1280),
                      eH("/dev/tty1", 1536),
                      (u = new Uint8Array(1024)),
                      (c = 0),
                      eK(
                        "random",
                        (l = () => (0 === c && (c = ea(u).byteLength), u[--c]))
                      ),
                      eK("urandom", l),
                      eX("/dev/shm", 16895, 0),
                      eX("/dev/shm/tmp", 16895, 0),
                      eX("/proc", 16895, 0),
                      (h = eX("/proc/self", 16895, 0)),
                      eX("/proc/self/fd", 16895, 0),
                      eY(
                        {
                          V: () => {
                            var e = ek(h, "fd", 16895, 73);
                            return (
                              (e.j = {
                                ka: (e, t) => {
                                  var n = eB(+t);
                                  return ((e = {
                                    parent: null,
                                    V: { nb: "fake" },
                                    j: { na: () => n.path },
                                  }).parent = e);
                                },
                              }),
                              e
                            );
                          },
                        },
                        "/proc/self/fd"
                      ),
                      Object.assign(e4.prototype, {
                        get(e) {
                          return this.M[e];
                        },
                        has(e) {
                          return void 0 !== this.M[e];
                        },
                        qa(e) {
                          var t = this.hb.pop() || this.M.length;
                          return (this.M[t] = e), t;
                        },
                        ec(e) {
                          (this.M[e] = void 0), this.hb.push(e);
                        },
                      }),
                      (e3 = e.BindingError =
                        class extends Error {
                          constructor(e) {
                            super(e), (this.name = "BindingError");
                          }
                        }),
                      e6.M.push(
                        { value: void 0 },
                        { value: null },
                        { value: !0 },
                        { value: !1 }
                      ),
                      (e6.h = e6.M.length),
                      (e.count_emval_handles = function () {
                        for (var e = 0, t = e6.h; t < e6.M.length; ++t)
                          void 0 !== e6.M[t] && ++e;
                        return e;
                      }),
                      (te = e.PureVirtualError = e7("PureVirtualError"));
                    for (var na = Array(256), no = 0; 256 > no; ++no)
                      na[no] = String.fromCharCode(no);
                    (tt = na),
                      (e.getInheritedInstanceCount = function () {
                        return Object.keys(to).length;
                      }),
                      (e.getLiveInheritedInstances = function () {
                        var e,
                          t = [];
                        for (e in to) to.hasOwnProperty(e) && t.push(to[e]);
                        return t;
                      }),
                      (e.flushPendingDeletes = ti),
                      (e.setDelayFunction = function (e) {
                        (ta = e), tr.length && ta && ta(ti);
                      }),
                      (tm = e.InternalError =
                        class extends Error {
                          constructor(e) {
                            super(e), (this.name = "InternalError");
                          }
                        }),
                      (tM.prototype.isAliasOf = function (e) {
                        if (!(this instanceof tM && e instanceof tM)) return !1;
                        var t = this.g.u.i,
                          n = this.g.o,
                          r = e.g.u.i;
                        for (e = e.g.o; t.A; ) (n = t.oa(n)), (t = t.A);
                        for (; r.A; ) (e = r.oa(e)), (r = r.A);
                        return t === r && n === e;
                      }),
                      (tM.prototype.clone = function () {
                        if ((this.g.o || tP(this), this.g.ia))
                          return (this.g.count.value += 1), this;
                        var e = tb,
                          t = Object,
                          n = t.create,
                          r = Object.getPrototypeOf(this),
                          i = this.g;
                        return (
                          (e = e(
                            n.call(t, r, {
                              g: {
                                value: {
                                  count: i.count,
                                  fa: i.fa,
                                  ia: i.ia,
                                  o: i.o,
                                  u: i.u,
                                  G: i.G,
                                  L: i.L,
                                },
                              },
                            })
                          )),
                          (e.g.count.value += 1),
                          (e.g.fa = !1),
                          e
                        );
                      }),
                      (tM.prototype.delete = function () {
                        this.g.o || tP(this),
                          this.g.fa &&
                            !this.g.ia &&
                            e5("Object already scheduled for deletion"),
                          th(this),
                          td(this.g),
                          this.g.ia ||
                            ((this.g.G = void 0), (this.g.o = void 0));
                      }),
                      (tM.prototype.isDeleted = function () {
                        return !this.g.o;
                      }),
                      (tM.prototype.deleteLater = function () {
                        return (
                          this.g.o || tP(this),
                          this.g.fa &&
                            !this.g.ia &&
                            e5("Object already scheduled for deletion"),
                          tr.push(this),
                          1 === tr.length && ta && ta(ti),
                          (this.g.fa = !0),
                          this
                        );
                      }),
                      (tI.prototype.$b = function (e) {
                        return this.sb && (e = this.sb(e)), e;
                      }),
                      (tI.prototype.bb = function (e) {
                        this.X && this.X(e);
                      }),
                      (tI.prototype.argPackAdvance = 8),
                      (tI.prototype.readValueFromPointer = t_),
                      (tI.prototype.deleteObject = function (e) {
                        null !== e && e.delete();
                      }),
                      (tI.prototype.fromWireType = function (e) {
                        function t() {
                          return this.va
                            ? tg(this.i.O, { u: this.vc, o: n, L: this, G: e })
                            : tg(this.i.O, { u: this, o: e });
                        }
                        var n = this.$b(e);
                        if (!n) return this.bb(e), null;
                        var r = to[ts(this.i, n)];
                        if (void 0 !== r)
                          return 0 === r.g.count.value
                            ? ((r.g.o = n), (r.g.G = e), r.clone())
                            : ((r = r.clone()), this.bb(e), r);
                        if (!(r = tp[(r = this.i.Zb(n))])) return t.call(this);
                        r = this.ua ? r.Nb : r.pointerType;
                        var i = (function e(t, n, r) {
                          return n === r
                            ? t
                            : void 0 === r.A
                            ? null
                            : null === (t = e(t, n, r.A))
                            ? null
                            : r.Ub(t);
                        })(n, this.i, r.i);
                        return null === i
                          ? t.call(this)
                          : this.va
                          ? tg(r.i.O, { u: r, o: i, L: this, G: e })
                          : tg(r.i.O, { u: r, o: i });
                      }),
                      (tN = e.UnboundTypeError = e7("UnboundTypeError"));
                    var ns = {
                      __syscall_fcntl64: function (e, t, n) {
                        eZ = n;
                        try {
                          var r = eB(e);
                          switch (t) {
                            case 0:
                              var i = e0();
                              return 0 > i ? -28 : e$(r, i).Z;
                            case 1:
                            case 2:
                            case 6:
                            case 7:
                              return 0;
                            case 3:
                              return r.flags;
                            case 4:
                              return (i = e0()), (r.flags |= i), 0;
                            case 5:
                              return (L[((i = e0()) + 0) >> 1] = 2), 0;
                            case 16:
                            case 8:
                            default:
                              return -28;
                            case 9:
                              return (j[nd() >> 2] = 28), -1;
                          }
                        } catch (e) {
                          if (void 0 === eQ || "ErrnoError" !== e.name) throw e;
                          return -e.Y;
                        }
                      },
                      __syscall_fstat64: function (e, t) {
                        try {
                          e: {
                            var n = eB(e).path;
                            try {
                              var r = eF(n, { Ma: !0 }).node;
                              if (!r) throw new eM(44);
                              if (!r.j.N) throw new eM(63);
                              var i = r.j.N(r);
                            } catch (e) {
                              if (e && e.node && et(n) !== et(ej(e.node))) {
                                var a = -54;
                                break e;
                              }
                              throw e;
                            }
                            (j[t >> 2] = i.Sb),
                              (j[(t + 4) >> 2] = i.mode),
                              (S[(t + 8) >> 2] = i.uc),
                              (j[(t + 12) >> 2] = i.uid),
                              (j[(t + 16) >> 2] = i.dc),
                              (j[(t + 20) >> 2] = i.ma),
                              (K = [
                                i.size >>> 0,
                                ((J = i.size),
                                1 <= +Math.abs(J)
                                  ? 0 < J
                                    ? +Math.floor(J / 4294967296) >>> 0
                                    : ~~+Math.ceil(
                                        (J - +(~~J >>> 0)) / 4294967296
                                      ) >>> 0
                                  : 0),
                              ]),
                              (j[(t + 24) >> 2] = K[0]),
                              (j[(t + 28) >> 2] = K[1]),
                              (j[(t + 32) >> 2] = 4096),
                              (j[(t + 36) >> 2] = i.Mb);
                            var o = i.Kb.getTime(),
                              s = i.rc.getTime(),
                              u = i.Pb.getTime();
                            (K = [
                              Math.floor(o / 1e3) >>> 0,
                              ((J = Math.floor(o / 1e3)),
                              1 <= +Math.abs(J)
                                ? 0 < J
                                  ? +Math.floor(J / 4294967296) >>> 0
                                  : ~~+Math.ceil(
                                      (J - +(~~J >>> 0)) / 4294967296
                                    ) >>> 0
                                : 0),
                            ]),
                              (j[(t + 40) >> 2] = K[0]),
                              (j[(t + 44) >> 2] = K[1]),
                              (S[(t + 48) >> 2] = (o % 1e3) * 1e3),
                              (K = [
                                Math.floor(s / 1e3) >>> 0,
                                ((J = Math.floor(s / 1e3)),
                                1 <= +Math.abs(J)
                                  ? 0 < J
                                    ? +Math.floor(J / 4294967296) >>> 0
                                    : ~~+Math.ceil(
                                        (J - +(~~J >>> 0)) / 4294967296
                                      ) >>> 0
                                  : 0),
                              ]),
                              (j[(t + 56) >> 2] = K[0]),
                              (j[(t + 60) >> 2] = K[1]),
                              (S[(t + 64) >> 2] = (s % 1e3) * 1e3),
                              (K = [
                                Math.floor(u / 1e3) >>> 0,
                                ((J = Math.floor(u / 1e3)),
                                1 <= +Math.abs(J)
                                  ? 0 < J
                                    ? +Math.floor(J / 4294967296) >>> 0
                                    : ~~+Math.ceil(
                                        (J - +(~~J >>> 0)) / 4294967296
                                      ) >>> 0
                                  : 0),
                              ]),
                              (j[(t + 72) >> 2] = K[0]),
                              (j[(t + 76) >> 2] = K[1]),
                              (S[(t + 80) >> 2] = (u % 1e3) * 1e3),
                              (K = [
                                i.kb >>> 0,
                                ((J = i.kb),
                                1 <= +Math.abs(J)
                                  ? 0 < J
                                    ? +Math.floor(J / 4294967296) >>> 0
                                    : ~~+Math.ceil(
                                        (J - +(~~J >>> 0)) / 4294967296
                                      ) >>> 0
                                  : 0),
                              ]),
                              (j[(t + 88) >> 2] = K[0]),
                              (j[(t + 92) >> 2] = K[1]),
                              (a = 0);
                          }
                          return a;
                        } catch (e) {
                          if (void 0 === eQ || "ErrnoError" !== e.name) throw e;
                          return -e.Y;
                        }
                      },
                      __syscall_ioctl: function (e, t, n) {
                        eZ = n;
                        try {
                          var r = eB(e);
                          switch (t) {
                            case 21509:
                            case 21510:
                            case 21511:
                            case 21512:
                            case 21524:
                            case 21515:
                              return r.s ? 0 : -59;
                            case 21505:
                              if (!r.s) return -59;
                              if (r.s.W.ic) {
                                t = [
                                  3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18,
                                  15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                  0, 0, 0, 0, 0,
                                ];
                                var i = e0();
                                (j[i >> 2] = 25856),
                                  (j[(i + 4) >> 2] = 5),
                                  (j[(i + 8) >> 2] = 191),
                                  (j[(i + 12) >> 2] = 35387);
                                for (var a = 0; 32 > a; a++)
                                  P[(i + a + 17) >> 0] = t[a] || 0;
                              }
                              return 0;
                            case 21506:
                            case 21507:
                            case 21508:
                              if (!r.s) return -59;
                              if (r.s.W.jc)
                                for (i = e0(), t = [], a = 0; 32 > a; a++)
                                  t.push(P[(i + a + 17) >> 0]);
                              return 0;
                            case 21519:
                              if (!r.s) return -59;
                              return (j[(i = e0()) >> 2] = 0);
                            case 21520:
                              return r.s ? -28 : -59;
                            case 21531:
                              if (((i = e0()), !r.m.hc)) throw new eM(59);
                              return r.m.hc(r, t, i);
                            case 21523:
                              if (!r.s) return -59;
                              return (
                                r.s.W.kc &&
                                  ((a = [24, 80]),
                                  (L[(i = e0()) >> 1] = a[0]),
                                  (L[(i + 2) >> 1] = a[1])),
                                0
                              );
                            default:
                              return -28;
                          }
                        } catch (e) {
                          if (void 0 === eQ || "ErrnoError" !== e.name) throw e;
                          return -e.Y;
                        }
                      },
                      __syscall_openat: function (e, t, n, r) {
                        eZ = r;
                        try {
                          var i = (t = t ? eu(M, t) : "");
                          if ("/" === i.charAt(0)) t = i;
                          else {
                            var a = -100 === e ? "/" : eB(e).path;
                            if (0 == i.length) throw new eM(44);
                            t = et(a + "/" + i);
                          }
                          var o = r ? e0() : 0;
                          return eV(t, n, o).Z;
                        } catch (e) {
                          if (void 0 === eQ || "ErrnoError" !== e.name) throw e;
                          return -e.Y;
                        }
                      },
                      _embind_create_inheriting_constructor: function (
                        e,
                        t,
                        n
                      ) {
                        (e = tn(e)), (t = tl(t, "wrapper")), (n = e8(n));
                        var r = [].slice,
                          i = t.i,
                          a = i.O,
                          o = i.A.O,
                          s = i.A.constructor;
                        for (var u in ((e = e2(e, function () {
                          i.A.rb.forEach(
                            function (e) {
                              if (this[e] === o[e])
                                throw new te(
                                  `Pure virtual function ${e} must be implemented in JavaScript`
                                );
                            }.bind(this)
                          ),
                            Object.defineProperty(this, "__parent", {
                              value: a,
                            }),
                            this.__construct.apply(this, r.call(arguments));
                        })),
                        (a.__construct = function () {
                          this === a &&
                            e5("Pass correct 'this' to __construct");
                          var e = s.implement.apply(
                            void 0,
                            [this].concat(r.call(arguments))
                          );
                          th(e);
                          var t = e.g;
                          e.notifyOnDestruction(),
                            (t.ia = !0),
                            Object.defineProperties(this, { g: { value: t } }),
                            tb(this),
                            (e = ts(i, (e = t.o))),
                            to.hasOwnProperty(e)
                              ? e5(
                                  `Tried to register registered instance: ${e}`
                                )
                              : (to[e] = this);
                        }),
                        (a.__destruct = function () {
                          this === a && e5("Pass correct 'this' to __destruct"),
                            th(this);
                          var e = this.g.o;
                          (e = ts(i, e)),
                            to.hasOwnProperty(e)
                              ? delete to[e]
                              : e5(
                                  `Tried to unregister unregistered instance: ${e}`
                                );
                        }),
                        (e.prototype = Object.create(a)),
                        n))
                          e.prototype[u] = n[u];
                        return e9(e);
                      },
                      _embind_finalize_value_object: function (e) {
                        var t = ty[e];
                        delete ty[e];
                        var n = t.Qa,
                          r = t.X,
                          i = t.fb;
                        tR(
                          [e],
                          i.map((e) => e.cc).concat(i.map((e) => e.zc)),
                          (e) => {
                            var a = {};
                            return (
                              i.forEach((t, n) => {
                                var r = e[n],
                                  o = t.ac,
                                  s = t.bc,
                                  u = e[n + i.length],
                                  c = t.yc,
                                  l = t.Ac;
                                a[t.Xb] = {
                                  read: (e) => r.fromWireType(o(s, e)),
                                  write: (e, t) => {
                                    var n = [];
                                    c(l, e, u.toWireType(n, t)), tw(n);
                                  },
                                };
                              }),
                              [
                                {
                                  name: t.name,
                                  fromWireType: function (e) {
                                    var t,
                                      n = {};
                                    for (t in a) n[t] = a[t].read(e);
                                    return r(e), n;
                                  },
                                  toWireType: function (e, t) {
                                    for (var i in a)
                                      if (!(i in t))
                                        throw TypeError(
                                          `Missing field: "${i}"`
                                        );
                                    var o = n();
                                    for (i in a) a[i].write(o, t[i]);
                                    return null !== e && e.push(r, o), o;
                                  },
                                  argPackAdvance: 8,
                                  readValueFromPointer: t_,
                                  K: r,
                                },
                              ]
                            );
                          }
                        );
                      },
                      _embind_register_bigint: function () {},
                      _embind_register_bool: function (e, t, n, r, i) {
                        var a = tT(n);
                        tE(e, {
                          name: (t = tn(t)),
                          fromWireType: function (e) {
                            return !!e;
                          },
                          toWireType: function (e, t) {
                            return t ? r : i;
                          },
                          argPackAdvance: 8,
                          readValueFromPointer: function (e) {
                            if (1 === n) var r = P;
                            else if (2 === n) r = L;
                            else if (4 === n) r = j;
                            else
                              throw TypeError(
                                "Unknown boolean type size: " + t
                              );
                            return this.fromWireType(r[e >> a]);
                          },
                          K: null,
                        });
                      },
                      _embind_register_class: function (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s,
                        u,
                        c,
                        l,
                        h,
                        f
                      ) {
                        (l = tn(l)),
                          (a = tW(i, a)),
                          s && (s = tW(o, s)),
                          c && (c = tW(u, c)),
                          (f = tW(h, f));
                        var d = e1(l);
                        tF(d, function () {
                          tY(`Cannot construct ${l} due to unbound types`, [r]);
                        }),
                          tR([e, t, n], r ? [r] : [], function (t) {
                            if (((t = t[0]), r))
                              var n = t.i,
                                i = n.O;
                            else i = tM.prototype;
                            var o = Object.create(i, {
                              constructor: {
                                value: (t = e2(d, function () {
                                  if (Object.getPrototypeOf(this) !== o)
                                    throw new e3("Use 'new' to construct " + l);
                                  if (void 0 === u.aa)
                                    throw new e3(
                                      l + " has no accessible constructor"
                                    );
                                  var e = u.aa[arguments.length];
                                  if (void 0 === e)
                                    throw new e3(
                                      `Tried to invoke ctor of ${l} with invalid number of parameters (${
                                        arguments.length
                                      }) - expected (${Object.keys(
                                        u.aa
                                      ).toString()}) parameters instead!`
                                    );
                                  return e.apply(this, arguments);
                                })),
                              },
                            });
                            t.prototype = o;
                            var u = new tj(l, t, o, f, n, a, s, c);
                            u.A &&
                              (void 0 === u.A.pa && (u.A.pa = []),
                              u.A.pa.push(u)),
                              (n = new tI(l, u, !0, !1)),
                              (i = new tI(l + "*", u, !1, !1));
                            var h = new tI(l + " const*", u, !1, !0);
                            return (
                              (tp[e] = { pointerType: i, Nb: h }),
                              tD(d, t),
                              [n, i, h]
                            );
                          });
                      },
                      _embind_register_class_class_function: function (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a,
                        o
                      ) {
                        var s = tH(n, r);
                        (t = tn(t)),
                          (a = tW(i, a)),
                          tR([], [e], function (e) {
                            function r() {
                              tY(`Cannot call ${i} due to unbound types`, s);
                            }
                            e = e[0];
                            var i = `${e.name}.${t}`;
                            t.startsWith("@@") && (t = Symbol[t.substring(2)]);
                            var u = e.i.constructor;
                            return (
                              void 0 === u[t]
                                ? ((r.ea = n - 1), (u[t] = r))
                                : (tL(u, t, i), (u[t].B[n - 1] = r)),
                              tR([], s, function (r) {
                                if (
                                  ((r = tX(
                                    i,
                                    [r[0], null].concat(r.slice(1)),
                                    null,
                                    a,
                                    o
                                  )),
                                  void 0 === u[t].B
                                    ? ((r.ea = n - 1), (u[t] = r))
                                    : (u[t].B[n - 1] = r),
                                  e.i.pa)
                                )
                                  for (let n of e.i.pa)
                                    n.constructor.hasOwnProperty(t) ||
                                      (n.constructor[t] = r);
                                return [];
                              }),
                              []
                            );
                          });
                      },
                      _embind_register_class_class_property: function (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s
                      ) {
                        (t = tn(t)),
                          (a = tW(i, a)),
                          tR([], [e], function (e) {
                            e = e[0];
                            var i = `${e.name}.${t}`,
                              u = {
                                get() {
                                  tY(
                                    `Cannot access ${i} due to unbound types`,
                                    [n]
                                  );
                                },
                                enumerable: !0,
                                configurable: !0,
                              };
                            return (
                              (u.set = s
                                ? () => {
                                    tY(
                                      `Cannot access ${i} due to unbound types`,
                                      [n]
                                    );
                                  }
                                : () => {
                                    e5(`${i} is a read-only property`);
                                  }),
                              Object.defineProperty(e.i.constructor, t, u),
                              tR([], [n], function (n) {
                                n = n[0];
                                var i = {
                                  get: () => n.fromWireType(a(r)),
                                  enumerable: !0,
                                };
                                return (
                                  s &&
                                    ((s = tW(o, s)),
                                    (i.set = (e) => {
                                      var t = [];
                                      s(r, n.toWireType(t, e)), tw(t);
                                    })),
                                  Object.defineProperty(e.i.constructor, t, i),
                                  []
                                );
                              }),
                              []
                            );
                          });
                      },
                      _embind_register_class_constructor: function (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a
                      ) {
                        var o = tH(t, n);
                        (i = tW(r, i)),
                          tR([], [e], function (e) {
                            e = e[0];
                            var n = `constructor ${e.name}`;
                            if (
                              (void 0 === e.i.aa && (e.i.aa = []),
                              void 0 !== e.i.aa[t - 1])
                            )
                              throw new e3(
                                `Cannot register multiple constructors with identical number of parameters (${
                                  t - 1
                                }) for class '${
                                  e.name
                                }'! Overload resolution is currently only performed using the parameter count, not actual type info!`
                              );
                            return (
                              (e.i.aa[t - 1] = () => {
                                tY(
                                  `Cannot construct ${e.name} due to unbound types`,
                                  o
                                );
                              }),
                              tR([], o, function (r) {
                                return (
                                  r.splice(1, 0, null),
                                  (e.i.aa[t - 1] = tX(n, r, null, i, a)),
                                  []
                                );
                              }),
                              []
                            );
                          });
                      },
                      _embind_register_class_function: function (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s
                      ) {
                        var u = tH(n, r);
                        (t = tn(t)),
                          (a = tW(i, a)),
                          tR([], [e], function (e) {
                            function r() {
                              tY(`Cannot call ${i} due to unbound types`, u);
                            }
                            e = e[0];
                            var i = `${e.name}.${t}`;
                            t.startsWith("@@") && (t = Symbol[t.substring(2)]),
                              s && e.i.rb.push(t);
                            var c = e.i.O,
                              l = c[t];
                            return (
                              void 0 === l ||
                              (void 0 === l.B &&
                                l.className !== e.name &&
                                l.ea === n - 2)
                                ? ((r.ea = n - 2),
                                  (r.className = e.name),
                                  (c[t] = r))
                                : (tL(c, t, i), (c[t].B[n - 2] = r)),
                              tR([], u, function (r) {
                                return (
                                  (r = tX(i, r, e, a, o)),
                                  void 0 === c[t].B
                                    ? ((r.ea = n - 2), (c[t] = r))
                                    : (c[t].B[n - 2] = r),
                                  []
                                );
                              }),
                              []
                            );
                          });
                      },
                      _embind_register_class_property: function (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s,
                        u,
                        c
                      ) {
                        (t = tn(t)),
                          (i = tW(r, i)),
                          tR([], [e], function (e) {
                            e = e[0];
                            var r = `${e.name}.${t}`,
                              l = {
                                get() {
                                  tY(
                                    `Cannot access ${r} due to unbound types`,
                                    [n, o]
                                  );
                                },
                                enumerable: !0,
                                configurable: !0,
                              };
                            return (
                              (l.set = u
                                ? () => {
                                    tY(
                                      `Cannot access ${r} due to unbound types`,
                                      [n, o]
                                    );
                                  }
                                : () => {
                                    e5(r + " is a read-only property");
                                  }),
                              Object.defineProperty(e.i.O, t, l),
                              tR([], u ? [n, o] : [n], function (n) {
                                var o = n[0],
                                  l = {
                                    get() {
                                      var t = tG(this, e, r + " getter");
                                      return o.fromWireType(i(a, t));
                                    },
                                    enumerable: !0,
                                  };
                                if (u) {
                                  u = tW(s, u);
                                  var h = n[1];
                                  l.set = function (t) {
                                    var n = tG(this, e, r + " setter"),
                                      i = [];
                                    u(c, n, h.toWireType(i, t)), tw(i);
                                  };
                                }
                                return Object.defineProperty(e.i.O, t, l), [];
                              }),
                              []
                            );
                          });
                      },
                      _embind_register_emval: function (e, t) {
                        tE(e, {
                          name: (t = tn(t)),
                          fromWireType: function (e) {
                            var t = e8(e);
                            return tz(e), t;
                          },
                          toWireType: function (e, t) {
                            return e9(t);
                          },
                          argPackAdvance: 8,
                          readValueFromPointer: t_,
                          K: null,
                        });
                      },
                      _embind_register_enum: function (e, t, n, r) {
                        function i() {}
                        (n = tT(n)),
                          (t = tn(t)),
                          (i.values = {}),
                          tE(e, {
                            name: t,
                            constructor: i,
                            fromWireType: function (e) {
                              return this.constructor.values[e];
                            },
                            toWireType: function (e, t) {
                              return t.value;
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: (function (e, t, n) {
                              switch (t) {
                                case 0:
                                  return function (e) {
                                    return this.fromWireType((n ? P : M)[e]);
                                  };
                                case 1:
                                  return function (e) {
                                    return this.fromWireType(
                                      (n ? L : F)[e >> 1]
                                    );
                                  };
                                case 2:
                                  return function (e) {
                                    return this.fromWireType(
                                      (n ? j : S)[e >> 2]
                                    );
                                  };
                                default:
                                  throw TypeError("Unknown integer type: " + e);
                              }
                            })(t, n, r),
                            K: null,
                          }),
                          tF(t, i);
                      },
                      _embind_register_enum_value: function (e, t, n) {
                        var r = tl(e, "enum");
                        (t = tn(t)),
                          (e = r.constructor),
                          (r = Object.create(r.constructor.prototype, {
                            value: { value: n },
                            constructor: {
                              value: e2(`${r.name}_${t}`, function () {}),
                            },
                          })),
                          (e.values[n] = r),
                          (e[t] = r);
                      },
                      _embind_register_float: function (e, t, n) {
                        (n = tT(n)),
                          tE(e, {
                            name: (t = tn(t)),
                            fromWireType: function (e) {
                              return e;
                            },
                            toWireType: function (e, t) {
                              return t;
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: (function (e, t) {
                              switch (t) {
                                case 2:
                                  return function (e) {
                                    return this.fromWireType(x[e >> 2]);
                                  };
                                case 3:
                                  return function (e) {
                                    return this.fromWireType(k[e >> 3]);
                                  };
                                default:
                                  throw TypeError("Unknown float type: " + e);
                              }
                            })(t, n),
                            K: null,
                          });
                      },
                      _embind_register_function: function (e, t, n, r, i, a) {
                        var o = tH(t, n);
                        (e = tn(e)),
                          (i = tW(r, i)),
                          tF(
                            e,
                            function () {
                              tY(`Cannot call ${e} due to unbound types`, o);
                            },
                            t - 1
                          ),
                          tR([], o, function (n) {
                            return (
                              tD(
                                e,
                                tX(
                                  e,
                                  [n[0], null].concat(n.slice(1)),
                                  null,
                                  i,
                                  a
                                ),
                                t - 1
                              ),
                              []
                            );
                          });
                      },
                      _embind_register_integer: function (e, t, n, r, i) {
                        (t = tn(t)), -1 === i && (i = 4294967295), (i = tT(n));
                        var a = (e) => e;
                        if (0 === r) {
                          var o = 32 - 8 * n;
                          a = (e) => (e << o) >>> o;
                        }
                        (n = t.includes("unsigned")
                          ? function (e, t) {
                              return t >>> 0;
                            }
                          : function (e, t) {
                              return t;
                            }),
                          tE(e, {
                            name: t,
                            fromWireType: a,
                            toWireType: n,
                            argPackAdvance: 8,
                            readValueFromPointer: (function (e, t, n) {
                              switch (t) {
                                case 0:
                                  return n
                                    ? function (e) {
                                        return P[e];
                                      }
                                    : function (e) {
                                        return M[e];
                                      };
                                case 1:
                                  return n
                                    ? function (e) {
                                        return L[e >> 1];
                                      }
                                    : function (e) {
                                        return F[e >> 1];
                                      };
                                case 2:
                                  return n
                                    ? function (e) {
                                        return j[e >> 2];
                                      }
                                    : function (e) {
                                        return S[e >> 2];
                                      };
                                default:
                                  throw TypeError("Unknown integer type: " + e);
                              }
                            })(t, i, 0 !== r),
                            K: null,
                          });
                      },
                      _embind_register_memory_view: function (e, t, n) {
                        function r(e) {
                          e >>= 2;
                          var t = S;
                          return new i(t.buffer, t[e + 1], t[e]);
                        }
                        var i = [
                          Int8Array,
                          Uint8Array,
                          Int16Array,
                          Uint16Array,
                          Int32Array,
                          Uint32Array,
                          Float32Array,
                          Float64Array,
                        ][t];
                        tE(
                          e,
                          {
                            name: (n = tn(n)),
                            fromWireType: r,
                            argPackAdvance: 8,
                            readValueFromPointer: r,
                          },
                          { fc: !0 }
                        );
                      },
                      _embind_register_std_string: function (e, t) {
                        var n = "std::string" === (t = tn(t));
                        tE(e, {
                          name: t,
                          fromWireType: function (e) {
                            var t = S[e >> 2],
                              r = e + 4;
                            if (n)
                              for (var i = r, a = 0; a <= t; ++a) {
                                var o = r + a;
                                if (a == t || 0 == M[o]) {
                                  if (
                                    ((i = i ? eu(M, i, o - i) : ""),
                                    void 0 === s)
                                  )
                                    var s = i;
                                  else s += "\0" + i;
                                  i = o + 1;
                                }
                              }
                            else {
                              for (a = 0, s = Array(t); a < t; ++a)
                                s[a] = String.fromCharCode(M[r + a]);
                              s = s.join("");
                            }
                            return nu(e), s;
                          },
                          toWireType: function (e, t) {
                            t instanceof ArrayBuffer && (t = new Uint8Array(t));
                            var r = "string" == typeof t;
                            r ||
                              t instanceof Uint8Array ||
                              t instanceof Uint8ClampedArray ||
                              t instanceof Int8Array ||
                              e5("Cannot pass non-string to std::string");
                            var i = n && r ? el(t) : t.length,
                              a = nc(4 + i + 1),
                              o = a + 4;
                            if (((S[a >> 2] = i), n && r)) eh(t, M, o, i + 1);
                            else if (r)
                              for (r = 0; r < i; ++r) {
                                var s = t.charCodeAt(r);
                                255 < s &&
                                  (nu(o),
                                  e5(
                                    "String has UTF-16 code units that do not fit in 8 bits"
                                  )),
                                  (M[o + r] = s);
                              }
                            else for (r = 0; r < i; ++r) M[o + r] = t[r];
                            return null !== e && e.push(nu, a), a;
                          },
                          argPackAdvance: 8,
                          readValueFromPointer: t_,
                          K: function (e) {
                            nu(e);
                          },
                        });
                      },
                      _embind_register_std_wstring: function (e, t, n) {
                        if (((n = tn(n)), 2 === t))
                          var r = tJ,
                            i = tK,
                            a = tQ,
                            o = () => F,
                            s = 1;
                        else
                          4 === t &&
                            ((r = tZ),
                            (i = t0),
                            (a = t1),
                            (o = () => S),
                            (s = 2));
                        tE(e, {
                          name: n,
                          fromWireType: function (e) {
                            for (
                              var n, i = S[e >> 2], a = o(), u = e + 4, c = 0;
                              c <= i;
                              ++c
                            ) {
                              var l = e + 4 + c * t;
                              (c == i || 0 == a[l >> s]) &&
                                ((u = r(u, l - u)),
                                void 0 === n ? (n = u) : (n += "\0" + u),
                                (u = l + t));
                            }
                            return nu(e), n;
                          },
                          toWireType: function (e, r) {
                            "string" != typeof r &&
                              e5(
                                `Cannot pass non-string to C++ string type ${n}`
                              );
                            var o = a(r),
                              u = nc(4 + o + t);
                            return (
                              (S[u >> 2] = o >> s),
                              i(r, u + 4, o + t),
                              null !== e && e.push(nu, u),
                              u
                            );
                          },
                          argPackAdvance: 8,
                          readValueFromPointer: t_,
                          K: function (e) {
                            nu(e);
                          },
                        });
                      },
                      _embind_register_value_object: function (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a
                      ) {
                        ty[e] = {
                          name: tn(t),
                          Qa: tW(n, r),
                          X: tW(i, a),
                          fb: [],
                        };
                      },
                      _embind_register_value_object_field: function (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s,
                        u,
                        c
                      ) {
                        ty[e].fb.push({
                          Xb: tn(t),
                          cc: n,
                          ac: tW(r, i),
                          bc: a,
                          zc: o,
                          yc: tW(s, u),
                          Ac: c,
                        });
                      },
                      _embind_register_void: function (e, t) {
                        tE(e, {
                          mc: !0,
                          name: (t = tn(t)),
                          argPackAdvance: 0,
                          fromWireType: function () {},
                          toWireType: function () {},
                        });
                      },
                      _emval_as: function (e, t, n) {
                        (e = e8(e)), (t = tl(t, "emval::as"));
                        var r = [],
                          i = e9(r);
                        return (S[n >> 2] = i), t.toWireType(r, e);
                      },
                      _emval_call_method: function (e, t, n, r, i) {
                        (e = t3[e]), (t = e8(t)), (n = t4(n));
                        var a = [];
                        return (S[r >> 2] = e9(a)), e(t, n, a, i);
                      },
                      _emval_call_void_method: function (e, t, n, r) {
                        (e = t3[e])((t = e8(t)), (n = t4(n)), null, r);
                      },
                      _emval_decref: tz,
                      _emval_get_method_caller: function (e, t) {
                        var n,
                          r,
                          i = (function (e, t) {
                            for (var n = Array(e), r = 0; r < e; ++r)
                              n[r] = tl(S[(t + 4 * r) >> 2], "parameter " + r);
                            return n;
                          })(e, t),
                          a = i[0],
                          o =
                            t5[
                              (t =
                                a.name +
                                "_$" +
                                i
                                  .slice(1)
                                  .map(function (e) {
                                    return e.name;
                                  })
                                  .join("_") +
                                "$")
                            ];
                        if (void 0 !== o) return o;
                        var s = Array(e - 1);
                        return (
                          (n = (t, n, r, o) => {
                            for (var u = 0, c = 0; c < e - 1; ++c)
                              (s[c] = i[c + 1].readValueFromPointer(o + u)),
                                (u += i[c + 1].argPackAdvance);
                            for (c = 0, t = t[n].apply(t, s); c < e - 1; ++c)
                              i[c + 1].Rb && i[c + 1].Rb(s[c]);
                            if (!a.mc) return a.toWireType(r, t);
                          }),
                          (r = t3.length),
                          t3.push(n),
                          (o = r),
                          (t5[t] = o)
                        );
                      },
                      _emval_get_module_property: function (t) {
                        return e9(e[(t = t4(t))]);
                      },
                      _emval_get_property: function (e, t) {
                        return e9((e = e8(e))[(t = e8(t))]);
                      },
                      _emval_incref: function (e) {
                        4 < e && (e6.get(e).ub += 1);
                      },
                      _emval_new_cstring: function (e) {
                        return e9(t4(e));
                      },
                      _emval_new_object: function () {
                        return e9({});
                      },
                      _emval_run_destructors: function (e) {
                        tw(e8(e)), tz(e);
                      },
                      _emval_set_property: function (e, t, n) {
                        (e = e8(e)), (t = e8(t)), (n = e8(n)), (e[t] = n);
                      },
                      _emval_take_value: function (e, t) {
                        return e9(
                          (e = (e = tl(
                            e,
                            "_emval_take_value"
                          )).readValueFromPointer(t))
                        );
                      },
                      abort: () => {
                        X("");
                      },
                      emscripten_asm_const_int: (e, t, n) => {
                        var r;
                        for (t8.length = 0, n >>= 2; (r = M[t++]); )
                          (n += (105 != r) & n),
                            t8.push(105 == r ? j[n] : k[n++ >> 1]),
                            ++n;
                        return Q[e].apply(null, t8);
                      },
                      emscripten_memcpy_big: (e, t, n) =>
                        M.copyWithin(e, t, t + n),
                      emscripten_resize_heap: (e) => {
                        var t = M.length;
                        if (2147483648 < (e >>>= 0)) return !1;
                        for (var n = 1; 4 >= n; n *= 2) {
                          var r = t * (1 + 0.2 / n);
                          r = Math.min(r, e + 100663296);
                          var i = Math;
                          r = Math.max(e, r);
                          e: {
                            i =
                              (i.min.call(
                                i,
                                2147483648,
                                r + ((65536 - (r % 65536)) % 65536)
                              ) -
                                T.buffer.byteLength +
                                65535) >>>
                              16;
                            try {
                              T.grow(i), I();
                              var a = 1;
                              break e;
                            } catch (e) {}
                            a = void 0;
                          }
                          if (a) return !0;
                        }
                        return !1;
                      },
                      environ_get: (e, t) => {
                        var n = 0;
                        return (
                          t7().forEach(function (r, i) {
                            var a = t + n;
                            for (
                              i = S[(e + 4 * i) >> 2] = a, a = 0;
                              a < r.length;
                              ++a
                            )
                              P[i++ >> 0] = r.charCodeAt(a);
                            (P[i >> 0] = 0), (n += r.length + 1);
                          }),
                          0
                        );
                      },
                      environ_sizes_get: (e, t) => {
                        var n = t7();
                        S[e >> 2] = n.length;
                        var r = 0;
                        return (
                          n.forEach(function (e) {
                            r += e.length + 1;
                          }),
                          (S[t >> 2] = r),
                          0
                        );
                      },
                      fd_close: function (e) {
                        try {
                          var t = eB(e);
                          if (null === t.Z) throw new eM(8);
                          t.Na && (t.Na = null);
                          try {
                            t.m.close && t.m.close(t);
                          } catch (e) {
                            throw e;
                          } finally {
                            eR[t.Z] = null;
                          }
                          return (t.Z = null), 0;
                        } catch (e) {
                          if (void 0 === eQ || "ErrnoError" !== e.name) throw e;
                          return e.Y;
                        }
                      },
                      fd_read: function (e, t, n, r) {
                        try {
                          e: {
                            var i = eB(e);
                            e = t;
                            for (var a, o = (t = 0); o < n; o++) {
                              var s = S[e >> 2],
                                u = S[(e + 4) >> 2];
                              e += 8;
                              var c = a,
                                l = P;
                              if (0 > u || 0 > c) throw new eM(28);
                              if (null === i.Z || 1 == (2097155 & i.flags))
                                throw new eM(8);
                              if (16384 == (61440 & i.node.mode))
                                throw new eM(31);
                              if (!i.m.read) throw new eM(28);
                              var h = void 0 !== c;
                              if (h) {
                                if (!i.seekable) throw new eM(70);
                              } else c = i.position;
                              var f = i.m.read(i, l, s, u, c);
                              if ((h || (i.position += f), 0 > f)) {
                                var d = -1;
                                break e;
                              }
                              if (((t += f), f < u)) break;
                              void 0 !== a && (a += f);
                            }
                            d = t;
                          }
                          return (S[r >> 2] = d), 0;
                        } catch (e) {
                          if (void 0 === eQ || "ErrnoError" !== e.name) throw e;
                          return e.Y;
                        }
                      },
                      fd_seek: function (e, t, n, r, i) {
                        t =
                          (n + 2097152) >>> 0 < 4194305 - !!t
                            ? (t >>> 0) + 4294967296 * n
                            : NaN;
                        try {
                          if (isNaN(t)) return 61;
                          var a = eB(e);
                          return (
                            eq(a, t, r),
                            (K = [
                              a.position >>> 0,
                              ((J = a.position),
                              1 <= +Math.abs(J)
                                ? 0 < J
                                  ? +Math.floor(J / 4294967296) >>> 0
                                  : ~~+Math.ceil(
                                      (J - +(~~J >>> 0)) / 4294967296
                                    ) >>> 0
                                : 0),
                            ]),
                            (j[i >> 2] = K[0]),
                            (j[(i + 4) >> 2] = K[1]),
                            a.Na && 0 === t && 0 === r && (a.Na = null),
                            0
                          );
                        } catch (e) {
                          if (void 0 === eQ || "ErrnoError" !== e.name) throw e;
                          return e.Y;
                        }
                      },
                      fd_write: function (e, t, n, r) {
                        try {
                          e: {
                            var i = eB(e);
                            e = t;
                            for (var a, o = (t = 0); o < n; o++) {
                              var s = S[e >> 2],
                                u = S[(e + 4) >> 2];
                              e += 8;
                              var c = a,
                                l = P;
                              if (0 > u || 0 > c) throw new eM(28);
                              if (null === i.Z || 0 == (2097155 & i.flags))
                                throw new eM(8);
                              if (16384 == (61440 & i.node.mode))
                                throw new eM(31);
                              if (!i.m.write) throw new eM(28);
                              i.seekable && 1024 & i.flags && eq(i, 0, 2);
                              var h = void 0 !== c;
                              if (h) {
                                if (!i.seekable) throw new eM(70);
                              } else c = i.position;
                              var f = i.m.write(i, l, s, u, c, void 0);
                              if ((h || (i.position += f), 0 > f)) {
                                var d = -1;
                                break e;
                              }
                              (t += f), void 0 !== a && (a += f);
                            }
                            d = t;
                          }
                          return (S[r >> 2] = d), 0;
                        } catch (e) {
                          if (void 0 === eQ || "ErrnoError" !== e.name) throw e;
                          return e.Y;
                        }
                      },
                      strftime_l: (e, t, n, r) => nr(e, t, n, r),
                    };
                    !(function () {
                      function t(t) {
                        if (
                          ((T = (E = t = t.exports).memory),
                          I(),
                          (D = E.__indirect_function_table),
                          B.unshift(E.__wasm_call_ctors),
                          W--,
                          e.monitorRunDependencies &&
                            e.monitorRunDependencies(W),
                          0 == W &&
                            (null !== N && (clearInterval(N), (N = null)), Y))
                        ) {
                          var n = Y;
                          (Y = null), n();
                        }
                        return t;
                      }
                      var n,
                        r,
                        i = { env: ns, wasi_snapshot_preview1: ns };
                      if (
                        (W++,
                        e.monitorRunDependencies && e.monitorRunDependencies(W),
                        e.instantiateWasm)
                      )
                        try {
                          return e.instantiateWasm(i, t);
                        } catch (e) {
                          C(
                            "Module.instantiateWasm callback failed with error: " +
                              e
                          ),
                            p(e);
                        }
                      ((n = function (e) {
                        t(e.instance);
                      }),
                      (r = q),
                      R ||
                      "function" != typeof WebAssembly.instantiateStreaming ||
                      H(r) ||
                      r.startsWith("file://") ||
                      "function" != typeof fetch
                        ? V(r, i, n)
                        : fetch(r, { credentials: "same-origin" }).then((e) =>
                            WebAssembly.instantiateStreaming(e, i).then(
                              n,
                              function (e) {
                                return (
                                  C("wasm streaming compile failed: " + e),
                                  C(
                                    "falling back to ArrayBuffer instantiation"
                                  ),
                                  V(r, i, n)
                                );
                              }
                            )
                          )).catch(p);
                    })();
                    var nu = (e) => (nu = E.free)(e),
                      nc = (e) => (nc = E.malloc)(e),
                      nl = (e._ma_device__on_notification_unlocked = (t) =>
                        (nl = e._ma_device__on_notification_unlocked =
                          E.ma_device__on_notification_unlocked)(t));
                    (e._ma_malloc_emscripten = (t, n) =>
                      (e._ma_malloc_emscripten = E.ma_malloc_emscripten)(t, n)),
                      (e._ma_free_emscripten = (t, n) =>
                        (e._ma_free_emscripten = E.ma_free_emscripten)(t, n));
                    var nh =
                        (e._ma_device_process_pcm_frames_capture__webaudio = (
                          t,
                          n,
                          r
                        ) =>
                          (nh =
                            e._ma_device_process_pcm_frames_capture__webaudio =
                              E.ma_device_process_pcm_frames_capture__webaudio)(
                            t,
                            n,
                            r
                          )),
                      nf = (e._ma_device_process_pcm_frames_playback__webaudio =
                        (t, n, r) =>
                          (nf =
                            e._ma_device_process_pcm_frames_playback__webaudio =
                              E.ma_device_process_pcm_frames_playback__webaudio)(
                            t,
                            n,
                            r
                          )),
                      nd = () => (nd = E.__errno_location)(),
                      np = (e) => (np = E.__getTypeName)(e);
                    function nm() {
                      function t() {
                        if (!f && ((f = !0), (e.calledRun = !0), !O)) {
                          if (
                            (e.noFSInit ||
                              eg ||
                              ((eg = !0),
                              eJ(),
                              (e.stdin = e.stdin),
                              (e.stdout = e.stdout),
                              (e.stderr = e.stderr),
                              e.stdin
                                ? eK("stdin", e.stdin)
                                : eG("/dev/tty", "/dev/stdin"),
                              e.stdout
                                ? eK("stdout", null, e.stdout)
                                : eG("/dev/tty", "/dev/stdout"),
                              e.stderr
                                ? eK("stderr", null, e.stderr)
                                : eG("/dev/tty1", "/dev/stderr"),
                              eV("/dev/stdin", 0),
                              eV("/dev/stdout", 1),
                              eV("/dev/stderr", 1)),
                            (eP = !1),
                            Z(B),
                            d(e),
                            e.onRuntimeInitialized && e.onRuntimeInitialized(),
                            e.postRun)
                          )
                            for (
                              "function" == typeof e.postRun &&
                              (e.postRun = [e.postRun]);
                              e.postRun.length;

                            ) {
                              var t = e.postRun.shift();
                              $.unshift(t);
                            }
                          Z($);
                        }
                      }
                      if (!(0 < W)) {
                        if (e.preRun)
                          for (
                            "function" == typeof e.preRun &&
                            (e.preRun = [e.preRun]);
                            e.preRun.length;

                          )
                            !(function () {
                              var t = e.preRun.shift();
                              U.unshift(t);
                            })();
                        Z(U),
                          0 < W ||
                            (e.setStatus
                              ? (e.setStatus("Running..."),
                                setTimeout(function () {
                                  setTimeout(function () {
                                    e.setStatus("");
                                  }, 1),
                                    t();
                                }, 1))
                              : t());
                      }
                    }
                    if (
                      ((e.__embind_initialize_bindings = () =>
                        (e.__embind_initialize_bindings =
                          E._embind_initialize_bindings)()),
                      (e.dynCall_iiji = (t, n, r, i, a) =>
                        (e.dynCall_iiji = E.dynCall_iiji)(t, n, r, i, a)),
                      (e.dynCall_iiiji = (t, n, r, i, a, o) =>
                        (e.dynCall_iiiji = E.dynCall_iiiji)(t, n, r, i, a, o)),
                      (e.dynCall_jiji = (t, n, r, i, a) =>
                        (e.dynCall_jiji = E.dynCall_jiji)(t, n, r, i, a)),
                      (e.dynCall_iij = (t, n, r, i) =>
                        (e.dynCall_iij = E.dynCall_iij)(t, n, r, i)),
                      (e.dynCall_jii = (t, n, r) =>
                        (e.dynCall_jii = E.dynCall_jii)(t, n, r)),
                      (e.dynCall_viijii = (t, n, r, i, a, o, s) =>
                        (e.dynCall_viijii = E.dynCall_viijii)(
                          t,
                          n,
                          r,
                          i,
                          a,
                          o,
                          s
                        )),
                      (e.dynCall_iiiiij = (t, n, r, i, a, o, s) =>
                        (e.dynCall_iiiiij = E.dynCall_iiiiij)(
                          t,
                          n,
                          r,
                          i,
                          a,
                          o,
                          s
                        )),
                      (e.dynCall_iiiiijj = (t, n, r, i, a, o, s, u, c) =>
                        (e.dynCall_iiiiijj = E.dynCall_iiiiijj)(
                          t,
                          n,
                          r,
                          i,
                          a,
                          o,
                          s,
                          u,
                          c
                        )),
                      (e.dynCall_iiiiiijj = (t, n, r, i, a, o, s, u, c, l) =>
                        (e.dynCall_iiiiiijj = E.dynCall_iiiiiijj)(
                          t,
                          n,
                          r,
                          i,
                          a,
                          o,
                          s,
                          u,
                          c,
                          l
                        )),
                      (Y = function e() {
                        f || nm(), f || (Y = e);
                      }),
                      e.preInit)
                    )
                      for (
                        "function" == typeof e.preInit &&
                        (e.preInit = [e.preInit]);
                        0 < e.preInit.length;

                      )
                        e.preInit.pop()();
                    return nm(), e.ready;
                  });
              },
              (e) => {
                e.exports = JSON.parse(
                  '{"name":"@rive-app/canvas","version":"2.13.2","description":"Rive\'s canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}'
                );
              },
              (e, t, n) => {
                n.r(t),
                  n.d(t, {
                    BLANK_URL: () => i.BLANK_URL,
                    registerTouchInteractions: () =>
                      r.registerTouchInteractions,
                    sanitizeUrl: () => i.sanitizeUrl,
                  });
                var r = n(4),
                  i = n(5);
              },
              (e, t, n) => {
                n.r(t), n.d(t, { registerTouchInteractions: () => a });
                var r = void 0,
                  i = function (e, t) {
                    var n, r;
                    return ["touchstart", "touchmove"].indexOf(e.type) > -1 &&
                      (null === (n = e.touches) || void 0 === n
                        ? void 0
                        : n.length)
                      ? (t || e.preventDefault(),
                        {
                          clientX: e.touches[0].clientX,
                          clientY: e.touches[0].clientY,
                        })
                      : "touchend" === e.type &&
                        (null === (r = e.changedTouches) || void 0 === r
                          ? void 0
                          : r.length)
                      ? {
                          clientX: e.changedTouches[0].clientX,
                          clientY: e.changedTouches[0].clientY,
                        }
                      : { clientX: e.clientX, clientY: e.clientY };
                  },
                  a = function (e) {
                    var t = e.canvas,
                      n = e.artboard,
                      a = e.stateMachines,
                      o = void 0 === a ? [] : a,
                      s = e.renderer,
                      u = e.rive,
                      c = e.fit,
                      l = e.alignment,
                      h = e.isTouchScrollEnabled,
                      f = void 0 !== h && h;
                    if (
                      !t ||
                      !o.length ||
                      !s ||
                      !u ||
                      !n ||
                      "undefined" == typeof window
                    )
                      return null;
                    var d = function (e) {
                      var t = e.currentTarget.getBoundingClientRect(),
                        r = i(e, f),
                        a = r.clientX,
                        s = r.clientY;
                      if (a || s) {
                        var h = a - t.left,
                          d = s - t.top,
                          p = u.computeAlignment(
                            c,
                            l,
                            { minX: 0, minY: 0, maxX: t.width, maxY: t.height },
                            n.bounds
                          ),
                          m = new u.Mat2D();
                        p.invert(m);
                        var v = new u.Vec2D(h, d),
                          g = u.mapXY(m, v),
                          b = g.x(),
                          y = g.y();
                        switch (
                          (g.delete(),
                          m.delete(),
                          v.delete(),
                          p.delete(),
                          e.type)
                        ) {
                          case "mouseout":
                            for (var w = 0; w < o.length; w++) {
                              var _ = o[w];
                              _.pointerMove(
                                b < 0 ? b - 1e4 : b + 1e4,
                                y < 0 ? y - 1e4 : y + 1e4
                              );
                            }
                            break;
                          case "touchmove":
                          case "mouseover":
                          case "mousemove":
                            for (var A = 0; A < o.length; A++) {
                              var _ = o[A];
                              _.pointerMove(b, y);
                            }
                            break;
                          case "touchstart":
                          case "mousedown":
                            for (var C = 0; C < o.length; C++) {
                              var _ = o[C];
                              _.pointerDown(b, y);
                            }
                            break;
                          case "touchend":
                          case "mouseup":
                            for (var R = 0; R < o.length; R++) {
                              var _ = o[R];
                              _.pointerUp(b, y);
                            }
                        }
                      }
                    }.bind(r);
                    return (
                      t.addEventListener("mouseover", d),
                      t.addEventListener("mouseout", d),
                      t.addEventListener("mousemove", d),
                      t.addEventListener("mousedown", d),
                      t.addEventListener("mouseup", d),
                      t.addEventListener("touchmove", d),
                      t.addEventListener("touchstart", d),
                      t.addEventListener("touchend", d),
                      function () {
                        t.removeEventListener("mouseover", d),
                          t.removeEventListener("mouseout", d),
                          t.removeEventListener("mousemove", d),
                          t.removeEventListener("mousedown", d),
                          t.removeEventListener("mouseup", d),
                          t.removeEventListener("touchmove", d),
                          t.removeEventListener("touchstart", d),
                          t.removeEventListener("touchend", d);
                      }
                    );
                  };
              },
              (e, t, n) => {
                n.r(t), n.d(t, { BLANK_URL: () => c, sanitizeUrl: () => l });
                var r = /^([^\w]*)(javascript|data|vbscript)/im,
                  i = /&#(\w+)(^\w|;)?/g,
                  a = /&(newline|tab);/gi,
                  o = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,
                  s = /^.+(:|&colon;)/gim,
                  u = [".", "/"],
                  c = "about:blank";
                function l(e) {
                  if (!e) return c;
                  var t = e
                    .replace(o, "")
                    .replace(i, function (e, t) {
                      return String.fromCharCode(t);
                    })
                    .replace(a, "")
                    .replace(o, "")
                    .trim();
                  if (!t) return c;
                  if (u.indexOf(t[0]) > -1) return t;
                  var n = t.match(s);
                  if (!n) return t;
                  var l = n[0];
                  return r.test(l) ? c : t;
                }
              },
            ],
            S = {};
          function x(e) {
            var t = S[e];
            if (void 0 !== t) return t.exports;
            var n = (S[e] = { exports: {} });
            return j[e](n, n.exports, x), n.exports;
          }
          (x.d = (e, t) => {
            for (var n in t)
              x.o(t, n) &&
                !x.o(e, n) &&
                Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
          }),
            (x.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
            (x.r = (e) => {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            });
          var k = {};
          return (
            x.r(k),
            x.d(k, {
              Alignment: () => t,
              EventType: () => i,
              Fit: () => e,
              Layout: () => d,
              LoopType: () => a,
              Rive: () => T,
              RiveEventType: () => r,
              RuntimeLoader: () => p,
              StateMachineInput: () => g,
              StateMachineInputType: () => n,
              Testing: () => M,
              decodeFont: () => F,
              decodeImage: () => L,
            }),
            (o = x(1)),
            (s = x(2)),
            (u = x(3)),
            (c = function (e, t, n, r) {
              return new (n || (n = Promise))(function (i, a) {
                function o(e) {
                  try {
                    u(r.next(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function s(e) {
                  try {
                    u(r.throw(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? i(e.value)
                    : ((t = e.value) instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })
                      ).then(o, s);
                }
                u((r = r.apply(e, t || [])).next());
              });
            }),
            (l = function (e, t) {
              var n,
                r,
                i,
                a,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (a = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this;
                  }),
                a
              );
              function s(s) {
                return function (u) {
                  return (function (s) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a && ((a = 0), s[0] && (o = 0)), o; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (i =
                              2 & s[0]
                                ? r.return
                                : s[0]
                                ? r.throw || ((i = r.return) && i.call(r), 0)
                                : r.next) &&
                            !(i = i.call(r, s[1])).done)
                        )
                          return i;
                        switch (
                          ((r = 0), i && (s = [2 & s[0], i.value]), s[0])
                        ) {
                          case 0:
                          case 1:
                            i = s;
                            break;
                          case 4:
                            return o.label++, { value: s[1], done: !1 };
                          case 5:
                            o.label++, (r = s[1]), (s = [0]);
                            continue;
                          case 7:
                            (s = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(i =
                                (i = o.trys).length > 0 && i[i.length - 1]) &&
                              (6 === s[0] || 2 === s[0])
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === s[0] &&
                              (!i || (s[1] > i[0] && s[1] < i[3]))
                            ) {
                              o.label = s[1];
                              break;
                            }
                            if (6 === s[0] && o.label < i[1]) {
                              (o.label = i[1]), (i = s);
                              break;
                            }
                            if (i && o.label < i[2]) {
                              (o.label = i[2]), o.ops.push(s);
                              break;
                            }
                            i[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        s = t.call(e, o);
                      } catch (e) {
                        (s = [6, e]), (r = 0);
                      } finally {
                        n = i = 0;
                      }
                    if (5 & s[0]) throw s[1];
                    return { value: s[0] ? s[1] : void 0, done: !0 };
                  })([s, u]);
                };
              }
            }),
            ((h = e || (e = {})).Cover = "cover"),
            (h.Contain = "contain"),
            (h.Fill = "fill"),
            (h.FitWidth = "fitWidth"),
            (h.FitHeight = "fitHeight"),
            (h.None = "none"),
            (h.ScaleDown = "scaleDown"),
            ((f = t || (t = {})).Center = "center"),
            (f.TopLeft = "topLeft"),
            (f.TopCenter = "topCenter"),
            (f.TopRight = "topRight"),
            (f.CenterLeft = "centerLeft"),
            (f.CenterRight = "centerRight"),
            (f.BottomLeft = "bottomLeft"),
            (f.BottomCenter = "bottomCenter"),
            (f.BottomRight = "bottomRight"),
            (d = (function () {
              function n(n) {
                var r, i, a, o, s, u;
                (this.fit =
                  null !== (r = null == n ? void 0 : n.fit) && void 0 !== r
                    ? r
                    : e.Contain),
                  (this.alignment =
                    null !== (i = null == n ? void 0 : n.alignment) &&
                    void 0 !== i
                      ? i
                      : t.Center),
                  (this.minX =
                    null !== (a = null == n ? void 0 : n.minX) && void 0 !== a
                      ? a
                      : 0),
                  (this.minY =
                    null !== (o = null == n ? void 0 : n.minY) && void 0 !== o
                      ? o
                      : 0),
                  (this.maxX =
                    null !== (s = null == n ? void 0 : n.maxX) && void 0 !== s
                      ? s
                      : 0),
                  (this.maxY =
                    null !== (u = null == n ? void 0 : n.maxY) && void 0 !== u
                      ? u
                      : 0);
              }
              return (
                (n.new = function (e) {
                  var t = e.fit,
                    r = e.alignment,
                    i = e.minX,
                    a = e.minY,
                    o = e.maxX,
                    s = e.maxY;
                  return (
                    console.warn(
                      "This function is deprecated: please use `new Layout({})` instead"
                    ),
                    new n({
                      fit: t,
                      alignment: r,
                      minX: i,
                      minY: a,
                      maxX: o,
                      maxY: s,
                    })
                  );
                }),
                (n.prototype.copyWith = function (e) {
                  var t = e.fit,
                    r = e.alignment,
                    i = e.minX,
                    a = e.minY,
                    o = e.maxX,
                    s = e.maxY;
                  return new n({
                    fit: null != t ? t : this.fit,
                    alignment: null != r ? r : this.alignment,
                    minX: null != i ? i : this.minX,
                    minY: null != a ? a : this.minY,
                    maxX: null != o ? o : this.maxX,
                    maxY: null != s ? s : this.maxY,
                  });
                }),
                (n.prototype.runtimeFit = function (t) {
                  var n;
                  return this.cachedRuntimeFit
                    ? this.cachedRuntimeFit
                    : ((n =
                        this.fit === e.Cover
                          ? t.Fit.cover
                          : this.fit === e.Contain
                          ? t.Fit.contain
                          : this.fit === e.Fill
                          ? t.Fit.fill
                          : this.fit === e.FitWidth
                          ? t.Fit.fitWidth
                          : this.fit === e.FitHeight
                          ? t.Fit.fitHeight
                          : this.fit === e.ScaleDown
                          ? t.Fit.scaleDown
                          : t.Fit.none),
                      (this.cachedRuntimeFit = n),
                      n);
                }),
                (n.prototype.runtimeAlignment = function (e) {
                  var n;
                  return this.cachedRuntimeAlignment
                    ? this.cachedRuntimeAlignment
                    : ((n =
                        this.alignment === t.TopLeft
                          ? e.Alignment.topLeft
                          : this.alignment === t.TopCenter
                          ? e.Alignment.topCenter
                          : this.alignment === t.TopRight
                          ? e.Alignment.topRight
                          : this.alignment === t.CenterLeft
                          ? e.Alignment.centerLeft
                          : this.alignment === t.CenterRight
                          ? e.Alignment.centerRight
                          : this.alignment === t.BottomLeft
                          ? e.Alignment.bottomLeft
                          : this.alignment === t.BottomCenter
                          ? e.Alignment.bottomCenter
                          : this.alignment === t.BottomRight
                          ? e.Alignment.bottomRight
                          : e.Alignment.center),
                      (this.cachedRuntimeAlignment = n),
                      n);
                }),
                n
              );
            })()),
            (p = (function () {
              function e() {}
              return (
                (e.loadRuntime = function () {
                  o.default({
                    locateFile: function () {
                      return e.wasmURL;
                    },
                  })
                    .then(function (t) {
                      var n;
                      for (e.runtime = t; e.callBackQueue.length > 0; )
                        null === (n = e.callBackQueue.shift()) ||
                          void 0 === n ||
                          n(e.runtime);
                    })
                    .catch(function () {
                      var t = "https://cdn.jsdelivr.net/npm/"
                        .concat(s.name, "@")
                        .concat(s.version, "/rive.wasm");
                      e.wasmURL.toLowerCase() !== t
                        ? (console.warn(
                            "Failed to load WASM from ".concat(
                              e.wasmURL,
                              ", trying jsdelivr as a backup"
                            )
                          ),
                          e.setWasmUrl(t),
                          e.loadRuntime())
                        : console.error(
                            "Could not load Rive WASM file from unpkg or jsdelivr, network connection may be down, or         you may need to call set a new WASM source via RuntimeLoader.setWasmUrl() and call         RuntimeLoader.loadRuntime() again"
                          );
                    });
                }),
                (e.getInstance = function (t) {
                  e.isLoading || ((e.isLoading = !0), e.loadRuntime()),
                    e.runtime ? t(e.runtime) : e.callBackQueue.push(t);
                }),
                (e.awaitInstance = function () {
                  return new Promise(function (t) {
                    return e.getInstance(function (e) {
                      return t(e);
                    });
                  });
                }),
                (e.setWasmUrl = function (t) {
                  e.wasmURL = t;
                }),
                (e.isLoading = !1),
                (e.callBackQueue = []),
                (e.wasmURL = "https://unpkg.com/"
                  .concat(s.name, "@")
                  .concat(s.version, "/rive.wasm")),
                e
              );
            })()),
            (m = (function () {
              function e(e, t, n, r) {
                (this.animation = e),
                  (this.artboard = t),
                  (this.playing = r),
                  (this.loopCount = 0),
                  (this.scrubTo = null),
                  (this.instance = new n.LinearAnimationInstance(e, t));
              }
              return (
                Object.defineProperty(e.prototype, "name", {
                  get: function () {
                    return this.animation.name;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "time", {
                  get: function () {
                    return this.instance.time;
                  },
                  set: function (e) {
                    this.instance.time = e;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "loopValue", {
                  get: function () {
                    return this.animation.loopValue;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.advance = function (e) {
                  null === this.scrubTo
                    ? this.instance.advance(e)
                    : ((this.instance.time = 0),
                      this.instance.advance(this.scrubTo),
                      (this.scrubTo = null));
                }),
                (e.prototype.apply = function (e) {
                  this.instance.apply(e);
                }),
                Object.defineProperty(e.prototype, "needsScrub", {
                  get: function () {
                    return null !== this.scrubTo;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.cleanup = function () {
                  this.instance.delete();
                }),
                e
              );
            })()),
            ((v = n || (n = {}))[(v.Number = 56)] = "Number"),
            (v[(v.Trigger = 58)] = "Trigger"),
            (v[(v.Boolean = 59)] = "Boolean"),
            (g = (function () {
              function e(e, t) {
                (this.type = e), (this.runtimeInput = t);
              }
              return (
                Object.defineProperty(e.prototype, "name", {
                  get: function () {
                    return this.runtimeInput.name;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "value", {
                  get: function () {
                    return this.runtimeInput.value;
                  },
                  set: function (e) {
                    this.runtimeInput.value = e;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.fire = function () {
                  this.type === n.Trigger && this.runtimeInput.fire();
                }),
                e
              );
            })()),
            ((b = r || (r = {}))[(b.General = 128)] = "General"),
            (b[(b.OpenUrl = 131)] = "OpenUrl"),
            (y = (function () {
              function e(e, t, n, r) {
                (this.stateMachine = e),
                  (this.playing = n),
                  (this.artboard = r),
                  (this.inputs = []),
                  (this.instance = new t.StateMachineInstance(e, r)),
                  this.initInputs(t);
              }
              return (
                Object.defineProperty(e.prototype, "name", {
                  get: function () {
                    return this.stateMachine.name;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "statesChanged", {
                  get: function () {
                    for (
                      var e = [], t = 0;
                      t < this.instance.stateChangedCount();
                      t++
                    )
                      e.push(this.instance.stateChangedNameByIndex(t));
                    return e;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.advance = function (e) {
                  this.instance.advance(e);
                }),
                (e.prototype.reportedEventCount = function () {
                  return this.instance.reportedEventCount();
                }),
                (e.prototype.reportedEventAt = function (e) {
                  return this.instance.reportedEventAt(e);
                }),
                (e.prototype.initInputs = function (e) {
                  for (var t = 0; t < this.instance.inputCount(); t++) {
                    var n = this.instance.input(t);
                    this.inputs.push(this.mapRuntimeInput(n, e));
                  }
                }),
                (e.prototype.mapRuntimeInput = function (e, t) {
                  return e.type === t.SMIInput.bool
                    ? new g(n.Boolean, e.asBool())
                    : e.type === t.SMIInput.number
                    ? new g(n.Number, e.asNumber())
                    : e.type === t.SMIInput.trigger
                    ? new g(n.Trigger, e.asTrigger())
                    : void 0;
                }),
                (e.prototype.cleanup = function () {
                  this.instance.delete();
                }),
                e
              );
            })()),
            (w = (function () {
              function e(e, t, n, r, i) {
                void 0 === r && (r = []),
                  void 0 === i && (i = []),
                  (this.runtime = e),
                  (this.artboard = t),
                  (this.eventManager = n),
                  (this.animations = r),
                  (this.stateMachines = i);
              }
              return (
                (e.prototype.add = function (e, t, n) {
                  if ((void 0 === n && (n = !0), 0 === (e = P(e)).length))
                    this.animations.forEach(function (e) {
                      return (e.playing = t);
                    }),
                      this.stateMachines.forEach(function (e) {
                        return (e.playing = t);
                      });
                  else
                    for (
                      var r = this.animations.map(function (e) {
                          return e.name;
                        }),
                        a = this.stateMachines.map(function (e) {
                          return e.name;
                        }),
                        o = 0;
                      o < e.length;
                      o++
                    ) {
                      var s = r.indexOf(e[o]),
                        u = a.indexOf(e[o]);
                      if (s >= 0 || u >= 0)
                        s >= 0
                          ? (this.animations[s].playing = t)
                          : (this.stateMachines[u].playing = t);
                      else {
                        var c = this.artboard.animationByName(e[o]);
                        if (c) {
                          var l = new m(c, this.artboard, this.runtime, t);
                          l.advance(0), l.apply(1), this.animations.push(l);
                        } else {
                          var h = this.artboard.stateMachineByName(e[o]);
                          if (h) {
                            var f = new y(h, this.runtime, t, this.artboard);
                            this.stateMachines.push(f);
                          }
                        }
                      }
                    }
                  return (
                    n &&
                      (t
                        ? this.eventManager.fire({
                            type: i.Play,
                            data: this.playing,
                          })
                        : this.eventManager.fire({
                            type: i.Pause,
                            data: this.paused,
                          })),
                    t ? this.playing : this.paused
                  );
                }),
                (e.prototype.initLinearAnimations = function (e, t) {
                  for (
                    var n = this.animations.map(function (e) {
                        return e.name;
                      }),
                      r = 0;
                    r < e.length;
                    r++
                  ) {
                    var i = n.indexOf(e[r]);
                    if (i >= 0) this.animations[i].playing = t;
                    else {
                      var a = this.artboard.animationByName(e[r]);
                      if (a) {
                        var o = new m(a, this.artboard, this.runtime, t);
                        o.advance(0), o.apply(1), this.animations.push(o);
                      }
                    }
                  }
                }),
                (e.prototype.initStateMachines = function (e, t) {
                  for (
                    var n = this.stateMachines.map(function (e) {
                        return e.name;
                      }),
                      r = 0;
                    r < e.length;
                    r++
                  ) {
                    var i = n.indexOf(e[r]);
                    if (i >= 0) this.stateMachines[i].playing = t;
                    else {
                      var a = this.artboard.stateMachineByName(e[r]);
                      if (a) {
                        var o = new y(a, this.runtime, t, this.artboard);
                        this.stateMachines.push(o);
                      } else this.initLinearAnimations([e[r]], t);
                    }
                  }
                }),
                (e.prototype.play = function (e) {
                  return this.add(e, !0);
                }),
                (e.prototype.pause = function (e) {
                  return this.add(e, !1);
                }),
                (e.prototype.scrub = function (e, t) {
                  var n = this.animations.filter(function (t) {
                    return e.includes(t.name);
                  });
                  return (
                    n.forEach(function (e) {
                      return (e.scrubTo = t);
                    }),
                    n.map(function (e) {
                      return e.name;
                    })
                  );
                }),
                Object.defineProperty(e.prototype, "playing", {
                  get: function () {
                    return this.animations
                      .filter(function (e) {
                        return e.playing;
                      })
                      .map(function (e) {
                        return e.name;
                      })
                      .concat(
                        this.stateMachines
                          .filter(function (e) {
                            return e.playing;
                          })
                          .map(function (e) {
                            return e.name;
                          })
                      );
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "paused", {
                  get: function () {
                    return this.animations
                      .filter(function (e) {
                        return !e.playing;
                      })
                      .map(function (e) {
                        return e.name;
                      })
                      .concat(
                        this.stateMachines
                          .filter(function (e) {
                            return !e.playing;
                          })
                          .map(function (e) {
                            return e.name;
                          })
                      );
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.stop = function (e) {
                  var t = this;
                  e = P(e);
                  var n = [];
                  if (0 === e.length)
                    (n = this.animations
                      .map(function (e) {
                        return e.name;
                      })
                      .concat(
                        this.stateMachines.map(function (e) {
                          return e.name;
                        })
                      )),
                      this.animations.forEach(function (e) {
                        return e.cleanup();
                      }),
                      this.stateMachines.forEach(function (e) {
                        return e.cleanup();
                      }),
                      this.animations.splice(0, this.animations.length),
                      this.stateMachines.splice(0, this.stateMachines.length);
                  else {
                    var r = this.animations.filter(function (t) {
                      return e.includes(t.name);
                    });
                    r.forEach(function (e) {
                      e.cleanup(),
                        t.animations.splice(t.animations.indexOf(e), 1);
                    });
                    var a = this.stateMachines.filter(function (t) {
                      return e.includes(t.name);
                    });
                    a.forEach(function (e) {
                      e.cleanup(),
                        t.stateMachines.splice(t.stateMachines.indexOf(e), 1);
                    }),
                      (n = r
                        .map(function (e) {
                          return e.name;
                        })
                        .concat(
                          a.map(function (e) {
                            return e.name;
                          })
                        ));
                  }
                  return this.eventManager.fire({ type: i.Stop, data: n }), n;
                }),
                Object.defineProperty(e.prototype, "isPlaying", {
                  get: function () {
                    return (
                      this.animations.reduce(function (e, t) {
                        return e || t.playing;
                      }, !1) ||
                      this.stateMachines.reduce(function (e, t) {
                        return e || t.playing;
                      }, !1)
                    );
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "isPaused", {
                  get: function () {
                    return (
                      !this.isPlaying &&
                      (this.animations.length > 0 ||
                        this.stateMachines.length > 0)
                    );
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "isStopped", {
                  get: function () {
                    return (
                      0 === this.animations.length &&
                      0 === this.stateMachines.length
                    );
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.atLeastOne = function (e, t) {
                  var n;
                  return (
                    void 0 === t && (t = !0),
                    0 === this.animations.length &&
                      0 === this.stateMachines.length &&
                      (this.artboard.animationCount() > 0
                        ? this.add(
                            [(n = this.artboard.animationByIndex(0).name)],
                            e,
                            t
                          )
                        : this.artboard.stateMachineCount() > 0 &&
                          this.add(
                            [(n = this.artboard.stateMachineByIndex(0).name)],
                            e,
                            t
                          )),
                    n
                  );
                }),
                (e.prototype.handleLooping = function () {
                  for (
                    var e = 0,
                      t = this.animations.filter(function (e) {
                        return e.playing;
                      });
                    e < t.length;
                    e++
                  ) {
                    var n = t[e];
                    0 === n.loopValue && n.loopCount
                      ? ((n.loopCount = 0), this.stop(n.name))
                      : 1 === n.loopValue && n.loopCount
                      ? (this.eventManager.fire({
                          type: i.Loop,
                          data: { animation: n.name, type: a.Loop },
                        }),
                        (n.loopCount = 0))
                      : 2 === n.loopValue &&
                        n.loopCount > 1 &&
                        (this.eventManager.fire({
                          type: i.Loop,
                          data: { animation: n.name, type: a.PingPong },
                        }),
                        (n.loopCount = 0));
                  }
                }),
                (e.prototype.handleStateChanges = function () {
                  for (
                    var e = [],
                      t = 0,
                      n = this.stateMachines.filter(function (e) {
                        return e.playing;
                      });
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    e.push.apply(e, r.statesChanged);
                  }
                  e.length > 0 &&
                    this.eventManager.fire({ type: i.StateChange, data: e });
                }),
                (e.prototype.handleAdvancing = function (e) {
                  this.eventManager.fire({ type: i.Advance, data: e });
                }),
                e
              );
            })()),
            ((_ = i || (i = {})).Load = "load"),
            (_.LoadError = "loaderror"),
            (_.Play = "play"),
            (_.Pause = "pause"),
            (_.Stop = "stop"),
            (_.Loop = "loop"),
            (_.Draw = "draw"),
            (_.Advance = "advance"),
            (_.StateChange = "statechange"),
            (_.RiveEvent = "riveevent"),
            ((A = a || (a = {})).OneShot = "oneshot"),
            (A.Loop = "loop"),
            (A.PingPong = "pingpong"),
            (C = (function () {
              function e(e) {
                void 0 === e && (e = []), (this.listeners = e);
              }
              return (
                (e.prototype.getListeners = function (e) {
                  return this.listeners.filter(function (t) {
                    return t.type === e;
                  });
                }),
                (e.prototype.add = function (e) {
                  this.listeners.includes(e) || this.listeners.push(e);
                }),
                (e.prototype.remove = function (e) {
                  for (var t = 0; t < this.listeners.length; t++) {
                    var n = this.listeners[t];
                    if (n.type === e.type && n.callback === e.callback) {
                      this.listeners.splice(t, 1);
                      break;
                    }
                  }
                }),
                (e.prototype.removeAll = function (e) {
                  var t = this;
                  e
                    ? this.listeners
                        .filter(function (t) {
                          return t.type === e;
                        })
                        .forEach(function (e) {
                          return t.remove(e);
                        })
                    : this.listeners.splice(0, this.listeners.length);
                }),
                (e.prototype.fire = function (e) {
                  this.getListeners(e.type).forEach(function (t) {
                    return t.callback(e);
                  });
                }),
                e
              );
            })()),
            (R = (function () {
              function e(e) {
                (this.eventManager = e), (this.queue = []);
              }
              return (
                (e.prototype.add = function (e) {
                  this.queue.push(e);
                }),
                (e.prototype.process = function () {
                  for (; this.queue.length > 0; ) {
                    var e = this.queue.shift();
                    (null == e ? void 0 : e.action) && e.action(),
                      (null == e ? void 0 : e.event) &&
                        this.eventManager.fire(e.event);
                  }
                }),
                e
              );
            })()),
            (T = (function () {
              function e(e) {
                var t;
                (this.loaded = !1),
                  (this.readyForPlaying = !1),
                  (this.artboard = null),
                  (this.eventCleanup = null),
                  (this.shouldDisableRiveListeners = !1),
                  (this.automaticallyHandleEvents = !1),
                  (this.enableRiveAssetCDN = !0),
                  (this.durations = []),
                  (this.frameTimes = []),
                  (this.frameCount = 0),
                  (this.isTouchScrollEnabled = !1),
                  (this.renderSecondTimer = 0),
                  (this.canvas = e.canvas),
                  (this.src = e.src),
                  (this.buffer = e.buffer),
                  (this.layout =
                    null !== (t = e.layout) && void 0 !== t ? t : new d()),
                  (this.shouldDisableRiveListeners =
                    !!e.shouldDisableRiveListeners),
                  (this.isTouchScrollEnabled = !!e.isTouchScrollEnabled),
                  (this.automaticallyHandleEvents =
                    !!e.automaticallyHandleEvents),
                  (this.enableRiveAssetCDN =
                    void 0 === e.enableRiveAssetCDN || e.enableRiveAssetCDN),
                  (this.eventManager = new C()),
                  e.onLoad && this.on(i.Load, e.onLoad),
                  e.onLoadError && this.on(i.LoadError, e.onLoadError),
                  e.onPlay && this.on(i.Play, e.onPlay),
                  e.onPause && this.on(i.Pause, e.onPause),
                  e.onStop && this.on(i.Stop, e.onStop),
                  e.onLoop && this.on(i.Loop, e.onLoop),
                  e.onStateChange && this.on(i.StateChange, e.onStateChange),
                  e.onAdvance && this.on(i.Advance, e.onAdvance),
                  e.onload && !e.onLoad && this.on(i.Load, e.onload),
                  e.onloaderror &&
                    !e.onLoadError &&
                    this.on(i.LoadError, e.onloaderror),
                  e.onplay && !e.onPlay && this.on(i.Play, e.onplay),
                  e.onpause && !e.onPause && this.on(i.Pause, e.onpause),
                  e.onstop && !e.onStop && this.on(i.Stop, e.onstop),
                  e.onloop && !e.onLoop && this.on(i.Loop, e.onloop),
                  e.onstatechange &&
                    !e.onStateChange &&
                    this.on(i.StateChange, e.onstatechange),
                  e.assetLoader && (this.assetLoader = e.assetLoader),
                  (this.taskQueue = new R(this.eventManager)),
                  this.init({
                    src: this.src,
                    buffer: this.buffer,
                    autoplay: e.autoplay,
                    animations: e.animations,
                    stateMachines: e.stateMachines,
                    artboard: e.artboard,
                    useOffscreenRenderer: e.useOffscreenRenderer,
                  });
              }
              return (
                (e.new = function (t) {
                  return (
                    console.warn(
                      "This function is deprecated: please use `new Rive({})` instead"
                    ),
                    new e(t)
                  );
                }),
                (e.prototype.init = function (t) {
                  var n = this,
                    r = t.src,
                    i = t.buffer,
                    a = t.animations,
                    o = t.stateMachines,
                    s = t.artboard,
                    u = t.autoplay,
                    c = void 0 !== u && u,
                    l = t.useOffscreenRenderer,
                    h = void 0 !== l && l;
                  if (
                    ((this.src = r),
                    (this.buffer = i),
                    !this.src && !this.buffer)
                  )
                    throw Error(e.missingErrorMessage);
                  var f = P(a),
                    d = P(o);
                  (this.loaded = !1),
                    (this.readyForPlaying = !1),
                    p
                      .awaitInstance()
                      .then(function (e) {
                        (n.runtime = e),
                          (n.renderer = n.runtime.makeRenderer(n.canvas, h)),
                          n.canvas.width ||
                            n.canvas.height ||
                            n.resizeDrawingSurfaceToCanvas(),
                          n
                            .initData(s, f, d, c)
                            .then(function () {
                              return n.setupRiveListeners();
                            })
                            .catch(function (e) {
                              console.error(e);
                            });
                      })
                      .catch(function (e) {
                        console.error(e);
                      });
                }),
                (e.prototype.setupRiveListeners = function (e) {
                  var t = this;
                  if (!this.shouldDisableRiveListeners) {
                    var n = (this.animator.stateMachines || [])
                        .filter(function (e) {
                          return (
                            e.playing && t.runtime.hasListeners(e.instance)
                          );
                        })
                        .map(function (e) {
                          return e.instance;
                        }),
                      r = this.isTouchScrollEnabled;
                    e &&
                      "isTouchScrollEnabled" in e &&
                      (r = e.isTouchScrollEnabled),
                      (this.eventCleanup = (0, u.registerTouchInteractions)({
                        canvas: this.canvas,
                        artboard: this.artboard,
                        stateMachines: n,
                        renderer: this.renderer,
                        rive: this.runtime,
                        fit: this._layout.runtimeFit(this.runtime),
                        alignment: this._layout.runtimeAlignment(this.runtime),
                        isTouchScrollEnabled: r,
                      }));
                  }
                }),
                (e.prototype.removeRiveListeners = function () {
                  this.eventCleanup && this.eventCleanup();
                }),
                (e.prototype.initData = function (e, t, n, r) {
                  var a;
                  return c(this, void 0, void 0, function () {
                    var o, s, u, c;
                    return l(this, function (l) {
                      switch (l.label) {
                        case 0:
                          if (!this.src) return [3, 2];
                          return (o = this), [4, E(this.src)];
                        case 1:
                          (o.buffer = l.sent()), (l.label = 2);
                        case 2:
                          return (
                            this.assetLoader &&
                              (s = new this.runtime.CustomFileAssetLoader({
                                loadContents: this.assetLoader,
                              })),
                            (u = this),
                            [
                              4,
                              this.runtime.load(
                                new Uint8Array(this.buffer),
                                s,
                                this.enableRiveAssetCDN
                              ),
                            ]
                          );
                        case 3:
                          if (((u.file = l.sent()), this.file))
                            return (
                              this.initArtboard(e, t, n, r),
                              (this.loaded = !0),
                              this.eventManager.fire({
                                type: i.Load,
                                data:
                                  null !== (a = this.src) && void 0 !== a
                                    ? a
                                    : "buffer",
                              }),
                              (this.readyForPlaying = !0),
                              this.taskQueue.process(),
                              this.drawFrame(),
                              [2, Promise.resolve()]
                            );
                          return (
                            console.warn(
                              (c = "Problem loading file; may be corrupt!")
                            ),
                            this.eventManager.fire({
                              type: i.LoadError,
                              data: c,
                            }),
                            [2, Promise.reject(c)]
                          );
                      }
                    });
                  });
                }),
                (e.prototype.initArtboard = function (e, t, n, r) {
                  var a,
                    o = e
                      ? this.file.artboardByName(e)
                      : this.file.defaultArtboard();
                  if (!o) {
                    var s = "Invalid artboard name or no default artboard";
                    console.warn(s),
                      this.eventManager.fire({ type: i.LoadError, data: s });
                    return;
                  }
                  if (
                    ((this.artboard = o), 1 > this.artboard.animationCount())
                  ) {
                    var s = "Artboard has no animations";
                    throw (
                      (this.eventManager.fire({ type: i.LoadError, data: s }),
                      s)
                    );
                  }
                  (this.animator = new w(
                    this.runtime,
                    this.artboard,
                    this.eventManager
                  )),
                    t.length > 0 || n.length > 0
                      ? ((a = t.concat(n)),
                        this.animator.initLinearAnimations(t, r),
                        this.animator.initStateMachines(n, r))
                      : (a = [this.animator.atLeastOne(r, !1)]),
                    this.taskQueue.add({
                      event: { type: r ? i.Play : i.Pause, data: a },
                    });
                }),
                (e.prototype.drawFrame = function () {
                  this.startRendering();
                }),
                (e.prototype.draw = function (e, t) {
                  var n = performance.now();
                  (this.frameRequestId = null),
                    this.lastRenderTime || (this.lastRenderTime = e),
                    (this.renderSecondTimer += e - this.lastRenderTime),
                    this.renderSecondTimer > 5e3 &&
                      ((this.renderSecondTimer = 0), null == t || t());
                  var a = (e - this.lastRenderTime) / 1e3;
                  this.lastRenderTime = e;
                  for (
                    var o = this.animator.animations
                        .filter(function (e) {
                          return e.playing || e.needsScrub;
                        })
                        .sort(function (e) {
                          return e.needsScrub ? -1 : 1;
                        }),
                      s = 0;
                    s < o.length;
                    s++
                  ) {
                    var c = o[s];
                    c.advance(a),
                      c.instance.didLoop && (c.loopCount += 1),
                      c.apply(1);
                  }
                  for (
                    var l = this.animator.stateMachines.filter(function (e) {
                        return e.playing;
                      }),
                      h = 0;
                    h < l.length;
                    h++
                  ) {
                    var f = l[h],
                      d = f.reportedEventCount();
                    if (d)
                      for (var p = 0; p < d; p++) {
                        var m = f.reportedEventAt(p);
                        if (m) {
                          if (m.type === r.OpenUrl) {
                            if (
                              (this.eventManager.fire({
                                type: i.RiveEvent,
                                data: m,
                              }),
                              this.automaticallyHandleEvents)
                            ) {
                              var v = document.createElement("a"),
                                g = m.url,
                                b = m.target,
                                y = (0, u.sanitizeUrl)(g);
                              g && v.setAttribute("href", y),
                                b && v.setAttribute("target", b),
                                y && y !== u.BLANK_URL && v.click();
                            }
                          } else
                            this.eventManager.fire({
                              type: i.RiveEvent,
                              data: m,
                            });
                        }
                      }
                    f.advance(a);
                  }
                  this.artboard.advance(a);
                  var w = this.renderer;
                  w.clear(),
                    w.save(),
                    this.alignRenderer(),
                    this.artboard.draw(w),
                    w.restore(),
                    w.flush(),
                    this.animator.handleLooping(),
                    this.animator.handleStateChanges(),
                    this.animator.handleAdvancing(a),
                    this.frameCount++;
                  var _ = performance.now();
                  for (
                    this.frameTimes.push(_), this.durations.push(_ - n);
                    this.frameTimes[0] <= _ - 1e3;

                  )
                    this.frameTimes.shift(), this.durations.shift();
                  this.animator.isPlaying
                    ? this.startRendering()
                    : this.animator.isPaused
                    ? (this.lastRenderTime = 0)
                    : this.animator.isStopped && (this.lastRenderTime = 0);
                }),
                (e.prototype.alignRenderer = function () {
                  var e = this.renderer,
                    t = this.runtime,
                    n = this._layout,
                    r = this.artboard;
                  e.align(
                    n.runtimeFit(t),
                    n.runtimeAlignment(t),
                    { minX: n.minX, minY: n.minY, maxX: n.maxX, maxY: n.maxY },
                    r.bounds
                  );
                }),
                Object.defineProperty(e.prototype, "fps", {
                  get: function () {
                    return this.durations.length;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "frameTime", {
                  get: function () {
                    return 0 === this.durations.length
                      ? 0
                      : (
                          this.durations.reduce(function (e, t) {
                            return e + t;
                          }, 0) / this.durations.length
                        ).toFixed(4);
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.cleanup = function () {
                  var e;
                  this.stopRendering(),
                    this.cleanupInstances(),
                    null === (e = this.file) || void 0 === e || e.delete(),
                    (this.file = null);
                }),
                (e.prototype.deleteRiveRenderer = function () {
                  var e;
                  null === (e = this.renderer) || void 0 === e || e.delete(),
                    (this.renderer = null);
                }),
                (e.prototype.cleanupInstances = function () {
                  null !== this.eventCleanup && this.eventCleanup(),
                    this.stop(),
                    this.artboard &&
                      (this.artboard.delete(), (this.artboard = null));
                }),
                (e.prototype.retrieveTextRun = function (e) {
                  if (!e) {
                    console.warn("No text run name provided");
                    return;
                  }
                  if (!this.artboard) {
                    console.warn(
                      "Tried to access text run, but the Artboard is null"
                    );
                    return;
                  }
                  var t,
                    n = this.artboard.textRun(e);
                  if (!n) {
                    console.warn(
                      "Could not access a text run with name '"
                        .concat(e, "' in the '")
                        .concat(
                          null === (t = this.artboard) || void 0 === t
                            ? void 0
                            : t.name,
                          "' Artboard. Note that you must rename a text run node in the Rive editor to make it queryable at runtime."
                        )
                    );
                    return;
                  }
                  return n;
                }),
                (e.prototype.getTextRunValue = function (e) {
                  var t = this.retrieveTextRun(e);
                  return t ? t.text : void 0;
                }),
                (e.prototype.setTextRunValue = function (e, t) {
                  var n = this.retrieveTextRun(e);
                  n && (n.text = t);
                }),
                (e.prototype.play = function (e, t) {
                  var n = this;
                  if (((e = P(e)), !this.readyForPlaying)) {
                    this.taskQueue.add({
                      action: function () {
                        return n.play(e, t);
                      },
                    });
                    return;
                  }
                  this.animator.play(e),
                    this.eventCleanup && this.eventCleanup(),
                    this.setupRiveListeners(),
                    this.startRendering();
                }),
                (e.prototype.pause = function (e) {
                  var t = this;
                  if (((e = P(e)), !this.readyForPlaying)) {
                    this.taskQueue.add({
                      action: function () {
                        return t.pause(e);
                      },
                    });
                    return;
                  }
                  this.eventCleanup && this.eventCleanup(),
                    this.animator.pause(e);
                }),
                (e.prototype.scrub = function (e, t) {
                  var n = this;
                  if (((e = P(e)), !this.readyForPlaying)) {
                    this.taskQueue.add({
                      action: function () {
                        return n.scrub(e, t);
                      },
                    });
                    return;
                  }
                  this.animator.scrub(e, t || 0), this.drawFrame();
                }),
                (e.prototype.stop = function (e) {
                  var t = this;
                  if (((e = P(e)), !this.readyForPlaying)) {
                    this.taskQueue.add({
                      action: function () {
                        return t.stop(e);
                      },
                    });
                    return;
                  }
                  this.animator.stop(e),
                    this.eventCleanup && this.eventCleanup();
                }),
                (e.prototype.reset = function (e) {
                  var t,
                    n = null == e ? void 0 : e.artboard,
                    r = P(null == e ? void 0 : e.animations),
                    i = P(null == e ? void 0 : e.stateMachines),
                    a =
                      null !== (t = null == e ? void 0 : e.autoplay) &&
                      void 0 !== t &&
                      t;
                  this.cleanupInstances(),
                    this.initArtboard(n, r, i, a),
                    this.taskQueue.process();
                }),
                (e.prototype.load = function (e) {
                  this.stop(), this.init(e);
                }),
                Object.defineProperty(e.prototype, "layout", {
                  get: function () {
                    return this._layout;
                  },
                  set: function (e) {
                    (this._layout = e),
                      (e.maxX && e.maxY) || this.resizeToCanvas(),
                      this.loaded &&
                        !this.animator.isPlaying &&
                        this.drawFrame();
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.resizeToCanvas = function () {
                  this._layout = this.layout.copyWith({
                    minX: 0,
                    minY: 0,
                    maxX: this.canvas.width,
                    maxY: this.canvas.height,
                  });
                }),
                (e.prototype.resizeDrawingSurfaceToCanvas = function (e) {
                  if (this.canvas instanceof HTMLCanvasElement && window) {
                    var t = this.canvas.getBoundingClientRect(),
                      n = t.width,
                      r = t.height,
                      i = e || window.devicePixelRatio || 1;
                    (this.canvas.width = i * n),
                      (this.canvas.height = i * r),
                      this.startRendering(),
                      this.resizeToCanvas();
                  }
                }),
                Object.defineProperty(e.prototype, "source", {
                  get: function () {
                    return this.src;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "activeArtboard", {
                  get: function () {
                    return this.artboard ? this.artboard.name : "";
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "animationNames", {
                  get: function () {
                    if (!this.loaded) return [];
                    for (
                      var e = [], t = 0;
                      t < this.artboard.animationCount();
                      t++
                    )
                      e.push(this.artboard.animationByIndex(t).name);
                    return e;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "stateMachineNames", {
                  get: function () {
                    if (!this.loaded) return [];
                    for (
                      var e = [], t = 0;
                      t < this.artboard.stateMachineCount();
                      t++
                    )
                      e.push(this.artboard.stateMachineByIndex(t).name);
                    return e;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.stateMachineInputs = function (e) {
                  if (this.loaded) {
                    var t = this.animator.stateMachines.find(function (t) {
                      return t.name === e;
                    });
                    return null == t ? void 0 : t.inputs;
                  }
                }),
                Object.defineProperty(e.prototype, "playingStateMachineNames", {
                  get: function () {
                    return this.loaded
                      ? this.animator.stateMachines
                          .filter(function (e) {
                            return e.playing;
                          })
                          .map(function (e) {
                            return e.name;
                          })
                      : [];
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "playingAnimationNames", {
                  get: function () {
                    return this.loaded
                      ? this.animator.animations
                          .filter(function (e) {
                            return e.playing;
                          })
                          .map(function (e) {
                            return e.name;
                          })
                      : [];
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "pausedAnimationNames", {
                  get: function () {
                    return this.loaded
                      ? this.animator.animations
                          .filter(function (e) {
                            return !e.playing;
                          })
                          .map(function (e) {
                            return e.name;
                          })
                      : [];
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "pausedStateMachineNames", {
                  get: function () {
                    return this.loaded
                      ? this.animator.stateMachines
                          .filter(function (e) {
                            return !e.playing;
                          })
                          .map(function (e) {
                            return e.name;
                          })
                      : [];
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "isPlaying", {
                  get: function () {
                    return this.animator.isPlaying;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "isPaused", {
                  get: function () {
                    return this.animator.isPaused;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "isStopped", {
                  get: function () {
                    return this.animator.isStopped;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "bounds", {
                  get: function () {
                    return this.artboard ? this.artboard.bounds : void 0;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.on = function (e, t) {
                  this.eventManager.add({ type: e, callback: t });
                }),
                (e.prototype.off = function (e, t) {
                  this.eventManager.remove({ type: e, callback: t });
                }),
                (e.prototype.unsubscribe = function (e, t) {
                  console.warn(
                    "This function is deprecated: please use `off()` instead."
                  ),
                    this.off(e, t);
                }),
                (e.prototype.removeAllRiveEventListeners = function (e) {
                  this.eventManager.removeAll(e);
                }),
                (e.prototype.unsubscribeAll = function (e) {
                  console.warn(
                    "This function is deprecated: please use `removeAllRiveEventListeners()` instead."
                  ),
                    this.removeAllRiveEventListeners(e);
                }),
                (e.prototype.stopRendering = function () {
                  this.loaded &&
                    this.frameRequestId &&
                    (this.runtime.cancelAnimationFrame
                      ? this.runtime.cancelAnimationFrame(this.frameRequestId)
                      : cancelAnimationFrame(this.frameRequestId),
                    (this.frameRequestId = null));
                }),
                (e.prototype.startRendering = function () {
                  this.loaded &&
                    this.artboard &&
                    !this.frameRequestId &&
                    (this.runtime.requestAnimationFrame
                      ? (this.frameRequestId =
                          this.runtime.requestAnimationFrame(
                            this.draw.bind(this)
                          ))
                      : (this.frameRequestId = requestAnimationFrame(
                          this.draw.bind(this)
                        )));
                }),
                (e.prototype.enableFPSCounter = function (e) {
                  this.runtime.enableFPSCounter(e);
                }),
                (e.prototype.disableFPSCounter = function () {
                  this.runtime.disableFPSCounter();
                }),
                Object.defineProperty(e.prototype, "contents", {
                  get: function () {
                    if (this.loaded) {
                      for (
                        var e = { artboards: [] }, t = 0;
                        t < this.file.artboardCount();
                        t++
                      ) {
                        for (
                          var n = this.file.artboardByIndex(t),
                            r = {
                              name: n.name,
                              animations: [],
                              stateMachines: [],
                            },
                            i = 0;
                          i < n.animationCount();
                          i++
                        ) {
                          var a = n.animationByIndex(i);
                          r.animations.push(a.name);
                        }
                        for (var o = 0; o < n.stateMachineCount(); o++) {
                          for (
                            var s = n.stateMachineByIndex(o),
                              u = s.name,
                              c = new this.runtime.StateMachineInstance(s, n),
                              l = [],
                              h = 0;
                            h < c.inputCount();
                            h++
                          ) {
                            var f = c.input(h);
                            l.push({ name: f.name, type: f.type });
                          }
                          r.stateMachines.push({ name: u, inputs: l });
                        }
                        e.artboards.push(r);
                      }
                      return e;
                    }
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.missingErrorMessage =
                  "Rive source file or data buffer required"),
                e
              );
            })()),
            (E = function (e) {
              return c(void 0, void 0, void 0, function () {
                return l(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, fetch(new Request(e))];
                    case 1:
                      return [4, t.sent().arrayBuffer()];
                    case 2:
                      return [2, t.sent()];
                  }
                });
              });
            }),
            (P = function (e) {
              return "string" == typeof e ? [e] : e instanceof Array ? e : [];
            }),
            (M = { EventManager: C, TaskQueueManager: R }),
            (L = function (e) {
              return new Promise(function (t) {
                return p.getInstance(function (n) {
                  n.decodeImage(e, t);
                });
              });
            }),
            (F = function (e) {
              return new Promise(function (t) {
                return p.getInstance(function (n) {
                  n.decodeFont(e, t);
                });
              });
            }),
            k
          );
        })()),
        (e.exports = t());
    },
  },
]);
