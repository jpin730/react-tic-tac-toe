import { useState } from 'react'
import Square from './components/Square'
import { INITIAL_BOARD } from './consts/board'
import { PLAYERS } from './consts/players'
import { WINNER_COMBOS } from './consts/winner-combos'

const App = () => {
  const [player, setPlayer] = useState(PLAYERS.X)
  const [board, setBoard] = useState(INITIAL_BOARD)
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
  }

  const updateBoard = (index) => {
    const isEmpty = board[index] === null
    if (!isEmpty || winner) return

    const newBoard = [...board]
    newBoard[index] = player
    setBoard(newBoard)

    const newPlayer = player === PLAYERS.X ? PLAYERS.O : PLAYERS.X
    setPlayer(newPlayer)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    }
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
