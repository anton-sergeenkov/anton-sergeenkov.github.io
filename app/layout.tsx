import { robotoRegular } from "sawyer-ui/fonts"
import "sawyer-ui/styles.css"
import "./styles.css"

export const metadata = {
  title: "Anton Sergeenkov. Frontend Developer (React / Vue)",
  description: "Portfolio",
}

const RootLayout: React.FC<IRootLayout> = (props) => {
  const { children } = props

  return (
    <html lang="en" className={robotoRegular.className}>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
