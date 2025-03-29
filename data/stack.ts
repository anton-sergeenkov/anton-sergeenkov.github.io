interface IListTechnologiesStack {
  title: string
  items: string[][]
}

export const LIST_TECHNOLOGIES_STACK: IListTechnologiesStack[] = [
  {
    title: "Framework React.js",
    items: [
      ["React.js", "React Router"],
      ["Next.js"],
      [
        "Redux",
        "Redux Toolkit",
        "Redux Saga",
        "Redux Thunk",
        "Reselect",
        "Zustand",
      ],
      ["Formik", "React Hook Form", "Yup"],
      ["SWR", "TanStack Query"],
      ["MUI", "Storybook", "React Flow"],
    ],
  },
  {
    title: "Framework Vue.js",
    items: [
      ["Vue.js", "Vuex", "Vue Router"],
      ["Vue CLI", "Vuetify"],
      ["VuePress"],
    ],
  },
  {
    title: "Frontend",
    items: [
      ["TypeScript", "Flow"],
      ["JavaScript", "ES5", "ES6+", "HTLM5 Canvas", "Web Components"],
      ["Axios"],
      ["ESLint", "Prettier", "Husky"],
      ["Vite", "Webpack", "Gulp", "NPM", "Yarn"],
      ["Lodash", "Ramda", "jQuery"],
    ],
  },
  {
    title: "HTML Markup",
    items: [
      ["HTML5", "CSS3"],
      ["Flexbox", "CSS Grid"],
      ["Bootstrap", "SASS", "PostCSS", "CSS-in-JS", "CSS Modules"],
      ["SVG", "CSS Custom Properties"],
    ],
  },
  {
    title: "Backend",
    items: [["Node.js"], ["MySQL", "SQL"]],
  },
  {
    title: "Testing",
    items: [["Jest", "Enzyme"], ["Cypress"]],
  },
  {
    title: "Technologies",
    items: [
      ["Git", "GitHub", "GitLab", "Bitbucket"],
      ["Jira", "Redmine", "Confluence"],
      ["Jenkins"],
      ["Windows", "macOS", "Linux"],
      ["Visual Studio Code", "WebStorm"],
      ["Figma", "Obsidian"],
    ],
  },
  {
    title: "Methodology",
    items: [["Agile", "Scrum", "Kanban"], ["Gitflow"]],
  },
  {
    title: "AI Assistants and LLM",
    items: [
      ["Cline", "GitHub Copilot"],
      ["Claude", "OpenAI"],
    ],
  },
  {
    title: "Additional Experience",
    items: [
      ["OpenGL", "Ogre3D"],
      ["PHP", "Python", "C++", "C#", "Java", "Delphi"],
      ["Firebird"],
      ["WordPress"],
    ],
  },
]
