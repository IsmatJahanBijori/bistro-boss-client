import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { _id, name, image, price, recipe } = item;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [, refetch]=useCart()
    const handleAddToCart = (item) => {
        console.log(item);

        // user thake
        if (user && user.email) {
            const cartItem = { 
                menuItemId: _id, 
                name, image, price, 
                email:user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

        // user na thake
        else {
            Swal.fire({
                title: 'You have to login first',

                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    };
    return (
        <div className="card w-96 bg-slate-200 shadow-xl">
            <figure>
                <img src={image} alt="Shoes" />
            </figure>
            <p className="bg-black absolute right-0 rounded mr-4 mt-4 text-white w-2/12 px-3">
                ${price}
            </p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="text-center">
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="btn btn-outline border-0 border-b"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
