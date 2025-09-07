import PropTypes from 'prop-types'
import Square from './Square'

const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) return null

  const winnerText = winner ? 'Winner:' : 'Draw!'

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        {winner && (
          <header className="win">
            <Square value={winner} />
          </header>
        )}
        <button onClick={resetGame}>Start Again</button>
      </div>
    </section>
  )
}

WinnerModal.propTypes = {
  winner: PropTypes.string,
  resetGame: PropTypes.func.isRequired,
}

export default WinnerModal
