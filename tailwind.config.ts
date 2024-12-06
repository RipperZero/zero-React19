// import tailwindScrollbar from "tailwind-scrollbar";
import type { Config } from "tailwindcss";
import { PluginCreator } from "tailwindcss/types/config";

// import {
//   BASE_FONT_FAMILY,
//   BORDER,
//   COLOR,
//   FILTER,
//   FONT,
// } from "./lib/atomStyles";

// const CUSTOM_THEME_CONFIG = {
//   bgGradientDeg: {
//     360: "360deg",
//   },
// };

// type CustomThemeConfigKey = keyof typeof CUSTOM_THEME_CONFIG;

// @see https://tailwindcss.com/docs/plugins#static-utilities
const customClassName: PluginCreator = ({ addUtilities }) => {
  addUtilities({
    // ".FONT-BASE": {
    //   font: FONT.BASE,
    // },
    // ".FONT-TITLE": {
    //   font: FONT.TITLE,
    // },
    // ".FONT-DIALOG-TITLE": {
    //   font: FONT.DIALOG_TITLE,
    // },
    ".raw-transition-none": {
      transition: "none",
    },
    ".safe-min-h-dvh": {
      // key is var in main.css
      // Defaults to `100vh` if `--viewport-height` is not set
      minHeight: "var(--viewport-height, 100vh)",
    },
  });
};

// @see https://stackoverflow.com/questions/71120394/is-there-a-way-to-adjust-the-angle-of-the-linear-gradient-in-tailwind-css
// const customThemeConfig: PluginCreator = ({ matchUtilities, theme }) => {
//   matchUtilities(
//     {
//       "bg-gradient-to": (angle: string) => ({
//         "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
//       }),
//     },
//     {
//       values: Object.assign(
//         theme("bgGradientDeg" as CustomThemeConfigKey, {}),
//         {
//           10: "10deg", // bg-gradient-10
//         },
//       ),
//     },
//   );
// };

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  // important: true,
  // important: "#zero-React19-root",
  theme: {
    extend: {
      // borderRadius: {
      //   ...BORDER,
      // },
      // colors: {
      //   ...COLOR,
      // },
      // fontFamily: {
      //   base: BASE_FONT_FAMILY,
      // },
      // dropShadow: {
      //   ...FILTER,
      // },

      screens: {
        "h5-xs": "320px",
        "h5-sm": "360px",
        "h5-md": "414px",
        "h5-lg": "480px",
      },

      // #region custom user configuration ---start
      // ...CUSTOM_THEME_CONFIG,
      // #endregion custom user configuration ---end
    },
  },
  corePlugins: {
    // Remove the Tailwind CSS preflight styles so it can use Material UI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [customClassName],
} satisfies Config;

export default config;