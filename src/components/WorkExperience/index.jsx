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
        "Owned end-to-end product design across multiple products, from micro-SaaS tools to government platforms. Worked closely with founders and developers to translate complex workflows into scalable experiences, from early concepts and interaction design to detailed handoffs and development. Built Caudate AI from the ground up, shaping its product experience, design system, and core workflows.",
    },
    {
      date: "Sep 2024 - Jan 2025",
      title: "UI / UX Designer",
      company: "M5C Logistics",
      link: "https://www.m5clogs.com/",
      tags: ["SAAS", "REDESIGN", "B2B"],
      description:
        "Reworked the website experience without disrupting established user flows, balancing business requirements with usability. Defined the interface structure, built reusable components, and took the product from early wireframes through high-fidelity design.",
    },
    {
      date: "Aug 2024 - Oct 2024",
      title: "Product Designer",
      company: "Maker Sharks",
      link: "https://makersharks.ai/",
      tags: ["AI", "SAAS", "B2B", "B2C"],
      description:
        "Designed the end-to-end experience for FLO, from wireframes and interaction flows to high-fidelity prototypes and dashboard experiences. Refined the SCP product workflow and worked closely with PMs and developers to simplify complex processes and improve the overall product experience.",
    },
    {
      date: "Feb 2024 - Oct 2024",
      title: "User Experience Designer",
      company: "Dacoid Digital",
      link: "https://www.dacoid.com/",
      tags: ["AI", "AUTOMATION", "B2B"],
      description:
        "Designed a multi-feature business listing platform from the ground up, defining the information architecture, sitemap, user journeys, and interface through research-led UX decisions. Reworked existing flows and established a scalable design system to maintain consistency across the product.",
    },
    {
      date: "April 2023 - Jan 2024",
      title: "UI / UX Designer",
      company: "Right Choice AI",
      link: "https://rightchoice.ai/",
      tags: ["AI", "B2B", "SAAS"],
      description:
        "Designed a multi-feature business listing platform from the ground up, defining the information architecture, sitemap, user journeys, and interface through research-led UX decisions. Reworked existing flows and established a scalable design system to maintain consistency across the product.",
    },
    {
      date: "April 2023 - Jun 2023",
      title: "UI / UX Designer",
      company: "KOSMC",
      link: "https://www.kosmc.ai/",
      tags: ["AI", "CREATORS", "B2B", "$100K RAISED"],
      description:
        "Defined user flows and personas for a diverse user base while keeping the experience simple and accessible. Designed a web application that brought multiple social profiles into a unified experience, working closely with marketing and industry specialists to align the product with user and business needs.",
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
          <h2 className="work-heading">4+ years designing digital products</h2>
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
