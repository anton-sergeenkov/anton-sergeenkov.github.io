import cn from "classnames"
import { LayoutSection } from "@/sawyer-react-lib/ui-kit"

import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <LayoutSection
        className={styles.container}
        theme={{ mode: "header-footer" }}
      >
        Anton Sergeenkov. React / Vue Frontend Developer
      </LayoutSection>
    </div>
  )
}

export default Footer
