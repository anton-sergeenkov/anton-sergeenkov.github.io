"use client"

import UiChips, { ThemeMode } from "@/sawyer-react-lib/ui-kit/basic/UiChips"

const UiChipsComponent = () => {
  return (
    <>
      <div>
        <UiChips
          items={["One", "Two"]}
          theme={{ mode: ThemeMode.DARK }}
          isUserSelect
        />
      </div>

      <div>
        <UiChips
          items={["One", "Two"]}
          theme={{ mode: ThemeMode.LIGHT }}
          isUserSelect
        />
      </div>
    </>
  )
}

export default UiChipsComponent
