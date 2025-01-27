import { ThemeMode as ThemeUiChips } from "@/sawyer-react-lib/ui-kit/basic/UiChips"
import { ThemeMode as ThemeUiTypographyGradient } from "@/sawyer-react-lib/ui-kit/basic/TypographyGradientElement"
import { ThemeMode as ThemeUiMenuButton } from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuButtonElement"
import { ThemeMode as ThemeUiLayoutCards } from "@/sawyer-react-lib/ui-kit/layout/LayoutCardsElement"
import { ThemeMode as ThemeUiLayoutSection } from "@/sawyer-react-lib/ui-kit/layout/LayoutSectionElement"
import { ThemeMode as ThemeUiTypography } from "@/sawyer-react-lib/ui-kit/basic/TypographyElement"
import { ThemeMode as ThemeUiLink } from "@/sawyer-react-lib/ui-kit/basic/LinkElement"

export const THEME = {
  MENU: ThemeUiMenuButton.LIGHT_BLUE, // MenuItemGroupRoutesElement
  CARD: ThemeUiLayoutCards.LIGHT, // LayoutCardsElement
  TEXT_GRADIENT: ThemeUiTypographyGradient.DARKBLUE_BLUE, // TypographyGradientElement
  CHIPS_DARK: ThemeUiChips.DARK, // UiChips
  HEADER_FOOTER: ThemeUiLayoutSection.HEADER_FOOTER, // LayoutSectionElement
  H2: ThemeUiTypography.DARK_FILLED, // TypographyElement
  LINK: ThemeUiLink.BLUE_UNDERLINED_THIN, // LinkElement
  LINK_CARD: ThemeUiLink.DARK_UNDERLINED, // LinkElement
}

// import { THEME } from "@/constants/theme"
