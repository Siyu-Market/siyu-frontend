import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Vendor from './Vendor';

const Store = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch('https://siyumarket-backend.vercel.app/store/all');
        if (!response.ok) {
          throw new Error('Failed to fetch stores');
        }
        const data = await response.json();
        setVendors(data.data.stores); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  return (
    <div className="py-10">
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mb-6">
          {vendors.map((vendor, index) => (
            <motion.div
              key={vendor.id} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              className="relative transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-2"
            >
              <Vendor
                name={vendor.name}
                logo={vendor.logo}
                description ={[vendor.description]} 
                
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Store;
