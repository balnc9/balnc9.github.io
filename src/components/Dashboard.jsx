export default function Dashboard() {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth"});
        }
    };

    return (
        <nav className="dashboard">
            <button onClick = {() => scrollTo("intro")}>Home</button>
            <button onClick = {() => scrollTo("about")}>About</button>
            <button onClick = {() => scrollTo("skills")}>Skills</button>
            <button onClick = {() => scrollTo("portfolio")}>Portfolio</button>
            <button onClick = {() => scrollTo("contact")}>Contact</button>
        </nav>
    )

}
