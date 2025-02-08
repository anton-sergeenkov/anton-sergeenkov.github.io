import cn from "classnames"

import UiLayoutSection from "@/sawyer-ui/ui-kit/layout/UiLayoutSection"
import UiLayoutSectionContainer from "@/sawyer-ui/ui-kit/layout/UiLayoutSectionContainer"
import UiSocialLinks from "@/sawyer-ui/ui-kit/surfaces/UiSocialLinks"
import UiTypographyGradient from "@/sawyer-ui/ui-kit/basic/UiTypographyGradient"
import SectionStack from "./components/SectionStack"
import { LIST_LINKS } from "./data/links"
import { THEME } from "@/constants/theme"

import styles from "./SectionStarter.module.css"

const SectionStarter: React.FC = () => {
  return (
    <UiLayoutSection isTopSpacing className={styles.wrapper}>
      <UiLayoutSectionContainer isNoPadding className={cn(styles.container)}>
        <div className={styles.logo}></div>

        <div className={styles.content}>
          <h1 className={cn(styles.textHeader, styles.h1)}>Anton Sergeenkov</h1>

          <UiTypographyGradient theme={{ mode: THEME.TEXT_GRADIENT }}>
            <h2 className={cn(styles.textHeader, styles.h2)}>
              Frontend Developer
            </h2>
          </UiTypographyGradient>

          <SectionStack />
          <UiSocialLinks list={LIST_LINKS} />
        </div>
      </UiLayoutSectionContainer>
    </UiLayoutSection>
  )
}

export default SectionStarter
