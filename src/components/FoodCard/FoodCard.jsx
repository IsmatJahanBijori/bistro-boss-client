import React from 'react';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item
    return (
        <div className="card w-96 bg-slate-200 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='bg-black absolute right-0 rounded mr-4 mt-4 text-white w-2/12 px-3'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="text-center">
                    <button className="btn btn-outline border-0 border-b">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;