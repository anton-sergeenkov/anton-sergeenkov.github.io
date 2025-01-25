export const metadata = {
  title: "Ui-Kit",
  description: "Ui-Kit",
}

const RootLayout: React.FC<IRootLayout> = (props) => {
  const { children } = props

  return <main>{children}</main>
}

export default RootLayout
