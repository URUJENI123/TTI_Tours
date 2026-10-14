const leads = [
  {
    name: 'Claire Delacroix',
    origin: 'Paris, FR',
    time: '17m ago',
    avatar: 'C',
    avatarBg: 'bg-purple-100 text-purple-700',
    budget: '$6k – $10k',
    duration: '5d',
    description:
      'Looking for private 5-day gorilla trekking + lake stay for 2 adults celebrating our…',
  },
  {
    name: 'Taro Takahashi',
    origin: 'Tokyo, JP',
    time: '44m ago',
    avatar: 'T',
    avatarBg: 'bg-sky-100 text-sky-700',
    budget: '$10k – $15k',
    duration: '8d',
    description:
      '"Group of 4 photographers interested in Golden Monkeys. Groups often been…',
  },
]

export default function WebLeadPipeline() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-outline-variant/20 overflow-hidden">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-outline-variant/20 flex items-center justify-between">
        <div>
          <p className="font-label-caps text-label-caps text-on-surface-variant">WEB LEAD PIPELINE</p>
          <h3 className="font-semibold text-navy text-sm mt-0.5">Tell Us About Your Visit</h3>
        </div>
        <button className="text-xs font-semibold text-teal hover:underline flex items-center gap-1">
          View All (19)
          <span className="material-symbols-outlined text-sm">open_in_new</span>
        </button>
      </div>

      <div className="divide-y divide-outline-variant/15">
        {leads.map((lead, i) => (
          <div key={i} className="px-4 py-4">
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${lead.avatarBg}`}
              >
                {lead.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-sm text-navy">{lead.name}</p>
                    <p className="text-xs text-on-surface-variant">{lead.origin}</p>
                  </div>
                  <span className="text-xs text-on-surface-variant shrink-0">{lead.time}</span>
                </div>
                <div className="flex gap-3 mt-1.5 text-xs text-on-surface-variant">
                  <span className="flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-xs">attach_money</span>
                    {lead.budget}
                  </span>
                  <span className="flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-xs">calendar_today</span>
                    {lead.duration}
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed line-clamp-2">
                  {lead.description}
                </p>
                {/* Actions */}
                <div className="flex gap-2 mt-2.5">
                  <button className="bg-navy text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-navy/90 transition-colors">
                    GENERATE QUOTE
                  </button>
                  <button className="bg-surface-container text-on-surface-variant text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-surface-container-high transition-colors">
                    ASSIGN
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="px-4 py-3 border-t border-outline-variant/20">
        <button className="w-full text-center text-xs font-semibold text-teal hover:underline flex items-center justify-center gap-1">
          OPEN LEAD MANAGEMENT DECK →
        </button>
      </div>
    </div>
  )
}
