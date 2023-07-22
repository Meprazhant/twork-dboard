import './globals.css'
import './satoshi.css'
import { lazy } from 'react'
import Theme from '@/context/theme/ThemeProvider'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'))

export const metadata = {
  title: 'Dashboard | Admin Panel',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Theme>
          <DefaultLayout>{children}</DefaultLayout>
        </Theme>
      </body>
    </html>
  )
}
