import { useState, useEffect } from "react";
import Magnetic from "../Magnetic";
import profileImg from "../../assets/download.png";
import "./Navbar.css";

function Navbar({ onHireClick }) {
  const [isDark, setIsDark] = useState(true);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("light-mode");
  };

  const navItems = [
    { label: 'Work', id: 'experience' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' }
  ]

  return (
    <nav className={`navbar ${isHidden ? 'navbar-hidden' : ''}`}>
      <div className="navbar-left">
        <Magnetic>
          <div className="logo-container">
            <img src={profileImg} alt="Shivam Tiwari" className="nav-profile-img" />
            <span className="logo">Shivam Tiwari</span>
          </div>
        </Magnetic>
      </div>

      <div className="navbar-center">
        {navItems.map((item) => (
          <Magnetic key={item.label}>
            <a href={`#${item.id}`} className="nav-link">
              {item.label}
            </a>
          </Magnetic>
        ))}
      </div>

      <div className="navbar-right">
        <Magnetic>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </Magnetic>

        <Magnetic>
          <button className="hire-btn" onClick={onHireClick}>
            <span>Hire Me</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </Magnetic>
      </div>
    </nav>
  );
}

export default Navbar;
