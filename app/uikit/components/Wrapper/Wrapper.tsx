import cn from "classnames"

import styles from "./styles.module.css"

interface IProps {
  title: string
  isColumn?: boolean
  isDark?: boolean
  children: React.ReactNode
}

const Wrapper: React.FC<IProps> = (props) => {
  const { title, children, isColumn = false, isDark = false } = props

  const contentStyles = cn(
    styles.content,
    isColumn && styles.flexСolumn,
    isDark && styles.darkBackground,
  )

  return (
    <details className={styles.details}>
      <summary className={styles.summary}>{title}</summary>
      <div className={contentStyles}>{children}</div>
    </details>
  )
}

export default Wrapper
