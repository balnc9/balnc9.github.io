import "./index.css"

import Dashboard from "./components/Dashboard";
import IntroScreen from "./components/IntroScreen";
import About from "./components/About";
import Skills from "./components/Skills";
import PortfolioDisplay from "./components/PortfolioDisplay";
import ContactSection from "./components/ContactSection";


export default function App() {
        return (
            <>
                <Dashboard />

                <section id ="intro" className = "section intro-section">
                    <IntroScreen />
                </section>

                <section id ="about" className = "section about-section">
                    <About />
                </section>

                <section id ="skills" className = "section skills-section">
                    <Skills />
                </section>

                <section id="portfolio" className="portfolio-section">
                    <PortfolioDisplay />
                </section>

                <section id="contact" className="section contact-section">
                    <ContactSection />
                </section>
            </>
        );
}
