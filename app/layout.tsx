import { robotoRegular } from "@/sawyer-react-lib/app/fonts"
import "@/sawyer-react-lib/app/globals.css"

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
