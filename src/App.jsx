import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { useLocation,Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CardDetails from './pages/CardDetails';
import MyBookings from './pages/MyBookings';
import Cars from './pages/Cars';

const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/car-details/:id' element={<CardDetails />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/mybookings' element={<MyBookings />} />
      </Routes>
    </>
  )
}

export default App