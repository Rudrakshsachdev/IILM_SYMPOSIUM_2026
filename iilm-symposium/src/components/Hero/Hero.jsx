import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const heroRef = useRef(null);

  // Optimized parallax & mouse interaction for zero-lag
  useEffect(() => {
    let rafScroll = null;
    let rafMouse = null;
    let lastScrollY = 0;
    let lastMouseX = 0;
    let lastMouseY = 0;
    const speed = 0.3;

    const scrollHandler = () => {
      if (rafScroll) return;
      rafScroll = requestAnimationFrame(() => {
        if (!heroRef.current) return;
        const scrollY = window.scrollY;
        if (scrollY !== lastScrollY) {
          heroRef.current.style.setProperty(
            "--scroll-y",
            `${scrollY * speed}px`,
          );
          lastScrollY = scrollY;
        }
        rafScroll = null;
      });
    };

    const mouseHandler = (e) => {
      if (rafMouse) return;
      rafMouse = requestAnimationFrame(() => {
        if (!heroRef.current) return;
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 2;
        const y = (clientY / innerHeight - 0.5) * 2;
        if (x !== lastMouseX || y !== lastMouseY) {
          heroRef.current.style.setProperty("--mouse-x", x);
          heroRef.current.style.setProperty("--mouse-y", y);
          lastMouseX = x;
          lastMouseY = y;
        }
        rafMouse = null;
      });
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });
    window.addEventListener("mousemove", mouseHandler, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("mousemove", mouseHandler);
      if (rafScroll) cancelAnimationFrame(rafScroll);
      if (rafMouse) cancelAnimationFrame(rafMouse);
    };
  }, []);

  return (
    <section className={styles.hero} id="home" ref={heroRef}>
      {/* Mosaic Background (V4 - Optimized) */}
      <div className={styles.mosaicContainer}>
        <div className={`${styles.column} ${styles.column1} `}>
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3"
            alt="Campus 1"
            className={styles.mosaicImg}
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94"
            alt="Campus 2"
            className={styles.mosaicImg}
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3"
            alt="Campus 1"
            className={styles.mosaicImg}
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94"
            alt="Campus 2"
            className={styles.mosaicImg}
            loading="lazy"
          />
        </div>
        <div className={`${styles.column} ${styles.column2} `}>
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Innovation 1"
            className={styles.mosaicImg}
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1507413245164-6160d8298b31"
            alt="Innovation 2"
            className={styles.mosaicImg}
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Innovation 1"
            className={styles.mosaicImg}
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1507413245164-6160d8298b31"
            alt="Innovation 2"
            className={styles.mosaicImg}
            loading="lazy"
          />
        </div>
        <div className={`${styles.column} ${styles.column3} `}>
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c"
            alt="Campus 3"
            className={styles.mosaicImg}
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
            alt="Collaboration"
            className={styles.mosaicImg}
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c"
            alt="Campus 3"
            className={styles.mosaicImg}
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
            alt="Collaboration"
            className={styles.mosaicImg}
            loading="lazy"
          />
        </div>
      </div>

      <div className={styles.overlay}></div>
      <div className={styles.gridOverlay}></div>
      <div className={styles.scanLine}></div>
      <div className={styles.lightBeam}></div>

      <div className={styles.blobContainer}>
        <div className={`${styles.blob} ${styles.blob1} `}></div>
        <div className={`${styles.blob} ${styles.blob2} `}></div>
        <div className={`${styles.blob} ${styles.blob3} `}></div>
      </div>

      <div className={styles.particleOverlay}></div>

      <div className={styles.heroContent}>
        <p className={styles.collaboration}>
          Organized by <strong>IILM University, India</strong> <br />
          In Collaboration with <strong>Global Partner University</strong>
        </p>

        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>
            International Symposium on <br />
            <span className={styles.gradientText}>
              Research & Global Innovation
            </span>{" "}
            2026
          </h1>
        </div>

        <p className={styles.tagline}>
          Advancing Knowledge, Innovation & Sustainable Futures through <br />{" "}
          Collaborative Excellence.
        </p>

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
