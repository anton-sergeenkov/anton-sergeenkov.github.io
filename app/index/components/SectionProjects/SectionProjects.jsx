/* eslint-disable jsx-a11y/anchor-has-content */
import cn from "classnames"

import { THEME } from "@/constants/theme"
import { LIST_PROJECTS } from "./data/projects"
import {
  TypographyElement,
  LayoutSectionElement,
} from "@/sawyer-react-lib/ui-kit"
import LayoutCardsElement from "@/sawyer-react-lib/ui-kit/layout/LayoutCardsElement"

import styles from "./SectionProjects.module.css"

const SectionProjects = () => {
  return (
    <LayoutSectionElement className={styles.wrapper}>
      <div className={cn(styles.container)} id="projects">
        <TypographyElement tag="h2" theme={{ mode: THEME.H2 }}>
          Projects
        </TypographyElement>
        <LayoutCardsElement
          items={LIST_PROJECTS}
          theme={{
            mode: THEME.CARD,
          }}
          themeLink={{
            mode: THEME.LINK_CARD,
          }}
        />
      </div>
    </LayoutSectionElement>
  )
}

export default SectionProjects
