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
      <h4
        style={{
          position: "absolute",
          bottom: 12,
          left: 10,
          margin: 0,
        }}
      >
        Philippe Fanaro | Full Stack Dev
      </h4>
      <hr
        style={{
          position: "absolute",
          bottom: 8,
          left: 10,
          pointerEvents: "auto",
          margin: 0,
          width: "242.5px",
          border: "1px solid black",
        }}
      />
      <a
        style={{
          position: "absolute",
          bottom: 12,
          right: 36.5,
          pointerEvents: "auto",
        }}
        href="https://github.com/psygo"
      >
        <Image
          src="github.svg"
          width={16}
          height={16}
          alt="@psygo Github"
        />
      </a>
      <a
        style={{
          position: "absolute",
          bottom: 12,
          right: 60,
          pointerEvents: "auto",
        }}
        href="https://www.linkedin.com/in/philippe-fanaro/?locale=en_US"
      >
        <Image
          src="linkedin.svg"
          width={16}
          height={16}
          alt="Philippe Fanaro on LinkedIn"
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
