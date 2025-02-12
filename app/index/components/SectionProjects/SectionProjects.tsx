import cn from "classnames"

import { LIST_PROJECTS } from "./data/projects"
import { UiTypography, UiLayoutCards } from "@/sawyer-ui/ui-kit"
import UiLayoutSection from "@/sawyer-ui/ui-kit/layout/UiLayoutSection"

import styles from "./SectionProjects.module.css"

const SectionProjects: React.FC = () => {
  return (
    <UiLayoutSection className={styles.wrapper}>
      <div className={cn(styles.container)} id="projects">
        <UiTypography tag="h2" theme="dark-filled">
          Projects
        </UiTypography>
        <UiLayoutCards items={LIST_PROJECTS} themeLink="dark-underlined" />
      </div>
    </UiLayoutSection>
  )
}

export default SectionProjects
