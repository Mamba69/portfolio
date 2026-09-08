import React from "react";
import { motion } from "motion/react";
import Magnetic from "../Magnetic";
import "./Philosophy.css";

function Philosophy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="philosophy-section" id="philosophy">
      <motion.div
        className="philosophy-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="philosophy-header" variants={itemVariants}>
          <div className="philosophy-label">THE PHILOSOPHY</div>
          <h2 className="philosophy-heading">
            Engineering rigor <br />
            meets <span className="text-gray">deep UX craft.</span>
          </h2>
        </motion.div>

        <div className="philosophy-content">
          <motion.div className="philosophy-left" variants={itemVariants}>
            <p className="philosophy-description">
              I'm a product designer crafting intelligent systems and intuitive
              experiences across Edtech, SaaS, MicroSaaS, Logistics, Government.
            </p>
            <p className="philosophy-description">
              Great design doesn't just solve problems - it compounds revenue.
              I'm Shivam, a Product Designer with 4 years of experience. I
              design B2B, SaaS products, B2C, Logistics. I am a problem solver
              and make powerful systems feel simple, fast and practical. I
              collaborate with AI tools to work 10x faster, I see AI as
              leverage, not a competitor.
            </p>
          </motion.div>

          <motion.div className="philosophy-right" variants={itemVariants}>
            <blockquote className="philosophy-quote">
              "I believe that the best interfaces are those that disappear,
              leaving only the user and their goals in perfect harmony."
            </blockquote>

            <div className="philosophy-stats">
              <div className="stat-item">
                <div className="stat-value">4+2</div>
                <div className="stat-label">YEARS OF CRAFT</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">8+</div>
                <div className="stat-label">PRODUCT SHIPS</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">1</div>
                <div className="stat-label">GOVERNMENT PRODUCT</div>
              </div>
            </div>

            <Magnetic>
              <div className="phil-btn-wrapper">
                <div className="phil-btn-slider">
                  <div className="phil-btn-panel">
                    <span>Let's Connect &rarr;</span>
                  </div>
                  <div className="phil-btn-panel">
                    <a
                      href="mailto:shivamforsure20@gmail.com"
                      className="phil-inner-link"
                    >
                      Email
                    </a>
                    <span className="phil-inner-divider">/</span>
                    <a
                      href="https://www.linkedin.com/in/shivam-tiwari-b81820226/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="phil-inner-link"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div className="process-flow-section" variants={itemVariants}>
          <div className="process-flow-header">
            <h3 className="process-flow-title">Methodology</h3>
            <p className="process-flow-subtitle">
              This is my method for solving user needs by reducing friction and
              bounce rate while generating revenue.
            </p>
          </div>

          <motion.div
            className="process-steps"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {[
              {
                num: "01",
                name: "Problem",
                desc: "Identify root friction points",
              },
              {
                num: "02",
                name: "Hypothesis",
                desc: "Form data-driven strategies",
              },
              { num: "03", name: "Design", desc: "Craft intuitive solutions" },
              {
                num: "04",
                name: "Impact",
                desc: "Measure revenue & retention",
              },
            ].map((step, i, arr) => (
              <React.Fragment key={step.num}>
                <motion.div
                  className="process-step"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                  whileHover={{ y: -5 }}
                >
                  <div className="step-number">{step.num}</div>
                  <div className="step-content">
                    <div className="step-name">{step.name}</div>
                    <div className="step-desc">{step.desc}</div>
                  </div>
                </motion.div>
                {i < arr.length - 1 && (
                  <motion.div
                    className="step-connector"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { duration: 0.6 } },
                    }}
                  >
                    <div className="step-connector-dot"></div>
                    <div className="step-connector-dot"></div>
                    <div className="step-connector-dot"></div>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Philosophy;
