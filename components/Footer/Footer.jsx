// import cn from "classnames"
import { LayoutSectionElement } from "@/sawyer-react-lib/ui-kit"
import { THEME_HEADER_FOOTER } from "@/constants/theme"

import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <LayoutSectionElement
        className={styles.container}
        theme={{ mode: THEME_HEADER_FOOTER }}
      >
        Anton Sergeenkov. React / Vue Frontend Developer
      </LayoutSectionElement>
    </div>
  )
}

export default Footer
