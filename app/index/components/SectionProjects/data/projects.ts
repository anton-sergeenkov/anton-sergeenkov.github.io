import type { UiLayoutCardsItems } from "@/sawyer-react-lib/ui-kit/layout/UiLayoutCards"

import coverLetscode from "./img/letscode.svg"
import coverBerserker from "./img/berserker.svg"
import coverHabr from "./img/habr.svg"
import coverPanda from "./img/panda.svg"
import coverHike from "./img/hike.svg"
import coverJedicoffee from "./img/jedicoffee.svg"

export const LIST_PROJECTS: UiLayoutCardsItems[] = [
  {
    title: 'Educational project "Let\'s Code"',
    link: "https://letscode-dev.github.io/",
    img: coverLetscode,
    description: "School of Frontend Development, courses and mentoring",
    links: [
      { name: "Website", link: "https://letscode-dev.github.io/" },
      { name: "YouTube", link: "https://www.youtube.com/c/letscode-dev" },
    ],
  },
  {
    title: 'Blog "Berserker"',
    link: "https://dzen.ru/berserker",
    img: coverBerserker,
    description: "Blog about Scandinavian and Slavic mythology",
    links: [{ name: "Yandex Dzen", link: "https://dzen.ru/berserker" }],
  },
  {
    title: "Habr Publications",
    link: "https://habr.com/ru/users/anton-sergeenkov/articles/",
    img: coverHabr,
    description: "Development publications on website Habr",
    links: [
      {
        name: "Habr",
        link: "https://habr.com/ru/users/anton-sergeenkov/articles/",
      },
    ],
  },
  {
    title: 'Web Studio "Panda"',
    link: "https://workshop-panda.github.io/",
    img: coverPanda,
    description: "Website development web studio and Freelance projects",
    links: [
      { name: "Website", link: "https://workshop-panda.github.io/" },
      { name: "VKontakte Community", link: "https://vk.com/workshop_panda" },
    ],
  },
  {
    title: "Travel project \"Hike 'n' Ride\"",
    link: "https://t.me/hikenride_channel",
    img: coverHike,
    description: "A project about traveling, hiking and mountains",
    links: [
      {
        name: "Telegram Channel",
        link: "https://t.me/hikenride_channel",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/anton.sergeenkov/",
      },
    ],
  },
  {
    title: 'Fun project "Jedi Coffee"',
    link: "https://www.instagram.com/jedi.coffee/",
    img: coverJedicoffee,
    description: "I'm just taking pictures of coffee cups",
    links: [
      {
        name: "Instagram",
        link: "https://www.instagram.com/jedi.coffee/",
      },
    ],
  },
]
