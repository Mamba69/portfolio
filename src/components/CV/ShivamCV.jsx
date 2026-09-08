import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import html2pdf from "html2pdf.js";
import "./ShivamCV.css";

const Page1 = ({ id }) => (
  <div className="cv-page-a4" id={id}>
    <div className="cv-header">
      <div className="cv-name">SHIVAM TIWARI</div>
      <div className="cv-title-text">Lead Product Designer | Senior UI/UX Designer</div>
      <div className="cv-contact">
        +91 86382 47129 | <a href="mailto:shivamforsure20@gmail.com">shivamforsure20@gmail.com</a> |{" "}
        <a href="https://linkedin.com/in/shivam-tiwari-b81820226" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/shivam-tiwari-b81820226
        </a>{" "}
        | <a href="https://shivamdesign.netlify.app/" target="_blank" rel="noopener noreferrer">shivamdesign.netlify.app</a>
      </div>
    </div>

    <div className="cv-summary">
      Results-driven Product Designer and Experience Engineer with 4+ years of
      end-to-end design ownership across B2B SaaS, AI platforms, and B2C
      mobile applications. Proven track record of transforming ambiguous
      problems into intuitive, scalable digital products — from early-stage
      wireframes to polished production-ready interfaces. Delivered 5★-rated
      work for 15+ clients on Upwork and Fiverr, with hands-on expertise in UX
      research, design systems, and cross-functional collaboration with PMs
      and engineers.
    </div>

    <div className="cv-section-title">Professional Experience</div>

    <div className="cv-job">
      <div className="cv-job-header">
        <span className="cv-job-date">Nov 2025 – Present</span>
        <span className="cv-job-location">GrowthGear</span>
      </div>
      <div className="cv-job-company">GrowthGear</div>
      <div className="cv-job-role">Product Designer (Full-time)</div>
      <ul className="cv-job-desc">
        <li>
          Own end-to-end design across micro SaaS tools, government-facing
          platforms, and internal products serving 10,000+ users
        </li>
        <li>
          Reduced developer rework by 40% by delivering meticulous design
          handoffs with detailed specs, component annotations, and development
          briefs
        </li>
        <li>
          Drove design strategy for 3 concurrent product lines — balancing
          speed and quality through reusable component frameworks
        </li>
      </ul>
    </div>

    <div className="cv-job">
      <div className="cv-job-header">
        <span className="cv-job-date">May 2025 – Nov 2025</span>
        <span className="cv-job-location">GrowthGear</span>
      </div>
      <div className="cv-job-company">GrowthGear</div>
      <div className="cv-job-role">User Experience Designer</div>
      <ul className="cv-job-desc">
        <li>
          Established UX foundations during internship, contributing to
          research, flows, and rapid prototyping that accelerated full-time hire
        </li>
      </ul>
    </div>

    <div className="cv-job">
      <div className="cv-job-header">
        <span className="cv-job-date">May 2025 – Present</span>
        <span className="cv-job-location">Caudate AI</span>
      </div>
      <div className="cv-job-company">Caudate AI</div>
      <div className="cv-job-role">Product Designer (Full-time)</div>
      <ul className="cv-job-desc">
        <li>
          Architected and shipped Caudate AI — a proprietary AI software
          product — entirely from concept to launch, owning 100% of the UX/UI
        </li>
        <li>
          Designed and iterated on the FLO dashboard with high-fidelity
          prototypes validated through usability testing, reducing user
          drop-off by 30%
        </li>
        <li>
          Collaborated closely with product managers and engineers, cutting QA
          cycles by 25% through clear design documentation
        </li>
      </ul>
    </div>

    <div className="cv-job">
      <div className="cv-job-header">
        <span className="cv-job-date">Sep 2024 – Jan 2025</span>
        <span className="cv-job-location">M5 Continent Logistics</span>
      </div>
      <div className="cv-job-company">M5 Continent Logistics · m5clogs.com</div>
      <div className="cv-job-role">UI/UX Designer</div>
      <ul className="cv-job-desc">
        <li>
          Redesigned the logistics platform website and tracking interface
          while preserving existing user flows — improving task completion
          rate by 20%
        </li>
        <li>
          Built a new, scalable component library in Figma, reducing future
          design iteration time by 35%
        </li>
        <li>
          Conducted on-ground field research to inform low and high-fidelity
          designs grounded in real user mental models
        </li>
      </ul>
    </div>
  </div>
);

