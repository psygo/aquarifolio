import {
  Environment,
  Lightformer,
} from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  N8AO,
} from "@react-three/postprocessing";

export function Lighting() {
  return (
    <>
      <Lighting1 />
      <Lighting2 />
    </>
  );
}

function Lighting1() {
  return (
    <group>
      <ambientLight intensity={0.4} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />

      <EffectComposer disableNormalPass multisampling={8}>
        <N8AO
          distanceFalloff={1}
          aoRadius={1}
          intensity={4}
        />
        <Bloom
          mipmapBlur
          luminanceThreshold={1}
          radius={0.7}
        />
      </EffectComposer>

      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={4}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={8}
          />
        </group>
      </Environment>
    </group>
  );
}

function Lighting2() {
  return (
    <group>
      <directionalLight
        castShadow
        position={[4, 4, 1]}
        intensity={1.5}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
      />
    </group>
  );
}
