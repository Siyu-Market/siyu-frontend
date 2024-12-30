import React from 'react'
import Herobanner from '../component/Herobanner'
import { useNavigate } from 'react-router-dom'
import Services from '../component/Services'
import Title from '../component/Title'
import Store from '../component/Store'
import {motion} from 'framer-motion'
import Fake from '../assets/products'
import Product from '../component/Product'

function Home() {
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

  const navigate = useNavigate()




  return (
    <div>
      <div className='max-w-[1800px] mx-auto px-4'>

        <Herobanner />
        <Services />
        <Title title="Top Vendors, Top Deals" subtitle="Our largest vendors with massive sales are ready to bring you unbeatable deals!"/>
        <Store />
        <div className="w-full flex justify-center items-center">
          <button onClick={() => navigate('/vendors')} className="rounded-[4px] px-[48px] py-[16px] mx-auto bg-blue-700 text-white hover:bg-blue-800 transition duration-300">
            Show All Vendors
          </button>
        </div>

        <h3 className='text-4xl font-bold  mt-[60px]'>Browse our products</h3>
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
  )
}

export default Home
