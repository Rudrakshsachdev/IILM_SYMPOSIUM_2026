import React, { useEffect, useRef, useState } from "react";
import styles from "./ImportantDates.module.css";

const ImportantDates = () => {
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
            { threshold: 0.1, rootMargin: "0px" }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        // Top-Notch Kinetic Tracking Engine
        let rafId = null;
        let lastX = 0;
        let lastY = 0;
        const THRESHOLD = 0.001;

        const handleMouseMove = (e) => {
            if (!sectionRef.current) return;

            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            // Raw normalized coordinates (-1 to 1)
            const x = (clientX / innerWidth - 0.5) * 2;
            const y = (clientY / innerHeight - 0.5) * 2;

            if (Math.abs(x - lastX) > THRESHOLD || Math.abs(y - lastY) > THRESHOLD) {
                lastX = x;
                lastY = y;

                if (rafId) cancelAnimationFrame(rafId);
                rafId = requestAnimationFrame(() => {
                    sectionRef.current.style.setProperty('--axis-mouse-x', x.toFixed(4));
                    sectionRef.current.style.setProperty('--axis-mouse-y', y.toFixed(4));
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
            window.removeEventListener("mousemove", handleMouseMove);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    const timelineData = [
        { id: "01", date: "30 June 2026", title: "Abstract Submission", desc: "Scientific abstract deadline", side: "left" },
        { id: "02", date: "15 July 2026", title: "Full Paper", desc: "Manuscript finalization", side: "right" },
        { id: "03", date: "10 Aug 2026", title: "Acceptance Notice", desc: "Peer-review results", side: "left" },
        { id: "04", date: "25 Aug 2026", title: "Final Registry", desc: "Registration confirmation", side: "right" },
        { id: "05", date: "12–13 Sept", title: "Symposium Day", desc: "Global academic event", side: "left" },
    ];

    return (
        <section className={styles.timelineSection} id="dates" ref={sectionRef}>
            {/* Advanced Cinematic Background */}
            <div className={styles.noiseOverlay}></div>
            <div className={styles.dataGrid}></div>

            <div className={styles.movingFlares}>
                <div className={styles.flare1}></div>
                <div className={styles.flare2}></div>
            </div>

            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={`${styles.eyebrow} ${isVisible ? styles.animate : ""}`}>Roadmap</p>
                    <h2 className={`${styles.title} ${isVisible ? styles.animate : ""}`}>
                        Critical <span className={styles.accentText}>Timeline</span>
                    </h2>
                    <div className={styles.headerDivider}></div>
                </div>

                <div className={styles.kineticAxis}>
                    {/* The 3D Digital Engine Core (Central Line) */}
                    <div className={styles.centralBeam}>
                        <div className={styles.beamInner}></div>
                        <div className={styles.beamGlow}></div>
                    </div>

                    {timelineData.map((item, index) => (
                        <div
                            key={item.id}
                            className={`${styles.timelineNode} ${styles[item.side]} ${isVisible ? styles.animate : ""}`}
                            style={{ '--index': index }}
                        >
                            {/* HUD Connector Reticle */}
                            <div className={styles.reticle}>
                                <div className={styles.reticleCircle}></div>
                                <div className={styles.reticleScanner}></div>
                            </div>

                            {/* The 3D Kinetic Card */}
                            <div className={styles.cardWrapper}>
                                <div className={styles.card3D}>
                                    <div className={styles.cardGlow}></div>

                                    {/* Parallax Layer 1: Backdrop & HUD */}
                                    <div className={styles.layer1}>
                                        <div className={styles.hudSerial}>ID_S/{item.id}_SYS</div>
                                        <div className={styles.hudBrackets}></div>
                                    </div>

                                    {/* Parallax Layer 2: Main Content */}
                                    <div className={styles.layer2}>
                                        <div className={styles.dateBadge}>{item.date}</div>
                                        <h3 className={styles.itemTitle}>{item.title}</h3>
                                        <p className={styles.itemDesc}>{item.desc}</p>
                                    </div>

                                    {/* Parallax Layer 3: Floating Details */}
                                    <div className={styles.layer3}>
                                        <div className={styles.dataPoint}></div>
                                        <div className={styles.scannedLine}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Technical Footer Markers */}
            <div className={styles.techMarkers}>
                <span>AXIS_COORD: VAR(--MOUSE-X)</span>
                <span>SYSTEM_READY: 2026_CORE</span>
            </div>
        </section>
    );
};

export default ImportantDates;
