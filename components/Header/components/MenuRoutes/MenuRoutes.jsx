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
      <Link href={item.path}>
        <MenuButton accent={accent} active={pathname === item.path}>
          {item.title}
        </MenuButton>
      </Link>
    </div>
  )
}

export default MenuRoutes
