import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';

function Herobanner() {
  const navigate = useNavigate()
  return (
    <div className="bg-cover bg-center h-[500px] flex items-center justify-center text-center">
      <div>
        <TypeAnimation
        sequence={[
            'Siyu Market'
        ]}
        wrapper="span"
        speed={50}
        className="text-8xl font-bold mb-4"
        style={{ display: 'inline-block' }}
        
        />
        <p className="text-lg mb-6">
          Siyu Market is your go-to destination for everything you need. Discover a wide range of products, including clothing, jewelry, perfumes, iPod accessories, and more—all from your favorite, affordable vendors.
        </p>
        <button onClick={() => {navigate('/products')}} className="rounded-[4px] px-[48px] py-[16px] bg-blue-700 text-white hover:bg-blue-800 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Herobanner;
