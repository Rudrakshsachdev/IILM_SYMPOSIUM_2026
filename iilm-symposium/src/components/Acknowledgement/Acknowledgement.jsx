import React, { useEffect, useRef, useState } from "react";
import styles from "./Acknowledgement.module.css";

/* Microsoft logo — simple wordmark SVG (no external dep) */
const MicrosoftLogo = () => (
    <svg
        className={styles.msLogo}
        viewBox="0 0 23 23"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Microsoft logo"
    >
        <rect x="1" y="1" width="10" height="10" fill="#F25022" />
        <rect x="12" y="1" width="10" height="10" fill="#7FBA00" />
        <rect x="1" y="12" width="10" height="10" fill="#00A4EF" />
        <rect x="12" y="12" width="10" height="10" fill="#FFB900" />
    </svg>
);

const Acknowledgement = () => {
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
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section
            className={styles.ack}
            id="acknowledgement"
            ref={sectionRef}
            aria-label="Acknowledgement"
        >
            {/* Decorative blobs */}
            <div className={styles.blob1} aria-hidden="true" />
            <div className={styles.blob2} aria-hidden="true" />

            <div className={styles.container}>
                {/* Eyebrow */}
                <div
                    className={`${styles.header} ${isVisible ? styles.animate : ""}`}
                >
                    <span className={styles.eyebrow}>Acknowledgement</span>
                </div>

                {/* Card */}
                <div
                    className={`${styles.card} ${isVisible ? styles.animate : ""}`}
                >
                    {/* Glow accent line */}
                    <div className={styles.cardGlow} aria-hidden="true" />

                    {/* Brand row */}
                    <div className={styles.brandRow}>
                        <div className={styles.logoWrap}>
                            <MicrosoftLogo />
                        </div>
                        <div className={styles.brandText}>
                            <span className={styles.brandName}>Microsoft CMT</span>
                            <span className={styles.brandSub}>Peer-Review Management Service</span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className={styles.divider} aria-hidden="true" />

                    {/* Quote body */}
                    <blockquote className={styles.quote}>
                        <span className={styles.quoteIcon} aria-hidden="true">&ldquo;</span>
                        <p className={styles.quoteText}>
                            The Microsoft CMT service was used for managing the peer-reviewing
                            process for this conference. This service was provided for free by
                            Microsoft and they bore all expenses, including costs for
                            Azure cloud services as well as for
                            software development and support.
                        </p>
                    </blockquote>

                    {/* Azure badge */}
                    <div className={styles.badgeRow}>
                        <span className={styles.badge}>
                            <svg viewBox="0 0 16 16" fill="none" className={styles.badgeIcon} aria-hidden="true">
                                <path d="M8.5 1.5L13.5 10.5H3.5L8.5 1.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                                <path d="M2 13.5H14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                            </svg>
                            Powered by Microsoft Azure
                        </span>
                        <span className={styles.badge}>
                            <svg viewBox="0 0 16 16" fill="none" className={styles.badgeIcon} aria-hidden="true">
                                <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.2" />
                                <path d="M8 5.5v3l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Free of Charge
                        </span>
                        <span className={styles.badge}>
                            <svg viewBox="0 0 16 16" fill="none" className={styles.badgeIcon} aria-hidden="true">
                                <path d="M13 5L6.5 11.5L3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Peer-Review Verified
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Acknowledgement;
