"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [292],
  {
    5292: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return a;
          },
        });
      var r = s(7437),
        l = s(2265),
        i = (e) => {
          let {
            status: t,
            color: s,
            title: l,
            steps: i,
            timeline: n,
            hasNext: a,
          } = e;
          return (0, r.jsxs)("div", {
            className:
              "flex flex-col w-60 md:w-[330px] lg:w-[360px] mb-10 md:mb-16 lg:mb-28 ",
            style: {},
            children: [
              (0, r.jsxs)("div", {
                className:
                  "flex items-center w-60 md:w-[330px] lg:w-[360px] mb-5",
                children: [
                  (0, r.jsx)("div", {
                    className: "p-[1px] rounded-md bg-opacity-10",
                    style: {
                      backgroundImage: "linear-gradient(160deg, "
                        .concat(s, " 0%, #070121 49.04%, ")
                        .concat(s, " 100%)"),
                    },
                    children: (0, r.jsx)("div", {
                      className:
                        " text-center text-sm md:text-base lg:text-lg bg-[#2b3a54] rounded-md font-medium text-white px-3 py-2 min-w-max w-[90px]",
                      children: n,
                    }),
                  }),
                  a &&
                    (0, r.jsx)("div", {
                      className: "h-[1px] bg-opacity-10 bg-white w-full",
                    }),
                ],
              }),
              (0, r.jsx)("div", {
                className:
                  " border px-3 py-1 rounded-full text-xs max-w-fit font-sourceCode mb-5 ",
                style: { color: s, borderColor: s },
                children: t,
              }),
              (0, r.jsx)("h2", {
                className:
                  "text-white  font-normal text-xl md:text-xl mb-4 pr-5",
                children: l,
              }),
              (0, r.jsx)("div", {
                className:
                  "flex flex-col gap-3 w-60 md:w-[330px] lg:w-[360px] pr-7 ",
                children: i.map((e, t) =>
                  (0, r.jsxs)(
                    "div",
                    {
                      className:
                        "flex border-[#29224480] rounded-md border-b-[1px] items-center mb-2 space-x-2 ",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "min-w-8 min-h-8 lg:min-w-9 lg:min-h-9 text-sm md:text-base font-medium flex items-center justify-center rounded-md border border-[#FFFFFF0F] text-[#7E83A9] mb-2",
                          children: t + 1,
                        }),
                        (0, r.jsx)("div", {
                          className: "text-[#B1B2BD] text-sm p-1 mb-2",
                          children: e,
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          });
        };
      let n = [
        {
          timeline: "2019-2023",
          status: "COMPLETED",
          color: "#2AF698",
          title: "Research Phase",
          steps: [
            "Customer interviews and Customer Validation in AI, Web3",
            "Custom transformers deployment",
            "Identified the intersection between AIxweb3 & private blockchains",
            "Experimented with Federated Learning (FL) and enterprise blockchain",
            "Explored Zk tech, Fed ML models, DePIN Network",
            "Developed several applications to bring privacy to web3",
          ],
        },
        {
          timeline: "Q1 - 2024",
          status: "COMPLETED",
          color: "#2AF698",
          title: "Bootstrapping Phase",
          steps: [
            "ZkSurfer V1 private alpha ",
            "Pre-seed fundraising and grants",
            "ZkSurfer V1 (Nodes, Marketing, Trading)",
            "Zynapse API v1",
            "GPU cluster(DepIN) upto 1TB+",
            "Rebranding preparation",
          ],
        },
        {
          timeline: "Q2 - 2024",
          status: "COMPLETED",
          color: "#2AF698",
          title: "Bootstrapping Phase",
          steps: [
            "ZkSurfer private/public Beta",
            "New ZkAGI brand release",
            "Whitepaper V1 release",
            "Tokenomics release",
            "Seed Round Raise",
            "Community/Social Building (25k+ members)",
            "Dev Hackathons",
          ],
        },
        {
          timeline: "H2 - 2024",
          status: "IN PROGRESS",
          color: "#DE9068",
          title: "Growth Phase",
          steps: [
            "Zynapse API scaling",
            "Early Pilots for Zynapse",
            "Early enterprise adoption",
            "Onboarding 100+ web3 projects building on Zynapse infra",
            "AIxWeb3 launchpad release",
            "Community Growth (50k+ Members)",
            "Listing on CEXs and DEXs",
          ],
        },
        {
          timeline: "2025",
          status: "PLANNED",
          color: "#BDA0FF",
          title: "Scale Phase",
          steps: [
            "Enterprise trials for trading & hedge funds, defence, citizenship utilities",
            "Scale the enterprise adoption of Zynapse infrastructure",
            "Zynapse API v2",
            "No code ZkML infra",
            "Publish custom ML models",
            "More listing on CEXs and DEXs",
            "Port token to other chains interoperability",
            "Token Generation Event (TGE)",
          ],
        },
        {
          timeline: "2026",
          status: "PLANNED",
          color: "#BDA0FF",
          title: "Maturity Phase",
          steps: [
            "Foundation and Ecosystem planning & launch",
            "Upgrading and enhancing the Zynapse API (v3)",
            "Onboarding more types of devices and controlling their nature on-chain",
            "Enhance Capabilities, feature sets and services with demands from channel partners and customers",
          ],
        },
      ];
      var a = () => {
        let [e, t] = (0, l.useState)(!1),
          [s, a] = (0, l.useState)(!0),
          [o, c] = (0, l.useState)(300),
          d = (0, l.useRef)(null),
          m = () => {
            let e = 240;
            window.innerWidth >= 768 && window.innerWidth < 1024
              ? (e = 330)
              : window.innerWidth >= 1024 && (e = 360),
              c(e);
          },
          p = () => {
            if ((m(), d.current)) {
              let e = d.current,
                s = e.scrollLeft;
              s + e.offsetWidth >= e.scrollWidth - 1 ? a(!1) : a(!0),
                s <= 0 ? t(!1) : t(!0);
            }
          };
        return (
          (0, l.useEffect)(() => {
            let e;
            let t = () => {
              clearTimeout(e),
                (e = setTimeout(() => {
                  p();
                }, 500));
            };
            return (
              p(),
              window.addEventListener("resize", p),
              d.current &&
                (d.current.addEventListener("touchend", t),
                d.current.addEventListener("scrollend", t)),
              () => {
                window.removeEventListener("resize", p),
                  d.current &&
                    (d.current.removeEventListener("touchend", t),
                    d.current.removeEventListener("scrollend", t));
              }
            );
          }, []),
          (0, r.jsxs)("div", {
            className:
              "w-full flex flex-col items-center bg-gradient-to-br from-[#103252] via-[#050d25] to-[#050d25] mb-16 md:mb-20 lg:mb-28 ",
            children: [
              (0, r.jsxs)("div", {
                className:
                  "lg:max-w-7xl md:max-w-3xl flex justify-between items-center w-full mb-10 md:mb-12 lg:mb-14 pt-10 mb:pt-14 lg:pt-20 px-10",
                children: [
                  (0, r.jsx)("h2", {
                    className:
                      "text-[28px] lg:text-[48px] -tracking-[1px] text-white font-light ",
                    children: "Roadmap",
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex space-x-1 lg:space-x-4 ",
                    children: [
                      (0, r.jsx)("img", {
                        src: "/icons/whiteLeftArrow.svg",
                        alt: "left",
                        className:
                          "h-5 w-6 lg:w-12 lg:h-9 cursor-pointer ".concat(
                            e ? "bg-opacity-100" : "opacity-30"
                          ),
                        onClick: () => {
                          if (d.current && e) {
                            let e = d.current,
                              s = e.scrollLeft,
                              r = e.scrollLeft - o;
                            (r <= 0 || s <= 0) && t(!1),
                              s + e.offsetWidth >= e.scrollWidth ||
                              r + e.offsetWidth >= e.scrollWidth
                                ? a(!1)
                                : a(!0),
                              (e.scrollLeft = r);
                          }
                        },
                      }),
                      (0, r.jsx)("img", {
                        src: "/icons/whiteRightArrow.svg",
                        alt: "left",
                        className:
                          "h-5 w-6 lg:w-12 lg:h-9 cursor-pointer ".concat(
                            s ? "bg-opacity-100" : "opacity-30"
                          ),
                        onClick: () => {
                          if (d.current && s) {
                            let e = d.current,
                              s = e.scrollLeft,
                              r = e.scrollLeft + o;
                            s + e.offsetWidth >= e.scrollWidth
                              ? a(!1)
                              : r + e.offsetWidth >= e.scrollWidth
                              ? (t(!0), a(!1))
                              : (a(!0), t(!0)),
                              (e.scrollLeft = r);
                          }
                        },
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className:
                  "w-full flex flex-col items-center  overflow-scroll no-scrollbar",
                ref: d,
                children: (0, r.jsx)("div", {
                  className:
                    "pl-10 lg:max-w-7xl md:max-w-3xl overflow-x-visible flex w-full  snap-x no-scrollbar scroll-s scroll-smooth ",
                  children: n.map((e, t) =>
                    (0, r.jsx)(
                      i,
                      {
                        timeline: e.timeline,
                        status: e.status,
                        color: e.color,
                        title: e.title,
                        steps: e.steps,
                        hasNext: t !== n.length - 1,
                      },
                      t
                    )
                  ),
                }),
              }),
            ],
          })
        );
      };
    },
  },
]);
