import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const BestItem = ({id,image,name,price}) => {
    
    const {currency} = useContext(ShopContext);

  return (
   <Link onClick={() => scrollTo(0, 0)} className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
  <div className='relative overflow-hidden h-[350px]'>
    <img
      className='hover:scale-110 object-cover object-top h-full w-full transition ease-in-out'
      src={image[0]}
      alt=""
    />
  </div>
  <div className="mt-1">
    <p className='text-[16px] font-sans font-semibold'>{name}</p>
    <p className='text-[16px] font-sans font-semibold'>{currency}{price}</p>
  </div>
</Link>

  )
}

export default BestItem;
