import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./Modal.css";

function Modal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // 'idle', 'submitting', 'success', 'error'

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset form when closed
      setTimeout(() => {
        setStatus("idle");
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 300);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    const encode = (data) => {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => setStatus("success"))
      .catch(() => setStatus("error"));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay">
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="modal-content-wrapper"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button className="modal-close" onClick={onClose} type="button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {status === "success" ? (
              <div className="modal-success-state">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="success-icon"
                >
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </motion.div>
                <h2 className="modal-title">Message Sent!</h2>
                <p className="modal-subtitle">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button className="submit-btn" onClick={onClose} style={{ marginTop: '2rem' }}>
                  <span>Close</span>
                </button>
              </div>
            ) : (
              <>
                <div className="modal-header">
                  <h2 className="modal-title">Get in Touch</h2>
                  <p className="modal-subtitle">Let's create something extraordinary together.</p>
                </div>

                <form 
                  className="modal-form" 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  {/* Hidden field for Netlify spam filter */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <input name="bot-field" onChange={handleChange} value={formData["bot-field"]} />
                  </div>

                  <div className="form-group">
                    <label>FULL NAME</label>
                    <div className="input-wrapper">
                      <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <input 
                        type="text" 
                        name="name"
                        placeholder="John Doe" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>EMAIL ADDRESS</label>
                    <div className="input-wrapper">
                      <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <input 
                        type="email" 
                        name="email"
                        placeholder="john@example.com" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>CONTACT NUMBER</label>
                    <div className="input-wrapper">
                      <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <input 
                        type="tel" 
                        name="phone"
                        placeholder="+1 (555) 000-0000" 
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>YOUR MESSAGE</label>
                    <div className="input-wrapper textarea-wrapper">
                      <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      <textarea 
                        name="message"
                        placeholder="Tell me about your project..." 
                        rows="4" 
                        required
                        value={formData.message}
                        onChange={handleChange}
                        disabled={status === "submitting"}
                      ></textarea>
                    </div>
                  </div>

                  {status === "error" && (
                    <p style={{ color: "#ff4d4d", fontSize: "0.875rem", marginTop: "-0.5rem", marginBottom: "0.5rem" }}>
                      Oops! Something went wrong. Please try again.
                    </p>
                  )}

                  <button className="submit-btn" type="submit" disabled={status === "submitting"}>
                    <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
                    {status !== "submitting" && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: 'rotate(45deg)' }}>
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
