import FeaturedProducts from '@/components/Featured'
import LatestProducts from '@/components/LatestProducts'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <div className='mt-[6rem]'>
        <LatestProducts/>
    <FeaturedProducts/>
    </div></div>
  )
}

export default page