import Link from "next/link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

export function TopNav() {
  return (
    <nav className="flex justify-between items-center gap-4 bg-gray-800 px-4 py-3">
      <Link href="/">
        <h1 className="text-xl font-semibold">
          Philippe Fanaro&apos;s Portfolio
        </h1>
      </Link>

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
    </nav>
  )
}