const Page2 = ({ id }) => (
  <div className="cv-page-a4" id={id}>
    <div className="cv-job" style={{ marginTop: "10px" }}>
      <div className="cv-job-header">
        <span className="cv-job-date">Aug 2024 – Oct 2024</span>
        <span className="cv-job-location">MakerSharks</span>
      </div>
      <div className="cv-job-company">MakerSharks · makersharks.ai</div>
      <div className="cv-job-role">Product Designer</div>
      <ul className="cv-job-desc">
        <li>
          Designed wireframes and high-fidelity prototypes for the AI-powered
          B2B platform, improving onboarding flow clarity
        </li>
        <li>
          Overhauled SOPs and revamped the full product process, improving
          design-to-dev handoff efficiency by 30%
        </li>
      </ul>
    </div>

    <div className="cv-job">
      <div className="cv-job-header">
        <span className="cv-job-date">Feb 2024 – Oct 2024</span>
        <span className="cv-job-location">Dacoid Digital</span>
      </div>
      <div className="cv-job-company">Dacoid Digital · dacoid.com</div>
      <div className="cv-job-role">Product Designer</div>
      <ul className="cv-job-desc">
        <li>
          Collaborated with multiple companies on UX audits, identifying
          friction points and redesigning key flows to improve conversion
        </li>
        <li>
          Redesigned the SETC questionnaire flow using user research insights,
          increasing form completion rates by 25%
        </li>
      </ul>
    </div>

    <div className="cv-job">
      <div className="cv-job-header">
        <span className="cv-job-date">Apr 2023 – Jan 2024</span>
        <span className="cv-job-location">RightChoice.ai</span>
      </div>
      <div className="cv-job-company">RightChoice.ai · rightchoice.ai</div>
      <div className="cv-job-role">Product Designer</div>
      <ul className="cv-job-desc">
        <li>
          Led end-to-end design of an AI-powered business listing website —
          including sitemap, user flows, and 40+ UI screens
        </li>
        <li>
          Conducted thorough UX research across multiple departments to map
          workflows and align product design with user goals
        </li>
      </ul>
    </div>

    <div className="cv-job">
      <div className="cv-job-header">
        <span className="cv-job-date">Nov 2023 – Dec 2023</span>
        <span className="cv-job-location">Tirth.co</span>
      </div>
      <div className="cv-job-company">Tirth.co</div>
      <div className="cv-job-role">Product Designer (Freelance)</div>
      <ul className="cv-job-desc">
        <li>
          Delivered a complete product design engagement within tight
          timelines, leveraging market research to shape visual and
          interaction decisions
        </li>
      </ul>
    </div>

    <div className="cv-job">
      <div className="cv-job-header">
        <span className="cv-job-date">Apr 2023 – Jun 2023</span>
        <span className="cv-job-location">KOSMC</span>
      </div>
      <div className="cv-job-company">KOSMC · kosmc.ai</div>
      <div className="cv-job-role">Product Designer</div>
      <ul className="cv-job-desc">
        <li>
          Designed the creator-focused dashboard and web app, enabling users
          to link all social media handles in a unified B2C interface
        </li>
        <li>
          Created comprehensive user flows and personas, collaborating
          directly with founders and the marketing team
        </li>
      </ul>
    </div>

    <div className="cv-job">
      <div className="cv-job-header">
        <span className="cv-job-date">Apr 2022 – Dec 2022</span>
        <span className="cv-job-location">Skillogy</span>
      </div>
      <div className="cv-job-company">Skillogy</div>
      <div className="cv-job-role">Graphic Designer</div>
      <ul className="cv-job-desc">
        <li>
          Produced visual design assets supporting brand communications and
          digital content strategies
        </li>
      </ul>
    </div>

    <div className="cv-job">
      <div className="cv-job-header">
        <span className="cv-job-date">Jul 2021 – Jul 2025</span>
        <span className="cv-job-location">Upwork</span>
      </div>
      <div className="cv-job-company">Upwork</div>
      <div className="cv-job-role">Product Designer (Freelance)</div>
      <ul className="cv-job-desc">
        <li>
          Delivered product design solutions for 15+ global clients with a
          consistent 5★ rating, spanning B2B SaaS, mobile apps, and landing pages
        </li>
        <li>
          Managed end-to-end client engagements — from discovery and
          wireframing to prototype delivery and design handoff
        </li>
      </ul>
    </div>
  </div>
);

