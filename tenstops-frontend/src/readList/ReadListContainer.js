import React, { Component } from 'react'
import ReadList from './ReadList.js'
import { fetchReads } from '../api'

class ReadListContainer extends Component {
  constructor () {
    super()
    this.state = {
      reads: null
    }
  }

  componentWillMount () {
    fetchReads().then((reads) => {
      this.setState({reads})
    })
  }

  render () {
    return <ReadList reads={this.state.reads} />
  }
}

export default ReadListContainer
