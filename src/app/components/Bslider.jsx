"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/autoplay"; // optional, but good to import

// import required modules
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Marquee from "react-fast-marquee";


export default function Bslider() {

    const img = [
        "/bannar/01.jpg",
        "/bannar/02.jpg",
        "/bannar/03.jpg",
        "/bannar/04.jpg",
        "/bannar/05.jpg"
    ]

    return (
        <div className='bg-[#134925] p-2'>
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

            
            <div className='bg-[#147b44] mt-2 text-yellow-300'>
                <Marquee className='text-sm py-1'>
                    এই ওয়েবসাইট Fashion Forward দ্বারা নির্মিত । যোগাযোগ: 01779775264
                </Marquee>
            </div>

        </div>
    );
}

