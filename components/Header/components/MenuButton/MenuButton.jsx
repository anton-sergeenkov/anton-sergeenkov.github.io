// import cn from 'classnames'

import { ButtonElement } from "@/sawyer-react-lib/ui-kit"

import { getTheme } from "./utils"

import styles from "./MenuButton.module.css"

const MenuButton = (props) => {
  const {
    accent,
    active,
    className,
    children,
    onClick = null,
    endIcon = null,
  } = props

  const { StylesButton, StylesButtonAccent, StylesTextActive } =
    getTheme("light-violet")

  const stylesButton = {
    ...StylesButton,
    ...(accent && StylesButtonAccent),
  }

  const stylesText = {
    ...(accent
      ? { color: StylesButtonAccent.color }
      : { color: StylesButton.color }),
    ...(!accent && active && StylesTextActive),
  }

  return (
    <ButtonElement
      className={className}
      size="small"
      variant="filled"
      sx={stylesButton}
      onClick={onClick}
      endIcon={endIcon}
    >
      <span style={stylesText}>{children}</span>
    </ButtonElement>
  )
}

export default MenuButton