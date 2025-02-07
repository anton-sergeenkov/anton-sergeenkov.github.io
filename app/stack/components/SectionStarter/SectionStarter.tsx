"use client"

// import cn from "classnames"

import { LIST_TECHNOLOGIES_STACK } from "@/data/stack"
import LayoutSectionElement from "@/sawyer-react-lib/ui-kit/layout/LayoutSectionElement"
import LayoutSectionContainerElement from "@/sawyer-react-lib/ui-kit/layout/LayoutSectionContainerElement"
import UiChips from "@/sawyer-react-lib/ui-kit/basic/UiChips"

import styles from "./SectionStarter.module.css"

const SectionStarter: React.FC = () => {
  return (
    <LayoutSectionElement isTopSpacing className={styles.wrapper}>
      <LayoutSectionContainerElement className={styles.container}>
        <ul className={styles.list}>
          {LIST_TECHNOLOGIES_STACK.map((elementStack, elementIndex) => (
            <div key={elementIndex} className={styles.listWrapper}>
              <div className={styles.title}>{elementStack.title}</div>

              <ul className={styles.list}>
                {elementStack.items.map((itemStack, indexStack) => (
                  <li key={indexStack} className={styles.listItem}>
                    <span>
                      <UiChips items={itemStack} className={styles.chips} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </LayoutSectionContainerElement>
    </LayoutSectionElement>
  )
}

export default SectionStarter
