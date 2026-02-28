import React, { useEffect, useRef, useState } from "react";
import styles from "./Highlights.module.css";
import imgKeynote from "../../assets/event_keynote.png";
import imgAudience from "../../assets/event_audience.png";
import imgNetworking from "../../assets/event_networking.png";
import imgAward from "../../assets/event_award.png";
import imgPanel from "../../assets/event_panel.png";
import imgPoster from "../../assets/event_poster.png";

const YEARS_DATA = [
    {
        year: 2025,
        stats: [
            { label: "Participants", value: "350+" },
            { label: "Papers Presented", value: "85" },
            { label: "Keynote Speakers", value: "6" },
            { label: "Partner Universities", value: "4" },
        ],
        highlights: [
            "First edition with international collaboration across 3 countries",
            "Keynote by leading AI researcher from Oxford Brookes University",
            "Launch of interdisciplinary computing research track",
            "Best Paper Award in Sustainable Computing category",
        ],
        images: [
            { src: imgKeynote, caption: "Keynote Session" },
            { src: imgAudience, caption: "Participants" },
            { src: imgNetworking, caption: "Networking" },
        ],
        testimonial: {
            quote: "An outstanding symposium that truly bridges the gap between academic research and real-world impact. The interdisciplinary approach was refreshing and highly productive.",
            author: "Dr. Aydin Azizi",
            role: "Senior Lecturer, Oxford Brookes University",
        },
    },
    {
        year: 2024,
        stats: [
            { label: "Participants", value: "200+" },
            { label: "Papers Presented", value: "52" },
            { label: "Keynote Speakers", value: "4" },
            { label: "Partner Universities", value: "2" },
        ],
        highlights: [
            "Inaugural edition of ERATICS at IILM University",
            "Focused tracks on AI, Machine Learning, and IoT",
            "Panel discussion on ethics in emerging technologies",
            "Research poster exhibition with 30+ entries",
        ],
        images: [
            { src: imgPanel, caption: "Panel Discussion" },
            { src: imgAward, caption: "Award Ceremony" },
            { src: imgPoster, caption: "Poster Session" },
        ],
        testimonial: {
            quote: "ERATICS provided an incredible platform for early-career researchers to showcase their work alongside established academics. The collaborative spirit was remarkable.",
            author: "Dr. Shang Gao",
            role: "Associate Professor, Örebro University",
        },
    },
];

const Highlights = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeYear, setActiveYear] = useState(0);
    const [lightboxImg, setLightboxImg] = useState(null);
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
    const data = YEARS_DATA[activeYear];

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
                        Past Editions
                    </span>
                    <h2 className={styles.heading}>
                        Previous Years'{" "}
                        <span className={styles.gradientText}>Highlights</span>
                    </h2>
                    <p className={styles.subtitle}>
                        A look back at the impactful moments, groundbreaking research, and
                        collaborative excellence from our past symposiums.
                    </p>
                </div>

                {/* ═══════ YEAR TABS ═══════ */}
                <div className={`${styles.yearTabs} ${a}`}>
                    {YEARS_DATA.map((yd, i) => (
                        <button
                            key={yd.year}
                            className={`${styles.yearTab} ${activeYear === i ? styles.yearTabActive : ""}`}
                            onClick={() => setActiveYear(i)}
                        >
                            {yd.year}
                        </button>
                    ))}
                </div>

                {/* ═══════ STATS STRIP ═══════ */}
                <div className={`${styles.statsStrip} ${a}`} key={`stats-${data.year}`}>
                    {data.stats.map((s) => (
                        <div className={styles.statItem} key={s.label}>
                            <span className={styles.statValue}>{s.value}</span>
                            <span className={styles.statLabel}>{s.label}</span>
                        </div>
                    ))}
                </div>

                {/* ═══════ CONTENT GRID ═══════ */}
                <div className={styles.contentGrid} key={`content-${data.year}`}>
                    {/* Image Gallery */}
                    <div className={`${styles.gallery} ${a}`}>
                        {data.images.map((img, i) => (
                            <div
                                key={i}
                                className={styles.galleryItem}
                                style={{ "--gi": i }}
                                onClick={() => setLightboxImg(img)}
                            >
                                <img src={img.src} alt={img.caption} className={styles.galleryImg} />
                                <div className={styles.galleryOverlay}>
                                    <span className={styles.galleryCaption}>{img.caption}</span>
                                    <svg className={styles.zoomIcon} viewBox="0 0 24 24" fill="none">
                                        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M11 8v6M8 11h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Highlights + Testimonial */}
                    <div className={`${styles.sidePanel} ${a}`}>
                        {/* Key Highlights */}
                        <div className={styles.hlCard}>
                            <div className={styles.hlCardShine} />
                            <div className={styles.hlCardAccent} />
                            <h3 className={styles.hlCardTitle}>Key Highlights</h3>
                            <ul className={styles.hlList}>
                                {data.highlights.map((h, i) => (
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
                        {data.testimonial && (
                            <div className={styles.testimonialCard}>
                                <div className={styles.hlCardShine} />
                                <svg className={styles.quoteIcon} viewBox="0 0 24 24" fill="none">
                                    <path d="M10 11H6c0-2.8 1.2-4 4-4V5c-4 0-6 2-6 6v6h6V11zM22 11h-4c0-2.8 1.2-4 4-4V5c-4 0-6 2-6 6v6h6V11z" fill="currentColor" opacity="0.15" />
                                </svg>
                                <p className={styles.testimonialQuote}>"{data.testimonial.quote}"</p>
                                <div className={styles.testimonialAuthorRow}>
                                    <div>
                                        <span className={styles.testimonialAuthor}>{data.testimonial.author}</span>
                                        <span className={styles.testimonialRole}>{data.testimonial.role}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {lightboxImg && (
                <div className={styles.lightbox} onClick={() => setLightboxImg(null)}>
                    <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <img src={lightboxImg.src} alt={lightboxImg.caption} className={styles.lightboxImg} />
                        <span className={styles.lightboxCaption}>{lightboxImg.caption}</span>
                        <button className={styles.lightboxClose} onClick={() => setLightboxImg(null)}>
                            <svg viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Highlights;
