import CaseStudyPage from "../components/CaseStudyPage";
import sehatSarthiData from "../data/sehatSarthi";

const prevProject = null; // update once the Rapido case study page exists
const nextProject = null; // update once another case study page exists after this one

export default function SehatSarthiCaseStudy() {
  return (
    <CaseStudyPage
      data={sehatSarthiData}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
