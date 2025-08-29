function ShapeDivider({ turnLightRef }) {
  const style = {
    position: "fixed",
    height: "9rem",
    width: "100%",
    backgroundColor: "var(--shapeDivider-bg-color)",
    clipPath: "ellipse(70% 70% at 50% 0%)",
    marginTop: "-20px",
    zIndex: 0,
  };

  return (
    <div style={style} aria-hidden="true" ref={turnLightRef}></div>
  );
}

export default ShapeDivider;
