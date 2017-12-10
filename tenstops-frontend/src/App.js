import React, {Component} from 'react';
import "semantic-ui-css/semantic.min.css"
import {BrowserRouter, Route} from "react-router-dom";
import ReadContainer from "./read/ReadContainer"

import {Container} from 'semantic-ui-react'
import ReadListContainer from "./readList/ReadListContainer";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Container>
            <Route exact path={"/"} component={ReadListContainer}/>
            <Route path={"/read/:readId"} render={({match}) => (
                <ReadContainer readId={parseInt(match.params.readId, 10)}/>
            )}/>
          </Container>
        </BrowserRouter>
    );
  }
}


export default App;
