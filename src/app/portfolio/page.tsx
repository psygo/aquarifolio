import Link from "next/link"

import {
  Footer,
  ProjectCardList,
  Timeline,
  TopNav,
  WithReactChildren,
} from "@components/Portfolio/exports"

export default function Portfolio() {
  return (
    <>
      <TopNav />

      <main className="flex flex-col items-center min-h-screen p-4">
        <article className="flex flex-col gap-6 max-w-[600px]">
          <PortfolioSection
            title="Projects"
            href="#projects"
          >
            <ProjectCardList />
          </PortfolioSection>

          <PortfolioSection
            title="Career Timeline"
            href="#career-timeline"
          >
            <Timeline />
          </PortfolioSection>
        </article>
      </main>

      <Footer />
    </>
  )
}

type PortfolioSectionProps = WithReactChildren & {
  title: string
  href: string
}

function PortfolioSection({
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
