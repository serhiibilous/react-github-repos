import React from 'react'
import { render } from '@testing-library/react'
import App from './index'
import { QUERY_STRING } from '../constants'

test('renders title of the App with search query', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(new RegExp(QUERY_STRING, 'i'))
  expect(linkElement).toBeInTheDocument()
})
