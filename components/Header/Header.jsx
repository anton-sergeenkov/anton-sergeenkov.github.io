"use client"

import cn from "classnames"

import { ROUTES, ROUTES_CV } from "@/routes/routes"
import { THEME_MENU } from "@/constants/theme"

import MenuItemGroupLinksElement from "./components/MenuItemGroupLinksElement"
import MenuItemGroupRoutesElement from "./components/MenuItemGroupRoutesElement"

// import { ButtonElement, MenuToggleElement } from "@/sawyer-react-lib/ui-kit"

import { MenuItemRoutesElement } from "@/sawyer-react-lib/ui-kit"

import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={cn(styles.container, "section-header")}>
      <ul className={cn(styles.list)}>
        <li className={styles.listItem}>
          <MenuItemGroupLinksElement
            theme={{ mode: THEME_MENU }}
            list={{
              title: "CV",
              items: ROUTES_CV,
            }}
            title="CV"
            isAccent
          />
        </li>

        {ROUTES.map((item, index) => (
          <li className={cn(styles.listItem, styles.desktop)} key={index}>
            <MenuItemRoutesElement theme={{ mode: THEME_MENU }} item={item} />
          </li>
        ))}

        <li className={cn(styles.listItem, styles.mobile)}>
          <MenuItemGroupRoutesElement
            theme={{ mode: THEME_MENU }}
            title="Menu"
            list={ROUTES}
          />
        </li>
      </ul>
    </div>
  )
}

export default Header
