export function normalizeWord(word) {
  return word.trim().toLowerCase().normalize('NFC')
}

export function toComparable(word) {
  return normalizeWord(word)
    .normalize('NFD')
    .replace(/ñ/g, 'ñ')
    .replace(/[̀-ͯ]/g, '')
}

export function getLastLetter(word) {
  return toComparable(word).slice(-1)
}

export function isChained(previousWord, word) {
  return toComparable(word).startsWith(getLastLetter(previousWord))
}

export function isRepeated(chain, word) {
  const comparable = toComparable(word)
  return chain.some((usedWord) => toComparable(usedWord) === comparable)
}

export function getWordScore(word) {
  return [...normalizeWord(word)].length
}

export function getChainScore(chain) {
  return chain.reduce((total, word) => total + getWordScore(word), 0)
}
