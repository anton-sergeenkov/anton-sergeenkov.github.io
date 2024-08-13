"use client"

import cn from "classnames"
import LayoutSectionElement from "@/sawyer-react-lib/ui-kit/layout/LayoutSectionElement"
import { ROUTES, ROUTES_CV } from "@/routes/routes"
import { THEME } from "@/constants/theme"

import {
  MenuItemRoutesElement,
  MenuItemGroupLinksElement,
  MenuItemGroupRoutesElement,
  // MenuItemHashElement,
} from "@/sawyer-react-lib/ui-kit"

import styles from "./Header.module.css"

const Header = () => {
  return (
    <LayoutSectionElement
      className={styles.wrapper}
      theme={{ mode: THEME.HEADER_FOOTER }}
    >
      <ul className={cn(styles.list)}>
        <li className={styles.listItem}>
          <MenuItemGroupLinksElement
            theme={{ mode: THEME.MENU }}
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
            <MenuItemRoutesElement
              theme={{ mode: THEME.MENU }}
              item={element}
            />
          </li>
        ))}

        <li className={cn(styles.listItem, styles.mobile)}>
          <MenuItemGroupRoutesElement
            theme={{ mode: THEME.MENU }}
            list={ROUTES}
            title="Menu"
          />
        </li>

        {/* FIXME: not used, not styled link */}
        {/* <MenuItemHashElement
          theme={{ mode: THEME.MENU }}
          item={{
            title: "Test",
            hash: "test",
          }}
        /> */}
      </ul>
    </LayoutSectionElement>
  )
}

export default Header