const Page3 = ({ id }) => (
  <div className="cv-page-a4" id={id}>
    <div className="cv-section-title" style={{ marginTop: "10px" }}>Selected Live Projects</div>

    <div className="cv-project-item">
      <div className="cv-project-name">
        Caudate AI — <a href="https://app.caudateai.com" target="_blank" rel="noreferrer">app.caudateai.com</a>
      </div>
      <ul className="cv-project-desc">
        <li>
          Designed and launched a proprietary AI SaaS platform from scratch —
          responsible for complete product UX, UI, and design system
        </li>
      </ul>
    </div>

    <div className="cv-project-item">
      <div className="cv-project-name">
        RightChoice.ai — <a href="https://rightchoice.ai" target="_blank" rel="noreferrer">rightchoice.ai</a>
      </div>
      <ul className="cv-project-desc">
        <li>
          Led full design of AI-powered B2B business listing platform
          including information architecture, flows, and high-fidelity screens
        </li>
      </ul>
    </div>

    <div className="cv-project-item">
      <div className="cv-project-name">
        KOSMC — <a href="https://kosmc.ai" target="_blank" rel="noreferrer">kosmc.ai</a>
      </div>
      <ul className="cv-project-desc">
        <li>
          Designed web app and dashboard for a creator platform (pre-launch,
          $100K raised); built user flows, personas, and marketing assets
        </li>
      </ul>
    </div>

    <div className="cv-project-item">
      <div className="cv-project-name">
        M5C Logistics — <a href="https://m5clogs.com" target="_blank" rel="noreferrer">m5clogs.com</a>
      </div>
      <ul className="cv-project-desc">
        <li>
          Redesigned logistics website and tracking interface; built new Figma
          component library adopted across all future design work
        </li>
      </ul>
    </div>

    <div className="cv-project-item">
      <div className="cv-project-name">
        Ausoma — <a href="https://ausoma.org" target="_blank" rel="noreferrer">ausoma.org</a>
      </div>
      <ul className="cv-project-desc">
        <li>
          Designed UX/UI for the platform supporting autism awareness,
          ensuring accessibility and inclusive design principles throughout
        </li>
      </ul>
    </div>

    <div className="cv-project-item">
      <div className="cv-project-name">UDISE+ Analytics Dashboard</div>
      <ul className="cv-project-desc">
        <li>
          Designed government-facing analytics dashboard surfacing education
          data for 1.5M+ schools — focused on data clarity and accessibility
        </li>
      </ul>
    </div>

    <hr style={{ border: "none", borderTop: "1.5px solid #000", margin: "30px 0 0 0" }} />
    <div className="cv-section-title">VOLUNTEERING & LEADERSHIP</div>

    <div className="cv-job" style={{ paddingLeft: "0", marginBottom: "18px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13.5px", marginBottom: "4px", color: "#000" }}>
        <span><strong>Product Manager</strong> – Caudate AI</span>
        <span style={{ fontStyle: "italic" }}>Jan 2026 | Gurgaon</span>
      </div>
      <ul className="cv-job-desc">
        <li>
          Leading product strategy and cross-functional teams to refine AI-driven feature sets, ensuring seamless integration between technical capabilities and user-centric design outcomes.
        </li>
      </ul>
    </div>

    <hr style={{ border: "none", borderTop: "1.5px solid #000", margin: "30px 0 0 0" }} />
    <div className="cv-section-title">Education</div>

    <div className="cv-edu-item">
      <div className="cv-edu-row">
        <span className="cv-job-date"></span>
        <span className="cv-job-location"></span>
      </div>
      <div className="cv-edu-degree">Bachelor of Design — UI/UX Design</div>
      <div className="cv-job-desc" style={{ paddingTop: "2px" }}>
        Specialization in User Experience Design, Interaction Design, and
        Visual Communication
      </div>
    </div>

    <hr style={{ border: "none", borderTop: "1.5px solid #000", margin: "30px 0 0 0" }} />
    <div className="cv-section-title">Skills</div>

    <div className="cv-skill-group">
      <span className="cv-skill-label">Hard Skills:</span> Figma • Framer • Miro •
      Maze • Jira • Notion • Lottie • Wireframing • Prototyping • Design
      Systems • UI Audits • Information Architecture • UX Research • Usability
      Testing
    </div>
    <div className="cv-skill-group">
      <span className="cv-skill-label">Soft Skills:</span> Problem Identification •
      Systems Thinking • Cross-functional Collaboration • Stakeholder
      Communication • Design Critique • Adaptability
    </div>
  </div>
);

