import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaHome, FaCalendar, FaMoneyBill, FaBook, FaUtensils, FaUsers } from "react-icons/fa";
// import { GoCodeReview } from "react-icons/go";
import { HiMenu, HiShoppingBag, HiAnnotation } from "react-icons/hi";
import { Helmet } from "react-helmet-async";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart]=useCart()

    // TODO: load dynamic data for admin
    const isAdmin=true
    return (
        <section>
        <Helmet><title>Dashboard</title></Helmet>
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Page content here */}
                <Outlet />
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-slate-200 text-base-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin ?
                        <React.Fragment>
                        <li><NavLink to='/dashboard/home'><FaHome></FaHome>Admin Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'><FaUtensils></FaUtensils>Add Items</NavLink></li>
                    <li><NavLink to='/dashboard/history'><HiMenu></HiMenu>Manage Items</NavLink></li>
                    <li><NavLink to='/dashboard/myCart'><FaBook></FaBook>Manage Bookings</NavLink></li>
                    <li><NavLink to='/dashboard/allUsers'><FaUsers></FaUsers>All Users</NavLink></li>
                        </React.Fragment>
                        :
                        <React.Fragment>
                        <li><NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/history'><FaMoneyBill></FaMoneyBill>Payment History</NavLink></li>
                    <li><NavLink to='/dashboard/myCart' className="ml-2"><FaShoppingCart></FaShoppingCart>My Cart +{cart?.length||0}</NavLink></li>
                    <li><NavLink to='/dashboard/review'><FaBook></FaBook>Add Review</NavLink></li>
                    <li><NavLink to='/dashboard/booking'><FaBook></FaBook>My Booking</NavLink></li>
                        </React.Fragment>
                    }
                    <hr className="border-black" />
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/menu'><HiMenu></HiMenu>Menu</NavLink></li>
                    <li><NavLink to='/order/pizza'><HiShoppingBag></HiShoppingBag>Shop</NavLink></li>
                    <li><NavLink to='/about'><HiAnnotation></HiAnnotation>About Us</NavLink></li>
                </ul>
            </div>
        </div>
        </section>
    );
};

export default Dashboard;
