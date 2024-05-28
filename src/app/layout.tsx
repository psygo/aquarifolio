import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./base.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Philippe Fanaro's Three.js Portfolio",
  description: "Philippe Fanaro's Three.js Portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        style={{ margin: 0 }}
        className={inter.className}
      >
        {children}
      </body>
    </html>
  )
}
