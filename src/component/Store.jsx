import React from 'react';
import { motion } from 'framer-motion';
import Vendor from './Vendor';

const Store = () => {
  const vendors = [
    {
      name: 'Mosky Pods',
      logo: 'https://example.com/mosky-logo.png',
      categories: ['iPods', 'iPod Accessories'],
    },
    {
      name: 'TechWave',
      logo: 'https://example.com/techwave-logo.png',
      categories: ['Smartphones', 'Laptops', 'Accessories'],
    },
    {
      name: 'Gadgetify',
      logo: 'https://example.com/gadgetify-logo.png',
      categories: ['Smart Watches', 'Earbuds'],
    },
    {
      name: 'ElectroMax',
      logo: 'https://example.com/electromax-logo.png',
      categories: ['Cameras', 'Drones'],
    },
    {
      name: 'SoundZilla',
      logo: 'https://example.com/soundzilla-logo.png',
      categories: ['Speakers', 'Headphones'],
    },
    {
      name: 'SmartTech',
      logo: 'https://example.com/smarttech-logo.png',
      categories: ['Smart Home', 'IoT Devices'],
    },
  ];

  return (
    <div className="py-10">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mb-6">
        {vendors.map((vendor, index) => (
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
            <Vendor
              name={vendor.name}
              logo={vendor.logo}
              categories={vendor.categories}
            />
          </motion.div>
        ))}
      </div>

      
      
    </div>
  );
};

export default Store;
