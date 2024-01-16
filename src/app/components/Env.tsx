import {
  CameraControls,
  Environment,
  Lightformer,
  RandomizedLight,
} from "@react-three/drei"

export function Env() {
  return (
    <group>
      <Environment resolution={1024}>
        <color attach="background" args={["cyan"]} />

        <RandomizedLight
          position={[0, -5, 0]}
          amount={8}
          radius={15}
          ambient={0.5}
          intensity={1}
          // position={[-5, 10, -5]}
          size={20}
        />

        <group rotation={[-Math.PI / 3, 0, 0]}>
          <Lightformer
            intensity={4}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={[10, 10, 1]}
          />
          {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
            <Lightformer
              key={i}
              form="circle"
              intensity={4}
              rotation={[Math.PI / 2, 0, 0]}
              position={[x, 4, i * 4]}
              scale={[4, 1, 1]}
            />
          ))}
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={[50, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={[50, 2, 1]}
          />
        </group>
      </Environment>

      <CameraControls
        truckSpeed={0}
        dollySpeed={0}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
        maxZoom={1.75}
        minZoom={1}
      />
    </group>
  )
}
