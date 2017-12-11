/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import ReadList from './ReadList'
import { MemoryRouter } from 'react-router-dom'

test('snapshot', () => {
  const reads = [
    {
      id: 1,
      title: 'Novel 1',
      author: 'John Doe 1'
    }, {
      id: 2,
      title: 'Novel 2',
      author: 'John Doe 2'
    }, {
      id: 3,
      title: 'Novel 3',
      author: 'John Doe 3'
    }
  ]

  const component = renderer.create(
    <MemoryRouter>
      <ReadList reads={reads} />
    </MemoryRouter>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
