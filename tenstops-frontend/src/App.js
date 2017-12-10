import React, {Component} from 'react';
import "semantic-ui-css/semantic.min.css"

import {Container} from 'semantic-ui-react'
import ReadListContainer from "./ReadListContainer";

class App extends Component {
  render() {
    return (
        <Container>
          <ReadListContainer/>
        </Container>
    );
  }
}

export default App;
