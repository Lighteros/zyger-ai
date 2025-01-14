"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [675],
  {
    1103: function (t, e, i) {
      var a = i(7437);
      e.Z = (t) => {
        let { children: e, func: i } = t;
        return (0, a.jsxs)("div", {
          className:
            "relative active:bg-opacity-80 active:brightness-[90%] pointer-events-auto",
          children: [
            (0, a.jsx)("div", {
              className:
                "-inset-0.5 bg-animated-bg absolute blur-md animate-rotateBg opacity-50",
            }),
            (0, a.jsx)("div", {
              onClick: () => i(),
              className:
                "transition-all ease-out duration-500 active:bg-opacity-80 relative cursor-pointer group block w-full overflow-hidden border-transparent bg-gradient-to-br from-zkLightPurple via-zkLightPurple to-zkIndigo p-[1px] hover:p-0",
              style: {
                clipPath:
                  "polygon(0% 0%, calc(100% - 20px) 0%, 100% 20px, 100% 100%, 20px 100%, 0% calc(100% - 20px), 0% 100%, 0% 0%)",
                backgroundImage: "linear-gradient(to right, #A4C8FF, #643ADE)",
                backgroundSize: "200% 200%",
                animation: "spinGradient 3s linear infinite",
              },
              children: (0, a.jsx)("div", {
                className:
                  "transition-all ease-out relative duration-500 active:bg-opacity-80 block w-full overflow-hidden custom-gradient hover:bg-gradient-to-r hover:from-zkPurple hover:to-zkIndigo60 active:from-zkPurple60 hover:p-[1px]",
                style: {
                  clipPath:
                    "polygon(0% 0%, calc(100% - 20px) 0%, 100% 20px, 100% 100%, 20px 100%, 0% calc(100% - 20px), 0% 100%, 0% 0%)",
                },
                children: (0, a.jsx)("div", {
                  className:
                    "transition-all ease-out duration-500 px-10 lg:px-12 py-4 text-center bg-clip-text text-transparent hover:text-white bg-gradient-to-l from-zkIndigo to-zkPurple font-bold tracking-wider",
                  children: e,
                }),
              }),
            }),
          ],
        });
      };
    },
    6786: function (t, e, i) {
      i.d(e, {
        Qz: function () {
          return s;
        },
        Rn: function () {
          return n;
        },
        VN: function () {
          return a;
        },
        Ye: function () {
          return r;
        },
        mx: function () {
          return o;
        },
      });
      let a = "https://zkagi.gitbook.io/introduction",
        n = "",
        r = "https://zkagi.gitbook.io/introduction",
        s = "https://github.com/ZkAGI",
        o = {
          howToUse: "https://tidycal.com/zkagi/discussion",
          whitePaper:
            "https://drive.google.com/file/d/1EOFTh8TxscsZlT2fnaxJyGlD0dipAFUQ/view?usp=sharing",
          getStarted: "https://cluster.zkagi.ai/",
          ambassadorApply: "https://zealy.io/cw/zkagisocials/questboard",
        };
    },
    6675: function (t, e, i) {
      i.r(e);
      var a = i(7437),
        n = i(6648),
        r = i(1103),
        s = i(6786);
      e.default = () => {
        let t = (t) => {
          t && "" !== t && window.open(t, "_blank");
        };
        return (0, a.jsxs)("div", {
          className: "relative w-full overflow-hidden h-48 md:h-[300px]",
          children: [
            (0, a.jsx)(n.default, {
              className: "hidden md:flex",
              alt: "cta",
              src: "/images/harness.svg",
              width: 0,
              height: 0,
              style: { width: "100%", height: "100%", objectFit: "cover" },
            }),
            (0, a.jsxs)("div", {
              className:
                "absolute flex flex-col justify-evenly items-center  inset-0",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "relative text-center px-5   text-white text-xl md:text-2xl max-w-md font-light",
                  children: [
                    "Harness GenAI APIs, ",
                    (0, a.jsx)("br", {}),
                    "elevated by ZkAGI's intelligent, fast, and secure AI infrastructure.",
                    (0, a.jsx)("div", {
                      className:
                        "-inset-0.5 bg-animated-bg absolute blur-xl animate opacity-10",
                    }),
                  ],
                }),
                (0, a.jsx)(r.Z, {
                  func: () => {
                    t(s.VN);
                  },
                  children: "BUILD NOW",
                }),
              ],
            }),
          ],
        });
      };
    },
  },
]);
