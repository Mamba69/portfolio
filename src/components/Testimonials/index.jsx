import { motion } from 'motion/react'
import './Testimonials.css'

function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

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
  }

  const testimonials = [
    {
      quote: "\"Shivam excels as a designer, surpassing peers with exceptional skills. He seamlessly integrated with developers, PMs, and marketing — ensuring cohesive design. Brainstorming with him was consistently enriching.\"",
      name: "Rishab Karwa",
      title: "CEO — RightChoice.AI, GoMechanic",
      initial: "R"
    },
    {
      quote: "\"Collaborating with Shivam was fantastic! His swift process ensured our pages were polished to perfection. Impressive efficiency without sacrificing quality or style.\"",
      name: "Ankur Gupta",
      title: "Founder — KOSMC.in",
      initial: "A"
    },
    {
      quote: "\"After Upwork, we onboarded Shivam full-time. He swiftly grasped our requirements and devised a user journey that exceeded our initial expectations.\"",
      name: "Priyadarshi",
      title: "Founder — Tirth.co",
      initial: "P"
    },
    {
      quote: "\"5 months in — his UI audits and design critiques elevated our work significantly. Even through a full product pivot, he adapted instantly and delivered.\"",
      name: "Shorya",
      title: "CEO — Dacoid Digital",
      initial: "S"
    }
  ]

  const themes = ['card-theme-blue', 'card-theme-red', 'card-theme-yellow']
  
  // Duplicate for infinite marquee effect
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  return (
    <section className="testimonials-section" id="testimonials">
      <motion.div 
        className="testimonials-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="testimonials-label" variants={itemVariants}>TESTIMONIALS</motion.div>
        <motion.h2 className="testimonials-heading" variants={itemVariants}>
          Voices of<br/>Success.
        </motion.h2>
      </motion.div>

      <motion.div 
        className="testimonials-slider"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="testimonials-marquee">
          {duplicatedTestimonials.map((test, index) => {
            const themeClass = themes[index % 3]
            return (
              <div key={index} className={`testimonial-card ${themeClass}`}>
                <p className="testimonial-quote">{test.quote}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{test.initial}</div>
                  <div className="author-info">
                    <span className="author-name">{test.name}</span>
                    <span className="author-title">{test.title}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Testimonials