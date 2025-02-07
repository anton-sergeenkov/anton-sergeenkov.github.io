import { ThemeMode as ThemeUiTypography } from "@/sawyer-react-lib/ui-kit/basic/TypographyElement"
import { ThemeMode as ThemeUiTypographyGradient } from "@/sawyer-react-lib/ui-kit/basic/TypographyGradientElement"
import { ThemeMode as ThemeUiMenuButton } from "@/sawyer-react-lib/ui-kit/menu-navigation/MenuButtonElement"
import { ThemeMode as ThemeUiLayoutSection } from "@/sawyer-react-lib/ui-kit/layout/LayoutSectionElement"

export const THEME = {
  H2: ThemeUiTypography.DARK_FILLED, // TypographyElement
  TEXT_GRADIENT: ThemeUiTypographyGradient.DARKBLUE_BLUE, // TypographyGradientElement
  MENU: ThemeUiMenuButton.LIGHT_BLUE, // MenuItemGroupRoutesElement
  HEADER_FOOTER: ThemeUiLayoutSection.HEADER_FOOTER, // LayoutSectionElement
}
