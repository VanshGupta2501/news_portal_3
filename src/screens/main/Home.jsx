import FourCards from 'components/main/home/four-cards/four-card'
import Navbar from 'components/main/home/Navbar'
import NewSwiper from 'components/main/home/new-swiper/news-swiper'
import React from 'react'
import Footer from './Footer'
import MustRead from './MustRead'
import TwoCard from 'components/main/home/TwoCard'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <NewSwiper/>
      <FourCards/>
      <MustRead/>
      <TwoCard/>
      <Footer/>
    </div>
  )
}

export default Home
