"use client"

import UiLink, { ThemeMode } from "@/sawyer-react-lib/ui-kit/basic/UiLink"

const UiLinkComponent = () => {
  return (
    <>
      <UiLink href="https://fonts.google.com/">Default</UiLink>
      <UiLink
        href="https://fonts.google.com/"
        theme={{
          mode: ThemeMode.BLUE_UNDERLINED_THIN,
        }}
      >
        Theme: BLUE_UNDERLINED_THIN
      </UiLink>
      <UiLink
        href="https://fonts.google.com/"
        theme={{
          mode: ThemeMode.DARK_UNDERLINED,
        }}
      >
        Theme: DARK_UNDERLINED
      </UiLink>
    </>
  )
}

export default UiLinkComponent
