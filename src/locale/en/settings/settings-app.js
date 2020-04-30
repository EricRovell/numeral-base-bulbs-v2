export default {

  sections: {
    name: "settings-sections",
    options: {
      globals: "Global",
      sandbox: "Sandbox",
      challenge: "Challenge"
    }
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
