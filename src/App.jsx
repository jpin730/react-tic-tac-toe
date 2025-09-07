import confetti from 'canvas-confetti'
import { useState } from 'react'
import Square from './components/Square'
import WinnerModal from './components/WinnerModal'
import { INITIAL_BOARD } from './consts/board'
import { PLAYERS } from './consts/players'
import { checkEndGame } from './utils/check-end-game'
import { checkStartGame } from './utils/check-start-game'
import { checkWinner } from './utils/check-winner'

const App = () => {
  const [player, setPlayer] = useState(PLAYERS.X)
  const [board, setBoard] = useState(INITIAL_BOARD)
  const [winner, setWinner] = useState(null)

  const isStartGame = checkStartGame(board)

  const resetGame = () => {
    setPlayer(PLAYERS.X)
    setBoard(INITIAL_BOARD)
    setWinner(null)
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
      confetti()
      setWinner(newWinner)
      return
    }
    if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>

      <button onClick={resetGame} disabled={isStartGame}>
        Start Again
      </button>

      <section className="game">
        {board.map((value, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            <span>{value}</span>
          </Square>
        ))}
      </section>

      <section className="turn">
        <Square disabled isSelected={player === PLAYERS.X}>
          {PLAYERS.X}
        </Square>
        <Square disabled isSelected={player === PLAYERS.O}>
          {PLAYERS.O}
        </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
