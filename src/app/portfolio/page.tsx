import {
  ProjectCard,
  TopNav,
} from "@components/Portfolio/exports"

export default function Portfolio() {
  return (
    <>
      <TopNav />

      <main className="flex flex-col gap-6 min-h-screen p-4">
        <section className="flex flex-col gap-2 items-center">
          <h2 className="text-xl font-semibold text-gray-300 pl-4">
            Projects
          </h2>

          <div className="flex flex-col gap-3 max-w-[600px]">
            <ProjectCard
              iconFilename="fic.svg"
              iconAlt="FIC Logo"
              title="Fast Immutable Collections"
              description="Immutable Data Structures for Dart (Co-Developed)"
              badgeList={[
                "Dart",
                "Flutter",
                "Data Structures",
              ]}
            />

            <ProjectCard
              iconFilename="edgedb.png"
              iconAlt="EdgeDB Logo"
              title="ABRAGO DB"
              description="An interactive database of Go (board game) players, made with Next.js and EdgeDB."
              badgeList={["EdgeDB", "SQL", "Next.js"]}
            />

            <ProjectCard
              iconFilename="yt_kbd_nav.svg"
              iconAlt="YT Kbd Nav Logo"
              title="YouTube Kbd Nav"
              description="A browser extension for controlling YouTube entirely through the keyboard"
              badgeList={[
                "TypeScript",
                "Browser Extension",
              ]}
            />
          </div>
        </section>
      </main>
    </>
  )
}
