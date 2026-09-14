// NOTE: This is a live, deployed government platform under NDA.
// The real product/data-source name is not used anywhere in this file or on the site.
// All copy below is written around the public-facing metrics visible on screen,
// not internal project details.

import saHero from "../assets/students analytics/sa hero.png";
import saLogin from "../assets/students analytics/sa login.png";
import saStudent from "../assets/students analytics/sa student analytics.png";
import saTeacher from "../assets/students analytics/sa teacher analytics.png";
import saSchool from "../assets/students analytics/sa school analytics.png";
import saComparison from "../assets/students analytics/udise casestudy.webp";
const studentAnalyticsData = {
  title: "Turning a dense national education dataset into a dashboard (Under UDA)",

  tagline:
    "Student Analytics Dashboard unifies national school data — enrollment, teacher deployment, infrastructure, and state-by-state comparisons — into one clean, modern interface, replacing a dense, hard-to-navigate government portal.",

  heroImage: saHero,

  stats: [
    {
      value: "24.69 Cr",
      label: "Students covered across every state and union territory",
    },
    {
      value: "14.71 L",
      label: "Schools represented — government, aided, and private",
    },
  ],

  meta: [
    {
      label: "Type",
      value: "Government / Public Data Platform",
    },
    {
      label: "Role",
      value: "UX/UI Designer",
    },
    {
      label: "Platform",
      value: "Web App (Desktop)",
    },
    {
      label: "Focus",
      value: "Data Visualization & Information Architecture",
    },
  ],

  challenge: {
    paragraph:
      "The underlying national education dataset — covering 25 crore students, 1 crore teachers, and 14.7 lakh schools — is enormous, official, and genuinely valuable. But the existing government portal presenting it was dense, dated, and hard for anyone outside the system to actually use, burying meaningful insights under clunky navigation and unfiltered tables.",

    bullets: [
      "Government data portals are typically table-heavy, with little visual hierarchy to guide a reader to what matters",
      "No clear narrative — raw numbers with no framing for what a stat like '0.94 Gender Parity Index' actually means",
      "Comparing states or education levels required manually cross-referencing separate reports",
      "Login and access flows added friction before a user could see any data at all",
    ],

    image: saLogin,
  },

  process: {
    paragraph:
      "The redesign treats each major data domain — students, teachers, schools, and cross-state comparisons — as its own guided section, each opening with a plain-language question ('How are students distributed by education level?') instead of a raw chart. Every section pairs a primary bar-chart breakdown with supporting stat cards that explain what the numbers mean in context.",

    workflow: [
      "Audit",
      "Information Architecture",
      "Wireframe",
      "Visual Design",
      "Prototype",
    ],

    tools: [
      "Figma",
      "Data Visualization",
      "Design System",
      "Prototyping",
    ],

    features: [
      "Section-based layout: Student Analytics, Teacher & PTR Analytics, School Analytics, and Comparison Analytics",
      "Every chart opens with a plain-language headline stating the key takeaway, not just a chart title",
      "Supporting stat cards (e.g. Gender Parity Index, PTR ratios) placed beside every chart for immediate context",
      "Pull-quote callouts that surface the single most important insight from each dataset",
      "Consistent 'Open Dashboard' entry point from every section into deeper, filterable data",
    ],
  },

  solution: {
    paragraph:
      "Every dashboard section follows the same reading pattern: a headline framed as the insight itself, a short explanatory paragraph, a horizontal bar-chart breakdown on the left, and supporting stat cards on the right for the numbers that need more context than a bar can give. That consistency means once a user understands one section, they understand all of them.",

    bullets: [
      "Foundational, Preparatory, Middle, and Secondary enrollment shown as a single readable bar comparison instead of a raw table",
      "Gender Parity Index broken down by education level, not just as one national average",
      "Teacher analytics ties workforce data (54.2% female, PTR by category) directly to enrollment data on the same view",
      "Rural vs. urban and state-by-state comparisons surfaced as their own dedicated section rather than buried filters",
    ],

    image: saStudent,
    imageSecondary: saTeacher,
  },

  challenges: {
    paragraph:
      "The core challenge was density: this dataset has enough dimensions (education level, gender, location, state, school type) to support dozens of charts per section, but the interface had to stay legible to someone who isn't a data analyst — a parent, a journalist, or a policymaker checking one number.",

    bullets: [
      "Deciding which of dozens of possible cross-tabulations deserved a dedicated section versus a secondary filter",
      "Writing headlines that state an actual insight ('69% of schools meet PTR ≤ 30') without oversimplifying the underlying data",
      "Keeping bar-chart comparisons readable when values span very different scales (crores of students vs. single-digit ratios)",
      "Designing a login/access flow that still feels lightweight for a public information platform",
    ],
  },

  result: {
    paragraph:
      "The result is a platform where a single glance at any section answers a real question — how students are distributed, how teachers are deployed, how schools are run, and how states compare — each backed by the same official dataset the original government portal used, just organized around what someone would actually want to know.",

    bullets: [
      "Four fully designed analytics sections: Student, Teacher & PTR, School, and Comparison Analytics",
      "Every section pairs a plain-language insight headline with the underlying chart and supporting stats",
      "Consistent visual language (color-coded categories, stat cards, pull-quotes) applied across all four domains",
      "Redesigned login flow that keeps access simple without compromising on security requirements",
    ],

    image: saComparison,
  },

  closingImage: saSchool,
};

export default studentAnalyticsData;