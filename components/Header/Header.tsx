"use client"

import cn from "classnames"
import { ROUTES, ROUTES_CV } from "@/routes/routes"

import {
  UiLayoutSection,
  UiMenuItemGroupLinks,
  UiMenuItemGroupRoutes,
  UiMenuItemRoutes,
  // UiMenuItemHash,
} from "@/sawyer-ui/ui-kit"

import styles from "./Header.module.css"

const THEME_MENU = "light-blue"

const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <UiLayoutSection className={styles.container} theme="header-footer">
        <ul className={cn(styles.list)}>
          <li className={styles.listItem}>
            <UiMenuItemGroupLinks
              theme={THEME_MENU}
              list={{
                title: "CV",
                items: ROUTES_CV,
              }}
              title="CV"
              isAccent
            />
          </li>

          {ROUTES.map((element, index) => (
            <li className={cn(styles.listItem, styles.desktop)} key={index}>
              <UiMenuItemRoutes theme={THEME_MENU} item={element} />
            </li>
          ))}

          {/* <li className={cn(styles.listItem, styles.desktop)}>
            <UiMenuItemHash
              theme={THEME_MENU}
              item={{
                title: "About",
                hash: "about",
              }}
            />
          </li> */}

          <li className={cn(styles.listItem, styles.mobile)}>
            <UiMenuItemGroupRoutes
              theme={THEME_MENU}
              list={ROUTES}
              title="Menu"
            />
          </li>
        </ul>
      </UiLayoutSection>
    </div>
  )
}

export default Header
