export const capitalize = (word: string): string =>
  word[0].toUpperCase() + word.slice(1, word.length)

export const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
}
