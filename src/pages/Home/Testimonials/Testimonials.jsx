import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'
import comma from "../../../assets/icon/images.png"
import '@smastrom/react-rating/style.css'
const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json').then(res => res.json()).then(data => setReviews(data))
    }, [])
    return (
        <section className='mb-20'>
            <SectionTitle subHeading={'What Our Clients Say'} heading={'TESTIMONIALS'}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='flex flex-col items-center mx-24 my-16'>
                            <Rating style={{ maxWidth: 180 }} className='text-center' value={review.rating} readOnly
                            />
                            <img src={comma} className='w-20' alt="" />
                            <p className='text-xl'>{review.details}</p>
                            <p className='text-3xl text-yellow-700'>{review.name}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;