import Image from "next/image"

import { Star } from "lucide-react"

import { Badge } from "@shad"

export type ProjectCardProps = {
  href: string
  iconFilename: string
  iconAlt: string
  title: string
  stars?: number
  description: string
  badgeList: string[]
}

export function ProjectCard({
  href,
  iconFilename,
  iconAlt,
  title,
  stars,
  description,
  badgeList,
}: ProjectCardProps) {
  function formatStarNumber(stars: number) {
    if (stars >= 1_000) {
      const clamped = stars / 1_000
      return `${clamped.toFixed(1)}k`
    }

    return stars.toString()
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-4 items-center border-[1px] rounded-md p-4 transition ease-in-out delay-50 hover:bg-gray-900"
    >
      <Image
        src={iconFilename}
        height={0}
        width={80}
        alt={iconAlt}
        className="max-w-[80px]"
      />
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-2">
          <h4 className="text-xl font-semibold tracking-tight mb-[-4px]">
            {title}
          </h4>
          {stars && (
            <div className="flex gap-1 mt-[4px]">
              <Star className="h-[18px] w-[18px] fill-yellow-500 stroke-none" />
              <p className="text-[0.95rem] text-gray-400 mt-[-1px]">
                {formatStarNumber(stars)}
              </p>
            </div>
          )}
        </div>
        <h5 className="text-sm text-gray-400">
          {description}
        </h5>
        <div className="flex flex-wrap gap-1 ml-[-4px]">
          {badgeList.map((b, i) => (
            <Badge variant="secondary" key={i}>
              {b}
            </Badge>
          ))}
        </div>
      </div>
    </a>
  )
}
