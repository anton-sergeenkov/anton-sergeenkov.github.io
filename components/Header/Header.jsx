"use client"

import cn from "classnames"

import { ROUTES, ROUTES_CV } from "../../routes/routes"

import MenuOptions from "./components/MenuOptions"
import HeaderOptions from "./components/HeaderOptions"
import MenuRoutes from "./components/MenuRoutes"

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
            accent
          />
        </li>

        {ROUTES.map((item, index) => (
          <li className={cn(styles.listItem, styles.desktop)} key={index}>
            <MenuRoutes item={item} />
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
