import { ReactNode } from "react"

import { cn } from "@styles"

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
  return <time className="font-mono">{year}</time>
}

export type WithReactChildren = {
  children: ReactNode
}

type TimelineItemProps = WithReactChildren & {
  start?: boolean
  year: string
}

function TimelineItem({
  start = true,
  year,
  children,
}: TimelineItemProps) {
  return (
    <li>
      <hr className="bg-orange-500" />
      <TimelineMiddle />
      <div
        className={cn(
          `timeline-${start ? "start" : "end"}`,
          `md:text-${start ? "end" : "start"}`,
          "mb-10 mt-[6px]"
        )}
      >
        <TimelineYear year={year} />
        {children}
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
      </ul>
    </div>
  )
}
