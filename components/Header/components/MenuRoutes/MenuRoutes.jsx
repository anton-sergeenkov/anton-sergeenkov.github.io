"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { THEME_MENU } from "@/constants/theme"

import { MenuButtonElement } from "@/sawyer-react-lib/ui-kit"

import styles from "./MenuRoutes.module.css"

const MenuRoutes = (props) => {
  const { item, isAccent } = props

  const pathname = usePathname()

  return (
    <div className={styles.item}>
      <Link href={item.path}>
        12
        <MenuButtonElement
          theme={{ mode: THEME_MENU }}
          isAccent={isAccent}
          isActive={pathname === item.path}
        >
          {item.title}
        </MenuButtonElement>
      </Link>
    </div>
  )
}

export default MenuRoutes
