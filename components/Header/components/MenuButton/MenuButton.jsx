// import cn from 'classnames'

import { ButtonElement } from "@/sawyer-react-lib/ui-kit"

import { getStyles } from "./utils"

// import styles from "./MenuButton.module.css"

const MenuButton = (props) => {
  const {
    isAccent,
    isActive,
    className,
    children,
    onClick = null,
    endIcon = null,
  } = props

  const { stylesButton, stylesText } = getStyles(
    "light-violet",
    isAccent,
    isActive,
  )

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
