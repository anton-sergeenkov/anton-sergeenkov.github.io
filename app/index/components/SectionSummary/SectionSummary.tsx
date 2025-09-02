import cn from "classnames"

import {
  UiHeaderSection,
  UiLayoutSection,
  UiTypography,
  UiTextGradient,
} from "@/sawyer-ui/ui-kit"

import { robotoLight } from "@/sawyer-ui/app/fonts"

import { summary } from "./data/summary"

import styles from "./SectionSummary.module.css"

const SectionSummary: React.FC = () => {
  return (
    <UiLayoutSection className={styles.wrapper}>
      <div className={cn(styles.container)} id="projects">
        <UiHeaderSection theme="dark-filled">Summary</UiHeaderSection>

        <div className={styles.wrapperList}>
          {summary.map((elementSummary, indexSummary) => (
            <>
              <UiTypography
                className={styles.title}
                noSpacing
                tag="h3"
                key={indexSummary}
              >
                {elementSummary.title}
              </UiTypography>

              <ul>
                {elementSummary.items.map((elementItem, indexItem) => (
                  <li className={cn(robotoLight.className)} key={indexItem}>
                    {elementItem}
                  </li>
                ))}
              </ul>
            </>
          ))}
        </div>
      </div>
    </UiLayoutSection>
  )
}

export default SectionSummary
