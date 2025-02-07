import Wrapper from "./components/Wrapper"

import UiLinkComponent from "./elements/UiLinkComponent"
import UiChipsComponent from "./elements/UiChipsComponent"

const AppPage: React.FC = () => {
  return (
    <div style={{ padding: "10px 30px", background: "#fff" }}>
      <Wrapper title="Link">
        <UiLinkComponent />
      </Wrapper>

      <Wrapper isColumn isDark title="Chips">
        <UiChipsComponent />
      </Wrapper>
    </div>
  )
}

export default AppPage
