export default function ClickCube({
  selected,
  onToggle,
}: {
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <mesh onClick={onToggle} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={selected ? "hotpink" : "white"} />
    </mesh>
  );
}