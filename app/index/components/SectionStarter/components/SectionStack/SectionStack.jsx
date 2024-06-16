import { Fragment } from "react"
import cn from "classnames"

import { LIST_STACK } from "./data/stack"
import { ChipsList } from "@/sawyer-react-lib/ui-kit"

import styles from "./SectionStack.module.css"

const SectionStack = () => {
  return (
    <div className={cn(styles.container)}>
      {LIST_STACK.map((element, index) => (
        <Fragment key={index}>
          <div>› {element.title}</div>
          <div className={styles.badge}>
            <ChipsList
              theme="default-light"
              items={element.items}
              className={styles.chip}
            />
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default SectionStack
