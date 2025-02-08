import { ThemeMode as ThemeUiTypography } from "@/sawyer-ui/ui-kit/basic/UiTypography"
import { ThemeMode as ThemeUiTypographyGradient } from "@/sawyer-ui/ui-kit/basic/UiTypographyGradient"
import { ThemeMode as ThemeUiMenuButton } from "@/sawyer-ui/ui-kit/menu/UiMenuNavButton"
import { ThemeMode as ThemeUiLayoutSection } from "@/sawyer-ui/ui-kit/layout/UiLayoutSection"

export const THEME = {
  H2: ThemeUiTypography.DARK_FILLED, // UiTypography
  TEXT_GRADIENT: ThemeUiTypographyGradient.DARKBLUE_BLUE, // UiTypographyGradient
  MENU: ThemeUiMenuButton.LIGHT_BLUE, // UiMenuItemGroupRoutes
  HEADER_FOOTER: ThemeUiLayoutSection.HEADER_FOOTER, // UiLayoutSection
}
