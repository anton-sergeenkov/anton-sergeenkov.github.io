import cn from "classnames"

import {
  UiTextGradient,
  UiLayoutSection,
  UiLayoutPaper,
  UiSocialLinks,
} from "@/sawyer-ui/ui-kit"

import SectionStack from "./components/SectionStack"
import { LIST_LINKS } from "./data/links"

import styles from "./SectionStarter.module.css"

const SectionStarter: React.FC = () => {
  return (
    <UiLayoutSection className={styles.wrapper}>
      <UiLayoutPaper withShadow className={cn(styles.container)}>
        <div className={styles.logo}></div>

        <div className={styles.content}>
          <h1 className={cn(styles.textHeader, styles.h1)}>Anton Sergeenkov</h1>

          <UiTextGradient theme="blue-lightblue">
            <h2 className={cn(styles.textHeader, styles.h2)}>
              Senior Frontend Developer
            </h2>
          </UiTextGradient>

          <SectionStack />
          <UiSocialLinks list={LIST_LINKS} />
        </div>
      </UiLayoutPaper>
    </UiLayoutSection>
  )
}

export default SectionStarter
