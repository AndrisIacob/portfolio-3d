export default function Atmosphere() {
  return (
    <>
      <ambientLight intensity={0.25} />
      <mesh position={[0, 8, -20]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#ffffff"/>
      </mesh>
      <directionalLight position={[0, 8, -20]} intensity={0.6} color="#b8c7ff" />
      <pointLight position={[0, 1.5, 2]} intensity={0.15} color="#ffddaa" />
    </>
  );
}