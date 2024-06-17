"use client"

import { useState } from "react"
import cn from "classnames"

import { Modal, Typography } from "@/sawyer-react-lib/ui-kit"

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
    <div className={cn(styles.wrapper, "section-starter")}>
      <div className={cn(styles.container)}>
        <Typography tag="h2" theme={{ mode: "dark-filled" }}>
          QR Codes
        </Typography>

        <div className={styles.listContainer}>
          {LIST_QR.map((item, index) => (
            <div className={styles.itemContainer} key={index}>
              <div
                onClick={() => handleOpen(index)}
                className={styles.logo}
                style={{
                  backgroundImage: `url(${item.img.src})`,
                }}
              ></div>
              <div className={styles.title}>{item.title}</div>
            </div>
          ))}

          <Modal
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
                  {/* <ChipsList
                    items={[LIST_QR[itemIndex]?.name]}
                    className={styles.chips}
                  /> */}

                  <Typography
                    tag="h2"
                    theme={{ mode: "dark-filled" }}
                    className={styles.typographyUsername}
                  >
                    {LIST_QR[itemIndex]?.name}
                  </Typography>
                </div>
              )}
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default SectionStarter
