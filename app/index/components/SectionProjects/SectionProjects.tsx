import cn from "classnames"

import { THEME } from "@/constants/theme"
import { LIST_PROJECTS } from "./data/projects"
import TypographyElement, {
  Tag,
} from "@/sawyer-react-lib/ui-kit/basic/TypographyElement"
import LayoutSectionElement from "@/sawyer-react-lib/ui-kit/layout/LayoutSectionElement"
import UiLayoutCards from "@/sawyer-react-lib/ui-kit/layout/UiLayoutCards"

import styles from "./SectionProjects.module.css"

const SectionProjects: React.FC = () => {
  return (
    <LayoutSectionElement className={styles.wrapper}>
      <div className={cn(styles.container)} id="projects">
        <TypographyElement tag={Tag.H2} theme={{ mode: THEME.H2 }}>
          Projects
        </TypographyElement>
        <UiLayoutCards
          items={LIST_PROJECTS}
          themeLink={{
            mode: THEME.LINK_CARD,
          }}
        />
      </div>
    </LayoutSectionElement>
  )
}

export default SectionProjects
