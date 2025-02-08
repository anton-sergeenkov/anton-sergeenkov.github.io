import cn from "classnames"

import { THEME } from "@/constants/theme"
import { LIST_PROJECTS } from "./data/projects"
import UiTypography, { Tag } from "@/sawyer-ui/ui-kit/basic/UiTypography"
import UiLayoutSection from "@/sawyer-ui/ui-kit/layout/UiLayoutSection"
import { UiLayoutCards } from "@/sawyer-ui/ui-kit"

import styles from "./SectionProjects.module.css"

const SectionProjects: React.FC = () => {
  return (
    <UiLayoutSection className={styles.wrapper}>
      <div className={cn(styles.container)} id="projects">
        <UiTypography tag={Tag.H2} theme={{ mode: THEME.H2 }}>
          Projects
        </UiTypography>
        <UiLayoutCards items={LIST_PROJECTS} themeLink="dark-underlined" />
      </div>
    </UiLayoutSection>
  )
}

export default SectionProjects
