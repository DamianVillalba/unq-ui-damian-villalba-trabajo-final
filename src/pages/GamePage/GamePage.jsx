import { useState } from 'react'
import Button from '../../components/Button/Button.jsx'
import Input from '../../components/Input/Input.jsx'
import WordChain from '../../components/WordChain/WordChain.jsx'
import { validateWord } from '../../services/wordService.js'
import { getChainScore, isChained, isRepeated, normalizeWord } from '../../utils/words.js'
import './GamePage.css'

function GamePage() {
  const [chain, setChain] = useState([])
  const [input, setInput] = useState('')

  const score = getChainScore(chain)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const word = normalizeWord(input)
    if (!word || isRepeated(chain, word)) return
    if (chain.length > 0 && !isChained(chain.at(-1), word)) return

    try {
      const exists = await validateWord(word)
      if (!exists) return
      setChain((previous) => [...previous, word])
      setInput('')
    } catch {
      return
    }
  }

  return (
    <section className="game-page">
      <p className="game-page__bounty" aria-label={`Recompensa: ${score} berries`}>
        ฿ {score}
      </p>
      <WordChain words={chain} />
      <form className="game-page__form" onSubmit={handleSubmit}>
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Escribí tu palabra"
          aria-label="Palabra"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck="false"
          enterKeyHint="send"
        />
        <Button type="submit">Tallar</Button>
      </form>
    </section>
  )
}

export default GamePage
