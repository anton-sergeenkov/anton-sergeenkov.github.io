"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { THEME_MENU } from "@/constants/theme"

import MenuButton from "../MenuButton"

import styles from "./MenuRoutes.module.css"

const MenuRoutes = (props) => {
  const { item, isAccent } = props

  const pathname = usePathname()

  return (
    <div className={styles.item}>
      <Link href={item.path}>
        <MenuButton
          theme={{ mode: THEME_MENU }}
          isAccent={isAccent}
          isActive={pathname === item.path}
        >
          {item.title}
        </MenuButton>
      </Link>
    </div>
  )
}

export default MenuRoutes
