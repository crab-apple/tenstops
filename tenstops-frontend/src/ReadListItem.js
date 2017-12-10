import React from 'react';
import {List} from 'semantic-ui-react';
import PropTypes from 'prop-types'

export default function ReadListItem({read}) {
  return (
      <List.Item>
        <List.Header>
          {read.title}
        </List.Header>
        {read.author}
      </List.Item>
  );
}

ReadListItem.propTypes = {
  read: PropTypes.object.isRequired
};
