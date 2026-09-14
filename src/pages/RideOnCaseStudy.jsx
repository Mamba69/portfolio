import CaseStudyPage from "../components/CaseStudyPage";
import rideonData from "../data/rideon";

const prevProject = { title: "Shifty", link: "/work/shifty" };
// Rapido doesn't have an inside page yet, so this skips straight to Sehat
// Sarthi rather than linking to a page that doesn't exist. Once Rapido's
// page is built, insert it here and update Sehat Sarthi's prevProject too.
const nextProject = { title: "Sehat Sarthi", link: "/work/sehat-sarthi" };

export default function RideOnCaseStudy() {
  return (
    <CaseStudyPage
      data={rideonData}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}