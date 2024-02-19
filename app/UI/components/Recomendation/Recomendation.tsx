'use client'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MovieCard from '../MovieCard/MovieCard';



function Recomendation({ movies }: { movies: Movie[] }) {

    if (movies.length < 1) return

    return (<>

        <Swiper
            style={{ paddingBottom: '32px' }}
            modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
            mousewheel={true}
            spaceBetween={20}
            slidesPerView={7}
            pagination={{ clickable: true }}
        >

            {movies.map((movie, index) => <SwiperSlide key={movie.id} virtualIndex={index}><MovieCard movie={movie} /></SwiperSlide>)}
            {/* <BtnLeft />
            <BtnRight /> */}
        </Swiper>
    </>

    );
}

export default Recomendation;

function BtnLeft() {
    const swiper = useSwiper();
    return (
        <button className='absolute top-0 left-0 z-20 h-full bg-[rgba(46,45,45,0.8)] p-1 rounded-r-full' onClick={() => swiper.slidePrev()}><IoIosArrowBack className='w-8 h-8' /></button>
    )
}

function BtnRight() {
    const swiper = useSwiper();
    return (
        <button className='absolute top-0 right-0 z-20 h-full bg-[rgba(46,45,45,0.8)] p-1 rounded-l-full' onClick={() => swiper.slideNext()}><IoIosArrowForward className='w-8 h-8' /></button>
    )
}



