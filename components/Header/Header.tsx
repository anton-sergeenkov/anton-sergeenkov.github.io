"use client"

import cn from "classnames"
import { ROUTES, ROUTES_CV } from "@/routes/routes"

import {
  UiMenuItemGroup,
  UiMenuItemRoutes,
  UiLayoutHeader,
} from "@/sawyer-ui/ui-kit"

import styles from "./Header.module.css"

const THEME_MENU = "light-blue"

const Header: React.FC = () => {
  return (
    <UiLayoutHeader>
      <ul>
        {/* Links (Desktop + Mobile) */}
        <li>
          <UiMenuItemGroup
            type="links"
            theme={THEME_MENU}
            list={ROUTES_CV}
            title="CV"
            isAccent
          />
        </li>

        {/* Routes (Mobile) */}
        <li className={cn(styles.mobile)}>
          <UiMenuItemGroup
            type="routes"
            theme={THEME_MENU}
            list={ROUTES}
            title="Menu"
          />
        </li>

        {/* Routes (Desktop) */}
        {ROUTES.map((element, index) => (
          <li className={cn(styles.desktop)} key={index}>
            <UiMenuItemRoutes theme={THEME_MENU} item={element} />
          </li>
        ))}
      </ul>
    </UiLayoutHeader>
  )
}

export default Header
