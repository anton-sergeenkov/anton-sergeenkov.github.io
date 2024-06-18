"use client"

import { useState } from "react"

// import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined'
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

import { ButtonElement } from "@/sawyer-react-lib/ui-kit"

import MenuButton from "../MenuButton/MenuButton"

import styles from "./MenuOptions.module.css"

const MenuOptions = (props) => {
  const { item, isAccent, className } = props

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={className}>
      <MenuButton
        isAccent={isAccent}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {item.title}
      </MenuButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {item.items.map((itemMenu, indexMenu) => (
          <MenuItem
            key={indexMenu}
            onClick={handleClose}
            sx={{
              padding: 0,
              margin: 0,
              minHeight: "auto",
              cursor: "default",
            }}
          >
            <ButtonElement
              size="small"
              fullWidth
              variant="text"
              disabled={itemMenu.disabled}
              // endIcon={<OpenInNewOutlinedIcon className={styles.icon} />}
              sx={{
                textTransform: "none",
                color: "#2b2b2b",
                justifyContent: "start",
                padding: "5px 10px",
                fontFamily: "var(--font-roboto-light)",
              }}
            >
              {!itemMenu.disabled ? (
                <a className={styles.link} href={itemMenu.path} target="_blank">
                  {itemMenu.title}
                </a>
              ) : (
                <span>{itemMenu.title}</span>
              )}
            </ButtonElement>
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default MenuOptions
