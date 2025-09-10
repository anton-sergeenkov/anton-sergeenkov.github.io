import coverInstagram from "./img/qr-instagram.svg"
import coverTelegram from "./img/qr-telegram.svg"
import coverWebsite from "./img/qr-website.svg"
import coverLinkedin from "./img/qr-linkedin.svg"

import type { IStaticImageData } from "@/sawyer-ui/types/common"

interface IListQR {
  title: string
  img: IStaticImageData
  name: string
}

export const LIST_QR: IListQR[] = [
  {
    title: "Instagram",
    img: coverInstagram,
    name: "anton.sergeenkov",
  },
  {
    title: "Telegram",
    img: coverTelegram,
    name: "anton_sergeenkov",
  },
  {
    title: "Linkedin",
    img: coverLinkedin,
    name: "sergeenkov-anton",
  },
  {
    title: "Website",
    img: coverWebsite,
    name: "anton-sergeenkov.github.io",
  },
]
