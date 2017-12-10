import React from 'react'
import PropTypes from 'prop-types'
import {Loader} from 'semantic-ui-react'

const Read = ({read, content}) => {
  if (read && content) {
    let parCounter = 1;
    return (
        <div>
          <h1>
            {read.title}
          </h1>
          <div>
            {content.split("\n").map((p) => <p key={parCounter++}>{p}</p>)}
          </div>
        </div>
    );
  } else {
    return <Loader active/>
  }
};

Read.propTypes = {
  read: PropTypes.object,
  content: PropTypes.string,
};

export default Read;

