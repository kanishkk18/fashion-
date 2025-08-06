
// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title';
// import { assets } from '../assets/assets';
// import CartTotal from '../components/CartTotal';


// const Cart = () => {

//   const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);

//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {

//     if (products.length > 0) {
//       const tempData = [];
//       for (const items in cartItems) {
//         for (const item in cartItems[items]) {
//           if (cartItems[items][item] > 0) {
//             tempData.push({
//               _id: items,
//               size: item,
//               quantity: cartItems[items][item]
//             })
//           }
//         }
//       }
//       setCartData(tempData);
//     }
//   }, [cartItems, products])

//   return (
//     <div className='border-t  pt-14'>

//       <div className=' text-2xl mb-3'>
//         <Title text1={'YOUR'} text2={'CART'} />
//       </div>

//       <div>
//         {
//           cartData.map((item, index) => {

//             const productData = products.find((product) => product._id === item._id);

//             return (
//               <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
//                 <div className=' flex items-start gap-6'>
//                   <img className='w-24  md:w-32' src={productData.image[0]} alt="" />
//                   <div>
//                     <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
//                     <div className='flex items-center gap-5 mt-2'>
//                       <p>{currency}{productData.price}</p>
//                       <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
//                     </div>
//                   </div>
//                 </div>
//                 <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
//                 <img onClick={() => updateQuantity(item._id, item.size, 0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
//               </div>
//             )

//           })
//         }
//       </div>

//       <div className='flex justify-end my-20'>
//         <div className='w-full sm:w-[450px]'>
//           <CartTotal />
//           <div className=' w-full text-end'>
//             <button onClick={() => navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Cart;


import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

function Cart() {
   const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {

    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item]
            })
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products])
 
  return (
    <div className="font-sans">
      <div className="px-10 w-full">
         <div className=' text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
        <main className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 relative">
          <div className="space-y-4">
            <div className="flex flex-col bg-gray-200 p-2">
              <h3 className="text-lg font-semibold">Free Shipping for members</h3>
              <p className="text-gray-500 text-sm">
                Become a BVM X member for fast and free shipping <a href="#" className="underline text-black">Join Us</a>
              </p>
            </div>
            <div className="flex flex-col bg-gray-200 p-2">
              <h3 className="text-lg font-semibold">20% off select styles</h3>
              <p className="text-gray-500 text-sm">Log in and use code BVMX 20</p>
            </div>
{
          cartData.map((item, index) => {

            const productData = products.find((product) => product._id === item._id);

            return (
             <div className=''>
                 <div key={index}>
              <h2 className="text-xl font-semibold text-left pb-4">Cart</h2>
              <div className="flex flex-col gap-6">
                
                  <div className="flex">
                    <img src={productData.image[0]} alt="" className="w-48 h-48 mr-5" />
                    <div className="grid gap-2 relative">
                      <p><a href="" className="hover:underline">{productData.name}</a></p>
                      <p>White/Gray/blue</p>
                      <p>Size: {item.size}</p>

                      <div className="absolute top-2 left-[260px]">
                        <p className="text-md font-semibold">{currency}{productData.price}</p>
                      </div>

                      <div>
                        <label>Quantity: </label>
                   <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />

                      </div>

                      <button
                        type="button"
                        className="text-indigo-600 hover:text-indigo-500"
                        onClick={() => updateQuantity(item._id, item.size, 0)}
                      >
                        <svg width="22px" height="22px" viewBox="0 0 1024 1024" className="fill-black" xmlns="http://www.w3.org/2000/svg"><path d="M960 160h-291.2a160 160 0 0 0-313.6 0H64a32 32 0 0 0 0 64h896a32 32 0 0 0 0-64zM512 96a96 96 0 0 1 90.24 64h-180.48A96 96 0 0 1 512 96zM844.16 290.56a32 32 0 0 0-34.88 6.72A32 32 0 0 0 800 320a32 32 0 1 0 64 0 33.6 33.6 0 0 0-9.28-22.72 32 32 0 0 0-10.56-6.72zM832 416a32 32 0 0 0-32 32v96a32 32 0 0 0 64 0v-96a32 32 0 0 0-32-32zM832 640a32 32 0 0 0-32 32v224a32 32 0 0 1-32 32H256a32 32 0 0 1-32-32V320a32 32 0 0 0-64 0v576a96 96 0 0 0 96 96h512a96 96 0 0 0 96-96v-224a32 32 0 0 0-32-32z" /><path d="M384 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0zM544 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0zM704 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0z" /></svg>
                      </button>
                    </div>
                  </div>
              
              </div>
            </div>
            </div>
            )

          })
        }
            <div className="mt-6 border-b pb-4">
              <h2 className="text-2xl font-semibold text-left">Shipping</h2>
              <p className="text-lg text-left mt-1 underline cursor-pointer">To get shipping information Edit Location</p>
              <h2 className="text-2xl font-semibold text-left mt-4">Free Pickup</h2>
              <p className="text-lg text-left underline cursor-pointer">Visit our Showroom</p>
            </div>
          </div>

                <div className="w-full max-w-md mt-1 sticky top-20 self-start">
          <CartTotal />
          <button onClick={() => navigate('/place-order')} className="w-full bg-black text-white py-3 rounded-full font-semibold mt-4 hover:bg-opacity-90">
                               CHECKOUT
                             </button>
                          
                           <Link to="/">
                             <button className="w-full bg-gray-200 text-black py-3 rounded-full font-semibold mt-2 hover:bg-gray-300">
                               Continue Shopping
                             </button>
                           </Link></div>
        </main>
      </div>
    </div>
  );
}

export default Cart;
