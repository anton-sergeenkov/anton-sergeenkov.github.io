import cn from "classnames"
import LayoutSectionElement from "@/sawyer-react-lib/ui-kit/layout/LayoutSectionElement"
import { THEME } from "@/constants/theme"

import styles from "./Footer.module.css"

const Footer: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <LayoutSectionElement
        className={styles.container}
        theme={{ mode: THEME.HEADER_FOOTER }}
      >
        <span className={cn(styles.items, styles.logoConteiner)}>
          <div className={styles.logo}></div>Anton Sergeenkov
        </span>
        <span className={styles.items}>React & Vue Frontend Developer</span>
      </LayoutSectionElement>
    </div>
  )
}

export default Footer
