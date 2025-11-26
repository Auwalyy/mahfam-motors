import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row md:items-start items-center
    justify-between px-8 md:px-8 pt-10 bg-gradient-to-r from-[#0558FE] to-[#a9CFFF]
    max-w-5xl mx-3 md:mx-auto rounded-2xl overflow-hidden'>
        
        <div className='text-white max-w-md'>
            <h2 className='text-3xl font-medium'>Do You Own a Luxury Car?</h2>
            <p className='mt-2'>Monetize your vehicle effortlessly by listing it on CarRental.</p>
            <p className='mt-2 max-w-sm'>
                We take care of insurance, driver verification and secure payments - so you can earn passive income, stress-free.
            </p>
            <button className='px-6 py-2 bg-white hover:bg-slate-100 transition-all text-[#0558FE]
             rounded-lg text-sm mt-4 cursor-pointer font-medium'>List your car</button>
        </div>

        <img src={assets.banner_car_image} alt="luxury car" className='max-h-80 mt-6 md:mt-0 md:max-h-96' />


    </div>
  )
}

export default Banner