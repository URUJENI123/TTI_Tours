const scheduleItems = [
  {
    time: '05:30 AM',
    location: 'Kigali HQ',
    status: 'IN TREK',
    statusColor: 'emerald',
    title: 'Gorilla Trekking focus Group Brief',
    detail: 'Guide: Emmanuel M. · 8 Pax · Sector 3 Accent',
  },
  {
    time: '09:00 AM',
    location: 'Kigali Washing Station',
    status: 'CURRENT',
    statusColor: 'teal',
    title: 'Ibirunga Specialty Coffee Agrotourism',
    detail: 'Guide: Aline K. · 6 Pax · Single-Origin Workshopping',
  },
  {
    time: '02:00 PM',
    location: 'Rubavu Bay',
    status: 'UPCOMING',
    statusColor: 'blue',
    title: 'Lake Kivu Sunset Islands Cruise',
    detail: 'Guide: Patrick U. · 4 Pax · Catamaran Launch',
  },
  {
    time: '06:30 PM',
    location: 'Singita Dining Room',
    status: 'UPCOMING',
    statusColor: 'blue',
    title: 'Conservation Roundtable & Wine Tasting',
    detail: "Hosted by Chef Nkurude · VIP Party: Vance",
  },
]

const statusBadge: Record<string, string> = {
  emerald: 'bg-emerald-100 text-emerald-700',
  teal: 'bg-teal/10 text-teal',
  blue: 'bg-sky-100 text-sky-700',
}

export default function LiveExecution() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-outline-variant/20 overflow-hidden">
      <div className="px-4 pt-4 pb-3 border-b border-outline-variant/20 flex items-center justify-between">
        <div>
          <p className="font-label-caps text-label-caps text-on-surface-variant">LIVE EXECUTION</p>
          <h3 className="font-semibold text-navy text-sm mt-0.5">Today's Field Schedule</h3>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse inline-block" />
          <span className="text-xs font-medium text-teal">Kingi · Rubavu</span>
        </div>
      </div>

      <div className="divide-y divide-outline-variant/15">
        {scheduleItems.map((item, i) => (
          <div key={i} className="px-4 py-3 flex gap-3">
            {/* Time column */}
            <div className="shrink-0 w-16 text-right">
              <p className="text-xs font-bold text-navy">{item.time}</p>
              <p className="text-xs text-on-surface-variant">{item.location}</p>
            </div>

            {/* Connector */}
            <div className="flex flex-col items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-teal mt-0.5 shrink-0" />
              {i < scheduleItems.length - 1 && (
                <div className="w-px flex-1 bg-outline-variant/30 mt-1" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-3">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <p className="font-semibold text-sm text-on-surface">{item.title}</p>
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full ${statusBadge[item.statusColor]}`}
                >
                  {item.status}
                </span>
              </div>
              <p className="text-xs text-on-surface-variant mt-0.5">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
