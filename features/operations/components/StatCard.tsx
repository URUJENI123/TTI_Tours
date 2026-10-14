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

export default function StatCard({
  label,
  value,
  subValue,
  icon,
  trend,
  trendUp,
  badge,
  footer,
}: StatCardProps) {
  const badgeColors = {
    red: 'bg-red-100 text-red-700',
    green: 'bg-emerald-100 text-emerald-700',
    yellow: 'bg-amber-100 text-amber-700',
    blue: 'bg-sky-100 text-sky-700',
  }

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-outline-variant/20 flex flex-col gap-2">
      <div className="flex items-start justify-between">
        <span className="font-label-caps text-label-caps text-on-surface-variant">{label}</span>
        <span className="material-symbols-outlined text-xl text-on-surface-variant/60">{icon}</span>
      </div>

      <div className="flex items-end gap-2 flex-wrap">
        <span className="font-headline-lg text-headline-lg text-navy leading-none">{value}</span>
        {subValue && (
          <span className="text-xs text-on-surface-variant mb-0.5">{subValue}</span>
        )}
      </div>

      {trend && (
        <span
          className={`text-xs font-medium flex items-center gap-0.5 ${
            trendUp ? 'text-emerald-600' : 'text-red-500'
          }`}
        >
          <span className="material-symbols-outlined text-sm">
            {trendUp ? 'trending_up' : 'trending_down'}
          </span>
          {trend}
        </span>
      )}

      {badge && (
        <span
          className={`inline-flex items-center self-start px-2 py-0.5 rounded text-xs font-semibold ${badgeColors[badge.color]}`}
        >
          {badge.label}
        </span>
      )}

      {footer && <div className="mt-1 pt-2 border-t border-outline-variant/20 text-xs text-on-surface-variant">{footer}</div>}
    </div>
  )
}
