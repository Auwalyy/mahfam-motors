import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets, dummyCarData } from '../assets/assets';

const CardDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  useEffect(()=> {
    setCar(dummyCarData.find((car) => car._id === id));
  },[id])

  return car ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer">
        <img src={assets.arrow_icon} className="rotate-180 opacity-65" alt="" />
       Back to all cars
      </button>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>
        {/** left: car image $ detail  */}
        <div className="lg:col-span-2">
          <img src={car.image} className='w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md' alt="" />
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="3xl font-bold">{car.brand} {car.model}</h1>
            <p className='text-gray-500 text-lg'>{car.category} . {car.year}</p>
          </div>
          <hr className='border borderColor my-6' />

          <div className="grid grid-cols-2 sm:grid:col-4 gap-4">
            {[
              {icon: assets.users_icon, text: `${car.seating_capacity} Seats`},
              {icon: assets.fuel_icon, text: car.fuel_type},
              {icon: assets.car_icon, text: car.transmission},
              {icon: assets.location_icon, text: car.locatio},
            ].map((icon, text) => (
              <div key={text} className='flex flex-col items-center bg-light p-4 roundedlg'>
                <img src={icon} className='h-5 mb-2' alt="" />
                {text}
              </div>
            ))}
          </div>
          {/** description */}
          <div>
            <h1 className='text-xl font-medium mb-3'>Description</h1>
            <p className='text-gray-500'>{car.description}</p>
          </div>

          {/** Features */}
          <div>
            <h1 className='text-xl font-medium mb-3'>Features</h1>
           <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
            {
            
            }
           </ul>
          </div>
        </div>
      </div>


    </div>
  ) : <p>Loading...</p>
}

export default CardDetails