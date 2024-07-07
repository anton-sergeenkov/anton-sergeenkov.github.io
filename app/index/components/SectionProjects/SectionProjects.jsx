/* eslint-disable jsx-a11y/anchor-has-content */
import cn from "classnames"

import { THEME_CARD_LINK, THEME_HEADER, THEME_CARD } from "@/constants/theme"
import { LIST_PROJECTS } from "./data/projects"
import {
  TypographyElement,
  LayoutCardsElement,
  LayoutSection,
} from "@/sawyer-react-lib/ui-kit"
import styles from "./SectionProjects.module.css"

const SectionProjects = () => {
  return (
    <LayoutSection className={styles.wrapper}>
      <div className={cn(styles.container)} id="projects">
        <TypographyElement tag="h2" theme={{ mode: THEME_HEADER }}>
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
    </LayoutSection>
  )
}

export default SectionProjects
