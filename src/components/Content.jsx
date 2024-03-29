import { ContactSection } from "./ContactSection"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { ProjectWall } from "./ProjectWall"
import { SkillsSection } from "./SkillsSection"
import { TechSection } from "./TechSection"


export const Content = () => {
  return (
    <div>
      <Header />
      <TechSection />
      <ProjectWall />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
