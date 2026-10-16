const leads = [
  {
    name: 'Claire Delacroix',
    origin: 'Paris, FR',
    time: '17m ago',
    avatarBg: 'bg-purple-100 text-purple-700',
    initials: 'CD',
    budgetMin: '$6k',
    budgetMax: '$10k',
    duration: '5d',
    description: 'Looking for private 5-day gorilla trekking + lake stay for 2 adults celebrating our…',
  },
  {
    name: 'Taro Takahashi',
    origin: 'Tokyo, JP',
    time: '44m ago',
    avatarBg: 'bg-sky-100 text-sky-700',
    initials: 'TT',
    budgetMin: '$10k',
    budgetMax: '$15k',
    duration: '8d',
    description: '"Group of 4 photographers interested in Golden Monkeys. Groups often been…',
  },
]

export default function WebLeadPipeline() {
  return (
    <div className="bg-white rounded-xl border border-outline-variant/20 overflow-hidden">
      <div className="px-3 py-2.5 border-b border-outline-variant/20 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wide">WEB LEAD PIPELINE</p>
          <p className="text-xs font-bold text-navy">Tell Us About Your Visit</p>
        </div>
        <button className="text-[10px] font-bold text-teal hover:underline flex items-center gap-0.5">
          View All (19) <span className="material-symbols-outlined text-xs">open_in_new</span>
        </button>
      </div>

      <div className="divide-y divide-outline-variant/10">
        {leads.map((lead, i) => (
          <div key={i} className="px-3 py-3">
            <div className="flex items-start gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${lead.avatarBg}`}>
                {lead.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-1">
                  <div>
                    <p className="text-[12px] font-bold text-navy leading-tight">{lead.name}</p>
                    <p className="text-[10px] text-on-surface-variant">{lead.origin}</p>
                  </div>
                  <span className="text-[10px] text-on-surface-variant shrink-0">{lead.time}</span>
                </div>
                <div className="flex gap-2 mt-1">
                  <span className="text-[10px] font-semibold text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded">
                    {lead.budgetMin} – {lead.budgetMax}
                  </span>
                  <span className="text-[10px] font-semibold text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded">
                    {lead.duration}
                  </span>
                </div>
                <p className="text-[10px] text-on-surface-variant mt-1 leading-relaxed line-clamp-2">{lead.description}</p>
                <div className="flex gap-2 mt-2">
                  <button className="bg-navy text-white text-[10px] font-bold px-2.5 py-1 rounded hover:bg-navy/90 transition-colors">
                    GENERATE QUOTE
                  </button>
                  <button className="bg-surface-container text-on-surface-variant text-[10px] font-semibold px-2.5 py-1 rounded hover:bg-surface-container-high transition-colors">
                    ASSIGN
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-3 py-2 border-t border-outline-variant/20">
        <button className="w-full text-center text-[10px] font-bold text-teal hover:underline">
          OPEN LEAD MANAGEMENT DECK →
        </button>
      </div>
    </div>
  )
}
