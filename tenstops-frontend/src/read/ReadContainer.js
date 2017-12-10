import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Read from './Read'
import { fetchRead, fetchReadContent } from '../api'

class ReadContainer extends Component {
  constructor () {
    super()
    this.state = {
      read: null,
      content: null
    }
  }

  componentWillMount () {
    fetchRead(this.props.readId).then((read) => {
      this.setState({read})
    })
    fetchReadContent(this.props.readId).then(content => {
      this.setState({content})
    })
  }

  render () {
    return (
      <Read read={this.state.read} content={this.state.content} />
    )
  }
}

ReadContainer.propTypes = {
  readId: PropTypes.number.isRequired
}

export default ReadContainer
