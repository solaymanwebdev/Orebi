import React, { useRef } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Product from '../components/Product'
import rabbit from '../assets/product/rabbit.png'
import basket from '../assets/product/basket.png'
import digittalWatch from '../assets/product/digittalWatch.png'
import speekerWatch from '../assets/product/speekerWatch.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa'; // কাস্টম অ্যারো আইকনের জন্য

const NewArrival = () => {
  // ১. Swiper Navigation কন্ট্রোল করার জন্য রেফ ডিক্লেয়ার করলাম
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="py-10">
      <Container className="relative">
        
        {/* ===== Custom Left Arrow Button ===== */}
        <button
          ref={prevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#979797] hover:bg-emerald-600 text-white hover:text-gray-800 p-3 rounded-full shadow-lg border border-gray-200 transition-all duration-300 opacity-80 group-hover:opacity-100 cursor-pointer"
          aria-label="Previous Slide"
        >
          <FaLongArrowAltLeft className="text-xl" />
        </button>

        {/* ===== Custom Right Arrow Button ===== */}
        <button
          ref={nextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#979797] hover:bg-emerald-600 text-white hover:text-gray-800 p-3 rounded-full shadow-lg border border-gray-200 transition-all duration-300 opacity-80 group-hover:opacity-100 cursor-pointer"
          aria-label="Next Slide"
        >
          <FaLongArrowAltRight className="text-xl" />
        </button>

        {/* ===== Swiper Component ===== */}
        <Swiper
          modules={[Navigation]}
          navigation={false} // ডিফল্ট নেভিয়েশন বন্ধ রেখে কাস্টম বাটন কানেক্ট করা হচ্ছে
          onInit={(swiper) => {  
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="mySwiper py-4"
          spaceBetween={30}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 25 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div>
              <Product productImg={rabbit} productBadge={"New"} productName={"Watch Titan"} productPrice={"$78"} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Product productImg={rabbit} productBadge={"New"} productName={"Watch Titan"} productPrice={"$78"} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Product productImg={basket} productBadge={"Hot"} productName={"Watch Titan"} productPrice={"$78"} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Product productImg={digittalWatch} productBadge={"Top"} productName={"Watch Titan"} productPrice={"$78"} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Product productImg={speekerWatch} productBadge={"New"} productName={"Watch Titan"} productPrice={"$78"} />
            </div>
          </SwiperSlide>
        </Swiper>

      </Container>
    </div>
  )
}

export default NewArrival