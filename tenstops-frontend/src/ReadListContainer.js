import React, {Component} from 'react';
import ReadList from './ReadList.js'

class ReadListContainer extends Component {

  constructor() {
    super();
    this.state = {
      reads: null
    };
  }

  componentWillMount() {
    fetchReads().then((reads) => {
      this.setState({ reads });
    });
  }

  render() {
    return <ReadList reads={this.state.reads}/>
  }
}

function fetchReads() {
  const reads = [
    {id: 1, title: "Dog And Foreigner", author: "Hanh Diep"},
    {id: 2, title: "Weight Of The Officer", author: "Parkash Modi"},
    {id: 3, title: "Riddle Of Outer Space", author: "Terry Watts"}
  ];
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve(reads)
    }, 500);
  });
}

export default ReadListContainer;

