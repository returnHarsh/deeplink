import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-[38px] pb-[46px] text-[#6E7A93] text-xs">
      <div className="w-[min(1180px,calc(100%-40px))] max-sm:w-[min(100%-24px,1180px)] mx-auto flex flex-col sm:flex-row justify-between gap-5 border-t border-white/[0.09] pt-[26px]">
        <div>
          © 2026 OpenInBrowser. OpenInBrowser is operated by <strong className="text-[#AEB9CC]">Desert Glam</strong>.
        </div>
        <div className="flex gap-[18px] flex-wrap">
          <Link href="/product" className="hover:text-white transition-colors">How it works?</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          {/* <a href="mailto:hello@openinbrowser.in" className="hover:text-white transition-colors">Contact</a> */}
        </div>
      </div>
    </footer>
  );
}
