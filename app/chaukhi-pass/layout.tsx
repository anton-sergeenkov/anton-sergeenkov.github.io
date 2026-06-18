export const metadata = {
  title: "Перевал Чаухи",
  description: "Двухдневный поход с палатками 25 - 26 июля",
}

const RootLayout: React.FC<IRootLayout> = (props) => {
  const { children } = props

  return <main>{children}</main>
}

export default RootLayout
