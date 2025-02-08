"use client"

// import cn from "classnames"

import { useState } from "react"
import UiModal from "@/sawyer-ui/ui-kit/basic/UiModal"
import UiLayoutSection from "@/sawyer-ui/ui-kit/layout/UiLayoutSection"
import { UiChips } from "@/sawyer-ui/ui-kit"

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

  return (
    <UiLayoutSection isTopSpacing className={styles.wrapper}>
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
          modalProps={{
            className: styles.modal,
            disableAutoFocus: true,
            open,
            onClose: handleClose,
          }}
        >
          <div onClick={handleClose} className={styles.modalContent}>
            {itemIndex !== null && (
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
            )}
          </div>
        </UiModal>
      </div>
    </UiLayoutSection>
  )
}

export default SectionStarter
