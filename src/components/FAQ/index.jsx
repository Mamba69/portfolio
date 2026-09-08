import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./FAQ.css";

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on the scope and complexity. A typical UI/UX design project takes between 3 to 6 weeks from initial research to final handoff."
  },
  {
    question: "Do you work with startups or enterprises?",
    answer: "I work with both. Startups benefit from rapid prototyping and agile UX sprints, while enterprises utilize my experience in creating scalable design systems and conducting comprehensive UX audits."
  },
  {
    question: "How do you handle revisions?",
    answer: "I believe in a collaborative process. We have structured review checkpoints at every major phase (wireframes, visual design, handoff), allowing for feedback and necessary iterations before moving forward."
  },
  {
    question: "What deliverables will I receive?",
    answer: "You will receive a complete, organized Figma file containing all design assets, wireframes, high-fidelity screens, interactive prototypes, and a comprehensive design system/style guide for developer handoff."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
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
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-content">
          <motion.div 
            className="faq-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="faq-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              INQUIRY
            </div>
            <h2 className="faq-heading">
              Common <br /> questions<span className="faq-dot">.</span>
            </h2>
            <p className="faq-desc">
              Everything you need to know about the process,
              timelines, and deliverables.
            </p>
          </motion.div>

          <motion.div 
            className="faq-right"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="faq-accordion">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div 
                    key={index} 
                    className={`faq-item ${isOpen ? 'open' : ''}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="faq-question-container">
                      <h3 className="faq-question">{faq.question}</h3>
                      <div className={`faq-icon ${isOpen ? 'rotate' : ''}`}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div 
                          className="faq-answer-container"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <p className="faq-answer">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;