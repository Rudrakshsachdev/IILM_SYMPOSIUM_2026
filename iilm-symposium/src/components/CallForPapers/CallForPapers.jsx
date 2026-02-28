import React, { useEffect, useRef, useState } from "react";
import styles from "./CallForPapers.module.css";

/* ─── Track Data ─── */
const tracksPreview = [
  { id: 1, color: "#00C2FF", icon: "🧠", title: "AI, Machine Learning & Intelligent Systems" },
  { id: 2, color: "#7C4DFF", icon: "📊", title: "Information Systems, Data Analytics & Digital Transformation" },
  { id: 3, color: "#FF6B6B", icon: "🔗", title: "Complex Systems, Adaptive Computing & SoS Engineering" },
  { id: 4, color: "#00E676", icon: "🚀", title: "Emerging Technologies, Innovation & Cross-Disciplinary" },
  { id: 5, color: "#FFB300", icon: "💼", title: "Digital Transformation, Business Innovation & Tech Services" },
];

/* ─── Important Dates ─── */
const datesData = [
  { icon: "📝", label: "Abstract Submission", date: "30 June 2026", status: "upcoming" },
  { icon: "📄", label: "Full Paper Deadline", date: "15 July 2026", status: "upcoming" },
  { icon: "✅", label: "Acceptance Notice", date: "10 Aug 2026", status: "upcoming" },
  { icon: "🎓", label: "Symposium Day", date: "29th April 2026", status: "highlight" },
];

/* ─── Submission Guidelines ─── */
const guidelines = [
  { text: "Papers must be original and unpublished", highlight: false },
  { text: "Abstract should not exceed 300 words", highlight: false },
  { text: "Full paper length: 6–8 pages", highlight: false },
  { text: "Follow IEEE / APA formatting guidelines", highlight: true },
  { text: "All submissions undergo double-blind peer review", highlight: true },
];

