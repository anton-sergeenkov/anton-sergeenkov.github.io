import cn from "classnames"

import { THEME } from "@/constants/theme"
import { LIST_PROJECTS } from "./data/projects"
import TypographyElement, {
  Tag,
} from "@/sawyer-ui/ui-kit/basic/TypographyElement"
import LayoutSectionElement from "@/sawyer-ui/ui-kit/layout/LayoutSectionElement"
import { UiLayoutCards } from "@/sawyer-ui/ui-kit"

import styles from "./SectionProjects.module.css"

const SectionProjects: React.FC = () => {
  return (
    <LayoutSectionElement className={styles.wrapper}>
      <div className={cn(styles.container)} id="projects">
        <TypographyElement tag={Tag.H2} theme={{ mode: THEME.H2 }}>
          Projects
        </TypographyElement>
        <UiLayoutCards items={LIST_PROJECTS} themeLink="dark-underlined" />
      </div>
    </LayoutSectionElement>
  )
}

export default SectionProjects
