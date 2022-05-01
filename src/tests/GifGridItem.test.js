import { render, screen } from '@testing-library/react'
import React from 'react'
import GifGridItem from '../components/GifGridItem'

describe('Pruebas en <GifGridItem />', () => {
  test('Debe de mostrar el titulo y url', () => {
    const titulo = 'titulo'
    const url = 'thisIsAUrl'

    render(<GifGridItem title={titulo} url={url} />)

    const pTitle = screen.getByText(titulo)
    const imgItem = screen.getByAltText('title')

    expect(pTitle).toBeInTheDocument()
    expect(imgItem).toHaveAttribute('src', url)
  })

  test('Debe de mantener los estilos', () => {
    const estilo = 'card animate__animated animate__fadeIn'

    render(<GifGridItem title={'titulo'} url={'url'} />)

    const divCard = screen.getByTestId('card')
    expect(divCard).toHaveClass( estilo)
  })
})
