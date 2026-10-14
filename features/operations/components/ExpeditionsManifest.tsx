'use client'

import { useState } from 'react'

const TABS = ['ALL TOURS (28)', 'GORILLA TREKKING (14)', 'COFFEE AGRO-TOUR (6)', 'LAKE KIVU (8)']

const bookings = [
  {
    ref: 'TTI-0492',
    guest: 'Dr. Marcus Vance',
    pax: '3 pax · Foreigner · Thr',
    experience: 'Volcanoes & Gorilla Trekking 4D',
    dates: 'Oct 28 – Oct 31, 2024',
    guide: 'Jean Paul',
    guideTitle: 'Senior Elite Guide',
    value: 'RWF 55,400',
    valueSub: 'Paid Full',
    status: 'PERMIT SECURED',
    statusColor: 'green' as const,
  },
  {
    ref: 'TTI-0465',
    guest: 'Elena Rostova',
    pax: '2 pax · Resident · Thr',
    experience: 'Ibirunga Specialty Coffee & Kinigi',
    dates: 'Oct 22 – Oct 24 2024 (Day Tour)',
    guide: 'Aline Karasira',
    guideTitle: 'Agro-tourism Lead',
    value: '$780',
    valueSub: 'Deposit Paid',
    status: 'CONFIRMED',
    statusColor: 'blue' as const,
  },
  {
    ref: 'TTI-0981',
    guest: 'Somerville Family',
    pax: '5 pax · VIP · Private',
    experience: "Nyungwe Primates + Singita Rwisirabo",
    dates: 'Nov 5 – Nov 08, 2024',
    guide: 'Unassigned',
    guideTitle: '',
    value: 'RWF 18,200',
    valueSub: 'Deposit (50%)',
    status: 'GUIDE PENDING',
    statusColor: 'yellow' as const,
  },
  {
    ref: 'TTI-0994',
    guest: 'Henrik Lindqvist',
    pax: '1 pax · Solo · Photographer',
    experience: 'Lake Kivu Kayak & Canopy Walk',
    dates: 'Nov 06 – Nov 07, 2024',
    guide: 'Patrick Uwase',
    guideTitle: 'Waterways Lead',
    value: '$2,100',
    valueSub: 'Card Saved',
    status: 'DEPOSIT PAID',
    statusColor: 'teal' as const,
  },
]

const statusStyles: Record<string, string> = {
  green: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  blue: 'bg-sky-50 text-sky-700 border border-sky-200',
  yellow: 'bg-amber-50 text-amber-700 border border-amber-200',
  teal: 'bg-teal/10 text-teal border border-teal/30',
}

export default function ExpeditionsManifest({ fill = false }: { fill?: boolean }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-outline-variant/20 overflow-hidden flex flex-col${fill ? ' h-full' : ''}`}>
      {/* Header */}
      <div className="px-5 pt-5 pb-3 border-b border-outline-variant/20">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="font-label-caps text-label-caps text-on-surface-variant mb-0.5">
              ACTIVE BOOKINGS MANIFEST
            </p>
            <h3 className="font-headline-md text-headline-md text-navy">
              Expeditions &amp; Field Manifest
            </h3>
          </div>
          <span className="text-xs text-on-surface-variant">Sorted by Departure Date ↑</span>
        </div>
        {/* Tab row */}
        <div className="flex gap-1 overflow-x-auto custom-scrollbar pb-1">
          {TABS.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === i
                  ? 'bg-navy text-white'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant text-xs font-semibold uppercase tracking-wide">
              <th className="px-5 py-3 text-left">REF &amp; GUEST</th>
              <th className="px-4 py-3 text-left">EXPERIENCE / DATES</th>
              <th className="px-4 py-3 text-left">LEAD GUIDE</th>
              <th className="px-4 py-3 text-right">VALUE</th>
              <th className="px-4 py-3 text-left">STATUS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/15">
            {bookings.map((b, i) => (
              <tr key={i} className="hover:bg-surface-container-low/50 transition-colors">
                {/* Ref & Guest */}
                <td className="px-5 py-4">
                  <p className="font-semibold text-navy text-xs">{b.ref}</p>
                  <p className="font-medium text-on-surface text-sm">{b.guest}</p>
                  <p className="text-xs text-on-surface-variant">{b.pax}</p>
                </td>
                {/* Experience */}
                <td className="px-4 py-4 max-w-[180px]">
                  <p className="font-medium text-on-surface leading-snug">{b.experience}</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">{b.dates}</p>
                </td>
                {/* Guide */}
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-teal/20 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-sm text-teal">person</span>
                    </div>
                    <div>
                      <p className={`font-medium text-sm ${b.guide === 'Unassigned' ? 'text-on-surface-variant italic' : 'text-on-surface'}`}>
                        {b.guide}
                      </p>
                      {b.guideTitle && (
                        <p className="text-xs text-on-surface-variant">{b.guideTitle}</p>
                      )}
                    </div>
                  </div>
                </td>
                {/* Value */}
                <td className="px-4 py-4 text-right">
                  <p className="font-bold text-navy">{b.value}</p>
                  <p className="text-xs text-on-surface-variant">{b.valueSub}</p>
                </td>
                {/* Status */}
                <td className="px-4 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold tracking-wide ${
                      statusStyles[b.statusColor]
                    }`}
                  >
                    {b.status === 'PERMIT SECURED' && (
                      <span className="material-symbols-outlined text-xs mr-1">verified</span>
                    )}
                    {b.statusColor === 'yellow' && (
                      <span className="material-symbols-outlined text-xs mr-1">warning</span>
                    )}
                    {b.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-outline-variant/20 flex items-center justify-between">
        <p className="text-xs text-on-surface-variant">Showing 4 of 28 expedition bookings</p>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 text-xs font-medium border border-outline-variant/40 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors">
            Previous
          </button>
          <button className="px-3 py-1.5 text-xs font-medium border border-outline-variant/40 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors">
            Next Page
          </button>
        </div>
      </div>
    </div>
  )
}
