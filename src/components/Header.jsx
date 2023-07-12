import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import{AiOutlineSearch} from "react-icons/ai"
import logo from '../assect/cyber 2.jpg'
import ProductCard from './ProductCard'
function Header({setisSearch,productData}) {
  const[data,setProduct]=useState(null)
    const [searchTerm,setSearch]=useState("");
    const[searchData,setData]=useState(null);
    const handleSearch=(e)=>{
        const term=e.target.value;
        setSearch(term);
        if(term !==""){
        const filterdata=productData.filter((product) =>
        product.Name.toLowerCase().includes(term.toLowerCase())
      );
        setData(filterdata)
        }else{
          setData(null)
        }

    }
    const change =(productName)=>{
         setSearch(productName)
         setData(null)
    }  
  const search = () =>{
    const term = searchTerm.replace(/-/g, ' ')
    if(term !==""){
      const filterdata=productData.filter((product) =>
      product.Name.toLowerCase().includes(term.toLowerCase())
    );
    setProduct(filterdata)
    }else{
      setData(null)
    }
    if(searchTerm!==""){
    setisSearch(true)
   } else{
    setisSearch(false)
  }
}

  return (
    <>
    <div className='w-11/12 h-[20vh] mx-auto'>
    <div className='h-[50px] my-[20px] flex items-center  flex-col sm:flex-row sm:justify-center sm:gap-5 mb-[100px]'>
        <div>
       <Link to="/"> <img src={logo} alt='logo' className='w-[200px] h-[80px]'/></Link>
       </div>
       <div className='w-[50%]  relative'>
        <input type="text" placeholder='Search' value={searchTerm}  onChange={handleSearch} className='h-[40px] w-full px-2 border-blue-800 border-[2px] rounded-md'/>
        <AiOutlineSearch size={30} className="absolute right-2 top-1.5 cursor-pointer" onClick={search}/>
        {
        searchData && searchData.length !==0 ?(
          <div className='absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4'>
                   {searchData &&
                   searchData.map((i)=>{
                    const d = i.Name;
                    const productName=d.replace(/\s+/g,"-");
                    return(
                            <div className='w-full flex items-start-py-3' onClick={()=>change(productName)}>
                                <img src={i.Image} alt='' className='w-[40px] h-[40px] mr-[10px]'/>
                                <h1>{productName}</h1>
                            </div>
                    )
                   })
                  }
         </div>
        ): null }
      </div>
    </div >
    <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
         {
          data && data.length !== 0 &&(
            <>
             {data && data.map((i) =><a target='_blank' rel="noopener"  href={i.Link}> <ProductCard data={i} key={i._id} /></a>)}
            </>
          )
         }
      </div>
    </div>
    </>
    
  )
}

export default Header