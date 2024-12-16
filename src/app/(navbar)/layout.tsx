import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function NavbarLayout({ children }: Props) {
  return (
    <main className="h-full">
      <Navbar />
      <section className="w-full">{children}</section>
      <Footer />
    </main>
  )
}
