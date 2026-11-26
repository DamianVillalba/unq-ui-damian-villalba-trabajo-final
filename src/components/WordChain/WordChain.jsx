import './WordChain.css'

function WordChain({ words }) {
  return (
    <ol className="word-chain" aria-label="Palabras encadenadas">
      {words.map((word) => (
        <li key={word} className="word-chain__word">
          {word}
        </li>
      ))}
    </ol>
  )
}

export default WordChain
