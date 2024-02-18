"use client"

import { useState } from "react"

import Modal from "@mui/material/Modal"

import cn from "classnames"

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
                <div className={cn(styles.modalName, "textGradient")}>
                  {LIST_QR[itemIndex]?.name}
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
