import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Magnetic from "../Magnetic";
import "./Contact.css";

function Contact({ onHireClick }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-card"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="contact-heading">
            Let's build the
            <br />
            next big thing.
          </h2>

          <p className="contact-desc">
            Whether you're a startup looking to launch or an enterprise aiming
            to scale, I'm here to help you design products that matter.
          </p>

          <div className="contact-actions">
            <Magnetic>
              <button className="contact-btn-primary" onClick={onHireClick}>
                <span>Get in Touch</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </Magnetic>

            <Magnetic>
              <Link
                to="/cv"
                className="contact-btn-secondary"
              >
                View CV
              </Link>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
