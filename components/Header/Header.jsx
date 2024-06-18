"use client"

import cn from "classnames"

import { ROUTES, ROUTES_CV } from "@/routes/routes"
import { THEME_MENU } from "@/constants/theme"

import MenuOptions from "./components/MenuOptions"
import HeaderOptions from "./components/HeaderOptions"

import { MenuItemRoutesElement } from "@/sawyer-react-lib/ui-kit"

import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={cn(styles.container, "section-header")}>
      <ul className={cn(styles.list)}>
        <li className={styles.listItem}>
          <MenuOptions
            item={{
              title: "CV",
              items: ROUTES_CV,
            }}
            isAccent
          />
        </li>

        {ROUTES.map((item, index) => (
          <li className={cn(styles.listItem, styles.desktop)} key={index}>
            <MenuItemRoutesElement theme={{ mode: THEME_MENU }} item={item} />
          </li>
        ))}

        <li className={cn(styles.listItem, styles.mobile)}>
          <HeaderOptions />
        </li>
      </ul>
    </div>
  )
}

export default Header
