import React, { Fragment, useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One punch'])

  return (
    <Fragment>
    <h1 className='animate__animated animate__pulse'>GifExpertApp</h1>
    <AddCategory setCategories={setCategories} />
    <ol>
      {categories.map(category =>
        <GifGrid key={category} category={category}/>
      )}
    </ol>
    </Fragment>
  )
}

export default GifExpertApp
