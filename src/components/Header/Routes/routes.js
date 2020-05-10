export default (locale) => ([
  {
    href: `/[lang]/sandbox`,
    as: `/${locale.lang}/sandbox`,
    label: locale.sandbox,
  },
  {
    href: "/[lang]/challenge",
    as: `/${locale.lang}/challenge/`,
    label: locale.challenge,
  },
  {
    href: "/[lang]/manual/[...route]",
    as: `/${locale.lang}/manual/${locale.lang}/welcome`,
    label: locale.manual
  },
  {
    href: "/[lang]/settings",
    as: `/${locale.lang}/settings/`,
    label: locale.settings
  },
  {
    href: "/[lang]/about",
    as: `/${locale.lang}/about`,
    label: locale.about
  }
]);
