import CaseStudyPage from "../components/CaseStudyPage";
import rideonData from "../data/rideon";

const prevProject = { title: "Shifty", link: "/work/shifty" };
// nextProject is null until the Rapido case study page is built — pointing
// it at /work/rapido before that route exists just navigates to a blank page.
const nextProject = null; // will become { title: "Rapido", link: "/work/rapido" }

export default function RideOnCaseStudy() {
  return (
    <CaseStudyPage
      data={rideonData}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
