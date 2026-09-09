import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import html2pdf from "html2pdf.js";
import "./ShivamCV.css";

/*
  Shivam Tiwari — CV
  Rebuilt to match the supplied one-page PDF structure.
  Existing viewer behaviour is preserved:
  - Back to portfolio
  - Download PDF
  - Print
  - Zoom
*/

const CVPage = ({ id }) => (
  <div className="cv-page-a4" id={id}>
    <header className="cv-document-header">
      <h1>Shivam Tiwari</h1>

      <div className="cv-contact-row">
        <a href="tel:+918638247129">91+ 8638247129</a>
        <span>|</span>
        <a href="mailto:st38696@gmail.com">st38696@gmail.com</a>
        <span>|</span>
        <a
          href="https://linkedin.com/in/shivam-tiwari20/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/shivam-tiwari20/
        </a>
        <span>|</span>
        <a
          href="https://shivamdesign.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          portfolio
        </a>
      </div>
    </header>

    <section className="cv-section">
      <h2>Education</h2>

      <div className="cv-entry">
        <div className="cv-entry-top">
          <div>
            <div className="cv-entry-title">Jagannath University</div>
            <div className="cv-entry-subtitle">
              Bachelor of Design in UI/UX, Major in Product Designing
            </div>
          </div>

          <div className="cv-entry-meta">
            <div>Rohini, Delhi</div>
            <em>July. 2021 – June 2025</em>
          </div>
        </div>
      </div>
    </section>

    <section className="cv-section">
      <h2>Experience</h2>

      <div className="cv-entry">
        <div className="cv-entry-top">
          <div>
            <div className="cv-entry-title">Product Designer</div>
            <div className="cv-entry-company">GrowthGear</div>
          </div>

          <div className="cv-entry-meta">
            <div>June 2025 – Present</div>
            <em>Gurgaon, Haryana</em>
          </div>
        </div>

        <ul>
          <li>Owned an end to end product design for a SaaS product</li>
          <li>Collaborated with developers through detailed development brief and design handoff</li>
          <li>Made design system to maintain consistency throughout the product</li>
          <li>Designed many Micro SaaS products for Government and Private Sector</li>
          <li>Made a client portal to handle our product efficiently, so we can improve conversion rates and monitor product health</li>
        </ul>
      </div>

      <div className="cv-entry">
        <div className="cv-entry-top">
          <div>
            <div className="cv-entry-title">UI / UX Designer</div>
            <div className="cv-entry-company">M5C Logistics</div>
          </div>

          <div className="cv-entry-meta">
            <div>Sep. 2024 – Jan. 2025</div>
            <em>Dwarka, New Delhi</em>
          </div>
        </div>

        <ul>
          <li>Did ground research to find problems and cut off unnecessary expenditures</li>
          <li>Designed a SaaS tool to Automate manual AWB process that also helped cost cutting</li>
          <li>Redesigned whole website to engage more users and track packages without login</li>
        </ul>
      </div>

      <div className="cv-entry">
        <div className="cv-entry-top">
          <div>
            <div className="cv-entry-title">Product Designer</div>
            <div className="cv-entry-company">Maker Sharks</div>
          </div>

          <div className="cv-entry-meta">
            <div>Aug 2024 – Oct 2024</div>
            <em>Boston MA, USA</em>
          </div>
        </div>

        <ul>
          <li>Designed wire-frames and high fidelity prototypes for FLO and dashboard</li>
          <li>Optimized SOP’s and revamped the entire product alongside PM and Developers</li>
        </ul>
      </div>

      <div className="cv-entry">
        <div className="cv-entry-top">
          <div>
            <div className="cv-entry-title">UI / UX Designer</div>
            <div className="cv-entry-company">Dacoid Digital</div>
          </div>

          <div className="cv-entry-meta">
            <div>Feb 2024 – Oct 2024</div>
            <em>Gurgaon, Haryana</em>
          </div>
        </div>

        <ul>
          <li>Collaborated with AUSOMA an EdTech to create website and design system to optimize conversion rate</li>
        </ul>
      </div>

      <div className="cv-entry">
        <div className="cv-entry-top">
          <div>
            <div className="cv-entry-title">UI / UX Designer</div>
            <div className="cv-entry-company">RightChoice.AI</div>
          </div>

          <div className="cv-entry-meta">
            <div>April 2023 – Jan 2024</div>
            <em>Gurgaon, Haryana</em>
          </div>
        </div>

        <ul>
          <li>Created seamless business listing website, UI screens, Sitemaps, Rephrased existing flows and led the design team</li>
        </ul>
      </div>

      <div className="cv-entry">
        <div className="cv-entry-top">
          <div>
            <div className="cv-entry-title">UI / UX Designer</div>
            <div className="cv-entry-company">KOSMC.AI</div>
          </div>

          <div className="cv-entry-meta">
            <div>April 2023 – Jun 2023</div>
            <em>Shalimar Bagh, New Delhi</em>
          </div>
        </div>

        <ul>
          <li>Built a web app for creators to link all social handles.</li>
        </ul>
      </div>
    </section>

    <section className="cv-section">
      <h2>Projects</h2>

      <div className="cv-project-list">
        <div className="cv-project-row">
          <strong>UDISE+</strong>
          <span>|</span>
          <em>Figma, React, Framer, Behance, Claude</em>
          <time>December 2025</time>
        </div>

        <div className="cv-project-row">
          <strong>HCL Product</strong>
          <span>|</span>
          <em>Figma, React, Behance</em>
          <time>May 2025</time>
        </div>

        <div className="cv-project-row">
          <strong>Shifty</strong>
          <span>|</span>
          <em>Figma, React, Behance</em>
          <time>Feb 2024</time>
        </div>

        <div className="cv-project-row">
          <strong>RideOn</strong>
          <span>|</span>
          <em>Figma, React, Behance</em>
          <time>July 2023</time>
        </div>
      </div>
    </section>

    <section className="cv-section cv-skills-section">
      <h2>Skills</h2>

      <div className="cv-skill-line">
        <strong>Skillset:</strong>{" "}
        User Experience Designing, User Interface Designing, Prototyping, Research,
        Wireframing, Card Sorting, Industry Specific Designing, Leadership
      </div>

      <div className="cv-skill-line">
        <strong>Designer Tools:</strong>{" "}
        Figma, Framer, AdobeXD, Behance, Sketch, Balsamic, Canva, Photoshop,
        Illustrator, Spline
      </div>

      <div className="cv-skill-line">
        <strong>Libraries Worked On:</strong>{" "}
        Mantine, ReactJS
      </div>
    </section>
  </div>
);

