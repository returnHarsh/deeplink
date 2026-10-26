export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070A12] text-white"
      style={{
        background:
          'radial-gradient(circle at 50% 40%, rgba(124,92,255,0.18), transparent 45%), radial-gradient(circle at 50% 60%, rgba(35,213,255,0.12), transparent 45%), #070A12',
      }}
    >
      <div className="relative flex items-center justify-center">
        {/* Outer glowing pulsating ring */}
        <div className="absolute w-24 h-24 rounded-full bg-gradient-to-tr from-[#7C5CFF]/30 to-[#23D5FF]/30 blur-xl animate-pulse" />

        {/* Outer spinning gradient ring */}
        <div
          className="w-16 h-16 rounded-full border-2 border-transparent border-t-[#7C5CFF] border-r-[#23D5FF] animate-spin"
          style={{ animationDuration: '0.8s' }}
        />

        {/* Inner spinning counter-ring */}
        <div
          className="absolute w-10 h-10 rounded-full border-2 border-transparent border-b-[#6FE7B2] border-l-[#7C5CFF] animate-spin"
          style={{ animationDirection: 'reverse', animationDuration: '1.2s' }}
        />

        {/* Center glowing core dot */}
        <div className="absolute w-3 h-3 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
      </div>

      {/* Brand & Loading Label */}
      <div className="mt-6 flex flex-col items-center gap-1.5">
        <span className="text-sm font-semibold tracking-wider text-slate-200">
          OpenInBrowser
        </span>
        <div className="flex items-center gap-1 text-xs text-slate-400">
          <span>Loading</span>
          <span className="inline-flex">
            <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
            <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
            <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
          </span>
        </div>
      </div>
    </div>
  );
}
