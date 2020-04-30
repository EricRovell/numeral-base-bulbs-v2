export default {

  sections: {
    name: "settings-sections",
    options: {
      globals: "Пользователь",
      sandbox: "Песочница",
      challenge: "Испытания"
    }
  },

  sandbox: {

    settingsControls: {
      "reset": "Настройки по умолчанию",
      "set": "Применить предпочтения"
    },

    digits: {
      name: "Символы",
      options: {
        min: "Минимум символов",
        max: "Максимум символов",
        digits: "Значения символов"
      }
    },

    base: {
      name: "Система счисления",
      options: {
        baseIn: "Символы",
        baseOut: "Число",
        bases: {
          2: "Двоичная",
          3: "Тернарная",
          8: "Восьмериная",
          10: "Десятеричная",
          16: "Шестнадцатиричная"
        }
      }
    },

    representation: {
      name: "Режим и внешний вид",
      options: [
        {
          name: "Двоичная",
          representation: "binary",
          skins: {
            default: "по умолчанию",
            modern: "реализм",
            lamp: "свисающая лампа"
          },
        },
        {
          name: "Символ",
          representation: "symbol",
          skins: {
            default: "по умолчанию",
            basic: "минимализм",
          },
        },
      ]
    },

    labels: {
      name: "Labels",
      data: {
        labelsUp: {
          name: "labelsUp",
          label: "Верхние",
          options: {
            index: "Индекс",
            value: "Значение",
            power: "Степень"
          },
        },
        labelsDown: {
          name: "labelsDown",
          label: "Нижние",
          options: {
            index: "Индекс",
            value: "Значение",
            power: "Степень"
          },
        },
      }
    },

  },

  globals: {

    settingsControls: {
      "reset": "Настройки по умолчанию",
      "set": "Применить предпочтения"
    },

    userPreferences: {
      name: "Пользовательские настройки",
      lang: {
        label: "Язык интерфейса",
        name: "lang",
        options: {
          EN: "English",
          RU: "Russian"
        }
      },
      theme: {
        label: "Тема оформления",
        name: "theme",
        options: {
          dark: "Тёмная",
          light: "Светлая"
        }
      }
    },    

  },

  challenge: {
    message: "В разработке..."
  }

};
