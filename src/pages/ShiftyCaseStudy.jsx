import CaseStudyPage from "../components/CaseStudyPage";
import shiftyData from "../data/shifty";

// prevProject is null until the HCL case study page is built — pointing
// it at /work/hcl before that route exists just navigates to a blank page.
const prevProject = null; // will become { title: "HCL", link: "/work/hcl" }
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
