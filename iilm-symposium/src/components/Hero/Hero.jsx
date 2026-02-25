import React, { useEffect, useRef, useCallback } from "react";
import styles from "./Hero.module.css";
import collab1 from "../../assets/collab1.png";
import collab2 from "../../assets/collab2.jpg";
import collab3 from "../../assets/collab3.png";

// Symposium-themed wave colors (navy blues + accent red tones)
const WAVE_COLORS = ["#c41e3a", "#1a3a6b", "#0d4f8b", "#8b1a30", "#163860"];

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return { r: 255, g: 255, b: 255 };
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
}

const Hero = () => {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const wavesRef = useRef([]);
  const animFrameRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  const SPEED = 0.8;
  const INTENSITY = 0.55;

  const initWaves = useCallback((height) => {
    const waves = [];
    const waveCount = 5;

    for (let i = 0; i < waveCount; i++) {
      waves.push({
        y: height * (0.3 + (i / waveCount) * 0.5),
        amplitude: height * (0.15 + Math.random() * 0.15),
        frequency: 0.002 + Math.random() * 0.002,
        speed: (0.2 + Math.random() * 0.3) * (i % 2 === 0 ? 1 : -1),
        phase: Math.random() * Math.PI * 2,
        color: WAVE_COLORS[i % WAVE_COLORS.length],
        opacity: 0.15 + Math.random() * 0.1,
      });
    }
    wavesRef.current = waves;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = heroRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width;
      canvas.height = height;
      initWaves(height);
    };
    updateSize();

    const ro = new ResizeObserver(updateSize);
    ro.observe(container);

    const draw = () => {
      const time = (Date.now() - startTimeRef.current) * 0.001 * SPEED;

      // Dark gradient background matching symposium theme
      const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
      bgGradient.addColorStop(0, "#040c1e");
      bgGradient.addColorStop(0.3, "#0b1e3c");
      bgGradient.addColorStop(0.6, "#0a1a35");
      bgGradient.addColorStop(1, "#040c1e");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Ambient glow spots
      ctx.globalCompositeOperation = "lighter";

      const glowSpots = [
        {
          x: width * 0.2,
          y: height * 0.3,
          radius: Math.min(width, height) * 0.4,
          color: WAVE_COLORS[0],
        },
        {
          x: width * 0.8,
          y: height * 0.6,
          radius: Math.min(width, height) * 0.35,
          color: WAVE_COLORS[1],
        },
        {
          x: width * 0.5,
          y: height * 0.8,
          radius: Math.min(width, height) * 0.3,
          color: WAVE_COLORS[2],
        },
      ];

      for (const spot of glowSpots) {
        const rgb = hexToRgb(spot.color);
        const gradient = ctx.createRadialGradient(
          spot.x + Math.sin(time * 0.3) * 50,
          spot.y + Math.cos(time * 0.2) * 30,
          0,
          spot.x + Math.sin(time * 0.3) * 50,
          spot.y + Math.cos(time * 0.2) * 30,
          spot.radius
        );
        gradient.addColorStop(
          0,
          `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.08 * INTENSITY})`
        );
        gradient.addColorStop(
          0.5,
          `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.03 * INTENSITY})`
        );
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Draw flowing waves
      for (const wave of wavesRef.current) {
        const rgb = hexToRgb(wave.color);

        ctx.beginPath();

        for (let x = 0; x <= width; x += 5) {
          const y =
            wave.y +
            Math.sin(x * wave.frequency + time * wave.speed + wave.phase) *
            wave.amplitude +
            Math.sin(
              x * wave.frequency * 0.5 +
              time * wave.speed * 0.7 +
              wave.phase * 1.3
            ) *
            wave.amplitude *
            0.5;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        const waveGradient = ctx.createLinearGradient(
          0,
          wave.y - wave.amplitude,
          0,
          height
        );
        waveGradient.addColorStop(
          0,
          `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${wave.opacity * INTENSITY})`
        );
        waveGradient.addColorStop(
          0.3,
          `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${wave.opacity * 0.5 * INTENSITY})`
        );
        waveGradient.addColorStop(1, "transparent");

        ctx.fillStyle = waveGradient;
        ctx.fill();
      }

      // Subtle top glow
      ctx.globalCompositeOperation = "source-over";
      const topRgb = hexToRgb(WAVE_COLORS[0]);
      const topGlow = ctx.createLinearGradient(0, 0, 0, height * 0.4);
      topGlow.addColorStop(
        0,
        `rgba(${topRgb.r}, ${topRgb.g}, ${topRgb.b}, ${0.05 * INTENSITY})`
      );
      topGlow.addColorStop(1, "transparent");
      ctx.fillStyle = topGlow;
      ctx.fillRect(0, 0, width, height * 0.4);

      animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      ro.disconnect();
    };
  }, [initWaves]);

  return (
    <section className={styles.hero} id="home" ref={heroRef}>
      {/* Light Waves Canvas Background */}
      <canvas ref={canvasRef} className={styles.wavesCanvas}></canvas>

      {/* Noise texture */}
      <div className={styles.noise}></div>

      {/* Vignette */}
      <div className={styles.vignette}></div>

      {/* === Content === */}
      <div className={styles.heroContent}>
        {/* Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          <span>International Symposium 2026</span>
        </div>

        <p className={styles.organizer}>
          Organized by <strong>IILM University, India</strong>
        </p>

        <h1 className={styles.title}>
          International Symposium on <br />
          <span className={styles.gradientText}>
            Research &amp; Global Innovation
          </span>{" "}
          <span className={styles.yearText}>2026</span>
        </h1>

        <p className={styles.tagline}>
          Advancing Knowledge, Innovation &amp; Sustainable Futures through{" "}
          <br />
          Collaborative Excellence.
        </p>

        {/* Collaborating Universities */}
        <div className={styles.collabSection}>
          <div className={styles.collabLabelRow}>
            <div className={styles.collabLine}></div>
            <span className={styles.collabLabel}>In Collaboration With</span>
            <div className={styles.collabLine}></div>
          </div>
          <div className={styles.collabLogos}>
            <div className={styles.logoCard}>
              <img
                src={collab1}
                alt="Instituto Politécnico de Viana do Castelo"
                className={styles.collabLogo}
              />
            </div>
            <div className={styles.logoCard}>
              <img
                src={collab2}
                alt="Oxford Brookes University"
                className={styles.collabLogo}
              />
            </div>
            <div className={styles.logoCard}>
              <img
                src={collab3}
                alt="Örebro University"
                className={styles.collabLogo}
              />
            </div>
          </div>
        </div>

        {/* Event details */}
        <div className={styles.eventDetails}>
          <div className={styles.detailItem}>
            <span className={styles.icon}>📍</span>
            <span>IILM University, Gurugram</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.icon}>📅</span>
            <span>29th April 2026</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={styles.buttonGroup}>
          <a href="#registration" className={styles.primaryBtn}>
            <span>Register Now</span>
            <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M12 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#papers" className={styles.secondaryBtn}>
            <span>Submit Paper</span>
            <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none">
              <path
                d="M12 19V5M5 12l7-7 7 7"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.bottomFade}></div>
    </section>
  );
};

export default Hero;
