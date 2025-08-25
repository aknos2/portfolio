function ShapeDivider() {
  const style = {
    position: "fixed",
    height: "9rem",           // Control the height of the overlap
    width: "100%",
    backgroundColor: "var(--shapeDivider-bg-color)", // Same as header color
    clipPath: "ellipse(70% 70% at 50% 0%)", // Creates a curved bottom edge
    marginTop: "-20px",        // Pull it up to overlap with header
    zIndex: 0,                 // Between header and main
  };

  return (
    <div style={style} aria-hidden="true"></div>
  );
}

export default ShapeDivider;
