import Image from "next/image"
import Link from "next/link"

export function Overlay() {
  return (
    <nav className="absolute bottom-2 w-screen flex flex-wrap gap-1 justify-between px-3">
      <BottomLeft />
      <BottomRight />
    </nav>
  )
}

function BottomLeft() {
  return (
    <Link
      href="/portfolio"
      className="text-black font-bold"
    >
      <h1>Philippe Fanaro | Full Stack Dev</h1>
    </Link>
  )
}

function BottomRight() {
  return (
    <div className="flex gap-2">
      <IconLink
        href="https://github.com/psygo"
        iconSrc="abstract_me.svg"
        size={20}
        alt="Philippe Fanaro (@psygo) on Github"
      />
      <IconLink
        href="https://www.linkedin.com/in/philippe-fanaro/?locale=en_US"
        iconSrc="linkedin.svg"
        size={20}
        alt="Philippe Fanaro on LinkedIn"
      />
      <IconLink
        href="https://github.com/psygo/three-portfolio"
        iconSrc="github.svg"
        size={20}
        alt="This portfolio on Github"
      />
      <IconLink
        href="https://fanaro.io"
        iconSrc="fanaro.io.svg"
        size={23}
        alt="fanaro.io"
      />
    </div>
  )
}

type IconLinkProps = {
  href: string
  iconSrc: string
  size: number
  alt: string
}

function IconLink({
  href,
  iconSrc,
  size,
  alt,
}: IconLinkProps) {
  return (
    <Link href={href}>
      <Image
        src={iconSrc}
        width={size}
        height={size}
        alt={alt}
      />
    </Link>
  )
}
