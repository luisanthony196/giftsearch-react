import React, { Fragment } from 'react'
import GifGridItem from './GifGridItem'
import {useFetchGifs} from '../hooks/useFetchGifs'

const GifGrid = ({category}) => {

  const {data:images, loading} = useFetchGifs(category)

  // useEffect(() => {
  //   getGifs(category).then(gifs => {
  //     setImages(gifs)
  //   })
  // }, [category])

  return (
    <Fragment>
    <h3 className='category'>{category}</h3>
    {loading && <p>Loading</p>}
    <div className='card-grid'>
      {images.map(img =>
        <GifGridItem key={img.id} {...img} />
      )}
    </div>
    </Fragment>
  )
}

export default GifGrid
