import cn from "classnames"
import UiLayoutSection from "@/sawyer-ui/ui-kit/layout/UiLayoutSection"
import { THEME } from "@/constants/theme"

import styles from "./Footer.module.css"

const Footer: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <UiLayoutSection
        className={styles.container}
        theme={{ mode: THEME.HEADER_FOOTER }}
      >
        <span className={cn(styles.items, styles.logoConteiner)}>
          <div className={styles.logo}></div>Anton Sergeenkov
        </span>
        <span className={styles.items}>React & Vue Frontend Developer</span>
      </UiLayoutSection>
    </div>
  )
}

export default Footer
