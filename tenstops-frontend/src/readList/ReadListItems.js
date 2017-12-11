import React from 'react'
import { List } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import ReadShape from '../read/ReadShape'
import ReadListItem from './ReadListItem'

export default function ReadListItems ({reads}) {
  return (
    <List relaxed divided>
      {reads.map((read) => <ReadListItem key={read.id} read={read} />)}
    </List>
  )
}

ReadListItems.propTypes = {
  reads: PropTypes.arrayOf(ReadShape).isRequired
}
