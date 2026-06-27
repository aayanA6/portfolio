import type { WindowState } from "@/lib/os-store";
import WelcomeWindow from "@/components/windows/WelcomeWindow";
import AboutWindow from "@/components/windows/AboutWindow";
import ProjectsWindow from "@/components/windows/ProjectsWindow";
import ProjectWindow from "@/components/windows/ProjectWindow";
import SkillsWindow from "@/components/windows/SkillsWindow";
import ExperienceWindow from "@/components/windows/ExperienceWindow";
import ResumeWindow from "@/components/windows/ResumeWindow";
import ContactWindow from "@/components/windows/ContactWindow";
import MinesweeperWindow from "@/components/windows/MinesweeperWindow";
import RecycleWindow from "@/components/windows/RecycleWindow";
import CertificationsWindow from "@/components/windows/CertificationsWindow";
import CertificateWindow from "@/components/windows/CertificateWindow";

export function renderWindowContent(win: WindowState) {
  switch (win.type) {
    case "welcome":
      return <WelcomeWindow />;
    case "about":
      return <AboutWindow />;
    case "projects":
      return <ProjectsWindow />;
    case "project":
      return <ProjectWindow index={(win.props?.index as number) ?? 0} />;
    case "skills":
      return <SkillsWindow />;
    case "experience":
      return <ExperienceWindow />;
    case "resume":
      return <ResumeWindow />;
    case "contact":
      return <ContactWindow />;
    case "minesweeper":
      return <MinesweeperWindow />;
    case "recycle":
      return <RecycleWindow />;
    case "certifications":
      return <CertificationsWindow />;
    case "certificate":
      return <CertificateWindow index={(win.props?.index as number) ?? 0} />;
    default:
      return null;
  }
}
