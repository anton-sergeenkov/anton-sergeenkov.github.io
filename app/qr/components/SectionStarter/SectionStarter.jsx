"use client"

import { useState } from "react"
import cn from "classnames"

import { THEME_HEADER } from "@/constants/theme"
import { ModalElement, TypographyElement } from "@/sawyer-react-lib/ui-kit"

import { LIST_QR } from "./data/qr"

import styles from "./SectionStarter.module.css"

const SectionStarter = () => {
  const [open, setOpen] = useState(false)
  const [itemIndex, setItemIndex] = useState(null)

  const handleOpen = (index) => {
    setItemIndex(index)
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  return (
    <div className={cn(styles.wrapper)}>
      <div className={cn(styles.container, "section")}>
        <div className={styles.listContainer}>
          {LIST_QR.map((element, index) => (
            <div className={styles.itemContainer} key={index}>
              <div
                onClick={() => handleOpen(index)}
                className={styles.logo}
                style={{
                  backgroundImage: `url(${element.img.src})`,
                }}
              ></div>
              <div className={styles.title}>{element.title}</div>
            </div>
          ))}

          <ModalElement
            disableAutoFocus
            open={open}
            onClose={handleClose}
            className={styles.modal}
          >
            <div onClick={handleClose} className={styles.modalContent}>
              <div
                className={styles.modalLogo}
                style={{
                  backgroundImage: `url(${LIST_QR[itemIndex]?.img.src})`,
                }}
              ></div>
              {LIST_QR[itemIndex]?.name && (
                <div className={styles.modalName}>
                  <TypographyElement
                    tag="h2"
                    theme={{ mode: THEME_HEADER }}
                    className={styles.typographyUsername}
                  >
                    {LIST_QR[itemIndex]?.name}
                  </TypographyElement>
                </div>
              )}
            </div>
          </ModalElement>
        </div>
      </div>
    </div>
  )
}

export default SectionStarter
