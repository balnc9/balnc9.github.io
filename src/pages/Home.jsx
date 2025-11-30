import ParticlesBackground from "../components/ParticlesBackground";

export default function Home() {
        return (
                <>
                        <ParticlesBackground id="tsparticles" />
                        <div className="page-container" style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                minHeight: "100vh",
                                maxWidth: "700px",
                                paddingLeft: "6rem"
                        }}>
                                <div id="repulse-content" style={{
                                        backgroundColor: "rgba(255, 255, 255, 1)",
                                        padding: "3rem 4rem",
                                        borderRadius: "30px",
                                        display: "inline-block",
                                        minWidth: "450px"
                                }}>
                                        <div style={{ marginBottom: "2rem" }}>
                                                <div style={{
                                                        fontSize: "1.2rem",
                                                        marginBottom: ".75rem",
                                                        display: "flex",
                                                        alignItems: "baseline",
                                                        gap: "0.75rem"
                                                }}>
                                                        <span style={{ color: "#0066cc", fontSize: "1.5rem" }}>~</span>
                                                        <span style={{ fontSize: "2.5rem", fontWeight: "normal" }}>matthew chin</span>
                                                </div>
                                                <div style={{
                                                        fontSize: "1.2rem",
                                                        fontStyle: "italic",
                                                        color: "#000000",
                                                        paddingBottom: "0.25rem"
                                                }}>
                                                        umd.edu
                                                </div>
                                        </div>

                                        <div style={{ marginBottom: "1.5rem" }}>
                                                <h2 style={{
                                                        fontSize: "1.4rem",
                                                        marginBottom: "0.5rem",
                                                        fontWeight: 600
                                                }}>
                                                        about
                                                </h2>
                                                <p style={{
                                                        fontSize: "1rem",
                                                        lineHeight: "1.6",
                                                        color: "#000000"
                                                }}>
                                                        junior at the university of maryland studying computer science
                                                        interested in software engineering and web development
                                                </p>
                                        </div>

                                        <div style={{ marginBottom: "1.5rem", position: "relative" }}
                                                onMouseEnter={() => {
                                                        const canvas = document.getElementById("tsparticles");
                                                        if (canvas) canvas.style.pointerEvents = "none";
                                                }}
                                                onMouseLeave={() => {
                                                        const canvas = document.getElementById("tsparticles");
                                                        if (canvas) canvas.style.pointerEvents = "auto";
                                                }}>
                                                <h2 style={{
                                                        fontSize: "1.4rem",
                                                        marginBottom: "0.75rem",
                                                        fontWeight: "normal"
                                                }}>
                                                        links
                                                </h2>
                                                <div style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: "0.6rem",
                                                        fontSize: "1rem"
                                                }}>
                                                        <a href="https://github.com/balnc9"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                style={{ color: "#0066cc", textDecoration: "underline" }}>
                                                                github →
                                                        </a>
                                                        <a href="https://linkedin.com/in/matthewleechin"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                style={{ color: "#0066cc", textDecoration: "underline" }}>
                                                                linkedin →
                                                        </a>
                                                        <a href="mailto:mtwchin@gmail.com"
                                                                style={{ color: "#0066cc", textDecoration: "underline" }}>
                                                                email →
                                                        </a>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
        );
}

