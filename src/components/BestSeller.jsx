import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import BestItem from './bestItem';
import { ScrollArea, ScrollBar } from './ui/scroll-area';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    },[products])

  return (
    <div className='my-10 px-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
        </p>
      </div>
<ScrollArea className="w-full whitespace-nowrap">
      <div className="flex w-full space-x-4 p-4">
        {bestSeller.map((item,index)=> (
          <figure  className="shrink-0 w-72">
             <BestItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="w-3/4"/>
    </ScrollArea>
    </div>
  )
}

export default BestSeller
