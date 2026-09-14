import CaseStudyPage from "../components/CaseStudyPage";
import sehatSarthiData from "../data/sehatSarthi";

const prevProject = { title: "Ride On", link: "/work/ride-on" };
// Last in the chain for now — update once Rapido or another case study
// page is built after this one.
const nextProject = null;

export default function SehatSarthiCaseStudy() {
  return (
    <CaseStudyPage
      data={sehatSarthiData}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}