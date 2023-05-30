import React from 'react';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import Cover from '../../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, img, title, subTitle }) => {
    return (
        <section className='my-20'>
        {title && <Cover img={img} title={title} subTitle={subTitle}></Cover>}
            <div className='grid grid-cols-1 md:grid-cols-2 my-20 gap-5 mx-32'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='text-center'>
                <Link to={`/order/${title}`}><button className='btn btn-outline border-0 border-b'>Order Now</button></Link>
            </div>
        </section>
    );
};

export default MenuCategory;