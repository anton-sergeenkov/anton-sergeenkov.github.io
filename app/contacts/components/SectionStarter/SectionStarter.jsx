"use client"

import cn from "classnames"

import {
  ChipsElement,
  LinkElement,
  LayoutSectionElement,
} from "@/sawyer-react-lib/ui-kit"

import { THEME_LINK } from "@/constants/theme"
import { LIST_CONTACTS } from "@/data/contacts"

import styles from "./SectionStarter.module.css"

const SectionStarter = () => {
  return (
    <LayoutSectionElement className={styles.wrapper}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {LIST_CONTACTS.map((elementCategory, elementIndex) => (
            <div key={elementIndex} className={styles.listWrapper}>
              <div className={styles.title}>{elementCategory.title}</div>

              <ul className={styles.list}>
                {elementCategory.items.map((itemContact, indexContact) => (
                  <li key={indexContact} className={styles.listItem}>
                    <div className={styles.listItemContainer}>
                      <ChipsElement
                        items={[itemContact.title]}
                        className={styles.chips}
                        isUserSelect
                      />
                      <LinkElement
                        href={itemContact.url}
                        theme={{
                          mode: THEME_LINK,
                        }}
                      >
                        {itemContact.alias
                          ? itemContact.alias
                          : itemContact.url}
                      </LinkElement>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </div>
    </LayoutSectionElement>
  )
}

export default SectionStarter
