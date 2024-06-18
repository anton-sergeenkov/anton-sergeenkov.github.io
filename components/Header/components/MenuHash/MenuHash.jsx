import { THEME_MENU } from "@/constants/theme"

import MenuButton from "../MenuButton"

const MenuHash = (props) => {
  const { item } = props

  return (
    <MenuButton theme={{ mode: THEME_MENU }}>
      <a href={`#${item.hash}`}>{item.title}</a>
    </MenuButton>
  )
}

export default MenuHash
