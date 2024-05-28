import { Stats } from "@react-three/drei";
import { Perf } from "r3f-perf";

export function Performance() {
  return (
    <group>
      <Perf />
      <Stats />
    </group>
  );
}
