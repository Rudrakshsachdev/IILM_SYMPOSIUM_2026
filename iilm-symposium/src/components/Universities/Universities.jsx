import React, { useEffect, useRef, useState } from "react";
import styles from "./Universities.module.css";
import collab1 from "../../assets/collab1.png";
import collab2 from "../../assets/collab2.jpg";
import collab3 from "../../assets/collab3.png";

const universities = [
    {
        id: "ipvc",
        logo: collab1,
        name: "Instituto Politécnico de Viana do Castelo",
        shortName: "IPVC",
        description:
            "A leading Portuguese polytechnic institution renowned for applied research and innovation in engineering, technology, and sustainable development.",
        location: "Viana do Castelo, Portugal",
        website: "https://www.ipvc.pt",
        flag: "🇵🇹",
    },
    {
        id: "oxford-brookes",
        logo: collab2,
        name: "Oxford Brookes University",
        shortName: "OBU",
        description:
            "A prestigious UK university with a strong global reputation for teaching and research excellence, consistently ranked among the best modern universities in the UK.",
        location: "Oxford, United Kingdom",
        website: "https://www.brookes.ac.uk",
        flag: "🇬🇧",
    },
    {
        id: "orebro",
        logo: collab3,
        name: "Örebro University",
        shortName: "ÖU",
        description:
            "A top Swedish university known for its cutting-edge research in AI, robotics, and informatics, fostering global academic collaboration and interdisciplinary innovation.",
        location: "Örebro, Sweden",
        website: "https://www.oru.se/english",
        flag: "🇸🇪",
    },
];

const Universities = () => {
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
        <section className={styles.uniSection} id="collaborators" ref={sectionRef}>
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
                            <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M2 10h16M10 2a14.5 14.5 0 014 8 14.5 14.5 0 01-4 8 14.5 14.5 0 01-4-8 14.5 14.5 0 014-8z" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        Global Partners
                    </span>
                    <h2 className={styles.heading}>
                        Collaborating{" "}
                        <span className={styles.gradientText}>Universities</span>
                    </h2>
                    <p className={styles.subtitle}>
                        ERATICS 2026 brings together leading academic institutions from
                        across the globe for groundbreaking interdisciplinary research.
                    </p>
                </div>

                {/* ═══════ UNIVERSITY CARDS ═══════ */}
                <div className={styles.uniGrid}>
                    {universities.map((uni, i) => (
                        <a
                            key={uni.id}
                            href={uni.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.uniCard} ${a}`}
                            style={{ "--index": i }}
                        >
                            <div className={styles.cardShine} />
                            <div className={styles.cardAccent} />

                            {/* Logo */}
                            <div className={styles.logoSection}>
                                <div className={styles.logoWrap}>
                                    <img src={uni.logo} alt={`${uni.name} logo`} className={styles.logo} />
                                </div>
                            </div>

                            {/* Info */}
                            <div className={styles.infoSection}>
                                <h3 className={styles.uniName}>{uni.name}</h3>
                                <p className={styles.uniDesc}>{uni.description}</p>

                                <div className={styles.metaRow}>
                                    <span className={styles.locationBadge}>
                                        <span className={styles.flag}>{uni.flag}</span>
                                        {uni.location}
                                    </span>
                                    <span className={styles.visitLink}>
                                        Visit Website
                                        <svg className={styles.linkArrow} viewBox="0 0 16 16" fill="none">
                                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Universities;
