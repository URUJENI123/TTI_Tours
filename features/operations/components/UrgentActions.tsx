const urgentItems = [
  {
    title: 'RDB PERMIT VERIFICATION',
    time: 'Due: 2h',
    timeColor: 'text-red-600',
    description: '3 gorilla permits pending passport upload for Miller party (TTI-0448) before 14:00. RDB quota discusses.',
    actions: ['Upload Doc', 'Flag Agent'],
    borderColor: 'border-l-red-500',
    iconColor: 'text-red-500',
    icon: 'policy',
  },
  {
    title: 'DIETARY CUSTOMIZATION',
    time: 'Tomorrow',
    timeColor: 'text-amber-600',
    description: 'Vegan & gluten free picnic hamper requested for Akagera Savannah drive (Dr. Moreau, Vance Party).',
    actions: ['Notify Singita Catering Team →'],
    borderColor: 'border-l-amber-400',
    iconColor: 'text-amber-500',
    icon: 'restaurant',
  },
  {
    title: 'VEHICLE TRANSFER NOTICE',
    time: '2:40',
    timeColor: 'text-sky-600',
    description: 'Kigali left airport (KGL) pickup for Flight WB462. Driver Patricue confirmation dispatch MG-3015.',
    actions: [],
    borderColor: 'border-l-sky-500',
    iconColor: 'text-sky-500',
    icon: 'directions_car',
  },
]

export default function UrgentActions() {
  return (
    <div className="bg-white rounded-xl border border-outline-variant/20 overflow-hidden">
      {/* Header */}
      <div className="px-3 py-2.5 border-b border-outline-variant/20 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block" />
          <span className="text-xs font-bold text-navy">Urgent Action Items</span>
        </div>
        <span className="bg-red-50 text-red-600 border border-red-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
          3 HIGH PRIORITY
        </span>
      </div>

      {/* Items */}
      <div className="divide-y divide-outline-variant/10">
        {urgentItems.map((item, i) => (
          <div key={i} className={`pl-3 pr-3 py-3 border-l-[3px] ${item.borderColor}`}>
            <div className="flex items-start justify-between gap-2 mb-1">
              <div className="flex items-center gap-1.5">
                <span className={`material-symbols-outlined text-sm ${item.iconColor}`}>{item.icon}</span>
                <p className="text-[10px] font-bold text-navy tracking-wide uppercase">{item.title}</p>
              </div>
              <span className={`text-[10px] font-bold shrink-0 ${item.timeColor}`}>{item.time}</span>
            </div>
            <p className="text-[10px] text-on-surface-variant leading-relaxed">{item.description}</p>
            {item.actions.length > 0 && (
              <div className="flex gap-3 mt-1.5">
                {item.actions.map((a, j) => (
                  <button key={j} className="text-[10px] font-bold text-teal hover:underline">{a}</button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
