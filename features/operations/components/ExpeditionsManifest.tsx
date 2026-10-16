'use client'

import { useState } from 'react'

const TABS = ['ALL TOURS (28)', 'GORILLA TREKKING (14)', 'COFFEE AGRO-TOUR (6)', 'LAKE KI…']

const bookings = [
  {
    ref: 'TTI-0492',
    guest: 'Dr. Marcus Vance',
    pax: '3 pax · Foreigner · Thr',
    experience: 'Volcanoes & Gorilla Trekking 4D',
    dates: 'Oct 28 – Oct 31, 2024',
    guideInitials: 'JN',
    guide: 'Jean Paul N.',
    guideTitle: 'Senior Elite Guide',
    value: '$5,400',
    valueSub: 'Paid Full',
    status: '+ PERMIT SECURED',
    statusColor: 'green' as const,
  },
  {
    ref: 'TTI-0465',
    guest: 'Elena Rostova',
    pax: '2 pax · Resident · Thr',
    experience: 'Ibirunga Specialty Coffee & Kinigi',
    dates: 'Oct 22 – Oct 24 2024 (Day Tour)',
    guideInitials: 'AK',
    guide: 'Aline Karasira',
    guideTitle: 'Agro-tourism Lead',
    value: '$780',
    valueSub: 'Deposit Paid',
    status: '+ CONFIRMED',
    statusColor: 'blue' as const,
  },
  {
    ref: 'TTI-0981',
    guest: 'Somerville Family',
    pax: '5 pax · VIP · Private',
    experience: 'Nyungwe Primates + Singita Rwisirabo',
    dates: 'Nov 5 – Nov 08, 2024',
    guideInitials: '—',
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
    guideInitials: 'PU',
    guide: 'Patrick Uwase',
    guideTitle: 'Waterways Lead',
    value: '$2,100',
    valueSub: 'Card Saved',
    status: '+ DEPOSIT PAID',
    statusColor: 'teal' as const,
  },
]

const statusStyles: Record<string, string> = {
  green:  'bg-emerald-50 text-emerald-700 border border-emerald-200',
  blue:   'bg-sky-50 text-sky-700 border border-sky-200',
  yellow: 'bg-amber-50 text-amber-800 border border-amber-200',
  teal:   'bg-teal/10 text-teal border border-teal/30',
}

const avatarColors: Record<string, string> = {
  JN: 'bg-indigo-100 text-indigo-700',
  AK: 'bg-emerald-100 text-emerald-700',
  PU: 'bg-sky-100 text-sky-700',
  '—': 'bg-surface-container text-on-surface-variant',
}

export default function ExpeditionsManifest({ fill = false }: { fill?: boolean }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className={`bg-white rounded-xl border border-outline-variant/20 overflow-hidden flex flex-col${fill ? ' h-full' : ''}`}>

      {/* ── Card header ── */}
      <div className="px-4 pt-4 pb-2 border-b border-outline-variant/20">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="font-label-caps text-label-caps text-on-surface-variant">ACTIVE BOOKINGS MANIFEST</p>
            <h3 className="text-base font-bold text-navy mt-0.5">Expeditions &amp; Field Manifest</h3>
          </div>
          <span className="text-[11px] text-on-surface-variant flex items-center gap-0.5">
            Sorted by Departure Date
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
              <path fillRule="evenodd" d="M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04L10.75 5.612V16.25A.75.75 0 0 1 10 17Z" clipRule="evenodd" />
            </svg>
          </span>
        </div>

        {/* Tabs */}
        <div className="flex gap-1.5 overflow-x-auto custom-scrollbar pb-1">
          {TABS.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`whitespace-nowrap px-3 py-1 rounded-full text-[11px] font-semibold transition-colors border ${
                activeTab === i
                  ? 'bg-navy text-white border-navy'
                  : 'bg-white text-on-surface-variant border-outline-variant/40 hover:bg-surface-container'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ── Table ── */}
      <div className="overflow-x-auto flex-1">
        <table className="w-full">
          {/* Column headers */}
          <thead>
            <tr className="border-b border-outline-variant/20">
              <th className="px-4 py-2 text-left text-[10px] font-bold text-on-surface-variant uppercase tracking-wider min-w-[150px]">REF &amp; GUEST</th>
              <th className="px-3 py-2 text-left text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">EXPERIENCE / DATES</th>
              <th className="px-3 py-2 text-left text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">LEAD GUIDE</th>
              <th className="px-3 py-2 text-right text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">VALUE</th>
              <th className="px-3 py-2 text-left text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">STATUS</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-outline-variant/10">
            {bookings.map((b, i) => (
              <tr key={i} className="hover:bg-surface-container-low/40 transition-colors">

                {/* Ref & Guest */}
                <td className="px-4 py-3 align-top">
                  <p className="text-[10px] font-bold text-teal tracking-wide">{b.ref}</p>
                  <p className="text-[12px] font-semibold text-navy leading-tight mt-0.5">{b.guest}</p>
                  <p className="text-[10px] text-on-surface-variant mt-0.5">{b.pax}</p>
                </td>

                {/* Experience / Dates */}
                <td className="px-3 py-3 align-top max-w-[160px]">
                  <p className="text-[11px] font-medium text-on-surface leading-snug">{b.experience}</p>
                  <p className="text-[10px] text-on-surface-variant mt-0.5">{b.dates}</p>
                </td>

                {/* Guide */}
                <td className="px-3 py-3 align-top">
                  <div className="flex items-center gap-1.5">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 ${avatarColors[b.guideInitials] ?? 'bg-surface-container text-on-surface-variant'}`}>
                      {b.guideInitials}
                    </div>
                    <div>
                      <p className={`text-[11px] font-medium leading-tight ${b.guide === 'Unassigned' ? 'text-on-surface-variant italic' : 'text-on-surface'}`}>
                        {b.guide}
                      </p>
                      {b.guideTitle && (
                        <p className="text-[10px] text-on-surface-variant">{b.guideTitle}</p>
                      )}
                    </div>
                  </div>
                </td>

                {/* Value */}
                <td className="px-3 py-3 align-top text-right">
                  <p className="text-[12px] font-bold text-navy">{b.value}</p>
                  <p className="text-[10px] text-on-surface-variant">{b.valueSub}</p>
                </td>

                {/* Status */}
                <td className="px-3 py-3 align-top">
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold tracking-wide ${statusStyles[b.statusColor]}`}>
                    {b.statusColor === 'yellow' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block shrink-0" />
                    )}
                    {b.status}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Footer ── */}
      <div className="px-4 py-2.5 border-t border-outline-variant/20 flex items-center justify-between">
        <p className="text-[10px] text-on-surface-variant">Showing 4 of 28 expedition bookings</p>
        <div className="flex gap-1.5">
          <button className="px-2.5 py-1 text-[10px] font-medium border border-outline-variant/40 rounded text-on-surface-variant hover:bg-surface-container transition-colors">
            Previous
          </button>
          <button className="px-2.5 py-1 text-[10px] font-medium border border-outline-variant/40 rounded text-on-surface-variant hover:bg-surface-container transition-colors">
            Next Page
          </button>
        </div>
      </div>

    </div>
  )
}
