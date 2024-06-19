"use client"

// import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined'
import MenuItem from "@mui/material/MenuItem"

import { ButtonElement, MenuToggleElement } from "@/sawyer-react-lib/ui-kit"

import { THEME_MENU } from "@/constants/theme"

import styles from "./MenuOptions.module.css"

const MenuOptionsContent = (props) => {
  const { list, handleClose } = props

  return (
    <>
      {list.items.map((itemMenu, indexMenu) => (
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
    </>
  )
}

const MenuOptions = (props) => {
  const { item, isAccent, className } = props

  return (
    <MenuToggleElement
      className={className}
      theme={{ mode: THEME_MENU }}
      list={item}
      title={item.title}
      isAccent={isAccent}
      Component={MenuOptionsContent}
    />
  )
}

export default MenuOptions
