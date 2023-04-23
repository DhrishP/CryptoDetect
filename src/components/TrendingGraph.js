import React, { useContext, useLayoutEffect,useEffect } from 'react'
import {Trendingdata} from './Context/TrendingData'
import { BarChart,XAxis,YAxis,Legend,Bar ,FunnelChart,Tooltip,Funnel,LabelList} from 'recharts'
import TrendingCard from './TrendingCard'
import {Outlet} from 'react-dom'

const TrendingGraph = () => {
  const {TrendData} = useContext(Trendingdata)
   let convertedData;
   console.log(TrendData)
 
    const getdata = () =>{
      if (TrendData) {
        convertedData = TrendData.coins.map((e)=>{
          return{
            Rank : e.item.market_cap_rank,
            name : e.item.id,
            img : e.item.small,
            Price : e.item.price_btc
        }
        })
        console.log(convertedData)
      }else{
        
      }
      
    }
   getdata()



 
   const renderCustomAxisTick=({payload}) =>{
      console.log(payload)
   }
   const renderCustomBarLabel = () =>{


   }
  
  
  return (
<>  <div className='w-full h-full flex flex-col border-4  justify-center  '>
    <TrendingCard/>
   
  <div className='self-center'>
<BarChart width={800} height={300} data={convertedData}>
    <XAxis tickSize={10} tickMargin={1} tick={{stroke: '#ffffff', strokeWidth: 0.5}} orientation="bottom"  dataKey="name"  />
    <YAxis />
    <Tooltip stroke="#adefd1ff"/>
    <Legend/>
    <Bar dataKey="Rank"  barSize={35} fill="#adefd1ff"
     />

  </BarChart>
  </div>
  </div>
  

</>
  )
}

export default TrendingGraph