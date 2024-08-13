// import cn from "classnames"
import LayoutSectionElement from "@/sawyer-react-lib/ui-kit/layout/LayoutSectionElement"
import { THEME } from "@/constants/theme"

import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <LayoutSectionElement
        className={styles.container}
        theme={{ mode: THEME.HEADER_FOOTER }}
      >
        Anton Sergeenkov. React / Vue Frontend Developer
      </LayoutSectionElement>
    </div>
  )
}

export default Footer
