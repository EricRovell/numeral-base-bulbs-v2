export default (lang) => ([
  {
    path: `/`,
    as: `/${lang}`,
    name: {
      "EN": "Sandbox",
      "RU": "Песочница",
    },
  },
  {
    path: "/game",
    as: `/game/${lang}`,
    name: {
      "EN": "Game",
      "RU": "Игра",
    },
  },
  {
    path: "/tutorial/[...route]",
    as: `/tutorial/${lang}/welcome`,
    name: {
      "EN": "Tutorial",
      "RU": "Инструкции",
    },
  },
  {
    path: "/settings",
    as: `/settings/${lang}`,
    name: {
      "EN": "Settings",
      "RU": "Настройки",
    },
  },
  {
    path: "/about",
    as: `/about/${lang}`,
    name: {
      "EN": "About",
      "RU": "О приложении",
    },
  }, 
]);
