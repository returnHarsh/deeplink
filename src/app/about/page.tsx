import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About OpenInBrowser — Our Story',
  description:
    'Learn how OpenInBrowser, operated by Desert Glam, was born from a real social-to-website conversion problem involving in-app browsers, login friction and lost purchase journeys.',
};

export default function AboutPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        color: '#F7F9FF',
        background:
          'radial-gradient(circle at 12% 0%, rgba(124,92,255,.18), transparent 30%), radial-gradient(circle at 88% 8%, rgba(35,213,255,.10), transparent 27%), linear-gradient(180deg, #070A12 0%, #080B13 48%, #070A12 100%)',
      }}
    >
      <main>
        {/* ───────────────── HERO ───────────────── */}
        <section className="pt-[92px] max-sm:pt-14 pb-[72px]">
          <div className="w-[min(1180px,calc(100%-40px))] max-sm:w-[min(100%-24px,1180px)] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-[10px] py-[7px] border border-white/[0.09] rounded-full bg-white/[0.035] text-[#CDD4E4] text-xs mb-[19px]">
                <span className="w-[7px] h-[7px] rounded-full bg-[#6FE7B2]" style={{ boxShadow: '0 0 12px rgba(111,231,178,.8)' }} />
                Built from a problem we experienced ourselves
              </div>
              <h1 className="text-[clamp(46px,6vw,76px)] leading-none tracking-[-0.055em] m-0 mb-6 max-w-[760px] font-extrabold">
                We didn&apos;t start with analytics.{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(90deg, #fff 5%, #B6A7FF 45%, #72E9FF 92%)' }}
                >
                  We started with a broken purchase journey.
                </span>
              </h1>
              <p className="text-[#AEB7CA] text-[18px] max-sm:text-base leading-[1.72] max-w-[680px] m-0">
                OpenInBrowser began when we tried to turn social-media audiences into paying customers and discovered how much friction in-app browsers were adding between a click and a conversion.
              </p>
              <div className="mt-[23px] inline-flex items-center gap-2 px-3 py-[9px] rounded-xl bg-white/[0.025] border border-white/[0.09] text-[#8996AC] text-xs">
                OpenInBrowser is operated by the legal entity <strong className="text-white">Desert Glam</strong>.
              </div>
            </div>

            {/* Story Card Preview */}
            <div
              className="relative border border-white/[0.11] rounded-[26px] p-6 overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, rgba(18,25,46,.94), rgba(11,16,30,.98))',
                boxShadow: '0 22px 70px rgba(0,0,0,.35)',
              }}
            >
              <div
                className="absolute w-[260px] h-[260px] rounded-full -top-[110px] -right-[90px] pointer-events-none"
                style={{ background: 'rgba(124,92,255,.18)', filter: 'blur(55px)' }}
              />

              {/* Step 1 */}
              <div className="relative grid grid-cols-[42px_1fr] gap-3 py-[14px] border-b border-white/[0.06]">
                <div className="w-[42px] h-[42px] rounded-[13px] grid place-items-center bg-[#7C5CFF]/[0.12] border border-[#7C5CFF]/[0.22] text-[#C2B8FF]">
                  ▶
                </div>
                <div>
                  <small className="text-[#6F7C94] text-[10px] uppercase tracking-[0.08em] font-semibold">01 · The audience</small>
                  <h3 className="text-[15px] font-bold mt-1 mb-[5px]">Content brought people to us</h3>
                  <p className="m-0 text-[#8B97AE] text-xs leading-[1.55]">
                    We were publishing content across Instagram, LinkedIn and YouTube and directing interested users to our own website.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative grid grid-cols-[42px_1fr] gap-3 py-[14px] border-b border-white/[0.06]">
                <div className="w-[42px] h-[42px] rounded-[13px] grid place-items-center bg-[#7C5CFF]/[0.12] border border-[#7C5CFF]/[0.22] text-[#C2B8FF]">
                  ↗
                </div>
                <div>
                  <small className="text-[#6F7C94] text-[10px] uppercase tracking-[0.08em] font-semibold">02 · The friction</small>
                  <h3 className="text-[15px] font-bold mt-1 mb-[5px]">The click opened inside an in-app browser</h3>
                  <p className="m-0 text-[#8B97AE] text-xs leading-[1.55]">
                    Users landed in social platforms&apos; embedded browsers instead of their usual browser, breaking the experience we expected them to have.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative grid grid-cols-[42px_1fr] gap-3 py-[14px] border-b border-white/[0.06]">
                <div className="w-[42px] h-[42px] rounded-[13px] grid place-items-center bg-[#7C5CFF]/[0.12] border border-[#7C5CFF]/[0.22] text-[#C2B8FF]">
                  ⌁
                </div>
                <div>
                  <small className="text-[#6F7C94] text-[10px] uppercase tracking-[0.08em] font-semibold">03 · The drop-off</small>
                  <h3 className="text-[15px] font-bold mt-1 mb-[5px]">Login became a multi-step obstacle</h3>
                  <p className="m-0 text-[#8B97AE] text-xs leading-[1.55]">
                    A user could be forced through Google authentication and then our own login before they even reached the point of purchase.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative grid grid-cols-[42px_1fr] gap-3 py-[14px]">
                <div className="w-[42px] h-[42px] rounded-[13px] grid place-items-center bg-[#7C5CFF]/[0.12] border border-[#7C5CFF]/[0.22] text-[#C2B8FF]">
                  ✦
                </div>
                <div>
                  <small className="text-[#6F7C94] text-[10px] uppercase tracking-[0.08em] font-semibold">04 · The idea</small>
                  <h3 className="text-[15px] font-bold mt-1 mb-[5px]">Open the journey where users are already comfortable</h3>
                  <p className="m-0 text-[#8B97AE] text-xs leading-[1.55]">
                    We decided the better experience was to help users continue in their default browser and preserve the journey context along the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────── SECTION 1: STORY ───────────────── */}
        <section className="py-[92px] max-sm:py-[72px]" id="story">
          <div className="w-[min(1180px,calc(100%-40px))] max-sm:w-[min(100%-24px,1180px)] mx-auto">
            <div className="max-w-[780px] mb-[42px]">
              <div className="text-xs text-[#82E9FF] uppercase tracking-[0.12em] font-bold">Our story</div>
              <h2 className="text-[clamp(34px,4vw,52px)] tracking-[-0.045em] leading-[1.07] mt-3 mb-[15px] font-extrabold">
                The product came from trying to sell our own courses.
              </h2>
              <p className="m-0 text-[#929EB5] text-[17px] leading-[1.68]">
                What looked like a simple funnel problem quickly became a deeper infrastructure and analytics problem.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 items-start">
              {/* Quote Card */}
              <div
                className="lg:sticky lg:top-24 border border-white/[0.09] rounded-[22px] p-[28px]"
                style={{ background: 'linear-gradient(145deg, rgba(124,92,255,.11), rgba(35,213,255,.035))' }}
              >
                <div className="text-[50px] leading-[0.8] text-[#9A86FF] mb-[14px] font-serif">“</div>
                <blockquote className="m-0 text-[24px] leading-[1.45] tracking-[-0.03em] text-[#EEF1F7] font-semibold">
                  We had people clicking. What we did not have was a clean, trustworthy path from that click to signup and purchase.
                </blockquote>
                <p className="text-[#758198] text-[11px] mt-[18px] mb-0 uppercase tracking-[0.08em] font-semibold">
                  The problem that became OpenInBrowser
                </p>
              </div>

              {/* Content Card */}
              <div className="border border-white/[0.09] rounded-[22px] bg-white/[0.022] p-[28px] space-y-[18px]">
                <p className="text-[#9AA5BA] leading-[1.78] text-[15px] m-0">
                  Before OpenInBrowser, we were focused on something much simpler:{' '}
                  <strong className="text-white">creating content and selling a few courses through our own website.</strong>
                </p>
                <p className="text-[#9AA5BA] leading-[1.78] text-[15px] m-0">
                  Social platforms were doing their job. People were discovering the content on Instagram, LinkedIn and YouTube and clicking through to learn more. But the experience after that click was far less predictable.
                </p>
                <p className="text-[#9AA5BA] leading-[1.78] text-[15px] m-0">
                  Many links opened inside the platform&apos;s own in-app browser. That meant a person who was already signed into Google on their normal browser might suddenly have to authenticate again inside the embedded browser. After that, they could still face another login step on our website before finally reaching checkout.
                </p>
                <p className="text-[#9AA5BA] leading-[1.78] text-[15px] m-0">
                  Every additional step created another place for a genuine user to leave. At the same time, raw click numbers did not always tell us whether the traffic represented a serious buyer, someone casually researching, or automated/noisy traffic.
                </p>
                <p className="text-[#9AA5BA] leading-[1.78] text-[15px] m-0">
                  We first saw the problem as a <strong className="text-white">deep-link and browser-routing issue</strong>. The simplest goal was to help users continue the journey in the browser they already trusted and used every day.
                </p>
                <p className="text-[#9AA5BA] leading-[1.78] text-[15px] m-0">
                  But once we started thinking about the journey itself, a larger question emerged:{' '}
                  <strong className="text-white">if we can preserve the path from social click to website, can we also understand what the visitor is trying to accomplish?</strong>
                </p>
                <p className="text-[#9AA5BA] leading-[1.78] text-[15px] m-0">
                  That is where OpenInBrowser evolved from a routing utility into a behavioral and conversion intelligence product.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────── SECTION 2: WHAT WE LEARNED ───────────────── */}
        <section className="py-[92px] max-sm:py-[72px]">
          <div className="w-[min(1180px,calc(100%-40px))] max-sm:w-[min(100%-24px,1180px)] mx-auto">
            <div className="max-w-[780px] mb-[42px]">
              <div className="text-xs text-[#82E9FF] uppercase tracking-[0.12em] font-bold">What we learned</div>
              <h2 className="text-[clamp(34px,4vw,52px)] tracking-[-0.045em] leading-[1.07] mt-3 mb-[15px] font-extrabold">
                Three problems were hiding inside one broken funnel.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px]">
              <article className="min-h-[250px] p-[22px] border border-white/[0.09] rounded-[20px]" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,.035), rgba(255,255,255,.018))' }}>
                <div className="w-[42px] h-[42px] rounded-[13px] grid place-items-center bg-white/[0.045] border border-white/[0.09] text-[18px]">
                  ↗
                </div>
                <h3 className="text-[18px] font-bold mt-[28px] mb-[9px]">Browser friction</h3>
                <p className="m-0 text-[#8894AC] text-sm leading-[1.62]">
                  Social in-app browsers can create a different authentication, payment and session environment from the user&apos;s normal browser.
                </p>
              </article>

              <article className="min-h-[250px] p-[22px] border border-white/[0.09] rounded-[20px]" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,.035), rgba(255,255,255,.018))' }}>
                <div className="w-[42px] h-[42px] rounded-[13px] grid place-items-center bg-white/[0.045] border border-white/[0.09] text-[18px]">
                  ◎
                </div>
                <h3 className="text-[18px] font-bold mt-[28px] mb-[9px]">Traffic without context</h3>
                <p className="m-0 text-[#8894AC] text-sm leading-[1.62]">
                  A click count alone cannot explain whether a person was researching, comparing, preparing to buy, returning later or simply bouncing.
                </p>
              </article>

              <article className="min-h-[250px] p-[22px] border border-white/[0.09] rounded-[20px]" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,.035), rgba(255,255,255,.018))' }}>
                <div className="w-[42px] h-[42px] rounded-[13px] grid place-items-center bg-white/[0.045] border border-white/[0.09] text-[18px]">
                  ✦
                </div>
                <h3 className="text-[18px] font-bold mt-[28px] mb-[9px]">Retargeting without intent</h3>
                <p className="m-0 text-[#8894AC] text-sm leading-[1.62]">
                  Broad audiences tell marketers who visited. We wanted to help teams understand what a visitor&apos;s behavior suggested they needed next.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ───────────────── SECTION 3: EVOLUTION / MISSION ───────────────── */}
        <section className="py-[92px] max-sm:py-[72px]" id="mission">
          <div className="w-[min(1180px,calc(100%-40px))] max-sm:w-[min(100%-24px,1180px)] mx-auto">
            <div className="max-w-[780px] mb-[42px]">
              <div className="text-xs text-[#82E9FF] uppercase tracking-[0.12em] font-bold">How the idea evolved</div>
              <h2 className="text-[clamp(34px,4vw,52px)] tracking-[-0.045em] leading-[1.07] mt-3 mb-[15px] font-extrabold">
                From opening the right browser to understanding the entire journey.
              </h2>
              <p className="m-0 text-[#929EB5] text-[17px] leading-[1.68]">
                Each product layer came from the problem immediately before it.
              </p>
            </div>

            <div
              className="border border-white/[0.09] rounded-[24px] p-[28px]"
              style={{ background: 'linear-gradient(180deg, rgba(255,255,255,.026), rgba(255,255,255,.012))' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-[9px]">
                {/* Stage 1 */}
                <div className="min-h-[122px] border border-white/[0.09] rounded-[16px] p-[14px] flex flex-col justify-between bg-[#0B1120]">
                  <small className="text-[9px] text-[#6F7B94] uppercase tracking-[0.08em] font-semibold">Stage 01</small>
                  <b className="text-[13px] leading-[1.3] text-white">Social content creates the click</b>
                </div>

                <div className="text-center text-[#4E5A73] max-lg:rotate-90 max-lg:h-[18px]">→</div>

                {/* Stage 2 */}
                <div className="min-h-[122px] border border-white/[0.09] rounded-[16px] p-[14px] flex flex-col justify-between bg-[#0B1120]">
                  <small className="text-[9px] text-[#6F7B94] uppercase tracking-[0.08em] font-semibold">Stage 02</small>
                  <b className="text-[13px] leading-[1.3] text-white">Deep-link to the right browser experience</b>
                </div>

                <div className="text-center text-[#4E5A73] max-lg:rotate-90 max-lg:h-[18px]">→</div>

                {/* Stage 3 (AI Highlighted) */}
                <div
                  className="min-h-[122px] border border-[#7C5CFF]/[0.35] rounded-[16px] p-[14px] flex flex-col justify-between"
                  style={{ background: 'linear-gradient(145deg, rgba(124,92,255,.16), rgba(35,213,255,.05))' }}
                >
                  <small className="text-[9px] text-[#7C5CFF] uppercase tracking-[0.08em] font-bold">Stage 03</small>
                  <b className="text-[13px] leading-[1.3] text-white">Understand visitor behavior and intent</b>
                </div>

                <div className="text-center text-[#4E5A73] max-lg:rotate-90 max-lg:h-[18px]">→</div>

                {/* Stage 4 (Outcome Highlighted) */}
                <div className="min-h-[122px] border border-[#6FE7B2]/[0.3] rounded-[16px] p-[14px] flex flex-col justify-between bg-[#0B1120]">
                  <small className="text-[9px] text-[#6FE7B2] uppercase tracking-[0.08em] font-bold">Stage 04</small>
                  <b className="text-[13px] leading-[1.3] text-white">Recommend the most relevant next experience</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────── SECTION 4: PRINCIPLES ───────────────── */}
        <section className="py-[92px] max-sm:py-[72px]">
          <div className="w-[min(1180px,calc(100%-40px))] max-sm:w-[min(100%-24px,1180px)] mx-auto">
            <div className="max-w-[780px] mb-[42px]">
              <div className="text-xs text-[#82E9FF] uppercase tracking-[0.12em] font-bold">What we are building now</div>
              <h2 className="text-[clamp(34px,4vw,52px)] tracking-[-0.045em] leading-[1.07] mt-3 mb-[15px] font-extrabold">
                A conversion intelligence layer between acquisition and action.
              </h2>
              <p className="m-0 text-[#929EB5] text-[17px] leading-[1.68]">
                Our goal is not simply to record more events. It is to make each journey easier to understand and more useful for both the user and the business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px]">
              <article className="border border-white/[0.09] rounded-[20px] p-[23px] bg-white/[0.02]">
                <span className="text-[11px] text-[#82E9FF] uppercase tracking-[0.09em] font-semibold">01 · Continuity</span>
                <h3 className="text-[18px] font-bold mt-3 mb-2">Preserve the journey</h3>
                <p className="m-0 text-[#8894AC] text-sm leading-[1.62]">
                  Help users move from social platforms to the intended destination without unnecessary browser and authentication friction.
                </p>
              </article>

              <article className="border border-white/[0.09] rounded-[20px] p-[23px] bg-white/[0.02]">
                <span className="text-[11px] text-[#82E9FF] uppercase tracking-[0.09em] font-semibold">02 · Intelligence</span>
                <h3 className="text-[18px] font-bold mt-3 mb-2">Understand intent, not just events</h3>
                <p className="m-0 text-[#8894AC] text-sm leading-[1.62]">
                  Use behavioral patterns to distinguish informational, commercial, transactional, exploratory and returning journeys.
                </p>
              </article>

              <article className="border border-white/[0.09] rounded-[20px] p-[23px] bg-white/[0.02]">
                <span className="text-[11px] text-[#82E9FF] uppercase tracking-[0.09em] font-semibold">03 · Relevance</span>
                <h3 className="text-[18px] font-bold mt-3 mb-2">Make the next step more useful</h3>
                <p className="m-0 text-[#8894AC] text-sm leading-[1.62]">
                  Use privacy-conscious behavioral signals to support better retargeting, contextual recommendations and conversion experiences.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ───────────────── SECTION 5: CTA ───────────────── */}
        <section className="py-[92px] max-sm:py-[72px]">
          <div className="w-[min(1180px,calc(100%-40px))] max-sm:w-[min(100%-24px,1180px)] mx-auto">
            <div
              className="relative overflow-hidden border border-[#7C5CFF]/[0.25] rounded-[28px] p-[54px] max-sm:p-[34px_24px]"
              style={{ background: 'linear-gradient(135deg, rgba(124,92,255,.18), rgba(35,213,255,.065))' }}
            >
              <div
                className="absolute w-[360px] h-[360px] -right-[120px] -top-[160px] rounded-full pointer-events-none"
                style={{ background: 'rgba(35,213,255,.16)', filter: 'blur(70px)' }}
              />
              <div className="relative flex flex-col lg:flex-row justify-between items-start lg:items-end gap-[28px]">
                <div>
                  <div className="text-xs text-[#82E9FF] uppercase tracking-[0.12em] font-bold">Where we&apos;re headed</div>
                  <h2 className="text-[clamp(34px,4vw,52px)] tracking-[-0.045em] leading-[1.07] mt-3 mb-[10px] font-extrabold max-w-[700px]">
                    Every click should carry context into the next step.
                  </h2>
                  <p className="text-[#A7B2C7] max-w-[650px] leading-[1.6] m-0 text-base">
                    We are building OpenInBrowser so businesses can connect source, browser journey, user behavior, intent and the next relevant experience—without treating each part as a separate system.
                  </p>
                </div>
                <Link
                  href="/product"
                  className="px-5 py-[11px] rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#5F8CFF] text-white font-semibold text-sm hover:translate-y-[-1px] transition-transform inline-flex items-center gap-2 whitespace-nowrap"
                  style={{ boxShadow: '0 12px 32px rgba(124,92,255,.25)' }}
                >
                  Explore the product →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ───────────────── FOOTER ───────────────── */}
      <Footer />
    </div>
  );
}
