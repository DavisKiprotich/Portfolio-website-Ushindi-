import './PricingCardStyle.css';
import React from 'react'
import IMG1 from '../Assets/poster2.png';
import IMG2 from '../Assets/bg1.jpeg';
import IMG3 from '../Assets/poster.jpg';
import IMG4 from '../Assets/brochure.jpg';
import IMG5 from '../Assets/bg1.jpeg';
import IMG6 from '../Assets/bg1.jpeg';
import IMG7 from '../Assets/flyer.jpg';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Poster design',
        

    },
    {
        id: 2,
        image: IMG2,
        title: 'Logo',
    },
    {
        id: 3,
        image: IMG3,
        title: 'Banner design',
    },
    {
        id: 4,
        image: IMG4,
        title: 'Brochure design',
    },
    {
        id: 5,
        image: IMG5,
        title: 'Business card',
    },
    {
        id: 6,
        image: IMG6,
        title: 'Company Profile',
    },
    {
        id: 7,
        image: IMG7,
        title: 'Flyer design',
    },
]

const PricingCard = () => {
    return (
        <div className='pricing'>
        <h3>Projects</h3>
        <div className='card-container'>
            <Swiper className='card'
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {data.map(({id,image,title}) => {
                    return(
                            <SwiperSlide key={id} className='card-item'>
                                <div className='card-item-image'>
                                    <img src={image} alt={title} />
                                    <h4>{title}</h4>
                                </div>
                                <div className='card-item-tag'>
                                    <a href='https://www.facebook.com/profile.php?id=100062809791733&mibextid=ZbWKwL' style={{marginRight: '1rem'}} className='btn btn-light' target='_blank' rel='noreferrer'>View</a>
                                    <Link to='/contact' className='btn'>ORDER NOW</Link>
                                </div>
                            </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    </div>
        
    )
  }
  
  export default PricingCard