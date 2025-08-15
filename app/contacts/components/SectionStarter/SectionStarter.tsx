"use client"

import cn from "classnames"

import {
  UiLink,
  UiLayoutSection,
  UiLayoutPaper,
  UiHeaderSection,
} from "@/sawyer-ui/ui-kit"

import { LIST_CONTACTS } from "@/data/contacts"
import { robotoLight } from "@/sawyer-ui/app/fonts"

import styles from "./SectionStarter.module.css"

const SectionStarter: React.FC = () => {
  return (
    <UiLayoutSection className={styles.wrapper}>
      <UiHeaderSection>Contacts</UiHeaderSection>

      <UiLayoutPaper className={styles.container}>
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
                      <span>{itemContact.title}:</span>

                      <UiLink href={itemContact.url} theme="blue-underlined">
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
      </UiLayoutPaper>
    </UiLayoutSection>
  )
}

export default SectionStarter
