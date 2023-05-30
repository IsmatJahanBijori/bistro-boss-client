import React from 'react';
import { Helmet } from 'react-helmet-async';
import menuImg from '../../../assets/menu/banner3.jpg'
import Cover from '../../../Shared/Cover/Cover';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import menuImage from "../../../assets/menu/menu-bg.png"
const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')
    
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const dessert = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <section>
            <Helmet><title>Menu</title></Helmet>
            <div className='pb-40'>
                <Cover img={menuImg} title={"Our Menu"} subTitle={'Lorem ipsum dolor sit amet.'}></Cover>
                <SectionTitle heading={'Dont Miss'} subHeading={'Todays Offer'}></SectionTitle>

                <MenuCategory items={offered}></MenuCategory>

                <MenuCategory items={pizza} img={pizzaImg} title={"Pizza"} subTitle={"Lorem ipsum dolor sit amet"}></MenuCategory>

                <MenuCategory items={salad} img={saladImg} title={"Salad"} subTitle={"amet consectetur adipisicing"}></MenuCategory>

                <MenuCategory items={soup} img={soupImg} title={"Soup"} subTitle={"Lorem ipsum dolor sit amet"}></MenuCategory>

                <MenuCategory items={dessert} img={dessertImg} title={"Dessert"} subTitle={"Lorem ipsum dolor sit amet consectetur adipisicing."}></MenuCategory>

                <MenuCategory items={drinks} img={menuImage} title={"Drinks"} subTitle={"amet consectetur adipisicing"}></MenuCategory>
            </div>
        </section>
    );
};

export default Menu;