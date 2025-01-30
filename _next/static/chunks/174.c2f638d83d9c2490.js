"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [174],
  {
    6174: function (a, e, l) {
      l.r(e),
        l.d(e, {
          default: function () {
            return n;
          },
        });
      var s = l(7437);
      l(2265);
      let m = [
        { name: "Maha Capital", img: "/images/investors/Maha_Capital.png" },
        { name: "Samara", img: "/images/investors/Samara.png" },
        { name: "Amstern", img: "/images/investors/Amstern.png" },
        { name: "MT Capital", img: "/images/investors/MT_Capital.png" },
        { name: "ConnectICO", img: "/images/investors/ConnectICO.png" },
      ];
      var n = () =>
        (0, s.jsxs)("div", {
          className:
            "w-full  lg:max-w-7xl md:max-w-3xl hide   mx-auto flex flex-col items-center mb-20 md:mb-24 lg:mb-36",
          children: [
            (0, s.jsx)("h2", {
              className:
                "text-white text-4xl lg:text-5xl tracking-tight font-normal mb-6 md:mb-8 lg:mb-14",
              children: "Our Investors",
            }),
            (0, s.jsx)("div", {
              className:
                "grid gap-2 md:gap-3 lg:gap-5 lg:gap-y-10 grid-cols-2 md:grid-cols-5 pb-5  ",
              children: m.map((a, e) =>
                (0, s.jsx)(
                  "div",
                  {
                    className:
                      "rounded-lg bg-gradient-to-br from-zkDarkerBlue via-zkBackground to-zkDarkerBlue  p-[1px]",
                    children: (0, s.jsx)("div", {
                      className:
                        "rounded-lg  bg-zkDarkBlue h-full w-full  flex flex-col justify-between p-5",
                      children: (0, s.jsx)("img", {
                        src: a.img,
                        alt: a.name,
                        className: "w-32 h-32 object-contain",
                        draggable: !1,
                      }),
                    }),
                  },
                  e
                )
              ),
            }),
          ],
        });
    },
  },
]);
