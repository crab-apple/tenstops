/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import Read from './Read'

test('snapshot', () => {
  const read = {
    id: 1,
    title: 'Novel 1',
    author: 'John Doe 1'
  }

  const content = 'foo bar bar \n\n bar bar foo'

  const component = renderer.create(
    <Read read={read} content={content} />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
