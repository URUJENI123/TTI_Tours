const vehicles = [
  { id: 'R4D-4Q5', route: 'Kigali Basa → Gorilla Sector', status: 'Active', statusOk: true },
  { id: 'R4D-7PA', route: 'Nyungwe Forrest → Canopy', status: 'Active', statusOk: true },
  { id: 'R5D-144C', route: '→ Kigali Depot · In Maintenance', status: 'In Maintenance', statusOk: false },
]

const lodges = [
  {
    name: 'Singita Kwitonda Lodge',
    location: 'Kingi Volcanoes National Park',
    rooms: '4 Suites',
    status: 'Confirmed',
    statusOk: true,
  },
  {
    name: "One&Only Nyungwe",
    location: 'Uwinka Tea Estate',
    rooms: '2 Forest Villas',
    status: 'Confirmed',
    statusOk: true,
  },
  {
    name: 'Lake Kivu Serena Hotel',
    location: 'Rubavu Waterfront',
    rooms: '6 Rooms',
    status: 'On Hold',
    statusOk: false,
  },
]

export default function LogisticsPanel() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {/* Fleet */}
      <div className="bg-white rounded-xl shadow-sm border border-outline-variant/20 overflow-hidden">
        <div className="px-4 pt-4 pb-3 border-b border-outline-variant/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-label-caps text-label-caps text-on-surface-variant">
                LOGISTICS &amp; TRANSPORT
              </p>
              <h3 className="font-semibold text-navy text-sm mt-0.5">
                Fleet Readiness (Custom 4x4)
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                80% Utilization
              </span>
            </div>
          </div>
        </div>

        <div className="px-4 py-3 space-y-3">
          {/* Progress bar */}
          <div>
            <div className="flex justify-between text-xs text-on-surface-variant mb-1">
              <span>Deployed Safari Land Cruisers</span>
              <span className="font-semibold">8 of 10 Active</span>
            </div>
            <div className="h-2 bg-surface-container rounded-full overflow-hidden">
              <div className="h-full w-4/5 bg-teal rounded-full" />
            </div>
          </div>

          {/* Vehicle list */}
          <div className="space-y-2">
            {vehicles.map((v, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-xs p-2 rounded-lg bg-surface-container-low"
              >
                <span
                  className={`material-symbols-outlined text-base ${
                    v.statusOk ? 'text-emerald-500' : 'text-amber-500'
                  }`}
                >
                  {v.statusOk ? 'local_taxi' : 'build'}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-navy">{v.id}</p>
                  <p className="text-on-surface-variant truncate">{v.route}</p>
                </div>
                <span
                  className={`shrink-0 text-xs font-bold px-2 py-0.5 rounded-full ${
                    v.statusOk
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-amber-50 text-amber-700'
                  }`}
                >
                  {v.statusOk ? 'Gorilla Sector' : 'In Maintenance'}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-1 flex items-center justify-between">
            <span className="text-xs text-on-surface-variant">
              Driver Safety Sign-offs: 3 Pending
            </span>
            <button className="text-xs font-semibold text-teal hover:underline flex items-center gap-1">
              Manage Fleet
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      {/* Partner Lodges */}
      <div className="bg-white rounded-xl shadow-sm border border-outline-variant/20 overflow-hidden">
        <div className="px-4 pt-4 pb-3 border-b border-outline-variant/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-label-caps text-label-caps text-on-surface-variant">
                PARTNER LODGES
              </p>
              <h3 className="font-semibold text-navy text-sm mt-0.5">
                Boutique Room Allotments
              </h3>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-navy">12 Suites</p>
              <p className="text-xs text-on-surface-variant">Stocked</p>
            </div>
          </div>
        </div>

        <div className="px-4 py-3 space-y-2">
          {lodges.map((l, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-2.5 rounded-lg bg-surface-container-low"
            >
              <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-sm text-teal">hotel</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-xs text-navy truncate">{l.name}</p>
                <p className="text-xs text-on-surface-variant truncate">{l.location}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs font-bold text-navy">{l.rooms}</p>
                <span
                  className={`text-xs font-semibold ${
                    l.statusOk ? 'text-emerald-600' : 'text-amber-600'
                  }`}
                >
                  {l.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
