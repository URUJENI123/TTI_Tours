const scheduleItems = [
  {
    time: '05:30 AM',
    location: 'Kigali HQ',
    status: 'IN TREK',
    statusColor: 'bg-emerald-100 text-emerald-700',
    dotColor: 'bg-emerald-500',
    title: 'Gorilla Family Base Group Brief',
    detail: 'Guide: Emmanuel M. · 8 Pax · Sector 3 Accent',
  },
  {
    time: '09:00 AM',
    location: 'Kigali Washing Station',
    status: 'CURRENT',
    statusColor: 'bg-teal/10 text-teal',
    dotColor: 'bg-teal',
    title: 'Ibirunga Specialty Coffee Agrotourism',
    detail: 'Guide: Aline K. · 6 Pax · Single Origin Workshopping',
  },
  {
    time: '02:00 PM',
    location: 'Rubavu Bay',
    status: 'UPCOMING',
    statusColor: 'bg-sky-50 text-sky-600',
    dotColor: 'bg-outline-variant',
    title: 'Lake Kivu Sunset Islands Cruise',
    detail: 'Guide: Patrick U. · 4 Pax · Catamaran Launch',
  },
  {
    time: '06:30 PM',
    location: 'Singita Dining Room',
    status: 'UPCOMING',
    statusColor: 'bg-sky-50 text-sky-600',
    dotColor: 'bg-outline-variant',
    title: 'Conservation Roundtable & Wine Tasting',
    detail: 'Hosted by Chef Nkurude · VIP Party: Vance',
  },
]

export default function LiveExecution() {
  return (
    <div className="bg-white rounded-xl border border-outline-variant/20 overflow-hidden">
      <div className="px-3 py-2.5 border-b border-outline-variant/20 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wide">LIVE EXECUTION</p>
          <p className="text-xs font-bold text-navy">Today's Field Schedule</p>
        </div>
        <span className="text-[10px] font-medium text-on-surface-variant">Kingi · Rubavu</span>
      </div>

      <div className="px-3 py-2 divide-y divide-outline-variant/10">
        {scheduleItems.map((item, i) => (
          <div key={i} className="flex gap-2.5 py-2.5">
            {/* Timeline dot + line */}
            <div className="flex flex-col items-center shrink-0 pt-0.5">
              <div className={`w-2 h-2 rounded-full shrink-0 ${item.dotColor}`} />
              {i < scheduleItems.length - 1 && (
                <div className="w-px flex-1 bg-outline-variant/30 mt-1" />
              )}
            </div>
            {/* Content */}
            <div className="flex-1 min-w-0 pb-1">
              <div className="flex items-start justify-between gap-1">
                <div>
                  <p className="text-[10px] font-bold text-navy">{item.time}</p>
                  <p className="text-[10px] text-on-surface-variant">{item.location}</p>
                </div>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${item.statusColor}`}>
                  {item.status}
                </span>
              </div>
              <p className="text-[11px] font-semibold text-on-surface mt-0.5 leading-tight">{item.title}</p>
              <p className="text-[10px] text-on-surface-variant mt-0.5 leading-tight">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
