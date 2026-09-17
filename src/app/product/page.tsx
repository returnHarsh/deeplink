import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import RequestAccessButton from "@/components/RequestAccessButton";

export const metadata: Metadata = {
  title: "OpenInBrowser Product — Dashboard, Links & User Intelligence",
  description:
    "Explore OpenInBrowser's product dashboard for tracked links, clicks, deep-link performance, AI user categorization and conversion intelligence.",
};

export default function ProductPage() {
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        color: "#f7f9fc",
        background:
          "radial-gradient(circle at 13% 0%, rgba(118,87,255,.17), transparent 26%), radial-gradient(circle at 90% 8%, rgba(53,214,255,.10), transparent 25%), linear-gradient(180deg, #07111f, #08111d 45%, #07101c)",
      }}
    >
      <main>
        {/* ───────────────── HERO ───────────────── */}
        <section className="pt-16 pb-[34px]">
          <div className="w-[min(1180px,calc(100%-36px))] max-md:w-[min(100%-22px,1180px)] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-[44px] items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-[7px] border border-white/[0.08] rounded-full bg-white/[0.03] text-[#c8d1df] text-[11px] mb-4">
                <span
                  className="w-[7px] h-[7px] rounded-full bg-[#4bd8a5]"
                  style={{ boxShadow: "0 0 14px #4bd8a5" }}
                />
                Product glimpse
              </div>
              <h1 className="text-[clamp(42px,5vw,68px)] leading-[1.01] tracking-[-0.055em] m-0 mb-[18px]">
                See who clicked.{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg,#fff 0%,#ad9cff 45%,#68e8ff 95%)",
                  }}
                >
                  Understand what they wanted.
                </span>
              </h1>
              <p className="text-[17px] leading-[1.7] text-[#a8b3c8] max-w-[760px] m-0 mb-5">
                OpenInBrowser combines tracked links, deep-link journey
                analytics, visitor-level behavior and AI intent classification
                in one product dashboard.
              </p>
              <a
                href="#dashboard"
                className="inline-flex items-center justify-center gap-2 px-[15px] py-[11px] rounded-[11px] border-transparent text-white font-[650] text-[13px]"
                style={{
                  background: "linear-gradient(135deg,#7657ff,#5d8dff)",
                }}
              >
                Explore the dashboard →
              </a>
            </div>

            {/* Preview card */}
            <div
              className="rounded-[22px] overflow-hidden border border-white/10"
              style={{
                background: "linear-gradient(180deg,#111c30,#0b1525)",
                boxShadow: "0 24px 70px rgba(0,0,0,.34)",
              }}
            >
              <div className="h-12 border-b border-white/[0.08] flex items-center justify-between px-3.5">
                <div className="flex gap-1.5">
                  <i className="w-2 h-2 rounded-full bg-[#ff7b87] not-italic block" />
                  <i className="w-2 h-2 rounded-full bg-[#ffc966] not-italic block" />
                  <i className="w-2 h-2 rounded-full bg-[#51d5a5] not-italic block" />
                </div>
                <span className="text-[10px] text-[#77859d]">
                  Illustrative product preview
                </span>
              </div>
              <div className="p-3.5">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {[
                    {
                      label: "Tracked links",
                      value: "128",
                      change: "+14 this month",
                    },
                    { label: "Total clicks", value: "42.6K", change: "+18.6%" },
                    { label: "Unique users", value: "12.4K", change: "+11.3%" },
                    {
                      label: "Deep-link success",
                      value: "91.8%",
                      change: "+7.1 pts",
                    },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="p-3.5 border border-white/[0.08] rounded-[14px] bg-white/[0.025]"
                    >
                      <small className="text-[9px] text-[#78859c] uppercase tracking-[0.09em]">
                        {m.label}
                      </small>
                      <b className="block text-[23px] mt-2 mb-[3px]">
                        {m.value}
                      </b>
                      <em className="not-italic text-[10px] text-[#4bd8a5]">
                        {m.change}
                      </em>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────── DASHBOARD ───────────────── */}
        <section className="py-[72px] max-sm:py-14" id="dashboard">
          <div className="w-[min(1180px,calc(100%-36px))] max-md:w-[min(100%-22px,1180px)] mx-auto">
            <div className="max-w-[780px] mb-[30px]">
              <div className="text-[11px] uppercase tracking-[0.13em] text-[#76e5ff] font-[750]">
                BEHAVIORAL INTELLIGENCE DASHBOARD
              </div>
              <h2 className="text-[clamp(30px,4vw,48px)] tracking-[-0.04em] leading-[1.08] mt-2.5 mb-3">
                See every link, click, visitor and intent in one place.
              </h2>
              <p className="text-[17px] leading-[1.7] text-[#a8b3c8] max-w-[760px] m-0 mb-5">
                Track link activity, unique visitors, deep-link journeys and
                user behavior from a single dashboard. OpenInBrowser adds an AI
                layer to help you understand whether visitors are researching,
                comparing, exploring or ready to act.
              </p>
            </div>

            <div
              className="rounded-[22px] overflow-hidden border border-white/10"
              style={{
                background: "linear-gradient(180deg,#111c30,#0b1525)",
                boxShadow: "0 24px 70px rgba(0,0,0,.34)",
              }}
            >
              <div className="h-12 border-b border-white/[0.08] flex items-center justify-between px-3.5">
                <strong className="text-[13px]">OpenInBrowser Analytics</strong>
                <span className="inline-flex px-[7px] py-[5px] rounded-full text-[9px] border border-white/[0.08]">
                  Last 30 days ▾
                </span>
              </div>
              <div className="p-3.5">
                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {[
                    {
                      label: "Total tracked links",
                      value: "128",
                      change: "+14 this month",
                    },
                    {
                      label: "Total clicks",
                      value: "42,681",
                      change: "+18.6%",
                    },
                    {
                      label: "Unique users",
                      value: "12,439",
                      change: "+11.3%",
                    },
                    {
                      label: "Resolved journeys",
                      value: "91.8%",
                      change: "+7.1 pts",
                    },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="p-3.5 border border-white/[0.08] rounded-[14px] bg-white/[0.025]"
                    >
                      <small className="text-[9px] text-[#78859c] uppercase tracking-[0.09em]">
                        {m.label}
                      </small>
                      <b className="block text-[23px] mt-2 mb-[3px]">
                        {m.value}
                      </b>
                      <em className="not-italic text-[10px] text-[#4bd8a5]">
                        {m.change}
                      </em>
                    </div>
                  ))}
                </div>

                {/* Dashboard panels */}
                <div className="mt-3 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-3">
                  {/* Bar chart */}
                  <div className="border border-white/[0.08] rounded-[16px] p-[15px] bg-white/[0.02]">
                    <div className="flex justify-between gap-3 mb-3.5">
                      <b className="text-xs">Click activity</b>
                      <span className="text-[9px] text-[#748198]">
                        Daily traffic
                      </span>
                    </div>
                    <div className="h-[210px] flex items-end gap-[7px]">
                      {[42, 57, 51, 63, 78, 70, 88, 83, 94, 74, 82, 91].map(
                        (h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t-[6px] rounded-b-[2px]"
                            style={{
                              height: `${h}%`,
                              background:
                                "linear-gradient(180deg,#7657ff,#4b60bd)",
                            }}
                          />
                        ),
                      )}
                    </div>
                  </div>

                  {/* AI user categorization */}
                  <div
                    className="border border-white/[0.08] rounded-[16px] p-[15px] bg-white/[0.02]"
                    id="audience"
                  >
                    <div className="flex justify-between gap-3 mb-3.5">
                      <b className="text-xs">AI user categorization</b>
                      <span className="text-[9px] text-[#748198]">
                        12,439 users
                      </span>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      {[
                        { label: "Commercial investigation", pct: 36 },
                        { label: "Informational", pct: 30 },
                        { label: "Transactional", pct: 21 },
                        { label: "Exploring / low intent", pct: 9 },
                        { label: "Returning / undecided", pct: 4 },
                      ].map((row) => (
                        <div
                          key={row.label}
                          className="p-2.5 rounded-xl bg-[#0b1525] border border-white/[0.055]"
                        >
                          <div className="flex justify-between text-[10px] mb-[7px]">
                            <span>{row.label}</span>
                            <b>{row.pct}%</b>
                          </div>
                          <div className="h-1.5 rounded-full bg-[#18243a] overflow-hidden">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${row.pct}%`,
                                background:
                                  "linear-gradient(90deg,#7657ff,#35d6ff)",
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Links table */}
                <div
                  className="mt-3 border border-white/[0.08] rounded-[16px] overflow-auto"
                  id="links"
                >
                  <table className="w-full border-collapse min-w-[780px] text-[11px]">
                    <thead>
                      <tr>
                        {[
                          "Tracked link",
                          "Source",
                          "Clicks",
                          "Users",
                          "Top intent",
                          "Resolved",
                        ].map((th) => (
                          <th
                            key={th}
                            className="text-[#748198] text-[9px] uppercase tracking-[0.08em] text-left bg-[#0b1525] p-3"
                          >
                            {th}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          name: "Summer Campaign",
                          slug: "/l/summer-drop",
                          source: "Instagram",
                          clicks: "8,420",
                          users: "5,781",
                          intent: "Commercial",
                          resolved: "94.2%",
                        },
                        {
                          name: "Creator Collaboration",
                          slug: "/l/creator-18",
                          source: "Instagram",
                          clicks: "6,105",
                          users: "4,299",
                          intent: "Informational",
                          resolved: "92.7%",
                        },
                        {
                          name: "Product Comparison",
                          slug: "/l/pro-vs-growth",
                          source: "LinkedIn",
                          clicks: "4,980",
                          users: "3,422",
                          intent: "Commercial",
                          resolved: "90.6%",
                        },
                        {
                          name: "Launch Announcement",
                          slug: "/l/new-launch",
                          source: "X / Twitter",
                          clicks: "3,774",
                          users: "2,918",
                          intent: "Informational",
                          resolved: "89.8%",
                        },
                      ].map((row) => (
                        <tr key={row.slug}>
                          <td className="p-[13px_12px] border-t border-white/5 text-[#cbd3e2]">
                            <strong>{row.name}</strong>
                            <br />
                            <span className="text-[#7f8da4]">{row.slug}</span>
                          </td>
                          <td className="p-[13px_12px] border-t border-white/5 text-[#cbd3e2]">
                            {row.source}
                          </td>
                          <td className="p-[13px_12px] border-t border-white/5 text-[#cbd3e2]">
                            {row.clicks}
                          </td>
                          <td className="p-[13px_12px] border-t border-white/5 text-[#cbd3e2]">
                            {row.users}
                          </td>
                          <td className="p-[13px_12px] border-t border-white/5 text-[#cbd3e2]">
                            {row.intent}
                          </td>
                          <td className="p-[13px_12px] border-t border-white/5 text-[#cbd3e2]">
                            {row.resolved}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────── CORE MODULES ───────────────── */}
        <section className="py-[72px] max-sm:py-14">
          <div className="w-[min(1180px,calc(100%-36px))] max-md:w-[min(100%-22px,1180px)] mx-auto">
            <div className="max-w-[780px] mb-[30px]">
              <div className="text-[11px] uppercase tracking-[0.13em] text-[#76e5ff] font-[750]">
                Core modules
              </div>
              <h2 className="text-[clamp(30px,4vw,48px)] tracking-[-0.04em] leading-[1.08] mt-2.5 mb-3">
                Show the product before explaining the pitch.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {[
                {
                  icon: "↗",
                  title: "Tracked-link intelligence",
                  desc: "Create and monitor campaign links across social channels while measuring clicks, unique users, source and destination success.",
                },
                {
                  icon: "◎",
                  title: "User-level journeys",
                  desc: "Group behavioral events into visitor journeys to understand progression, hesitation, repeat activity and conversion signals.",
                },
                {
                  icon: "✦",
                  title: "AI intent classification",
                  desc: "Categorize visitors into commercial, informational, transactional and exploratory states based on observed behavior.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="border border-white/[0.08] rounded-[18px] p-[22px] min-h-[210px]"
                  style={{
                    background:
                      "linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.017))",
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[rgba(118,87,255,.12)] border border-[rgba(118,87,255,.2)] grid place-items-center text-[#b8abff] text-[18px]">
                    {card.icon}
                  </div>
                  <h3 className="tracking-[-0.02em] mt-5 mb-2 text-[17px]">
                    {card.title}
                  </h3>
                  <p className="m-0 text-[#8996ab] leading-[1.55] text-[13px]">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────── CASE STUDIES ───────────────── */}
        <section className="py-[72px] max-sm:py-14" id="cases">
          <div className="w-[min(1180px,calc(100%-36px))] max-md:w-[min(100%-22px,1180px)] mx-auto">
            <div className="max-w-[780px] mb-[30px]">
              <div className="text-[11px] uppercase tracking-[0.13em] text-[#76e5ff] font-[750]">
                Illustrative case studies
              </div>
              <h2 className="text-[clamp(30px,4vw,48px)] tracking-[-0.04em] leading-[1.08] mt-2.5 mb-3">
                BUILT FOR CONVERSION-FOCUSED TEAMS.
              </h2>
              <p className="text-[17px] leading-[1.7] text-[#a8b3c8] max-w-[760px] m-0 mb-5">
                From social campaigns to pricing pages, OpenInBrowser helps
                teams understand where users came from, what they explored and
                what their behavior suggests they may need next.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[15px]">
              {[
                {
                  code: "D2C & E-commerce",
                  title:
                    "Find the visitors who are actually considering a purchase.",
                  desc: "Track users arriving from Instagram, YouTube and other social channels, understand which products they explore, and identify journeys showing strong commercial or transactional intent.",
                  results: [
                    { value: "+18%", label: "deep-link success" },
                    { value: "2.1x", label: "high-intent visibility" },
                  ],
                },
                {
                  code: "SaaS & Digital Products",
                  title:
                    "Understand what happens between the first click and signup.",
                  desc: " See when visitors explore features, revisit pricing, compare plans or read FAQs, then classify the behavior behind those journeys.",
                  results: [
                    { value: "36%", label: "commercial intent identified" },
                    { value: "+14%", label: "trial CTA engagement" },
                  ],
                },
                {
                  code: "Creators & Course Businesses",
                  title: "Reduce friction between social content and checkout.",
                  desc: "Understand how users move from social platforms to your website, identify authentication or browser drop-offs, and separate genuine interest from low-quality traffic.",
                  results: [
                    { value: "4", label: "intent cohorts" },
                    { value: "-23%", label: "manual review time" },
                  ],
                },
              ].map((c) => (
                <div
                  key={c.code}
                  className="border border-white/[0.08] rounded-[18px] p-[22px] min-h-[300px] flex flex-col"
                  style={{
                    background:
                      "linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.017))",
                  }}
                >
                  <div className="w-fit px-3 py-1.5 rounded-xl font-semibold text-xs text-[#76e5ff] bg-[#13223a] border border-white/[0.08]">
                    {c.code}
                  </div>
                  <h3 className="tracking-[-0.02em] mt-4 mb-2 text-[17px]">
                    {c.title}
                  </h3>
                  <p className="m-0 text-[#8f9bb0] leading-[1.55] text-[13px]">
                    {c.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mt-auto pt-[22px]">
                    {c.results.map((r) => (
                      <div
                        key={r.label}
                        className="p-[11px] rounded-xl bg-[#0b1525] border border-white/[0.055]"
                      >
                        <b className="block text-[18px] mb-[3px]">{r.value}</b>
                        <span className="text-[9px] text-[#76839a]">
                          {r.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="mt-[18px] p-[14px_16px] border border-[rgba(255,184,92,.22)] bg-[rgba(255,184,92,.06)] text-[#c9b38b] rounded-[13px] text-xs leading-[1.55]">
              Demo metrics and case studies on this page are illustrative only.
              Publish customer claims only when supported by verified data and
              appropriate customer permission.
            </div> */}
          </div>
        </section>

        {/* ───────────────── CTA ───────────────── */}
        <section className="py-[72px] max-sm:py-14">
          <div className="w-[min(1180px,calc(100%-36px))] max-md:w-[min(100%-22px,1180px)] mx-auto">
            <div
              className="p-[42px] max-sm:p-6 rounded-[23px] border border-[rgba(118,87,255,.27)] flex justify-between gap-6 items-center max-sm:flex-col max-sm:items-start"
              style={{
                background:
                  "linear-gradient(135deg,rgba(118,87,255,.14),rgba(53,214,255,.05))",
              }}
            >
              <div>
                <h3 className="text-[28px] tracking-[-0.02em] m-0 mb-2">
                  Every click should tell you more than the source.
                </h3>
                <p className="m-0 text-[#9aa7bb]">
                  Understand where visitors came from, what they did next, what their behavior signals and which experience may be most relevant to them.
                </p>
              </div>
              <RequestAccessButton
                className="inline-flex items-center justify-center gap-2 px-[15px] py-[11px] rounded-[11px] border-transparent text-white font-[650] text-[13px] flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg,#7657ff,#5d8dff)",
                }}
              >
                Request access →
              </RequestAccessButton>
            </div>
          </div>
        </section>
      </main>

      {/* ───────────────── FOOTER ───────────────── */}
      <Footer />
    </div>
  );
}
