import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StarCanvas from '@/components/main/StarBackGround'
import NavBar from '@/components/main/NavBar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'This is my portfolio made with NextJS 14',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarCanvas/>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
