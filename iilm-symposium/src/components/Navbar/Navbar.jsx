import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape" && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isMenuOpen]);

    // Close menu when clicking outside (optional – we have overlay, but this is extra safety)
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                isMenuOpen &&
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target)
            ) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <header
                className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
                role="banner"
            >
                <div className={styles.navbarContainer}>
                    {/* Logo and title */}
                    <div className={styles.logoWrapper}>
                        <a href="#home" className={styles.logoLink} aria-label="Home">
                            <img src={logo} alt="IILM Logo" className={styles.logo} />
                        </a>
                        <div className={styles.separator}></div>
                        <h2 className={styles.symposiumTitle}>
                            International Symposium <span className={styles.year}>2026</span>
                        </h2>
                    </div>

                    {/* Desktop navigation */}
                    <nav className={styles.desktopNav} aria-label="Main navigation">
                        <ul className={styles.navList}>
                            <li><a href="#home" className={styles.navLink}>Home</a></li>
                            <li><a href="#about" className={styles.navLink}>About</a></li>
                            <li><a href="#speakers" className={styles.navLink}>Speakers</a></li>
                            <li><a href="#papers" className={styles.navLink}>Call for Papers</a></li>
                            <li><a href="#registration" className={styles.navLink}>Registration</a></li>
                            <li><a href="#contact" className={styles.navLink}>Contact</a></li>
                        </ul>
                    </nav>

                    {/* Hamburger button (mobile) */}
                    <button
                        ref={buttonRef}
                        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            {/* Mobile slide-out menu */}
            <div
                id="mobile-menu"
                ref={menuRef}
                className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}
                aria-hidden={!isMenuOpen}
            >
                <nav aria-label="Mobile navigation">
                    <ul className={styles.mobileNavList}>
                        <li><a href="#home" className={styles.mobileNavLink} onClick={closeMenu}>Home</a></li>
                        <li><a href="#about" className={styles.mobileNavLink} onClick={closeMenu}>About</a></li>
                        <li><a href="#speakers" className={styles.mobileNavLink} onClick={closeMenu}>Speakers</a></li>
                        <li><a href="#papers" className={styles.mobileNavLink} onClick={closeMenu}>Call for Papers</a></li>
                        <li><a href="#registration" className={styles.mobileNavLink} onClick={closeMenu}>Registration</a></li>
                        <li><a href="#contact" className={styles.mobileNavLink} onClick={closeMenu}>Contact</a></li>
                    </ul>
                </nav>
            </div>

            {/* Overlay */}
            <div
                className={`${styles.overlay} ${isMenuOpen ? styles.open : ""}`}
                onClick={closeMenu}
                aria-hidden="true"
            />
        </>
    );
};

export default Navbar;