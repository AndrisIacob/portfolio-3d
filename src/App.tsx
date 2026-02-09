import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 90 }}
      style={{ height: "50vh" }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={31} />

      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial />
      </mesh>

      <OrbitControls />
    </Canvas>
  );
}