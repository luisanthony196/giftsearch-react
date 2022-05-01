import React from 'react'

const GifGridItem = ({title, url}) => {

  return (
    <div className="card animate__animated animate__fadeIn" data-testid="card">
      <img src={url + 'heart'} alt="title"/>
      <p>{title}</p>
    </div>
  )
}

export default GifGridItem
