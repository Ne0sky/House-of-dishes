import React from 'react'
import Cuisines from '../components/Cuisines'
import SeasonalDishesData from '../Data/SeasonalDishesData'
import RecommendedData from '../Data/RecommendedData'
import Card2 from '../components/Card2'
import Footer from '../components/Footer'
SeasonalDishesData
const LuxuryDishes = () => {
  return (
    <div className='bg-zinc-900 flex flex-col justify-center w-full items-center py-16 text-white '>
        <h2 className='text-center text-3xl font-medium pt-8'>Luxury Dishes</h2>
        <p className='bg-gradient-to-r from-amber-700  to-zinc-900 w-48 h-1 mb-8 mx-auto '></p>
        <p className='text-center text-2xl py-4'>Cuisines</p>
        <div className='w-screen'>
        <Cuisines/>
        </div>

        {/* RECOMMENDED DISHES */}

        <h2 className='text-center text-3xl font-medium pt-8'>Recommended Dishes</h2>
        <div className="card-container grid grid-cols-1 py-8 md:grid-cols-2 lg:grid-cols-4  gap-4 lg:gap-16 items-center justify-center">
      {RecommendedData.map((item, index) => (
        <Card2 key={index} title={item.title} time={item.time} rating={item.rating} imageUrl={item.imageUrl} />
      ))}
      </div>
      <div className='w-screen'>
      <Footer/>
      </div>  
    </div>
  )
}

export default LuxuryDishes