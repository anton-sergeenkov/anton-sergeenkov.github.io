import { Fragment } from "react"
import cn from "classnames"

import { LIST_STACK } from "./data/stack"
import UiChips from "@/sawyer-ui/ui-kit/basic/UiChips"

import styles from "./SectionStack.module.css"

const SectionStack: React.FC = () => {
  return (
    <div className={cn(styles.container)}>
      {LIST_STACK.map((element, index) => (
        <Fragment key={index}>
          <div>› {element.title}</div>
          <div className={styles.badge}>
            <UiChips items={element.items} className={styles.chips} />
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default SectionStack
