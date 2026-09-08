import { motion } from "motion/react";
import "./TrustedBy.css";
import Magnetic from "../Magnetic";

function TrustedBy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const companies = [
    { name: "Maker Sharks", link: "https://makersharks.ai/" },
    { name: "M5C Logistics", link: "https://www.m5clogs.com/" },
    { name: "RightChoiceAI", link: "https://rightchoice.ai/" },
    { name: "KOSMC", link: "https://www.kosmc.ai/" },
    { name: "Dacoid", link: "https://www.dacoid.com/" },
    { name: "SETC", link: "https://www.setctaxreturn.com/" },
    { name: "Tirth", link: "https://www.tirth.com/" },
    { name: "Ausoma", link: "https://ausoma.org/" },
    { name: "GrowthGear", link: "https://growthgear.in/" },
  ];

  return (
    <section className="trusted-section" id="trusted">
      <motion.div
        className="trusted-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="trusted-label" variants={itemVariants}>
          {" "}
          TRUSTED BY
        </motion.div>
        <motion.h2 className="trusted-heading" variants={itemVariants}>
          Companies I've worked with
        </motion.h2>

        <div className="trusted-chips">
          {companies.map((company, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Magnetic>
                <a href={company.link} target="_blank" rel="noopener noreferrer" className="trusted-chip-link">
                  <div className="trusted-chip">{company.name}</div>
                </a>
              </Magnetic>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default TrustedBy;