const MiniatureWrapper = ({ children, onClick, active, num }) => (
  <div className="cv-thumbnail-container" onClick={onClick}>
    <div className={`cv-thumbnail ${active ? "active" : ""}`}>
      <div className="cv-thumbnail-content">
        {children}
      </div>
    </div>
    <div className="cv-thumbnail-num">{num}</div>
  </div>
);

export default function ShivamCV() {
  const [zoom, setZoom] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 ? Math.max(Math.floor((window.innerWidth - 40) / 794 * 100), 20) : 100;
    }
    return 100;
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 1024;
    }
    return true;
  });
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setZoom(Math.max(Math.floor((window.innerWidth - 40) / 794 * 100), 20));
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 10, 200));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 10, 50));

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    const element = document.getElementById("pdf-export-container");
    
    // Temporarily show it offscreen for capture
    const parent = element.parentElement;
    parent.style.display = "block";
    parent.style.position = "absolute";
    parent.style.left = "-9999px";
    parent.style.top = "-9999px";

    const opt = {
      margin: 0,
      filename: 'Shivam_Tiwari_CV.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2, useCORS: true, logging: false },
      jsPDF: { unit: 'px', format: [794, 1123], orientation: 'portrait' }
    };

    try {
      await html2pdf().set(opt).from(element).save();
    } finally {
      // Hide it again
      parent.style.display = "none";
      parent.style.position = "";
      parent.style.left = "";
      parent.style.top = "";
    }
  };

  const scrollToPage = (pageNum) => {
    setCurrentPage(pageNum);
    if (scrollRef.current) {
      const pageHeight = 1123 * (zoom / 100);
      const gap = 10; // CSS gap between pages
      scrollRef.current.scrollTo({
        top: (pageNum - 1) * (pageHeight + gap),
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <div style={{ position: "absolute", left: "-9999px", top: "-9999px", zIndex: -1 }}>
        <div id="pdf-export-container" style={{ width: "794px", backgroundColor: "#fff" }}>
          <Page1 id="pdf-page-1" />
          <Page2 id="pdf-page-2" />
          <Page3 id="pdf-page-3" />
        </div>
      </div>
      <div className="cv-viewer-container">
      {/* Top Header */}
      <div className="cv-viewer-header">
        <div className="cv-header-title">
          <Link to="/" style={{ color: "#fff", textDecoration: "none", marginRight: "10px", display: "flex", alignItems: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </Link>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#F40F02">
            <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM16.5 9v1.5h-1.5V9h1.5zM3 6H1.5v14.5c0 1.38 1.12 2.5 2.5 2.5H19v-1.5H4c-.55 0-1-.45-1-1V6z" />
          </svg>
          <span>shivam cv.pdf</span>
        </div>
      </div>

      {/* Toolbar */}
      <div className="cv-toolbar" style={{ position: "relative" }}>
        <div className="cv-sidebar-toggle-container">
          <button 
            className="cv-icon-btn" 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            title="Toggle Sidebar"
            style={{ backgroundColor: isSidebarOpen ? "rgba(255,255,255,0.1)" : "transparent" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
          </button>
        </div>

        <div className="cv-toolbar-group cv-hide-mobile" style={{ backgroundColor: 'transparent', border: 'none' }}>
          <span className="cv-hide-small">Page</span>
          <span style={{ background: '#202124', padding: '2px 8px', borderRadius: '4px', border: '1px solid #5f6368' }}>{currentPage}</span>
          <span>/ 3</span>
        </div>
        
        <div className="cv-divider cv-hide-mobile"></div>

        <button className="cv-icon-btn" onClick={handleDownloadPdf} title="Download/Print">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </button>
        <button className="cv-icon-btn" onClick={handlePrint} title="Print">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <rect x="6" y="14" width="12" height="8" />
          </svg>
        </button>

        <div style={{ width: "1px", height: "20px", backgroundColor: "#5f6368", margin: "0 5px" }}></div>

        <div className="cv-toolbar-group" style={{ border: 'none' }}>
          <button className="cv-icon-btn" onClick={handleZoomOut}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <span style={{ width: "45px", textAlign: "center" }}>{zoom}%</span>
          <button className="cv-icon-btn" onClick={handleZoomIn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Area */}
      <div className="cv-main-area">
        {/* Sidebar Miniatures */}
        <div className={`cv-sidebar ${isSidebarOpen ? "" : "collapsed"}`} data-lenis-prevent>
          <div className="cv-sidebar-title">Pages</div>
          <MiniatureWrapper num={1} active={currentPage === 1} onClick={() => scrollToPage(1)}>
            <Page1 />
          </MiniatureWrapper>
          <MiniatureWrapper num={2} active={currentPage === 2} onClick={() => scrollToPage(2)}>
            <Page2 />
          </MiniatureWrapper>
          <MiniatureWrapper num={3} active={currentPage === 3} onClick={() => scrollToPage(3)}>
            <Page3 />
          </MiniatureWrapper>
        </div>

        {/* Content Scroll */}
        <div 
          className="cv-content-scroll" 
          ref={scrollRef}
          data-lenis-prevent 
          onScroll={(e) => {
            const top = e.target.scrollTop;
            const pageHeight = 1123 * (zoom / 100);
            const gap = 10; // CSS gap between pages
            
            if (top < (pageHeight + gap) * 0.5) setCurrentPage(1);
            else if (top < (pageHeight + gap) * 1.5) setCurrentPage(2);
            else setCurrentPage(3);
          }}
        >
          <div className="cv-zoom-container">
            <div className="cv-page-wrapper" style={{ width: `${794 * (zoom / 100)}px`, height: `${1123 * (zoom / 100)}px`, minWidth: `${794 * (zoom / 100)}px`, minHeight: `${1123 * (zoom / 100)}px` }}>
              <div className="cv-page-inner" style={{ transform: `scale(${zoom / 100})` }}>
                <Page1 id="page-1" />
              </div>
            </div>
            <div className="cv-page-wrapper" style={{ width: `${794 * (zoom / 100)}px`, height: `${1123 * (zoom / 100)}px`, minWidth: `${794 * (zoom / 100)}px`, minHeight: `${1123 * (zoom / 100)}px` }}>
              <div className="cv-page-inner" style={{ transform: `scale(${zoom / 100})` }}>
                <Page2 id="page-2" />
              </div>
            </div>
            <div className="cv-page-wrapper" style={{ width: `${794 * (zoom / 100)}px`, height: `${1123 * (zoom / 100)}px`, minWidth: `${794 * (zoom / 100)}px`, minHeight: `${1123 * (zoom / 100)}px` }}>
              <div className="cv-page-inner" style={{ transform: `scale(${zoom / 100})` }}>
                <Page3 id="page-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}