import React, { useState } from 'react'
import Header from '../components/Header'
import BestDeals from '../components/BestDeals'

function Homepage({productData}) {
  const [isSearch,setisSearch]=useState(false);
  return (
    <div>
          <Header setisSearch={setisSearch} productData={productData} />
         {isSearch ? null : <BestDeals productData={productData}/>} 
    </div>
  )
}

export default Homepage