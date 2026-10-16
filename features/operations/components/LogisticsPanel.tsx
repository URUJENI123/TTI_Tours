const vehicles = [
  { id: 'R4D-4Q5', route: 'Kigali Base → Gorilla Sector', status: 'Gorilla Sector', ok: true },
  { id: 'R4D-7PA', route: 'Nyungwe Forrest → Canopy', status: 'Foreste Sector', ok: true },
  { id: 'R5D-144C', route: '→ Kigali Depot', status: 'In Maintenance', ok: false },
]

const lodges = [
  { name: 'Singita Kwitonda Lodge', location: 'Kinigi Volcanoes National Park', rooms: '4 Suites', status: 'Confirmed', ok: true },
  { name: "One&Only Nyungwe", location: 'Uwinka Tea Estate', rooms: '2 Forest Villas', status: 'Confirmed', ok: true },
  { name: 'Lake Kivu Serena Hotel', location: 'Rubavu Waterfront', rooms: '6 Rooms', status: 'On Hold', ok: false },
]

export default function LogisticsPanel() {
  return (
    <div className="grid md:grid-cols-2 gap-4">

      {/* Fleet */}
      <div className="bg-white rounded-xl border border-outline-variant/20 overflow-hidden">
        <div className="px-4 pt-3 pb-2 border-b border-outline-variant/20 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wide">LOGISTICS &amp; TRANSPORT</p>
            <p className="text-sm font-bold text-navy">Fleet Readiness (Custom 4x4)</p>
          </div>
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">80% Utilization</span>
        </div>
        <div className="px-4 py-3 space-y-3">
          {/* Progress */}
          <div>
            <div className="flex justify-between text-[10px] text-on-surface-variant mb-1">
              <span>Deployed Safari Land Cruisers</span>
              <span className="font-bold text-navy">8 of 10 Active</span>
            </div>
            <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
              <div className="h-full bg-teal rounded-full" style={{ width: '80%' }} />
            </div>
          </div>
          {/* Vehicles */}
          <div className="space-y-1.5">
            {vehicles.map((v, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px] p-2 rounded-lg bg-surface-container-low">
                <span className={`material-symbols-outlined text-sm ${v.ok ? 'text-emerald-500' : 'text-amber-500'}`}>
                  {v.ok ? 'directions_car' : 'build'}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-navy">{v.id}</p>
                  <p className="text-on-surface-variant truncate">{v.route}</p>
                </div>
                <span className={`shrink-0 font-bold px-1.5 py-0.5 rounded text-[9px] ${v.ok ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                  {v.status}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between pt-1">
            <span className="text-[10px] text-on-surface-variant">Fleet Driver Sign-offs: 3 Pending</span>
            <button className="text-[10px] font-bold text-teal flex items-center gap-0.5 hover:underline">
              Manage Fleet <span className="material-symbols-outlined text-xs">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Partner Lodges */}
      <div className="bg-white rounded-xl border border-outline-variant/20 overflow-hidden">
        <div className="px-4 pt-3 pb-2 border-b border-outline-variant/20 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wide">PARTNER LODGES</p>
            <p className="text-sm font-bold text-navy">Boutique Room Allotments</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-navy">12 Suites</p>
            <p className="text-[10px] text-on-surface-variant">Stocked</p>
          </div>
        </div>
        <div className="px-4 py-3 space-y-2">
          {lodges.map((l, i) => (
            <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-surface-container-low">
              <div className="w-7 h-7 rounded-lg bg-teal/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-sm text-teal">hotel</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold text-navy truncate">{l.name}</p>
                <p className="text-[10px] text-on-surface-variant truncate">{l.location}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-[11px] font-bold text-navy">{l.rooms}</p>
                <p className={`text-[10px] font-semibold ${l.ok ? 'text-emerald-600' : 'text-amber-600'}`}>{l.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
