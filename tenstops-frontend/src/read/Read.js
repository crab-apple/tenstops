import React from 'react'
import PropTypes from 'prop-types'
import ReadShape from './ReadShape'
import { Loader, Header } from 'semantic-ui-react'

const Read = ({read, content}) => {
  if (read && content) {
    return (
      <div>
        <Header>
          {read.title}
          <Header.Subheader>
            by {read.author}
          </Header.Subheader>
        </Header>
        <Paragraphs text={content} />
      </div>
    )
  } else {
    return <Loader active />
  }
}

const Paragraphs = ({text}) => {
  let parCounter = 1
  const paragraphs = text.split('\n')
    .map((p) => p.trim())
    .filter((p) => p.length)
  return (
    <div>
      {paragraphs.map((p) => <p key={parCounter++}>{p}</p>)}
    </div>
  )
}

Read.propTypes = {
  read: ReadShape,
  content: PropTypes.string
}

export default Read
