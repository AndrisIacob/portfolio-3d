import { useMemo, useState } from "react";
import * as THREE from "three";
import SceneRoot from "./scene/SceneRoot";
import Overlay from "./ui/Overlay";

export type FocusTarget = {
  id: string;
  label: string;
  camPos: THREE.Vector3;
  lookAt: THREE.Vector3;
};

export default function App() {
  const cubeFocus = useMemo<FocusTarget>(
    () => ({
      id: "cube",
      label: "Book (placeholder)",
      camPos: new THREE.Vector3(0, 0.6, 2.2),
      lookAt: new THREE.Vector3(0, 0, 0),
    }),
    []
  );

  const [selected, setSelected] = useState<FocusTarget | null>(null);

  const handleToggleFocus = () => {
    setSelected(selected === null ? cubeFocus : null);
  };

  return (
    <div style={{ height: "100%" }}>
      <SceneRoot selected={selected} onSelect={handleToggleFocus} />
      <Overlay
        selectedLabel={selected?.label ?? null}
        onBack={() => setSelected(null)}
      />
    </div>
  );
}