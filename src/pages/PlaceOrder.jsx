import React, { useContext, useState, useEffect } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

    const [method, setMethod] = useState('cod');
      const [cartData, setCartData] = useState([]);
    const { navigate, backendUrl,currency, token, cartItems, updateQuantity, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setFormData(data => ({ ...data, [name]: value }))
    }

    const initPay = (order) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name:'Order Payment',
            description:'Order Payment',
            order_id: order.id,
            receipt: order.receipt,
            handler: async (response) => {
                console.log(response)
                try {
                    
                    const { data } = await axios.post(backendUrl + '/api/order/verifyRazorpay',response,{headers:{token}})
                    if (data.success) {
                        navigate('/orders')
                        setCartItems({})
                    }
                } catch (error) {
                    console.log(error)
                    toast.error(error)
                }
            }
        }
        const rzp = new window.Razorpay(options)
        rzp.open()
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {

            let orderItems = []

            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        const itemInfo = structuredClone(products.find(product => product._id === items))
                        if (itemInfo) {
                            itemInfo.size = item
                            itemInfo.quantity = cartItems[items][item]
                            orderItems.push(itemInfo)
                        }
                    }
                }
            }

            let orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount() + delivery_fee
            }
            

            switch (method) {

                // API Calls for COD
                case 'cod':
                    const response = await axios.post(backendUrl + '/api/order/place',orderData,{headers:{token}})
                    if (response.data.success) {
                        setCartItems({})
                        navigate('/orders')
                    } else {
                        toast.error(response.data.message)
                    }
                    break;

                case 'stripe':
                    const responseStripe = await axios.post(backendUrl + '/api/order/stripe',orderData,{headers:{token}})
                    if (responseStripe.data.success) {
                        const {session_url} = responseStripe.data
                        window.location.replace(session_url)
                    } else {
                        toast.error(responseStripe.data.message)
                    }
                    break;

                case 'razorpay':

                    const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderData, {headers:{token}})
                    if (responseRazorpay.data.success) {
                        initPay(responseRazorpay.data.order)
                    }

                    break;

                default:
                    break;
            }


        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

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
        <form onSubmit={onSubmitHandler} className=''>
          
    
      <h1 className="px-16 mb-4 text-lg font-semibold">
         
                    <Title text1={'DELIVERY'} text2={'INFORMATION'} />
      </h1>
        <section className="text-gray-600 gap-4 px-16 flex body-font ">

<div className="flex flex-col flex-[2] h-fit border rounded-lg px-6 py-4">
              <div className="lg:w-full py-4 flex flex-col h-auto w-full  relative z-10">
                 <div className='flex flex-col gap-4 w-full '>

                <div className='flex gap-3'>
                    <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' />
                    <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' />
                </div>
                <input required onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address' />
                <input required onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
                <div className='flex gap-3'>
                    <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
                    <input onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
                </div>
                <div className='flex gap-3'>
                    <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' />
                    <input required onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
                </div>
                <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' />
            </div>
            
              </div>
             {/* { cartData.map((item, index) => {
                                  const productData = products.find((product) => product._id === item._id);

              <div className="pt-5" key={index}>
    <h3 className="font-semibold">Estimated Delivery</h3>
    <p className="text-[18px]" >Delivery By : <strong> Tue, 23 Jul</strong></p>
    <div className="flex flex-wrap gap-3 mt-2">
  
    <div className="flex items-center">
      <img
        className="h-14 w-14 rounded-[5px] border border-gray-300"
        src={productData.image[0] || ""}
        alt=""
      />
    </div>
  
</div>

  </div>
   })
 } */}
  </div>

              <div className="flex-1 border pb-3 h-auto rounded-lg">
              <h3 className="font-semibold text-[20px] mt-4 ml-4">Payment Method</h3>
    
   
              <div className="gap-2 border-b border-gray-200  flex p-4">
    <input className="rounded-[5px] w-full h-full py-2 border px-2" type="text" placeholder="Enter UPI ID" />
    <button className="bg-black  rounded-md px-4 font-medium text-[18px] text-white ">Verify</button>
  </div>
                <div className='mt-2 min-w-80 px-2'>
                    <CartTotal />
                </div>
                 <div className='mt-6 flex flex-col p-2'>
                   
                    {/* --------------- Payment Method Selection ------------- */}
                    <div className='flex gap-3 flex-col'>
                        <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
                            <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
                        </div>
                        <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
                            <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
                        </div>
                        <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                            <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
                        </div>
                    </div>

                    <div className='w-full text-end mt-8'>
                        <button type='submit' className='bg-black rounded-md text-white px-16 py-3 text-sm'>PLACE ORDER</button>
                    </div>
                </div>
                </div>

           
        
        </section>
        </form>
    )
}

export default PlaceOrder
