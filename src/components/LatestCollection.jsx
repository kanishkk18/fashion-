import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import { ScrollArea, ScrollBar } from "../components/ui/scroll-area"

export const works = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
]

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[products])

  return (
    <div className='my-10 px-10'>
      <div className='text-center py-8 text-3xl'>
          <Title text1={'LATEST'} text2={'COLLECTIONS'} />
         <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
  Discover timeless style and modern elegance. From everyday essentials to bold statement pieces, elevate your wardrobe with curated fashion made to inspire.
</p></div>
      <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex w-full space-x-4 p-4">
        {latestProducts.map((item,index)=> (
          <figure  className="shrink-0">
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>

    </div>
  )
}

export default LatestCollection
