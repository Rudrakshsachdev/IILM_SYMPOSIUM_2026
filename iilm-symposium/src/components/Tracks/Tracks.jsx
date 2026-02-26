import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./Tracks.module.css";

/* ─── Track Data ─── */
const tracksData = [
    {
        id: 1,
        color: "#00C2FF",
        icon: "🧠",
        title: "Artificial Intelligence, Machine Learning & Intelligent Systems",
        tag: "AI-Focused Track",
        description:
            "This track brings together researchers, students, and practitioners working on the latest advancements in AI and ML. It aims to explore intelligent solutions across domains and promote interdisciplinary applications of AI.",
        subThemes: [
            "Deep Learning Architectures (CNN, RNN, Transformers)",
            "Generative AI, LLMs, and Foundation Models",
            "Natural Language Processing, Speech & Emotion Recognition",
            "Computer Vision and Image Processing",
            "Reinforcement Learning, Multi-Agent Systems",
            "Explainable AI (XAI), Ethical AI, Trustworthy AI",
            "AI for Healthcare, Education, Agriculture, Smart Cities",
            "Cognitive Computing & Human–AI Interaction",
        ],
        outcomes: [
            "AI research collaborations between institutions",
            "Development of AI-driven student projects",
            "Book chapters highlighting applied and theoretical AI research",
        ],
    },
    {
        id: 2,
        color: "#7C4DFF",
        icon: "📊",
        title: "Information Systems, Data Analytics & Digital Transformation",
        tag: "Information Systems Track",
        description:
            "This track focuses on the design, development, and application of information systems to support decision-making, digital governance, and enterprise solutions. It emphasizes transforming organizations through data-driven strategies.",
        subThemes: [
            "Information System Design & Enterprise Architecture",
            "Cloud Computing, Serverless Computing & Distributed IS",
            "Big Data Analytics, Data Warehousing & Business Intelligence",
            "Digital Transformation Strategies for Industry & Education",
            "Smart Mobility, Smart Governance & e-Services",
            "Human–Centered Information Systems",
            "IS Security, Risk Management & Cyber Ethics",
            "Data Quality, Storage Systems & Emerging IS Frameworks",
        ],
        outcomes: [
            "Collaborative IS research and digital innovation",
            "Real-world student case studies and IS analytics projects",
            "Joint book chapters focusing on IS frameworks & applications",
        ],
    },
    {
        id: 3,
        color: "#FF6B6B",
        icon: "🔗",
        title: "Complex Systems, Adaptive Computing & System-of-Systems Engineering",
        tag: "Complex Systems–Focused Track",
        description:
            "This track focuses on the theory, modeling, analysis, and application of complex systems arising from the interaction of multiple intelligent, adaptive, and interconnected components. It addresses computational, mathematical, and system-level approaches for understanding emergent behavior, non-linearity, scalability, and self-organization.",
        subThemes: [
            "Foundations of Complex Systems and Systems Thinking",
            "Modeling and Simulation of Complex Adaptive Systems",
            "Multi-Agent Systems and Distributed Intelligence",
            "Emergent Behavior, Self-Organization, and Nonlinear Dynamics",
            "Network Science, Graph Models, and Large-Scale System Analysis",
            "Cyber-Physical Systems and System-of-Systems Architectures",
            "Complexity in Socio-Technical and Organizational Systems",
            "Resilience, Robustness, and Fault Tolerance in Complex Systems",
            "Data-Driven and AI-Based Approaches for Complex System Analysis",
            "Complexity-Aware Decision Support and Control Systems",
        ],
        outcomes: [
            "Interdisciplinary research collaborations focused on complex systems modeling and analysis",
            "Development of computational frameworks and simulation models for real-world complex systems",
        ],
    },
    {
        id: 4,
        color: "#00E676",
        icon: "🚀",
        title: "Emerging Technologies, Innovation, and Cross-Disciplinary Applications",
        tag: "Open, Flexible Track for Diverse Participation",
        description:
            "This track offers space for futuristic and interdisciplinary topics, encouraging exploration of cutting-edge technologies and their impact on society, industry, and global development.",
        subThemes: [
            "Automation, Robotics, and Autonomous Systems",
            "Digital Twin Technology & Simulation Modelling",
            "Extended Reality (AR/VR/MR)",
            "Green Computing, Sustainable & Energy-Aware Technologies",
            "FinTech, HealthTech, EduTech & Smart Industry Solutions",
            "Human–Computer Interaction (HCI) & UX Design",
            "Quantum Computing & Hybrid HPC-Quantum Systems",
            "Technology Policy, Digital Ethics & Global Tech Standards",
        ],
        outcomes: [
            "Broader participation across departments and domains",
            "Future-oriented research collaborations",
            "A diverse set of book chapters appealing to global publishers",
        ],
    },
    {
        id: 5,
        color: "#FFB300",
        icon: "💼",
        title: "Applied Digital Transformation, Business Innovation & Technology-Driven Services",
        tag: "Transformation, Business Tech & Socio-Technical Systems Track",
        description:
            "This track explores how digital technologies transform industries, business models, and public services, bridging industry needs and academic research in the digital economy.",
        subThemes: [
            "Digital Transformation in Industry, Education, Public Sector",
            "Smart Logistics & Supply Chain Digitization",
            "Digital Marketing, e-Commerce, Omnichannel Strategies",
            "Enterprise Digitalization & Business Process Automation",
            "Industry 4.0 / 5.0 Technologies",
            "CRM, ERP, SCM & Business Information Systems",
            "Technology Adoption, Innovation Management & Digital Strategy",
            "Data-Driven Decision Making & Predictive Business Analytics",
            "E-Business Models, Digital Entrepreneurship & Start-ups",
            "Socio-Technical Systems & Organizational Change",
        ],
        outcomes: [
            "Broader participation across departments and domains",
            "Future-oriented research collaborations",
            "A diverse set of book chapters appealing to global publishers",
        ],
    },
];

