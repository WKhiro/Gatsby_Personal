import React from "react"
import { Particles } from "react-particles-js"
import "./background.css"

const GradientBackground = () => (
  <div className="gradientContainer">
    {/* Value_area: smaller = denser clusters */}
    <Particles
      className="gradient"
      params={{
        particles: {
          color: {
            value: "#FFFFFF",
          },
          line_linked: {
            color: {
              value: "#33A3FF",
            },
          },
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 600,
            },
          },
          size: {
            value: 3,
          },
        },
      }}
    />
  </div>
)

export default GradientBackground
