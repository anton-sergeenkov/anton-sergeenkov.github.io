import cn from "classnames"

import { LIST_PROJECTS } from "./data/projects"
import {
  UiHeaderSection,
  UiLayoutCards,
  UiLayoutSection,
} from "@/sawyer-ui/ui-kit"

import styles from "./SectionProjects.module.css"

const SectionProjects: React.FC = () => {
  return (
    <UiLayoutSection className={styles.wrapper}>
      <div className={cn(styles.container)} id="projects">
        <UiHeaderSection theme="dark-filled">Projects</UiHeaderSection>
        <UiLayoutCards items={LIST_PROJECTS} themeLink="dark-underlined" />
      </div>
    </UiLayoutSection>
  )
}

export default SectionProjects
