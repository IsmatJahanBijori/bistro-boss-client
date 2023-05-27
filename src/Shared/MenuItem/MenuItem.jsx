import React from 'react';

// eslint-disable-next-line react/prop-types
const MenuItem = ({ item }) => {
    // eslint-disable-next-line react/prop-types
    const { name, recipe, image, price } = item
    // <figure><img style={{borderRadius: "0px 200px 200px 200px", width: "118px", height: "104px"}} src={image} alt="Movie" /></figure>
    return (
        <div className="card card-side bg-base-100 shadow-xl p-5">
            <figure><img className='w-full md:w-[118px] md:h-[100px]' style={{borderRadius: "0px 200px 200px 200px"}} src={image} alt="Movie" /></figure>
            <div className="ml-5 flex justify-between gap-5">
                <div><h2 className="card-title">{name}</h2>
                <p>{recipe}</p></div>
                <div><p style={{color: "#BB8506"}}>${price}</p></div>
            </div>
        </div>
    );
};

export default MenuItem;