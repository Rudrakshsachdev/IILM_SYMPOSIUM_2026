import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Top Section */}
        <div className={styles.topSection}>

          {/* Brand */}
          <div className={styles.brandSection}>
            <img src={logo} alt="IILM Logo" className={styles.logo} />
            <p>
              International Symposium 2026 <br />
              Advancing Research & Global Innovation
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.linksSection}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#speakers">Speakers</a></li>
              <li><a href="#papers">Call for Papers</a></li>
              <li><a href="#registration">Registration</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactSection}>
            <h4>Contact</h4>
            <p>Email: symposium@iilm.edu</p>
            <p>Phone: +91 98765 43210</p>
            <p>Gurugram, Haryana, India</p>
          </div>

        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <p>
            © 2026 IILM University. All Rights Reserved.
          </p>
          <p>
            Designed & Developed by Organizing Committee
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;