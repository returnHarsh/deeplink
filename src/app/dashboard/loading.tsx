export default function DashboardLoading() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30 overflow-hidden relative p-8">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-4xl">
        {/* Header Skeleton */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 animate-pulse">
          <div>
            <div className="h-8 md:h-10 w-56 bg-white/10 rounded-xl mb-3" />
            <div className="h-4 w-72 bg-white/5 rounded-lg" />
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <div className="h-10 w-28 bg-white/10 rounded-xl" />
            <div className="h-10 w-24 bg-white/5 rounded-xl" />
          </div>
        </div>

        {/* Analytics Cards Skeleton */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-10 animate-pulse">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col gap-2"
            >
              <div className="h-3 w-16 bg-white/10 rounded" />
              <div className="h-7 w-20 bg-white/15 rounded-lg mt-1" />
              <div className="h-2.5 w-12 bg-white/5 rounded mt-0.5" />
            </div>
          ))}
        </div>

        {/* Search & Filter Bar Skeleton */}
        <div className="flex gap-3 mb-6 animate-pulse">
          <div className="h-11 flex-1 bg-white/[0.04] border border-white/10 rounded-xl" />
          <div className="h-11 w-32 bg-white/[0.04] border border-white/10 rounded-xl" />
        </div>

        {/* Links List Skeleton */}
        <div className="space-y-4 animate-pulse">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/[0.025] border border-white/[0.07] flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              <div className="space-y-2.5 flex-1 w-full">
                <div className="flex items-center gap-2.5">
                  <div className="h-5 w-40 bg-white/15 rounded-lg" />
                  <div className="h-4 w-16 bg-purple-500/20 rounded-full" />
                </div>
                <div className="h-3.5 w-64 bg-white/5 rounded" />
                <div className="h-3 w-32 bg-white/5 rounded" />
              </div>
              <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                <div className="h-9 w-20 bg-white/10 rounded-xl" />
                <div className="h-9 w-20 bg-white/10 rounded-xl" />
                <div className="h-9 w-9 bg-white/5 rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
