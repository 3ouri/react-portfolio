export const particlesOptions = {
    particles: {
      links: {
        enable: true
      },
      move: {
        enable: true
      },
      number: {
        value: 30,
        density: {
          enable: true,
          area: 900
        }
      },
      opacity: {
        animation: {
          enable: true,
          minimumValue: 0.3
        }
      },
      shape: {
        type: "circle",
        stroke: {
          width: 2,
          color: "#DB772F"
        }
      },
      size: {
        value: {
          min: 1,
          max: 2
        },
        animation: {
          count: 0,
          enable: true,
          speed: 3,
          sync: false,
          destroy: "none",
          startValue: "random",
          minimumValue: 1
        }
      }
    }
  };
  