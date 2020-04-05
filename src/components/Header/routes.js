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
    href: "/[lang]/tutorial/[...route]",
    as: `/${locale.lang}/tutorial/${locale.lang}/welcome`,
    label: locale.tutorial
  },
  {
    href: "/[lang]/settings",
    as: `/${locale.lang}/settings/`,
    label: locale.settings
  },
  {
    href: "/[lang]/about/[...route]",
    as: `/${locale.lang}/about/${locale.lang}/welcome`,
    label: locale.about
  }, 
]);
