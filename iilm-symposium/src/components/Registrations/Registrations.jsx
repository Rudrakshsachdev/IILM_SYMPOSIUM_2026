import React, { useEffect, useRef, useState } from "react";
import styles from "./Registrations.module.css";

const Registrations = () => {
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
    <section className={styles.registration} id="registration" ref={sectionRef}>
      {/* Decorative background elements */}
      <div className={styles.bgGrid}></div>
      <div className={styles.bgCircle}></div>
      <div className={styles.bgParticles}></div>

      <div className={styles.container}>
        <h2 className={`${styles.heading} ${isVisible ? styles.animate : ""}`}>
          Registration Details
        </h2>

        <div className={styles.feeGrid}>
          {/* Student Card */}
          <div
            className={`${styles.feeCard} ${isVisible ? styles.animate : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className={styles.cardIcon}>🎓</div>
            <h3>Students</h3>
            <p className={styles.price}>₹1500</p>
            <p className={styles.description}>
              Includes access to all sessions & certificate
            </p>
            <div className={styles.cardGlow}></div>
          </div>

          {/* Academicians / Professionals (Highlighted) */}
          <div
            className={`${styles.feeCard} ${styles.highlightCard} ${
              isVisible ? styles.animate : ""
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className={styles.cardIcon}>💼</div>
            <h3>Academicians / Professionals</h3>
            <p className={styles.price}>₹3000</p>
            <p className={styles.description}>
              Includes proceedings & networking access
            </p>
            <div className={styles.cardGlow}></div>
          </div>

          {/* International Card */}
          <div
            className={`${styles.feeCard} ${isVisible ? styles.animate : ""}`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className={styles.cardIcon}>🌍</div>
            <h3>International Participants</h3>
            <p className={styles.price}>$100</p>
            <p className={styles.description}>
              Includes global participation & publication access
            </p>
            <div className={styles.cardGlow}></div>
          </div>
        </div>

        {/* Payment Information Card */}
        <div
          className={`${styles.paymentCard} ${isVisible ? styles.animate : ""}`}
          style={{ transitionDelay: "0.4s" }}
        >
          <div className={styles.paymentAccent}></div>
          <h3>Payment Information</h3>
          <div className={styles.paymentDetails}>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Bank Name:</span>
              <span className={styles.detailValue}>XYZ Bank</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Account Name:</span>
              <span className={styles.detailValue}>IILM University Symposium</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Account Number:</span>
              <span className={styles.detailValue}>1234567890</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>IFSC Code:</span>
              <span className={styles.detailValue}>XYZB0001234</span>
            </div>
          </div>
          <div className={styles.cardGlow}></div>
        </div>

        <div
          className={`${styles.buttonGroup} ${isVisible ? styles.animate : ""}`}
          style={{ transitionDelay: "0.5s" }}
        >
          <a href="#" className={styles.primaryBtn}>
            <span>Register Now</span>
            <svg className={styles.btnIcon} viewBox="0 0 24 24" width="20" height="20">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Registrations;