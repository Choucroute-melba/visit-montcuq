import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import MQColors from "./app/colors/colors";
import plugin from "tailwindcss/plugin";
import {matchHas} from "next/dist/shared/lib/router/utils/prepare-destination";
import theme from "tailwindcss/defaultTheme";

function getPointOnCircle(radius: number, angleDegrees: number) {
  const angleRadians = angleDegrees * (Math.PI / 180);

  const x: number = radius * Math.cos(angleRadians);
  const y = radius * Math.sin(angleRadians);

  return { x: Math.round(x), y: Math.round(y) };
}


const config: Config = {
  plugins: [
      plugin.withOptions(function(options = {
        numberOfCirclePoints: 4,
        radius: 250,
        offsetAngle: 40,
        plage: 100
      }) {

        return function({ addUtilities }) {
          const numberOfCirclePoints = options.numberOfCirclePoints || 5;
          const radius = options.radius || 150;

          const offsetAngle = options.offsetAngle || 100;
          const plageAngle = options.plage || 70;
          const transform: any = {}

          console.log(`numberOfCirclePoints: ${numberOfCirclePoints}
          radius: ${radius}
          offsetAngle: ${offsetAngle}
          plageAngle: ${plageAngle}`);

          for(let i = 0; i <= numberOfCirclePoints; i++) {
            const pos = getPointOnCircle(radius, offsetAngle + (plageAngle/(numberOfCirclePoints - 1)) * i);
            transform[`.circle-${i+1}`] = {}
            transform[`.circle-${i+1}`]['transform'] = `translate(${pos.x}px, ${pos.y}px)`;
          }

          console.log(transform);
          addUtilities({...transform});
        }
      }),
      plugin(function({ matchUtilities, theme }) {
        matchUtilities({
          cx: (value) => ({
            cx: value
          }),
          cy: (value) => ({
            cy: value
          }),
          rx: (value) => ({
            rx: value
          }),
          ry: (value) => ({
            ry: value
          })
        },
            {values: theme('width')});
      })
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      ...MQColors,
      primary: {
        ...MQColors.mqamber,
        DEFAULT: MQColors.mqamber["500"]
      },
      secondary: {
        ...MQColors.mqgreen,
        DEFAULT: MQColors.mqgreen["500"]
      }
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "header-landscape": "url('/montcuqDrone1.jpg')",
        "landscape-no-sky": "url('/montcuqDrone1-bgFooter-colorGraded.png')",
        "pictures-shower-clipper": "url('/SVG/bg-clipper.svg')"
      },
      backgroundPosition: {
        "header-landscape": "top",
        "landscape-no-sky": "bottom",
        "pictures-shower-clipper": "top"
      },
      backgroundSize: {
        "header-landscape": "cover",
        "landscape-no-sky": "contain",
        "pictures-shower-clipper": "cover"
      },
      dropShadow: {
        "prez-illus": "0 35px 35px theme('colors.primary.950')90"
      }
    },
  },
};
export default config;
