import { ThemeMode as ThemeChipsElement } from "@/sawyer-react-lib/ui-kit/basic/ChipsElement"
import { ThemeMode as ThemeTypographyGradientElement } from "@/sawyer-react-lib/ui-kit/basic/TypographyGradientElement"
import { ThemeMode as ThemeMenuButtonElement } from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuButtonElement"
import { ThemeMode as ThemeLayoutCardsElement } from "@/sawyer-react-lib/ui-kit/layout/LayoutCardsElement"
import { ThemeMode as ThemeLayoutSectionElement } from "@/sawyer-react-lib/ui-kit/layout/LayoutSectionElement"

export const THEME = {
  MENU: ThemeMenuButtonElement.LIGHT_VIOLET, // MenuItemGroupRoutesElement
  CARD: ThemeLayoutCardsElement.LIGHT, // LayoutCardsElement
  TEXT_GRADIENT: ThemeTypographyGradientElement.DARKBLUE_BLUE, // TypographyGradientElement
  CHIPS_DARK: ThemeChipsElement.DARK, // ChipsElement
  HEADER_FOOTER: ThemeLayoutSectionElement.HEADER_FOOTER, // LayoutSectionElement

  LINK: "blue-underlined-thin", // LinkElement
  LINK_CARD: "dark-underlined", // LinkElement
  H2: "dark-filled", // TypographyElement
}

// import { THEME } from "@/constants/theme"
