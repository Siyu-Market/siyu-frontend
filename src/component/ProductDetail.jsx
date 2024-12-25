import React from 'react'
import Navbar from './Navbar'
import headphone from '../assets/headphones_c_1.webp'
import Product from './Product';
import {motion} from 'framer-motion'
import Fake from "../assets/products"
import Footer from './Footer';


function ProductDetail() {

  const product = [
    {
      name: 'Mosky Pods',
      img: Fake.headphone1,
      price: 22,
      star: 4,
    
    },
    {
      name: 'TechWave',
      img: Fake.headphone2,
      price: 300,
      star: 4,
    },
    {
      name: 'Gadgetify',
      img: Fake.headphone3,
      price: 254,
      star: 3.5,
    },
    {
      name: 'ElectroMax',
      img: Fake.headphone4,
      price: 32,
      star: 4,
    },
    {
      name: 'SoundZilla',
      img: Fake.headphone5,
      price: 45,
      star: 1,
    },
    {
      name: 'SmartTech',
      img: Fake.headphone6,
      price: 182,
      star: 2,
    },
    {
      name: 'Mosky Pods',
      img: Fake.headphone7,
      price: 22,
      star: 3,
    },
    {
      name: 'TechWave',
      img: Fake.headphone8,
      price: 300,
      star: 3.5,
    },
    {
      name: 'Gadgetify',
      img: Fake.headphone9,
      price: 254,
      star: 2,
    },
    {
      name: 'ElectroMax',
      img: Fake.headphone10,
      price: 32,
      star: 4,
    },
    {
      name: 'SoundZilla',
      img: Fake.headphone11,
      price: 45,
      star: 4,
    },
    {
      name: 'SmartTech',
      img: Fake.headphone12,
      price: 182,
      star: 2,
    },
    {
      name: 'Mosky Pods',
      img: Fake.headphone13,
      price: 22,
      star: 4,
    },
    {
      name: 'TechWave',
      img: Fake.headphone14,
      price: 300,
      star: 0,
    },
    {
      name: 'Gadgetify',
      img: Fake.headphone15,
      price: 254,
      star: 5,
    },
    {
      name: 'ElectroMax',
      img: Fake.headphone16,
      price: 32,
      star: 3,
    },
    {
      name: 'SoundZilla',
      img: Fake.headphone17,
      price: 45,
      star: 5,
    },
    {
      name: 'SmartTech',
      img: Fake.headphone18,
      star: 4,
    },
  ];



  return (
    <div>
        <div className='mx-[119px] px-[20px] overscroll-none overflow-x-hidden'>
            <Navbar />

            <div className='mt-[60px] w-[100vw]  '>
                <div className='w-full flex flex-wrap'>
                    <div className='w-[600px] flex items-start' >
                        <img className='' src={headphone} alt="product" />
                    </div>
                    <div className='w-[500px]'>
                        <h2 className='text-5xl mb-[16px]'><strong>M1 Headphones</strong></h2>
                        <h4 className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, laboriosam debitis molestiae nobis culpa aut perspiciatis explicabo ex ipsum veniam? Rerum quibusdam ipsam distinctio saepe alias dicta repudiandae nam dolorem impedit! Quasi odit nulla officia quam iusto unde ad consequatur deleniti. Fuga hic ratione recusandae! </h4>

                        <div className="inline-block bg-gray-100 text-gray-800 px-4 py-1 rounded-full mb-2 mr-2 mt-[20px] font-semibold">Mosky Pods</div>



                        <h3 className='font-bold text-3xl my-[10px]'>$32</h3>

                        <div className='flex items-center mt-[30px]'>
                            <span className="rounded-[30px] px-[18px] py-[10px] flex items-center bg-gray-500 text-white hover:bg-gray-400 mr-[10px] transition duration-300">+</span>
                            <span>0</span>
                            <span className="rounded-[30px] px-[18px] flex items-center py-[10px] bg-gray-500 text-white hover:bg-gray-400 ml-[10px] transition duration-300">-</span>
                        </div>

                        <div className='mt-[20px]'>
                            <button className="rounded-[4px] px-[48px] py-[16px] bg-blue-700 text-white hover:bg-blue-800 mr-[30px] transition duration-300">Add to Cart</button>
                            <button className="rounded-[4px] px-[48px] py-[16px] bg-blue-700 text-white hover:bg-blue-800 transition duration-300">View Store </button>
                        </div>
                    </div>
                </div>

                <h3 className='text-4xl font-bold  mt-[60px]'>Browse More</h3>
                <div className='flex items-center overflow-x-auto overflow-hidden gap-8 py-[10px] mb-[50px]'>
                    {product.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }}  
                            transition={{
                            duration: 0.5,   
                            delay: index * 0.2, 
                            }}
                            className="relative transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-2 "
                        >
                            <Product
                            name={product.name}
                            img={product.img}
                            price={product.price}
                            star={product.star}
                            />
                        </motion.div>
                    ))}

                </div>
                


            </div>
        
        
        </div>
        <Footer />
    </div>
  )
}

export default ProductDetail
