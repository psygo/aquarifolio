import { ExtrudedSvg } from "../ExtrudedSvg";

export function GithubLogo() {
  return (
    <ExtrudedSvg
      filename="github.svg"
      scale={0.01}
      depth={20}
      position={[-3, 12, 0]}
    />
  );
}
