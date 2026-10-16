'use client'

import Link from 'next/link'
import OperationsSidebar from './components/OperationsSidebar'
import StatCard from './components/StatCard'
import ExpeditionsManifest from './components/ExpeditionsManifest'
import UrgentActions from './components/UrgentActions'
import LiveExecution from './components/LiveExecution'
import LogisticsPanel from './components/LogisticsPanel'
import WebLeadPipeline from './components/WebLeadPipeline'
import FieldTelemetry from './components/FieldTelemetry'

export default function OperationsDashboard() {
  return (
    <div className="flex bg-white" style={{ height: '100dvh', overflow: 'hidden' }}>

      {/* ── Sidebar ── */}
      <OperationsSidebar />

      {/* ── Main column ── */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden bg-white">

        {/* ══ Global header ══ */}
        <header className="shrink-0 bg-white border-b border-outline-variant/20 px-4 h-9 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <img src="/ttilogo.jpeg" alt="TTI Tours" className="h-5 w-auto" />
            <span className="font-bold text-navy text-xs">TTI Tours</span>
            <span className="text-[9px] font-bold text-white bg-teal px-1.5 py-0.5 rounded-sm uppercase tracking-wider">OPERATIONS</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-semibold text-emerald-700">KIGALI HQ LIVE</span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/" className="text-[10px] font-medium text-on-surface-variant hover:text-navy">Public Site</Link>
            <div className="w-6 h-6 rounded-full bg-navy flex items-center justify-center text-white text-[9px] font-bold">TT</div>
          </div>
        </header>

        {/* ── Scrollable body ── */}
        <div className="flex-1 overflow-y-auto bg-white">

          {/* ══ Page top strip — pills + title + actions ══ */}
          <div className="px-4 pt-3 pb-3 border-b border-outline-variant/15">

            {/* Pills row + right-side calendar / sync */}
            <div className="flex items-center justify-between gap-4 mb-2 flex-wrap">
              <div className="flex items-center gap-1.5">
                <span
                  className="flex items-center gap-1 text-[10px] font-bold text-navy px-1.5 py-0.5 rounded-full"
                  style={{ backgroundColor: 'rgba(14,69,115,0.08)' }}
                >
                  <span className="w-1 h-1 rounded-full bg-navy" />KIGALI HQ
                </span>
                <span className="text-[10px] text-on-surface-variant">·</span>
                <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />LIVE TELEMETRY
                </span>
                <span className="text-[10px] text-on-surface-variant">·</span>
                <span className="text-[10px] font-bold text-on-surface-variant">OCT 2024 CYCLE</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-1 text-[10px] text-on-surface-variant border border-outline-variant/30 rounded px-2 py-1">
                  <span className="material-symbols-outlined text-xs">calendar_month</span>
                  <span className="font-medium">This Month (Oct 2024)</span>
                  <span>· 12 Active Expeditions</span>
                </div>
                <button className="flex items-center gap-1 text-[10px] font-semibold text-on-surface-variant border border-outline-variant/30 rounded px-2 py-1 hover:bg-surface-container-low">
                  <span className="material-symbols-outlined text-xs">sync</span>SYNC PERMITS (RDB)
                </button>
              </div>
            </div>

            {/* Title + actions row */}
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h1 className="text-2xl font-bold text-navy leading-tight">Operations Overview</h1>
                <p className="text-[11px] text-on-surface-variant mt-0.5">
                  Welcome back, Sarah (Operations Director)&nbsp;·&nbsp;
                  <span className="text-teal font-semibold">Volcanoes &amp; Western Corridors Active</span>
                </p>
              </div>
              <div className="flex items-center gap-1.5 pt-0.5">
                <button className="flex items-center gap-1 text-[10px] font-semibold text-on-surface-variant border border-outline-variant/30 rounded px-2 py-1 hover:bg-surface-container-low">
                  <span className="material-symbols-outlined text-xs">upload</span>EXPORT MANIFEST
                </button>
                <button className="flex items-center gap-1 text-[10px] font-bold text-white bg-navy rounded px-2.5 py-1 hover:bg-navy/90">
                  <span className="material-symbols-outlined text-xs">add</span>NEW MANUAL BOOKING
                </button>
              </div>
            </div>

          </div>

          {/* ══ Dashboard content ══ */}
          <div className="px-4 py-3 space-y-3">

            {/* KPI stat cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <StatCard
                label="TOTAL GROSS BOOKINGS"
                value="$142,850"
                icon="payments"
                trend="+6.4% vs last cycle"
                trendUp
                footer={<span>Q4 Revenue Target: <span className="font-bold text-emerald-600">ON TRACK</span></span>}
              />
              <StatCard
                label="ACTIVE EXPEDITIONS"
                value="28 Groups"
                subValue="14 Gorilla · 8 Nyungwe · 6 Agro"
                icon="hiking"
                footer={<span>Guest Footprint: <span className="font-bold">84 Pax In Country</span></span>}
              />
              <StatCard
                label="RDB GORILLA PERMITS"
                value="38"
                subValue="/ 40 Daily Cap"
                icon="verified_user"
                badge={{ label: '2 REMAINING', color: 'red' }}
                footer={<span>Kwita Izina Fees: <span className="font-bold text-red-600">2 REMAINING</span></span>}
              />
              <StatCard
                label="PIPELINE & APPROVALS"
                value="19 Inquiries"
                icon="pending_actions"
                trend="Avg response: 24 mins"
                trendUp
                badge={{ label: '7 FOR SIGN-OFF', color: 'yellow' }}
                footer={<span>Action Required: <span className="font-bold">7</span></span>}
              />
            </div>

            {/* Two-column: manifest + logistics + telemetry (left) | right panel stack */}
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_252px] gap-3 items-start">
              <div className="flex flex-col gap-3">
                <ExpeditionsManifest />
                <LogisticsPanel />
                <FieldTelemetry />
              </div>
              <div className="flex flex-col gap-3">
                <UrgentActions />
                <LiveExecution />
                <WebLeadPipeline />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
