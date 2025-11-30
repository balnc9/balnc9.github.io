export default function Skills() {
        return (
                <div className="page-container" style={{
                        padding: "5rem 3rem 2rem 3rem",
                        maxWidth: "1000px"
                }}>
                        <h1 style={{ marginBottom: "2rem" }}><b>skills page</b></h1>
                        <p style={{ marginBottom: "1rem" }}>I have developed a strong technical foundation and skillset through my coursework, projects, and work/research experiences. Below are some of the skills, technologies, and frameworks that I have come to be familiar with in my time as a student and professional.</p>
                        <h1 style={{ marginBottom: "2rem" }}><b>technical skills</b></h1>

                        <div style={{ marginBottom: "1rem" }}>
                                <h2 style={{ fontSize: "1.3rem", marginBottom: "0.75rem", fontWeight: 600 }}>Languages</h2>
                                <p>Java, Python, C</p>
                        </div>

                        <div style={{ marginBottom: "1rem" }}>
                                <h2 style={{ fontSize: "1.3rem", marginBottom: "0.75rem", fontWeight: 600 }}>Tools, Frameworks & Platforms</h2>
                                <p>Git, Spring Boot, Docker, Maven, BeautifulSoup4, ClaudeAPI, Vercel, React (JSX), Next.js, Tailwind, Chart.js, Linux</p>
                        </div>

                        <div style={{ marginBottom: "1rem" }}>
                                <h2 style={{ fontSize: "1.3rem", marginBottom: "0.75rem", fontWeight: 600 }}>Databases</h2>
                                <p>MySQL, Oracle LiveSQL, PostgreSQL</p>
                        </div>

                        <h1 style={{ marginBottom: "1rem", marginTop: "1rem" }}><b>coursework</b></h1>

                        <div style={{ marginBottom: "-1rem" }}>
                                <ul style={{ paddingLeft: "1rem" }}>
                                        <li><p><b>CMSC131</b>: Object-Oriented Programming I</p></li>
                                        <li><p><b>CMSC132</b>: Object-Oriented Programming II</p></li>
                                        <li><p><b>CMSC216</b>: Introduction to Computer Systems</p></li>
                                        <li><p><b>CMSC250</b>: Discrete Structures</p></li>
                                        <li><p><b>CMSC330</b>: Organization of Programming Languages</p></li>
                                        <li><p><b>CMSC351</b>: Algorithms</p></li>
                                        <li><p><b>CMSC4XX</b>: Databases and Data Modeling</p></li>
                                        <li><p><b>CMSC434</b>: Human-Computer Interaction</p></li>
                                        <li><p><b>CMSC320</b>: Database Design</p></li>
                                        <li><p><b>CMSC456</b>: Cryptography</p></li>

                                </ul>
                        </div>
                </div>
        );
}

