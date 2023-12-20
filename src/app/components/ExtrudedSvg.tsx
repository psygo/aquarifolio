import { useMemo, useState } from "react";

import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/Addons.js";
import { useLoader } from "@react-three/fiber";
import { Html, Text } from "@react-three/drei";

type ExtrudedSvgProps = {
  filename: string;
  scale?: number;
  position?: [number, number, number];
};
export default function ExtrudedSvg({
  filename,
  scale = 1,
  position = [-10, 10, 0],
}: ExtrudedSvgProps) {
  const svgData = useLoader(SVGLoader, filename);
  const shapes = useMemo(() => {
    return svgData.paths.map((p) => p.toShapes(true));
  }, [svgData]);

  const [visibleHtml, setVisibleHtml] = useState(false);

  return (
    // <group>
    //   <Html
    //     position={[
    //       position[0] + 5,
    //       position[1] + 3,
    //       position[2] + 2,
    //     ]}
    //     transform
    //   >
    //     <div
    //       style={{
    //         width: "300px",
    //         height: "max-content",
    //         padding: "10px",
    //         backgroundColor: "blue",
    //       }}
    //     >
    //       <h1>Hello There!</h1>
    //     </div>
    //   </Html>
    //   <mesh
    //     scale={scale}
    //     rotation={[Math.PI, 0, 0]}
    //     position={[
    //       position[0] + 5,
    //       position[1] - 2,
    //       position[2] + 2,
    //     ]}
    //   >
    <>
      {shapes.map((s, i) => (
        <mesh
          onClick={(e) => setVisibleHtml(!visibleHtml)}
          key={i}
          position={[0, 0, 0]}
        >
          <extrudeGeometry
            args={[
              s,
              {
                depth: 5,
                bevelEnabled: false,
                steps: 30,
              },
            ]}
          />
          <meshPhongMaterial
            attach="material"
            color={svgData.paths[i].color}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </>
    //   </mesh>
    // </group>
  );
}
