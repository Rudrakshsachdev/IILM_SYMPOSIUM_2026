import React, { useEffect, useRef, useState } from "react";
import styles from "./Highlights.module.css";
import imgKeynote from "../../assets/event_keynote.png";
import imgAudience from "../../assets/event_audience.png";
import imgNetworking from "../../assets/event_networking.png";
import imgAward from "../../assets/event_award.png";
import imgPanel from "../../assets/event_panel.png";
import imgPoster from "../../assets/event_poster.png";
import imgWorkshop from "../../assets/event_workshop.png";
import imgGroup from "../../assets/event_group.png";

const GALLERY = [
    { src: imgKeynote, caption: "Keynote Session" },
    { src: imgAudience, caption: "Symposium Audience" },
    { src: imgPanel, caption: "Panel Discussion" },
    { src: imgNetworking, caption: "Networking Session" },
    { src: imgAward, caption: "Award Ceremony" },
    { src: imgPoster, caption: "Poster Presentations" },
    { src: imgWorkshop, caption: "Hands-on Workshop" },
    { src: imgGroup, caption: "Group Photo" },
];

const STATS = [
    { label: "Participants", value: "350+" },
    { label: "Papers Presented", value: "85" },
    { label: "Keynote Speakers", value: "6" },
    { label: "Partner Universities", value: "4" },
];

const HIGHLIGHTS = [
    "First edition with international collaboration across 3 countries",
    "Keynote by leading AI researcher from Oxford Brookes University",
    "Launch of interdisciplinary computing research track",
    "Best Paper Award in Sustainable Computing category",
];

const TESTIMONIAL = {
    quote:
        "An outstanding symposium that truly bridges the gap between academic research and real-world impact. The interdisciplinary approach was refreshing and highly productive.",
    author: "Dr. Aydin Azizi",
    role: "Senior Lecturer, Oxford Brookes University",
};

const Highlights = () => {
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
            { threshold: 0.04 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const a = isVisible ? styles.animate : "";

    return (
        <section className={styles.hlSection} id="highlights" ref={sectionRef}>
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
                            <rect x="3" y="4" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M3 8h14" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M7 2v4M13 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        ERATICS 2025
                    </span>
                    <h2 className={styles.heading}>
                        Glimpses of{" "}
                        <span className={styles.gradientText}>Past Edition</span>
                    </h2>
                    <p className={styles.subtitle}>
                        A look back at the impactful moments, groundbreaking research, and
                        collaborative excellence from our inaugural symposium.
                    </p>
                </div>

                {/* ═══════ STATS STRIP ═══════ */}
                <div className={`${styles.statsStrip} ${a}`}>
                    {STATS.map((s) => (
                        <div className={styles.statItem} key={s.label}>
                            <span className={styles.statValue}>{s.value}</span>
                            <span className={styles.statLabel}>{s.label}</span>
                        </div>
                    ))}
                </div>

                {/* ═══════ INFO ROW (highlights + testimonial) ═══════ */}
                <div className={styles.infoRow}>
                    {/* Key Highlights */}
                    <div className={`${styles.hlCard} ${a}`}>
                        <div className={styles.hlCardShine} />
                        <div className={styles.hlCardAccent} />
                        <h3 className={styles.hlCardTitle}>Key Highlights</h3>
                        <ul className={styles.hlList}>
                            {HIGHLIGHTS.map((h, i) => (
                                <li key={i} className={styles.hlItem}>
                                    <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="none">
                                        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.3" />
                                        <path d="M6 10l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>{h}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Testimonial */}
                    <div className={`${styles.testimonialCard} ${a}`}>
                        <div className={styles.hlCardShine} />
                        <svg className={styles.quoteIcon} viewBox="0 0 24 24" fill="none">
                            <path d="M10 11H6c0-2.8 1.2-4 4-4V5c-4 0-6 2-6 6v6h6V11zM22 11h-4c0-2.8 1.2-4 4-4V5c-4 0-6 2-6 6v6h6V11z" fill="currentColor" opacity="0.15" />
                        </svg>
                        <p className={styles.testimonialQuote}>"{TESTIMONIAL.quote}"</p>
                        <div className={styles.testimonialAuthorRow}>
                            <div>
                                <span className={styles.testimonialAuthor}>{TESTIMONIAL.author}</span>
                                <span className={styles.testimonialRole}>{TESTIMONIAL.role}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══════ IMAGE MARQUEE (full-width, outside container) ═══════ */}
            <div className={`${styles.marqueeWrap} ${a}`}>
                <div className={styles.marqueeTrack}>
                    {/* Duplicate images for seamless infinite loop */}
                    {[...GALLERY, ...GALLERY].map((img, i) => (
                        <div className={styles.marqueeSlide} key={i}>
                            <img
                                src={img.src}
                                alt={img.caption}
                                className={styles.marqueeImg}
                                loading="lazy"
                            />
                            <div className={styles.marqueeOverlay}>
                                <span className={styles.marqueeCaption}>{img.caption}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
