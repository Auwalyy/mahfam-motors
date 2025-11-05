import React from 'react'
import Title from './Title'

const FeaturedSection = () => {
  return (
    <div className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
        <div className=''>
            <Title title="Featured Vehicles" subTtle='Explore our selection of premium 
            vehicles avalible for your next adventure' />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-18'>

        </div>
    </div>
  )
}

export default FeaturedSection