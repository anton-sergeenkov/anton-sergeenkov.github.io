import cn from "classnames"

import { LIST_LINKS } from "./data/links"

import styles from "./SectionLinks.module.css"

const SectionLinks = () => {
  return (
    <div className={cn(styles.container)}>
      {LIST_LINKS.map((element, index) => (
        <a
          key={index}
          href={element.link}
          title={element.title}
          target="_blank"
          className={styles.link}
          style={{
            backgroundImage: `url(${element.img.src})`,
          }}
        ></a>
      ))}
    </div>
  )
}

export default SectionLinks
