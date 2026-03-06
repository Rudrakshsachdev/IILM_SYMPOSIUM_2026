import React, { useEffect, useRef, useCallback } from "react";
import styles from "./Hero.module.css";
import collab1 from "../../assets/collab1.png";
import collab2 from "../../assets/collab2.jpg";
import collab3 from "../../assets/collab3.png";
import ieeeLogo from "../../assets/ieee-logo.png";

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
        {/* Badges */}
        <div className={styles.badgesWrapper}>
          {/* Main Event Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            <span>International Symposium 2026</span>
          </div>

          {/* IEEE Tech Sponsor Badge */}
          <div className={styles.sponsorBadge}>
            <span className={styles.sponsorText}>Technical Co-Sponsor</span>
            <img src={ieeeLogo} alt="IEEE" className={styles.ieeeLogo} />
          </div>
        </div>

        {/* Joint Organizer */}
        <div className={styles.jointOrganizer}>
          <span className={styles.jointLabel}>Jointly Organized by</span>
          <div className={styles.jointMain}>
            <strong>SCSE, IILM University, Gurugram</strong>
          </div>
          <div className={styles.jointForeign}>
            <span className={styles.jointAnd}>&amp;</span>
            <span className={styles.foreignUni}>Instituto Politécnico de Viana do Castelo</span>
            <span className={styles.foreignUni}>Oxford Brookes University</span>
            <span className={styles.foreignUni}>Örebro University</span>
          </div>
        </div>

        <h1 className={styles.title}>
          <span className={styles.titlePrefix}>
            International Symposium on{" "}
            <span className={styles.highlightFrontiers}>AI Frontiers 2.0 &ndash;</span>
          </span>
          <span className={styles.gradientText}>
            Emerging Research in Advanced Technologies
          </span>
          <span className={styles.titleSubline}>
            Interdisciplinary Computing &amp; Complex Systems
          </span>
          <span className={styles.titleAcronym}>ERATICS 2026</span>
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

        {/* Event Ticket */}
        <div className={styles.eventTicket}>
          {/* Glowing animated border element */}
          <div className={styles.ticketBorder} />

          {/* Left Side: Date */}
          <div className={styles.ticketDateSection}>
            <div className={styles.ticketMonth}>April 2026</div>
            <div className={styles.ticketDays}>29&ndash;30</div>
            <div className={styles.ticketSubtitle}>Two-Day Symposium</div>
          </div>

          <div className={styles.ticketDivider}>
            <div className={styles.cutoutTop}></div>
            <div className={styles.dashLine}></div>
            <div className={styles.cutoutBottom}></div>
          </div>

          {/* Right Side: Venue & Details */}
          <div className={styles.ticketVenueSection}>
            <div className={styles.venueItem}>
              <div className={styles.venueIconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" className={styles.venueIcon}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="currentColor" opacity="0.2" />
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <div className={styles.venueText}>
                <span className={styles.venueLabel}>Location</span>
                <span className={styles.venueValue}>SCSE, IILM University</span>
                <span className={styles.venueSub}>Gurugram, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={styles.buttonGroup}>
          <a href="http://cmt3.research.microsoft.com/ERATICS2026" className={styles.primaryBtn}>
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
          <a href="http://cmt3.research.microsoft.com/ERATICS2026" className={styles.secondaryBtn}>
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
