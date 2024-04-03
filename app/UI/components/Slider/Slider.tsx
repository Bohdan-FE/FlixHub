'use client'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MovieCardMini from '../MovieCardMini/MovieCardMini';
import TVCardMini from '../TVCardMini/TVCardMini';



function Slider({ data, type }: { data: Movie[] | TVShow[], type: 'movie' | 'tv' }) {

    if (data.length < 1) return

    return (
        <div className="max-w-7xl mx-auto overflow-hidden relative flex">
            <Swiper
                style={{ paddingBottom: '50px', paddingInline: '50px' }}
                modules={[Navigation, Pagination, Scrollbar, A11y]}

                spaceBetween={20}
                slidesPerView={2}
                breakpoints={{
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 7,
                        spaceBetween: 30,
                    },
                }}
                pagination={{ clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',

                }}
            >
                {data.map((data, index) => {
                    if (type === 'movie') { return <SwiperSlide key={data.id} virtualIndex={index}><MovieCardMini movie={data as Movie} /></SwiperSlide> }
                    if (type === 'tv') { return <SwiperSlide key={data.id} virtualIndex={index}><TVCardMini tv={data as TVShow} /></SwiperSlide> }
                })}
                <BtnLeft />
                <BtnRight />
            </Swiper>

        </div >
    );
}

export default Slider;

function BtnLeft() {
    const swiper = useSwiper();
    return (
        <button className=' bg-neutral-900 p-1 absolute h-[calc(100%-50px)] z-10 left-0 top-0 group' onClick={() => swiper.slidePrev()}><IoIosArrowBack className='w-8 h-8 fill-neutral-500 group-hover:fill-neutral-200 transition-colors' /></button>
    )
}

function BtnRight() {
    const swiper = useSwiper();
    return (
        <button className='bg-neutral-900 p-1 absolute h-[calc(100%-50px)] z-10 right-0 top-0 group' onClick={() => swiper.slideNext()}><IoIosArrowForward className='w-8 h-8 fill-neutral-500 group-hover:fill-neutral-200 transition-colors' /></button>
    )
}



