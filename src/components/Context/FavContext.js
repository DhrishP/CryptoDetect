
import  { createContext,  useLayoutEffect, useState } from 'react'

export const FavouriteContext = createContext({});

export const FavouriteData = ({children}) => {
  const [TrendData,settTrendData] = useState();






  useLayoutEffect(()=>{
  
  },[])
 




  return (

    <FavouriteContext.Provider value={{
  
      }}>
      {children}
    </FavouriteContext.Provider>
  )
}