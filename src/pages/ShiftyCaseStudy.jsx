import CaseStudyPage from "../components/CaseStudyPage";
import shiftyData from "../data/shifty";

const prevProject = { title: "HCL", link: "/work/hcl" };
const nextProject = { title: "Ride On", link: "/work/ride-on" };

export default function ShiftyCaseStudy() {
  return (
    <CaseStudyPage
      data={shiftyData}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
