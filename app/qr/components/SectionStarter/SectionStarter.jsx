"use client"

import { useState } from "react"

import Modal from "@mui/material/Modal"

import cn from "classnames"

import { LIST_QR } from "./data/qr"

import styles from "./SectionStarter.module.css"

const SectionStarter = () => {
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState(null)

  const handleOpen = (img) => {
    setImage(img)
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
                onClick={() => handleOpen(item.img.src)}
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
            <div
              onClick={handleClose}
              className={styles.modalLogo}
              style={{
                backgroundImage: `url(${image})`,
              }}
            ></div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default SectionStarter
