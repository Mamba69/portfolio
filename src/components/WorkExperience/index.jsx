import { motion } from "motion/react";
import "./WorkExperience.css";
import Magnetic from "../Magnetic";

function WorkExperience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const jobs = [
    {
      date: "May 2025 — Present",
      title: "Product Designer",
      company: "GrowthGear",
      link: "https://growthgear.in/",
      tags: ["MICRO SAAS", "AI", "GOVERNMENT"],
      description:
        "Owning end-to-end design across multiple products — from micro SaaS tools to government projects. Collaborating daily with developers through detailed design handoff and development briefs. Built Caudate AI, a proprietary software product, entirely from scratch.",
    },
    {
      date: "Sep 2024 - Jan 2025",
      title: "UI / UX Designer",
      company: "M5C Logistics",
      link: "https://www.m5clogs.com/",
      tags: ["SAAS", "REDESIGN", "B2B"],
      description:
        "Redesigned the website while preserving existing flow, developed components, and created both low and high-fidelity designs from comprehensive ground research.",
    },
    {
      date: "Aug 2024 - Oct 2024",
      title: "Product Designer",
      company: "Maker Sharks",
      link: "https://makersharks.ai/",
      tags: ["AI", "SAAS", "B2B", "B2C"],
      description:
        "Designed wireframes and high-fidelity prototypes for FLO and the dashboard. Optimized SOPs and revamped the entire product process alongside PMs and developers.",
    },
    {
      date: "Feb 2024 - Oct 2024",
      title: "User Experience Designer",
      company: "Dacoid Digital",
      link: "https://www.dacoid.com/",
      tags: ["AI", "AUTOMATION", "B2B"],
      description:
        "Collaborated with multiple companies on UX/UI. Redesigned multiple sites and improved flows. Led SETC questionnaire redesign using user insights.",
    },
    {
      date: "April 2023 - Jan 2024",
      title: "UI / UX Designer",
      company: "Right Choice AI",
      link: "https://rightchoice.ai/",
      tags: ["AI", "B2B", "SAAS"],
      description:
        "Created a seamless business listing website — UI screens, site maps, and thorough research from scratch. Rephrased existing flows and led the design team.",
    },
    {
      date: "April 2023 - Jun 2023",
      title: "UI / UX Designer",
      company: "KOSMC",
      link: "https://www.kosmc.ai/",
      tags: ["AI", "CREATORS", "B2B", "$100K RAISED"],
      description:
        "User flows and personas for different groups with minimal UI. Built a web app for creators to link all social handles. Collaborated with marketing and industry specialists.",
    },
  ];

  return (
    <section className="work-section" id="experience">
      <div className="work-container">
        <motion.div
          className="work-header"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="work-label">EXPERIENCE</div>
          <h2 className="work-heading">4+ years of work</h2>
        </motion.div>

        <div className="job-list">
          <div className="timeline-line"></div>
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              className="job-row"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="timeline-node"></div>
              <div className="job-date">{job.date}</div>
              <div className="job-content">
                <div className="job-title-row">
                  <h3 className="job-title">{job.title}</h3>
                  <Magnetic>
                    <a
                      href={job.link}
                      className="job-company"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{job.company}</span>
                      <svg
                        className="job-company-icon"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </a>
                  </Magnetic>
                </div>

                <div className="job-tags">
                  {job.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="job-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="job-description">{job.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
