import React from 'react'
import { List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function ReadListItem ({read}) {
  return (
    <List.Item>
      <Link to={`/read/${read.id}`}>
        <List.Header>
          {read.title}
        </List.Header>
        {read.author}
      </Link>
    </List.Item>
  )
}

ReadListItem.propTypes = {
  read: PropTypes.object.isRequired
}
