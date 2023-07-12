import React from 'react'
import Ratings from './Rating';

function ProductCard({data}) {
    const d = data.Name;
    const productName=d.replace(/\s+/g,"-");
  return (
    <div className='w-full h-[400px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer'>
            <img src={data.Image} alt="" className="w-full h-[200px] object-contain"/>
            {/* <h5 className='pt-3 text-[15px] text-blue-400 pb-3'>{data.shop.name}</h5> */}
            <h4 className='pb-3 font-[500]'>
                {productName.length>40?productName.slice(0,40)+"..." :productName }
            </h4>
            <div className="flex">
          <Ratings rating={data.Rating} />
          </div>

          <div className="py-2 flex items-center justify-between">
            <div className="flex">
              <h4 className="font-[500] text-[16px]  pl-3 mt-[-4px] ">
                {data.Price ?" $" + data.Price  : null}
              </h4>
            </div>
          </div>
    </div>
  )
}

export default ProductCard