import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import Magnetic from "../Magnetic";
import "./ProjectCard.css";

function ProjectCard({
  number = "01",
  category = "EDTECH — K12 EDUCATION",
  year = "2026",
  title = "Codemantra",
  description = "Redesigned the student experience with a game-inspired progress system calibrated for ages 8–16.",
  tags = "#EDTECH #GAMIFICATION #K12",
  image = "",
  legacy = false,
  link = "#",
}) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideRightVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scaleUpVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="project-card"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="project-left">
        <motion.div
          className="project-number-container"
          variants={slideRightVariants}
        >
          <span className="project-number">{number}</span>
          <div className="project-line"></div>
        </motion.div>

        <motion.div className="project-badges" variants={slideUpVariants}>
          <span className="badge badge-blue">{category}</span>
          <span className="badge badge-grey">{year}</span>
        </motion.div>

        <motion.h3 className="project-title" variants={slideUpVariants}>
          {title}
        </motion.h3>

        <motion.p className="project-description" variants={slideUpVariants}>
          {description}
        </motion.p>

        <motion.div className="project-tags" variants={slideUpVariants}>
          {tags}
        </motion.div>

        <motion.div variants={slideUpVariants}>
          <Magnetic>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <span>VIEW PROJECT</span>
              <div className="project-link-icon">
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
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
            </a>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div className="project-right-wrapper" variants={scaleUpVariants}>
        <motion.div
          ref={ref}
          className="project-right"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          {legacy && (
            <div className="legacy-badge">
              <span className="dot"></span>
              LEGACY STUDY
            </div>
          )}
          {image && <img src={image} alt={title} className="project-image" />}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectCard;
