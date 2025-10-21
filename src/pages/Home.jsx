import { AboutSection } from "../components/AboutSection"
import { ContactSection } from "../components/ContactSection"
import { FooterSection } from "../components/FooterSection"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { ProjectSection } from "../components/ProjectSection"
import { SkillsSection } from "../components/SkillsSection"
import { StarBackground } from "../components/starBackground"
import { ThemeToggle  } from "../components/ThemeToggle"

export const Home = () =>{
    return <div className="min-h-screen
                            bg-background 
                            text-foreground
                            overflow-x-hidden ">
        
        {/* theme toggle */}
        <ThemeToggle/>

        {/* background effect */}
        <StarBackground/>
        
        {/* nav bar */}
        <Navbar/>

        {/* Main section  */}
        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectSection/>
            <ContactSection/>
            
        </main>


        {/* footer */}
        <FooterSection/>
    </div>
}