import React, { useLayoutEffect } from 'react'
import { LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Legend,
    ResponsiveContainer,} from 'recharts';

const CryptoChart = ({id}) => {

    useLayoutEffect(()=>{
        const FetchChartDetails = async () =>{
            try{ 
                const data = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily`  
              ).then(res => res.json()).then(json => json)
              console.log("Chartdata",data)
            } 
              catch(err){
                console.log(err)
              }

        }

        FetchChartDetails()

    },[id])

    const dummy = ["1","2","3"]

  return (
    
    <>
    <ResponsiveContainer>
      <LineChart width={500} height={300} data={dummy}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
  </LineChart>
  </ResponsiveContainer>
    
    </>
  )
}

export default CryptoChart