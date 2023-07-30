import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";

const ParticlesComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const particleOptions: any = {
    fullScreen: { enable: false },
    background: {
      color: {
        value: "transparent", // Set the background color to transparent
      },
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 7, // Adjust the number of particles
        density: {
          enable: true,
          value_area: 300, // Increase or decrease the area to cover
        },
      },
      color: {
        value: "#FF9C34", // Yellowish color for the particles
      },
      shape: {
        type: "circle", // Shape of the particles (circle)
      },
      opacity: {
        value: 0.8, // Opacity of the particles
        random: true,
        anim: {
          enable: true,
          speed: 2,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 8, // Size of the particles
        random: true,
        anim: {
          enable: false,
        },
      },
      move: {
        enable: true,
        speed: 1.5, // Speed of particle movement
        direction: "top",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      line_linked: {
        enable: false, // Disable particle connections
      },
      events: {
        onclick: {
          enable: false, // Disable particle click event
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true, // Disable particle hover effect
        },
        resize: true,
      },
    },
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <div className="z-[101] h-screen block" style={{ position: "relative" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="h-full"
        width="100%"
        canvasClassName="z-[99999]"
        height="100%"
        // className="h-screen w-full"
        loaded={particlesLoaded}
        options={particleOptions}
      />
      {children}
    </div>
  );
};
export default ParticlesComponent;
