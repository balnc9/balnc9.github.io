import { Link, useLocation } from "react-router-dom";

const links = [
        { to: "/", label: "home" },
        { to: "/about", label: "about" },
        { to: "/skills", label: "skills" },
        { to: "/projects", label: "projects" },
        { to: "/contact", label: "contact" },
];

export default function Navigation() {
        const location = useLocation();

        return (
                <nav className="navbar" id="repulse-navbar">
                        {links.map(({ to, label }) => (
                                <Link
                                        key={to}
                                        to={to}
                                        className={`nav-link${location.pathname === to ? " active" : ""}`}
                                >
                                        {label}
                                </Link>
                        ))}
                </nav>
        );
}
