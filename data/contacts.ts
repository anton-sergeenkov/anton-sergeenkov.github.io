export interface IContactsListItems {
  url: string
  title: string
  username?: string
  alias?: string
}

export interface IContactsList {
  title: string
  items: IContactsListItems[]
}

export const LIST_CONTACTS: IContactsList[] = [
  {
    title: "Social Network",
    items: [
      {
        url: "https://www.linkedin.com/in/sergeenkov-anton",
        title: "LinkedIn",
        username: "sergeenkov-anton",
      },
      {
        url: "https://www.instagram.com/anton.sergeenkov",
        title: "Instagram",
        username: "anton.sergeenkov",
      },
      {
        url: "https://vk.com/anton.sergeenkov",
        title: "VKontakte",
        username: "anton.sergeenkov",
      },
      {
        url: "https://www.facebook.com/profile.php?id=100002126643722",
        title: "Facebook",
        alias: "profile",
      },
    ],
  },
  {
    title: "Messengers",
    items: [
      {
        url: "https://join.skype.com/invite/hZmBtAZQ0EXY",
        title: "Skype",
        username: "sergeenkov.anton",
      },
      {
        url: "https://t.me/anton_sergeenkov",
        title: "Telegram",
        username: "anton_sergeenkov",
      },
      {
        url: "https://wa.me/79674466458",
        title: "WhatsApp",
        username: "",
      },
      {
        url: "https://viber.click/79674466458",
        title: "Viber",
        username: "",
      },
      {
        url: "https://us04web.zoom.us/j/2155710738",
        title: "Zoom",
        username: "",
      },
      {
        url: "https://meet2.webex.com/meet/pr23645025976",
        title: "Webex",
        username: "",
      },
    ],
  },
  {
    title: "Developer",
    items: [
      {
        url: "https://anton-sergeenkov.github.io",
        title: "Website",
      },
      {
        url: "https://github.com/anton-sergeenkov",
        title: "GitHub",
        username: "anton-sergeenkov",
      },
      {
        url: "https://habr.com/ru/users/anton-sergeenkov",
        title: "Habr",
        username: "@anton-sergeenkov",
      },
      {
        url: "https://habr.com/ru/users/anton-sergeenkov/articles/",
        title: "Habr Publications",
      },
      {
        url: "https://codesandbox.io/u/anton-sergeenkov",
        title: "CodeSandbox",
      },
      {
        url: "https://codepen.io/anton-sergeenkov",
        title: "CodePen",
      },
      {
        url: "https://www.npmjs.com/~anton-sergeenkov",
        title: "NPM",
      },
    ],
  },
  {
    title: "CV",
    items: [
      {
        url: "https://anton-sergeenkov.github.io/cv-en.pdf",
        title: "CV (en)",
      },
      {
        url: "https://anton-sergeenkov.github.io/cv-ru.pdf",
        title: "CV (ru)",
      },
      {
        url: "https://career.habr.com/anton-sergeenkov",
        title: "Habr Career",
      },
      // {
      //   url: "https://hh.ru/resume/4f49e957ff05faa54c0039ed1f42525a674d33",
      //   title: "Head Hunter",
      //   alias: "Head Hunter",
      // },
    ],
  },
  {
    title: "E-mail",
    items: [
      {
        url: "mailto:anthony.sergeenkov@gmail.com",
        title: "Google Mail",
        alias: "anthony.sergeenkov@gmail.com",
        username: "",
      },
      {
        url: "mailto:anthony.sergeenkov@yandex.ru",
        title: "Yandex Mail",
        alias: "anthony.sergeenkov@yandex.ru",
        username: "",
      },
    ],
  },
]
