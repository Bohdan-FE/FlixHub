'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { IoIosArrowBack } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MovieCard from '../MovieCard/MovieCard';
import { useRef } from 'react';


function Recomendation({ movies }: { movies: Movie[] }) {
    const rightArrow = useRef(null)
    const leftArrow = useRef(null)


    return (<>
        <button className='absolute'>
            feves
        </button>
        <Swiper
            style={{
                padding: '0 40px',
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={7}
            navigation={{
                prevEl: rightArrow.current,
                nextEl: leftArrow.current
            }
            }
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >

            <button className='absolute top-2 z-[99] left-[0px]' ref={leftArrow}><IoIosArrowBack /></button>
            {movies.map((movie, index) => <SwiperSlide style={{ overflow: 'visible' }} key={movie.id} virtualIndex={index}><MovieCard movie={movie} /></SwiperSlide>)}
            <button ref={rightArrow}><IoIosArrowBack /></button>


        </Swiper>
    </>

    );
}

export default Recomendation;




