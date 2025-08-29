export function formatDate(dateStr: string, locale: string | undefined = undefined) {
  return new Date(dateStr).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
