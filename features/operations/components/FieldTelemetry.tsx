const conditions = [
  {
    name: 'Kinigi Sector',
    detail: 'Last trek: 03h · Visibility',
    tag: 'CLEAR',
    tagColor: 'bg-emerald-500',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsNSPsPO48VWeKptm0f7WkUp0Cmx41FrEfJKnOnQ7A9TqDNe5BSUHcQRqLDm50bbiGxT3AGoalvML--b0WLYglFj4p6haH96-q2pnw_GufBEOPSmcpxPGB770o-mGmv2tKslF8ur0ynW3PeZHPpCTaf-RzpuZa20jSgY6QOuSqks73_oH2U2OIsaRprBDtRy-MftmowIp1G4hB2PZxvp7RjP_uHCIwxFWIPPvR8vJFHCsC82qUST0M7a6S3m-0blFURe0iS3UfnUY',
  },
  {
    name: 'Ibirunga Washing Station',
    detail: 'Harvest: Active · Dry',
    tag: 'OPTIMAL',
    tagColor: 'bg-teal',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzarn5X9zJKMsQChT-WJ1RUJsXnnTZmr7ZhUdT6pwwHBdSxMQNBYu6uTK1Cz_2vf77eE1u35KgwVT2Np7ZURVn7oKVP9HE_6mjqDpsg6YE6jNP8KF4_5VoqE28wMtu_xLZdH5bgRAhhMoBx5M7IYeBsALuIjEwqc6-PKzJJGZqhsZcrK1te8DWtbOTkFyW5EohoCQvVUOXKcX3epOYujctkUWRBUoO0-5bTYKd81ThV3mYW45X4zNB8lZwgKmzFQHzaL2A0M0VRiw',
  },
  {
    name: 'Parc Région Couvercuell',
    detail: 'Wet season alert · Yellow',
    tag: 'CAUTION',
    tagColor: 'bg-amber-400',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdcpREW5gG_oJyw_vlxi5_WEZLM_GBH0Ny_z5RWt-WtAIk_FdlO4mZ5ZPtmM9fAOexDmJXx-afwSosl2Lj7t88JFxw0GX7wwyWdK3qzWJ0HZ4_Ff7u6tePIAyx3qDvoeOiHYZyJujwJhG66ahGRWT-WNCQ3wWjAPt_5gqMcXANgsKV0RZt6OplE6KxrFPOCv9oAV40ZaCFB5bXODXAKdvmhrHqSdDsl98r1gX4-jgeM03N5u9R3_rNdlRPYMSpj-7XbPUInR8eGA4',
  },
]

export default function FieldTelemetry() {
  return (
    <div className="bg-white rounded-xl border border-outline-variant/20 overflow-hidden">
      <div className="px-4 pt-3 pb-2 border-b border-outline-variant/20 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wide">FIELD TELEMETRY · MORNING DISPATCH</p>
          <p className="text-sm font-bold text-navy">Volcanoes National Park Weather &amp; Trail Conditions</p>
        </div>
        <span className="text-[10px] text-on-surface-variant flex items-center gap-1">
          <span className="material-symbols-outlined text-xs text-teal">update</span>
          Updated 10 min ago
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3 p-4">
        {conditions.map((c, i) => (
          <div key={i} className="relative rounded-xl overflow-hidden h-28 group">
            <img
              src={c.image}
              alt={c.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 px-2 pb-2">
              <p className="text-white text-[11px] font-bold leading-tight">{c.name}</p>
              <p className="text-white/70 text-[9px] mt-0.5">{c.detail}</p>
            </div>
            <div className="absolute top-2 right-2">
              <span className={`text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full ${c.tagColor}`}>{c.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
