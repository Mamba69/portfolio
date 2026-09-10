// Content sourced from HCL.pdf (screens) plus the problem framing provided
// directly: traditional RFP/vendor selection is slow and costly, and this
// product speeds it up with AI-guided requirement gathering + vendor matching.

import hclHero from "../assets/hcl/hcl-hero.jpg";
import hclChat from "../assets/hcl/hcl-ai-chat.jpg";
import hclVendors from "../assets/hcl/hcl-suggested-vendors.jpg";
import hclPricing from "../assets/hcl/hcl-suggested-pricing.jpg";

const hclData = {
  title: "How HCL cuts vendor selection for RFPs from months to minutes",
  tagline:
    "HCL's procurement platform replaces the traditional RFP and vendor-selection process with an AI-guided workflow — understand your requirement, get matched to suitable vendors, and contact them directly, instead of running a manual search that drags on for months.",
  heroImage: hclHero,

  stats: [
    { value: "5", label: "Guided steps from requirement to vendor shortlist" },
    { value: "2", label: "Ways to define a requirement — AI-assisted or manual" },
  ],

  meta: [
    { label: "Type", value: "Enterprise SaaS" },
    { label: "Role", value: "UX/UI Designer" },
    { label: "Platform", value: "Web App (Desktop)" },
    { label: "Focus", value: "Procurement & Vendor Matching" },
  ],

  challenge: {
    paragraph:
      "Traditional RFP creation and vendor selection is a slow, manual process — procurement teams spend months drafting requirements, floating RFPs, and comparing vendors by hand, with costs piling up the longer it drags on. Buyers need a faster way to turn a rough requirement into a shortlist of vendors they can actually trust and contact.",
    bullets: [
      "Manually drafting an RFP and requirement documents takes weeks before any vendor is even contacted",
      "Comparing vendors on price, experience, and fit is done ad hoc, with no consistent benchmark",
      "No guided way to figure out which RFP type (Open, Closed, Competitive, Single-Source) actually fits the need",
      "Full cycles from requirement to signed vendor commonly stretch into months, driving up procurement cost",
    ],
    image: hclChat,
  },

  process: {
    paragraph:
      "The workflow is split into two paths from the start — an AI Assistance mode that gathers requirements conversationally, and a Manual Selection mode for teams who already know exactly what they need. Both paths converge into the same document analysis, vendor matching, and pricing benchmark steps.",
    workflow: ["Selection", "Documentation", "Submission", "Suggested Vendors", "Suggested Pricing"],
    tools: ["Figma", "Conversational AI Flow Design", "Design System", "Prototyping"],
    features: [
      "Conversational AI that suggests the most suitable RFP type from a plain-language description",
      "AI document analysis that flags missing elements (e.g. performance benchmarks, compliance standards) before submission",
      "Guided questionnaire covering project scope, budget & timeline, and vendor preferences",
      "Vendor shortlist with project count and years of experience shown upfront, plus one-click 'Invite Vendor'",
      "Pricing benchmark breakdown so buyers can sanity-check a quote against market data before committing",
    ],
  },

  solution: {
    paragraph:
      "Instead of a blank RFP template, the buyer answers a short guided questionnaire — or lets the AI suggest an RFP type from a one-line description of what they need. The system then surfaces a shortlist of vendors matched to those preferences, each with enough context (project history, experience) to make a direct decision without a lengthy back-and-forth.",
    bullets: [
      "AI recommends an RFP type (e.g. 'Software License Agreement') directly from a plain-language request",
      "Choice between Open, Closed, Competitive, and Single-Source RFPs, each explained in plain terms",
      "Suggested Vendors screen shows a shortlist with project count and experience, and a direct 'Invite Vendor' action",
      "No brokered middle step — buyers contact shortlisted vendors directly from the platform",
    ],
    image: hclVendors,
  },

  challenges: {
    paragraph:
      "The hardest part of this project was designing trust into an AI recommendation — buyers making high-value procurement decisions won't act on a suggestion they don't understand the reasoning behind. The interface had to make the AI's logic visible without turning every screen into a wall of data.",
    bullets: [
      "Making AI-suggested RFP types and vendor matches feel justified, not like a black box",
      "Fitting a 5-step procurement workflow into a single guided flow without overwhelming first-time users",
      "Presenting dense pricing/benchmark data (subdeliverables, complexity, cost) in a scannable format",
      "Supporting two very different user paths (AI-assisted vs. manual) without duplicating the whole UI",
    ],
  },

  result: {
    paragraph:
      "The end-to-end flow — from describing a requirement to reviewing a benchmarked price and inviting a vendor — replaces a process that traditionally takes months with a guided session that can be completed in a single sitting, with an AI-reviewed document trail behind every decision.",
    bullets: [
      "Full workflow designed end-to-end: RFP type selection, AI document analysis, vendor shortlist, and pricing benchmark",
      "AI-guided path and manual path both converge into the same vendor-matching and pricing steps",
      "Benchmark Breakdown view gives buyers a defensible cost reference before they invite a vendor",
      "Direct vendor contact built into the platform, removing the traditional broker/back-and-forth step",
    ],
    image: hclPricing,
  },
};

export default hclData;
