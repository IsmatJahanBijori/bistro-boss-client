import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import PopularMenu from '../Home/PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet><title>Menu</title></Helmet>
            <div className='pb-40'>
                <Cover img={menuImg} title={"Our Menu"} subTitle={'Lorem ipsum dolor sit amet.'}></Cover>
                <PopularMenu></PopularMenu>
                <Cover img={menuImg} title={"Our Menu"} subTitle={'Lorem ipsum dolor sit amet.'}></Cover>
                <PopularMenu></PopularMenu>
                <Cover img={menuImg} title={"Our Menu"} subTitle={'Lorem ipsum dolor sit amet.'}></Cover>
                <PopularMenu></PopularMenu>
                <Cover img={menuImg} title={"Our Menu"} subTitle={'Lorem ipsum dolor sit amet.'}></Cover>
                <PopularMenu></PopularMenu>
                <Cover img={menuImg} title={"Our Menu"} subTitle={'Lorem ipsum dolor sit amet.'}></Cover>
                <PopularMenu></PopularMenu>
            </div>
        </div>
    );
};

export default Menu;