"use client"

import cn from "classnames"
import { ROUTES, ROUTES_CV } from "@/routes/routes"

import {
  UiLayoutSection,
  UiMenuItemGroup,
  UiMenuItemRoutes,
  // UiMenuItemHash,
} from "@/sawyer-ui/ui-kit"

import styles from "./Header.module.css"

const THEME_MENU = "light-blue"

const Header: React.FC = () => {
  return (
    <UiLayoutSection
      className={styles.wrapper}
      theme="header-footer"
      isSpacingY={false}
    >
      <div className={styles.container}>
        <ul className={cn(styles.list)}>
          <li className={styles.listItem}>
            <UiMenuItemGroup
              type="links"
              theme={THEME_MENU}
              list={ROUTES_CV}
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
            <UiMenuItemGroup
              type="routes"
              theme={THEME_MENU}
              list={ROUTES}
              title="Menu"
            />
          </li>
        </ul>
      </div>
    </UiLayoutSection>
  )
}

export default Header
