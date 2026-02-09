import { useFrame, useThree } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";
import type { FocusTarget } from "../App";

export default function CameraRig({ target }: { target: FocusTarget | null }) {
  const { camera } = useThree();

  const defaultPose = useMemo(
    () => ({
      camPos: new THREE.Vector3(0, 0, 4),
      lookAt: new THREE.Vector3(0, 0, 0),
    }),
    []
  );

  const smoothLook = useMemo(() => new THREE.Vector3(0, 0, 0), []);

  useFrame(() => {
    const t = target ?? defaultPose;

    camera.position.lerp(t.camPos, 0.08);

    smoothLook.lerp(t.lookAt, 0.08);
    camera.lookAt(smoothLook);
  });

  return null;
}