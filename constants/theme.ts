import { ThemeMode as ThemeUiTypography } from "@/sawyer-ui/ui-kit/basic/TypographyElement"
import { ThemeMode as ThemeUiTypographyGradient } from "@/sawyer-ui/ui-kit/basic/TypographyGradientElement"
import { ThemeMode as ThemeUiMenuButton } from "@/sawyer-ui/ui-kit/menu/UiMenuNavButton"
import { ThemeMode as ThemeUiLayoutSection } from "@/sawyer-ui/ui-kit/layout/LayoutSectionElement"

export const THEME = {
  H2: ThemeUiTypography.DARK_FILLED, // TypographyElement
  TEXT_GRADIENT: ThemeUiTypographyGradient.DARKBLUE_BLUE, // TypographyGradientElement
  MENU: ThemeUiMenuButton.LIGHT_BLUE, // UiMenuItemGroupRoutes
  HEADER_FOOTER: ThemeUiLayoutSection.HEADER_FOOTER, // LayoutSectionElement
}
