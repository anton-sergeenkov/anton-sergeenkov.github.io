import { THEME_MENU } from "@/constants/theme"

import { MenuButtonElement } from "@/sawyer-react-lib/ui-kit"

const MenuHash = (props) => {
  const { item } = props

  return (
    <MenuButtonElement theme={{ mode: THEME_MENU }}>
      <a href={`#${item.hash}`}>{item.title}</a>
    </MenuButtonElement>
  )
}

export default MenuHash
