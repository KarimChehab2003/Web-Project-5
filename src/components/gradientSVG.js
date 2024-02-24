function GradientSVG() {
  const idCSS = "hello";
  const gradientTransform = `rotate(90)`;
  return (
    <svg style={{ height: 0 }}>
      <defs>
        <linearGradient id={idCSS} gradientTransform={gradientTransform}>
          <stop offset="0" stopColor="#e64980" />
          <stop offset="100%" stopColor="#ff8787" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default GradientSVG;
