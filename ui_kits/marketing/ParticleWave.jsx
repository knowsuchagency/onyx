// ParticleWave.jsx — bottom-of-hero generative wave. Lifted from preview/26-wave-bg.html,
// tuned for a wide, shallow band that fills the hero's negative space.
function ParticleWave({ density = 'standard' }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    let raf = 0;
    let t = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = c.getBoundingClientRect();
      c.width = Math.max(1, Math.floor(r.width * dpr));
      c.height = Math.max(1, Math.floor(r.height * dpr));
      c.__dpr = dpr;
    };
    resize();
    window.addEventListener('resize', resize);

    const cols = density === 'dense' ? 70 : 56;
    const rows = density === 'dense' ? 18 : 14;

    const draw = () => {
      const dpr = c.__dpr || 1;
      const w = c.width, h = c.height;
      ctx.clearRect(0, 0, w, h);

      // perspective-ish: rows further "back" sit higher and dimmer
      for (let j = 0; j < rows; j++) {
        const depth = j / rows;                          // 0 → back, 1 → front
        const rowY = h * (0.18 + depth * 0.78);          // sweep from 18% to 96% of height
        for (let i = 0; i < cols; i++) {
          const px = (i + (j % 2) * 0.5) / cols;         // half-step offset per row
          const x = px * w;
          const wave =
            Math.sin(i * 0.22 + t + j * 0.35) * 10 * dpr +
            Math.sin(i * 0.07 - t * 0.6 + j * 0.18) * 6 * dpr;
          const y = rowY + wave;

          // soft horizontal vignette so the wave fades toward edges
          const edge = Math.min(px, 1 - px) * 2;         // 0 at edges, 1 in middle
          const edgeFade = Math.min(1, edge * 1.4);

          const alpha = (0.06 + depth * 0.55) * edgeFade;
          const r = (0.9 + depth * 1.1) * dpr;

          ctx.fillStyle = `rgba(123,127,255,${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      t += 0.012;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [density]);

  return <canvas ref={ref} className="particle-wave" aria-hidden="true" />;
}

window.ParticleWave = ParticleWave;
