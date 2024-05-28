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
        id="name"
        href="/portfolio"
        style={{
          pointerEvents: "auto",
          color: "#21222c",
          textDecoration: "none",
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
          <span>Philippe Fanaro</span> <span>|</span>{" "}
          <span>Full Stack Dev</span>
        </h4>
        <hr
          style={{
            position: "absolute",
            bottom: 8,
            left: 10,
            pointerEvents: "auto",
            margin: 0,
            width: "242.5px",
            border: "1px solid #21222c",
          }}
        />
      </a>
      <div id="logos">
        <a
          style={{
            position: "absolute",
            bottom: 10,
            right: 97,
            pointerEvents: "auto",
          }}
          href="https://github.com/psygo"
        >
          <Image
            src="abstract_me.svg"
            width={20}
            height={20}
            alt="Philippe Fanaro (@psygo) on Github"
          />
        </a>
        <a
          style={{
            position: "absolute",
            bottom: 10,
            right: 70,
            pointerEvents: "auto",
          }}
          href="https://www.linkedin.com/in/philippe-fanaro/?locale=en_US"
        >
          <Image
            src="linkedin.svg"
            width={20}
            height={20}
            alt="Philippe Fanaro on LinkedIn"
          />
        </a>
        <a
          style={{
            position: "absolute",
            bottom: 10,
            right: 41,
            pointerEvents: "auto",
          }}
          href="https://github.com/psygo/three-portfolio"
        >
          <Image
            src="github.svg"
            width={20}
            height={20}
            alt="This portfolio on Github"
          />
        </a>
        <a
          style={{
            position: "absolute",
            bottom: 8,
            right: 10,
            pointerEvents: "auto",
          }}
          href="https://fanaro.io"
        >
          <Image
            src="fanaro.io.svg"
            width={23}
            height={23}
            alt="fanaro.io"
          />
        </a>
      </div>
    </div>
  )
}
