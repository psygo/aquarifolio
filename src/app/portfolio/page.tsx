import Link from "next/link"

import {
  Footer,
  ProjectCardList,
  Timeline,
  TopNav,
} from "@components/Portfolio/exports"

export default function Portfolio() {
  return (
    <>
      <TopNav />

      <main className="flex flex-col items-center min-h-screen p-4">
        <article className="flex flex-col gap-6 max-w-[600px]">
          <section className="flex flex-col gap-2 items-center">
            <Link href="#projects">
              <h2 className="text-xl font-semibold text-gray-300 pl-4">
                Projects
              </h2>
            </Link>

            <ProjectCardList />
          </section>

          <section className="flex flex-col gap-2 items-center">
            <Link href="#career-timeline">
              <h2 className="text-xl font-semibold text-gray-300 pl-4">
                Career Timeline
              </h2>
            </Link>

            <Timeline />
          </section>
        </article>
      </main>

      <Footer />
    </>
  )
}
