import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='md:w-[40%] w-[90%] text-md  absolute    font-semibold top-14 rounded-lg font-nunito border h-10 flex justify-evenly   border-grecyan text-gray-100 items-center py-6'>
        <NavLink to='/' className={
            ({isActive}) =>{
                return `rounded-[0.3rem] w-[30%] text-center  ${isActive ? 'bg-grecyan text-gray-300' : 'bg-gray-200 text-gray-100 hover:text-grecyan'}`
            }


        }>Crypto</NavLink>
        <NavLink to='/trending' className={
            ({isActive}) =>{
                return `rounded-[0.3rem] w-[30%] text-center ${isActive ? 'bg-grecyan text-gray-300' : 'bg-gray-200 text-gray-100 hover:text-grecyan'}`
            }


        }>Trending</NavLink>
        <NavLink to='/favourites' className={
            ({isActive}) =>{
                return `rounded-[0.3rem] w-[30%] text-center ${isActive ? 'bg-grecyan text-gray-300' : 'bg-gray-200 text-gray-100 hover:text-grecyan'}`
            }


        }>Favourites</NavLink>
        
        
    </div>
  )
}

export default Navbar