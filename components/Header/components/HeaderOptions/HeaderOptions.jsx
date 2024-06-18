"use client"

import { useState } from "react"

// import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined'
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

import { ROUTES } from "@/routes/routes"
import { THEME_MENU } from "@/constants/theme"

import {
  MenuButtonElement,
  MenuItemRoutesElement,
} from "@/sawyer-react-lib/ui-kit"

import styles from "./HeaderOptions.module.css"

const HeaderOptions = (props) => {
  const { isAccent } = props

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <MenuButtonElement
        theme={{ mode: THEME_MENU }}
        isAccent={isAccent}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Menu
      </MenuButtonElement>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {ROUTES.map((item, index) => (
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
      </Menu>
    </>
  )
}

export default HeaderOptions
