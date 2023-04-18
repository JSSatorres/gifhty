/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('renders MyComponent', () => {
  render(<App />)
  const myComponentElement = screen.getByTestId('my-component')
  expect(myComponentElement).toBeInTheDocument()
})