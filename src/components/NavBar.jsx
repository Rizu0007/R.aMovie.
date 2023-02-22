import React from 'react'
import Navbaritem from './Navbaritem';

export default function NavBar() {
  return (
    <div className='flex justify-center dark:bg-amber-500  bg-amber-100 lg:text-lg p-4'>
      <Navbaritem  title="Trending" param="fetchTrending"/>
      <Navbaritem  title="Top Rated" param="FetchToprated"/>

    </div>
  )
}
