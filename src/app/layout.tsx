import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { WithReactChildren } from "@types"

import "@styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Philippe Fanaro's Three.js Portfolio",
  description: "Philippe Fanaro's Three.js Portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
  children,
}: WithReactChildren) {
  return (
    <html lang="en">
      <body
        style={{ margin: 0 }}
        className={`${inter.className} dark`}
      >
        {children}
      </body>
    </html>
  )
}
