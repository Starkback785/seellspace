import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SellSpace - Digital Marketplace Platform',
  description: 'Sell digital products with 0% fees. Create your customizable online store in minutes.',
  keywords: ['digital marketplace', 'sell digital products', 'online store', '0% fees'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}