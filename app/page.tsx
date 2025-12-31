import { Navigation } from "@/components/navigation"
import { HeroSimple } from "@/components/sections/hero-simple"
import { AboutSection } from "@/components/sections/about"
import { ProjectsSection } from "@/components/sections/projects"
import { SkillsSection } from "@/components/sections/skills"
import { CertificationsSection } from "@/components/sections/certifications"
import { ResumeSection } from "@/components/sections/resume"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="bg-black">
      <Navigation />
      <HeroSimple />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
