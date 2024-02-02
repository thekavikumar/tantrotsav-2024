"use client";
import React, { useEffect, useMemo, useState } from "react";
import "./Launch.css";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Image from "next/image";
import logo from "./logo.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaTwitter } from "react-icons/fa6";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="la">
      <h1 className="text-4xl font-medium">Launching in</h1>
      <div className="flex -mt-6 flex-col justify-center">
        <div className="lg:text-[150px] md:text-[120px] text-[80px]  flex items-center gap-3 text-[#566CB5]">
          {formatTime(timeLeft.days)}{" "}
          <span className="text-4xl text-white">DAYS</span>{" "}
        </div>
        <div className="flex items-center md:-mt-10 -mt-6 gap-7">
          <div className="md:text-4xl text-3xl font-medium text-[#8a9ddd]">
            {formatTime(timeLeft.hours)}{" "}
            <span className="md:text-2xl text-xl  text-white">Hr</span>
          </div>
          <div className="md:text-4xl text-3xl font-medium text-[#8a9ddd]">
            {formatTime(timeLeft.minutes)}{" "}
            <span className="md:text-2xl text-xl text-white">Min</span>
          </div>
          <div className="md:text-4xl text-3xl font-medium text-[#8a9ddd]">
            {formatTime(timeLeft.seconds)}{" "}
            <span className="md:text-2xl text-xl text-white">Sec</span>
          </div>
        </div>
      </div>
    </div>
  );
};

