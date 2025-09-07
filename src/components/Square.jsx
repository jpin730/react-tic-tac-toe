import PropTypes from 'prop-types'
import { PLAYERS } from '../consts/players'
import CircleSvg from '../svgs/CircleSvg'
import CloseSvg from '../svgs/CloseSvg'

const Square = ({ disabled, index, isSelected, updateBoard, value }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <button className={className} onClick={handleClick} disabled={disabled}>
      {value && (value === PLAYERS.X ? <CloseSvg /> : <CircleSvg />)}
    </button>
  )
}

Square.propTypes = {
  disabled: PropTypes.bool,
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.bool,
  updateBoard: PropTypes.func.isRequired,
  value: PropTypes.string,
}

export default Square
