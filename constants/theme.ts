import { ThemeMode as ThemeChipsElement } from "@/sawyer-react-lib/ui-kit/basic/ChipsElement"
import { ThemeMode as ThemeTypographyGradientElement } from "@/sawyer-react-lib/ui-kit/basic/TypographyGradientElement"
import { ThemeMode as ThemeMenuButtonElement } from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuButtonElement"
import { ThemeMode as ThemeLayoutCardsElement } from "@/sawyer-react-lib/ui-kit/layout/LayoutCardsElement"
import { ThemeMode as ThemeLayoutSectionElement } from "@/sawyer-react-lib/ui-kit/layout/LayoutSectionElement"
import { ThemeMode as ThemeTypographyElement } from "@/sawyer-react-lib/ui-kit/basic/TypographyElement"
import { ThemeMode as ThemeLinkElement } from "@/sawyer-react-lib/ui-kit/basic/LinkElement"

export const THEME = {
  MENU: ThemeMenuButtonElement.LIGHT_VIOLET, // MenuItemGroupRoutesElement
  CARD: ThemeLayoutCardsElement.LIGHT, // LayoutCardsElement
  TEXT_GRADIENT: ThemeTypographyGradientElement.DARKBLUE_BLUE, // TypographyGradientElement
  CHIPS_DARK: ThemeChipsElement.DARK, // ChipsElement
  HEADER_FOOTER: ThemeLayoutSectionElement.HEADER_FOOTER, // LayoutSectionElement
  H2: ThemeTypographyElement.DARK_FILLED, // TypographyElement
  LINK: ThemeLinkElement.BLUE_UNDERLINED_THIN, // LinkElement
  LINK_CARD: ThemeLinkElement.DARK_UNDERLINED, // LinkElement
}

// import { THEME } from "@/constants/theme"
