import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kago Phuthego - Portfolio',
  description: 'Junior Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className={`${inter.className} bg-darkBg text-lightText`}>{children}</body>
    </html>
  )
}