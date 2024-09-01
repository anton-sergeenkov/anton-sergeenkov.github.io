import { IMenuItem } from "@/sawyer-react-lib/types/common"

export const ROUTES: IMenuItem[] = [
  {
    title: "Profile",
    path: "/",
  },
  {
    title: "Technologies Stack",
    path: "/stack",
  },
  {
    title: "Contacts",
    path: "/contacts",
  },
  {
    title: "QR",
    path: "/qr",
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
