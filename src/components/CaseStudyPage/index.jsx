import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Magnetic from "../Magnetic";
import "./CaseStudyPage.css";

// Generic, data-driven case study "inside page" template.
// Every project page (Shifty, HCL, Student Analytics Dashboard, Ride On,
// Rapido) renders through this same component — only the `data` object
// changes. Pass `data.figmaLink` to show a "View on Figma" CTA next to the
// back link — omit it (as with live-deployed / NDA projects) to hide it.

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

function Section({ title, paragraph, bullets, image, imageAlt, reverse }) {
  return (
    <motion.div
      className={`cs-content-row ${reverse ? "cs-reverse" : ""}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="cs-content-text">
        <h2 className="cs-section-title">{title}</h2>
        {paragraph && <p className="cs-section-paragraph">{paragraph}</p>}
        {bullets && bullets.length > 0 && (
          <ul className="cs-bullet-list">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </div>
      {image && (
        <div className="cs-content-image">
          <img src={image} alt={imageAlt || title} loading="lazy" />
        </div>
      )}
    </motion.div>
  );
}

export default function CaseStudyPage({ data, prevProject, nextProject }) {
  const {
    title,
    tagline,
    heroImage,
    stats,
    meta, // { company, role, platform, duration, type }
    challenge,
    process, // { paragraph, tools, features, workflow }
    solution,
    challenges, // design/process challenges section
    result,
    closingImage,
    figmaLink, // optional — only shown when provided
  } = data;

  return (
    <section className="case-study-page">
      <div className="cs-container">
        <div className="cs-top-row">
          <Magnetic>
            <Link to="/#work" className="cs-back-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to case studies
            </Link>
          </Magnetic>

          {figmaLink && (
            <Magnetic>
              <a
                href={figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cs-figma-link"
              >
                <svg width="16" height="16" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
                  <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#0ACF83" />
                  <path d="M19 0v19H9.5a9.5 9.5 0 0 1 0-19H19z" fill="#FF7262" />
                  <path d="M38 9.5a9.5 9.5 0 0 1-9.5 9.5H19V0h9.5A9.5 9.5 0 0 1 38 9.5z" fill="#F24E1E" />
                  <path d="M38 28.5a9.5 9.5 0 0 1-9.5 9.5H19V19h9.5a9.5 9.5 0 0 1 9.5 9.5z" fill="#A259FF" />
                </svg>
                View on Figma
              </a>
            </Magnetic>
          )}
        </div>

        <motion.h1
          className="cs-title"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {title}
        </motion.h1>

        <div className="cs-hero-row">
          <motion.div
            className="cs-hero-image"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <img src={heroImage} alt={title} />
          </motion.div>

          <motion.div
            className="cs-hero-side"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <p className="cs-hero-tagline">{tagline}</p>
            <div className="cs-stats">
              {stats.map((s, i) => (
                <div className="cs-stat" key={i}>
                  <div className="cs-stat-value">{s.value}</div>
                  <div className="cs-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="cs-divider-bar"></div>

      <div className="cs-container cs-body">
        <div className="cs-meta-sidebar">
          {meta.map((m, i) => (
            <div className="cs-meta-item" key={i}>
              <div className="cs-meta-label">{m.label}</div>
              <div className="cs-meta-value">{m.value}</div>
            </div>
          ))}
        </div>

        <div className="cs-main-content">
          <Section
            title="Challenge"
            paragraph={challenge.paragraph}
            bullets={challenge.bullets}
            image={challenge.image}
            imageAlt="Challenge context screen"
          />

          <motion.div
            className="cs-content-row"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className={`cs-content-text ${process.image ? "" : "cs-full"}`}>
              <h2 className="cs-section-title">Design Process</h2>
              <p className="cs-section-paragraph">{process.paragraph}</p>

              <div className="cs-workflow">
                {process.workflow.map((step, i) => (
                  <span className="cs-workflow-step" key={i}>
                    {step}
                    {i < process.workflow.length - 1 && (
                      <span className="cs-workflow-arrow">→</span>
                    )}
                  </span>
                ))}
              </div>

              <div className="cs-process-columns">
                <div>
                  <div className="cs-mini-label">Tools Used</div>
                  <ul className="cs-bullet-list">
                    {process.tools.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="cs-mini-label">Key Features</div>
                  <ul className="cs-bullet-list">
                    {process.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {process.image && (
              <div className="cs-content-image">
                <img src={process.image} alt="Design process artifact" loading="lazy" />
              </div>
            )}
          </motion.div>

          <Section
            title="Solution"
            paragraph={solution.paragraph}
            bullets={solution.bullets}
            image={solution.image}
            imageAlt="Solution screen"
            reverse
          />

          {solution.imageSecondary && (
            <motion.div
              className="cs-image-pair"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <img src={solution.image} alt="Solution screen A" />
              <img src={solution.imageSecondary} alt="Solution screen B" />
            </motion.div>
          )}

          <Section
            title="Challenges"
            paragraph={challenges.paragraph}
            bullets={challenges.bullets}
          />

          <Section
            title="Final Result"
            paragraph={result.paragraph}
            bullets={result.bullets}
            image={result.image}
            imageAlt="Final result screen"
            reverse
          />
        </div>
      </div>

      {closingImage && (
        <div className="cs-closing-image">
          <img src={closingImage} alt={`${title} closing screen`} />
        </div>
      )}

      <div className="cs-nav-row">
        {prevProject ? (
          <Link to={prevProject.link} className="cs-nav-link cs-nav-prev">
            ← {prevProject.title}
          </Link>
        ) : <span />}
        {nextProject ? (
          <Link to={nextProject.link} className="cs-nav-link cs-nav-next">
            {nextProject.title} →
          </Link>
        ) : <span />}
      </div>
    </section>
  );
}