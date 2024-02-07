import coverLetscode from "./img/letscode.svg"
import coverBerserker from "./img/berserker.svg"
import coverHabr from "./img/habr.svg"
import coverPanda from "./img/panda.svg"

export const LIST_PROJECTS = [
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
    link: "https://habr.com/ru/users/anton-sergeenkov/posts/",
    img: coverHabr,
    description: "Development publications on website Habr",
    links: [
      {
        name: "Habr",
        link: "https://habr.com/ru/users/anton-sergeenkov/posts/",
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
]
