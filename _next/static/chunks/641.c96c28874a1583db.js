"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [641],
  {
    6786: function (e, t, r) {
      r.d(t, {
        Qz: function () {
          return n;
        },
        Rn: function () {
          return s;
        },
        VN: function () {
          return l;
        },
        Ye: function () {
          return i;
        },
        mx: function () {
          return a;
        },
      });
      let l = "https://alexeys-organization-9.gitbook.io/zyger-ai-network",
        s = "",
        i = "https://alexeys-organization-9.gitbook.io/zyger-ai-network",
        n = "https://github.com/ZkAGI",
        a = {
          howToUse: "https://tidycal.com/zkagi/discussion",
          whitePaper:
            "https://drive.google.com/file/d/1EOFTh8TxscsZlT2fnaxJyGlD0dipAFUQ/view?usp=sharing",
          getStarted: "https://zyger-ai-app-cs.vercel.app/",
          ambassadorApply: "https://zealy.io/cw/zkagisocials/questboard",
        };
    },
    641: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return w;
          },
        });
      var l = r(7437),
        s = r(6648),
        i = r(2265),
        n = r(8646),
        a = r(5282),
        c = r(4924),
        o = r(5271),
        u = r(4839),
        d = r(6164);
      function x() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, d.m6)((0, u.W)(t));
      }
      var g = (e) => {
        let { link: t } = e;
        return (0, l.jsx)("a", {
          href: t,
          className: "",
          children: (0, l.jsx)("div", {
            className:
              "bg-[url('/icons/linkInactive.svg')] h-10 w-[50px] group-hover:bg-[url('/icons/linkactive.svg')] transition-all ease-in-out",
          }),
        });
      };
      function h() {
        let e = (0, n._)([
          "radial-gradient(200px at ",
          "px ",
          "px, white, transparent)",
        ]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      let f = (e) => {
        let { children: t, color1: r, color2: s, link: i } = e,
          n = (0, a.c)(0),
          c = (0, a.c)(0);
        return (0, l.jsx)("div", {
          className: x(
            " group rounded-lg p-0.5   h-60 lg:h-96 bg-transparent aspect-square  flex items-center justify-center w-full relative bg-gradient-to-bl from-zkBackground via-zkDarkBackground to-zkDarkBackground"
          ),
          children: (0, l.jsxs)("div", {
            onMouseMove: function (e) {
              let { currentTarget: t, clientX: r, clientY: l } = e,
                { left: s, top: i } = t.getBoundingClientRect();
              n.set(r - s), c.set(l - i);
            },
            className:
              "bg-gradient-to-b from-zkBackground to-zkDarkBackground50 rounded-lg group/card  w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full",
            children: [
              (0, l.jsx)(p, { mouseX: n, mouseY: c, color1: r, color2: s }),
              (0, l.jsx)("span", {
                className: "absolute text-white z-20 w-full h-full",
                children: t,
              }),
              (0, l.jsxs)("div", {
                className:
                  "absolute bottom-5 px-5 flex items-end justify-between w-full",
                children: [
                  (0, l.jsx)("div", {
                    className:
                      "text-zkDarkPurple text-xs group-hover:text-white cursor-pointer",
                    children: "LEARN MORE",
                  }),
                  (0, l.jsx)(g, { link: i }),
                ],
              }),
            ],
          }),
        });
      };
      function p(e) {
        let { mouseX: t, mouseY: r, color1: s, color2: i } = e,
          n = (0, c.Y)(h(), t, r),
          a = {
            maskImage: n,
            WebkitMaskImage: n,
            background: "linear-gradient(to left ,  "
              .concat(s, " 0% , ")
              .concat(i, " 100%)"),
          };
        return (0, l.jsxs)("div", {
          className: " opacity-20",
          children: [
            (0, l.jsx)("div", {
              className:
                "absolute inset-0  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50",
            }),
            (0, l.jsx)(o.E.div, {
              className:
                "absolute inset-0  opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500",
              style: a,
            }),
          ],
        });
      }
      let v = (0, i.createContext)(void 0),
        m = (e) => {
          let { children: t, className: r, containerClassName: s } = e,
            n = (0, i.useRef)(null),
            [a, c] = (0, i.useState)(!1);
          return (0, l.jsx)(v.Provider, {
            value: [a, c],
            children: (0, l.jsx)("div", {
              className: x("   h-full w-full", s),
              style: { perspective: "1000px" },
              children: (0, l.jsx)("div", {
                ref: n,
                onMouseEnter: (e) => {
                  if ((c(!0), !n.current)) return;
                },
                onMouseMove: (e) => {
                  if (!n.current) return;
                  let {
                      left: t,
                      top: r,
                      width: l,
                      height: s,
                    } = n.current.getBoundingClientRect(),
                    i = (e.clientX - t - l / 2) / 25,
                    a = (e.clientY - r - s / 2) / 25;
                  n.current.style.transform = "rotateY("
                    .concat(i, "deg) rotateX(")
                    .concat(a, "deg)");
                },
                onMouseLeave: (e) => {
                  n.current &&
                    (c(!1),
                    (n.current.style.transform =
                      "rotateY(0deg) rotateX(0deg)"));
                },
                className: x(
                  "flex items-center justify-center relative h-full ",
                  r
                ),
                style: { transformStyle: "preserve-3d" },
                children: t,
              }),
            }),
          });
        };
      function j(e) {
        let { src: t, title: r, link: n, color1: a, color2: c } = e,
          [o, u] = (0, i.useState)(!1);
        return (0, l.jsx)("div", {
          className: "w-full h-max  ",
          onMouseEnter: () => {
            u(!0);
          },
          onMouseLeave: () => {
            u(!1);
          },
          children: (0, l.jsx)("a", {
            href: n,
            children: (0, l.jsx)(f, {
              link: n,
              color1: a,
              color2: c,
              children: (0, l.jsx)(m, {
                children: (0, l.jsx)("div", {
                  className:
                    "p-0.5 rounded-lg h-full w-full items-start px-5 py-3 flex flex-col justify-between hover:bg-transparent",
                  children: (0, l.jsxs)("div", {
                    className: "flex flex-col  gap-4 h-full w-full ",
                    children: [
                      (0, l.jsx)(s.default, {
                        src: o ? t.replace(".svg", "active.svg") : t,
                        alt: r,
                        width: 0,
                        height: 0,
                        className: " w-8 h-8 lg:w-10 lg:h-10",
                      }),
                      (0, l.jsx)("div", {
                        className: "text-xl lg:text-2xl font-light",
                        children: r,
                      }),
                    ],
                  }),
                }),
              }),
            }),
          }),
        });
      }
      var k = r(6786),
        w = () =>
          (0, l.jsx)("div", {});
    },
  },
]);
