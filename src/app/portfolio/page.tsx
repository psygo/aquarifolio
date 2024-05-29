import Link from "next/link"

import {
  ProjectCardList,
  Timeline,
  TopNav,
} from "@components/Portfolio/exports"

export default function Portfolio() {
  return (
    <>
      <TopNav />

      <main className="flex flex-col gap-6 min-h-screen p-4">
        <section className="flex flex-col gap-2 items-center">
          <Link href="#projects">
            <h2 className="text-xl font-semibold text-gray-300 pl-4">
              Projects
            </h2>
          </Link>

          <ProjectCardList />
        </section>

        <section className="flex flex-col gap-2 items-center">
          <Link href="timeline">
            <h2 className="text-xl font-semibold text-gray-300 pl-4">
              Career Timeline
            </h2>
          </Link>

          <Timeline />
        </section>
      </main>
    </>
  )
}
