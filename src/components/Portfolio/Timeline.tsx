import { WithReactChildren } from "@types"

import { cn } from "@styles"

import { Badge } from "@shad"

type TimelineYearProps = {
  year: string
}

function TimelineYear({ year }: TimelineYearProps) {
  return <time className="font-mono px-1">{year}</time>
}

enum TimelineActivity {
  Work = "Work",
  Education = "Education",
}

type TimelineItemProps = WithReactChildren & {
  start?: boolean
  year: string
  activity?: TimelineActivity
}

function TimelineItem({
  start = true,
  year,
  activity = TimelineActivity.Work,
  children,
}: TimelineItemProps) {
  return (
    <li>
      <hr className="bg-orange-500" />
      <TimelineMiddle />
      <div
        className={cn(
          "pt-[2px] mb-4",
          start ? "timeline-start" : "timeline-end",
          start ? "md:text-end" : "md:text-start"
        )}
      >
        <TimelineYear year={year} />
        <div
          className={cn(
            "flex flex-col gap-1 mt-2",
            start ? "md:text-end" : "md:text-start",
            start ? "md:items-end" : "md:items-start"
          )}
        >
          <Badge
            variant="outline"
            className={cn(
              "w-max text-normal",
              activity === TimelineActivity.Work
                ? "bg-green-700"
                : "bg-blue-700"
            )}
          >
            {activity}
          </Badge>
          <div className="px-[2px]">{children}</div>
        </div>
      </div>
      <hr className="bg-orange-500" />
    </li>
  )
}

type TimelineItemContentProps = WithReactChildren & {
  title: string
  date: string
  institution: string
}

function TimelineItemContent({
  title,
  date,
  institution,
  children,
}: TimelineItemContentProps) {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <div className="text-xl font-bold">{title}</div>
        <div className="text-normal font-bold text-gray-400 pt-[1px]">
          {date}
        </div>
        <div className="text-lg font-semibold text-gray-300">
          {institution}
        </div>
      </div>
      {children}
    </div>
  )
}

export function Timeline() {
  return (
    <div className="border-[1px] ronded-md p-4">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <TimelineItem year="2025">
          <TimelineItemContent
            title="Book Writer"
            date="Sep 2025 - Dec 2025"
            institution="Self-Employed"
          >
            <div>
              Created a book about Go (board game), which
              also includes a whole package for drawing Go
              diagrams with LaTeX.
            </div>
          </TimelineItemContent>
        </TimelineItem>

        <TimelineItem start={false} year="2024">
          <TimelineItemContent
            title="Full Stack Deveveloper"
            date="Feb 2023 - Jun 2023"
            institution="Vertical Insure"
          >
            <ul className="list-disc pl-4">
              <li>Frontend: React, Lit, TypeScript</li>
              <li>
                Backend: Java, Micronaut, NodeJS, Express
              </li>
              <li>DevOps: AWS, Render, DataDog, Retool</li>
            </ul>
          </TimelineItemContent>
        </TimelineItem>

        <TimelineItem year={"2023"}>
          <TimelineItemContent
            title="Go (Board Game) Teacher"
            date="Jun 2022 - Sep 2023"
            institution="Self-Employed"
          >
            <div>
              Private lessons, YouTube videos, and an online
              league, among other activities.
            </div>
          </TimelineItemContent>
        </TimelineItem>

        <TimelineItem start={false} year={"2022"}>
          <TimelineItemContent
            title="Open Source Deveveloper"
            date="Sep 2020 - Jan 2021"
            institution="Pid"
          >
            <div>
              Co-developed an open source data structures
              package for Dart/Flutter:{" "}
              <a
                className="underline"
                href="https://github.com/marcglasberg/fast_immutable_collections"
              >
                Fast Immutable Collections (FIC)
              </a>
            </div>
          </TimelineItemContent>
        </TimelineItem>

        <TimelineItem year="2020">
          <TimelineItemContent
            title="Data Scientist"
            date="Feb 2019 - Oct 2019"
            institution="Zanthus"
          >
            <div>
              Data Scientist Full Stack: Data Extraction
              (SQL); Preprocessing, Modeling; Data API
              (Django); Customer Lifetime Value (CLV).
            </div>
          </TimelineItemContent>
        </TimelineItem>

        <TimelineItem
          start={false}
          year="2018"
          activity={TimelineActivity.Education}
        >
          <TimelineItemContent
            title="Masters of Baduk Studies (Incomplete)"
            date="Aug 2017 - Dec 2017"
            institution="Myongji University"
          >
            <div>
              Lived for a semester in South Korea to study
              Baduk or Go (board game).
            </div>
          </TimelineItemContent>
        </TimelineItem>

        <TimelineItem year="2017">
          <TimelineItemContent
            title="Startup Intern"
            date="Aug 2016 - Dec 2016"
            institution="Vital Care App"
          >
            <div>
              Marketing, SEO and UI/UX improvements to the
              Vital Care App.
            </div>
          </TimelineItemContent>
        </TimelineItem>

        <TimelineItem
          start={false}
          year="2016"
          activity={TimelineActivity.Education}
        >
          <TimelineItemContent
            title="International Engineering Exchange"
            date="Aug 2015 - Aug 2016"
            institution="Université Libre de Bruxelles (ULB)"
          >
            <div>
              One year of exchange in Brussels, Belgium,
              through a government scholarship.
            </div>
          </TimelineItemContent>
        </TimelineItem>

        <TimelineItem
          year="2012"
          activity={TimelineActivity.Education}
        >
          <TimelineItemContent
            title="Electrical Engineering (BSc)"
            date="Jan 2011 - Dec 2016"
            institution="Universidade de São Paulo (USP)"
          >
            <div>
              With s strong emphasis on telecommunications.
            </div>
          </TimelineItemContent>
        </TimelineItem>
      </ul>
    </div>
  )
}

function TimelineMiddle() {
  return (
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  )
}
