import Image from "next/image"

export function Overlay() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        pointerEvents: "none",
        width: "100vw",
        height: "100vh",
      }}
    >
      <a
        style={{
          position: "absolute",
          bottom: 12,
          right: 40,
          pointerEvents: "auto",
        }}
        href="https://www.linkedin.com/in/philippe-fanaro/?locale=en_US"
      >
        <Image
          src="linkedin.svg"
          width={16}
          height={16}
          alt="fanaro.io logo"
        />
      </a>
      <a
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
          pointerEvents: "auto",
        }}
        href="https://fanaro.io"
      >
        <Image
          src="fanaro.io.svg"
          width={20}
          height={20}
          alt="fanaro.io logo"
        />
      </a>
    </div>
  )
}
