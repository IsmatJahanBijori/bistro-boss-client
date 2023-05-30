import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'


const Navbar = () => {

    const navItems =
        <React.Fragment>
            <Link to='/' className='mr-3'>Home</Link>
            <Link to='/menu' className='mr-3'>Our Menu</Link>
            <Link to='/shop' className='mr-3'>Our Shop</Link>
            <Link to='/about' className='mr-3'>About Us</Link>
        </React.Fragment>

    return (
        <div className="navbar fixed z-10 bg-black text-white bg-opacity-40">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost">
                        <img src={logo} className='w-8 h-8' alt="" />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black font-semibold lg:hidden">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-black font-semibold menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </label>
            </div>
        </div>
    );
};

export default Navbar;