export default function ShivamCV() {
  const [zoom, setZoom] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768
        ? Math.max(Math.floor(((window.innerWidth - 30) / 794) * 100), 35)
        : 100;
    }
    return 100;
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setZoom(
          Math.max(Math.floor(((window.innerWidth - 30) / 794) * 100), 35)
        );
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

    const opt = {
      margin: 0,
      filename: "Shivam_Tiwari_CV.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      },
      jsPDF: {
        unit: "px",
        format: [794, 1123],
        orientation: "portrait",
      },
    };

    await html2pdf().set(opt).from(element).save();
  };

  return (
    <>
      {/* Hidden clean A4 version used for PDF export */}
      <div className="cv-pdf-export-host" aria-hidden="true">
        <div id="pdf-export-container">
          <CVPage id="pdf-page-1" />
        </div>
      </div>

      <div className="cv-viewer-container">
        <div className="cv-viewer-header">
          <div className="cv-header-title">
            <Link
              to="/"
              className="cv-back-button"
              aria-label="Back to portfolio"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </Link>

            <svg width="24" height="24" viewBox="0 0 24 24" fill="#F40F02">
              <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM16.5 9v1.5h-1.5V9h1.5zM3 6H1.5v14.5c0 1.38 1.12 2.5 2.5 2.5H19v-1.5H4c-.55 0-1-.45-1-1V6z" />
            </svg>

            <span>shivam cv.pdf</span>
          </div>
        </div>

        <div className="cv-toolbar">
          <button
            className="cv-icon-btn"
            onClick={() => setIsSidebarOpen((open) => !open)}
            title="Toggle page preview"
            aria-label="Toggle page preview"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
          </button>

          <div className="cv-toolbar-group cv-page-counter">
            <span>Page</span>
            <span className="cv-page-number">{currentPage}</span>
            <span>/ 1</span>
          </div>

          <div className="cv-toolbar-spacer" />

          <button
            className="cv-icon-btn"
            onClick={handleDownloadPdf}
            title="Download PDF"
            aria-label="Download PDF"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </button>

          <button
            className="cv-icon-btn"
            onClick={handlePrint}
            title="Print"
            aria-label="Print"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
          </button>

          <div className="cv-toolbar-divider" />

          <div className="cv-toolbar-group cv-zoom-group">
            <button
              className="cv-icon-btn"
              onClick={handleZoomOut}
              title="Zoom out"
              aria-label="Zoom out"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>

            <span className="cv-zoom-value">{zoom}%</span>

            <button
              className="cv-icon-btn"
              onClick={handleZoomIn}
              title="Zoom in"
              aria-label="Zoom in"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="cv-main-area">
          {isSidebarOpen && (
            <aside className="cv-sidebar">
              <div className="cv-sidebar-title">Pages</div>
              <button
                className="cv-thumbnail-container active"
                onClick={() => {
                  setCurrentPage(1);
                  scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <div className="cv-thumbnail">
                  <CVPage />
                </div>
                <div className="cv-thumbnail-num">1</div>
              </button>
            </aside>
          )}

          <div
            className="cv-content-scroll"
            ref={scrollRef}
            onScroll={(e) => {
              setCurrentPage(e.currentTarget.scrollTop > 300 ? 1 : 1);
            }}
          >
            <div className="cv-zoom-container">
              <div
                className="cv-page-wrapper"
                style={{
                  width: `${794 * (zoom / 100)}px`,
                  height: `${1123 * (zoom / 100)}px`,
                  minWidth: `${794 * (zoom / 100)}px`,
                  minHeight: `${1123 * (zoom / 100)}px`,
                }}
              >
                <div
                  className="cv-page-inner"
                  style={{ transform: `scale(${zoom / 100})` }}
                >
                  <CVPage id="page-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
