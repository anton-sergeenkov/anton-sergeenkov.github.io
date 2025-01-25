import ButtonElements from "./components/ButtonElements"
import LinkElements from "./components/LinkElements"
import ChipsElements from "./components/ChipsElements"
import LayoutCardsElements from "./components/LayoutCardsElements"

const AppPage: React.FC = () => {
  return (
    <div style={{ padding: "10px 30px", background: "#e6e6e6" }}>
      <ButtonElements />
      <LinkElements />
      <ChipsElements />
      <LayoutCardsElements />
    </div>
  )
}

export default AppPage
