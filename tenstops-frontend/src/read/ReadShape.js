import PropTypes from 'prop-types'

/**
 * The (PropTypes) shape that the reads must have.
 */
const ReadShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
})

export default ReadShape
