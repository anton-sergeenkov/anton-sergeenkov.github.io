"use client"

import LayoutCardsElement, {
  ThemeMode as ThemeModeLayoutCards,
} from "@/sawyer-react-lib/ui-kit/layout/LayoutCardsElement"

import { ThemeMode as ThemeModeLink } from "@/sawyer-react-lib/ui-kit/basic/LinkElement"

import coverImage from "./img/image.svg"

const LayoutCardsElementsComponent = () => {
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
    <div>
      <h3>LayoutCard</h3>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
        }}
      >
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
      </div>
    </div>
  )
}

export default LayoutCardsElementsComponent
