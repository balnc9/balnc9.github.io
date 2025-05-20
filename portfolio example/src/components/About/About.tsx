import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//import { docker } from "react-icons"
import { fadeIn } from "../../types/AnmationTypes"; // Assuming fadeIn is defined in Types

const About: React.FC = () => {
        const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 600);
        const [isWideScreenText, setIsWideScreenText] = useState(
                window.innerWidth > 800,
        );
        const controls = useAnimation();
        const { ref, inView } = useInView({
                threshold: 0.1,
        });

        useEffect(() => {
                const handleResize = () => {
                        setIsWideScreen(window.innerWidth > 600);
                        setIsWideScreenText(window.innerWidth > 800);
                };

                window.addEventListener("resize", handleResize);
                return () => {
                        window.removeEventListener("resize", handleResize);
                };
        }, []);

        useEffect(() => {
                if (inView) {
                        controls.start("show");
                }
        }, [controls, inView]);

        return (
                <div className="flex items-center justify-center mt-16 h-[80vh] mb-[20px]">
                        <motion.div
                                ref={ref}
                                animate={controls}
                                initial="hidden"
                                variants={fadeIn("up", "spring", 0, 0.75)}
                                className="flex flex-wrap gap-4 pt-10 items-center w-[95%] mx-auto px-4"
                        >
                                {isWideScreen && (
                                        <div className="flex-1 p-4 flex flex-col justify-center items-center">
                                                <img
                                                        className="rounded-lg"
                                                        src="/amp.jpg"
                                                        alt="About Me"
                                                        draggable="false"
                                                />
                                                <p className="dark:text-white text-black font-mono font-bold pt-2">
                                                        An amp I built
                                                </p>
                                        </div>
                                )}
                                <div className="flex-1 justify-center items-center">
                                        <h1 className="font-bold font-mono text-black dark:text-white pb-4">
                                                About Me
                                        </h1>
                                        <div className="">
                                                <div className="card-wrapper p-1">
                                                        <div className="card-content p-4 font-mono text-black dark:text-white text-center ">
                                                                I'm Matthew Chin, an undergraduate researcher at the University of Maryland, College Park, passionate about data visualization, web development, and cybersecurity. I have experience building Chrome Extensions for web scraping and real-time data visualization using JavaScript, Chart.js, HTML/CSS, and DOM parsing. My background includes cybersecurity research at NIST, IT support, and a strong foundation in C++, Python, and Java. I enjoy building impactful projects, learning new technologies, and contributing to open-source.
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className="pt-4 text-center font-mono text-black dark:text-white text-sm">
                                        <div>Contact: <a href="mailto:matthewlchin1@gmail.com" className="underline">matthewlchin1@gmail.com</a></div>
                                        <div>LinkedIn: <a href="https://linkedin.com/in/matthewleechin" className="underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/matthewleechin</a></div>
                                        <div>GitHub: <a href="https://balnc9.github.io" className="underline" target="_blank" rel="noopener noreferrer">balnc9.github.io</a></div>
                                        <div>Phone: 781-697-4238</div>
                                </div>
                                <div className="pt-8 text-center font-mono text-black dark:text-white text-sm">
                                        <div className="font-bold">Skills & Education</div>
                                        <div>Languages: Java, Python, C, JavaScript, HTML/CSS</div>
                                        <div>Technologies: Chart.js, Chrome Extensions, Web Scraping, Data Visualization, Cybersecurity</div>
                                        <div>Certifications: AWS Machine Learning Solutions (Coursera), CompTIA Security+ (In Progress)</div>
                                        <div>Education: B.S. Computer Science, University of Maryland, College Park (Class of 2027)</div>
                                </div>
                        </motion.div>
                </div>
        );
};

export default About;
