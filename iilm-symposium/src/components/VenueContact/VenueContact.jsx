import React, { useEffect, useRef, useState } from "react";
import styles from "./VenueContact.module.css";

const VenueContact = () => {
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
      { threshold: 0.06 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const a = isVisible ? styles.animate : "";

  return (
    <section className={styles.venueSection} id="venue" ref={sectionRef}>
      {/* ── Background ── */}
      <div className={styles.ambientOrb1} aria-hidden="true" />
      <div className={styles.ambientOrb2} aria-hidden="true" />
      <div className={styles.bgNoise} aria-hidden="true" />
      <div className={styles.bgVignette} aria-hidden="true" />

      <div className={styles.container}>
        {/* ═══════ HEADER ═══════ */}
        <div className={`${styles.header} ${a}`}>
          <span className={styles.eyebrow}>
            <svg className={styles.eyebrowIcon} viewBox="0 0 20 20" fill="none">
              <path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="10" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            Venue
          </span>
          <h2 className={styles.heading}>
            Venue &{" "}
            <span className={styles.gradientText}>Location</span>
          </h2>
          <p className={styles.subtitle}>
            Join us at IILM University, Gurugram for the International
            Symposium 2026
          </p>
        </div>

        {/* ═══════ MAP + INFO LAYOUT ═══════ */}
        <div className={`${styles.venueGrid} ${a}`}>
          {/* Map */}
          <div className={styles.mapCard}>
            <div className={styles.mapCardShine} />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.526164357399!2d77.10097987577782!3d28.433551175773967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f7116a17591%3A0xa2f1868ef64f51ca!2sIILM%20University%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1771781003327!5m2!1sen!2sin"
              className={styles.map}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IILM University Gurugram Location"
            />
          </div>

          {/* Info sidebar */}
          <div className={styles.infoColumn}>
            {/* Address card */}
            <div className={`${styles.infoCard} ${a}`} style={{ "--delay": "0.15s" }}>
              <div className={styles.cardAccent} />
              <div className={styles.cardShine} />
              <div className={styles.cardHeader}>
                <div className={styles.cardIconWrap}>
                  <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <h3 className={styles.cardTitle}>Address</h3>
              </div>
              <p className={styles.addressText}>
                IILM University<br />
                Plot No. 69-71, Golf Course Road<br />
                Sector 53, Gurugram<br />
                Haryana 122003, India
              </p>
              <a
                href="https://www.google.com/maps/place/IILM+University,+Gurugram/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.directionBtn}
              >
                <svg className={styles.btnIconLeft} viewBox="0 0 20 20" fill="none">
                  <path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="10" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span>Get Directions</span>
                <svg className={styles.btnArrow} viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Contact card */}
            <div className={`${styles.infoCard} ${a}`} style={{ "--delay": "0.25s" }}>
              <div className={styles.cardAccent} />
              <div className={styles.cardShine} />
              <div className={styles.cardHeader}>
                <div className={styles.cardIconWrap}>
                  <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className={styles.cardTitle}>Contact</h3>
              </div>
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Email</span>
                  <a href="mailto:symposium@iilm.edu" className={styles.contactValue}>
                    symposium@iilm.edu
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Website</span>
                  <a href="https://iilm.edu" target="_blank" rel="noopener noreferrer" className={styles.contactValue}>
                    iilm.edu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueContact;