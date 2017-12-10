import React from 'react'
import PropTypes from 'prop-types'
import { Loader } from 'semantic-ui-react'
import ReadListItems from './ReadListItems'

export default function ReadList ({reads}) {
  if (reads) {
    return <ReadListItems reads={reads} />
  } else {
    return <Loader active />
  }
}

ReadList.propTypes = {
  reads: PropTypes.arrayOf(PropTypes.object)
}
