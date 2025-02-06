"use client"

import LayoutCardsElement, {
  ThemeMode as ThemeModeLayoutCards,
} from "@/sawyer-react-lib/ui-kit/layout/LayoutCardsElement"

import { ThemeMode as ThemeModeLink } from "@/sawyer-react-lib/ui-kit/basic/UiLink"

import coverImage from "./img/image.svg"

const UiLayoutCardsComponent = () => {
  const items = [
    {
      title: "Title",
      link: "https://letscode-dev.github.io/",
      img: coverImage,
      description: "School of Frontend Development, courses and mentoring",
      links: [
        { name: "Website", link: "https://letscode-dev.github.io/" },
        { name: "YouTube", link: "https://www.youtube.com/c/letscode-dev" },
      ],
    },
  ]

  return (
    <>
      <div>
        <LayoutCardsElement
          items={items}
          theme={{
            mode: ThemeModeLayoutCards.LIGHT,
          }}
          themeLink={{
            mode: ThemeModeLink.DARK_UNDERLINED,
          }}
        />
      </div>

      <div>
        <LayoutCardsElement
          items={items}
          theme={{
            mode: ThemeModeLayoutCards.LIGHT,
          }}
          themeLink={{
            mode: ThemeModeLink.DARK_UNDERLINED,
          }}
          isOptions
        />
      </div>
    </>
  )
}

export default UiLayoutCardsComponent