/* ─── Animated Network-Node Canvas ─── */
const NetworkCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let animId;
        let nodes = [];
        const NODE_COUNT = 60;

        const resize = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };

        const init = () => {
            resize();
            nodes = Array.from({ length: NODE_COUNT }, () => ({
                x: Math.random() * canvas.offsetWidth,
                y: Math.random() * canvas.offsetHeight,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                r: Math.random() * 2 + 1,
            }));
        };

        const draw = () => {
            const w = canvas.offsetWidth;
            const h = canvas.offsetHeight;
            ctx.clearRect(0, 0, w, h);

            // Move nodes
            nodes.forEach((n) => {
                n.x += n.vx;
                n.y += n.vy;
                if (n.x < 0 || n.x > w) n.vx *= -1;
                if (n.y < 0 || n.y > h) n.vy *= -1;
            });

            // Draw connections
            const CONNECT_DIST = 140;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < CONNECT_DIST) {
                        const alpha = (1 - dist / CONNECT_DIST) * 0.12;
                        ctx.strokeStyle = `rgba(196, 30, 58, ${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes
            nodes.forEach((n) => {
                ctx.fillStyle = "rgba(196, 30, 58, 0.4)";
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fill();
            });

            animId = requestAnimationFrame(draw);
        };

        init();
        draw();

        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animId);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.networkCanvas} />;
};

/* ─── Main Component ─── */
const Tracks = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [expandedId, setExpandedId] = useState(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.08 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const toggle = useCallback(
        (id) => setExpandedId((prev) => (prev === id ? null : id)),
        []
    );

    return (
        <section className={styles.tracks} id="tracks" ref={sectionRef}>
            {/* Background layers */}
            <NetworkCanvas />
            <div className={styles.bgNoise} aria-hidden="true" />
            <div className={styles.bgVignette} aria-hidden="true" />

            <div className={styles.container}>
                {/* Header */}
                <div className={`${styles.header} ${isVisible ? styles.animate : ""}`}>
                    <span className={styles.eyebrow}>Research Tracks</span>
                    <h2 className={styles.heading}>
                        Symposium{" "}
                        <span className={styles.gradientText}>Tracks</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Five focused research tracks spanning AI & intelligent systems,
                        information systems, complex systems engineering, emerging
                        technologies, and digital transformation.
                    </p>
                </div>

                {/* Track Cards */}
                <div className={styles.trackList}>
                    {tracksData.map((track, index) => {
                        const isOpen = expandedId === track.id;
                        return (
                            <div
                                key={track.id}
                                className={`${styles.trackCard} ${isVisible ? styles.animate : ""} ${isOpen ? styles.expanded : ""}`}
                                style={{
                                    "--index": index,
                                    "--track-color": track.color,
                                }}
                            >
                                {/* Accent stripe */}
                                <div className={styles.trackAccent} />

                                {/* Clickable Header */}
                                <button
                                    className={styles.trackHeader}
                                    onClick={() => toggle(track.id)}
                                    aria-expanded={isOpen}
                                >
                                    <div className={styles.trackNumberWrap}>
                                        <span className={styles.trackNumber}>{track.id}</span>
                                    </div>
                                    <div className={styles.trackMeta}>
                                        <span className={styles.trackTag}>{track.tag}</span>
                                        <h3 className={styles.trackTitle}>{track.title}</h3>
                                    </div>
                                    <div className={styles.trackIcon}>
                                        <span className={styles.emoji}>{track.icon}</span>
                                    </div>
                                    <svg
                                        className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M6 9l6 6 6-6"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>

                                {/* Expandable Body */}
                                <div
                                    className={`${styles.trackBody} ${isOpen ? styles.bodyOpen : ""}`}
                                >
                                    <div className={styles.bodyInner}>
                                        <p className={styles.trackDesc}>{track.description}</p>

                                        <div className={styles.bodyColumns}>
                                            {/* Sub-Themes */}
                                            <div className={styles.bodyColumn}>
                                                <h4 className={styles.bodyColumnTitle}>
                                                    <svg viewBox="0 0 20 20" className={styles.columnIcon}>
                                                        <circle
                                                            cx="10"
                                                            cy="10"
                                                            r="8"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            fill="none"
                                                        />
                                                        <path
                                                            d="M10 6v4l3 2"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            fill="none"
                                                        />
                                                    </svg>
                                                    Sub-Themes
                                                </h4>
                                                <ul className={styles.themeList}>
                                                    {track.subThemes.map((t, i) => (
                                                        <li key={i} className={styles.themeItem}>
                                                            <span className={styles.themeDot} />
                                                            {t}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Expected Outcomes */}
                                            <div className={styles.bodyColumn}>
                                                <h4 className={styles.bodyColumnTitle}>
                                                    <svg viewBox="0 0 20 20" className={styles.columnIcon}>
                                                        <path
                                                            d="M16 6L8.5 14 4 9.5"
                                                            stroke="currentColor"
                                                            strokeWidth="1.8"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            fill="none"
                                                        />
                                                    </svg>
                                                    Expected Outcomes
                                                </h4>
                                                <ul className={styles.outcomeList}>
                                                    {track.outcomes.map((o, i) => (
                                                        <li key={i} className={styles.outcomeItem}>
                                                            <span className={styles.outcomeBullet}>→</span>
                                                            {o}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Note */}
                <div className={`${styles.bottomNote} ${isVisible ? styles.animate : ""}`}>
                    <p>
                        While the symposium will accommodate a broad range of research themes
                        across multiple tracks, the final book proposals will be more focused.
                        We will selectively narrow down the topics for each edited volume to
                        ensure <strong>thematic alignment</strong>,{" "}
                        <strong>academic depth</strong>, and a structured contribution roadmap
                        that meets the standards of <strong>international publishers</strong>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Tracks;
