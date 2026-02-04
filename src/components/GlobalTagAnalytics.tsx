'use client';

import { useState, useMemo, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { subHours, subDays, subMinutes, isAfter } from 'date-fns';
import { LinkData } from '@/lib/storage';

type TimeRange = '5M' | '30M' | '1H' | '24H' | '3D' | '7D' | 'ALL';

interface GlobalTagAnalyticsProps {
  links: LinkData[];
}

const getTagColor = (tag: string) => {
  switch (tag.toLowerCase()) {
    case 'linkedin': return '#60a5fa';
    case 'instagram': return '#f472b6';
    case 'twitter(x)': return '#9ca3af';
    case 'facebook': return '#3b82f6';
    default: return '#a855f7';
  }
};

export default function GlobalTagAnalytics({ links }: GlobalTagAnalyticsProps) {
  const [timeRange, setTimeRange] = useState<TimeRange>('24H');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const tagData = useMemo(() => {
    const now = new Date();
    let cutoff: Date;

    switch (timeRange) {
      case '5M': cutoff = subMinutes(now, 5); break;
      case '30M': cutoff = subMinutes(now, 30); break;
      case '1H': cutoff = subHours(now, 1); break;
      case '24H': cutoff = subHours(now, 24); break;
      case '3D': cutoff = subDays(now, 3); break;
      case '7D': cutoff = subDays(now, 7); break;
      case 'ALL': default: cutoff = new Date(0);
    }

    const counts: Record<string, number> = {
        'linkedin': 0,
        'instagram': 0,
        'twitter(x)': 0,
        'facebook': 0,
        'others': 0
    };

    links.forEach(link => {
      const tag = link.tag?.toLowerCase() || 'others';
      const validClicks = (link.clickTimestamps || []).filter(ts => isAfter(new Date(ts), cutoff)).length;
      counts[tag] = (counts[tag] || 0) + validClicks;
    });

    return Object.entries(counts).map(([tag, clicks]) => ({
      tag: tag.charAt(0).toUpperCase() + tag.slice(1),
      clicks,
      rawTag: tag
    })).sort((a, b) => b.clicks - a.clicks);
  }, [links, timeRange]);

  if (!mounted) {
    return <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-[400px] animate-pulse" />;
  }

  return (
    <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-12 shadow-2xl relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[80px] rounded-full -mr-32 -mt-32 pointer-events-none" />
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 relative z-10">
        <div>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Global Tag Activity
          </h2>
          <p className="text-gray-500 text-sm mt-1">Total clicks aggregated by platform</p>
        </div>

        <div className="flex flex-wrap gap-1.5 bg-black/40 p-1.5 rounded-xl border border-white/5">
          {(['5M', '30M', '1H', '24H', '3D', '7D', 'ALL'] as TimeRange[]).map((r) => (
            <button
              key={r}
              onClick={() => setTimeRange(r)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                timeRange === r
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20'
                  : 'text-gray-500 hover:text-white hover:bg-white/5'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[300px] w-full relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={tagData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
            <XAxis 
              dataKey="tag" 
              stroke="#6b7280" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false}
              tick={{ fill: '#9ca3af' }}
            />
            <YAxis 
              stroke="#6b7280" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false}
              tick={{ fill: '#9ca3af' }}
              allowDecimals={false}
            />
            <Tooltip
              cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
              contentStyle={{ 
                backgroundColor: '#111827', 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                color: '#fff'
              }}
              itemStyle={{ color: '#fff' }}
            />
            <Bar dataKey="clicks" radius={[6, 6, 0, 0]}>
              {tagData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getTagColor(entry.rawTag)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
