// Content sourced from Ride_On.pdf
// Screens sourced directly from the same PDF's rendered pages.

import rideonHero from "../assets/rideon/rideon-hero.jpg";
import rideonRideRequest from "../assets/rideon/rideon-ride-request.jpg";
import rideonDriverOnboarding from "../assets/rideon/rideon-driver-onboarding.jpg";
import rideonFinalScreens from "../assets/rideon/rideon-final-screens.jpg";

const rideonData = {
  title: "How Ride On helps E-rickshaw drivers earn more and access credit",
  tagline:
    "Ride On is a mobile app that helps E-rickshaw drivers earn more money and get loans without a credit score — enhanced around the real needs and habits of drivers themselves.",
  heroImage: rideonHero,

  // Process/output stats from the case study itself — Ride On is a personal
  // case study without a live deployment, so these reflect research depth
  // and design scope rather than business KPIs.
  stats: [
    { value: "9", label: "Research insights gathered from drivers & passengers" },
    { value: "2", label: "Full onboarding flows designed — Driver side & Consumer side" },
  ],

  meta: [
    { label: "Type", value: "Personal Case Study" },
    { label: "Role", value: "UX/UI Designer (Solo)" },
    { label: "Platform", value: "Mobile App (iOS / Android)" },
    { label: "Focus", value: "Gig Mobility & Alternative Credit" },
  ],

  challenge: {
    paragraph:
      "E-rickshaws are one of the cheapest ways to start earning in Indian cities — Delhi alone grew from just 25 e-rickshaws in 2010 to over 10 lakh today. But the drivers running them, like Ravi (a driver supporting a family of four) and passengers like Rajesh (a shop owner who rides daily), were both stuck dealing with an unreliable, cash-only, trust-poor system.",
    bullets: [
      "Drivers have no formal credit score, so banks reject their loan applications outright",
      "Fares are inconsistent — drivers raise prices on their own judgement, passengers can't predict cost",
      "Rude behaviour and conflicts between drivers competing for the same rides",
      "No visibility into nearby charging stations, causing wasted downtime",
      "Passengers have to bargain every ride and can't book rides in advance from home",
      "Drivers have limited navigation, tracking, or payment options",
    ],
    image: rideonRideRequest,
  },

  process: {
    paragraph:
      "The project mapped two connected personas — a driver (Ravi) trying to increase and prove his income, and a passenger (Rajesh) who just wants a predictable, fair ride — then designed two coordinated apps (Driver side and Consumer side) sharing one backend logic.",
    workflow: ["Empathize", "Define", "Ideate", "Prototype", "Test"],
    tools: ["Figma", "User Interviews", "Persona Mapping", "Customer Journey Mapping", "Prototyping"],
    features: [
      "Credit limit calculated from a driver's ride count, rating, and earnings — no credit score needed",
      "Customizable EMI repayment so drivers can pay back loans in small, flexible amounts",
      "Nearby charging station finder with live availability and connector type",
      "Daily ride goals with gamification to encourage consistent earning and on-time repayment",
    ],
  },

  solution: {
    paragraph:
      "On the consumer side, booking a ride is reduced to picking a drop location and watching a live search-and-match screen — no bargaining, no ambiguity on fare. On the driver side, every ride completed feeds directly into a credit profile the driver can actually see and act on, turning informal income into something a bank-less system can still trust.",
    bullets: [
      "Live map-based ride booking with drop-location autocomplete",
      "Real-time 'searching for nearby driver' state with one-tap cancel",
      "Transparent, upfront fare shown before the ride starts",
      "Driver-facing ride requests show fare, distance, and passenger rating before accepting",
    ],
    image: rideonDriverOnboarding,
  },

  challenges: {
    paragraph:
      "The core challenge was designing a credit system for people the traditional financial system doesn't track at all — there was no existing pattern to borrow from. It also meant building two apps (driver and consumer) that had to feel independent to each user, while staying perfectly in sync behind the scenes.",
    bullets: [
      "Designing a trustworthy 'credit score' substitute from ride data alone, with no banking precedent",
      "Keeping loan and EMI screens simple for drivers who may not be financially literate",
      "Synchronizing two separate onboarding flows (driver vs. consumer) under one shared ride-matching system",
      "Surfacing charging station availability without cluttering the core booking flow",
    ],
  },

  result: {
    paragraph:
      "The final prototype delivers a complete loop: drivers onboard, drive, and build a visible credit history; consumers book rides without bargaining; and both sides can find and use EV charging infrastructure directly from the app.",
    bullets: [
      "End-to-end loan flow: credit limit, EMI calculator, repayment, and charging-station finder",
      "Full consumer booking journey from drop-location entry to fare confirmation",
      "Multiple payment methods supported, including UPI, cards, and cash",
      "Complete onboarding for both Driver and Consumer sides designed and prototyped in Figma",
    ],
    image: rideonFinalScreens,
  },
};

export default rideonData;
