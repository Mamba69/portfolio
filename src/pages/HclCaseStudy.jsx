import CaseStudyPage from "../components/CaseStudyPage";
import hclData from "../data/hcl";

const prevProject = { title: "Student Analytics Dashboard", link: "/work/student-analytics" };
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