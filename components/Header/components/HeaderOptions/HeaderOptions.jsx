"use client"

import MenuItem from "@mui/material/MenuItem"

import { ROUTES } from "@/routes/routes"
import { THEME_MENU } from "@/constants/theme"

import { MenuItemRoutesElement } from "@/sawyer-react-lib/ui-kit"

import MenuToggleElement from "../MenuToggleElement"

import styles from "./HeaderOptions.module.css"

const HeaderOptionsContent = (props) => {
  const { list, handleClose } = props

  return (
    <>
      {list.map((item, index) => (
        <div className={styles.link} key={index}>
          <MenuItem
            onClick={handleClose}
            sx={{
              padding: 0,
              margin: 0,
              minHeight: "auto",
              cursor: "default",
            }}
          >
            <MenuItemRoutesElement theme={{ mode: THEME_MENU }} item={item} />
          </MenuItem>
        </div>
      ))}
    </>
  )
}

const HeaderOptions = (props) => {
  const { className, isAccent } = props

  return (
    <MenuToggleElement
      className={className}
      theme={{ mode: THEME_MENU }}
      list={ROUTES}
      title="Menu"
      isAccent={isAccent}
      Component={HeaderOptionsContent}
    />
  )
}

export default HeaderOptions
