import React from "react";
import styles from "./VenueContact.module.css";

const VenueContact = () => {
  return (
    <section className={styles.venueSection} id="venue">
      <div className={styles.container}>
        <h2 className={styles.heading}>Venue & Location</h2>
        <p className={styles.subHeading}>
          Join us at IILM University, Gurugram for the International Symposium 2026
        </p>

        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.526164357399!2d77.10097987577782!3d28.433551175773967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f7116a17591%3A0xa2f1868ef64f51ca!2sIILM%20University%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1771781003327!5m2!1sen!2sin"
            className={styles.map}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="IILM University Gurugram Location"
          ></iframe>

          <div className={styles.overlayCard}>
            <h3>IILM University</h3>
            <p>Plot No. 69-71, Golf Course Road</p>
            <p>Sector 53, Gurugram</p>
            <p>Haryana 122003, India</p>

            <a
              href="https://www.google.com/maps/place/IILM+University,+Gurugram/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directionBtn}
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueContact;