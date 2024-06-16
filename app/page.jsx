import Header from "@/components/Header"
import Footer from "@/components/Footer"
import SectionStarter from "./index/components/SectionStarter"
import SectionProjects from "./index/components/SectionProjects"

const App = () => {
  return (
    <div>
      <Header />
      <SectionStarter />
      <SectionProjects />
      <Footer />
    </div>
  )
}

export default App
