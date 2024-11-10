import React from 'react'
import Navbar from '../component/Navbar'
import Title from '../component/Title'
import Store from '../component/Store'
import Footer from '../component/Footer'

function AllStores() {
  return (
    <div>
      <div className='mx-[119px]'>
        <Navbar />
        <Title title="Explore Our Trusted Vendors" subtitle="Browse through a diverse range of vendors offering quality products across various categories" />
        <Store />
      </div>
      <Footer />
    </div>
  )
}

export default AllStores
