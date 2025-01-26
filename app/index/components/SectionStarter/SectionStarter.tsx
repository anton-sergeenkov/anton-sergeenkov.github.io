import cn from "classnames"

import LayoutSectionElement from "@/sawyer-react-lib/ui-kit/layout/LayoutSectionElement"
import LayoutSectionContainerElement from "@/sawyer-react-lib/ui-kit/layout/LayoutSectionContainerElement"
import SocialLinksElement from "@/sawyer-react-lib/ui-kit/surfaces/SocialLinksElement"
import TypographyGradientElement from "@/sawyer-react-lib/ui-kit/basic/TypographyGradientElement"
import SectionStack from "./components/SectionStack"
import { LIST_LINKS } from "./data/links"
import { THEME } from "@/constants/theme"

import styles from "./SectionStarter.module.css"

const SectionStarter: React.FC = () => {
  return (
    <LayoutSectionElement isTopSpacing className={styles.wrapper}>
      <LayoutSectionContainerElement
        isNoPadding
        className={cn(styles.container)}
      >
        <div className={styles.logo}></div>

        <div className={styles.content}>
          <h1 className={cn(styles.textHeader, styles.h1)}>Anton Sergeenkov</h1>

          <TypographyGradientElement theme={{ mode: THEME.TEXT_GRADIENT }}>
            <h2 className={cn(styles.textHeader, styles.h2)}>
              Frontend Developer
            </h2>
          </TypographyGradientElement>

          <SectionStack />
          <SocialLinksElement list={LIST_LINKS} />
        </div>
      </LayoutSectionContainerElement>
    </LayoutSectionElement>
  )
}

export default SectionStarter
