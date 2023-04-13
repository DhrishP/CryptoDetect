import React, { useContext, useLayoutEffect, useState } from 'react'
import { LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Legend,
    ResponsiveContainer,} from 'recharts';
import { Cryptodata } from './Context/Data';

const ToolTipContent = ({active,payload,label,currency="usd"}) =>{
 

      if (active && payload && payload.length > 0) {
       
        
        return (
          <div className="custom-tooltip">
            <p className="label text-sm text-grecyan">{`${label} : ${new Intl.NumberFormat(
              "en-IN",
              {
                style: "currency",
                currency: currency,
                minimumFractionDigits: 5,
              }
            ).format(payload[0].value)}`}</p>
          </div>
        );
      }
  

}

  const GraphInfo = ({data,currency,type}) =>{



    return(
        <>
          <div className='w-[100%] pl-10 pt-10 h-[60%]'>
        <ResponsiveContainer >
      <LineChart width={400} height={400} data={data}>
  

    <Tooltip stroke="#adefd1ff"  content={<ToolTipContent/>}   currency={currency}
          cursor={false}
          wrapperStyle={{ outline: "none" }}  />
   
    <Line type="monotone" dataKey={`${type}`}  strokeWidth={"1px"} stroke="#adefd1ff" />
    <CartesianGrid/>
    
    <YAxis dataKey={`${type}`}  domain={["auto","auto"] } hide/>
    <XAxis dataKey="date"  hide/>
    <Legend/>
  </LineChart>
  </ResponsiveContainer>

  </div>
        
        </>




    )


  }




const CryptoChart = ({id}) => {

  const[GraphData,SetGraphData] = useState()
  const[Days ,Setdays] = useState(7)
  const[DataType,SetDataType] = useState('prices')
  const {currency} = useContext(Cryptodata);
  
 
    useLayoutEffect(()=>{
        const FetchChartDetails = async () =>{
            try{ 
                const data = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${Days}&interval=daily`  
              ).then(res => res.json()).then(json => json)
             

         let   convertedData = await data[DataType].map((e)=>{

      return{
        
        [DataType]: e[1],
        date: new Date(e[0]).toLocaleDateString()

             } })
             SetGraphData(convertedData);

              console.log("Chartdata",data)
            } 
              catch(err){
                console.log(err)
              }

        }

        FetchChartDetails()

    },[id,Days,currency,DataType])



  return (
    
    <>
   <GraphInfo  data ={GraphData} currency={currency} type={DataType} />
    <div className='pl-10 flex  justify-between'>
      <div className='flex  justify-center space-x-2 '>
        <button  onClick={()=>{SetDataType('prices')}}  className={`${DataType == 'prices'? 'text-grecyan bg-green':'text-gray-100 bg-gray-300 '} bg-opacity-25 hover:scale-105   transition ease-out  p-1 rounded`} >Prices</button>
        <button onClick={()=>{SetDataType('total_volumes')}}className={`${DataType == 'total_volumes'? 'text-grecyan bg-green':'text-gray-100 bg-gray-300 '} bg-opacity-25 hover:scale-105   transition ease-out  p-1 rounded`}>Total volume</button>
        <button onClick={()=>{SetDataType('market_caps')}} className={`${DataType == 'market_caps'? 'text-grecyan bg-green':'text-gray-100 bg-gray-300 '} bg-opacity-25 hover:scale-105   transition ease-out  p-1 rounded`}>Market cap</button>
        </div>
        <div className='flex justify-center space-x-2 pr-3'>
          <button onClick={()=>{Setdays(7)}} className={`${Days == 7? 'text-grecyan bg-green':'text-gray-100 bg-gray-300 '} bg-opacity-25 hover:scale-105   transition ease-out  p-1 rounded`}>7d</button>
          <button onClick={()=>{Setdays(14)}} className={`${Days == 14? 'text-grecyan bg-green':'text-gray-100 bg-gray-300 '} bg-opacity-25 hover:scale-105   transition ease-out  p-1 rounded`}>14d</button>
          <button onClick={()=>{Setdays(30)}} className={`${Days == 30? 'text-grecyan bg-green':'text-gray-100 bg-gray-300 '} bg-opacity-25 hover:scale-105   transition ease-out  p-1 rounded`}>30d</button>
        </div>

    </div>
    </>
  )
}

export default CryptoChart