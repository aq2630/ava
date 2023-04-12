// https://phrase.com/blog/posts/detecting-a-users-locale/#Client-side_The_navigatorlanguages_Object
export const getBrowserLocales = (
  options = {
    languageCodeOnly: true,
  },
) => {
  const { navigator } = global
  if (!navigator) {
    return []
  }
  const browserLocales =
    navigator.languages === undefined
      ? [navigator.language]
      : navigator.languages

  if (!browserLocales) {
    return []
  }
  return browserLocales.map((locale) => {
    const trimmedLocale = locale.trim()

    return options.languageCodeOnly
      ? trimmedLocale.split(/-|_/)[0]
      : trimmedLocale
  })
}
