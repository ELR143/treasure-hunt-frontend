import { Inter } from 'next/font/google'
import './globals.css'
import Header from './_lib/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Treasure Hunt',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
