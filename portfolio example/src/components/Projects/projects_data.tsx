import { Project } from "../../types/project";

const projectData: Project[] = [
        {
                id: 1,
                title: "Baltimore Banner Scraper (JavaScript, HTML, CSS)",
                text: "Co-Engineered a Chrome Extension using JS, HTML, CSS, and Chart.js to scrape and plot key article metrics and metadata (word count, date, images, headers) from the Baltimore Banner, a local news website. Leveraged Chrome Extensions API (Manifest v3), Web Storage, DOM Parsing, and content scripts for real-time data extraction/restructuring, and UI rendering.",
                link: "https://github.com/balnc9/baltimore-banner-scraper",
                image: "",
        },
        {
                id: 2,
                title: "Minesweeper Game Clone (C++)",
                text: "Dynamic Board Generation & Difficulty Scaling: Designed randomized mine placement algorithms with adaptive board sizes and densities across difficulty levels (Beginner, Intermediate, Expert) to simulate classic Minesweeper mechanics. Enhanced User Interface: Implemented color-coded numerical indicators for mine proximity, leveraging C++ graphics libraries to improve visual feedback. Optimized Memory & Data Handling: Utilized advanced Data Structures and C++ Standard Library containers to manage board states and actions efficiently across variable grid sizes.",
                link: "https://github.com/balnc9/minesweeper-clone",
                image: "",
        },
];
export default projectData;
