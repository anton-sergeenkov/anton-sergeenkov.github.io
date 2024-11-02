import cn from "classnames"
import LayoutSectionElement from "@/sawyer-react-lib/ui-kit/layout/LayoutSectionElement"
import ChipsElement from "@/sawyer-react-lib/ui-kit/basic/ChipsElement"
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
        <span className={styles.items}>
          <ChipsElement
            items={["React"]}
            className={cn(styles.chips, styles.chip1)}
            isUserSelect
          />
          &
          <ChipsElement
            items={["Vue"]}
            className={cn(styles.chips, styles.chip2)}
            isUserSelect
          />
          Frontend Developer
        </span>
      </LayoutSectionElement>
    </div>
  )
}

export default Footer
