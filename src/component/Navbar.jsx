import React from 'react'
import { useNavigate} from 'react-router-dom'
import Search from '../assets/Component 2.png'
import Cart from '../assets/Cart1.png'
import User from '../assets/user.png'
import Logo from '../assets/siyulogo.svg'

function Navbar() {
    const navigate = useNavigate()


  return (
    <div className='w-full flex items-center justify-between mt-8 '>
        <div className='flex items-end justify-center' onClick={() => navigate('/')}>
            <img src={Logo} className='h-[46px] w-[60px]' alt="Siyu Market" /><h2 className='text-3xl font-semibold'>Siyu Market</h2>
        </div>
        <div className='flex items-center'>
            <div className='text-normal mr-[24px] cursor-pointer' onClick={() => navigate('/')}>Home</div>
            <div className='text-normal mr-[24px] cursor-pointer' onClick={() => navigate('/all-stores')}>Vendors</div>
            <div className='text-normal mr-[24px] cursor-pointer' onClick={() => navigate('/products')}>Products</div>
            <div className='text-normal mr-[24px] cursor-pointer' onClick={() => navigate('/')}>About Us</div>
            
        </div>
        <div className='flex items-center justify-center'>
            <div className='bg-gray-200 rounded-sm flex w-[243px] h-[38px] mr-[16px] items-center justify-center outline-none border-0'>
                <input type="text" 
                    placeholder='Search' 
                    className='bg-transparent' 
                />
                <img src={Search} alt="Search Icon" className='my-[7px] cursor-pointer' />
                
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <img src={Cart} alt="Cart Icon" className='my-[7px] mr-[16px] cursor-pointer ' />
                </div>
                <div>
                    <img src={User} alt="Search Icon" className='my-[7px] cursor-pointer ' />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
