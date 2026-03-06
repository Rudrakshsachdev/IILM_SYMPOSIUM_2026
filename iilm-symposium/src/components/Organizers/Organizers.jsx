import React, { useEffect, useRef, useState } from "react";
import styles from "./Organizers.module.css";

/* ─── Committee Data ─── */
const committeeGroups = [
  {
    role: "General Chair",
    members: [
      { name: "Prof. (Dr.) Shamik Tiwari", designation: "Dean, SCSE", affiliation: "IILM University, Gurugram", international: false },
      { name: "Dr. Aydin Azizi", designation: "Senior Lecturer", affiliation: "Oxford Brookes University, UK", international: true },
      { name: "Dr. Jorge Esparteiro Garcia", designation: "Director, ADiT-Lab", affiliation: "IPVC, Portugal", international: true },
      { name: "Dr. Shang Gao", designation: "Associate Professor in Informatics", affiliation: "Örebro University, Sweden", international: true },
      { name: "Dr. Sara Paiva", designation: "Pro-President for Information Systems", affiliation: "IPVC, Portugal", international: true },
    ],
  },
  {
    role: "Conference Chair(s)",
    members: [
      { name: "Dr. Akshat Agrawal", designation: "Associate Professor & Cluster Lead, SCSE", affiliation: "IILM University, Gurugram" },
      { name: "Dr. Anurag Jain", designation: "Professor, SCSE", affiliation: "IILM University, Gurugram" },
    ],
  },
  {
    role: "Executive Chair(s)",
    members: [
      { name: "Dr. Umang Garg", designation: "Associate Professor & Cluster Lead (Cybersecurity & Intelligence), SCSE", affiliation: "IILM University, Gurugram" },
      { name: "Dr. Amar Shukla", designation: "Associate Professor &  Cluster Lead (AI & Intelligent Systems), SCSE", affiliation: "IILM University, Gurugram" },
    ],
  },
  {
    role: "Program Chair(s)",
    members: [
      { name: "Dr. Sapna Arora", designation: "Associate Professor, SCSE", affiliation: "IILM University, Gurugram" },
      { name: "Dr. Puja Acharya", designation: "Associate Professor, SCSE", affiliation: "IILM University, Gurugram" },
      { name: "Dr. Rahul Thakur", designation: "Assistant Professor, SCSE", affiliation: "IILM University, Gurugram" },
      { name: "Mr. Naved Ahmad", designation: "Assistant Professor, SCSE", affiliation: "IILM University, Gurugram" },
    ],
  },
  {
    role: "Delegate & Sponsorship Chair(s)",
    members: [
      { name: "Dr. Vaishali Maheshwari", designation: "Associate Professor & Head, Industry Connect, SCSE", affiliation: "IILM University, Gurugram" },
      { name: "Dr. Sonam Lata", designation: "Assistant Professor, SCSE", affiliation: "IILM University, Gurugram" },
    ],
  },
  {
    role: "Publicity & Media Chair(s)",
    members: [
      { name: "Ms. Anshita Shukla", designation: "Assistant Professor, SCSE", affiliation: "IILM University, Gurugram" },
      { name: "Dr. Puneet Bawa", designation: "Assistant Professor, SCSE", affiliation: "IILM University, Gurugram" },
    ],
  },
  {
    role: "Finance & Accounts Chair(s)",
    members: [
      { name: "Dr. Aarti Chugh", designation: "Associate Professor, SCSE", affiliation: "IILM University, Gurugram" },
    ],
  },
  {
    role: "Registration Chair(s)",
    members: [
      { name: "Dr. Megha Rana", designation: "Associate Professor, SCSE", affiliation: "IILM University, Gurugram" },
      { name: "Ms. Samridhi Singhal", designation: "Assistant Professor, SCSE", affiliation: "IILM University, Gurugram" },
    ],
  },
  {
    role: "Hospitality & Accommodation Chair(s)",
    members: [
      { name: "Dr. Shagun Panghal", designation: "Assistant Professor, SCSE", affiliation: "IILM University, Gurugram" },
      { name: "Mr. Abhishek Toofani", designation: "Assistant Professor, SCSE", affiliation: "IILM University, Gurugram" },
    ],
  },
  {
    role: "Technical Program Committee",
    members: [
      { name: "Dr. Law Kumar Singh", designation: "Professor, SCSE", affiliation: "IILM University, Gurugram" },
      { name: "Dr. Pallavi Pandey", designation: "Associate Professor, SCSE", affiliation: "IILM University, Gurugram" },
      { name: "Dr. Jayati Tripathi", designation: "Assistant Professor, SCSE", affiliation: "IILM University, Gurugram" },
      { name: "Dr. Pooja Batra Nagpal", designation: "Associate Professor, SCSE", affiliation: "IILM University, Gurugram" },
      { name: "Dr. Preeti Mehta", designation: "Assistant Professor, SCSE", affiliation: "IILM University, Gurugram" },
      { name: "Dr. Vikas Kumar Jayasawal", designation: "Assistant Professor, SCSE", affiliation: "IILM University, Gurugram" },
    ],
  },
  {
    role: "Student Coordinators",
    members: [
      { name: "Rudraksh Sachdeva", designation: "B.Tech 2nd Year", affiliation: "IILM University, Gurugram" },
      { name: "Devansh Datta", designation: "B.Tech 2nd Year", affiliation: "IILM University, Gurugram" },
    ],
  },
];

/* ─── Component ─── */
const Organizers = () => {
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

  return (
    <section className={styles.organizers} id="organizers" ref={sectionRef}>
      {/* Background circles animation */}
      <div className={styles.circlesWrap} aria-hidden="true">
        <div className={styles.centerGlow} />
        <div className={`${styles.circleRing} ${styles.ring1}`} />
        <div className={`${styles.circleRing} ${styles.ring2}`} />
        <div className={`${styles.circleRing} ${styles.ring3}`} />
        <div className={`${styles.circleRing} ${styles.ring4}`} />
        <div className={styles.circlesVignette} />
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.animate : ""}`}>
          <span className={styles.eyebrow}>Committee</span>
          <h2 className={styles.heading}>
            Organizing{" "}
            <span className={styles.gradientText}>Committee</span>
          </h2>
          <p className={styles.introPara}>
            The Organizing Committee for ERATICS 2026 comprises distinguished
            academicians and researchers from IILM University (India), the
            Polytechnic University of Viana do Castelo (Portugal), Örebro
            University (Sweden), and Oxford Brookes University (United Kingdom),
            ensuring a truly international and multidisciplinary symposium.
          </p>
        </div>

        {/* Committee Groups */}
        {committeeGroups.map((group, gi) => (
          <div
            key={gi}
            className={`${styles.groupBlock} ${isVisible ? styles.animate : ""}`}
            style={{ "--gi": gi }}
          >
            {/* Role Title */}
            <div className={styles.roleHeader}>
              <h3 className={styles.roleTitle}>{group.role}</h3>
            </div>

            {/* Members Grid */}
            <div className={styles.membersGrid}>
              {group.members.map((m, mi) => (
                <div key={mi} className={styles.memberCard}>
                  <div className={styles.memberInfo}>
                    <span className={styles.memberName}>{m.name}</span>
                    <span className={styles.memberDesig}>{m.designation}</span>
                    <span className={styles.memberAffil}>
                      {m.affiliation}
                      {m.international && (
                        <span className={styles.intlBadge}>International</span>
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Organizers;