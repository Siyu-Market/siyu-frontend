import React from 'react'
import Navbar from '../component/Navbar'
import Product from '../component/Product'
import { motion } from 'framer-motion';
import Title from '../component/Title';

function Productpage() {
    const product = [
        {
          name: 'Mosky Pods',
          img: 'https://picsum.photos/seed/picsum/200/190',
          price: 22,
          star: 4,
        
        },
        {
          name: 'TechWave',
          img: 'https://picsum.photos/seed/picsum/200/190',
          price: 300,
          star: 4,
        },
        {
          name: 'Gadgetify',
          img: 'https://picsum.photos/seed/picsum/200/190',
          price: 254,
          star: 3.5,
        },
        {
          name: 'ElectroMax',
          img: 'https://picsum.photos/seed/picsum/200/190',
          price: 32,
          star: 4,
        },
        {
          name: 'SoundZilla',
          img: 'https://picsum.photos/seed/picsum/200/190',
          price: 45,
          star: 1,
        },
        {
          name: 'SmartTech',
          img: 'https://picsum.photos/seed/picsum/200/190',
          price: 182,
          star: 2,
        },
        {
          name: 'Mosky Pods',
          img: 'https://picsum.photos/seed/picsum/200/190',
          price: 22,
          star: 3,
        },
        {
          name: 'TechWave',
          img: 'https://picsum.photos/seed/picsum/200/190',
          price: 300,
          star: 3.5,
        },
        {
          name: 'Gadgetify',
          img: 'https://picsum.photos/seed/picsum/200/190',
          price: 254,
          star: 2,
        },
        {
          name: 'ElectroMax',
          img: 'https://picsum.photos/seed/picsum/200/190',
          price: 32,
          star: 4,
        },
        {
          name: 'SoundZilla',
          img: 'https://picsum.photos/seed/picsum/200/190',
          price: 45,
          star: 4,
        },
        {
          name: 'SmartTech',
          img: 'https://picsum.photos/seed/picsum/200/190',
          price: 182,
          star: 2,
        },
        {
          name: 'Mosky Pods',
          img: 'https://picsum.photos/seed/picsum/200/190',
          price: 22,
          star: 4,
        },
        {
          name: 'TechWave',
          img: 'https://picsum.photos/seed/picsum/200/190',
          price: 300,
          star: 0,
        },
        {
          name: 'Gadgetify',
          img: 'https://picsum.photos/seed/picsum/200/190',
          price: 254,
          star: 5,
        },
        {
          name: 'ElectroMax',
          img: 'https://picsum.photos/seed/picsum/200/190',
          price: 32,
          star: 3,
        },
        {
          name: 'SoundZilla',
          img: 'https://picsum.photos/seed/picsum/200/190',
          price: 45,
          star: 5,
        },
        {
          name: 'SmartTech',
          img: 'https://picsum.photos/seed/picsum/200/190',
          star: 4,
        },
      ];


  return (
    <div  className='mx-[119px]'>
        <Navbar />
        <div className='mt-[20px]'>
          <Title
            title="Products"
            subtitle="All products available on Siyumarket"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 px-4 mb-6  mt-[60px]">
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
  )
}

export default Productpage
