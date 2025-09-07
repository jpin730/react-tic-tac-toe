import PropTypes from 'prop-types'

const Square = ({ children, isSelected, disabled, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <button className={className} onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  )
}

Square.propTypes = {
  children: PropTypes.node,
  isSelected: PropTypes.bool,
  disabled: PropTypes.bool,
  updateBoard: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
}

export default Square
