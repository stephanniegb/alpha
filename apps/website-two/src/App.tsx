import { useState } from 'react'
import { getAlphabetEntry } from '@repo/shared-utils'
import './App.css'

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

function App() {
  const [active, setActive] = useState<string | null>(null)

  const entry = active ? getAlphabetEntry(active) : null

  return (
    <div className="app">
      <header>
        <h1>The Alphabet</h1>
        <p className="subtitle">Click a letter to learn more</p>
      </header>

      <div className="grid">
        {LETTERS.map((letter) => (
          <button
            key={letter}
            className={`letter-card ${active === letter ? 'active' : ''}`}
            onClick={() => setActive(active === letter ? null : letter)}
          >
            {letter}
          </button>
        ))}
      </div>

      {entry && (
        <div className="detail">
          <div className="detail-letter">{entry.letter}</div>
          <div className="detail-info">
            <p className="detail-phonetic">{entry.phonetic}</p>
            <p className="detail-word">
              <span className="detail-word-letter">{entry.letter}</span>
              {' is for '}
              <strong>{entry.word}</strong>
            </p>
            <p className="detail-example">{entry.example}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
