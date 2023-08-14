import React from "react";
import Particles from "react-particles";
import { motion } from "framer-motion";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import { useCallback } from "react";
import { AsideBar } from "../../components";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#111",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 120,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#A020F0",
            },
            links: {
              color: "#ffffff",
              distance: 150,
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
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <AsideBar />
      <motion.h1
        // drop
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
        style={{ position: "fixed", top: "20px", left: "30px" }}
      >
        I'm not your
      </motion.h1>
      <motion.h1
        // drop
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, type: "tween", stiffness: 50 }}
        style={{ position: "fixed", top: "70px", left: "30px", color: "#ff0" }}
      >
        average
      </motion.h1>
      <motion.h1
        // drop
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, type: "tween", stiffness: 50 }}
        style={{ position: "fixed", top: "110px", left: "30px" }}
      >
        {" "}
        <TypeAnimation
          style={{ fontSize: "2rem", fontWeight: "bold" }}
          cursor={false}
          repeat={Infinity}
          sequence={[
            "Software Engeneer",
            2000,
            "Developer",
            2000,
            "Programmer",
            2000,
          ]}
        />
      </motion.h1>
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          translate: "(-50%, -50%)",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      ></motion.div>
    </>
  );
};

export default Home;
