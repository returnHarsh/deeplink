'use client';

import { useState, useMemo, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { format, subHours, subDays, subMinutes, eachHourOfInterval, eachDayOfInterval, eachMinuteOfInterval, isAfter, getHours } from 'date-fns';
import { LinkData } from '@/lib/storage';

type TimeRange = '5M' | '10M' | '30M' | '1H' | '24H' | '7D' | '30D' | 'ALL';

interface DashboardClientProps {
  link: LinkData;
}

export default function DashboardClient({ link }: DashboardClientProps) {
  const [timeRange, setTimeRange] = useState<TimeRange>('24H');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Convert timestamps to Date objects
  const timestamps = useMemo(() => {
    return (link.clickTimestamps || []).map(ts => new Date(ts)).sort((a, b) => a.getTime() - b.getTime());
  }, [link.clickTimestamps]);

  // Filter timestamps based on selected range
  const filteredTimestamps = useMemo(() => {
    const now = new Date();
    let cutoff: Date;

    switch (timeRange) {
      case '5M':
        cutoff = subMinutes(now, 5);
        break;
      case '10M':
        cutoff = subMinutes(now, 10);
        break;
      case '30M':
        cutoff = subMinutes(now, 30);
        break;
      case '1H':
        cutoff = subHours(now, 1);
        break;
      case '24H':
        cutoff = subHours(now, 24);
        break;
      case '7D':
        cutoff = subDays(now, 7);
        break;
      case '30D':
        cutoff = subDays(now, 30);
        break;
      case 'ALL':
      default:
        cutoff = new Date(0); // Beginning of time
    }

    return timestamps.filter(ts => isAfter(ts, cutoff));
  }, [timestamps, timeRange]);

  // Generate chart data based on range
  const chartData = useMemo(() => {
    if (filteredTimestamps.length === 0) return [];

    const now = new Date();
    let data: { time: string; clicks: number, fullDate: Date }[] = [];

    let formatStr: string;

    // Short ranges:
    // - 5M, 10M, 30M -> 1-minute buckets
    // - 1H -> 5-minute buckets (to keep it readable)
    if (['5M', '10M', '30M'].includes(timeRange)) {
        const minutesMap = { '5M': 5, '10M': 10, '30M': 30 } as const;
        const mins = minutesMap[timeRange as keyof typeof minutesMap];
        const start = subMinutes(now, mins);
        const minutes = eachMinuteOfInterval({ start, end: now });
        formatStr = 'HH:mm';

        data = minutes.map(m => {
            const count = filteredTimestamps.filter(ts => 
                ts >= m && ts < new Date(m.getTime() + 60 * 1000)
            ).length;
            return { time: format(m, formatStr), clicks: count, fullDate: m };
        });
    } else if (timeRange === '1H') {
        const start = subMinutes(now, 60);
        // 5-minute buckets over the last hour
        const minutes = eachMinuteOfInterval({ start, end: now }, { step: 5 });
        formatStr = 'HH:mm';

        data = minutes.map(m => {
            const bucketEnd = new Date(m.getTime() + 5 * 60 * 1000);
            const count = filteredTimestamps.filter(ts => 
                ts >= m && ts < bucketEnd
            ).length;
            return { time: format(m, formatStr), clicks: count, fullDate: m };
        });
    } else if (timeRange === '24H') {
        const start = subHours(now, 24);
        const hours = eachHourOfInterval({ start, end: now });
        formatStr = 'HH:mm';
        
        data = hours.map(h => {
             const count = filteredTimestamps.filter(ts => 
                 ts >= h && ts < new Date(h.getTime() + 60 * 60 * 1000)
             ).length;
             return { time: format(h, formatStr), clicks: count, fullDate: h };
        });
    } else {
        // Days
        const start = timeRange === '7D' ? subDays(now, 7) : (timeRange === '30D' ? subDays(now, 30) : (timestamps[0] || subDays(now, 1)));
        // Safety check if start > now (no data)
        const safeStart = start > now ? subDays(now, 1) : start;
        
        const days = eachDayOfInterval({ start: safeStart, end: now });
        formatStr = 'MMM dd';
        
        data = days.map(d => {
            const count = filteredTimestamps.filter(ts => 
                ts >= d && ts < new Date(d.getTime() + 24 * 60 * 60 * 1000)
            ).length;
             return { time: format(d, formatStr), clicks: count, fullDate: d };
        });
    }

    return data;
  }, [filteredTimestamps, timeRange, timestamps]);

  // Peak Hour Analysis (0-23)
  const peakHoursData = useMemo(() => {
     const counts = new Array(24).fill(0);
     // Use ALL timestamps for peak hour analysis to give broader context?
     // Or just filtered? User said "Customize the time also", implying stats depend on filter.
     // But "Unique stats" implying general habits. Let's use ALL timestamps for better "General Peak" accuracy.
     timestamps.forEach(ts => {
         const hour = getHours(ts);
         counts[hour]++;
     });
     return counts.map((count, hour) => ({ hour: `${hour}:00`, clicks: count }));
  }, [timestamps]);

  // Process Country Data
  const countryData = useMemo(() => {
    const counts = new Map<string, number>();
    const clicks = link.clicksInfo || [];
    
    // Fallback if clicksInfo is empty but clickTimestamps has data
    if (clicks.length === 0 && (link.clickTimestamps || []).length > 0) {
      return [{ country: 'Unknown', clicks: link.clicks }];
    }

    clicks.forEach(c => {
      counts.set(c.country, (counts.get(c.country) || 0) + 1);
    });

    return Array.from(counts.entries())
      .map(([country, count]) => ({ country, clicks: count }))
      .sort((a, b) => b.clicks - a.clicks);
  }, [link.clicksInfo, link.clickTimestamps, link.clicks]);

  if (!mounted) {
    return <div className="p-6 max-w-6xl mx-auto animate-pulse bg-white/5 rounded-xl h-96" />;
  }


  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Analytics Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
             Stats for <a href={link.url} target="_blank" className="text-blue-500 hover:underline">{link.slug}</a>
             <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                {link.tag}
             </span>
          </p>
        </div>
        <div className="flex gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
          {(
            [
              '1H',   // 1 hour
              '30M',  // 30 minutes
              '10M',  // 10 minutes
              '5M',   // 5 minutes
              '24H',
              '7D',
              '30D',
              'ALL',
            ] as TimeRange[]
          ).map(r => (
            <button
              key={r}
              onClick={() => setTimeRange(r)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                timeRange === r 
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Clicks */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total Clicks</h3>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-white">
            {filteredTimestamps.length}
            <span className="text-sm font-normal text-gray-400 ml-2">in selected range</span>
          </p>
        </div>
        
        {/* All Time Clicks */}
         <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">All Time Clicks</h3>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-white">
            {link.clicks}
          </p>
        </div>

        {/* Top Country (New Stat) */}
         <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Top Country</h3>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-white">
            {countryData[0]?.country || 'N/A'}
            <span className="text-sm font-normal text-gray-400 ml-2">
              ({countryData[0]?.clicks || 0} clicks)
            </span>
          </p>
        </div>
      </div>

      {/* Main Chart */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Clicks Over Time</h3>
        <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
                <defs>
                <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis 
                    dataKey="time" 
                    stroke="#9CA3AF" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                />
                <YAxis 
                    stroke="#9CA3AF" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                    allowDecimals={false}
                />
                <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                />
                <Area 
                    type="monotone" 
                    dataKey="clicks" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorClicks)" 
                />
            </AreaChart>
            </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Peak Hours */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Peak Activity Hours</h3>
          <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
              <BarChart data={peakHoursData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis 
                      dataKey="hour" 
                      stroke="#9CA3AF" 
                      fontSize={12} 
                      tickLine={false} 
                      axisLine={false}
                  />
                  <YAxis 
                      stroke="#9CA3AF" 
                      fontSize={12} 
                      tickLine={false} 
                      axisLine={false}
                      allowDecimals={false}
                  />
                  <Tooltip 
                      cursor={{fill: 'transparent'}}
                      contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Bar dataKey="clicks" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
              </ResponsiveContainer>
          </div>
        </div>

        {/* Country Distribution */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Clicks by Country</h3>
          <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
              <BarChart data={countryData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E5E7EB" />
                  <XAxis 
                    type="number"
                    stroke="#9CA3AF" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                    allowDecimals={false}
                  />
                  <YAxis 
                    type="category"
                    dataKey="country" 
                    stroke="#9CA3AF" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                    width={80}
                  />
                  <Tooltip 
                      cursor={{fill: 'transparent'}}
                      contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Bar dataKey="clicks" fill="#8b5cf6" radius={[0, 4, 4, 0]} />
              </BarChart>
              </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Clicks Table */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Recent Clicks (Last 10)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-700">
                <th className="py-4 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Timestamp</th>
                <th className="py-4 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">IP Address</th>
                <th className="py-4 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Location</th>
                <th className="py-4 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Company/ISP</th>
              </tr>
            </thead>
            <tbody>
              {(link.clicksInfo || []).slice(-10).reverse().map((click, i) => (
                <tr key={i} className="border-b border-gray-50 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/20 transition-colors">
                  <td className="py-4 px-4 text-sm text-gray-700 dark:text-gray-300">
                    {format(new Date(click.timestamp), 'MMM dd, HH:mm:ss')}
                  </td>
                  <td className="py-4 px-4 text-sm font-mono text-gray-600 dark:text-gray-400">
                    {click.ip}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-700 dark:text-gray-300">
                    {[click.city, click.region, click.country].filter(x => x && x !== 'Unknown').join(', ') || 'Unknown'}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">
                    {click.company || 'Unknown'}
                  </td>
                </tr>
              ))}
              {(link.clicksInfo || []).length === 0 && (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-gray-500 italic">No detailed click information available yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
