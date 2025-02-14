"use client"

// import cn from "classnames"

import { useState } from "react"

import { UiModal, UiChips, UiLayoutSection } from "@/sawyer-ui/ui-kit"

import { LIST_QR } from "./data/qr"

import styles from "./SectionStarter.module.css"

const SectionStarter: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [itemIndex, setItemIndex] = useState<null | number>(null)

  const onClickOpen = (index: number) => {
    setItemIndex(index)
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  const modalContent = () => {
    if (itemIndex === null) {
      return <></>
    }

    return (
      <>
        <div
          className={styles.modalLogo}
          style={{
            backgroundImage: `url(${LIST_QR[itemIndex]?.img.src})`,
          }}
        />
        <div className={styles.modalName}>
          <UiChips
            items={[LIST_QR[itemIndex]?.name]}
            className={styles.typographyUsername}
            theme="dark"
          />
        </div>
      </>
    )
  }

  return (
    <UiLayoutSection className={styles.wrapper}>
      <div className={styles.listContainer}>
        {LIST_QR.map((element, index) => (
          <div className={styles.itemContainer} key={index}>
            <div
              onClick={() => onClickOpen(index)}
              className={styles.logo}
              style={{
                backgroundImage: `url(${element.img.src})`,
              }}
            ></div>
            <div className={styles.title}>{element.title}</div>
          </div>
        ))}

        <UiModal
          disableAutoFocus={true}
          open={open}
          onClose={handleClose}
          className={styles.modalContent}
          isContentClickClose
        >
          {modalContent()}
        </UiModal>
      </div>
    </UiLayoutSection>
  )
}

export default SectionStarter
