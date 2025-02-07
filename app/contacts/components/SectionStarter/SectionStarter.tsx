"use client"

import cn from "classnames"
import UiLink from "@/sawyer-ui/ui-kit/basic/UiLink"
import LayoutSectionElement from "@/sawyer-ui/ui-kit/layout/LayoutSectionElement"
import LayoutSectionContainerElement from "@/sawyer-ui/ui-kit/layout/LayoutSectionContainerElement"
import { LIST_CONTACTS } from "@/data/contacts"
import { robotoLight } from "@/sawyer-ui/app/fonts"

import styles from "./SectionStarter.module.css"

const SectionStarter: React.FC = () => {
  return (
    <LayoutSectionElement isTopSpacing className={styles.wrapper}>
      <LayoutSectionContainerElement className={styles.container}>
        <ul className={styles.list}>
          {LIST_CONTACTS.map((elementCategory, elementIndex) => (
            <div key={elementIndex} className={styles.listWrapper}>
              <div className={styles.title}>{elementCategory.title}</div>

              <ul className={styles.list}>
                {elementCategory.items.map((itemContact, indexContact) => (
                  <li key={indexContact} className={styles.listItem}>
                    <div
                      className={cn(
                        robotoLight.className,
                        styles.listItemContainer,
                      )}
                    >
                      <span>{itemContact.title}</span>

                      <UiLink
                        href={itemContact.url}
                        theme="blue-underlined-thin"
                      >
                        {itemContact.alias
                          ? itemContact.alias
                          : itemContact.url}
                      </UiLink>
                    </div>
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
