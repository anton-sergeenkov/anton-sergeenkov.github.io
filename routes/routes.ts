import type { IMenuItem } from "sawyer-ui"

// Пути со слешем на конце, как адреса страниц (trailingSlash в next.config.js):
// по совпадению с текущим адресом подсвечивается активный пункт меню
export const ROUTES: IMenuItem[] = [
  {
    title: "Profile",
    path: "/",
  },
  {
    title: "Technologies Stack",
    path: "/stack/",
  },
  // {
  //   title: "Contacts",
  //   path: "/contacts/",
  // },
  {
    title: "QR",
    path: "/qr/",
  },
]

export const ROUTES_CV: IMenuItem[] = [
  {
    title: "English version",
    path: "https://anton-sergeenkov.github.io/cv-en.pdf",
  },
  {
    title: "Russian version",
    path: "https://anton-sergeenkov.github.io/cv-ru.pdf",
  },
]
