"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/autoplay"; // optional, but good to import

// import required modules
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';


const Favourites = () => {

 const img = [
        "/fav/01.jpg",
        "/fav/02.jpg",
        "/fav/03.jpg",
  
    ]
  
  return (
     <div className='bg-[#134925] p-2'>
      <p className='p-2 text-yellow-300 font-semibold border-l-4 border-amber-50'>Favourites</p>
                <Swiper
                    slidesPerView="auto"
                    autoplay={{
                        delay: 2000, // 2 seconds
                        disableOnInteraction: false, // keeps autoplay even after interaction
                    }}
                    spaceBetween={30}
                    modules={[Autoplay]}
                    loop={true}
                    className="mySwiper"
                >
    
                    {img.map((i, idx) => (
                        <SwiperSlide key={idx}>
                            <Image src={i} width={500} height={100} alt='Fashion Forawrd' />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
  )
}

export default Favourites
