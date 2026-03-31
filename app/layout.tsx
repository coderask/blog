import './global.css'
import type { Metadata } from 'next'
import { CSideScript } from '@cside.dev/next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'

export const metadata: Metadata = {
  title: {
    default: 'Aarnav Koushik',
    template: '%s | Aarnav Koushik',
  },
  description: 'I Like Cars, Cameras and Computers',
  openGraph: {
    title: 'Aarnav Koushik',
    description: 'I Like Cars, Cameras and Computers',
    siteName: 'Aarnav Koushik',
    locale: 'en_US',
    type: 'website',
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <CSideScript />
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
