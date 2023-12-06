import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import NavBar from './ui/navBar'
import Footer from './ui/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RePet',
  description: 'Where Love Means no Surprises',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-50`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