function Launch() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      "backgroundMask": {
        "composite": "destination-out",
        "cover": {
          "color": {
            "value": "#fff",
          },
          "opacity": 1,
        },
        "enable": false,
      },
      "clear": true,
      "defaultThemes": {},
      "delay": 0,
      "fullScreen": {
        "enable": true,
        "zIndex": 0,
      },
      "detectRetina": true,
      "duration": 0,
      "fpsLimit": 120,
      "interactivity": {
        "detectsOn": "window",
        "events": {
          "onClick": {
            "enable": true,
            "mode": "repulse",
          },
          "onDiv": {
            "selectors": [],
            "enable": false,
            "mode": [],
            "type": "circle",
          },
          "onHover": {
            "enable": true,
            "mode": "bubble",
            "parallax": {
              "enable": false,
              "force": 2,
              "smooth": 10,
            },
          },
          "resize": {
            "delay": 0.5,
            "enable": true,
          },
        },
        "modes": {
          "trail": {
            "delay": 1,
            "pauseOnStop": false,
            "quantity": 1,
          },
          "attract": {
            "distance": 200,
            "duration": 0.4,
            "easing": "ease-out-quad",
            "factor": 1,
            "maxSpeed": 50,
            "speed": 1,
          },
          "bounce": {
            "distance": 200,
          },
          "bubble": {
            "distance": 250,
            "duration": 2,
            "mix": false,
            "opacity": 0,
            "size": 0,
            "divs": {
              "distance": 200,
              "duration": 0.4,
              "mix": false,
              "selectors": [],
            },
          },
          "connect": {
            "distance": 80,
            "links": {
              "opacity": 0.5,
            },
            "radius": 60,
          },
          "grab": {
            "distance": 400,
            "links": {
              "blink": false,
              "consent": false,
              "opacity": 1,
            },
          },
          "push": {
            "default": true,
            "groups": [],
            "quantity": 4,
          },
          "remove": {
            "quantity": 2,
          },
          "repulse": {
            "distance": 400,
            "duration": 0.4,
            "factor": 100,
            "speed": 1,
            "maxSpeed": 50,
            "easing": "ease-out-quad",
            "divs": {
              "distance": 200,
              "duration": 0.4,
              "factor": 100,
              "speed": 1,
              "maxSpeed": 50,
              "easing": "ease-out-quad",
              "selectors": [],
            },
          },
          "slow": {
            "factor": 3,
            "radius": 200,
          },
          "light": {
            "area": {
              "gradient": {
                "start": {
                  "value": "#ffffff",
                },
                "stop": {
                  "value": "#000000",
                },
              },
              "radius": 1000,
            },
            "shadow": {
              "color": {
                "value": "#000000",
              },
              "length": 2000,
            },
          },
        },
      },
      "manualParticles": [],
      "particles": {
        "bounce": {
          "horizontal": {
            "value": 1,
          },
          "vertical": {
            "value": 1,
          },
        },
        "collisions": {
          "absorb": {
            "speed": 2,
          },
          "bounce": {
            "horizontal": {
              "value": 1,
            },
            "vertical": {
              "value": 1,
            },
          },
          "enable": false,
          "maxSpeed": 50,
          "mode": "bounce",
          "overlap": {
            "enable": true,
            "retries": 0,
          },
        },
        "color": {
          "value": "#ffffff",
          "animation": {
            "h": {
              "count": 0,
              "enable": false,
              "speed": 1,
              "decay": 0,
              "delay": 0,
              "sync": true,
              "offset": 0,
            },
            "s": {
              "count": 0,
              "enable": false,
              "speed": 1,
              "decay": 0,
              "delay": 0,
              "sync": true,
              "offset": 0,
            },
            "l": {
              "count": 0,
              "enable": false,
              "speed": 1,
              "decay": 0,
              "delay": 0,
              "sync": true,
              "offset": 0,
            },
          },
        },
        "effect": {
          "close": true,
          "fill": true,
          "options": {},
          "type": [],
        },
        "groups": {},
        "move": {
          "angle": {
            "offset": 0,
            "value": 90,
          },
          "attract": {
            "distance": 200,
            "enable": false,
            "rotate": {
              "x": 3000,
              "y": 3000,
            },
          },
          "center": {
            "x": 50,
            "y": 50,
            "mode": "percent",
            "radius": 0,
          },
          "decay": 0,
          "distance": {},
          "direction": "none",
          "drift": 0,
          "enable": true,
          "gravity": {
            "acceleration": 9.81,
            "enable": false,
            "inverse": false,
            "maxSpeed": 50,
          },
          "path": {
            "clamp": true,
            "delay": {
              "value": 0,
            },
            "enable": false,
            "options": {},
          },
          "outModes": {
            "default": "out",
            "bottom": "out",
            "left": "out",
            "right": "out",
            "top": "out",
          },
          "random": false,
          "size": false,
          "speed": {
            "min": 0.1,
            "max": 1,
          },
          "spin": {
            "acceleration": 0,
            "enable": false,
          },
          "straight": false,
          "trail": {
            "enable": false,
            "length": 10,
            "fill": {},
          },
          "vibrate": false,
          "warp": false,
        },
        "number": {
          "density": {
            "enable": true,
            "width": 1920,
            "height": 1080,
          },
          "limit": {
            "mode": "delete",
            "value": 0,
          },
          "value": 160,
        },
        "opacity": {
          "value": {
            "min": 0.1,
            "max": 1,
          },
          "animation": {
            "count": 0,
            "enable": true,
            "speed": 1,
            "decay": 0,
            "delay": 0,
            "sync": false,
            "mode": "auto",
            "startValue": "random",
            "destroy": "none",
          },
        },
        "reduceDuplicates": false,
        "shadow": {
          "blur": 0,
          "color": {
            "value": "#000",
          },
          "enable": false,
          "offset": {
            "x": 0,
            "y": 0,
          },
        },
        "shape": {
          "close": true,
          "fill": true,
          "options": {},
          "type": "circle",
        },
        "size": {
          "value": {
            "min": 1,
            "max": 3,
          },
          "animation": {
            "count": 0,
            "enable": false,
            "speed": 5,
            "decay": 0,
            "delay": 0,
            "sync": false,
            "mode": "auto",
            "startValue": "random",
            "destroy": "none",
          },
        },
        "stroke": {
          "width": 0,
        },
        "zIndex": {
          "value": 0,
          "opacityRate": 1,
          "sizeRate": 1,
          "velocityRate": 1,
        },
        "destroy": {
          "bounds": {},
          "mode": "none",
          "split": {
            "count": 1,
            "factor": {
              "value": 3,
            },
            "rate": {
              "value": {
                "min": 4,
                "max": 9,
              },
            },
            "sizeOffset": true,
            "particles": {},
          },
        },
        "roll": {
          "darken": {
            "enable": false,
            "value": 0,
          },
          "enable": false,
          "enlighten": {
            "enable": false,
            "value": 0,
          },
          "mode": "vertical",
          "speed": 25,
        },
        "tilt": {
          "value": 0,
          "animation": {
            "enable": false,
            "speed": 0,
            "decay": 0,
            "sync": false,
          },
          "direction": "clockwise",
          "enable": false,
        },
        "twinkle": {
          "lines": {
            "enable": false,
            "frequency": 0.05,
            "opacity": 1,
          },
          "particles": {
            "enable": false,
            "frequency": 0.05,
            "opacity": 1,
          },
        },
        "wobble": {
          "distance": 5,
          "enable": false,
          "speed": {
            "angle": 50,
            "move": 10,
          },
        },
        "life": {
          "count": 0,
          "delay": {
            "value": 0,
            "sync": false,
          },
          "duration": {
            "value": 0,
            "sync": false,
          },
        },
        "rotate": {
          "value": 0,
          "animation": {
            "enable": false,
            "speed": 0,
            "decay": 0,
            "sync": false,
          },
          "direction": "clockwise",
          "path": false,
        },
        "orbit": {
          "animation": {
            "count": 0,
            "enable": false,
            "speed": 1,
            "decay": 0,
            "delay": 0,
            "sync": false,
          },
          "enable": false,
          "opacity": 1,
          "rotation": {
            "value": 45,
          },
          "width": 1,
        },
        "links": {
          "blink": false,
          "color": {
            "value": "#fff",
          },
          "consent": false,
          "distance": 100,
          "enable": false,
          "frequency": 1,
          "opacity": 1,
          "shadow": {
            "blur": 5,
            "color": {
              "value": "#000",
            },
            "enable": false,
          },
          "triangles": {
            "enable": false,
            "frequency": 1,
          },
          "width": 1,
          "warp": false,
        },
        "repulse": {
          "value": 0,
          "enabled": false,
          "distance": 1,
          "duration": 1,
          "factor": 1,
          "speed": 1,
        },
      },
      "pauseOnBlur": true,
      "pauseOnOutsideViewport": true,
      "responsive": [],
      "smooth": false,
      "style": {},
      "themes": [],
      "zLayers": 100,
      "name": "NASA",
      "motion": {
        "disable": false,
        "reduce": {
          "factor": 4,
          "value": true,
        },
      },
    }),
    []
  );

  if (init) {
    return (
      <div className="h-screen w-screen">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <div className="w-full h-full lg:flex flex flex-col lg:flex-row lg:justify-around justify-center items-center  gap-12">
          <div className="">
            <Image
              src={logo}
              className="lg:h-[200px] md:p-0 p-6 w-full object-cover object-center "
            />
          </div>
          <Countdown targetDate="2024-03-05T00:00:00" />
          <div className="absolute justify-center bottom-[30px]">
            <div className="flex items-center w-screen justify-center gap-6">
              <FaInstagram className="md:text-3xl text-2xl text-white cursor-pointer hover:text-blue-400 duration-200 ease-in-out" />
              <FaTwitter className="md:text-3xl text-2xl text-white cursor-pointer hover:text-blue-400 duration-200 ease-in-out" />
              <FaFacebook className="md:text-3xl text-2xl text-white cursor-pointer hover:text-blue-400 duration-200 ease-in-out" />
              <FaLinkedin className="md:text-3xl text-2xl text-white cursor-pointer hover:text-blue-400 duration-200 ease-in-out" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
}

export default Launch;
