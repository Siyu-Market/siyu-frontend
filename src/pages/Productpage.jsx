import React from 'react'
import Product from '../component/Product'
import { useNavigate} from 'react-router-dom'
import { motion } from 'framer-motion';
import Title from '../component/Title';
import Fake from "../assets/products"

function Productpage() {
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
        {
          name: 'Mosky Pods',
          img: Fake.headphone19,
          price: 22,
          star: 4,
        
        },
        {
          name: 'TechWave',
          img: Fake.headphone20,
          price: 300,
          star: 4,
        },
        {
          name: 'Gadgetify',
          img: Fake.headphone21,
          price: 254,
          star: 3.5,
        },
        {
          name: 'ElectroMax',
          img: Fake.headphone22,
          price: 32,
          star: 4,
        },
        {
          name: 'SoundZilla',
          img: Fake.headphone23,
          price: 45,
          star: 1,
        },
        {
          name: 'SmartTech',
          img: Fake.headphone24,
          price: 182,
          star: 2,
        },
        {
          name: 'Mosky Pods',
          img: Fake.headphone2,
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
      ];

      const navigate = useNavigate()

  return (
    <div  className='max-w-[1800px] mx-auto px-4'>
        <div className='mt-[20px]'>
          <Title
            title="Products"
            subtitle="All products available on Siyumarket"
          />
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-4  gap-3 px-4 mb-6  mt-[60px]">
        {product.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}  
            transition={{
              duration: 0.5,   
              delay: index * 0.2, 
            }}
            className="relative transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-2 " onClick={() => navigate('/detail')}
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
  )
}

export default Productpage
