import Navbar from '@/shared/components/layout/Navbar'
import Footer from '@/shared/components/layout/Footer'

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">{children}</main>
      <Footer />
    </>
  )
}
