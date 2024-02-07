"use client"

import cn from "classnames"

import { LIST_QR } from "./data/qr"

import styles from "./SectionStarter.module.css"

const SectionStarter = () => {
  return (
    <div className={cn(styles.wrapper)}>
      <div className={cn(styles.container, "section")}>
        <div className={styles.listContainer}>
          {LIST_QR.map((item, index) => (
            <div className={styles.itemContainer} key={index}>
              <div
                className={styles.logo}
                style={{
                  backgroundImage: `url(${item.img.src})`,
                }}
              ></div>
              <div className={styles.title}>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionStarter
