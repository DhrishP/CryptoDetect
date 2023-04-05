import React, { useContext } from 'react'
import Search from './Search'
import Currency from './Currency'
import { Cryptodata } from './Context/Data'
import {GoTriangleDown} from 'react-icons/go'
import ResetIcon from '../assets/reset.svg'


const Filters = () => {
  let {SetSortby,resetFunc} = useContext(Cryptodata)
 
  return (
    <>
    <div className='top-44  border flex justify-between items-center border-gray-100 w-[85vw] rounded-lg h-12  relative'>
        <Search/>
        <Currency/>
        <div className='flex font-nunito space-x-1 mr-10 items-center  '>
          <span className='text-white capitalize '>sort:</span>
          <select name="valueSort" className='bg-gray-200 rounded pl-1 pr-1 focus:border-grecyan font-nunito capitalize text-base  active:border-grecyan text-white cursor-pointer' onClick={(e)=>{e.preventDefault();
          SetSortby(e.target.value)}} id="Sort">
            <option value="market_cap_desc">market cap desc</option>
            <option value="market_cap_asc">market cap asc</option>
            <option value="volume_asc">volume asc</option>
            <option value="volume_desc">volume desc</option>
            <option value="id_asc">id asc</option>
            <option value="id_desc">id desc</option>

          </select>
              <GoTriangleDown  className='text-grecyan h-5 relative right-5 cursor-pointer '/>
              <button onClick={resetFunc}><img className="h-7 hover:scale-110 " src={ResetIcon} alt="" /></button>
        </div>
        

    </div>
    </>
  )
}

export default Filters