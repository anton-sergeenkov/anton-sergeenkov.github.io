"use client"

import cn from "classnames"

import { LIST_TECHNOLOGIES_STACK } from "@/data/stack"

import { ChipsElement } from "@/sawyer-react-lib/ui-kit"

import styles from "./SectionStarter.module.css"

const SectionStarter = () => {
  return (
    <div className={cn(styles.wrapper, "section-starter")}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {LIST_TECHNOLOGIES_STACK.map((elementStack, elementIndex) => (
            <div key={elementIndex} className={styles.listWrapper}>
              <div className={styles.title}>{elementStack.title}</div>

              <ul className={styles.list}>
                {elementStack.items.map((itemStack, indexStack) => (
                  <li key={indexStack} className={styles.listItem}>
                    <span>
                      <ChipsElement
                        items={itemStack}
                        className={styles.chips}
                        isUserSelect
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SectionStarter
