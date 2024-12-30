import { useCallback } from "react"
import type { Engine } from "tsparticles-engine"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"

export function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        background: {
          opacity: 0
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: ["#3b82f6", "#06b6d4", "#6366f1"]
          },
          links: {
            color: "#a5b4fc",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out"
            },
            random: false,
            speed: 0.8,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 1000
            },
            value: 40
          },
          opacity: {
            value: 0.5,
            animation: {
              enable: false
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: false
            }
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
              parallax: {
                enable: false
              }
            },
            onClick: {
              enable: false
            }
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5
              }
            }
          }
        },
        detectRetina: false
      }}
    />
  )
} 