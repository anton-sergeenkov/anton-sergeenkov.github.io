import ButtonElements from "./components/ButtonElements"
import LinkElements from "./components/LinkElements"
import ChipsElements from "./components/ChipsElements"

const AppPage: React.FC = () => {
  return (
    <div style={{ padding: "20px", background: "#fff" }}>
      <ButtonElements />
      <LinkElements />
      <ChipsElements />
    </div>
  )
}

export default AppPage
