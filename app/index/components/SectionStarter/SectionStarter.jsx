import cn from "classnames"

import SectionStack from "./components/SectionStack"
import SectionLinks from "./components/SectionLinks"

import styles from "./SectionStarter.module.css"

const SectionStarter = () => {
  return (
    <div className={cn(styles.wrapper, "section-starter")}>
      <div className={styles.container}>
        <div className={styles.logo}></div>

        <div className={styles.content}>
          <h1 className={cn(styles.textHeader, styles.h1)}>Anton Sergeenkov</h1>
          <h2 className={cn(styles.textHeader, styles.h2, "textGradient")}>
            Frontend Developer
          </h2>

          <SectionStack />
          <SectionLinks />
        </div>
      </div>
    </div>
  )
}

export default SectionStarter
