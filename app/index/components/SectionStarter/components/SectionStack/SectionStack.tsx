import { Fragment } from "react"
import cn from "classnames"

import { LIST_STACK } from "./data/stack"
import { UiChips } from "sawyer-ui"

import { robotoLight } from "sawyer-ui/fonts"

import styles from "./SectionStack.module.css"

const SectionStack: React.FC = () => {
  return (
    <div className={cn(styles.container)}>
      {LIST_STACK.map((element, index) => (
        <Fragment key={index}>
          <div className={cn(styles.title, robotoLight.className)}>
            › {element.title}
          </div>
          <div className={styles.badge}>
            <UiChips items={element.items} />
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default SectionStack
