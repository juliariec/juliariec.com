import Typography from "typography"
import altonTheme from "typography-theme-alton"

altonTheme.googleFonts = [
  {
    name: "Montserrat",
    styles: ["400", "500", "700"],
  },
  {
    name: "Merriweather",
    styles: ["400", "400i", "700", "700i"],
  },
  {
    name: "Inter",
    styles: ["400", "500", "600", "700"],
  },
]

altonTheme.headerFontFamily = ["Inter", "Arial", "sans-serif"]

altonTheme.bodyFontFamily = ["Inter", "Arial", "sans-serif"]

const typography = new Typography(altonTheme)

export const { scale, rhythm, options } = typography

export default typography
