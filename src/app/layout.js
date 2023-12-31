import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Next QTube App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body className={inter.className}>
        <div>
          <Navbar></Navbar>
        </div>
        {children}
      </body>
    </html>
  )
}
