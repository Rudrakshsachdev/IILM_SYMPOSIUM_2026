import React, { useEffect, useRef, useState } from "react";
import styles from "./ContactUs.module.css";

const WHATSAPP_NUMBER = "919876543210"; // ← Replace with actual WhatsApp number (country code + number, no + or spaces)

const ContactUs = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const subject = document.getElementById("contact-subject").value.trim();
        const message = document.getElementById("contact-message").value.trim();

        const text = [
            `*New Inquiry — IILM Symposium 2026*`,
            ``,
            `*Name:* ${name}`,
            `*Email:* ${email}`,
            subject ? `*Subject:* ${subject}` : null,
            ``,
            `*Message:*`,
            message,
        ].filter(Boolean).join("%0A");

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    };

    return (
        <section className={styles.contactSection} id="contact" ref={sectionRef}>
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
                        Get in Touch
                    </span>
                    <h2 className={styles.heading}>
                        Contact{" "}
                        <span className={styles.gradientText}>Us</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Have questions about the symposium? We'd love to hear from you.
                        Reach out through any of the channels below.
                    </p>
                </div>

                {/* ═══════ CONTACT GRID ═══════ */}
                <div className={styles.contactGrid}>
                    {/* Email Card */}
                    <div className={`${styles.contactCard} ${a}`} style={{ "--index": 0 }}>
                        <div className={styles.cardShine} />
                        <div className={styles.cardAccent} />
                        <div className={styles.cardIconWrap}>
                            <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3 className={styles.cardTitle}>Email</h3>
                        <p className={styles.cardText}>For general inquiries and paper submissions</p>
                        <a href="mailto:symposium@iilm.edu" className={styles.cardLink}>
                            symposium@iilm.edu
                        </a>
                    </div>

                    {/* Phone Card */}
                    <div className={`${styles.contactCard} ${a}`} style={{ "--index": 1 }}>
                        <div className={styles.cardShine} />
                        <div className={styles.cardAccent} />
                        <div className={styles.cardIconWrap}>
                            <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </div>
                        <h3 className={styles.cardTitle}>Phone</h3>
                        <p className={styles.cardText}>Available Monday to Friday, 9 AM – 5 PM IST</p>
                        <a href="tel:+919876543210" className={styles.cardLink}>
                            +91 98765 43210
                        </a>
                    </div>

                    {/* Location Card */}
                    <div className={`${styles.contactCard} ${a}`} style={{ "--index": 2 }}>
                        <div className={styles.cardShine} />
                        <div className={styles.cardAccent} />
                        <div className={styles.cardIconWrap}>
                            <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" />
                                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </div>
                        <h3 className={styles.cardTitle}>Address</h3>
                        <p className={styles.cardText}>IILM University, Plot No. 69-71, Golf Course Road</p>
                        <span className={styles.cardLink}>Sector 53, Gurugram 122003</span>
                    </div>
                </div>

                {/* ═══════ CONTACT FORM ═══════ */}
                <div className={`${styles.formSection} ${a}`}>
                    <div className={styles.formCard}>
                        <div className={styles.formShine} />
                        <div className={styles.formAccent} />
                        <div className={styles.formHeader}>
                            <h3 className={styles.formTitle}>Send us a Message</h3>
                            <p className={styles.formSubtitle}>Fill out the form and we'll respond within 24 hours</p>
                        </div>

                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.formRow}>
                                <div className={styles.inputGroup}>
                                    <label className={styles.inputLabel} htmlFor="contact-name">Full Name</label>
                                    <input
                                        type="text"
                                        id="contact-name"
                                        className={styles.input}
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label className={styles.inputLabel} htmlFor="contact-email">Email Address</label>
                                    <input
                                        type="email"
                                        id="contact-email"
                                        className={styles.input}
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.inputLabel} htmlFor="contact-subject">Subject</label>
                                <input
                                    type="text"
                                    id="contact-subject"
                                    className={styles.input}
                                    placeholder="Paper submission inquiry"
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.inputLabel} htmlFor="contact-message">Message</label>
                                <textarea
                                    id="contact-message"
                                    className={`${styles.input} ${styles.textarea}`}
                                    placeholder="Your message..."
                                    rows="5"
                                    required
                                />
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                <span>Send Message</span>
                                <svg className={styles.submitIcon} viewBox="0 0 24 24" fill="none">
                                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
