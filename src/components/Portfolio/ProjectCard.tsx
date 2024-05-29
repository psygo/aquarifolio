import Image from "next/image"

import { Badge } from "@shad"

type ProjectCardProps = {
  iconFilename: string
  iconAlt: string
  title: string
  description: string
  badgeList: string[]
}

export function ProjectCard({
  iconFilename,
  iconAlt,
  title,
  description,
  badgeList,
}: ProjectCardProps) {
  return (
    <div className="flex gap-4 items-center border-[1px] rounded-md p-4">
      <Image
        src={iconFilename}
        height={0}
        width={80}
        alt={iconAlt}
        className="max-w-[80px]"
      />
      <div className="flex flex-col gap-2">
        <h4 className="text-xl font-semibold tracking-tight mb-[-4px]">
          {title}
        </h4>
        <h5 className="text-sm text-gray-400">
          {description}
        </h5>
        <div className="flex gap-1 ml-[-4px]">
          {badgeList.map((b, i) => (
            <Badge variant="secondary" key={i}>
              {b}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
