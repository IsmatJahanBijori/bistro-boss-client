import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Bistro from '../Bistro/Bistro';
import PopularMenu from '../PopularMenu/PopularMenu';
import Contact from '../Contact/Contact';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <Bistro/>
            <PopularMenu/>
            <Contact/>
            <ChefRecommends/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;