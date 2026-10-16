interface StatCardProps {
  label: string
  value: string
  subValue?: string
  icon: string
  trend?: string
  trendUp?: boolean
  badge?: { label: string; color: 'red' | 'green' | 'yellow' | 'blue' }
  footer?: React.ReactNode
}

export default function StatCard({ label, value, subValue, icon, trend, trendUp, badge, footer }: StatCardProps) {
  const badgeColors = {
    red:    'bg-red-50 text-red-700 border border-red-200',
    green:  'bg-emerald-50 text-emerald-700 border border-emerald-200',
    yellow: 'bg-amber-50 text-amber-700 border border-amber-200',
    blue:   'bg-sky-50 text-sky-700 border border-sky-200',
  }

  return (
    <div className="bg-white rounded-lg border border-outline-variant/30 p-3 flex flex-col gap-1">
      {/* Label + icon */}
      <div className="flex items-start justify-between gap-1">
        <span className="text-[9px] font-bold text-on-surface-variant uppercase tracking-wider leading-tight">{label}</span>
        <span className="material-symbols-outlined text-sm text-on-surface-variant/40 shrink-0">{icon}</span>
      </div>

      {/* Value */}
      <div className="flex items-baseline gap-1 flex-wrap">
        <span className="text-2xl font-bold text-navy leading-none">{value}</span>
        {subValue && <span className="text-[10px] text-on-surface-variant">{subValue}</span>}
      </div>

      {/* Trend */}
      {trend && (
        <span className={`text-[10px] flex items-center gap-0.5 font-medium ${trendUp ? 'text-emerald-600' : 'text-red-500'}`}>
          <span className="material-symbols-outlined text-xs">{trendUp ? 'trending_up' : 'trending_down'}</span>
          {trend}
        </span>
      )}

      {/* Badge */}
      {badge && (
        <span className={`self-start text-[9px] font-bold px-1.5 py-0.5 rounded ${badgeColors[badge.color]}`}>{badge.label}</span>
      )}

      {/* Footer */}
      {footer && (
        <div className="pt-1 mt-0.5 border-t border-outline-variant/15 text-[10px] text-on-surface-variant">{footer}</div>
      )}
    </div>
  )
}
