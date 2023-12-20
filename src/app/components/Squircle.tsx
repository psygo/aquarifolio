import React, { useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import {
  Stats,
  Environment,
  Bounds,
  useBounds,
} from "@react-three/drei";
import {
  OctahedronGeometry,
  Vector3,
  MathUtils,
  Mesh,
} from "three";
// import { GUI } from 'dat.gui'

/**
 * Source: [SB Code - Squircle](https://editor.sbcode.net/35094a3db3ace7db06731a7c540a7d2db45d0dfa)
 */
export function Squircle() {
  const ref = useRef<Mesh>(null);
  const bounds = useBounds();
  const data = { n: 2 };

  function generateSquircle(n: number) {
    const g = new OctahedronGeometry(1, 16);
    const p = g.attributes.position.array;

    for (let i = 0; i < p.length; i += 3) {
      const v = new Vector3(p[i], p[i + 1], p[i + 2]);
      v.x = Math.tanh(v.x);
      v.y = Math.tanh(v.y);
      v.z = Math.tanh(v.z);
      p[i] = MathUtils.lerp(p[i], v.x, n);
      p[i + 1] = MathUtils.lerp(p[i + 1], v.y, n);
      p[i + 2] = MathUtils.lerp(p[i + 2], v.z, n);
    }
    g.computeBoundingBox();
    return g;
  }

  useEffect(() => {
    // const gui = new GUI()
    // gui.add(data, 'n', -64, 64).onChange((v) => {
    // ref.current.geometry = generateSquircle(v)
    // bounds.refresh(ref.current).fit()
    // })
    //     return () => {
    //     gui.destroy()
    // }
  });

  return (
    <mesh
      ref={ref}
      geometry={generateSquircle(2)}
      position-y={1}
    >
      <meshPhysicalMaterial
        metalness={0}
        roughness={0.36}
        clearcoat={1}
        transmission={1}
        ior={1.53}
        thickness={5}
      />
    </mesh>
  );
}
