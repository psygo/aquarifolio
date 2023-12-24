export function Underlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        padding: 30,
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          fontFamily: "'Antonio', sans-serif",
          flex: "1 1 0%",
          height: 30,
          fontSize: 50,
          fontWeight: "700",
          lineHeight: "30px",
          color: "black",
          letterSpacing: -2,
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          Philippe Fanaro
        </div>
      </div>

      <div
        style={{
          fontFamily: "'Antonio', sans-serif",
          height: 100,
          width: "100%",
          fontSize: 25,
          fontWeight: "700",
          color: "#ffb3b3",
          letterSpacing: -2,
        }}
      >
        <p
          style={{
            display: "flex",
            justifyContent: "end",
            fontSize: 50,
            lineHeight: "1em",
            color: "black",
            margin: 0,
            marginRight: "30px",
            letterSpacing: 1,
          }}
        >
          I build with stuff.
        </p>
      </div>
    </div>
  );
}
