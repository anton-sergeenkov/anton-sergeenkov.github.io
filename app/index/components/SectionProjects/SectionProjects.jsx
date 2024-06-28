/* eslint-disable jsx-a11y/anchor-has-content */
import cn from "classnames"

import { THEME_CARD_LINK, THEME_HEADER, THEME_CARD } from "@/constants/theme"
import { LIST_PROJECTS } from "./data/projects"
import { TypographyElement, LayoutCardElement } from "@/sawyer-react-lib/ui-kit"
import styles from "./SectionProjects.module.css"

const SectionProjects = () => {
  return (
    <div className={styles.wrapper} id="projects">
      <div className={cn(styles.container, "section")}>
        <TypographyElement tag="h2" theme={{ mode: THEME_HEADER }}>
          Projects
        </TypographyElement>

        <LayoutCardElement
          items={LIST_PROJECTS}
          theme={{
            mode: THEME_CARD,
          }}
          themeLink={{
            mode: THEME_CARD_LINK,
          }}
        />
      </div>
    </div>
  )
}

export default SectionProjects
