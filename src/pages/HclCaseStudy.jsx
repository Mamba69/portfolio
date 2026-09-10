import CaseStudyPage from "../components/CaseStudyPage";
import hclData from "../data/hcl";

const prevProject = null; // will point to UDISE+ replacement once that page exists
const nextProject = { title: "Shifty", link: "/work/shifty" };

export default function HclCaseStudy() {
  return (
    <CaseStudyPage
      data={hclData}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
