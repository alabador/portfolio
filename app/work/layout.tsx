import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '../globals.css'
import Navbar from '../components/Navbar'

const montserrat = Montserrat({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Work',
  description: 'Austin Labador - Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}