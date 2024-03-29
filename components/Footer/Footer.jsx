import cn from "classnames"

import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={cn(styles.container, "section-width")}>
        Anton Sergeenkov. React / Vue Frontend Developer
      </div>
    </div>
  )
}

export default Footer
