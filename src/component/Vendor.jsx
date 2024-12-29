import React from 'react';


const VendorTile = ({ name, logo, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-lg  hover:bg-blue-800 hover:text-white">
      <div className='flex items-center justify-between px-3'>
        <h3 className="text-xl font-semibold mb-4">{name}</h3>
        <img src={logo} alt={`${name} logo`} className="mx-auto mb-4 w-24 h-24 object-contain" />
      </div>
      
      
      <div className="text-sm text-gray-700">
        <span className="inline-block bg-gray-100 text-gray-800 px-4 py-1 rounded-full mb-2 mr-2 font-semibold">
            {description}
          </span>
      </div>
    </div>
  );
};

export default VendorTile;
