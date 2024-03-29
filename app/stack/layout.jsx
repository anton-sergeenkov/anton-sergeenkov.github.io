export const metadata = {
  title: "Anton Sergeenkov. Frontend Developer (React / Vue)",
  description: "Technologies Stack",
}

const RootLayout = (props) => {
  const { children } = props

  return <main>{children}</main>
}

export default RootLayout
