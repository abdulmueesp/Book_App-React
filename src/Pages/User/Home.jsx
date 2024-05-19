import React from 'react'
import Navbar from '../../Components/Navbar'
import Banner from '../../Components/Banner'
import Popular from '../../Components/Popular'
import TrendCard from '../../Components/TrendCard'
import Footer from '../../Components/Footer'

const Home = () => {
  return (
    <div>
       
      <Navbar />
      <Banner />
      <Popular />
      <TrendCard />
      <Footer />
    </div>
  )
}

export default Home
