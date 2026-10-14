// Operations shell — no public Navbar/Footer, fills the full viewport
export default function OpsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'contents' }}>
      {children}
    </div>
  )
}
