import { render, screen } from '@testing-library/react'
import React from 'react'
import GifExpertApp from '../GifExpertApp'

describe('Pruebas en <GifExpertApp />', () => {
  test('Debe de mostrar el componente', () => {
    render(<GifExpertApp />)
    const wrapper = screen.getByText('GifExpertApp')
    expect(wrapper).toBeInTheDocument()
  })
})
