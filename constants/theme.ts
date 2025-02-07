import { ThemeMode as ThemeUiTypographyGradient } from "@/sawyer-react-lib/ui-kit/basic/TypographyGradientElement"
import { ThemeMode as ThemeUiMenuButton } from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuButtonElement"
import { ThemeMode as ThemeUiLayoutSection } from "@/sawyer-react-lib/ui-kit/layout/LayoutSectionElement"
import { ThemeMode as ThemeUiTypography } from "@/sawyer-react-lib/ui-kit/basic/TypographyElement"
import { ThemeMode as ThemeUiLink } from "@/sawyer-react-lib/ui-kit/basic/UiLink"

export const THEME = {
  MENU: ThemeUiMenuButton.LIGHT_BLUE, // MenuItemGroupRoutesElement
  TEXT_GRADIENT: ThemeUiTypographyGradient.DARKBLUE_BLUE, // TypographyGradientElement
  HEADER_FOOTER: ThemeUiLayoutSection.HEADER_FOOTER, // LayoutSectionElement
  H2: ThemeUiTypography.DARK_FILLED, // TypographyElement
  LINK: ThemeUiLink.BLUE_UNDERLINED_THIN, // UiLink
  LINK_CARD: ThemeUiLink.DARK_UNDERLINED, // UiLink
}
