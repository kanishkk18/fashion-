import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import axios from 'axios';
import Sidebar from '../components/sidebar';

const Orders = () => {

  const { backendUrl, token , currency} = useContext(ShopContext);

  const [orderData,setorderData] = useState([])

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null
      }

      const response = await axios.post(backendUrl + '/api/order/userorders',{},{headers:{token}})
      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setorderData(allOrdersItem.reverse())
      }
      
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    loadOrderData()
  },[token])

  return (
    // <div className='border-t pt-16'>

    //     <div className='text-2xl'>
    //         <Title text1={'MY'} text2={'ORDERS'}/>
    //     </div>

    //     <div>
    //         {
    //           orderData.map((item,index) => (
    //             <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
    //                 <div className='flex items-start gap-6 text-sm'>
    //                     <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
    //                     <div>
    //                       <p className='sm:text-base font-medium'>{item.name}</p>
    //                       <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
    //                         <p>{currency}{item.price}</p>
    //                         <p>Quantity: {item.quantity}</p>
    //                         <p>Size: {item.size}</p>
    //                       </div>
    //                       <p className='mt-1'>Date: <span className=' text-gray-400'>{new Date(item.date).toDateString()}</span></p>
    //                       <p className='mt-1'>Payment: <span className=' text-gray-400'>{item.paymentMethod}</span></p>
    //                     </div>
    //                 </div>
    //                 <div className='md:w-1/2 flex justify-between'>
    //                     <div className='flex items-center gap-2'>
    //                         <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
    //                         <p className='text-sm md:text-base'>{item.status}</p>
    //                     </div>
    //                     <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
    //                 </div>
    //             </div>
    //           ))
    //         }
    //     </div>
         
     
     
    // </div>
    <div className="px-8">
     <div className="mt-16">
        <Sidebar />
      </div>
      
<div  className="flex justify-end items-start">
      <div className="w-full max-w-5xl  min-h-screen px-4  pt-8 pb-12">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Your Orders</h1>

          <div className="flex flex-wrap gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none">
              <option>Sort by Date</option>
              <option>Newest</option>
              <option>Oldest</option>
            </select>

            <select className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none">
              <option>Status</option>
              <option>Delivered</option>
              <option>Processing</option>
              <option>Cancelled</option>
            </select>
          </div>
        </div>

        <div className="mt-10">
          {   orderData.map((item,index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 shadow-sm rounded-lg p-6 mb-6 transition hover:shadow-md"
              >
                <div className="mb-4 flex w-full justify-between items-center">
                  <p className="text-sm sm:text-base text-gray-600">
                    Order placed on: <span className="font-semibold">{new Date(item.date).toDateString()}</span>
                  </p>
                  <button onClick={loadOrderData} className='border m-2 px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
                </div>

                <div className="space-y-4">
                 
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image[0] || ""}
                        alt=""
                        className="w-16 h-16 object-cover rounded border"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          Quantity: {item.quantity} × {currency}{item.price} × {item.size}
                        </p>
                      </div>
                      <div className="text-sm font-semibold text-gray-700">
                       {currency} {item.quantity} * {item.price}
                      </div>
                    </div>
                 
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <p className="text-sm text-gray-600">
                    Order status: <span className="font-medium text-gray-800">{item.status}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Payment Status: <span className="font-medium text-green-600">{item.paymentMethod}</span>
                  </p>
                </div>
                
              </div> ))
        }
           
{/*           
            <div className="text-center text-gray-500 text-sm mt-12">
              No orders found.
            </div>
          */}
       </div>
        </div>
        </div>
        
        </div>
  )
}

export default Orders
