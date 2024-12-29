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
      className="absolute inset-0 z-0"
      options={{
        background: {
          opacity: 0
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: ["#3b82f6", "#06b6d4", "#6366f1"]
          },
          links: {
            color: "#a5b4fc",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1.2
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce"
            },
            random: false,
            speed: 1.2,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.7,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.3
            }
          },
          shape: {
            type: ["circle", "triangle"],
          },
          size: {
            value: { min: 3, max: 5 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.5
            }
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.08,
              opacity: 0.8
            }
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            onClick: {
              enable: true,
              mode: "push"
            }
          },
          modes: {
            grab: {
              distance: 180,
              links: {
                opacity: 0.8
              }
            },
            push: {
              quantity: 6
            }
          }
        },
        detectRetina: true
      }}
    />
  )
} 