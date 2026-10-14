const urgentItems = [
  {
    priority: 'HIGH',
    title: 'RDB PERMIT VERIFICATION',
    time: 'Due: 2h',
    description:
      '3 gorilla permits pending passport upload for Miller party (TTI-0448) before 14:00. RDB quota discusses.',
    actions: ['Upload Doc', 'Flag Agent'],
    color: 'red',
    icon: 'policy',
  },
  {
    priority: 'TOMORROW',
    title: 'DIETARY CUSTOMIZATION',
    time: 'Tomorrow',
    description:
      'Vegan & gluten free picnic hamper requested for Akagera Savannah drive (Dr. Moreau, Vance Party).',
    actions: ['Notify Singita Catering Team →'],
    color: 'amber',
    icon: 'restaurant',
  },
  {
    priority: '2:40',
    title: 'VEHICLE TRANSFER NOTICE',
    time: 'Today',
    description:
      'Kigali left airport (KGL) pickup for Flight WB462. Driver Patricue confirmation dispatch MG-3015.',
    actions: [],
    color: 'blue',
    icon: 'directions_car',
  },
]

const colorMap: Record<string, { dot: string; badge: string; icon: string }> = {
  red: {
    dot: 'bg-red-500',
    badge: 'bg-red-50 text-red-700 border-red-200',
    icon: 'text-red-500',
  },
  amber: {
    dot: 'bg-amber-400',
    badge: 'bg-amber-50 text-amber-700 border-amber-200',
    icon: 'text-amber-500',
  },
  blue: {
    dot: 'bg-sky-500',
    badge: 'bg-sky-50 text-sky-700 border-sky-200',
    icon: 'text-sky-500',
  },
}

export default function UrgentActions() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-outline-variant/20 overflow-hidden">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-outline-variant/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse inline-block" />
          <span className="font-semibold text-sm text-navy">Urgent Action Items</span>
        </div>
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          3 HIGH PRIORITY
        </span>
      </div>

      {/* Items */}
      <div className="divide-y divide-outline-variant/15">
        {urgentItems.map((item, i) => {
          const c = colorMap[item.color]
          return (
            <div key={i} className="px-4 py-4">
              <div className="flex items-start gap-2 mb-1.5">
                <span className={`material-symbols-outlined text-base mt-0.5 ${c.icon}`}>
                  {item.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <p className="font-semibold text-xs text-navy tracking-wide">{item.title}</p>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded border ${c.badge}`}
                    >
                      {item.time}
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    {item.description}
                  </p>
                  {item.actions.length > 0 && (
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {item.actions.map((a, j) => (
                        <button
                          key={j}
                          className="text-xs font-semibold text-teal hover:underline"
                        >
                          {a}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
