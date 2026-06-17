export const metadata = {
  title: "Chaukhi Pass",
  description: "Hike",
}

const RootLayout: React.FC<IRootLayout> = (props) => {
  const { children } = props

  return <main>{children}</main>
}

export default RootLayout
