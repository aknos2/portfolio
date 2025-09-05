function ShapeDivider({ turnLightRef, className }) {
  const style = {
    position: "fixed",
    height: "clamp(3rem, 25vh, 15rem)",
    width: "100%",
    backgroundColor: "var(--shapeDivider-bg-color)",
    clipPath: "ellipse(70% 70% at 50% 0%)",
    marginTop: "-1rem",
    zIndex: -1,
  };

  return (
    <div style={style} aria-hidden="true" ref={turnLightRef} className={className}></div>
  );
}

export default ShapeDivider;
