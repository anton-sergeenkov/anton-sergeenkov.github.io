// import cn from 'classnames'

import { ButtonElement } from "@/sawyer-react-lib/ui-kit"

import styles from "./MenuButton.module.css"

export const ButtonStyles = {
  textTransform: "none",
  fontFamily: "var(--font-roboto-regular)",
  borderRadius: "20px",
  border: "1px solid transparent",
  backgroundColor: "transparent",
  width: "auto",
  color: "#2b2b2b",
  padding: "4px 10px",
  transition: ".4s",
}

export const ButtonStylesSelected = {
  backgroundColor: "#8167f7",
  color: "#edeeef",
  ":hover": {
    backgroundColor: "#2b2b2b",
  },
}

const MenuButton = (props) => {
  const { accent, className, children, onClick = null, endIcon = null } = props

  return (
    <ButtonElement
      className={className}
      size="small"
      variant="filled"
      sx={
        !accent
          ? ButtonStyles
          : {
              ...ButtonStyles,
              ...ButtonStylesSelected,
            }
      }
      onClick={onClick}
      endIcon={endIcon}
    >
      <span
        style={{
          color: !accent ? ButtonStyles.color : ButtonStylesSelected.color,
        }}
        className={styles.text}
      >
        {children}
      </span>
    </ButtonElement>
  )
}

export default MenuButton
