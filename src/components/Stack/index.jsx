import { motion } from "motion/react";
import "./Stack.css";
import Magnetic from "../Magnetic";

function Stack() {
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

  const tools = [
    {
      name: "Figma",
      role: "Interface Design",
      link: "https://www.figma.com/",
      icon: (
        <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"
            fill="#1ABCFE"
          ></path>
          <path
            d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z"
            fill="#0ACF83"
          ></path>
          <path d="M19 0v19H9.5a9.5 9.5 0 0 1 0-19H19z" fill="#FF7262"></path>
          <path
            d="M38 9.5a9.5 9.5 0 0 1-9.5 9.5H19V0h9.5A9.5 9.5 0 0 1 38 9.5z"
            fill="#F24E1E"
          ></path>
          <path
            d="M38 28.5a9.5 9.5 0 0 1-9.5 9.5H19V19h9.5a9.5 9.5 0 0 1 9.5 9.5z"
            fill="#A259FF"
          ></path>
        </svg>
      ),
    },
    {
      name: "Notion",
      role: "Productivity",
      link: "https://www.notion.so/",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
            fill="currentColor"
          ></path>
        </svg>
      ),
    },
    {
      name: "Framer",
      role: "No-code",
      link: "https://www.framer.com/",
      icon: (
        <svg viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h14v7H7L0 0z" fill="currentColor"></path>
          <path d="M0 7h7l7 7H0V7z" fill="currentColor" opacity="0.65"></path>
          <path
            d="M0 14h7l3.5 6H0v-6z"
            fill="currentColor"
            opacity="0.35"
          ></path>
        </svg>
      ),
    },
    {
      name: "Slack",
      role: "Collaboration",
      link: "https://slack.com/",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
            fill="#E01E5A"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="stack-section" id="stack">
      <motion.div
        className="stack-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="stack-label" variants={itemVariants}>
          MY STACK
        </motion.div>
        <motion.h2 className="stack-heading" variants={itemVariants}>
          Tools I use
        </motion.h2>

        <div className="stack-grid">
          {tools.map((tool, index) => (
            <motion.div key={index} variants={itemVariants} style={{ display: 'flex', width: '100%' }}>
              <Magnetic style={{ width: '100%', height: '100%', display: 'flex' }}>
                <a href={tool.link} target="_blank" rel="noopener noreferrer" className="stack-card" style={{ width: '100%', textDecoration: 'none' }}>
                  <div className="stack-icon">
                    {tool.icon}
                  </div>
                  <h3 className="stack-name">{tool.name}</h3>
                  <div className="stack-role">{tool.role}</div>
                </a>
              </Magnetic>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Stack;
