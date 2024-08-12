import { ThemeMode as ThemeChipsElement } from "@/sawyer-react-lib/ui-kit/basic/ChipsElement"
import { ThemeMode as ThemeTypographyGradientElement } from "@/sawyer-react-lib/ui-kit/basic/TypographyGradientElement"
import { ThemeMode as ThemeMenuButtonElement } from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuButtonElement"
import { ThemeMode as ThemeLayoutCardsElement } from "@/sawyer-react-lib/ui-kit/layout/LayoutCardsElement"

export const THEME = {
  MENU: ThemeMenuButtonElement.LIGHT_VIOLET, // MenuItemGroupRoutesElement
  CARD: ThemeLayoutCardsElement.LIGHT, // LayoutCardsElement
  TEXT_GRADIENT: ThemeTypographyGradientElement.DARKBLUE_BLUE, // TypographyGradientElement
  CHIPS_DARK: ThemeChipsElement.DARK, // ChipsElement

  LINK: "blue-underlined-thin", // LinkElement
  LINK_CARD: "dark-underlined", // LinkElement
  H2: "dark-filled", // TypographyElement
  HEADER_FOOTER: "header-footer", // LayoutSectionElement
}

// import { THEME } from "@/constants/theme"
