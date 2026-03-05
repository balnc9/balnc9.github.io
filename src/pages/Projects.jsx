export default function Projects() {
        const projects = [
                {
                        name: "Grafux",
                        date: "March 2025",
                        github: "https://github.com/balnc9/grafux",
                        tech: "Go, HTML5 Canvas, d3-force, YAML",
                        description:
                                "A CLI tool that scans any directory on your filesystem and renders it as a real-time, interactive force-directed graph in the browser — essentially Obsidian's graph view, but for any codebase or folder.",
                        highlights: [
                                "Built a Go CLI tool that visualizes any filesystem as a real-time interactive force-directed graph, using go:embed to ship the entire frontend as a zero-dependency single binary.",
                                "Implemented a d3-force physics simulation on HTML5 Canvas with cursor repulsion, hover highlighting, and configurable physics parameters — sustaining 60fps with thousands of nodes.",
                                "Designed a layered configuration system (defaults → YAML file → CLI flags) with gzip-compressed JSON API responses and support for multiple graph layout algorithms.",
                                "Achieved cross-platform auto-browser-launch and random port allocation with no external dependencies."
                        ],
                        demoVideo: "/demos/grafux-demo.mov"
                },
                {
                        name: "Itinera",
                        date: "November 2025",
                        github: "https://github.com/balnc9/itinera",
                        tech: "React, TypeScript, Python",
                        description:
                                "AI-powered travel itinerary generator combining TikTok trends, Google Maps geocoding, and GPT-4o-mini to ship optimized, multi-day plans in seconds.",
                        highlights: [
                                "Architected a REST API that blends GPT-4o-mini with Google Maps Geocoding to turn trending TikTok data and preferences into itineraries in under 5 seconds.",
                                "Built a 3-layer data pipeline (TikTok Research, unofficial API, YouTube) with normalization to keep uptime high despite API failures or rate limits.",
                                "Implemented geo-optimization by converting 10+ trending spots per city into coordinates, enabling cluster-based day grouping that minimizes travel time.",
                                "Created an interactive React + TS frontend with Google Maps, Places Autocomplete, and export-to-Google-Maps flows for day-by-day itineraries."
                        ]
                },
                {
                        name: "Kubernetes/minikube (Open Source Contribution)",
                        date: "December 2025",
                        github: "https://github.com/kubernetes/minikube",
                        tech: "Go, Linux, systemd, Docker",
                        description:
                                "Unified CRI-O service configuration across Minikube’s ISO and KIC environments to keep local clusters consistent with production-grade runtimes.",
                        highlights: [
                                "Contributed to Minikube, the local Kubernetes toolkit for running single-node clusters without a full cloud setup.",
                                "Aligned CRI-O systemd service definitions between ISO and container-based KIC builds to eliminate configuration drift and runtime bugs.",
                                "Updated the kicbase image to ship a custom crio.service and sysconfig settings so CRI-O behaves consistently across Minikube environments."
                        ]
                }
        ];

        return (
                <div className="page-container projects-page">
                        <h1 style={{ marginBottom: "0.75rem" }}>
                                <b>projects</b>
                        </h1>
                        <p style={{ marginBottom: "1.75rem" }}>
                                selected builds with links, context, and the stacks behind them
                        </p>

                        <div className="projects-grid">
                                {projects.map((project) => (
                                        <article className="project-card" key={project.name}>
                                                <div className="project-header">
                                                        <div>
                                                                <h2 className="project-title">{project.name}</h2>
                                                                <div className="project-meta">{project.date}</div>
                                                        </div>
                                                        <a
                                                                className="project-link"
                                                                href={project.github}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                        >
                                                                github ->
                                                        </a>
                                                </div>

                                                {project.demoVideo && (
                                                        <div className="project-demo">
                                                                <video
                                                                        src={project.demoVideo}
                                                                        controls
                                                                        playsInline
                                                                        className="project-demo-video"
                                                                >
                                                                        Your browser does not support the video tag.
                                                                </video>
                                                        </div>
                                                )}

                                                <p className="project-description">{project.description}</p>
                                                <em className="project-tech">{project.tech}</em>

                                                <ul className="project-points">
                                                        {project.highlights.map((item, index) => (
                                                                <li key={index}>{item}</li>
                                                        ))}
                                                </ul>
                                        </article>
                                ))}
                        </div>
                </div>
        );
}
