"use client"

// import cn from "classnames"

import { LIST_TECHNOLOGIES_STACK } from "@/data/stack"
import UiLayoutSection from "@/sawyer-ui/ui-kit/layout/UiLayoutSection"
import UiLayoutSectionContainer from "@/sawyer-ui/ui-kit/layout/UiLayoutSectionContainer"
import { UiChips } from "@/sawyer-ui/ui-kit"

import styles from "./SectionStarter.module.css"

const SectionStarter: React.FC = () => {
  return (
    <UiLayoutSection isTopSpacing className={styles.wrapper}>
      <UiLayoutSectionContainer className={styles.container}>
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
      </UiLayoutSectionContainer>
    </UiLayoutSection>
  )
}

export default SectionStarter
