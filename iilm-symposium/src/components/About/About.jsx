import React, { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for entrance animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: "0px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Only enable mouse parallax on desktop
    const isMobile = window.innerWidth < 768;
    let rafMouse = null;
    let lastX = 0;
    let lastY = 0;
    const mouseHandler = (e) => {
      if (rafMouse) return;
      rafMouse = requestAnimationFrame(() => {
        if (!sectionRef.current) return;
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 2;
        const y = (clientY / innerHeight - 0.5) * 2;
        if (x !== lastX || y !== lastY) {
          sectionRef.current.style.setProperty("--about-mouse-x", x);
          sectionRef.current.style.setProperty("--about-mouse-y", y);
          lastX = x;
          lastY = y;
        }
        rafMouse = null;
      });
    };
    if (!isMobile) {
      const options = { passive: true };
      window.addEventListener("mousemove", mouseHandler, options);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (!isMobile) {
        window.removeEventListener("mousemove", mouseHandler);
      }
      if (rafMouse) cancelAnimationFrame(rafMouse);
    };
  }, []);

  return (
    <section className={styles.about} id="about" ref={sectionRef}>
      {/* Advanced Top-Notch Background Layers */}
      <div className={styles.noiseOverlay}></div>
      <div className={styles.lightBeams}>
        <div className={styles.beam1}></div>
        <div className={styles.beam2}></div>
      </div>
      <div className={styles.particles}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className={styles.particle}></div>
        ))}
      </div>

      {/* Advanced Rain Effect: Multi-layered for 3D depth */}
      <div className={styles.rainContainerBackground}>
        {[...Array(12)].map((_, i) => (
          <div
            key={`bg-${i}`}
            className={styles.rainDrop}
            style={{
              left: `${(i * 9) % 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${1.5 + Math.random() * 1.5}s`,
              "--drop-h": `${40 + Math.random() * 40}px`,
              "--drop-opacity": `${0.1 + Math.random() * 0.15}`,
              "--drop-blur": "4px",
              "--drop-speed-multiplier": "0.7",
            }}
          ></div>
        ))}
      </div>

      <div className={styles.rainContainerForeground}>
        {[...Array(8)].map((_, i) => (
          <div
            key={`fg-${i}`}
            className={styles.rainDrop}
            style={{
              left: `${(i * 13) % 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${0.6 + Math.random() * 0.6}s`,
              "--drop-h": `${80 + Math.random() * 60}px`,
              "--drop-opacity": `${0.3 + Math.random() * 0.3}`,
              "--drop-blur": "0px",
              "--drop-speed-multiplier": "1.2",
            }}
          ></div>
        ))}
      </div>

      <div className={styles.bgBlob1}></div>
      <div className={styles.bgBlob2}></div>
      <div className={styles.gridOverlay}></div>

      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Column 1: Visual/Interactive Element */}
          <div
            className={`${styles.visualContent} ${isVisible ? styles.animate : ""}`}
          >
            <div className={styles.mainBox}>
              <div className={styles.boxInner}>
                <span className={styles.year}>2026</span>
                <div className={styles.boxDecor}></div>
              </div>
              {/* Floating elements for depth */}
              <div className={styles.floatingTag1}>Symposium</div>
              <div className={styles.floatingTag2}>Innovation</div>
            </div>
            <div className={styles.experienceCard}>
              <div className={styles.cardGlow}></div>
              <span className={styles.expNumber}>10+</span>
              <span className={styles.expLabel}>Global Partners</span>
            </div>
          </div>

          {/* Column 2: Text Content */}
          <div className={styles.textContent}>
            <span
              className={`${styles.eyebrow} ${isVisible ? styles.animate : ""}`}
            >
              Discover Our Purpose
            </span>
            <h2
              className={`${styles.heading} ${isVisible ? styles.animate : ""}`}
            >
              Bridging Innovations <br />
              <span className={styles.gradientText}>Shaping the Future</span>
            </h2>

            <div
              className={`${styles.descriptionWrapper} ${isVisible ? styles.animate : ""}`}
            >
              <p className={styles.description}>
                The International Symposium 2026 brings together the brightest
                minds from academia and industry. A dedicated platform for
                <strong> transformational research</strong> and sustainable
                solutions.
              </p>

              <p className={styles.description}>
                Join IILM University in Gurugram for an immersive experience of
                interdisciplinary exchange, networking, and academic excellence
                that transcends borders.
              </p>
            </div>

            <div
              className={`${styles.stats} ${isVisible ? styles.animate : ""}`}
            >
              <div className={styles.statItem}>
                <span className={styles.statValue}>500+</span>
                <span className={styles.statLine}>Attendees</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>50+</span>
                <span className={styles.statLine}>Speakers</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>20+</span>
                <span className={styles.statLine}>Countries</span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className={styles.highlights}>
          {[
            {
              icon: "🌍",
              badge: "Global",
              title: "Collaboration",
              text: "Fostering international research participation and global academic synergy.",
            },
            {
              icon: "📚",
              badge: "Academic",
              title: "Excellence",
              text: "Peer-reviewed paper presentations and high-impact academic discussions.",
            },
            {
              icon: "🤝",
              badge: "Strategic",
              title: "Networking",
              text: "Bridging the gap between industry needs and academic research excellence.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`${styles.card} ${isVisible ? styles.animate : ""}`}
              style={{ "--index": index }}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardGlow}></div>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>{item.icon}</div>
                  <div className={styles.cardBadge}>{item.badge}</div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className={styles.cardFooter}>
                  <span>Learn More</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className={styles.arrowIcon}
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
