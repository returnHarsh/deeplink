import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions — OpenInBrowser',
  description: 'Terms and Conditions for OpenInBrowser, operated by Desert Glam.',
};

const tocItems = [
  { id: 'agreement', label: '1. Agreement' },
  { id: 'service', label: '2. Service' },
  { id: 'eligibility', label: '3. Eligibility' },
  { id: 'accounts', label: '4. Accounts' },
  { id: 'customer', label: '5. Customer responsibilities' },
  { id: 'data', label: '6. Data & privacy' },
  { id: 'ai', label: '7. AI features' },
  { id: 'acceptable', label: '8. Acceptable use' },
  { id: 'fees', label: '9. Fees' },
  { id: 'ip', label: '10. Intellectual property' },
  { id: 'thirdparty', label: '11. Third parties' },
  { id: 'availability', label: '12. Availability' },
  { id: 'confidentiality', label: '13. Confidentiality' },
  { id: 'termination', label: '14. Suspension & termination' },
  { id: 'warranty', label: '15. Disclaimers' },
  { id: 'liability', label: '16. Liability' },
  { id: 'indemnity', label: '17. Indemnity' },
  { id: 'law', label: '18. Governing law' },
  { id: 'changes', label: '19. Changes' },
  { id: 'contact', label: '20. Contact' },
];

