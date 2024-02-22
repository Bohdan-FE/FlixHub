'use client'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MovieCard from '../MovieCard/MovieCard';



function Recomendation({ movies, title }: { movies: Movie[], title: string }) {

    if (movies.length < 1) return

    return (<>
        <h2 className="text-neutral-300 font-semibold text-4xl mb-6 text-center">{title}:</h2>
        <div className="max-w-7xl mx-auto overflow-hidden relative flex mb-4">
            <Swiper
                style={{ paddingBottom: '50px' }}
                modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
                mousewheel={true}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 30,
                    },
                }}
                pagination={{ clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',

                }}
            >
                {movies.map((movie, index) => <SwiperSlide key={movie.id} virtualIndex={index}><MovieCard movie={movie} /></SwiperSlide>)}
                {/* <BtnLeft />
                <BtnRight /> */}
            </Swiper>

        </div >
    </>

    );
}

export default Recomendation;

function BtnLeft() {
    const swiper = useSwiper();
    return (
        <button className='swiper-button-next bg-[rgba(46,45,45,0.8)] p-1 rounded-full absolute bottom-[24px] left-1/2 z-10 translate-x-[-70px]' onClick={() => swiper.slidePrev()}><IoIosArrowBack className='w-8 h-8' /></button>
    )
}

function BtnRight() {
    const swiper = useSwiper();
    return (
        <button className='swiper-button-next bg-[rgba(46,45,45,0.8)] p-1 rounded-full absolute bottom-[24px] right-1/2 z-10 translate-x-[70px]' onClick={() => swiper.slideNext()}><IoIosArrowForward className='w-8 h-8' /></button>
    )
}



