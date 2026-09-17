'use client';

import Footer from '@/components/Footer';

export default function Home() {
  const openRequestModal = () => {
    window.dispatchEvent(new Event('open-request-modal'));
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        color: '#F7F9FF',
        background:
          'radial-gradient(circle at 12% 0%, rgba(124,92,255,.17), transparent 31%), radial-gradient(circle at 88% 8%, rgba(35,213,255,.12), transparent 28%), linear-gradient(180deg, #070A12 0%, #080B13 45%, #070A12 100%)',
      }}
    >
      <main>
        {/* ───────────────── HERO ───────────────── */}
        <section className="pt-[82px] pb-[62px] max-lg:pt-14">
          <div className="w-[min(1180px,calc(100%-40px))] max-sm:w-[min(100%-24px,1180px)] mx-auto grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-[58px] items-center">
            {/* Hero copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-[7px] border border-white/[0.09] rounded-full bg-white/[0.035] text-[#CDD4E4] text-xs mb-5">
                <span className="w-[7px] h-[7px] rounded-full bg-[#6FE7B2]" style={{ boxShadow: '0 0 12px rgba(111,231,178,.8)' }} />
                AI conversion intelligence for every visitor
              </div>
              <h1 className="text-[clamp(46px,6vw,78px)] max-sm:text-5xl leading-[0.98] tracking-[-0.055em] m-0 mb-6 max-w-[760px]">
                Understand the click.{' '}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg,#fff 5%,#B6A7FF 45%,#72E9FF 92%)' }}>
                  Predict what comes next.
                </span>
              </h1>
              <p className="text-[#AEB7CA] text-lg max-sm:text-base leading-[1.72] max-w-[650px] mb-7">
                Fix social-to-web deep-link friction, understand visitor intent at an individual level,
                and turn live behavior into contextual recommendations that help people move forward.
              </p>
              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={openRequestModal}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-[11px] border-transparent text-white cursor-pointer font-[650] text-sm hover:-translate-y-px transition-all"
                  style={{
                    background: 'linear-gradient(135deg,#7C5CFF,#5F8CFF)',
                    boxShadow: '0 12px 32px rgba(124,92,255,.25)',
                  }}
                >
                  Request early access →
                </button>
                <a className="inline-flex items-center justify-center gap-2 border border-white/[0.09] rounded-xl px-4 py-[11px] bg-white/[0.03] text-white cursor-pointer font-[650] text-sm hover:-translate-y-px hover:border-white/[0.18] transition-all" href="#how">
                  See how it works
                </a>
              </div>
              <div className="mt-6 text-[#778198] text-xs flex gap-[18px] flex-wrap">
                <span className="flex items-center gap-[7px]"><b className="text-[#6FE7B2]">✓</b> Deep-link intelligence</span>
                <span className="flex items-center gap-[7px]"><b className="text-[#6FE7B2]">✓</b> User-level behavior</span>
                <span className="flex items-center gap-[7px]"><b className="text-[#6FE7B2]">✓</b> Real-time AI intent</span>
              </div>
            </div>

            {/* Hero visual — dashboard preview */}
            <div className="relative max-lg:max-w-[720px]" aria-label="OpenInBrowser analytics preview">
              <div className="absolute top-[8%] right-[5%] w-[280px] h-[280px] rounded-full pointer-events-none" style={{ background: 'rgba(124,92,255,.26)', filter: 'blur(75px)' }} />

              <div
                className="relative overflow-hidden rounded-[26px] max-sm:rounded-[20px] border border-white/[0.11]"
                style={{
                  background: 'linear-gradient(180deg,rgba(18,25,46,.92),rgba(11,16,30,.96))',
                  boxShadow: '0 22px 70px rgba(0,0,0,.35)',
                }}
              >
                {/* Window chrome */}
                <div className="h-[54px] flex items-center justify-between px-4 border-b border-white/[0.09] bg-white/[0.018]">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF7A90]" />
                    <span className="w-2 h-2 rounded-full bg-[#FFD166]" />
                    <span className="w-2 h-2 rounded-full bg-[#6FE7B2]" />
                  </div>
                  <div className="text-[11px] text-[#AAB5CB] flex items-center gap-[7px]">
                    <span className="w-[7px] h-[7px] rounded-full bg-[#6FE7B2]" style={{ boxShadow: '0 0 12px rgba(111,231,178,.8)' }} />
                    Live visitor intelligence
                  </div>
                </div>

                <div className="p-4">
                  {/* Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      { label: 'High intent visitors', value: '184', change: '↑ 12.4% today' },
                      { label: 'Deep-link recovery', value: '91.8%', change: '↑ 7.1%' },
                      { label: 'AI interventions', value: '327', change: 'live' },
                    ].map((m) => (
                      <div key={m.label} className="p-3.5 border border-white/[0.09] rounded-[15px] bg-white/[0.026]">
                        <small className="text-[#7F8AA3] text-[10px] uppercase tracking-[0.08em]">{m.label}</small>
                        <strong className="block text-[22px] mt-2 tracking-[-0.04em]">{m.value}</strong>
                        <em className="not-italic text-[#6FE7B2] text-[11px]">{m.change}</em>
                      </div>
                    ))}
                  </div>

                  {/* Dashboard grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-[1.05fr_0.95fr] gap-2.5 mt-2.5">
                    {/* Visitor journey */}
                    <div className="border border-white/[0.09] rounded-[16px] bg-white/[0.025] p-3.5">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs text-[#D9DDEA] font-[650]">Visitor journey</span>
                        <small className="text-[10px] text-[#72809A]">Session #OIB-4821</small>
                      </div>
                      <div className="flex flex-col gap-[9px]">
                        {[
                          { icon: '↗', title: 'Instagram referral', desc: 'Opened inside in-app browser', time: '00:00' },
                          { icon: '⌁', title: 'Pricing viewed', desc: 'Scrolled through 86% of plans', time: '00:43' },
                          { icon: '⇄', title: 'Plan comparison', desc: 'Switched between Pro and Growth', time: '01:21' },
                          { icon: '?', title: 'FAQ opened', desc: 'Viewed cancellation and billing', time: '02:04' },
                        ].map((ev) => (
                          <div key={ev.title} className="grid grid-cols-[25px_1fr_auto] gap-[9px] items-center p-[9px_10px] rounded-xl bg-[#0B1120] border border-white/[0.055]">
                            <div className="w-[25px] h-[25px] rounded-lg bg-[rgba(124,92,255,.16)] grid place-items-center text-[#BFB4FF] text-xs">{ev.icon}</div>
                            <div>
                              <b className="text-[11px]">{ev.title}</b>
                              <p className="m-0 mt-0.5 text-[#717D96] text-[9.5px]">{ev.desc}</p>
                            </div>
                            <time className="text-[9px] text-[#5C6982]">{ev.time}</time>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Intent + recommendation */}
                    <div>
                      <div className="p-3 rounded-[14px] border border-[rgba(124,92,255,.25)]" style={{ background: 'linear-gradient(145deg,rgba(124,92,255,.12),rgba(35,213,255,.06))' }}>
                        <div className="text-[10px] text-[#8D9AB3] uppercase tracking-[0.08em]">AI intent classification</div>
                        <div className="font-[760] text-lg mt-[7px] mb-[3px]">Commercial investigation</div>
                        <div className="text-[11px] text-[#6FE7B2]">86% confidence · high purchase consideration</div>
                      </div>
                      <div className="mt-2.5 p-[11px] border border-white/[0.09] rounded-[14px] bg-[#0B1120]">
                        <small className="text-[#7D8AA3] text-[9px] uppercase tracking-[0.08em]">Suggested next experience</small>
                        <p className="text-[11px] leading-[1.45] mt-[7px] mb-[9px] text-[#CBD3E3]">Show a concise Pro vs Growth comparison with billing reassurance.</p>
                        <div className="h-[7px] rounded-full" style={{ background: 'linear-gradient(90deg,#7C5CFF 0 74%,rgba(255,255,255,.06) 74%)' }} />
                      </div>
                    </div>
                  </div>

                  {/* Source strip */}
                  <div className="mt-2.5 p-[12px_14px] border border-white/[0.09] rounded-[14px] flex items-center justify-between gap-3.5 bg-white/[0.018] max-sm:flex-col max-sm:items-start">
                    <div className="text-[10px] text-[#76829A]">Journey resolution</div>
                    <div className="text-[11px] text-[#CDD5E5] max-sm:text-left text-right">
                      <strong className="text-[#77E8FF]">Instagram</strong> → In-app browser → Web → Intent → Recommendation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────── PRODUCT FEATURES ───────────────── */}
        <section className="py-[92px] max-sm:py-[72px]" id="product">
          <div className="w-[min(1180px,calc(100%-40px))] max-sm:w-[min(100%-24px,1180px)] mx-auto">
            <div className="max-w-[760px] mb-[42px]">
              <div className="text-xs text-[#82E9FF] uppercase tracking-[0.12em] font-bold">One intelligence layer</div>
              <h2 className="text-[clamp(34px,4vw,52px)] tracking-[-0.045em] leading-[1.06] mt-3 mb-4">From broken social clicks to smarter website decisions.</h2>
              <p className="m-0 text-[#929EB5] text-[17px] leading-[1.65]">OpenInBrowser connects acquisition, behavior and AI decisioning in one continuous visitor journey.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {[
                { icon: '↗', title: 'Deep-link journey recovery', desc: 'Detect social and in-app browser journeys, preserve context and help users reach the intended web or app experience.', mini: 'Source → destination → journey continuity' },
                { icon: '◎', title: 'User-level behavioral intelligence', desc: 'Turn clicks, scrolls, navigation patterns and repeat visits into a structured behavioral profile for each visitor.', mini: 'Events → journey → behavioral state' },
                { icon: '✦', title: 'AI intent classification', desc: 'Identify whether a visitor is exploring, comparing, researching, transacting or showing hesitation as behavior changes.', mini: 'Informational · Commercial · Transactional' },
                { icon: '⌁', title: 'Friction detection', desc: 'Surface repeated hesitation, dead-end journeys, abandonments and conversion blockers without manually watching every session.', mini: 'AI-assisted journey diagnosis' },
                { icon: '⇢', title: 'Next-best experience', desc: 'Recommend relevant content, comparisons, FAQs or calls to action based on what the visitor appears to need next.', mini: 'Intent → ranking → contextual action' },
                { icon: '◫', title: 'Conversion intelligence', desc: 'Understand which journeys, behaviors and interventions correlate with meaningful outcomes across your digital experience.', mini: 'Understand → predict → improve' },
              ].map((f) => (
                <article key={f.title} className="relative overflow-hidden min-h-[250px] p-[22px] border border-white/[0.09] rounded-[20px]" style={{ background: 'linear-gradient(180deg,rgba(255,255,255,.035),rgba(255,255,255,.018))' }}>
                  <div className="absolute -right-[70px] -bottom-[90px] w-[160px] h-[160px] rounded-full pointer-events-none" style={{ background: 'rgba(124,92,255,.12)', filter: 'blur(35px)' }} />
                  <div className="w-[42px] h-[42px] rounded-[13px] bg-[rgba(124,92,255,.13)] border border-[rgba(124,92,255,.24)] grid place-items-center text-[19px]">{f.icon}</div>
                  <h3 className="text-lg mt-[34px] mb-[9px] tracking-[-0.025em]">{f.title}</h3>
                  <p className="text-[#8894AC] text-sm leading-[1.62] m-0">{f.desc}</p>
                  <div className="mt-[15px] text-[#C6CFDF] text-[11px]">{f.mini}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────── HOW IT WORKS ───────────────── */}
        <section className="py-[92px] max-sm:py-[72px]" id="how">
          <div className="w-[min(1180px,calc(100%-40px))] max-sm:w-[min(100%-24px,1180px)] mx-auto">
            <div className="max-w-[760px] mb-[42px]">
              <div className="text-xs text-[#82E9FF] uppercase tracking-[0.12em] font-bold">How it works</div>
              <h2 className="text-[clamp(34px,4vw,52px)] tracking-[-0.045em] leading-[1.06] mt-3 mb-4">A continuous intelligence loop from source to conversion.</h2>
              <p className="m-0 text-[#929EB5] text-[17px] leading-[1.65]">Instead of treating deep links, analytics and personalization as separate tools, OpenInBrowser connects them into one decision layer.</p>
            </div>

            <div className="border border-white/[0.09] rounded-[24px] p-[22px]" style={{ background: 'linear-gradient(180deg,rgba(255,255,255,.025),rgba(255,255,255,.012))' }}>
              <div className="grid grid-cols-1 lg:grid-cols-7 items-center gap-[9px]">
                <div className="min-h-[112px] border border-white/[0.09] rounded-[16px] p-3.5 flex flex-col justify-between bg-[#0B1120]">
                  <small className="text-[9px] text-[#6F7B94] uppercase tracking-[0.08em]">01 Source</small>
                  <b className="text-[13px] leading-[1.25]">Social click</b>
                </div>
                <div className="text-center text-[#4E5A73] max-lg:rotate-90 max-lg:h-[18px]">→</div>
                <div className="min-h-[112px] border border-white/[0.09] rounded-[16px] p-3.5 flex flex-col justify-between bg-[#0B1120]">
                  <small className="text-[9px] text-[#6F7B94] uppercase tracking-[0.08em]">02 Resolve</small>
                  <b className="text-[13px] leading-[1.25]">Deep-link journey</b>
                </div>
                <div className="text-center text-[#4E5A73] max-lg:rotate-90 max-lg:h-[18px]">→</div>
                <div className="min-h-[112px] rounded-[16px] p-3.5 flex flex-col justify-between" style={{ border: '1px solid rgba(124,92,255,.35)', background: 'linear-gradient(145deg,rgba(124,92,255,.16),rgba(35,213,255,.05))' }}>
                  <small className="text-[9px] text-[#6F7B94] uppercase tracking-[0.08em]">03 Understand</small>
                  <b className="text-[13px] leading-[1.25]">Behavior + AI intent</b>
                </div>
                <div className="text-center text-[#4E5A73] max-lg:rotate-90 max-lg:h-[18px]">→</div>
                <div className="min-h-[112px] rounded-[16px] p-3.5 flex flex-col justify-between bg-[#0B1120]" style={{ border: '1px solid rgba(111,231,178,.3)' }}>
                  <small className="text-[9px] text-[#6F7B94] uppercase tracking-[0.08em]">04 Act</small>
                  <b className="text-[13px] leading-[1.25]">Relevant next experience</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────── AI INTELLIGENCE / DEMO ───────────────── */}
        <section className="py-[92px] max-sm:py-[72px]" id="intelligence">
          <div className="w-[min(1180px,calc(100%-40px))] max-sm:w-[min(100%-24px,1180px)] mx-auto grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-6 items-stretch" id="demo">
            <div className="border border-white/[0.09] rounded-[22px] p-7 bg-white/[0.02]">
              <div className="text-xs text-[#82E9FF] uppercase tracking-[0.12em] font-bold">AI visitor intelligence</div>
              <h3 className="text-[30px] tracking-[-0.04em] mt-3 mb-3">Go beyond &ldquo;what happened?&rdquo;</h3>
              <p className="text-[#8E9AB1] leading-[1.65] mb-5">
                Traditional analytics helps you observe behavior. OpenInBrowser is designed to interpret that behavior,
                classify intent and recommend the most relevant next experience while the journey is still happening.
              </p>
              <div className="flex gap-2 flex-wrap">
                {['Intent classification', 'Journey summarization', 'Propensity signals', 'Behavioral segmentation', 'Next-action ranking'].map((tag) => (
                  <span key={tag} className="text-[11px] px-[9px] py-[7px] border border-white/[0.09] rounded-full text-[#B9C3D6] bg-white/[0.025]">{tag}</span>
                ))}
              </div>
            </div>

            <div className="border border-white/[0.09] rounded-[22px] p-5 bg-[#0C1221]">
              <div className="flex justify-between items-center pb-4 border-b border-white/[0.09]">
                <div className="flex items-center gap-[11px]">
                  <div className="w-[38px] h-[38px] rounded-full grid place-items-center font-extrabold text-[13px]" style={{ background: 'linear-gradient(135deg,#7556FF,#23D5FF)' }}>V7</div>
                  <div>
                    <b className="text-[13px]">Visitor 7F42</b>
                    <small className="block text-[#73809A] text-[10px] mt-[3px]">Returning · Instagram · Mobile</small>
                  </div>
                </div>
                <div className="text-[10px] text-[#FFD166] px-2 py-1.5 rounded-full border border-[rgba(255,209,102,.22)] bg-[rgba(255,209,102,.07)]">Considering purchase</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3.5">
                {[
                  { label: 'Intent', value: 'Commercial investigation' },
                  { label: 'Confidence', value: '86%' },
                  { label: 'Top signal', value: 'Pricing revisits' },
                  { label: 'Risk', value: 'Billing hesitation' },
                ].map((ins) => (
                  <div key={ins.label} className="p-[13px] rounded-[14px] bg-white/[0.026] border border-white/[0.09]">
                    <small className="text-[9px] text-[#75819A] uppercase tracking-[0.08em]">{ins.label}</small>
                    <b className="block mt-[7px] text-[13px]">{ins.value}</b>
                  </div>
                ))}
              </div>

              <div className="mt-2.5 p-3.5 rounded-[14px] border border-[rgba(124,92,255,.22)]" style={{ background: 'linear-gradient(145deg,rgba(124,92,255,.1),rgba(35,213,255,.035))' }}>
                <small className="text-[#8D9AB2] text-[9px] uppercase tracking-[0.08em]">AI interpretation</small>
                <p className="mt-[7px] mb-0 text-[#D1D8E5] text-xs leading-[1.5]">
                  This visitor has returned twice, compared two plans and opened billing FAQs. Surface a concise plan comparison and cancellation policy before another pricing revisit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────── USE CASES / COMPARE ───────────────── */}
        <section className="py-[92px] max-sm:py-[72px]" id="use-cases">
          <div className="w-[min(1180px,calc(100%-40px))] max-sm:w-[min(100%-24px,1180px)] mx-auto">
            <div className="max-w-[760px] mb-[42px]">
              <div className="text-xs text-[#82E9FF] uppercase tracking-[0.12em] font-bold">Positioning</div>
              <h2 className="text-[clamp(34px,4vw,52px)] tracking-[-0.045em] leading-[1.06] mt-3 mb-4">Analytics tells you what users did. OpenInBrowser helps decide what should happen next.</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[18px]">
              <div className="border border-white/[0.09] rounded-[22px] p-[26px] bg-white/[0.022]">
                <h3 className="text-[22px] m-0 mb-[18px]">Traditional behavior analytics</h3>
                <div className="flex flex-col gap-[13px]">
                  {[
                    'Record sessions and user interactions',
                    'Show heatmaps, clicks and scroll depth',
                    'Surface friction for teams to investigate',
                    'Primarily explains past behavior',
                  ].map((item) => (
                    <div key={item} className="flex gap-2.5 items-start text-[#98A5BC] text-sm leading-[1.45]">
                      <span className="w-[18px] h-[18px] rounded-full grid place-items-center flex-shrink-0 mt-px bg-white/5 text-[#6C7890] text-[10px]">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[22px] p-[26px]" style={{ border: '1px solid rgba(124,92,255,.28)', background: 'linear-gradient(145deg,rgba(124,92,255,.12),rgba(35,213,255,.035))' }}>
                <h3 className="text-[22px] m-0 mb-[18px]">OpenInBrowser intelligence layer</h3>
                <div className="flex flex-col gap-[13px]">
                  {[
                    'Connect social source, deep-link resolution and on-site behavior',
                    'Classify individual visitor intent as journeys evolve',
                    'Predict friction and likely next actions',
                    'Recommend contextually relevant next experiences in real time',
                  ].map((item) => (
                    <div key={item} className="flex gap-2.5 items-start text-[#98A5BC] text-sm leading-[1.45]">
                      <span className="w-[18px] h-[18px] rounded-full grid place-items-center flex-shrink-0 mt-px bg-[rgba(111,231,178,.12)] text-[#6FE7B2] text-[10px]">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────── CTA ───────────────── */}
        <section className="py-[92px] max-sm:py-[72px]">
          <div className="w-[min(1180px,calc(100%-40px))] max-sm:w-[min(100%-24px,1180px)] mx-auto">
            <div
              className="relative overflow-hidden rounded-[28px] p-14 max-sm:p-[34px_24px]"
              style={{
                border: '1px solid rgba(124,92,255,.25)',
                background: 'linear-gradient(135deg,rgba(124,92,255,.18),rgba(35,213,255,.065))',
              }}
              id="cta"
            >
              <div className="absolute -right-[130px] -top-[170px] w-[380px] h-[380px] rounded-full pointer-events-none" style={{ background: 'rgba(35,213,255,.16)', filter: 'blur(70px)' }} />

              <div className="relative flex justify-between items-end gap-[30px] max-lg:flex-col max-lg:items-start">
                <div>
                  <div className="text-xs text-[#82E9FF] uppercase tracking-[0.12em] font-bold">Build for the next click</div>
                  <h2 className="text-[clamp(34px,4vw,52px)] tracking-[-0.045em] leading-[1.06] mt-3 mb-2.5 max-w-[680px]">Turn every visitor journey into usable intelligence.</h2>
                  <p className="text-[#A7B2C7] max-w-[650px] leading-[1.6] m-0">Start with deep-link continuity. Add user-level behavior. Layer AI intent and recommendations on top.</p>
                </div>
                <button
                  onClick={openRequestModal}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-[11px] border-transparent text-white cursor-pointer font-[650] text-sm hover:-translate-y-px transition-all flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg,#7C5CFF,#5F8CFF)',
                    boxShadow: '0 12px 32px rgba(124,92,255,.25)',
                  }}
                >
                  Request access →
                </button>
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
