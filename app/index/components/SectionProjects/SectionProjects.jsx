/* eslint-disable jsx-a11y/anchor-has-content */
import cn from "classnames"

import { THEME_CARD_LINK, THEME_H2, THEME_CARD } from "@/constants/theme"
import { LIST_PROJECTS } from "./data/projects"
import {
  TypographyElement,
  LayoutCardsElement,
  LayoutSectionElement,
} from "@/sawyer-react-lib/ui-kit"
import styles from "./SectionProjects.module.css"

const SectionProjects = () => {
  return (
    <LayoutSectionElement className={styles.wrapper}>
      <div className={cn(styles.container)} id="projects">
        {/* TODO: */}
        <TypographyElement tag="h2" theme={{ mode: THEME_H2 }}>
          Projects
        </TypographyElement>
        <LayoutCardsElement
          items={LIST_PROJECTS}
          theme={{
            mode: THEME_CARD,
          }}
          themeLink={{
            mode: THEME_CARD_LINK,
          }}
        />
      </div>
    </LayoutSectionElement>
  )
}

export default SectionProjects
