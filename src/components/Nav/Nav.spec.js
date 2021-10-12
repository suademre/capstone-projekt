import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Nav from '.'

describe('Nav', () => {
  it('it renders', () => {
    render(<Nav />)

    const nav = screen.getByTestId('navButton')
    userEvent.click(nav)
    expect(nav).toBeInTheDocument()
  })
})
