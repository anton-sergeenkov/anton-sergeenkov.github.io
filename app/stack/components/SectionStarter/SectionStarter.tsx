"use client"

// import cn from "classnames"

import { LIST_TECHNOLOGIES_STACK } from "@/data/stack"
import {
  UiChips,
  UiLayoutSection,
  UiLayoutPaper,
  UiHeaderSection,
  UiTypography,
} from "@/sawyer-ui/ui-kit"

import styles from "./SectionStarter.module.css"

const SectionStarter: React.FC = () => {
  return (
    <UiLayoutSection className={styles.wrapper}>
      <UiHeaderSection>Technologies Stack</UiHeaderSection>

      <div className={styles.containerItems}>
        {LIST_TECHNOLOGIES_STACK.map((elementStack, elementIndex) => (
          <UiLayoutPaper key={elementIndex} className={styles.item}>
            <UiTypography className={styles.title}>
              {elementStack.title}
            </UiTypography>

            <ul className={styles.list}>
              {elementStack.items.map((itemStack, indexStack) => (
                <li key={indexStack} className={styles.listItem}>
                  <UiChips items={itemStack} className={styles.chips} />
                </li>
              ))}
            </ul>
          </UiLayoutPaper>
        ))}
      </div>
    </UiLayoutSection>
  )
}

export default SectionStarter
