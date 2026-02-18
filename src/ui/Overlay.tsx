export default function Overlay({
  selectedLabel,
  onBack,
}: {
  selectedLabel: string | null;
  onBack: () => void;
}) {
  return (
    <div
      style={{
        position: "absolute",
        top: 16,
        left: 16,
        padding: 12,
        background: "rgba(128, 98, 228, 0.13)",
        color: "white",
        borderRadius: 10,
        maxWidth: 320,
      }}
    >
      <div style={{ fontWeight: 700 }}>3D Portfolio</div>
      <div style={{ opacity: 0.9, marginTop: 8 }}>
        {selectedLabel ? `Focused: ${selectedLabel}` : "Click the object to focus"}
      </div>

      {selectedLabel && (
        <button
          onClick={onBack}
          style={{ marginTop: 10, padding: "6px 10px", cursor: "pointer" }}
        >
          Back
        </button>
      )}
    </div>
  );
}