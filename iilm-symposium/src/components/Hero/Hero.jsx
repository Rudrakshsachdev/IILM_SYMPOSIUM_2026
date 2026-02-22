import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import HeroBg from "../../assets/hero.jpg";

const Hero = () => {
  const heroRef = useRef(null);

  // Optimized parallax & mouse interaction for zero-lag
  useEffect(() => {
    // Only enable parallax and mousemove on desktop
    const isMobile = window.innerWidth < 768;
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
    if (!isMobile) {
      window.addEventListener("mousemove", mouseHandler, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      if (!isMobile) {
        window.removeEventListener("mousemove", mouseHandler);
      }
      if (rafScroll) cancelAnimationFrame(rafScroll);
      if (rafMouse) cancelAnimationFrame(rafMouse);
    };
  }, []);

  return (
    <section className={styles.hero} id="home" ref={heroRef}>
      <div
        className={styles.heroBg}
        style={{ backgroundImage: `url(${HeroBg})` }}
      />
      <div className={styles.overlay}></div>
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
