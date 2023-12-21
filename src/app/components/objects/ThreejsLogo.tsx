import { ExtrudedSvg } from "./ExtrudedSvg";

export function ThreejsLogo() {
  return (
    <ExtrudedSvg
      filename="three.js.svg"
      scale={0.01}
      depth={20}
      position={[-3, 15, 0]}
    />
  );
}
