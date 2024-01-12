import { ExtrudedSvg } from "../ExtrudedSvg";

/**
 * This FIC SVG is actually an approximation, I think I have
 * lost the original one...
 */
export function FicLogo() {
  return (
    <ExtrudedSvg
      filename="fic.svg"
      scale={0.01}
      depth={40}
      position={[1, 17, 2]}
    />
  );
}
