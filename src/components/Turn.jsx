import PropTypes from 'prop-types'
import { PLAYERS } from '../consts/players'
import Square from './Square'

const Turn = ({ player }) => {
  return (
    <section className="turn">
      <Square disabled isSelected={player === PLAYERS.X}>
        {PLAYERS.X}
      </Square>
      <Square disabled isSelected={player === PLAYERS.O}>
        {PLAYERS.O}
      </Square>
    </section>
  )
}

Turn.propTypes = {
  player: PropTypes.string.isRequired,
}

export default Turn
