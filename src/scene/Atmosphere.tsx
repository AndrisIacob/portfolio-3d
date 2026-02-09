export default function Atmosphere() {
  return (
    <>
      {/* Low ambient so shadows exist */}
      <ambientLight intensity={0.25} />

      {/* “Moon” visual hint (always visible) */}
      <mesh position={[0, 8, -20]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial color="#cfd8ff" />
      </mesh>

      {/* Cold moonlight */}
      <directionalLight position={[0, 8, -20]} intensity={0.6} color="#b8c7ff" />

      {/* A warm desk-ish fill (very subtle). Remove if you want pure cold. */}
      <pointLight position={[0, 1.5, 2]} intensity={0.15} color="#ffddaa" />
    </>
  );
}