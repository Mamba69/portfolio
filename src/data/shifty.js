// Content sourced from CASE_STUDY_-_shifty.pdf
// Screens sourced directly from the same PDF's embedded assets.

import shiftyHero from "../assets/shifty/shifty-explore.png";
import shiftySearch from "../assets/shifty/shifty-search-results.png";
import shiftyRoomDetail from "../assets/shifty/shifty-room-detail-360.png";
import shiftyDashboard from "../assets/shifty/shifty-lister-dashboard.png";

const shiftyData = {
  title: "How Shifty simplifies accommodation & roommate discovery for students",
  tagline:
    "Shifty is a mobile app that helps college students in non-domicile states find available rooms, PGs, and compatible roommates — cutting out brokers and building trust through transparency.",
  heroImage: shiftyHero,

  // NOTE: these are process/output stats drawn from the case study itself
  // (research + IA), not live product KPIs — Shifty doesn't have deployed
  // metrics since it's a personal case study. Swap these for real numbers
  // if you have them (e.g. usability test results).
  stats: [
    { value: "9", label: "User research insights synthesized from interviews" },
    { value: "30+", label: "Screens designed across onboarding, listing & chat flows" },
  ],

  meta: [
    { label: "Type", value: "Personal Case Study" },
    { label: "Role", value: "UX/UI Designer (Solo)" },
    { label: "Platform", value: "Mobile App (iOS / Android)" },
    { label: "Focus", value: "Student Housing & Roommate Matching" },
  ],

  challenge: {
    paragraph:
      "College students moving to non-domicile states for higher education struggle to find reliable, affordable accommodation. Research with students like Rakesh (a 1st-year student searching for a PG) and Akansha (a 3rd-year student searching for a roommate) surfaced a pattern of broken trust between tenants, roommates, and property owners.",
    bullets: [
      "Rude behaviour from PG owners over payment delays",
      "Conflicts of interest between roommates sharing a flat",
      "Lack of transparency about property details before moving in",
      "Owners refusing independent flats to bachelor students",
      "Most students rely on word-of-mouth from friends, with no reliable discovery tool",
      "High brokerage charges with little transparency on what's promised vs. delivered",
      "Users want accommodation close to their college, within a tight budget",
    ],
    image: shiftySearch,
  },

  process: {
    paragraph:
      "The project followed a standard UX process — from empathizing with two core user types (accommodation seekers and roommate seekers) through to a testable high-fidelity prototype covering onboarding, listings, and in-app messaging.",
    workflow: ["Empathize", "Define", "Ideate", "Prototype", "Test"],
    tools: ["Figma", "User Interviews", "Persona Mapping", "User Journey Maps", "Prototyping"],
    features: [
      "Direct chat with flat owners to cut out brokerage",
      "360° room view for more transparency before booking",
      "AI/ML-based roommate shortlisting from user profile data",
      "In-app KYC to improve safety and credibility",
      "Separate flows for Property Listers vs. Accommodation/Roommate seekers",
    ],
  },

  solution: {
    paragraph:
      "Shifty separates the experience into two clear paths from onboarding — Property Lister and Accommodation/Roommate Finder — then uses a shared design language across search, detail, and messaging so both sides of the marketplace feel consistent. A 360° room view and verified/KYC badges were introduced directly on listings to rebuild the trust that brokered PG searches had eroded.",
    bullets: [
      "Dual onboarding: differentiate Property Lister vs. Roommate/Accommodation Finder early",
      "Explore tab with tabbed switching between Accommodation and Roommates",
      "Verified badges and KYC on listings and profiles",
      "In-app messaging to replace broker-mediated contact",
      "Favourites for both accommodations and potential roommates",
    ],
    image: shiftyRoomDetail,
  },

  challenges: {
    paragraph:
      "The biggest design challenge was building one coherent information architecture for what is really two products in one — a listings marketplace and a roommate-matching tool — without the app feeling split or confusing on first open.",
    bullets: [
      "Structuring a dual-sided marketplace (listers vs. seekers) under one IA without duplicating flows",
      "Designing trust signals (KYC, verification, 360° view) that feel reassuring, not bureaucratic",
      "Keeping filters (budget, compatibility, amenities, location) simple on a small screen",
      "Balancing an editorial, human tone against a data-heavy listings interface",
    ],
  },

  result: {
    paragraph:
      "The final prototype covers the full journey end-to-end: onboarding and KYC, browsing and filtering listings, a 360° room detail view, in-app messaging between users, and a lister's dashboard to manage booked vs. unbooked properties.",
    bullets: [
      "Complete onboarding-to-booking flow designed and prototyped in Figma",
      "Unified IA covering both Accommodation and Roommate discovery",
      "Lister dashboard for managing booked and unbooked flats",
      "In-app messaging system connecting seekers directly with listers",
    ],
    image: shiftyDashboard,
  },

  // closingImage intentionally removed — it duplicated the Final Result
  // image above and made the page feel repetitive.
};

export default shiftyData;
