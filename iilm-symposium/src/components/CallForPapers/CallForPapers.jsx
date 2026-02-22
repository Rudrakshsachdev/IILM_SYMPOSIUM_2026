import React, { useEffect, useRef, useState } from "react";
import styles from "./CallForPapers.module.css";

const CallForPapers = () => {
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
      { threshold: 0.2, rootMargin: "0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.papers} id="papers" ref={sectionRef}>
      {/* Advanced dark background elements */}
      <div className={styles.bgGrid}></div>
      <div className={styles.bgGlow}></div>
      <div className={styles.bgParticles}></div>
      <div className={styles.bgLight}></div>

      <div className={styles.container}>
        <h2 className={`${styles.heading} ${isVisible ? styles.animate : ""}`}>
          Call for Papers
        </h2>

        <p className={`${styles.description} ${isVisible ? styles.animate : ""}`}>
          The International Symposium 2026 invites original research papers,
          case studies, and innovative contributions from academicians,
          researchers, industry professionals, and scholars across the globe.
        </p>

        <div className={styles.contentGrid}>
          {/* Submission Guidelines Card */}
          <div
            className={`${styles.contentCard} ${isVisible ? styles.animate : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className={styles.cardAccent}></div>
            <div className={styles.cardIcon}>📜</div>
            <h3>Submission Guidelines</h3>
            <ul className={styles.guidelineList}>
              <li>Papers must be original and unpublished.</li>
              <li>Abstract should not exceed 300 words.</li>
              <li>Full paper length: 6–8 pages.</li>
              <li>Follow IEEE/APA formatting guidelines.</li>
              <li>All submissions will undergo peer review.</li>
            </ul>
            <div className={styles.cardGlow}></div>
          </div>

          {/* Publication Details Card */}
          <div
            className={`${styles.contentCard} ${isVisible ? styles.animate : ""}`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className={styles.cardAccent}></div>
            <div className={styles.cardIcon}>📚</div>
            <h3>Publication Details</h3>
            <p className={styles.publicationText}>
              Selected papers will be published in the symposium proceedings
              with <strong>ISBN</strong>. Outstanding papers may be considered
              for publication in <strong>indexed journals</strong> (subject to
              review).
            </p>
            <div className={styles.cardGlow}></div>
          </div>
        </div>

        <div className={`${styles.buttonGroup} ${isVisible ? styles.animate : ""}`}>
          <a href="#" className={styles.primaryBtn}>
            <span>Download Paper Template</span>
            <svg className={styles.btnIcon} viewBox="0 0 24 24" width="20" height="20">
              <path d="M12 16V4M8 12l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M4 16v4h16v-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </a>
          <a href="#" className={styles.secondaryBtn}>
            <span>Submit Your Paper</span>
            <svg className={styles.btnIcon} viewBox="0 0 24 24" width="20" height="20">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;