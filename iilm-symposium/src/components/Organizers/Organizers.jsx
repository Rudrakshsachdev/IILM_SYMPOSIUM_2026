import React, { useEffect, useRef, useState } from "react";
import styles from "./Organizers.module.css";
import rudrakshImg from "../../assets/rudraksh.jpg";

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

  const faculty = [
    {
      name: "Dr. Ananya Sharma",
      role: "Convener",
      institution: "IILM University",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Prof. Arvind Kapoor",
      role: "Co-Convener",
      institution: "IILM University",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
      name: "Dr. Neha Verma",
      role: "Organizing Secretary",
      institution: "IILM University",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
  ];

  const students = [
    {
      name: "Devansh",
      course: "B.Tech Second Year",
      role: "Student Coordinator",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      name: "Rudraksh",
      course: "B.Tech Second Year",
      role: "Student Coordinator",
      image: rudrakshImg,
    },
  ];

  return (
    <section className={styles.organizers} id="organizers" ref={sectionRef}>
      {/* Floating background elements */}
      <div className={styles.floatingCircle}></div>
      <div className={styles.floatingBlob}></div>
      <div className={styles.floatingDots}></div>

      {/* Subtle grid lines overlay */}
      <div className={styles.gridOverlay}></div>

      <div className={styles.container}>
        <h2 className={`${styles.heading} ${isVisible ? styles.animate : ""}`}>
          Organizing Committee
        </h2>

        {/* Faculty Organizers */}
        <h3 className={`${styles.subHeading} ${isVisible ? styles.animate : ""}`}>
          Faculty Organizers
        </h3>

        <div className={styles.grid}>
          {faculty.map((person, index) => (
            <div
              key={index}
              className={`${styles.card} ${styles.facultyCard} ${isVisible ? styles.animate : ""}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={person.image}
                  alt={person.name}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardContent}>
                <h4>{person.name}</h4>
                <p className={styles.role}>{person.role}</p>
                <span className={styles.institution}>{person.institution}</span>
              </div>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>

        {/* Elegant Divider */}
        <div className={`${styles.divider} ${isVisible ? styles.animate : ""}`}>
          <span className={styles.dividerDot}></span>
        </div>

        {/* Student Coordinators */}
        <h3 className={`${styles.subHeading} ${isVisible ? styles.animate : ""}`}>
          Student Coordinators
        </h3>

        <div className={styles.grid}>
          {students.map((person, index) => (
            <div
              key={index}
              className={`${styles.card} ${styles.studentCard} ${isVisible ? styles.animate : ""}`}
              style={{ transitionDelay: `${(index + faculty.length) * 0.15}s` }}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={person.image}
                  alt={person.name}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardContent}>
                <h4>{person.name}</h4>
                <p className={styles.course}>{person.course}</p>
                <span className={styles.role}>{person.role}</span>
              </div>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizers;