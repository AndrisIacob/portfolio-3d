import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { FocusTarget } from "../App";
import Atmosphere from "./Atmosphere";
import CameraRig from "./CameraRig";
import ClickCube from "./interactables/ClickCube";

export default function SceneRoot({
  selected,
  onSelect,
}: {
  selected: FocusTarget | null;
  onSelect: () => void;
}) {
  const isFocused = selected !== null;

  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 50 }}
      style={{ height: "100%" }}
    >
      <fog attach="fog" args={["#0a0a10", 2.5, 10]} />
      {/* Background clear color */}
      <color attach="background" args={["#050508"]} />

      <Atmosphere />

      <ClickCube selected={isFocused} onToggle={onSelect} />

      <CameraRig target={selected} />

      {/* Controls are useful while building, but should not fight focus */}
      <OrbitControls enableRotate={!isFocused} enablePan={!isFocused} enableDamping />
    </Canvas>
  );
}