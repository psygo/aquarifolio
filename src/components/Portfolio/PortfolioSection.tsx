import Link from "next/link"

import { WithReactChildren } from "@types"

type PortfolioSectionProps = WithReactChildren & {
  title: string
  href: string
}

export function PortfolioSection({
  title,
  href,
  children,
}: PortfolioSectionProps) {
  return (
    <section className="flex flex-col gap-[6px] items-center">
      <Link href={href}>
        <h2 className="text-xl font-semibold text-gray-300 pl-4">
          {title}
        </h2>
      </Link>

      {children}
    </section>
  )
}
