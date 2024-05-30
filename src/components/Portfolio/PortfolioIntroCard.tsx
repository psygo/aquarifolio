import Image from "next/image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

export function PortfolioIntroCard() {
  return (
    <div className="flex gap-4 items-center border-[1px] rounded-md p-4 transition ease-in-out delay-50 hover:bg-gray-900">
      <Image
        src="profile_pic.png"
        height={115}
        width={115}
        alt="Philippe Fanaro Abstract"
        className="rounded-xl"
      />

      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold">
            Philippe Fanaro
          </h2>
          <h3 className="text-lg text-gray-400 font-semibold">
            Full Stack Developer
          </h3>
        </div>

        <div className="flex gap-2">
          <a
            href="https://github.com/psygo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="h-6 w-6"
              color="gray"
              icon={faGithub}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/philippe-fanaro/?locale=en_US"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="h-6 w-6"
              color="gray"
              icon={faLinkedin}
            />
          </a>
        </div>

        <p className="text-gray-300">
          Hi, my focus is on <strong>Next.js</strong>,{" "}
          <strong>React</strong>, and{" "}
          <strong>TypeScript</strong> right now, but
          whatever the problem I&apos;m always willing to
          learn.{" "}
        </p>
      </div>
    </div>
  )
}