export default function TermsPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        color: '#F7F9FC',
        background:
          'radial-gradient(circle at 13% 0%, rgba(118,87,255,.17), transparent 26%), radial-gradient(circle at 90% 8%, rgba(53,214,255,.10), transparent 25%), linear-gradient(180deg, #07111f, #08111d 45%, #07101c)',
      }}
    >
      <main>
        {/* ───────────────── HERO ───────────────── */}
        <section className="pt-16 pb-7">
          <div className="w-[min(1180px,calc(100%-36px))] max-md:w-[min(100%-22px,1180px)] mx-auto">
            <div className="inline-flex items-center gap-2 px-2.5 py-[7px] border border-white/[0.08] rounded-full bg-white/[0.03] text-[#C8D1DF] text-[11px] mb-4">
              <span className="w-[7px] h-[7px] rounded-full bg-[#4BD8A5]" style={{ boxShadow: '0 0 14px #4BD8A5' }} />
              Legal
            </div>
            <h1 className="text-[clamp(42px,5vw,68px)] leading-[1.01] tracking-[-0.055em] m-0 mb-[18px]">Terms &amp; Conditions</h1>
            <p className="text-[17px] leading-[1.7] text-[#A8B3C8] max-w-[760px] mb-5">
              These Terms govern access to and use of OpenInBrowser, a product and service operated by <strong className="text-white">Desert Glam</strong>.
            </p>
            <div className="flex gap-3 flex-wrap mt-4">
              <span className="text-[11px] text-[#8491A8] px-2.5 py-[7px] border border-white/[0.08] rounded-full bg-white/[0.02]">Effective date: 17 November 2025</span>
              <span className="text-[11px] text-[#8491A8] px-2.5 py-[7px] border border-white/[0.08] rounded-full bg-white/[0.02]">Legal entity: Desert Glam</span>
              <span className="text-[11px] text-[#8491A8] px-2.5 py-[7px] border border-white/[0.08] rounded-full bg-white/[0.02]">Brand: OpenInBrowser</span>
            </div>
            {/* <div className="mt-[18px] p-[14px_16px] border border-[rgba(255,184,92,.22)] bg-[rgba(255,184,92,.06)] text-[#C9B38B] rounded-[13px] text-xs leading-[1.55]">
              This is a practical draft and should be reviewed by qualified counsel before production use, particularly for subscriptions, data-processing obligations, liability caps and governing-law provisions.
            </div> */}
          </div>
        </section>

        {/* ───────────────── BODY ───────────────── */}
        <section className="py-[72px] max-sm:py-14">
          <div className="w-[min(1180px,calc(100%-36px))] max-md:w-[min(100%-22px,1180px)] mx-auto grid grid-cols-1 md:grid-cols-[260px_1fr] gap-7 items-start">
            {/* Table of contents */}
            <aside className="md:sticky md:top-20 max-h-[calc(100vh-100px)] overflow-y-auto border border-white/[0.08] rounded-[17px] bg-white/[0.02] p-4">
              <b className="text-[11px] uppercase tracking-[0.08em] text-[#8190A8]">Contents</b>
              {tocItems.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="block text-[#95A1B6] text-xs py-[7px] hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </aside>

            {/* Legal body */}
            <article className="border border-white/[0.08] rounded-[22px] p-[30px] max-sm:p-5" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,.025), rgba(255,255,255,.013))' }}>

              {/* 1 */}
              <section id="agreement">
                <h2 className="text-2xl tracking-[-0.025em] mt-0 mb-2.5">1. Agreement to these Terms</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  These Terms &amp; Conditions (&ldquo;Terms&rdquo;) are entered into between <strong>Desert Glam</strong>, operating the OpenInBrowser brand (&ldquo;Desert Glam&rdquo;, &ldquo;OpenInBrowser&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;), and the person or organization accessing or using the OpenInBrowser website, platform, APIs, scripts, SDKs, dashboards or related services (&ldquo;Customer&rdquo;, &ldquo;you&rdquo; or &ldquo;your&rdquo;).
                </p>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  By creating an account, accepting an order, using the service or otherwise accessing OpenInBrowser, you agree to these Terms.
                </p>
              </section>

              {/* 2 */}
              <section id="service">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">2. The OpenInBrowser service</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  OpenInBrowser provides software for deep-link routing, tracked links, campaign analytics, website and user-behavior analytics, visitor journey analysis, intent classification, conversion intelligence, AI-generated insights and related features.
                </p>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  Features may change, be added, removed, limited or improved over time. Beta or preview features may be subject to additional restrictions and may be changed or discontinued without notice.
                </p>
              </section>

              {/* 3 */}
              <section id="eligibility">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">3. Eligibility and authority</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  You must have legal capacity to enter into these Terms. If you use OpenInBrowser on behalf of a business or organization, you represent that you are authorized to bind that organization to these Terms.
                </p>
              </section>

              {/* 4 */}
              <section id="accounts">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">4. Accounts and access</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  You are responsible for safeguarding credentials, maintaining accurate account information and controlling access granted to your team. You must promptly notify us of suspected unauthorized use.
                </p>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  You are responsible for activity conducted through your account unless caused by a breach of our obligations.
                </p>
              </section>

              {/* 5 */}
              <section id="customer">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">5. Customer responsibilities</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  You are responsible for your implementation and use of OpenInBrowser, including the websites, apps, links, campaigns, scripts, SDKs and events you connect to the service.
                </p>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  You must provide all legally required disclosures and obtain all legally required permissions or consents from your end users, including for cookies, tracking technologies, behavioral analytics or profiling where applicable.
                </p>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  You must not configure OpenInBrowser to collect sensitive personal information, authentication credentials, payment-card data, medical information, government identifiers or other restricted information unless expressly supported and covered by a separate written agreement.
                </p>
              </section>

              {/* 6 */}
              <section id="data">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">6. Customer data and privacy</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  As between the parties, Customer retains its rights in data submitted to or collected through Customer&apos;s use of OpenInBrowser (&ldquo;Customer Data&rdquo;). Customer grants Desert Glam the rights reasonably necessary to host, process, transmit, analyze and otherwise use Customer Data to provide, secure, maintain and improve the service in accordance with these Terms, the Privacy Policy and any applicable written data-processing terms.
                </p>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  Where OpenInBrowser processes personal data on behalf of a Customer, Customer is responsible for establishing a lawful basis for that processing and responding to data-subject requests, unless otherwise agreed in writing.
                </p>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  Our Privacy Policy forms part of the overall legal framework governing use of the service.
                </p>
              </section>

              {/* 7 */}
              <section id="ai">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">7. AI features, categorization and recommendations</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  OpenInBrowser may use machine learning, statistical methods or artificial intelligence to classify visitor intent, summarize journeys, identify patterns, rank recommendations or generate other insights.
                </p>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  AI outputs are probabilistic and may be inaccurate, incomplete or unsuitable for a particular purpose. You remain responsible for reviewing outputs and deciding how to use them.
                </p>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  You must not use OpenInBrowser outputs as the sole basis for unlawful discrimination or for automated decisions that produce legal or similarly significant effects on individuals unless you independently establish that such use is lawful and appropriate.
                </p>
              </section>

              {/* 8 */}
              <section id="acceptable">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">8. Acceptable use</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">You may not use OpenInBrowser to:</p>
                <ul className="space-y-2 text-[#A7B2C5] leading-[1.72] text-sm my-3">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#76e5ff] font-bold text-base leading-none shrink-0 mt-[3px] select-none">•</span>
                    <span>violate applicable law or third-party rights;</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#76e5ff] font-bold text-base leading-none shrink-0 mt-[3px] select-none">•</span>
                    <span>track individuals in a deceptive, unlawful or prohibited manner;</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#76e5ff] font-bold text-base leading-none shrink-0 mt-[3px] select-none">•</span>
                    <span>collect prohibited sensitive information;</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#76e5ff] font-bold text-base leading-none shrink-0 mt-[3px] select-none">•</span>
                    <span>circumvent consent choices or privacy controls;</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#76e5ff] font-bold text-base leading-none shrink-0 mt-[3px] select-none">•</span>
                    <span>introduce malicious code or interfere with the service;</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#76e5ff] font-bold text-base leading-none shrink-0 mt-[3px] select-none">•</span>
                    <span>reverse engineer or attempt to discover non-public source code except where such restriction is prohibited by law;</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#76e5ff] font-bold text-base leading-none shrink-0 mt-[3px] select-none">•</span>
                    <span>resell, sublicense or provide the service as a competing standalone analytics product without written permission;</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#76e5ff] font-bold text-base leading-none shrink-0 mt-[3px] select-none">•</span>
                    <span>misrepresent AI-generated categorization as verified fact about an individual.</span>
                  </li>
                </ul>
              </section>

              {/* 9 */}
              <section id="fees">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">9. Plans, fees and payment</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  Certain features may require a paid subscription or usage-based fees. Pricing, included usage, overage charges, billing intervals and taxes will be shown in the applicable order, plan page or checkout flow.
                </p>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  Unless otherwise stated, fees are non-refundable except where required by law or expressly agreed in writing. We may suspend paid features for overdue amounts after reasonable notice.
                </p>
              </section>

              {/* 10 */}
              <section id="ip">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">10. Intellectual property</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  OpenInBrowser, including its software, interfaces, designs, documentation, models, branding and underlying technology, is owned by or licensed to Desert Glam and is protected by applicable intellectual-property laws.
                </p>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  Subject to these Terms and payment of applicable fees, Desert Glam grants Customer a limited, non-exclusive, non-transferable right to use OpenInBrowser during the applicable subscription or permitted access period.
                </p>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  Feedback or suggestions may be used by Desert Glam without restriction or obligation, provided we do not identify Customer publicly without permission.
                </p>
              </section>

              {/* 11 */}
              <section id="thirdparty">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">11. Third-party services</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  OpenInBrowser may integrate with or depend on third-party products, infrastructure, platforms or APIs. Those services are governed by their own terms and may change independently of OpenInBrowser.
                </p>
              </section>

              {/* 12 */}
              <section id="availability">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">12. Service availability and changes</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  We aim to provide a reliable service, but continuous or error-free availability is not guaranteed. We may perform maintenance, modify features, impose technical limits or take steps reasonably necessary to protect service security and integrity.
                </p>
              </section>

              {/* 13 */}
              <section id="confidentiality">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">13. Confidentiality</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  Each party may receive non-public business, technical or commercial information from the other party. The receiving party will use reasonable care to protect confidential information and will use it only for purposes related to the parties&apos; relationship, except where disclosure is required by law.
                </p>
              </section>

              {/* 14 */}
              <section id="termination">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">14. Suspension and termination</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  You may stop using OpenInBrowser at any time, subject to applicable subscription commitments. We may suspend or terminate access if you materially breach these Terms, create security or legal risk, fail to pay applicable charges or use the service in a way that could harm OpenInBrowser or others.
                </p>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  Upon termination, access to the service may end and Customer Data may be deleted in accordance with our retention practices, applicable agreements and law.
                </p>
              </section>

              {/* 15 */}
              <section id="warranty">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">15. Disclaimers</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  To the maximum extent permitted by law, OpenInBrowser is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We do not warrant that the service will be uninterrupted, error-free or suitable for every business objective.
                </p>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  Analytics, classifications, conversion indicators and AI-generated suggestions are decision-support tools only. They do not guarantee conversion, revenue, campaign performance or any other business outcome.
                </p>
              </section>

              {/* 16 */}
              <section id="liability">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">16. Limitation of liability</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  To the maximum extent permitted by law, Desert Glam will not be liable for indirect, incidental, special, exemplary, punitive or consequential damages, or for loss of profits, revenue, goodwill, business opportunity or data arising from use of OpenInBrowser.
                </p>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  Unless a separate written agreement states otherwise, Desert Glam&apos;s aggregate liability arising out of or relating to the service will not exceed the amounts paid by Customer to Desert Glam for the service during the three months immediately preceding the event giving rise to the claim.
                </p>
                {/* <div className="my-[18px] p-[15px] rounded-[13px] border border-[rgba(118,87,255,.22)] bg-[rgba(118,87,255,.07)] text-[#C7CFDE] text-[13px] leading-[1.6]">
                  The liability cap should be reviewed by counsel before publication because enforceability varies by jurisdiction and customer type.
                </div> */}
              </section>

              {/* 17 */}
              <section id="indemnity">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">17. Indemnity</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  To the extent permitted by law, Customer will defend and indemnify Desert Glam against third-party claims arising from Customer&apos;s unlawful implementation or use of OpenInBrowser, Customer Data, Customer&apos;s violation of third-party rights, or Customer&apos;s failure to obtain required notices or consents.
                </p>
              </section>

              {/* 18 */}
              <section id="law">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">18. Governing law and disputes</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  These Terms are governed by the laws of India, without regard to conflict-of-law principles. Subject to applicable mandatory law, disputes will be subject to the courts having competent jurisdiction at <strong>Jaipur, Rajasthan</strong>.
                </p>
              </section>

              {/* 19 */}
              <section id="changes">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">19. Changes to these Terms</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  We may update these Terms from time to time. The effective date at the top identifies the latest version. If changes materially affect your rights or obligations, we may provide additional notice through the service or by email.
                </p>
              </section>

              {/* 20 */}
              <section id="contact">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">20. Contact</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">Questions about these Terms can be sent to:</p>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  <strong>Desert Glam</strong><br />
                  Operating brand: OpenInBrowser<br />
                  Email: <a href="mailto:divya.batra@openinbrowser.in" className="text-[#8DE8FF] hover:underline">divya.batra@openinbrowser.in</a><br />
                  Registered address: A-5, F-3, ANUPAM-III, VASUNDHRA COLONY, TONK ROAD, Jaipur - 302018
                </p>
              </section>
            </article>
          </div>
        </section>
      </main>

      {/* ───────────────── FOOTER ───────────────── */}
      <Footer />
    </div>
  );
}
