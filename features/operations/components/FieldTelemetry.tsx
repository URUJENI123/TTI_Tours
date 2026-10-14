const conditions = [
  {
    name: 'Kinigi Sector',
    detail: 'Last trek: 03h · Visibility',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsNSPsPO48VWeKptm0f7WkUp0Cmx41FrEfJKnOnQ7A9TqDNe5BSUHcQRqLDm50bbiGxT3AGoalvML--b0WLYglFj4p6haH96-q2pnw_GufBEOPSmcpxPGB770o-mGmv2tKslF8ur0ynW3PeZHPpCTaf-RzpuZa20jSgY6QOuSqks73_oH2U2OIsaRprBDtRy-MftmowIp1G4hB2PZxvp7RjP_uHCIwxFWIPPvR8vJFHCsC82qUST0M7a6S3m-0blFURe0iS3UfnUY',
    tag: 'CLEAR',
    tagColor: 'emerald',
  },
  {
    name: 'Ibirunga Washing Station',
    detail: 'Harvest: Active · Dry',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzarn5X9zJKMsQChT-WJ1RUJsXnnTZmr7ZhUdT6pwwHBdSxMQNBYu6uTK1Cz_2vf77eE1u35KgwVT2Np7ZURVn7oKVP9HE_6mjqDpsg6YE6jNP8KF4_5VoqE28wMtu_xLZdH5bgRAhhMoBx5M7IYeBsALuIjEwqc6-PKzJJGZqhsZcrK1te8DWtbOTkFyW5EohoCQvVUOXKcX3epOYujctkUWRBUoO0-5bTYKd81ThV3mYW45X4zNB8lZwgKmzFQHzaL2A0M0VRiw',
    tag: 'OPTIMAL',
    tagColor: 'teal',
  },
  {
    name: 'Parc Région Couvercuell',
    detail: 'Wet season alert · Yellow',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdcpREW5gG_oJyw_vlxi5_WEZLM_GBH0Ny_z5RWt-WtAIk_FdlO4mZ5ZPtmM9fAOexDmJXx-afwSosl2Lj7t88JFxw0GX7wwyWdK3qzWJ0HZ4_Ff7u6tePIAyx3qDvoeOiHYZyJujwJhG66ahGRWT-WNCQ3wWjAPt_5gqMcXANgsKV0RZt6OplE6KxrFPOCv9oAV40ZaCFB5bXODXAKdvmhrHqSdDsl98r1gX4-jgeM03N5u9R3_rNdlRPYMSpj-7XbPUInR8eGA4',
    tag: 'CAUTION',
    tagColor: 'amber',
  },
]

const tagColors: Record<string, string> = {
  emerald: 'bg-emerald-500',
  teal: 'bg-teal',
  amber: 'bg-amber-400',
}

export default function FieldTelemetry() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-outline-variant/20 overflow-hidden">
      <div className="px-4 pt-4 pb-3 border-b border-outline-variant/20 flex items-center justify-between">
        <div>
          <p className="font-label-caps text-label-caps text-on-surface-variant">
            FIELD TELEMETRY · MORNING DISPATCH
          </p>
          <h3 className="font-semibold text-navy text-sm mt-0.5">
            Volcanoes National Park Weather &amp; Trail Conditions
          </h3>
        </div>
        <span className="text-xs text-on-surface-variant flex items-center gap-1">
          <span className="material-symbols-outlined text-sm text-teal">update</span>
          Updated 10 min ago
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 p-4">
        {conditions.map((c, i) => (
          <div key={i} className="relative rounded-xl overflow-hidden h-32 group">
            <img
              src={c.image}
              alt={c.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 px-3 pb-2.5">
              <p className="text-white font-bold text-xs leading-tight">{c.name}</p>
              <p className="text-white/70 text-xs mt-0.5">{c.detail}</p>
            </div>
            <div className="absolute top-2 right-2">
              <span
                className={`text-white text-xs font-bold px-2 py-0.5 rounded-full ${tagColors[c.tagColor]}`}
              >
                {c.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
