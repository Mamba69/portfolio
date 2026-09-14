// Content sourced from Sehat_Sarthi.pdf — a UX research + product design
// project on improving access to Mobile Medical Units (MMUs) in Tehri and
// Dhanaulti, Uttarakhand.

import sehatHero from "../assets/SehatSarthiCaseStudy/sehat-hero.jpg";
import sehatJourney from "../assets/SehatSarthiCaseStudy/sehat-journey-map.jpg";
import sehatPersona from "../assets/SehatSarthiCaseStudy/sehat-persona.jpg";
import sehatTaskFlow from "../assets/SehatSarthiCaseStudy/sehat-task-flow.jpg";
import sehatOnboarding from "../assets/SehatSarthiCaseStudy/sehat-onboarding.jpg";
import sehatHomeMmu from "../assets/SehatSarthiCaseStudy/sehat-home-mmu.jpg";
import sehatTelehealth from "../assets/SehatSarthiCaseStudy/sehat-telehealth.jpg";

const sehatSarthiData = {
  title: "Designing Sehat Sarthi to bring healthcare access to remote hill communities",
  tagline:
    "Sehat Sarthi is a mobile app that improves access to Mobile Medical Units (MMUs) for residents of Tehri and Dhanaulti — helping people track MMU visits, consult doctors remotely, order medicine, and raise medical issues without traveling hours to the nearest hospital.",
  heroImage: sehatHero,

  stats: [
    { value: "19", label: "Residents interviewed for primary research" },
    { value: "8", label: "Core research insights shaping the final design" },
  ],

  meta: [
    { label: "Type", value: "Personal Case Study" },
    { label: "Role", value: "UX Researcher & Product Designer" },
    { label: "Platform", value: "Mobile App (iOS / Android)" },
    { label: "Focus", value: "Rural Healthcare Access" },
  ],

  figmaLink:
    "https://www.figma.com/design/ZWKP6rCkftooV3q1eTbIo2/Professional-design-Case-Study--Copy-?node-id=24-172622",

  challenge: {
    paragraph:
      "Sehat Ki Sawari (SKS) Mobile Medical Units already bring doctors, lab tests, and medicine to remote villages in Tehri and Dhanaulti — but residents still struggle to actually use them. Primary research with 19 residents surfaced a consistent pattern: people wanted the care, but couldn't reliably find out when it was coming, what it covered, or how to get to it in time.",
    bullets: [
      "Distance to the MMU is a major barrier for residents with limited transportation",
      "Many residents don't understand the full range of services the MMU actually offers",
      "Clinic hours are inconvenient for those working long hours",
      "A shortage of specialists leads to long waits for specific conditions",
      "Limited access to technology makes it hard to book appointments or access telehealth",
      "Confusing paperwork and long phone wait times are especially hard for those with limited literacy",
    ],
    image: sehatJourney,
  },

  process: {
    paragraph:
      "The research centered on Pushpa — a 34-year-old construction worker managing a weekly medical need with no reliable transportation and no awareness of financial aid she may qualify for. Mapping her actual journey (from the pain of a medical issue through to feeling lost about what to do) turned scattered complaints into a clear set of design opportunities at each emotional low point.",
    workflow: ["Secondary Research", "Persona", "Journey Map", "Task Flows", "UI Design"],
    tools: ["Figma", "User Interviews", "Persona Mapping", "Journey Mapping", "Task Flow Diagrams"],
    features: [
      "Real-time MMU schedule so residents know exactly when care is coming to their area",
      "Teleconsultation with a doctor for issues that don't require an in-person visit",
      "Medicine ordering with delivery dates tied to the next MMU visit, not a generic courier",
      "A simple medical issue ticketing system with urgency levels, for residents unsure where to start",
      "Menstrual health awareness content built directly into the app",
    ],
    image: sehatPersona,
  },

  solution: {
    paragraph:
      "Every core task in the app follows the same shape: open the app, get to the relevant section in one or two taps, and finish without needing outside help. Onboarding asks only for what's needed to personalize the experience (name, age, gender, location), and the home screen leads immediately with upcoming MMU visits — the single piece of information residents said they needed most.",
    bullets: [
      "Lightweight onboarding: phone number, OTP, and a short profile — nothing else required to start",
      "Home screen opens with 'Upcoming MMUs' so the most time-sensitive information is seen first",
      "Each MMU visit shows the doctor team, date, time, and exact services available",
      "Health awareness content (including menstrual health) surfaced directly on the home screen",
    ],
    image: sehatOnboarding,
    imageSecondary: sehatTaskFlow,
  },

  challenges: {
    paragraph:
      "The hardest part of this project wasn't the interface — it was designing for people the research described as having limited literacy, inconsistent internet access, and real hesitation around technology. Every flow had to work for someone using a basic smartphone for the first time, without assuming comfort with typical app conventions.",
    bullets: [
      "Designing task flows simple enough for users with limited digital literacy, without dumbing down real functionality",
      "Coordinating medicine delivery dates around MMU visit schedules instead of standard shipping windows",
      "Building trust in a teleconsultation feature for users who've never used video calling for healthcare",
      "Balancing a bilingual (Hindi/English) experience against a clean, uncluttered interface",
    ],
  },

  result: {
    paragraph:
      "The final prototype covers the full loop residents described needing: see when the MMU is coming, consult a doctor remotely if it can't wait, order medicine timed to the next visit, and raise a medical issue when something falls outside all of the above.",
    bullets: [
      "Complete onboarding-to-home flow, personalized around a resident's location and the nearest MMU",
      "Full medicine ordering flow with delivery synced to upcoming MMU dates",
      "Teleconsultation flow for remote doctor access between MMU visits",
      "Ticketing system for raising medical issues with urgency levels and optional photo/document attachments",
    ],
    image: sehatHomeMmu,
  },

  closingImage: sehatTelehealth,
};

export default sehatSarthiData;
