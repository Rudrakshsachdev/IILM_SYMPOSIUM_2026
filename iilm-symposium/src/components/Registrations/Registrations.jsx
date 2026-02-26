import React, { useEffect, useRef, useState } from "react";
import styles from "./Registrations.module.css";

/* ─── Registration Tiers ─── */
const tiers = [
  {
    id: "student",
    icon: "🎓",
    title: "Students",
    price: "₹1,500",
    period: "per participant",
    features: [
      "Access to all symposium sessions",
      "Participation certificate",
      "Conference materials & kit",
      "Networking opportunities",
    ],
    popular: false,
  },
  {
    id: "academic",
    icon: "💼",
    title: "Academicians & Professionals",
    price: "₹3,000",
    period: "per participant",
    features: [
      "Access to all symposium sessions",
      "Symposium proceedings with ISBN",
      "Networking & collaboration access",
      "Conference materials & kit",
      "Publication opportunity",
    ],
    popular: true,
  },
  {
    id: "international",
    icon: "🌍",
    title: "International Participants",
    price: "$100",
    period: "per participant",
    features: [
      "Full global participation access",
      "Symposium proceedings with ISBN",
      "Publication & indexing access",
      "Digital conference materials",
      "International collaboration network",
    ],
    popular: false,
  },
];

/* ─── Payment Details ─── */
const paymentInfo = [
  { label: "Bank Name", value: "XYZ Bank" },
  { label: "Account Name", value: "IILM University Symposium" },
  { label: "Account Number", value: "1234567890" },
  { label: "IFSC Code", value: "XYZB0001234" },
];

const Registrations = () => {
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
    <section className={styles.regSection} id="registration" ref={sectionRef}>
      {/* ── Background ── */}
      <div className={styles.ambientOrb1} aria-hidden="true" />
      <div className={styles.ambientOrb2} aria-hidden="true" />
      <div className={styles.bgNoise} aria-hidden="true" />
      <div className={styles.bgVignette} aria-hidden="true" />

      <div className={styles.container}>
        {/* ═══════ HEADER ═══════ */}
        <div className={`${styles.header} ${a}`}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Registration Open
          </span>
          <h2 className={styles.heading}>
            Registration{" "}
            <span className={styles.gradientText}>Details</span>
          </h2>
          <p className={styles.subtitle}>
            Secure your spot at the International Symposium 2026.
            Choose the plan that best suits your participation.
          </p>
        </div>

        {/* ═══════ PRICING CARDS ═══════ */}
        <div className={styles.pricingGrid}>
          {tiers.map((tier, i) => (
            <div
              key={tier.id}
              className={`${styles.pricingCard} ${tier.popular ? styles.popularCard : ""} ${a}`}
              style={{ "--index": i }}
            >
              {tier.popular && (
                <div className={styles.popularBadge}>Most Popular</div>
              )}
              <div className={styles.cardShine} />

              <div className={styles.cardTop}>
                <div className={styles.tierIconWrap}>
                  <span className={styles.tierEmoji}>{tier.icon}</span>
                </div>
                <h3 className={styles.tierTitle}>{tier.title}</h3>
              </div>

              <div className={styles.priceBlock}>
                <span className={styles.priceValue}>{tier.price}</span>
                <span className={styles.pricePeriod}>{tier.period}</span>
              </div>

              <div className={styles.divider} />

              <ul className={styles.featureList}>
                {tier.features.map((f, j) => (
                  <li key={j} className={styles.featureItem}>
                    <svg className={styles.featureCheck} viewBox="0 0 20 20" fill="none">
                      <path d="M16.5 5.5L8.25 14 3.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#" className={tier.popular ? styles.cardBtnPrimary : styles.cardBtnSecondary}>
                <span>Register Now</span>
                <svg className={styles.cardBtnIcon} viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* ═══════ PAYMENT INFO ═══════ */}
        <div className={`${styles.paymentSection} ${a}`}>
          <div className={styles.paymentCard}>
            <div className={styles.paymentShine} />
            <div className={styles.paymentAccent} />
            <div className={styles.paymentHeader}>
              <div className={styles.paymentIconWrap}>
                <svg className={styles.paymentIcon} viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M2 10h20" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <div>
                <h3 className={styles.paymentTitle}>Payment Information</h3>
                <p className={styles.paymentSubtitle}>Bank transfer details</p>
              </div>
            </div>
            <div className={styles.paymentGrid}>
              {paymentInfo.map((item, i) => (
                <div key={i} className={styles.paymentItem}>
                  <span className={styles.paymentLabel}>{item.label}</span>
                  <span className={styles.paymentValue}>{item.value}</span>
                </div>
              ))}
            </div>
            <p className={styles.paymentNote}>
              Please share the payment receipt via email to confirm your registration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registrations;