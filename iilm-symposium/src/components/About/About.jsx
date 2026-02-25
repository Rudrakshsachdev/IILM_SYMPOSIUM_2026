import React, { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className={styles.about} id="about" ref={sectionRef}>
      {/* ===== Content ===== */}
      <div className={styles.container}>
        {/* Section Header */}
        <div
          className={`${styles.sectionHeader} ${isVisible ? styles.animate : ""}`}
        >
          <span className={styles.eyebrow}>About the Symposium</span>
          <h2 className={styles.heading}>
            Bridging Innovation,{" "}
            <span className={styles.gradientText}>Shaping the Future</span>
          </h2>
          <p className={styles.subtitle}>
            A premier platform for transformational research, interdisciplinary
            exchange, and sustainable solutions that transcend borders.
          </p>
        </div>

        {/* Two-Column Content */}
        <div className={styles.contentGrid}>
          <div
            className={`${styles.contentBlock} ${isVisible ? styles.animate : ""}`}
          >
            <div className={styles.contentCard}>
              <div className={styles.cardAccent}></div>
              <h3 className={styles.contentTitle}>Our Vision</h3>
              <p className={styles.contentText}>
                The International Symposium 2026 brings together the brightest
                minds from academia and industry. A dedicated platform for{" "}
                <strong>transformational research</strong> and sustainable
                solutions driving global innovation.
              </p>
            </div>
          </div>

          <div
            className={`${styles.contentBlock} ${isVisible ? styles.animate : ""}`}
            style={{ "--delay": "0.15s" }}
          >
            <div className={styles.contentCard}>
              <div className={styles.cardAccent}></div>
              <h3 className={styles.contentTitle}>The Experience</h3>
              <p className={styles.contentText}>
                Join IILM University in Gurugram for an immersive experience of
                interdisciplinary exchange, networking, and academic excellence
                that <strong>transcends borders</strong> and inspires the next
                generation.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div
          className={`${styles.statsStrip} ${isVisible ? styles.animate : ""}`}
        >
          {[
            { value: "500+", label: "Attendees" },
            { value: "50+", label: "Speakers" },
            { value: "20+", label: "Countries" },
            { value: "10+", label: "Partners" },
          ].map((stat, i) => (
            <div key={i} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Highlight Cards */}
        <div className={styles.highlights}>
          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" className={styles.hlIcon}>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              ),
              badge: "Global",
              title: "Collaboration",
              text: "Fostering international research participation and global academic synergy.",
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" className={styles.hlIcon}>
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M8 7h8M8 11h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ),
              badge: "Academic",
              title: "Excellence",
              text: "Peer-reviewed paper presentations and high-impact academic discussions.",
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" className={styles.hlIcon}>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ),
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
                <div className={styles.cardTop}>
                  <div className={styles.cardIconCircle}>{item.icon}</div>
                  <span className={styles.cardBadge}>{item.badge}</span>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.text}</p>
                <div className={styles.cardFooter}>
                  <span>Learn More</span>
                  <svg viewBox="0 0 24 24" fill="none" className={styles.arrowIcon}>
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
