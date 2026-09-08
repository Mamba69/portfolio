import { motion } from "motion/react";
import ProjectCard from "../ProjectCard";
import "./LatestResearch.css";

import udiseImg from "../../assets/udise-casestudy.webp";
import hclImg from "../../assets/hcl-casestudy.webp";
import shiftyImg from "../../assets/shifty.webp";
import rideonImg from "../../assets/Rideon.webp";
import rapidoImg from "../../assets/Rapido.webp";

function LatestResearch() {
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
    <section className="experience-section" id="experience">
      <motion.div
        className="experience-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="experience-header" variants={itemVariants}>
          <div className="experience-label">LATEST RESEARCH</div>
        </motion.div>

        <div className="experience-content">
          <motion.div className="experience-left" variants={itemVariants}>
            <h2 className="experience-heading">
              Selected <br />
              work.
            </h2>
          </motion.div>

          <motion.div className="experience-right" variants={itemVariants}>
            <p className="experience-description">
              A deep dive into complex problem-solving across B2C consumer apps
              and B2B SaaS. Focused on designing scalable, intuitive, and
              human-centric digital experiences.
            </p>
          </motion.div>
        </div>

        <ProjectCard
          number="01"
          category="UDISE+"
          year="2026"
          title="UDISE+"
          description="A unified analytics platform built on UDISE+data - covering 25 crore students, 1 crore teachers, and 14.7 lakh schools across every state and union territory."
          tags="#GOVERNMENT #DEVELOPING #DESIGNING"
          legacy={false}
          image={udiseImg}
          link="https://insights.udiseplus.gov.in/"
        />

        <ProjectCard
          number="02"
          category="HCL"
          year="2025"
          title="HCL"
          description="Conversational AI streamlines requirement gathering by suggesting the most suitable RFP types. Smart analysis reviews documents intelligently."
          tags="#B2C #INTERFACE #RESEARCH"
          legacy={false}
          image={hclImg}
          link="https://www.figma.com/design/47olg6oyb8obQWJZwwOi10/HCL?node-id=0-1&t=oWxfkBaMkZubdjKY-1"
        />

        <ProjectCard
          number="03"
          category="SHIFTY"
          year="2024"
          title="Shifty"
          description="A mobile app for finding rooms and roommates - solving student accommodation in non-domicile states."
          tags="#B2C #RESEARCH #INTERFACE"
          legacy={false}
          image={shiftyImg}
          link="https://www.figma.com/design/fBLMpGK4iRSXoWzPCDFneX/Shifty-Case-study?node-id=0-1&t=8xOYCQuNHYXrjsUr-1"
        />

        <ProjectCard
          number="04"
          category="RIDE ON"
          year="2023"
          title="Ride On"
          description="Helping E-rickshaw drivers earn more and get loans without credit score"
          tags="#B2B #B2C #RESEARCH"
          legacy={false}
          image={rideonImg}
          link="https://www.figma.com/design/yHhksChOCH04DKXjfDY5ay/E-Riksha-Dashboard-(Copy)?t=M2id3RALeav6Cd3u-0"
        />

        <ProjectCard
          number="05"
          category="RAPIDO"
          year="2023"
          title="Rapido"
          description="Integrating package delivery, subscriptions, and scheduled rides for a seamless transport experience."
          tags="#B2C #TRANSPORT #4.8★"
          legacy={false}
          image={rapidoImg}
          link="https://www.figma.com/design/fV3nwx9z55cEWhleym8kQZ/Rapido-Portfolio?node-id=517-7445&t=JweqEa5zWBscQHAf-0"
        />
      </motion.div>
    </section>
  );
}

export default LatestResearch;
