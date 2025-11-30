import { Link } from "react-router-dom";

export default function Navigation() {
        return (
                <nav className="navbar" id="repulse-navbar">
                        <Link to="/">home</Link>
                        <Link to="/about">about</Link>
                        <Link to="/skills">skills</Link>
                        <Link to="/projects">projects</Link>
                        <Link to="/contact">contact</Link>
                </nav>
        );
}

