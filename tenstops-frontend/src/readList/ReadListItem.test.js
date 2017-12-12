/* eslint-env jest */

import React from 'react'
import { render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import ReadListItem from './ReadListItem'

const renderItem = () => {
  const read = {
    id: 1,
    title: 'Nice Story',
    author: 'Talented Author'
  }
  return render(
    <MemoryRouter>
      <ReadListItem read={read} />
    </MemoryRouter>
  )
}

test('ReadListItem shows the title', () => {
  const item = renderItem()
  expect(item.text()).toEqual(expect.stringContaining('Nice Story'))
})

test('ReadListItem shows the author', () => {
  const item = renderItem()
  expect(item.text()).toEqual(expect.stringContaining('Talented Author'))
})
