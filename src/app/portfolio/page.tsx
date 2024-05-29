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
              href="https://github.com/marcglasberg/fast_immutable_collections"
              iconFilename="fic.svg"
              iconAlt="FIC Logo"
              title="Fast Immutable Collections"
              stars={200}
              description="Immutable Data Structures for Dart (Co-Developed)"
              badgeList={[
                "Dart",
                "Flutter",
                "Data Structures",
              ]}
            />
            <ProjectCard
              href="https://github.com/FanaroEngineering/traducao_como_jogar_go"
              iconFilename="como_jogar_go_capa.png"
              iconAlt="Como Jogar Go Cover"
              title="Como Jogar Go"
              stars={15}
              description="A translation of an introductory book to the game of Go, made entirely with LaTeX."
              badgeList={["Go (Board Game)", "LaTeX"]}
            />
            <ProjectCard
              href="https://fanaro.io"
              iconFilename="fanaro.io.svg"
              iconAlt="Fanaro.io Logo"
              title="fanaro.io"
              stars={6}
              description="My personal blog, made entirely with vanilla HTML/CSS/JS, with more than 100 articles on Go (board game), and various other topics, including programming."
              badgeList={[
                "HTML",
                "CSS",
                "CSS",
                "Go (Board Game)",
              ]}
            />
            <ProjectCard
              href="https://github.com/psygo/three-portfolio"
              iconFilename="Portfolio_Screenshot.png"
              iconAlt="Aquarifolio"
              title="Aquarifolio"
              description="A 3D aquarium built with Three.js and React (React Three Fiber)."
              badgeList={["Three.js", "React", "3D"]}
            />
            <ProjectCard
              href="https://github.com/psygo/abragodb"
              iconFilename="edgedb.png"
              iconAlt="EdgeDB Logo"
              title="ABRAGO DB"
              description="An interactive database of Go (board game) players, made with Next.js and EdgeDB."
              badgeList={["EdgeDB", "SQL", "Next.js"]}
            />
            <ProjectCard
              href="https://github.com/FanaroEngineering/youtube_kbd_nav"
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
