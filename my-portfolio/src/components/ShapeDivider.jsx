function ShapeDivider({ turnLightRef }) {
  const style = {
    position: "fixed",
    height: "clamp(3rem, 25vh, 15rem)",
    width: "100%",
    backgroundColor: "var(--shapeDivider-bg-color)",
    clipPath: "ellipse(70% 70% at 50% 0%)",
    marginTop: "-1rem",
    zIndex: 0,
  };

  return (
    <div style={style} aria-hidden="true" ref={turnLightRef}></div>
  );
}

export default ShapeDivider;
