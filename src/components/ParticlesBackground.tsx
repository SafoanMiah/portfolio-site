import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fpsLimit: 60,
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    number: {
                        value: 50,
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                    },
                    opacity: {
                        value: 0.3,
                    },
                    size: {
                        value: 3,
                    },
                    move: {
                        enable: true,
                        speed: 1,
                    },
                    links: {
                        enable: true,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.2,
                        width: 1,
                    },
                },
                background: {
                    color: "#111",
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesBackground; 