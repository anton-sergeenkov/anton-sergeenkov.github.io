/* eslint-disable jsx-a11y/anchor-has-content */
import cn from "classnames"

import { LIST_PROJECTS } from "./data/projects"
import { TypographyH2 } from "@/sawyer-react-lib/ui-kit"
// import Options from "./components/Options"

import styles from "./SectionProjects.module.css"

const SectionProjects = () => {
  return (
    <div className={styles.wrapper} id="projects">
      <div className={cn(styles.container, "section")}>
        <TypographyH2>Projects</TypographyH2>

        <div className={styles.coursesContainer}>
          {LIST_PROJECTS.map((itemCources, indexCources) => (
            <div className={styles.courseContainer} key={indexCources}>
              <a
                href={itemCources.link}
                className={styles.logo}
                style={{
                  backgroundImage: `url(${itemCources.img.src})`,
                }}
                target="_blank"
              ></a>

              <div className={styles.contentContainer}>
                <h3 className={styles.h3}>{itemCources.title}</h3>
                <div className={styles.description}>
                  {itemCources.description}
                </div>

                {itemCources.links.map((itemLink, indexLink) => (
                  <div key={indexLink}>
                    <a href={itemLink.link} target="_blank" className="link">
                      {itemLink.name}
                    </a>
                  </div>
                ))}

                {/* <div className={styles.options} title="Ссылки">
                  <Options options={itemCources.links} />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionProjects
