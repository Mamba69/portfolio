import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const links = [
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/shivam-tiwari-b81820226/",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    { 
      name: "Email", 
      url: "mailto:shivamforsure20@gmail.com",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    },
    { 
      name: "CV", 
      url: "/cv",
      isInternal: true,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    }
  ]

  return (
    <footer className="footer-section">
      <motion.div 
        className="footer-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="footer-main">
          <motion.div className="footer-left" variants={itemVariants}>
            <h2 className="footer-heading">
              Designed by<br/>Shivam Tiwari.
            </h2>
            <p className="footer-desc">
              Available for freelance opportunities and open to full-time roles. Let's create something extraordinary together.
            </p>
          </motion.div>

          <motion.div className="footer-right" variants={itemVariants}>
            {links.map((link, index) => (
              link.isInternal ? (
                <Link 
                  key={index} 
                  to={link.url} 
                  className="footer-link"
                >
                  <span className="footer-link-icon">{link.icon}</span>
                  {link.name}
                </Link>
              ) : (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-link"
                >
                  <span className="footer-link-icon">{link.icon}</span>
                  {link.name}
                </a>
              )
            ))}
          </motion.div>
        </div>

        <motion.div className="footer-bottom" variants={itemVariants}>
          <span className="footer-text">© 2026. All rights reserved.</span>
          <span className="footer-text">Built with React & Framer Motion</span>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer