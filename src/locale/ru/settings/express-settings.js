export default {

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
        representation: "bulb",
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
    name: "Подписи",
    labelsUp: "Верхние",
    labelsDown: "Нижние",
    options: {
      index: "Индекс",
      value: "Значение",
      power: "Степень",
      none: "Отсутствует"
    }
  }

};
