import cn from "classnames"

import {
  UiTypographyGradient,
  UiLayoutSection,
  UiLayoutSectionContainer,
} from "@/sawyer-ui/ui-kit"

import UiSocialLinks from "@/sawyer-ui/ui-kit/surfaces/UiSocialLinks"

import SectionStack from "./components/SectionStack"
import { LIST_LINKS } from "./data/links"

import styles from "./SectionStarter.module.css"

const SectionStarter: React.FC = () => {
  return (
    <UiLayoutSection isTopSpacing className={styles.wrapper}>
      <UiLayoutSectionContainer isNoPadding className={cn(styles.container)}>
        <div className={styles.logo}></div>

        <div className={styles.content}>
          <h1 className={cn(styles.textHeader, styles.h1)}>Anton Sergeenkov</h1>

          <UiTypographyGradient theme="blue-lightblue">
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
