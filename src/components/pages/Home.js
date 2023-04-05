import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../Logo'
import Navbar from '../Navbar'
import {Data} from '../Context/Data'

const Home = () => {

  return (
    
   
    <Data>
      <div className='h-full w-screen fixed bg-blark  -z-10'>  </div>
    <div className=' flex items-center flex-col h-full'>
    <div className='h-full w-full flex items-center flex-col '>
    <Outlet/>
    </div>
   <Logo/>
   <Navbar/>
    </div>
    
    </Data>
    
  
  )
}

export default Home