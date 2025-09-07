import PropTypes from 'prop-types'
import { PLAYERS } from '../consts/players'
import Square from './Square'

const Turn = ({ player }) => {
  return (
    <section className="turn">
      <Square disabled value={PLAYERS.X} isSelected={player === PLAYERS.X} />
      <Square disabled value={PLAYERS.O} isSelected={player === PLAYERS.O} />
    </section>
  )
}

Turn.propTypes = {
  player: PropTypes.string.isRequired,
}

export default Turn
