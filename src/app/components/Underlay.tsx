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
          fontSize: 25,
          fontWeight: "700",
          lineHeight: "30px",
          color: "#ffb3b3",
          letterSpacing: -2,
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          Ha Huyen Tran
        </div>
        <div style={{ marginBottom: "10px" }}>
          Nguyen Thi Tuyet Hanh
        </div>
        <div style={{ marginBottom: "10px" }}>
          Le Ngoc My
        </div>
        <div style={{ marginBottom: "10px" }}>
          Vo Thi Minh Thuy
        </div>
        <div style={{ marginBottom: "10px" }}>
          Ngo Phuong Thuy
        </div>
        <div style={{ marginBottom: "10px" }}>
          Do Thai Ha
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
            color: "#ff6666",
            margin: 0,
            letterSpacing: 1,
          }}
        >
          happy women&apos;s day
        </p>
      </div>
    </div>
  );
}
