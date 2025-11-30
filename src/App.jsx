import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
        return (
                <Router>
                        <Navigation />
                        <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/skills" element={<Skills />} />
                                <Route path="/projects" element={<Projects />} />
                                <Route path="/contact" element={<Contact />} />
                        </Routes>
                </Router>
        );
}
