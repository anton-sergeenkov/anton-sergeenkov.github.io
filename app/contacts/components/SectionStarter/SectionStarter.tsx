"use client"

import cn from "classnames"
import UiLink from "@/sawyer-react-lib/ui-kit/basic/UiLink"
import LayoutSectionElement from "@/sawyer-react-lib/ui-kit/layout/LayoutSectionElement"
import LayoutSectionContainerElement from "@/sawyer-react-lib/ui-kit/layout/LayoutSectionContainerElement"
import { THEME } from "@/constants/theme"
import { LIST_CONTACTS } from "@/data/contacts"
import { robotoLight } from "@/sawyer-react-lib/app/fonts"

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
                        theme={{
                          mode: THEME.LINK,
                        }}
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
