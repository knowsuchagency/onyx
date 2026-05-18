// ParticleWave.jsx — canvas-based 3D dot wave at the bottom of the board
function ParticleWave() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d');
    let raf;
    function resize() {
      c.width = c.offsetWidth * devicePixelRatio;
      c.height = c.offsetHeight * devicePixelRatio;
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(c);

    let t = 0;
    function draw() {
      ctx.clearRect(0, 0, c.width, c.height);
      const w = c.width, h = c.height;
      const cols = Math.round(w / (10 * devicePixelRatio));
      const rows = 18;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const baseY = h * 0.15 + (j / rows) * h * 0.85;
          const wave = (
            Math.sin((i / 8) + t + j * 0.3) * 6 +
            Math.cos((i / 14) - t * 0.7 + j * 0.1) * 4
          ) * devicePixelRatio;
          const x = (i / cols) * w + 6;
          const y = baseY + wave;
          const alpha = 0.08 + (j / rows) * 0.5;
          ctx.fillStyle = `rgba(123,127,255,${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, 1.3 * devicePixelRatio, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      t += 0.015;
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return <canvas ref={ref} className="wave-canvas" />;
}

window.ParticleWave = ParticleWave;
