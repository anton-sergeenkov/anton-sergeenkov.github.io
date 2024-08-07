import coverTelegram from "./img/telegram.svg"
import coverLinkedin from "./img/linkedin.svg"
import coverGithub from "./img/github.svg"
import coverInstagram from "./img/instagram.svg"

import type { ISocialLinksElementList } from "@/sawyer-react-lib/ui-kit/surfaces/SocialLinksElement"

export const LIST_LINKS: ISocialLinksElementList[] = [
  {
    img: coverLinkedin,
    title: "Linkedin",
    link: "https://www.linkedin.com/in/sergeenkov-anton",
  },
  {
    img: coverTelegram,
    title: "Telegram",
    link: "https://t.me/anton_sergeenkov",
  },
  {
    img: coverGithub,
    title: "GitHub",
    link: "https://github.com/anton-sergeenkov",
  },
  {
    img: coverInstagram,
    title: "Instagram",
    link: "https://www.instagram.com/anton.sergeenkov",
  },
]
