import React from 'react'
import Star from '../assets/image-removebg-preview (3).png'

function Product({name, img, price, star}) {
  return (
    <div className='w-[300px] h-[300px] rounded-lg shadow-md py-[20px] px-[20px]  hover:bg-blue-800 hover:text-white'>
        <div className='w-full h-full flex flex-col justify-between'>
        <img src={img} alt="Product img" className='w-full h-[190px] rounded-sm' />
          <div>
            <h2><strong>{name}</strong></h2>
            <div className='flex justify-between'>
              <p><strong>${price}</strong> </p>
              <span className='flex'><strong>{star}</strong> <img src={Star} alt="star"className='w-5 h-5' /></span>
            </div>

          </div>
        </div>
      
    </div>
  )
}

export default Product
