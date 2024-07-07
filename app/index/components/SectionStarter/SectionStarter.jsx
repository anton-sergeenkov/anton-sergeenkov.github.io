import cn from "classnames"

import { SocialLinksElement, LayoutSection } from "@/sawyer-react-lib/ui-kit"
import SectionStack from "./components/SectionStack"
import { LIST_LINKS } from "./data/links"

import styles from "./SectionStarter.module.css"

const SectionStarter = () => {
  return (
    <LayoutSection className={styles.wrapper}>
      <div className={cn(styles.container)}>
        <div className={styles.logo}></div>

        <div className={styles.content}>
          <h1 className={cn(styles.textHeader, styles.h1)}>Anton Sergeenkov</h1>
          <h2 className={cn(styles.textHeader, styles.h2, "textGradient")}>
            Frontend Developer
          </h2>

          <SectionStack />
          <SocialLinksElement list={LIST_LINKS} />
        </div>
      </div>
    </LayoutSection>
  )
}

export default SectionStarter
