export default {

  sections: {
    name: "settings-sections",
    options: [
      {
        href: "/[lang]/settings?tab=globals",
        as: "/en/settings?tab=globals",
        label: "Global",
        title: "Global user preferences"
      },
      {
        href: "/[lang]/settings?tab=sandbox",
        as: "/en/settings?tab=sandbox",
        label: "Sandbox",
        title: "Sandbox user preferences"
      },
      {
        href: "/[lang]/settings?tab=challenge",
        as: "/en/settings?tab=challenge",
        label: "Challenge",
        title: "Challenge user preferences"
      }
    ]
  },

  sandbox: {

    settingsControls: {
      "reset": "Default settings",
      "set": "Set preferences"
    },

    digits: {
      name: "Symbols / Digits",
      options: {
        min: "Minimum symbols",
        max: "Maximum symbols",
        digits: "Symbols / Digits"
      }
    },

    base: {
      name: "Radix",
      options: {
        baseIn: "Symbols",
        baseOut: "Number",
        bases: {
          2: "Binary",
          3: "Ternary",
          8: "Octal",
          10: "Decimal",
          16: "Hexadecimal"
        }
      }
    },

    representation: {
      name: "Representation and skin",
      options: [
        {
          name: "Unary",
          representation: "unary",
          skins: {
            default: "default",
            branch: "branch",
            sheep: "sheep"
          },
        },
        {
          name: "Binary",
          representation: "binary",
          skins: {
            default: "default",
            modern: "modern toggle",
            lamp: "hanging lamp"
          },
        },
        {
          name: "Symbol",
          representation: "symbol",
          skins: {
            default: "default",
            basic: "minimalistic",
          },
        },
      ]
    },

    labels: {
      name: "Labels",
      data: {
        labelsUp: {
          name: "labelsUp",
          label: "Up",
          options: {
            index: "Index",
            value: "Value",
            power: "Radix power"
          },
        },
        labelsDown: {
          name: "labelsDown",
          label: "Down",
          options: {
            index: "Index",
            value: "Value",
            power: "Radix power"
          },
        },
      }
    },

  },

  globals: {

    settingsControls: {
      "reset": "Default settings",
      "set": "Set preferences"
    },

    userPreferences: {
      name: "User Preferences",
      lang: {
        label: "Language",
        name: "lang",
        options: {
          EN: "English",
          RU: "Russian"
        }
      },
      theme: {
        label: "Theme",
        name: "theme",
        options: {
          dark: "Dark",
          light: "Light"
        }
      }
    },

  },
  
  challenge: {
    message: "In development..."
  }

};
