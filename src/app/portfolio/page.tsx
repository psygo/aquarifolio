import {
  Footer,
  ProjectCardList,
  Timeline,
  TopNav,
  PortfolioSection,
  projectsContributedData,
  projectsData,
  PortfolioIntroCard,
} from "@components/Portfolio/exports"

export default function Portfolio() {
  return (
    <>
      <TopNav />

      <main className="flex flex-col items-center min-h-screen p-4">
        <article className="flex flex-col gap-6 max-w-[700px]">
          <PortfolioIntroCard />

          <PortfolioSection
            title="Projects"
            href="#projects"
          >
            <ProjectCardList projects={projectsData} />
          </PortfolioSection>

          <PortfolioSection
            title="Projects I've Contributed To"
            href="#projects-contributed"
          >
            <ProjectCardList
              projects={projectsContributedData}
            />
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
