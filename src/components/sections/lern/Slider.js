import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';

const Slider = ({ slides }) => {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {slides.map((item) => (
                    <SwiperSlide key={item.thumbnail}>
                        <div className='cours-card'>
                            <h2 className='title'>{item.title}</h2>
                            <img src={item.thumbnail} alt={item.thumbnail} className='img-fluid image' />
                            <div className='card-text'>

                                <a href={item.video_link} className='headline'>{item.headline}</a>
                                <h6>{item.description}</h6>
                                <ul>
                                    <li>{item.author.name}</li>
                                    <li><a href={`mailto:${item.author.email}`}>
                                        {item.author.email}
                                    </a></li>
                                    <li><a href={item.author.website}>
                                        {item.author.website}
                                    </a></li>
                                    <li>{item.date_published}</li>
                                </ul>
                                <a href={item.video_link} className='watch'>watch</a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Slider