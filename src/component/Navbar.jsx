import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../assets/Component 2.png';
import Cart from '../assets/Cart1.png';
import User from '../assets/user.png';
import Logo from '../assets/siyulogo.svg';

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 11`00) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full flex items-center justify-between mt-8 px-4 relative">
      
      <div className="flex items-end justify-center" onClick={() => navigate('/')}>
        <img src={Logo} className="h-[46px] w-[60px]" alt="Siyu Market" />
        <h2 className="text-3xl font-semibold">Siyu Market</h2>
      </div>

      
      <div className="custom:hidden cursor-pointer z-50" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black"></div>
      </div>

      
      <div
        className={`fixed top-0 right-0 h-full bg-white transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } w-[50%] md:w-[20%] sm:w-[50%] shadow-lg z-40`}
      >
        <div className="flex flex-col items-center mt-16 space-y-6">
          <div
            className="text-lg cursor-pointer mt-[30px]"
            onClick={() => {
              setMenuOpen(false);
              navigate('/');
            }}
          >
            Home
          </div>
          <div
            className="text-lg cursor-pointer"
            onClick={() => {
              setMenuOpen(false);
              navigate('/all-stores');
            }}
          >
            Vendors
          </div>
          <div
            className="text-lg cursor-pointer"
            onClick={() => {
              setMenuOpen(false);
              navigate('/products');
            }}
          >
            Products
          </div>
          <div
            className="text-lg cursor-pointer"
            onClick={() => {
              setMenuOpen(false);
              navigate('/');
            }}
          >
            About Us
          </div>
        </div>
      </div>

      
      <div className="hidden custom:flex items-center">
        <div className="text-normal mr-[24px] cursor-pointer" onClick={() => navigate('/')}>
          Home
        </div>
        <div className="text-normal mr-[24px] cursor-pointer" onClick={() => navigate('/all-stores')}>
          Vendors
        </div>
        <div className="text-normal mr-[24px] cursor-pointer" onClick={() => navigate('/products')}>
          Products
        </div>
        <div className="text-normal mr-[24px] cursor-pointer" onClick={() => navigate('/')}>
          About Us
        </div>
      </div>

      
      <div className="hidden custom:flex items-center justify-center">
        <div className="bg-gray-200 rounded-sm flex w-[243px] h-[38px] mr-[16px] items-center justify-center outline-none border-0">
          <input type="text" placeholder="Search" className="bg-transparent" />
          <img src={Search} alt="Search Icon" className="my-[7px] cursor-pointer" />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <img src={Cart} alt="Cart Icon" className="my-[7px] mr-[16px] cursor-pointer" />
          </div>
          <div>
            <img src={User} alt="User Icon" className="my-[7px] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
