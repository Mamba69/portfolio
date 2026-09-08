import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import "./Services.css";

function ServiceCard({ svc, itemVariants }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "-25deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-25deg", "25deg"]);

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

  return (
    <motion.div variants={itemVariants} className="service-card-wrapper">
      <motion.div
        ref={ref}
        className="service-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="service-number">{svc.num}</div>
        <div className="service-content">
          <h3 className="service-title">{svc.title}</h3>
          <p className="service-desc">{svc.desc}</p>
          <ul className="service-bullets">
            {svc.bullets.map((bullet, bIndex) => (
              <li key={bIndex}>
                <span className="bullet-icon">✦</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Services() {
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const services = [
    {
      num: "01",
      title: "Product Design",
      desc: "Intuitive interfaces with a strategic UX approach — from initial screens to a complete user journey.",
      bullets: [
        "Wireframing",
        "High-fidelity UI",
        "Prototyping (Figma)",
        "Design system",
        "Developer handoff",
      ],
    },
    {
      num: "02",
      title: "UI Audit",
      desc: "Evaluating usability using heuristic evaluation, UX laws, and established design patterns.",
      bullets: [
        "User interviews",
        "Contextual inquiry",
        "Usability testing",
        "Journey mapping",
        "Problem framing",
      ],
    },
    {
      num: "03",
      title: "Email Design",
      desc: "Custom email design for DTC brands — built for conversions with strong UX principles.",
      bullets: [
        "Responsive layouts",
        "Conversion optimization",
        "A/B testing",
        "Dark mode compatibility",
      ],
    },
    {
      num: "04",
      title: "Design System",
      desc: "Scalable systems ensuring visual consistency across all platforms and touchpoints.",
      bullets: [
        "Component library",
        "Design tokens",
        "Documentation",
        "Team training",
      ],
    },
  ];

  return (
    <section className="services-section" id="services">
      <motion.div
        className="services-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="services-header" variants={itemVariants}>
          <div className="services-label"> WHAT I DO</div>
          <h2 className="services-heading">Services</h2>
        </motion.div>

        <div className="services-bento">
          {services.map((svc, index) => (
            <ServiceCard key={index} svc={svc} itemVariants={itemVariants} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Services;
