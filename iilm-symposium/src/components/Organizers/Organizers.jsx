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
      { name: "Dr. Akshat Agrawal", designation: "Associate Professor & Cluster Lead", affiliation: "IILM University, Gurugram" },
      { name: "Dr. Anurag Jain", designation: "Faculty, SCSE", affiliation: "IILM University, Gurugram" },
    ],
  },
  {
    role: "Executive Chair(s)",
    members: [
      { name: "Dr. Umang Garg", designation: "Faculty, SCSE", affiliation: "IILM University, Gurugram" },
      { name: "Dr. Amar Shukla", designation: "Faculty, SCSE", affiliation: "IILM University, Gurugram" },
    ],
  },
  {
    role: "Program Chair(s)",
    members: [
      { name: "Dr. Sapna Arora", designation: "Faculty, SCSE", affiliation: "IILM University, Gurugram" },
      { name: "Dr. Puja Acharya", designation: "Faculty, SCSE", affiliation: "IILM University, Gurugram" },
      { name: "Dr. Rahul Thakur", designation: "Faculty, SCSE", affiliation: "IILM University, Gurugram" },
      { name: "Dr. Naved Ahmad", designation: "Faculty, SCSE", affiliation: "IILM University, Gurugram" },
    ],
  },
  {
    role: "Delegate & Sponsorship Chair(s)",
    members: [
      { name: "Dr. Vaishali Maheshwari", designation: "Faculty, SCSE", affiliation: "IILM University, Gurugram" },
      { name: "Dr. Sonam Lata", designation: "Faculty, SCSE", affiliation: "IILM University, Gurugram" },
    ],
  },
  {
    role: "Publicity & Media Chair(s)",
    members: [
      { name: "Ms. Anshita Shukla", designation: "Faculty, SCSE", affiliation: "IILM University, Gurugram" },
      { name: "Dr. Puneet Bawa", designation: "Faculty, SCSE", affiliation: "IILM University, Gurugram" },
    ],
  },
  {
    role: "Finance & Accounts Chair(s)",
    members: [
      { name: "Dr. Aarti Chugh", designation: "Faculty, SCSE", affiliation: "IILM University, Gurugram" },
    ],
  },
  {
    role: "Registration Chair(s)",
    members: [
      { name: "Dr. Megha Rana", designation: "Faculty", affiliation: "Amity University, Haryana" },
      { name: "Dr. Samridhi Singhal", designation: "Faculty, SCSE", affiliation: "IILM University, Gurugram" },
    ],
  },
  {
    role: "Hospitality & Accommodation Chair(s)",
    members: [
      { name: "Mr. Shagun Panghal", designation: "Staff, SCSE", affiliation: "IILM University, Gurugram" },
      { name: "Mr. Abhishek Toofani", designation: "Staff, SCSE", affiliation: "IILM University, Gurugram" },
    ],
  },
  {
    role: "Technical Program Committee",
    members: [
      { name: "Dr. Law Kumar Singh", designation: "Chair", affiliation: "IILM University, Gurugram" },
      { name: "Dr. Pallavi Pandey", designation: "Co-Chair", affiliation: "IILM University, Gurugram" },
      { name: "Dr. Jayati Tripathi", designation: "Member", affiliation: "IILM University, Gurugram" },
      { name: "Dr. Pooja Batra Nagpal", designation: "Member", affiliation: "IILM University, Gurugram" },
      { name: "Dr. Preeti Mehta", designation: "Member", affiliation: "IILM University, Gurugram" },
      { name: "Dr. Vikas Jayasawal", designation: "Member", affiliation: "IILM University, Gurugram" },
    ],
  },
  {
    role: "Student Coordinators",
    members: [
      { name: "Rudraksh", designation: "B.Tech 2nd Year", affiliation: "IILM University, Gurugram" },
      { name: "Devansh", designation: "B.Tech 2nd Year", affiliation: "IILM University, Gurugram" },
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
              <span className={styles.roleNumber}>{String(gi + 1).padStart(2, "0")}</span>
              <h3 className={styles.roleTitle}>{group.role}</h3>
            </div>

            {/* Members Grid */}
            <div className={styles.membersGrid}>
              {group.members.map((m, mi) => (
                <div key={mi} className={styles.memberCard}>
                  {/* Initials Avatar */}
                  <div className={styles.avatar}>
                    <span>
                      {m.name
                        .replace(/^(Prof\.\s*\(Dr\.\)\s*|Dr\.\s*|Mr\.\s*|Ms\.\s*)/i, "")
                        .split(" ")
                        .filter(Boolean)
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")
                        .toUpperCase()}
                    </span>
                  </div>

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