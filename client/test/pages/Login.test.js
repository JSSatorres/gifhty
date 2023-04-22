/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../src/pages/Login'

describe('When user fills in and submits form', () => {
  it('submit method is called with title and content', () => {
    const submit = jest.fn()
    render(<Login submit={submit} />)

    const email = screen.getByLabelText(/email/i)
    userEvent.type(email, 'pepe@admin.es')

    const password = screen.getByLabelText(/content/i)
    userEvent.type(password, 'Pepe12')

    const button = screen.getByRole('button', { name: /login/i })
    userEvent.click(button)

    expect(submit).toHaveBeenCalledWith({
      email: 'pepe@admin.es',
      password: 'Pepe12',
    })
  })
})