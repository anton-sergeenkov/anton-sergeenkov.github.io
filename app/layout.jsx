import FontClasses from "./fonts"

import "./globals.css"

export const metadata = {
  title: "Anton Sergeenkov. Frontend Developer (React / Vue)",
  description: "Portfolio",
}

const RootLayout = (props) => {
  const { children } = props

  return (
    <html lang="ru" className={FontClasses}>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
