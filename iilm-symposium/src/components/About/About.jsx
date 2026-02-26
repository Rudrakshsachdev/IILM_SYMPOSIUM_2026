import React, { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";

const committeeData = [
  {
    institution: "IILM University, Gurugram, India",
    flag: "🇮🇳",
    members: [
      {
        name: "Prof. (Dr.) Shamik Tiwari",
        role: "Dean, School of Computer Science & Engineering",
      },
      {
        name: "Dr. Akshat Agrawal",
        role: "Associate Professor & Cluster Lead",
      },
    ],
  },
  {
    institution: "Polytechnic University of Viana do Castelo (IPVC), Portugal",
    flag: "🇵🇹",
    members: [
      {
        name: "Dr. Jorge Esparteiro Garcia",
        role: "Director, ADiT-Lab, IPVC, Portugal",
      },
      {
        name: "Dr. Sara Paiva",
        role: "Pro-President for Information Systems, Associate Professor, IPVC",
      },
    ],
  },
  {
    institution: "Örebro University, Sweden",
    flag: "🇸🇪",
    members: [
      {
        name: "Prof. Shang Gao",
        role: "Associate Professor in Informatics",
      },
    ],
  },
  {
    institution: "Oxford Brookes University, United Kingdom",
    flag: "🇬🇧",
    members: [
      {
        name: "Dr. Aydin Azizi",
        role: "Senior Lecturer, School of Engineering, Computing and Mathematics",
      },
    ],
  },
];

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
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className={styles.about} id="about" ref={sectionRef}>
      {/* Subtle ambient background elements */}
      <div className={styles.ambientOrb1} aria-hidden="true" />
      <div className={styles.ambientOrb2} aria-hidden="true" />
      <div className={styles.bgNoise} aria-hidden="true" />

      <div className={styles.container}>

        {/* ── Section Header ── */}
        <div className={`${styles.sectionHeader} ${isVisible ? styles.animate : ""}`}>
          <span className={styles.eyebrow}>About the Symposium</span>
          <h2 className={styles.heading}>
            ERATICS{" "}
            <span className={styles.gradientText}>2026</span>
          </h2>
          <p className={styles.subtitle}>
            International Symposium on Emerging Research in Advanced Technologies,
            Interdisciplinary Computing &amp; Complex Systems
          </p>
        </div>

        {/* ── Introduction ── */}
        <div className={`${styles.introCard} ${isVisible ? styles.animate : ""}`}>
          <div className={styles.cardAccent}></div>
          <h3 className={styles.contentTitle}>Introduction</h3>
          <p className={styles.contentText}>
            This International Online Symposium is a joint initiative between{" "}
            <strong>IILM University, India</strong>, the{" "}
            <strong>Polytechnic University of Viana do Castelo (IPVC), Portugal</strong>,{" "}
            <strong>Örebro University, Sweden</strong>, and{" "}
            <strong>Oxford Brookes University, United Kingdom</strong>. The aim is to
            encourage research among Bachelor's, Master's, and early-stage researchers
            through presentations, expert talks, and collaborative discussions.
          </p>
        </div>

        {/* ── Symposium Overview + Key Outcomes ── */}
        <div className={styles.contentGrid}>
          <div
            className={`${styles.contentBlock} ${isVisible ? styles.animate : ""}`}
          >
            <div className={styles.contentCard}>
              <div className={styles.cardAccent}></div>
              <h3 className={styles.contentTitle}>Symposium Overview</h3>
              <p className={styles.contentText}>
                The online symposium will include{" "}
                <strong>research paper presentations</strong>, keynote lectures,
                expert guidance sessions, and interactive discussions between
                students and faculty from all the participating universities.
              </p>
            </div>
          </div>

          <div
            className={`${styles.contentBlock} ${isVisible ? styles.animate : ""}`}
            style={{ "--delay": "0.15s" }}
          >
            <div className={styles.contentCard}>
              <div className={styles.cardAccent}></div>
              <h3 className={styles.contentTitle}>Key Outcomes</h3>
              <p className={styles.contentText}>
                Edited books will be published as an outcome of the symposium.
                These books will include selected research contributions from
                students and faculty from all institutions and may be published
                with reputed{" "}
                <strong>Springer Nature book series</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* ── Organizing Committee ── */}
        <div className={`${styles.committeeSection} ${isVisible ? styles.animate : ""}`}>
          <h3 className={styles.committeeHeading}>Organizing Committee</h3>
          <div className={styles.committeeGrid}>
            {committeeData.map((group, gi) => (
              <div
                key={gi}
                className={`${styles.committeeCard} ${isVisible ? styles.animate : ""}`}
                style={{ "--index": gi }}
              >
                <div className={styles.committeeHeader}>
                  <span className={styles.flag}>{group.flag}</span>
                  <span className={styles.institutionName}>{group.institution}</span>
                </div>
                <ul className={styles.memberList}>
                  {group.members.map((m, mi) => (
                    <li key={mi} className={styles.memberItem}>
                      <span className={styles.memberName}>{m.name}</span>
                      <span className={styles.memberRole}>{m.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Stats Strip ── */}
        <div className={`${styles.statsStrip} ${isVisible ? styles.animate : ""}`}>
          {[
            { value: "4", label: "Partner Universities" },
            { value: "3", label: "Countries" },
            { value: "Online", label: "Format" },
            { value: "2026", label: "Edition" },
          ].map((stat, i) => (
            <div key={i} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
