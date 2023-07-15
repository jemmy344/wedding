import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";

const ParticlesComponent = () => {
    const particleOptions: any = {
        background: {
            color: {
                value: 'transparent' // Set the background color to transparent
            }
        },
        fpsLimit: 60,
        particles: {
            number: {
                value: 7, // Adjust the number of particles
                density: {
                    enable: true,
                    value_area: 300 // Increase or decrease the area to cover
                }
            },
            color: {
                value: '#FFD700' // Yellowish color for the particles
            },
            shape: {
                type: 'circle' // Shape of the particles (circle)
            },
            opacity: {
                value: 0.8, // Opacity of the particles
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 8, // Size of the particles
                random: true,
                anim: {
                    enable: false
                }
            },
            move: {
                enable: true,
                speed: 1.5, // Speed of particle movement
                direction: 'top',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            },
            line_linked: {
                enable: false // Disable particle connections
            },
            events: {
                onclick: {
                    enable: false // Disable particle click event
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: false // Disable particle hover effect
                },
                resize: true
            }
        }
    };

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <div className="z-[100]" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                width="100%"
                height="100%"
                className="h-screen w-full"
                loaded={particlesLoaded}
                options={particleOptions}
            />
        </div>
    );
};
export default ParticlesComponent;