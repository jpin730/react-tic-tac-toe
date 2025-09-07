import { useState } from 'react'
import Square from './components/Square'
import { INITIAL_BOARD } from './consts/board'
import { PLAYERS } from './consts/players'

const App = () => {
  const [player, setPlayer] = useState(PLAYERS.X)
  const [board, setBoard] = useState(INITIAL_BOARD)

  const updateBoard = (index) => {
    const newBoard = [...board]
    newBoard[index] = player
    setBoard(newBoard)

    const newPlayer = player === PLAYERS.X ? PLAYERS.O : PLAYERS.X
    setPlayer(newPlayer)
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>

      <section className="game">
        {board.map((value, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            <span>{value}</span>
          </Square>
        ))}
      </section>

      <section className="turn">
        <Square isSelected={player === PLAYERS.X}>{PLAYERS.X}</Square>
        <Square isSelected={player === PLAYERS.O}>{PLAYERS.O}</Square>
      </section>
    </main>
  )
}

export default App
