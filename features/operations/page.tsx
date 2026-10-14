'use client'

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
    <div className="flex" style={{ height: '100dvh', overflow: 'hidden' }}>

      {/* ── Left sidebar ── */}
      <OperationsSidebar />

      {/* ── Right: header + scrollable body ── */}
      <div className="flex flex-col flex-1 min-w-0" style={{ overflow: 'hidden' }}>

        {/* App header */}
        <header className="shrink-0 bg-white border-b border-outline-variant/20 px-5 h-14 flex items-center justify-between gap-4 z-40">
          <div className="flex items-center gap-3 shrink-0">
            <img src="/ttilogo.jpeg" alt="TTI Tours" className="h-8 w-auto" />
            <span className="hidden sm:inline font-semibold text-navy text-sm">TTI Tours</span>
            <span className="hidden sm:inline text-xs font-bold text-white bg-teal px-2 py-0.5 rounded-full uppercase tracking-wide">
              OPERATIONS
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto">
            <span
              className="flex items-center gap-1.5 text-xs font-semibold text-navy whitespace-nowrap px-2.5 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(14,69,115,0.08)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-navy inline-block" />
              KIGALI HQ
            </span>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 whitespace-nowrap px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
              LIVE TELEMETRY
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-teal bg-teal/10 whitespace-nowrap px-2.5 py-1 rounded-full">
              OCT 2024 CYCLE
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="hidden xl:flex items-center gap-1.5 border border-outline-variant/30 rounded-lg px-3 py-1.5 text-xs">
              <span className="material-symbols-outlined text-sm text-on-surface-variant">calendar_month</span>
              <span className="font-semibold text-navy">This Month (Oct 2024)</span>
              <span className="text-on-surface-variant">· 12 Active</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 border border-outline-variant/30 rounded-lg px-3 py-1.5 text-xs cursor-pointer hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-sm text-on-surface-variant">sync</span>
              <span className="font-semibold text-on-surface-variant">SYNC PERMITS (RDB)</span>
            </div>
            <button className="hidden sm:flex items-center gap-1.5 border border-outline-variant/30 rounded-lg px-3 py-1.5 text-xs font-semibold text-on-surface-variant hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-sm">upload</span>
              EXPORT MANIFEST
            </button>
            <button className="flex items-center gap-1.5 bg-navy text-white rounded-lg px-4 py-1.5 text-xs font-bold hover:bg-navy/90 transition-colors">
              <span className="material-symbols-outlined text-sm">add</span>
              <span className="hidden sm:inline">NEW MANUAL BOOKING</span>
              <span className="sm:hidden">New</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center text-white text-xs font-bold shrink-0">
              TT
            </div>
          </div>
        </header>

        {/* ── Scrollable dashboard body ── */}
        <div className="flex-1 overflow-y-auto bg-surface-container-low">
          <div className="px-6 py-6 space-y-6">

            {/* Page heading */}
            <div>
              <h1 className="font-headline-lg text-headline-lg text-navy">Operations Overview</h1>
              <p className="text-sm text-on-surface-variant mt-1">
                Welcome back, Sarah (Operations Director)&nbsp;·&nbsp;
                <span className="text-teal font-medium">Volcanoes &amp; Western Corridors Active</span>
              </p>
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                label="TOTAL GROSS BOOKINGS"
                value="$142,850"
                icon="payments"
                trend="+6.4% vs last cycle"
                trendUp
                footer={
                  <span>Q4 Revenue Target: <span className="font-bold text-emerald-600">ON TRACK</span></span>
                }
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
                footer={<span>Action Required: 7</span>}
              />
            </div>

            {/* Main two-column area — manifest stretches to match right column height */}
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-6 items-stretch">
              <div className="flex flex-col">
                <ExpeditionsManifest fill />
              </div>
              <div className="flex flex-col gap-5">
                <UrgentActions />
                <LiveExecution />
                <WebLeadPipeline />
              </div>
            </div>

            {/* Logistics */}
            <LogisticsPanel />

            {/* Field telemetry */}
            <FieldTelemetry />

          </div>
        </div>
      </div>
    </div>
  )
}
