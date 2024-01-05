"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import MenuButton from "../MenuButton"

import styles from "./MenuRoutes.module.css"

const MenuRoutes = (props) => {
  const { item, accent } = props

  const pathname = usePathname()

  return (
    <div className={styles.item}>
      <MenuButton accent={accent}>
        <Link
          href={item.path}
          className={pathname === item.path ? styles.active : null}
        >
          {item.title}
        </Link>
      </MenuButton>
    </div>
  )
}

export default MenuRoutes
