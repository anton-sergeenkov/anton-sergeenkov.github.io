import Header from "@/components/Header"
import Footer from "@/components/Footer"
import SectionStarter from "./index/components/SectionStarter"
import SectionProjects from "./index/components/SectionProjects"
import SectionSummary from "./index/components/SectionSummary"

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <SectionStarter />
      <SectionProjects />
      <SectionSummary />
      <Footer />
    </div>
  )
}

export default App
