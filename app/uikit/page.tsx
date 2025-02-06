import Wrapper from "./components/Wrapper"

import UiLinkComponent from "./elements/UiLinkComponent"
import UiChipsComponent from "./elements/UiChipsComponent"
import UiLayoutCardsComponent from "./elements/UiLayoutCardsComponent"

const AppPage: React.FC = () => {
  return (
    <div style={{ padding: "10px 30px", background: "#fff" }}>
      <Wrapper title="Link">
        <UiLinkComponent />
      </Wrapper>

      <Wrapper isColumn isDark title="Chips">
        <UiChipsComponent />
      </Wrapper>

      <Wrapper isColumn isDark title="LayoutCards">
        <UiLayoutCardsComponent />
      </Wrapper>
    </div>
  )
}

export default AppPage
