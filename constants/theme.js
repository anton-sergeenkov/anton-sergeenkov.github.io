import { ThemeMode as ThemeChipsElement } from "@/sawyer-react-lib/ui-kit/basic/ChipsElement"
import { ThemeMode as ThemeTypographyGradientElement } from "@/sawyer-react-lib/ui-kit/basic/TypographyGradientElement"
import { ThemeMode as ThemeMenuButtonElement } from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuButtonElement"

export const THEME = {
  MENU: ThemeMenuButtonElement.LIGHT_VIOLET, // MenuItemGroupRoutesElement
  LINK: "blue-underlined-thin", // LinkElement
  LINK_CARD: "dark-underlined", // LinkElement
  H2: "dark-filled", // TypographyElement
  CARD: "light", // LayoutCardsElement
  TEXT_GRADIENT: ThemeTypographyGradientElement.DARKBLUE_BLUE, // TypographyGradientElement
  HEADER_FOOTER: "header-footer", // LayoutSectionElement
  CHIPS_DARK: ThemeChipsElement.DARK, // ChipsElement
}

// import { THEME } from "@/constants/theme"
