/* eslint-disable no-undef */
import React from 'react'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../src/pages/Login'
import { MemoryRouter } from 'react-router-dom'

// import { auth } from '../../src/firebase/firebase'
jest.mock('../../src/components/ui/UiButton', () => ({
  __esModule: true,
  default: jest.fn((props) => {
    const { func, children } = props
    const handleClick = (e) => {
      func(e)
    }
    return (
      <button
        onClick={(e) => handleClick(e)}
        className="btn btn-outline-warning  btn-md px-5 mx-2"
        type="submit"
        onMouseOver={(e) => {
          e.target.style.color = '#000000'
          e.target.style.backgroundColor = '#c79100'
        }}
        onMouseOut={(e) => {
          e.target.style.color = '#ffc107'
          e.target.style.backgroundColor = 'transparent'
        }}
      >
        {children}
      </button>
    )
  }),
}))

jest.mock('../../src/firebase/firebase', () => ({
  auth: {
    getAuth: jest.fn(), 
    signInWithEmailAndPassword: jest.fn(), 
  },
  signInWithEmailAndPasswordFun : jest.fn().mockResolvedValue(),
}))

describe('When user fills in and submits form', () => {
  it('submit method is called with title and content', async () => {
    const submit = jest.fn()
    render(<MemoryRouter>
      <Login submit={submit} />
    </MemoryRouter>
    )
    await act(async () => {
      const email = screen.getByTestId('typeEmailX')
      userEvent.type(email, 'pepe@admin.es')
      expect(email.value).toBe('pepe@admin.es')

      const password = screen.getByTestId('typePasswordX')
      userEvent.type(password, 'Pepe12')

      const button = screen.getByRole('button', { name: /login/i })
      userEvent.click(button)
    })
    expect(submit).toHaveBeenCalledWith({
      email: 'pepe@admin.es',
      password: 'Pepe12',
    })
  })
})