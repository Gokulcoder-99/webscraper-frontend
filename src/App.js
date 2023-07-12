import React, { useState,useEffect } from 'react'
import"./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
function App() {
  const [productData, setProducts] = useState([])
  const fetchProducts = async () => {
    const res = await fetch(`https://webscarper.onrender.com/api/product`)
    const obj = await res.json()
    const data = obj.mess
    if (data && data) {
      setProducts(data)
    }
  }
 
  useEffect(() => {
    fetchProducts()
  }, [])
  console.log(productData)
   return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element ={<Homepage productData={productData}/>}/>
    </Routes>
    </BrowserRouter>
  )
}
 export default App;
