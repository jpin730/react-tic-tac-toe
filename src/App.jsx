import confetti from 'canvas-confetti'
import { useState } from 'react'
import Game from './components/Game'
import Turn from './components/Turn'
import WinnerModal from './components/WinnerModal'
import { INITIAL_BOARD } from './consts/board'
import { PLAYERS } from './consts/players'
import { checkEndGame } from './utils/check-end-game'
import { checkStartGame } from './utils/check-start-game'
import { checkWinner } from './utils/check-winner'
import { getStorageItem, removeStorageItems, setStorageItems } from './utils/storage'

const App = () => {
  const [player, setPlayer] = useState(() => getStorageItem('player') ?? PLAYERS.X)
  const [board, setBoard] = useState(() => getStorageItem('board') ?? INITIAL_BOARD)
  const [winner, setWinner] = useState(() => getStorageItem('winner'))

  const isStartGame = checkStartGame(board)

  if (winner) {
    confetti()
  }

  const resetGame = () => {
    removeStorageItems({ player, board, winner })
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

    setStorageItems({ player: newPlayer, board: newBoard, winner: newWinner })

    if (newWinner) {
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

      <Game board={board} updateBoard={updateBoard} />

      <Turn player={player} />

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
