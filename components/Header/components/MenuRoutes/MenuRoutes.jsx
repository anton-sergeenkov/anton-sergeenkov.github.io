"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { THEME_MENU } from "@/constants/theme"

import { MenuButtonElement } from "@/sawyer-react-lib/ui-kit"

// import styles from "./MenuRoutes.module.css"

const MenuRoutes = (props) => {
  const { item, isAccent } = props

  const pathname = usePathname()

  return (
    <Link href={item.path}>
      <MenuButtonElement
        theme={{ mode: THEME_MENU }}
        isAccent={isAccent}
        isActive={pathname === item.path}
      >
        {item.title}
      </MenuButtonElement>
    </Link>
  )
}

export default MenuRoutes
