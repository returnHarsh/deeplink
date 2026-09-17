import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — OpenInBrowser',
  description: 'Privacy Policy for OpenInBrowser, operated by Desert Glam.',
};

const tocItems = [
  { id: 'who', label: '1. Who we are' },
  { id: 'scope', label: '2. Scope' },
  { id: 'collect', label: '3. Information we collect' },
  { id: 'how', label: '4. How we collect it' },
  { id: 'use', label: '5. How we use information' },
  { id: 'roles', label: '6. Customer data roles' },
  { id: 'ai', label: '7. AI & categorization' },
  { id: 'cookies', label: '8. Cookies & tracking' },
  { id: 'sharing', label: '9. Sharing' },
  { id: 'retention', label: '10. Retention' },
  { id: 'rights', label: '11. Your rights' },
  { id: 'security', label: '12. Security' },
  { id: 'children', label: '13. Children' },
  { id: 'transfers', label: '14. International transfers' },
  { id: 'changes', label: '15. Changes' },
  { id: 'contact', label: '16. Contact' },
];

export default function PrivacyPage() {
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
            <h1 className="text-[clamp(42px,5vw,68px)] leading-[1.01] tracking-[-0.055em] m-0 mb-[18px]">Privacy Policy</h1>
            <p className="text-[17px] leading-[1.7] text-[#A8B3C8] max-w-[760px] mb-5">
              This Privacy Policy explains how OpenInBrowser, operated by <strong className="text-white">Desert Glam</strong>, collects, uses and protects information across our website, platform and analytics services.
            </p>
            <div className="flex gap-3 flex-wrap mt-4">
              <span className="text-[11px] text-[#8491A8] px-2.5 py-[7px] border border-white/[0.08] rounded-full bg-white/[0.02]">Effective date: 17 September 2026</span>
              <span className="text-[11px] text-[#8491A8] px-2.5 py-[7px] border border-white/[0.08] rounded-full bg-white/[0.02]">Legal entity: Desert Glam</span>
              <span className="text-[11px] text-[#8491A8] px-2.5 py-[7px] border border-white/[0.08] rounded-full bg-white/[0.02]">Brand: OpenInBrowser</span>
            </div>
            <div className="mt-[18px] p-[14px_16px] border border-[rgba(255,184,92,.22)] bg-[rgba(255,184,92,.06)] text-[#C9B38B] rounded-[13px] text-xs leading-[1.55]">
              This is a practical legal draft, not a substitute for jurisdiction-specific legal advice. Because OpenInBrowser processes behavioral analytics and may support user profiling, have counsel review consent, retention, cookie and cross-border data requirements before launch.
            </div>
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
              <section id="who">
                <h2 className="text-2xl tracking-[-0.025em] mt-0 mb-2.5">1. Who we are</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm"><strong>OpenInBrowser</strong> is a product and brand operated by <strong>Desert Glam</strong> (&ldquo;Desert Glam&rdquo;, &ldquo;OpenInBrowser&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;). We provide deep-link management, link tracking, website and user-behavior analytics, visitor intent classification, conversion intelligence and related software services.</p>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">Where this Policy refers to OpenInBrowser, the contracting and legal entity is Desert Glam unless a separate written agreement states otherwise.</p>
              </section>

              {/* 2 */}
              <section id="scope">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">2. Scope of this Policy</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">This Policy applies to information collected through our websites, dashboards, customer accounts, APIs, tracking links, SDKs, scripts, integrations and other OpenInBrowser services.</p>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">It also explains our handling of behavioral data processed on behalf of customers who deploy OpenInBrowser on their websites, applications or campaigns.</p>
              </section>

              {/* 3 */}
              <section id="collect">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">3. Information we collect</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">Depending on how you interact with OpenInBrowser, we may collect:</p>
                <ul className="pl-5 text-[#A7B2C5] leading-[1.72] text-sm">
                  <li><strong>Account information:</strong> name, business email, company name, role, login details and support communications.</li>
                  <li><strong>Billing and subscription information:</strong> plan, billing status, invoices and transaction references. Payment card details may be handled directly by third-party payment providers.</li>
                  <li><strong>Device and technical information:</strong> IP address, browser, operating system, device type, language, timestamps, referrer and approximate location derived from IP where permitted.</li>
                  <li><strong>Tracked-link information:</strong> link identifier, source, destination, campaign metadata, click timestamps, redirect or deep-link outcome and related attribution parameters.</li>
                  <li><strong>Website interaction information:</strong> page views, navigation paths, clicks, scroll activity, session duration, repeat visits, interactions with elements, conversion events and other customer-configured events.</li>
                  <li><strong>Derived analytics:</strong> audience segments, engagement indicators, intent categories, journey states, conversion signals and model-generated summaries or recommendations.</li>
                  <li><strong>Content submitted by customers:</strong> configuration data, event names, page metadata, labels, notes or other content customers choose to provide.</li>
                </ul>
              </section>

              {/* 4 */}
              <section id="how">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">4. How we collect information</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">We may collect information directly from users, automatically through tracking technologies, through customer implementations of our scripts or SDKs, from third-party integrations, or when a user follows an OpenInBrowser-managed link.</p>
              </section>

              {/* 5 */}
              <section id="use">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">5. How we use information</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">We use information to provide, operate, secure and improve OpenInBrowser. This may include:</p>
                <ul className="pl-5 text-[#A7B2C5] leading-[1.72] text-sm">
                  <li>delivering link routing, redirection and deep-link functionality;</li>
                  <li>measuring clicks, users, sessions, campaigns and conversion events;</li>
                  <li>producing dashboards, reports and customer analytics;</li>
                  <li>classifying visitor behavior and intent;</li>
                  <li>generating recommendations, summaries and product insights;</li>
                  <li>detecting fraud, abuse, outages or security events;</li>
                  <li>supporting customers and responding to requests;</li>
                  <li>administering subscriptions and billing;</li>
                  <li>improving models, algorithms and product functionality where permitted by applicable agreements and law.</li>
                </ul>
              </section>

              {/* 6 */}
              <section id="roles">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">6. Customer data roles</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">For information we collect about our own website visitors, account holders and business contacts, Desert Glam generally acts as the organization determining why and how that information is processed.</p>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">For visitor information collected through a customer&apos;s implementation of OpenInBrowser, the customer typically determines the purposes of processing and OpenInBrowser processes that information to provide the service. Customers are responsible for providing legally required notices, obtaining consents where required and configuring the service consistently with applicable law.</p>
                <div className="my-[18px] p-[15px] rounded-[13px] border border-[rgba(118,87,255,.22)] bg-[rgba(118,87,255,.07)] text-[#C7CFDE] text-[13px] leading-[1.6]">
                  Customers should not use OpenInBrowser to collect sensitive personal data unless expressly supported by the service and covered by an appropriate written agreement.
                </div>
              </section>

              {/* 7 */}
              <section id="ai">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">7. AI, intent classification and automated analytics</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">OpenInBrowser may use statistical models, machine learning and artificial intelligence to interpret behavioral events and generate categories such as informational, commercial, transactional, exploratory, returning or similar journey states.</p>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">These classifications are probabilistic indicators based on observed behavior. They may be incomplete or inaccurate and should not be treated as definitive statements about a person&apos;s identity, beliefs, financial condition, health, protected characteristics or other sensitive traits.</p>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">Customers must not use OpenInBrowser outputs to make unlawful or solely automated decisions that produce legal or similarly significant effects on individuals unless they independently ensure that such use is lawful.</p>
              </section>

              {/* 8 */}
              <section id="cookies">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">8. Cookies and similar technologies</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">We and our customers may use cookies, local storage, pixels, scripts, SDKs or similar technologies to recognize sessions, preserve link context, measure engagement and deliver analytics.</p>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">Where applicable law requires consent before using non-essential tracking technologies, customers are responsible for implementing an appropriate consent mechanism before activating those technologies.</p>
              </section>

              {/* 9 */}
              <section id="sharing">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">9. How we share information</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">We may share information with service providers that help us host, secure, analyze, communicate, process payments or operate OpenInBrowser. We may also disclose information:</p>
                <ul className="pl-5 text-[#A7B2C5] leading-[1.72] text-sm">
                  <li>at a customer&apos;s direction;</li>
                  <li>to comply with applicable law, legal process or lawful requests;</li>
                  <li>to protect the rights, safety or security of users, customers, Desert Glam or others;</li>
                  <li>in connection with a merger, acquisition, financing, restructuring or sale of assets, subject to appropriate safeguards.</li>
                </ul>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">We do not sell personal information in the ordinary meaning of a sale for money. If our practices change in a way that triggers additional statutory disclosure or opt-out obligations, we will update this Policy and provide required controls.</p>
              </section>

              {/* 10 */}
              <section id="retention">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">10. Data retention</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">We retain information for as long as reasonably necessary to provide the service, satisfy contractual commitments, maintain security, comply with law, resolve disputes and enforce agreements.</p>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">Retention periods may vary by data type, customer configuration, subscription plan and legal requirement. Customers may be able to configure or request deletion of certain customer-controlled data, subject to contractual and technical limitations.</p>
              </section>

              {/* 11 */}
              <section id="rights">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">11. Your privacy rights</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">Depending on your location, you may have rights to request access, correction, deletion, restriction, objection, portability or withdrawal of consent. You may also have rights concerning certain forms of profiling or targeted processing.</p>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">Where OpenInBrowser processes data on behalf of a customer, requests concerning that customer&apos;s visitor data may need to be directed to the customer first. We will support customers with valid requests as required by applicable agreements and law.</p>
              </section>

              {/* 12 */}
              <section id="security">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">12. Security</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">We use reasonable administrative, technical and organizational measures intended to protect information against unauthorized access, loss, misuse or alteration. No online service or transmission method can be guaranteed to be completely secure.</p>
              </section>

              {/* 13 */}
              <section id="children">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">13. Children&apos;s privacy</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">OpenInBrowser is intended for business and commercial use and is not designed for children. Customers must not knowingly configure the service to collect children&apos;s personal information where prohibited or without obtaining legally required authorization.</p>
              </section>

              {/* 14 */}
              <section id="transfers">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">14. International data transfers</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">Our service providers and infrastructure may process information in countries other than the country where the information was collected. Where required, we will use appropriate contractual or legal safeguards for international transfers.</p>
              </section>

              {/* 15 */}
              <section id="changes">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">15. Changes to this Policy</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">We may update this Privacy Policy from time to time. The effective date at the top of this page identifies the latest version. Material changes may be communicated through the service, by email or by another reasonable method.</p>
              </section>

              {/* 16 */}
              <section id="contact">
                <h2 className="text-2xl tracking-[-0.025em] mt-[34px] mb-2.5">16. Contact us</h2>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">For privacy questions, requests or complaints, contact:</p>
                <p className="text-[#A7B2C5] leading-[1.72] text-sm">
                  <strong>Desert Glam</strong><br />
                  Operating brand: OpenInBrowser<br />
                  Email: <a href="mailto:privacy@openinbrowser.in" className="text-[#8DE8FF] hover:underline">privacy@openinbrowser.in</a><br />
                  Registered address: [INSERT REGISTERED BUSINESS ADDRESS]
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
