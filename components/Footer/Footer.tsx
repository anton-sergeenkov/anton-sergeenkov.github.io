import cn from "classnames"
import { UiLayoutSection } from "@/sawyer-ui/ui-kit"

import styles from "./Footer.module.css"

const Footer: React.FC = () => {
  return (
    <UiLayoutSection
      className={styles.wrapper}
      theme="header-footer"
      isSpacingY={false}
    >
      <div className={styles.container}>
        <span className={cn(styles.items, styles.logoConteiner)}>
          <div className={styles.logo}></div>Anton Sergeenkov
        </span>
        <span className={styles.items}>React & Vue Frontend Developer</span>
      </div>
    </UiLayoutSection>
  )
}

export default Footer
