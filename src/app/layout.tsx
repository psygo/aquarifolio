import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Philippe Fanaro's Three.js Portfolio",
  description: "Philippe Fanaro's Three.js Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
  );
}
