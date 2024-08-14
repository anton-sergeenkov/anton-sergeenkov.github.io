"use client"

// import cn from "classnames"
import LinkElement from "@/sawyer-react-lib/ui-kit/basic/LinkElement"
import LayoutSectionElement from "@/sawyer-react-lib/ui-kit/layout/LayoutSectionElement"
import ChipsElement from "@/sawyer-react-lib/ui-kit/basic/ChipsElement"
import { THEME } from "@/constants/theme"
import { LIST_CONTACTS } from "@/data/contacts"

import styles from "./SectionStarter.module.css"

const SectionStarter: React.FC = () => {
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
                          mode: THEME.LINK,
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
