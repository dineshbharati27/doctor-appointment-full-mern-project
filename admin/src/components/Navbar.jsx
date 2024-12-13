import React, { useContext } from 'react' // Import necessary modules from React
import { assets } from '../assets/assets' // Import assets (e.g., images, logos)
import { DoctorContext } from '../context/DoctorContext' // Import DoctorContext for doctor-specific state
import { AdminContext } from '../context/AdminContext' // Import AdminContext for admin-specific state
import { useNavigate } from 'react-router-dom' // Import useNavigate for navigation between routes

const Navbar = () => {

  const { dToken, setDToken } = useContext(DoctorContext) // Access doctor token and setter from context
  const { aToken, setAToken } = useContext(AdminContext) // Access admin token and setter from context

  const navigate = useNavigate() // Hook to programmatically navigate between routes

  const logout = () => {
    navigate('/') // Navigate to the home page
    dToken && setDToken('') // Clear doctor token state if it exists
    dToken && localStorage.removeItem('dToken') // Remove doctor token from local storage
    aToken && setAToken('') // Clear admin token state if it exists
    aToken && localStorage.removeItem('aToken') // Remove admin token from local storage
  }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
      <div className='flex items-center gap-2 text-xs'>
        {/* Logo: Clicking redirects to the home page */}
        <img onClick={() => navigate('/')} className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="" />
        {/* Display role badge based on the token */}
        <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? 'Admin' : 'Doctor'}</p>
      </div>
      {/* Logout button */}
      <button onClick={() => logout()} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar
