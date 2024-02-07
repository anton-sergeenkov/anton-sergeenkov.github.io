"use client"

import cn from "classnames"

import { LIST_QR } from "./data/qr"

import styles from "./SectionStarter.module.css"

const SectionStarter = () => {
  return (
    <div className={cn(styles.wrapper, "section-starter")}>
      <div className={styles.container}>
        {LIST_QR.map((item, index) => (
          <div key={index}>
            <h3 className={styles.title}>{item.title}</h3>
            <div
              className={styles.img}
              style={{
                backgroundImage: `url(${item.img.src})`,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionStarter
