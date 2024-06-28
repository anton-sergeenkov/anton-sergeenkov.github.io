/* eslint-disable jsx-a11y/anchor-has-content */
import cn from "classnames"

import { LIST_PROJECTS } from "./data/projects"
import { TypographyElement } from "@/sawyer-react-lib/ui-kit"
import styles from "./SectionProjects.module.css"

import GridPictureContentElement from "./GridPictureContentElement/GridPictureContentElement"

const SectionProjects = () => {
  return (
    <div className={styles.wrapper} id="projects">
      <div className={cn(styles.container, "section")}>
        <TypographyElement tag="h2" theme={{ mode: "dark-filled" }}>
          Projects
        </TypographyElement>

        <GridPictureContentElement items={LIST_PROJECTS} isOptions />
      </div>
    </div>
  )
}

export default SectionProjects
