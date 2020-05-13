export default (locale) => ([
  {
    href: `/[lang]/sandbox`,
    as: `/${locale.lang}/sandbox`,
    label: locale.sandbox.main,
    dropdown: [
      {
        href: "/[lang]/settings?tab=sandbox",
        as: `/${locale.lang}/settings?tab=sandbox`,
        label: locale.sandbox.settings
      }
    ]
  },
  {
    href: "/[lang]/challenge",
    as: `/${locale.lang}/challenge/`,
    label: locale.challenge.main,
  },
  {
    href: "/[lang]/manual/[...route]",
    as: `/${locale.lang}/manual/${locale.lang}/welcome`,
    label: locale.manual.main,
    dropdown: [
      {
        href: "/[lang]/manual/[...route]",
        as: `/${locale.lang}/manual/${locale.lang}/bases/numeral-bases`,
        label: locale.manual.numeralBases
      },
      {
        href: "/[lang]/manual/[...route]",
        as: `/${locale.lang}/manual/${locale.lang}/sandbox/about`,
        label: locale.manual.sandbox
      },
      {
        href: "/[lang]/manual/[...route]",
        as: `/${locale.lang}/manual/${locale.lang}/challenge/about`,
        label: locale.manual.challenge
      },
      {
        href: "/[lang]/manual/[...route]",
        as: `/${locale.lang}/manual/${locale.lang}/settings/about`,
        label: locale.manual.settings
      },
      {
        href: "/[lang]/manual/[...route]",
        as: `/${locale.lang}/manual/${locale.lang}/about/welcome`,
        label: locale.manual.about
      },
    ]
  },
  {
    href: "/[lang]/settings",
    as: `/${locale.lang}/settings?tab=globals`,
    label: locale.settings.main,
    dropdown: [
      {
        href: "/[lang]/settings?tab=globals",
        as: `/${locale.lang}/settings?tab=globals`,
        label: locale.settings.globals
      },
      {
        href: "/[lang]/settings?tab=sandbox",
        as: `/${locale.lang}/settings?tab=sandbox`,
        label: locale.settings.sandbox
      },
      {
        href: "/[lang]/settings?tab=challenge",
        as: `/${locale.lang}/settings?tab=challenge`,
        label: locale.settings.challenge
      },
    ]
  },
  {
    href: "/[lang]/about",
    as: `/${locale.lang}/about`,
    label: locale.about.main
  }
]);
