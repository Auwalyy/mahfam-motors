import React, { useState } from 'react';
import { assets, cityList } from '../assets/assets';

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 bg-light text-center px-4 py-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
        Luxury Cars on Rent
      </h1>

      {/* Form */}
      <form
        className="
          flex flex-col md:flex-row items-center justify-between
          gap-4 sm:gap-6
          p-4 sm:p-6
          rounded-2xl md:rounded-full
          w-full max-w-[90%] sm:max-w-[500px] md:max-w-[800px]
          bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]
        "
      >
        {/* Pickup location */}
        <div className="flex flex-col items-start gap-2 w-full md:w-auto">
          <label className="text-sm text-gray-600">Pickup Location</label>
          <select
            required
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="border border-gray-300 rounded-full px-4 py-2 w-full md:w-[160px] focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select location</option>
            {cityList.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Pickup Date */}
        <div className="flex flex-col items-start gap-2 w-full md:w-auto">
          <label htmlFor="pickup-date" className="text-sm text-gray-600">Pick-up Date</label>
          <input
            type="date"
            id="pickup-date"
            min={new Date().toISOString().split('T')[0]}
            className="border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-500 w-full md:w-[160px] focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Return Date */}
        <div className="flex flex-col items-start gap-2 w-full md:w-auto">
          <label htmlFor="return-date" className="text-sm text-gray-600">Return Date</label>
          <input
            type="date"
            id="return-date"
             className="border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-500 w-full md:w-[160px] focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-8 py-3 bg-primary hover:bg-primary-dull text-white rounded-full w-full md:w-auto transition-all duration-200"
        >
          <img src={assets.search_icon} alt="search" className="brightness-300 w-4 h-4" />
          Search
        </button>
      </form>

      {/* Car image */}
      <img
        src={assets.main_car}
        alt="car"
        className="max-h-60 sm:max-h-72 w-auto mt-6 object-contain"
      />
    </div>
  );
};

export default Hero;
