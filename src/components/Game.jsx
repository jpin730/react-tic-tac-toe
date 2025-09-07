import PropTypes from 'prop-types'
import Square from './Square'

const Game = ({ board, updateBoard }) => {
  return (
    <section className="game">
      {board.map((value, index) => (
        <Square key={index} index={index} updateBoard={updateBoard}>
          <span>{value}</span>
        </Square>
      ))}
    </section>
  )
}

Game.propTypes = {
  board: PropTypes.array.isRequired,
  updateBoard: PropTypes.func.isRequired,
}

export default Game
