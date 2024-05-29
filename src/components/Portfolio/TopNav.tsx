import Link from "next/link"

export function TopNav() {
  return (
    <nav className="bg-gray-800 px-4 py-3">
      <Link href="/">
        <h1 className="text-xl font-semibold">
          Philippe Fanaro&apos;s Portfolio
        </h1>
      </Link>
    </nav>
  )
}
