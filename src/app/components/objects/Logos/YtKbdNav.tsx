import { ExtrudedSvg } from "../ExtrudedSvg";

/**
 * This FIC SVG is actually an approximation, I think I have
 * lost the original one...
 */
export function YtKbdNavLogo() {
  return (
    <ExtrudedSvg
      filename="yt_kbd_nav.svg"
      scale={0.01}
      depth={40}
      position={[1, 17, -2]}
    />
  );
}
