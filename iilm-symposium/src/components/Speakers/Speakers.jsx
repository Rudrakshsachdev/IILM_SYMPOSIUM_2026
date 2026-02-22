import React, { useEffect, useRef, useState } from "react";
import styles from "./Speakers.module.css";

const Speakers = () => {
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

  const speakers = [
    {
      name: "Prof. John Anderson",
      designation: "Professor of Artificial Intelligence",
      university: "Stanford University, USA",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Dr. Maria Fernandez",
      designation: "Director of Sustainable Innovation",
      university: "University of Barcelona, Spain",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Dr. Rajiv Mehta",
      designation: "Data Science Research Lead",
      university: "IIT Delhi, India",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  return (
    <section className={styles.speakers} id="speakers" ref={sectionRef}>
      <div className={styles.container}>
        {/* Decorative elements */}
        <div className={styles.bgShape}></div>
        <div className={styles.bgPattern}></div>

        <h2 className={`${styles.heading} ${isVisible ? styles.animate : ""}`}>
          Keynote Speakers
        </h2>

        <div className={styles.grid}>
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className={`${styles.card} ${isVisible ? styles.animate : ""}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <h3>{speaker.name}</h3>
              <p className={styles.designation}>{speaker.designation}</p>
              <p className={styles.university}>{speaker.university}</p>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;