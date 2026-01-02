export default function Projects() {
        const projects = [
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
