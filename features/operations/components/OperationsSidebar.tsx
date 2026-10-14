'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const sidebarLinks = [
  { href: '/operations', label: 'Dashboard', icon: 'dashboard' },
  { href: '/operations/bookings', label: 'Bookings', icon: 'book_online' },
  { href: '/operations/packages', label: 'Packages', icon: 'luggage' },
  { href: '/operations/inquiries', label: 'Customer Inquiries', icon: 'support_agent' },
  { href: '/operations/analytics', label: 'Analytics', icon: 'bar_chart' },
]

export default function OperationsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-56 shrink-0 bg-white border-r border-outline-variant/30 flex flex-col" style={{ height: '100dvh', overflowY: 'auto' }}>
      {/* Sidebar header */}
      <div className="px-4 py-4 border-b border-outline-variant/20">
        <p className="font-label-caps text-label-caps text-on-surface-variant tracking-widest">
          OPERATIONS CENTER
        </p>
      </div>

      {/* Nav links */}
      <nav className="flex-1 py-3">
        {sidebarLinks.map((link) => {
          const isActive =
            link.href === '/operations'
              ? pathname === '/operations'
              : pathname.startsWith(link.href)
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors rounded-lg mx-2 my-0.5 ${
                isActive
                  ? 'bg-navy/8 text-navy font-semibold'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
              style={isActive ? { backgroundColor: 'rgba(14,69,115,0.08)' } : {}}
            >
              <span className={`material-symbols-outlined text-xl ${isActive ? 'text-navy' : 'text-on-surface-variant'}`}>
                {link.icon}
              </span>
              {link.label}
            </Link>
          )
        })}
      </nav>

      {/* Rwanda Field Ops footer */}
      <div className="px-4 py-4 border-t border-outline-variant/20">
        <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">RWANDA FIELD OPS</p>
        <p className="text-xs text-on-surface-variant">14 Active Safari Vehicles</p>
        <p className="text-xs text-on-surface-variant mt-2">© 2024 TTI Tours Management</p>
      </div>
    </aside>
  )
}
