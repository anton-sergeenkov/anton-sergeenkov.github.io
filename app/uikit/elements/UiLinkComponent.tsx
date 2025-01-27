"use client"

import LinkElement, {
  ThemeMode,
} from "@/sawyer-react-lib/ui-kit/basic/LinkElement"

const UiLinkComponent = () => {
  return (
    <>
      <LinkElement href="https://fonts.google.com/">Default</LinkElement>
      <LinkElement
        href="https://fonts.google.com/"
        theme={{
          mode: ThemeMode.BLUE_UNDERLINED_THIN,
        }}
      >
        Theme: BLUE_UNDERLINED_THIN
      </LinkElement>
      <LinkElement
        href="https://fonts.google.com/"
        theme={{
          mode: ThemeMode.DARK_UNDERLINED,
        }}
      >
        Theme: DARK_UNDERLINED
      </LinkElement>
    </>
  )
}

export default UiLinkComponent
