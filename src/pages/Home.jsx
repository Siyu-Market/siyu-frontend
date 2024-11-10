import React from 'react'
import Navbar from '../component/Navbar'
import Herobanner from '../component/Herobanner'
import Footer from '../component/Footer'
import Services from '../component/Services'
import Title from '../component/Title'
import Store from '../component/Store'

function Home() {
  return (
    <div>
      <div className='mx-[119px]'>
        <Navbar />
        <Herobanner />
        <Services />
        <Title title="Top Vendors, Top Deals" subtitle="Our largest vendors with massive sales are ready to bring you unbeatable deals!"/>
        <Store />
        <div className="w-full flex justify-center items-center">
          <button className="rounded-[4px] px-[48px] py-[16px] mx-auto bg-blue-700 text-white hover:bg-blue-800 transition duration-300">
            Show All Vendors
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
