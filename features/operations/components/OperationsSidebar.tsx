'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const sidebarLinks = [
  { href: '/operations', label: 'Dashboard' },
  { href: '/operations/bookings', label: 'Bookings' },
  { href: '/operations/packages', label: 'Packages' },
  { href: '/operations/inquiries', label: 'Customer Inquiries' },
  { href: '/operations/analytics', label: 'Analytics' },
]

export default function OperationsSidebar() {
  const pathname = usePathname()

  return (
    <aside
      className="w-44 shrink-0 bg-white border-r border-outline-variant/25 flex flex-col"
      style={{ height: '100dvh' }}
    >
      {/* Section label */}
      <div className="px-4 pt-5 pb-3 border-b border-outline-variant/15">
        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
          OPERATIONS CENTER
        </p>
      </div>

      {/* Nav links */}
      <nav className="flex-1 py-2 px-2">
        {sidebarLinks.map((link) => {
          const isActive =
            link.href === '/operations'
              ? pathname === '/operations'
              : pathname.startsWith(link.href)
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2.5 rounded-lg text-sm transition-colors mb-0.5 ${
                isActive
                  ? 'font-semibold text-navy'
                  : 'font-normal text-on-surface-variant hover:text-navy hover:bg-surface-container-low'
              }`}
              style={isActive ? { backgroundColor: 'rgba(14,69,115,0.07)' } : {}}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-outline-variant/15 space-y-1">
        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
          RWANDA FIELD OPS
        </p>
        <p className="text-xs text-on-surface-variant">14 Active Safari Vehicles</p>
        <p className="text-[10px] text-on-surface-variant pt-2">© 2024 TTI Tours Management</p>
      </div>
    </aside>
  )
}
