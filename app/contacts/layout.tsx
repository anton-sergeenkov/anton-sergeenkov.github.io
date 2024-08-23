export const metadata = {
  title: "Anton Sergeenkov. Frontend Developer (React / Vue)",
  description: "Contacts",
}

const RootLayout: React.FC<IRootLayout> = (props) => {
  const { children } = props

  return <main>{children}</main>
}

export default RootLayout
