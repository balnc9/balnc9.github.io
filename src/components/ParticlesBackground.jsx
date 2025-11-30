import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = (props) => {
        const [init, setInit] = useState(false);

        useEffect(() => {
                initParticlesEngine(async (engine) => {
                        await loadSlim(engine);
                }).then(() => {
                        setInit(true);
                });
        }, []);

        const particlesLoaded = () => { };

        const options = useMemo(
                () => ({
                        background: {
                                color: {
                                        value: "transparent",
                                },
                        },
                        fpsLimit: 120,
                        interactivity: {
                                detectsOn: "window",
                                events: {
                                        onClick: {
                                                enable: true,
                                                mode: "attract",
                                        },
                                        onHover: {
                                                enable: true,
                                                mode: "grab",
                                        },
                                        onDiv: {
                                                selectors: "#repulse-navbar, #repulse-content",
                                                enable: true,
                                                mode: "repulse",
                                        },
                                },
                                modes: {
                                        push: {
                                                distance: 1000,
                                                duration: 25,
                                        },
                                        grab: {
                                                distance: 170,
                                        },
                                        repulse: {
                                                distance: 400,
                                                duration: 0.1,
                                                factor: 20,
                                                speed: 10,
                                        },
                                },
                        },
                        particles: {
                                color: {
                                        value: "#000000",
                                },
                                links: {
                                        color: "#000000",
                                        distance: 220,
                                        enable: true,
                                        opacity: 0.5,
                                        width: 1,
                                },
                                move: {
                                        direction: "none",
                                        enable: true,
                                        outModes: {
                                                default: "bounce",
                                        },
                                        random: true,
                                        speed: 0.5,
                                        straight: false,
                                        attract: {
                                                enable: false,
                                        },
                                },
                                number: {
                                        density: {
                                                enable: true,
                                                area: 500,
                                        },
                                        value: 220,
                                },
                                opacity: {
                                        value: 0.8,
                                },
                                shape: {
                                        type: "circle",
                                },
                                size: {
                                        value: { min: 2, max: 2 },
                                },
                        },
                        detectRetina: true,
                }),
                []
        );

        if (!init) {
                return null;
        }

        return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesBackground;

