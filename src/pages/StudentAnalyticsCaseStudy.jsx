import CaseStudyPage from "../components/CaseStudyPage";
import studentAnalyticsData from "../data/studentAnalytics";

// No figmaLink on this data object — this is a live deployed platform, not
// a Figma prototype, so the "View on Figma" CTA in CaseStudyPage simply
// won't render for this page.

const prevProject = null;
const nextProject = { title: "HCL", link: "/work/hcl" };

export default function StudentAnalyticsCaseStudy() {
  return (
    <CaseStudyPage
      data={studentAnalyticsData}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
