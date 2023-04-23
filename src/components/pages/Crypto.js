import React from 'react'
import Table from '../Table'
import Filters from '../Filters'
import Pagination from '../Pagination'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import { Outlet } from 'react-router-dom'

const Crypto = () => {
  return (
<>

    <Filters/>
     <Table/>
     <div className='flex  justify-between w-[85vw]  h-64 top-60 relative text-white'>
       <div ><span>Powered by <a href='https://www.coingecko.com/' rel='noreferrer' target={'_blank'} className='text-green text-base font-nunito font-bold'>CoinGecko</a>
           </span><div className='flex'>  
           <a href="http://github.com/DhrishP" target={'_blank'}><AiFillGithub className='w-6 h-6 text-grecyan '/></a> 
           <a href="" target={'_blank'}> <AiFillLinkedin className='w-6 h-6 text-grecyan ml-2'/></a> 
          
           

           </div></div> 
           <Outlet/>
           
          <Pagination/>
        
   </div>

   
   </>
       
       
  )
}

export default Crypto