import { theme as themeLightViolet } from "./themes/light-violet"
import { theme as themeDefault } from "./themes/default"

export const getTheme = (theme) => {
  switch (theme) {
    case "light-violet":
      return themeLightViolet
    default:
      return themeDefault
  }
}

const themes = ["light-violet"]
export const getStyles = (theme, accent, active) => {
  const {
    // Button
    StylesButtonDefault,
    StylesButtonAccent,
    StylesButtonActive,
    // Text
    StylesTextDefault,
    StylesTextAccent,
    StylesTextActive,
  } = getTheme(theme)

  const stylesButton = {
    ...StylesButtonDefault,
    ...(accent && StylesButtonAccent),
    ...(!accent && active && StylesButtonActive),
  }

  const stylesText = {
    ...StylesTextDefault,
    ...(accent && StylesTextAccent),
    ...(!accent && active && StylesTextActive),
  }

  return {
    stylesButton,
    stylesText,
  }
}
