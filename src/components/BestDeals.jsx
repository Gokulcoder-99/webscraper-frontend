import React,{useEffect,useState}from 'react'
import ProductCard from './ProductCard';
function BestDeals({productData}) {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1)
    useEffect(() => {
        const d = productData?.sort((a,b) => b.sold_out - a.sold_out); 
        const firstFive = d.slice(page * 5 - 5, page * 5);
        setData(firstFive);
      }, [page]);
      const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <=  productData.length / 5 && selectedPage !== page) {
          setPage(selectedPage)
        }
      }
      console.log("best deal",productData)
  return (
    <>
    <div className="w-11/12 mx-auto">
      <div className="text-[27px] text-center md:text-start font-[600] font-Roboto pb-[20px]">
        <h1>Best Deals</h1>
      </div>
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
         {
          data && data.length !== 0 &&(
            <>
             {data && data.map((i) =><a target='_blank' rel="noopener" href={i.Link}> <ProductCard data={i} key={i._id} /></a>)}
            </>
          )
         }
      </div>
      { productData.length > 0 && <div className=" flex gap-2 justify-center ">
        <button onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "w-5 h-5 flex items-center justify-cente" : "hidden"}>◀</button>

        {[...Array( Math.ceil(productData.length/5))].map((_, i) => {
          return <button key={i} className={page === i + 1 ? "bg-red-500 text-white w-5 h-5 flex items-center justify-center" : "w-5 h-5 flex items-center justify-cente"} onClick={() => selectPageHandler(i + 1)}>{i+1}</button>
        })}

        <button onClick={() => selectPageHandler(page + 1)} className={page <  productData.length / 5 ? "w-5 h-5 flex items-center justify-cente" : "hidden"}>▶</button>
      </div>}
    </div>
  </>
  )
}

export default BestDeals