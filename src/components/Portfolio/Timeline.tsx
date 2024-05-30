import { ReactNode } from "react"

import { cn } from "@styles"

import { Badge } from "@shad"

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

type TimelineYearProps = {
  year: string
}

function TimelineYear({ year }: TimelineYearProps) {
  return <time className="font-mono px-1">{year}</time>
}

export type WithReactChildren = {
  children: ReactNode
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
          "mb-10 mt-[6px]",
          `timeline-${start ? "start" : "end"}`,
          `md:text-${start ? "end" : "start"}`
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
          <div className="px-1">{children}</div>
        </div>
      </div>
      <hr className="bg-orange-500" />
    </li>
  )
}

export function Timeline() {
  return (
    <div className="border-[1px] ronded-md p-4">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <TimelineItem year="2024">
          <div className="text-xl font-bold">
            Full Stack Deveveloper
          </div>
          <div className="text-normal font-bold text-gray-400">
            Feb 2023 - Jun 2023
          </div>
          <div className="text-lg font-semibold text-gray-300">
            Vertical Insure
          </div>
          <ul>
            <li>Frontend: React, Lit Framework, JS | TS</li>
            <li>
              Backend: Java, Micronaut, NodeJS, Express
            </li>
            <li>
              DevOps: AWS, Render, DataDog, Retool, etc.
            </li>
          </ul>
        </TimelineItem>

        <TimelineItem start={false} year={"2023"}>
          <div className="text-xl font-bold">
            Go (Board Game) Teacher
          </div>
          <div className="text-normal font-bold text-gray-400">
            Jun 2022 - Sep 2023
          </div>
          <div className="text-lg font-semibold text-gray-300">
            Self-Employed
          </div>
          <div>
            Private lessons, YouTube videos, and an online
            league, among other activities.
          </div>
        </TimelineItem>

        <TimelineItem year={"2022"}>
          <div className="text-xl font-bold">
            Open Source Deveveloper
          </div>
          <div className="text-normal font-bold text-gray-400">
            Sep 2020 - Jan 2021
          </div>
          <div className="text-lg font-semibold text-gray-300">
            Pid
          </div>
          <div>
            Helped develop an open source data structure
            package for Dart/Flutter:{" "}
            <a
              className="underline"
              href="https://github.com/marcglasberg/fast_immutable_collections"
            >
              Fast Immutable Collections (FIC)
            </a>
          </div>
        </TimelineItem>

        <TimelineItem start={false} year="2020">
          <div className="text-xl font-bold">
            Data Scientist
          </div>
          <div className="text-normal font-bold text-gray-400">
            Feb 2019 - Oct 2019
          </div>
          <div className="text-lg font-semibold text-gray-300">
            Zanthus
          </div>
          <div>
            Data Scientist Full Stack:
            <ul>
              <li>Data Extraction (SQL)</li>
              <li>Preprocessing</li>
              <li>Modeling</li>
              <li>Data API (Django)</li>
              <li>Customer Lifetime Value (CLV)</li>
            </ul>
          </div>
        </TimelineItem>

        <TimelineItem
          year="2018"
          activity={TimelineActivity.Education}
        >
          <div className="text-xl font-bold">
            Masters of Baduk Studies (Incomplete)
          </div>
          <div className="text-normal font-bold text-gray-400">
            Aug 2017 - Dec 2017
          </div>
          <div className="text-lg font-semibold text-gray-300">
            Myongji University (South Korea)
          </div>
          <div>
            Lived for a semester in South Korea to study
            Baduk or Go (board game).
          </div>
        </TimelineItem>

        <TimelineItem start={false} year="2017">
          <div className="text-xl font-bold">
            Startup Intern
          </div>
          <div className="text-normal font-bold text-gray-400">
            Aug 2016 - Dec 2016
          </div>
          <div className="text-lg font-semibold text-gray-300">
            Vital Care App
          </div>
          <div>
            Marketing, SEO and UI/UX improvements to the
            Vital Care App.
          </div>
        </TimelineItem>

        <TimelineItem
          year="2016"
          activity={TimelineActivity.Education}
        >
          <div className="text-xl font-bold">
            International Engineering Exchange
          </div>
          <div className="text-normal font-bold text-gray-400">
            Aug 2015 - Aug 2016
          </div>
          <div className="text-lg font-semibold text-gray-300">
            Université Libre de Bruxelles (ULB)
          </div>
          <div>
            One year of exchange in Brussels, Belgium,
            through a government scholarship.
          </div>
        </TimelineItem>

        <TimelineItem
          start={false}
          year="2012"
          activity={TimelineActivity.Education}
        >
          <div className="text-xl font-bold">
            Electrical Engineering Bachelors
          </div>
          <div className="text-normal font-bold text-gray-400">
            Jan 2011 - Dec 2016
          </div>
          <div className="text-lg font-semibold text-gray-300">
            Universidade de São Paulo (USP)
          </div>
          <div>
            With s strong emphasis on telecommunications.
          </div>
        </TimelineItem>
      </ul>
    </div>
  )
}
