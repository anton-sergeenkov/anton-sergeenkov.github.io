import coverLetscode from "./img/letscode.svg"
import coverBerserker from "./img/berserker.svg"
import coverHabr from "./img/habr.svg"
import coverPanda from "./img/panda.svg"
import coverHike from "./img/hike.svg"

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
  {
    title: "Travel project \"Hike 'n' Ride\"",
    link: "https://tony-sawyer.notion.site/Hiking-51a53ceb32a14e6b85bab365f442e4b9",
    img: coverHike,
    description: "A project about traveling, hiking and mountains",
    links: [
      {
        name: "Website",
        link: "https://tony-sawyer.notion.site/Hiking-51a53ceb32a14e6b85bab365f442e4b9",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/anton.sergeenkov/",
      },
    ],
  },
]
