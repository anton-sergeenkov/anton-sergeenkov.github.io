"use client"

import cn from "classnames"
import { ROUTES, ROUTES_CV } from "@/routes/routes"
import { THEME } from "@/constants/theme"

import { UiLayoutSection } from "@/sawyer-ui/ui-kit"

import UiMenuItemGroupLinks from "@/sawyer-ui/ui-kit/menu/UiMenuItemGroupLinks"
import UiMenuItemGroupRoutes from "@/sawyer-ui/ui-kit/menu/UiMenuItemGroupRoutes"
import UiMenuItemRoutes from "@/sawyer-ui/ui-kit/menu/UiMenuItemRoutes"

// import UiMenuItemHash from "@/sawyer-ui/ui-kit/menu/UiMenuItemHash"

import styles from "./Header.module.css"

const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <UiLayoutSection className={styles.container} theme="header-footer">
        <ul className={cn(styles.list)}>
          <li className={styles.listItem}>
            <UiMenuItemGroupLinks
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
              <UiMenuItemRoutes theme={{ mode: THEME.MENU }} item={element} />
            </li>
          ))}

          <li className={cn(styles.listItem, styles.mobile)}>
            <UiMenuItemGroupRoutes
              theme={{ mode: THEME.MENU }}
              list={ROUTES}
              title="Menu"
            />
          </li>

          {/* FIXME: not used, not styled link */}
          {/* <UiMenuItemHash
          theme={{ mode: THEME.MENU }}
          item={{
            title: "Test",
            hash: "test",
          }}
        /> */}
        </ul>
      </UiLayoutSection>
    </div>
  )
}

export default Header
