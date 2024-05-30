import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

export function Footer() {
  return (
    <footer className="flex gap-3 justify-center items-center p-3 bg-gray-900">
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
    </footer>
  )
}
