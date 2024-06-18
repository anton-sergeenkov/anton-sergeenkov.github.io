"use client"

import cn from "classnames"

import { ChipsElement, LinkElement } from "@/sawyer-react-lib/ui-kit"

import { LIST_CONTACTS } from "@/data/contacts"

import styles from "./SectionStarter.module.css"

const SectionStarter = () => {
  return (
    <div className={cn(styles.wrapper, "section-starter")}>
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
                      />
                      <LinkElement
                        href={itemContact.url}
                        theme={{
                          mode: "blue-underlined-thin",
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
    </div>
  )
}

export default SectionStarter