import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import { Link } from 'react-router-dom';

const CartTotal = () => {

    const {currency,delivery_fee,getCartAmount} = useContext(ShopContext);

  return (
   
      <div className="w-full">
                  {/* <h2 className="text-xl font-bold mb-4 text-left">Summary</h2> */}
                  <div className="flex justify-between py-2 border-b">
                    <p className="text-lg">Subtotal</p>
                    <p className="text-lg">{currency} {getCartAmount()}.00</p>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <p className="text-lg">Estimated shipping</p>
                    <p className="text-lg">{currency} {delivery_fee}.00</p>
                  </div>
                  {/* <div className="flex justify-between py-2 border-b">
                    <p className="text-lg">Estimated Tax</p>
                    <p className="text-lg">₹taxPrice</p>
                  </div> */}
                  <div className="flex justify-between py-4 border-y font-bold text-xl">
                    <p>Total</p>
                    <p>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</p>
                  </div>
     </div>

  )
}

export default CartTotal
