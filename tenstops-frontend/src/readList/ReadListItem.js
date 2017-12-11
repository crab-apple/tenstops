import React from 'react'
import { List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import ReadShape from '../read/ReadShape'

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
  read: ReadShape
}
