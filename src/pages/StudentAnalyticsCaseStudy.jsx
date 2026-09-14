import CaseStudyPage from "../components/CaseStudyPage";
import studentAnalyticsData from "../data/studentAnalytics";

// First in the chain — no previous project.
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