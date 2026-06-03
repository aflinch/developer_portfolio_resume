import HeroSection from '../HeroSection';
import AboutSection from '../AboutSection';
import SkillsSection from '../SkillsSection';
import RecentProjectsSection from '../RecentProjectsSection';
import Footer from '../../../Components/Footer';

export default function Home () {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <RecentProjectsSection />
            <Footer />
        </>
    )
}