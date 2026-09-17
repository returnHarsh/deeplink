'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    setFormSubmitted(false);
    setFormError(false);
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('requestName')?.focus(), 80);
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = '';
  };

  // Listen for custom event so any page can trigger the modal
  useEffect(() => {
    const handler = () => openModal();
    window.addEventListener('open-request-modal', handler);
    return () => window.removeEventListener('open-request-modal', handler);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalOpen) closeModal();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [modalOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(false);
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    setSubmitting(true);
    try {
      // TODO: Replace with your real API endpoint
      console.log('OpenInBrowser request-access submission:', payload);
      await new Promise((resolve) => setTimeout(resolve, 450));
      setFormSubmitted(true);
      form.reset();
    } catch {
      setFormError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ───────────────── NAV BAR ───────────────── */}
      <header
        className="sticky top-0 z-50 backdrop-blur-[16px] border-b border-white/[0.06] bg-white"
        // style={{ background: 'rgba(7,10,18,.72)' }}
      >
        <div className="w-[min(1180px,calc(100%-40px))] max-sm:w-[min(100%-24px,1180px)] mx-auto h-[74px] max-sm:h-[66px] flex items-center justify-between gap-7">
          <Link href="/" className="flex items-center no-underline" aria-label="OpenInBrowser home">
            <img
              src="/navbar-logo.png"
              alt="OpenInBrowser Logo"
              className="h-20 max-sm:h-16 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex gap-[26px] text-black text-sm">
            <Link href="/product" className=" transition-colors">How it works?</Link>
            <Link href="/privacy" className=" transition-colors">Privacy Policy</Link>
            <Link href="/terms" className=" transition-colors">Terms &amp; Conditions</Link>
            <Link href="/about" className=" transition-colors">About</Link>
          </nav>

          <div className="flex gap-2.5">
            {/* <Link
              className="hidden sm:inline-flex items-center justify-center gap-2 border border-white/[0.09] rounded-xl px-4 py-[11px] bg-white/[0.03] text-white cursor-pointer font-[650] text-sm hover:-translate-y-px hover:border-white/[0.18] transition-all no-underline"
              href="/#demo"
            >
              View demo
            </Link> */}
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-[11px] border-transparent text-white cursor-pointer font-[650] text-sm hover:-translate-y-px transition-all"
              style={{
                background: 'linear-gradient(135deg,#7C5CFF,#5F8CFF)',
                boxShadow: '0 12px 32px rgba(124,92,255,.25)',
              }}
            >
              Request access →
            </button>
          </div>
        </div>
      </header>

      {/* ───────────────── REQUEST ACCESS MODAL ───────────────── */}
      {modalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-5 max-sm:p-2.5" aria-hidden={!modalOpen}>
          {/* Backdrop */}
          <div className="absolute inset-0 backdrop-blur-[10px]" style={{ background: 'rgba(3,6,12,.78)' }} onClick={closeModal} />

          {/* Card */}
          <div
            className="relative w-[min(680px,100%)] max-h-[min(88vh,820px)] max-sm:max-h-[94vh] overflow-auto rounded-[24px] max-sm:rounded-[18px] border border-white/[0.12]"
            style={{
              background:
                'radial-gradient(circle at 100% 0%,rgba(35,213,255,.08),transparent 27%), radial-gradient(circle at 0% 0%,rgba(124,92,255,.12),transparent 30%), #0B1120',
              boxShadow: '0 30px 90px rgba(0,0,0,.55)',
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="requestAccessTitle"
          >
            {!formSubmitted ? (
              <>
                {/* Header */}
                <div className="flex items-start justify-between gap-5 p-[24px_24px_18px] max-sm:p-[20px_18px_15px] border-b border-white/[0.09]">
                  <div>
                    <div className="text-xs text-[#82E9FF] uppercase tracking-[0.12em] font-bold">Request access</div>
                    <h3 id="requestAccessTitle" className="mt-1.5 mb-1.5 text-[26px] tracking-[-0.035em] text-white">
                      Tell us a little about yourself.
                    </h3>
                    <p className="m-0 text-[#8F9BB2] text-[13px] leading-[1.55]">
                      Share your details and we&apos;ll use them to understand your use case and follow up about OpenInBrowser access.
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="w-9 h-9 flex-shrink-0 grid place-items-center rounded-[11px] border border-white/[0.09] bg-white/[0.03] text-white cursor-pointer text-xl hover:bg-white/[0.07] transition-colors"
                    aria-label="Close form"
                  >
                    ×
                  </button>
                </div>

                {/* Form */}
                <form className="p-[22px_24px_24px] max-sm:p-[18px]" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
                    <div className="flex flex-col gap-[7px]">
                      <label htmlFor="requestName" className="text-[11px] text-[#B9C3D6] font-[650]">Name</label>
                      <input id="requestName" name="name" type="text" placeholder="Your full name" autoComplete="name" required className="w-full border border-white/10 rounded-xl bg-[#080E1A] text-white p-[12px_13px] outline-none text-[13px] transition-all focus:border-[rgba(124,92,255,.7)] focus:shadow-[0_0_0_3px_rgba(124,92,255,.11)] placeholder:text-[#526078]" />
                    </div>
                    <div className="flex flex-col gap-[7px]">
                      <label htmlFor="requestPhone" className="text-[11px] text-[#B9C3D6] font-[650]">Phone</label>
                      <input id="requestPhone" name="phone" type="tel" placeholder="+91 98765 43210" autoComplete="tel" required className="w-full border border-white/10 rounded-xl bg-[#080E1A] text-white p-[12px_13px] outline-none text-[13px] transition-all focus:border-[rgba(124,92,255,.7)] focus:shadow-[0_0_0_3px_rgba(124,92,255,.11)] placeholder:text-[#526078]" />
                    </div>
                    <div className="flex flex-col gap-[7px]">
                      <label htmlFor="requestEmail" className="text-[11px] text-[#B9C3D6] font-[650]">Email</label>
                      <input id="requestEmail" name="email" type="email" placeholder="you@company.com" autoComplete="email" required className="w-full border border-white/10 rounded-xl bg-[#080E1A] text-white p-[12px_13px] outline-none text-[13px] transition-all focus:border-[rgba(124,92,255,.7)] focus:shadow-[0_0_0_3px_rgba(124,92,255,.11)] placeholder:text-[#526078]" />
                    </div>
                    <div className="flex flex-col gap-[7px]">
                      <label htmlFor="requestCompany" className="text-[11px] text-[#B9C3D6] font-[650]">Company name</label>
                      <input id="requestCompany" name="company_name" type="text" placeholder="Your company" autoComplete="organization" required className="w-full border border-white/10 rounded-xl bg-[#080E1A] text-white p-[12px_13px] outline-none text-[13px] transition-all focus:border-[rgba(124,92,255,.7)] focus:shadow-[0_0_0_3px_rgba(124,92,255,.11)] placeholder:text-[#526078]" />
                    </div>
                    <div className="flex flex-col gap-[7px] sm:col-span-2">
                      <label htmlFor="requestDesignation" className="text-[11px] text-[#B9C3D6] font-[650]">Designation</label>
                      <input id="requestDesignation" name="designation" type="text" placeholder="Founder, Growth Lead, Product Manager, etc." autoComplete="organization-title" required className="w-full border border-white/10 rounded-xl bg-[#080E1A] text-white p-[12px_13px] outline-none text-[13px] transition-all focus:border-[rgba(124,92,255,.7)] focus:shadow-[0_0_0_3px_rgba(124,92,255,.11)] placeholder:text-[#526078]" />
                    </div>
                    <div className="flex flex-col gap-[7px] sm:col-span-2">
                      <label htmlFor="requestSocial" className="text-[11px] text-[#B9C3D6] font-[650]">
                        Social media links <span className="text-[#69758D] font-normal">(optional)</span>
                      </label>
                      <textarea id="requestSocial" name="social_media_links" placeholder="LinkedIn, Instagram, X, company page, or any other relevant links" className="w-full min-h-[92px] resize-y border border-white/10 rounded-xl bg-[#080E1A] text-white p-[12px_13px] outline-none text-[13px] transition-all focus:border-[rgba(124,92,255,.7)] focus:shadow-[0_0_0_3px_rgba(124,92,255,.11)] placeholder:text-[#526078]" />
                      <div className="mt-[3px] text-[#647189] text-[10px] leading-[1.45]">You can add multiple links, one per line.</div>
                    </div>
                  </div>

                  <label className="flex items-start gap-[9px] mt-[17px] mb-[18px] text-[#78859D] text-[11px] leading-[1.5] cursor-pointer">
                    <input type="checkbox" id="requestConsent" required className="mt-0.5 accent-[#7C5CFF]" />
                    <span>I agree that OpenInBrowser may use these details to contact me regarding product access and related communication.</span>
                  </label>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full p-[13px_18px] border-0 rounded-xl text-white font-[750] cursor-pointer hover:-translate-y-px transition-all disabled:opacity-65 disabled:cursor-not-allowed disabled:transform-none"
                    style={{
                      background: 'linear-gradient(135deg,#7C5CFF,#5F8CFF)',
                      boxShadow: '0 12px 30px rgba(124,92,255,.22)',
                    }}
                  >
                    {submitting ? 'Submitting...' : 'Submit request →'}
                  </button>

                  {formError && (
                    <div className="mt-3 p-[10px_12px] rounded-[10px] bg-[rgba(255,122,144,.08)] border border-[rgba(255,122,144,.2)] text-[#FF9BAD] text-[11px] leading-[1.45]">
                      Something went wrong. Please try again.
                    </div>
                  )}
                </form>
              </>
            ) : (
              <div className="p-[38px_28px_34px] text-center">
                <div className="w-[54px] h-[54px] rounded-[17px] mx-auto mb-4 grid place-items-center bg-[rgba(111,231,178,.11)] border border-[rgba(111,231,178,.25)] text-[#6FE7B2] text-[26px]">
                  ✓
                </div>
                <h3 className="m-0 mb-2 text-[25px] text-white">Request submitted</h3>
                <p className="mx-auto mb-5 max-w-[430px] text-[#8F9BB2] text-[13px] leading-[1.6]">
                  Thanks for your interest in OpenInBrowser. Your details have been captured and the team can follow up with you about access.
                </p>
                <button
                  onClick={closeModal}
                  className="inline-flex p-[11px_16px] rounded-[11px] border border-white/[0.09] bg-white/[0.04] text-white cursor-pointer font-[650] hover:bg-white/[0.07] transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