const CallForPapers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  /* ── Intersection Observer ── */
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
    <section
      className={styles.cfpSection}
      id="papers"
      ref={sectionRef}
    >
      {/* ── Background overlays ── */}
      <div className={styles.bgNoise} aria-hidden="true" />
      <div className={styles.bgVignette} aria-hidden="true" />

      <div className={styles.container}>
        {/* ═══════ HEADER ═══════ */}
        <div className={`${styles.header} ${a}`}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Open for Submissions
          </span>
          <h2 className={styles.heading}>
            Call for{" "}
            <span className={styles.gradientText}>Papers</span>
          </h2>
          <p className={styles.subtitle}>
            The International Symposium 2026 invites original research papers,
            case studies, and innovative contributions from academicians,
            researchers, industry professionals, and scholars across the globe.
          </p>
          <div className={styles.headerDivider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerDiamond} />
            <span className={styles.dividerLine} />
          </div>
        </div>

        {/* ═══════ TRACKS MINI-GRID ═══════ */}
        <div className={`${styles.sectionLabel} ${a}`}>
          <svg className={styles.sectionLabelIcon} viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Research Tracks
        </div>
        <div className={styles.tracksGrid}>
          {tracksPreview.map((track, i) => (
            <a
              key={track.id}
              href="#tracks"
              className={`${styles.trackCard} ${a}`}
              style={{ "--index": i, "--track-color": track.color }}
            >
              <div className={styles.trackAccent} />
              <div className={styles.trackGlow} />
              <div className={styles.trackIconWrap}>
                <span className={styles.trackEmoji}>{track.icon}</span>
              </div>
              <div className={styles.trackInfo}>
                <span className={styles.trackNum}>Track {String(track.id).padStart(2, "0")}</span>
                <h4 className={styles.trackTitle}>{track.title}</h4>
              </div>
              <svg className={styles.trackArrow} viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>

        {/* ═══════ TWO-COL: GUIDELINES + PUBLICATION ═══════ */}
        <div className={styles.infoGrid}>
          {/* Guidelines Card */}
          <div className={`${styles.infoCard} ${a}`} style={{ "--delay": "0.15s" }}>
            <div className={styles.cardShine} />
            <div className={styles.cardAccent} />
            <div className={styles.cardHeader}>
              <div className={styles.cardIconWrap}>
                <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <div>
                <h3 className={styles.cardTitle}>Submission Guidelines</h3>
                <p className={styles.cardSubtitle}>Paper format & requirements</p>
              </div>
            </div>
            <ul className={styles.guidelineList}>
              {guidelines.map((g, i) => (
                <li key={i} className={`${styles.guidelineItem} ${g.highlight ? styles.guidelineHighlight : ""}`}>
                  <span className={styles.checkWrap}>
                    <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="none">
                      <path d="M16.5 5.5L8.25 14 3.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>{g.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Publication Card */}
          <div className={`${styles.infoCard} ${a}`} style={{ "--delay": "0.25s" }}>
            <div className={styles.cardShine} />
            <div className={styles.cardAccent} />
            <div className={styles.cardHeader}>
              <div className={styles.cardIconWrap}>
                <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none">
                  <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3 className={styles.cardTitle}>Publication Details</h3>
                <p className={styles.cardSubtitle}>Where your work gets published</p>
              </div>
            </div>
            <p className={styles.pubText}>
              Selected papers will be published in the symposium proceedings
              with <strong>ISBN</strong>. Outstanding papers may be considered
              for publication in <strong>indexed journals</strong> (subject to
              review).
            </p>
            <div className={styles.pubBadges}>
              <span className={styles.pubBadge}>
                <svg viewBox="0 0 20 20" fill="none" className={styles.badgeIcon}>
                  <path d="M10 2l2.5 5 5.5.8-4 3.9.9 5.5L10 14.7 5.1 17.2l.9-5.5-4-3.9L7.5 7z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                </svg>
                ISBN Proceedings
              </span>
              <span className={styles.pubBadge}>
                <svg viewBox="0 0 20 20" fill="none" className={styles.badgeIcon}>
                  <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
                Peer Reviewed
              </span>
              <span className={styles.pubBadge}>
                <svg viewBox="0 0 20 20" fill="none" className={styles.badgeIcon}>
                  <path d="M3 10h14M10 3v14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
                Indexed Journals
              </span>
            </div>
          </div>
        </div>

        {/* ═══════ IMPORTANT DATES ═══════ */}
        <div className={`${styles.datesSection} ${a}`}>
          <div className={styles.sectionLabel}>
            <svg className={styles.sectionLabelIcon} viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Important Dates
          </div>
          <div className={styles.datesGrid}>
            {datesData.map((d, i) => (
              <div
                key={i}
                className={`${styles.dateCard} ${d.status === "highlight" ? styles.dateHighlight : ""} ${a}`}
                style={{ "--index": i }}
              >
                <div className={styles.dateCardGlow} />
                <span className={styles.dateEmoji}>{d.icon}</span>
                <span className={styles.dateValue}>{d.date}</span>
                <span className={styles.dateLabel}>{d.label}</span>
                {d.status === "highlight" && <span className={styles.datePulse} />}
              </div>
            ))}
          </div>
        </div>

        {/* ═══════ CTA BUTTONS ═══════ */}
        <div className={`${styles.ctaSection} ${a}`}>
          <a href="#" className={styles.primaryBtn}>
            <span className={styles.btnContent}>
              <span>Submit Your Paper</span>
              <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
          <a href="#" className={styles.secondaryBtn}>
            <svg className={styles.btnIconLeft} viewBox="0 0 24 24" fill="none">
              <path d="M12 16V4M8 12l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 16v4h16v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Download Template</span>
          </a>
          <a href="#" className={styles.secondaryBtn}>
            <svg className={styles.btnIconLeft} viewBox="0 0 24 24" fill="none">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span>View Guidelines</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;