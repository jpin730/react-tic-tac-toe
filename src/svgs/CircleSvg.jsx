import PropTypes from 'prop-types'

const SVG_SIZE = '48px'

const CircleSvg = ({ height = SVG_SIZE, width = SVG_SIZE, fill = 'currentColor' }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      height={height}
      width={width}
      fill={fill}
      enableBackground="new 0 0 24 24"
    >
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <path d="M12,2C6.47,2,2,6.47,2,12c0,5.53,4.47,10,10,10s10-4.47,10-10C22,6.47,17.53,2,12,2z M12,20c-4.42,0-8-3.58-8-8 c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z" />
      </g>
    </svg>
  )
}

CircleSvg.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  fill: PropTypes.string,
}

export default CircleSvg
