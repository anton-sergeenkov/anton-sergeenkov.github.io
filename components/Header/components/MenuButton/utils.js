import { theme as themeLightViolet } from "./themes/light-violet"
import { theme as themeDefault } from "./themes/default"

export const getTheme = (name) => {
  switch (name) {
    case "light-violet":
      return themeLightViolet
    default:
      return themeDefault
  }
}
