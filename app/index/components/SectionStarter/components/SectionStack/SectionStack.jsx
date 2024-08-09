import { Fragment } from "react"
import cn from "classnames"

import { LIST_STACK } from "./data/stack"
import ChipsElement from "@/sawyer-react-lib/ui-kit/basic/ChipsElement"

import styles from "./SectionStack.module.css"

const SectionStack = () => {
  return (
    <div className={cn(styles.container)}>
      {LIST_STACK.map((element, index) => (
        <Fragment key={index}>
          <div>› {element.title}</div>
          <div className={styles.badge}>
            <ChipsElement
              items={element.items}
              className={styles.chips}
              isUserSelect
            />
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default SectionStack
