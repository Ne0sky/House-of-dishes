import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


import CuisineData from '../Data/CuisineData';
import Card1 from './Card1';

const Cuisines = () => {
  return (
    <div className='bg-zinc-950 py-8 '>
  
  <Swiper
    modules={[Navigation,  A11y, ]}
    spaceBetween={30}
    navigation
    className='w-full md:w-3/4 lg:w-1/2 flex items-center justify-center h-64 md:52 '

    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1025: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }}
  >
    {CuisineData.map((item, index) => (
      <SwiperSlide key={index} >
        <Card1
          key={index}
          title={item.title}
          imageUrl={item.imageUrl}
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>
  );
}

export default Cuisines;
