import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.log(error));
    };

    const navItems = (
        <React.Fragment>
            <Link to="/" className="mr-3">
                Home
            </Link>
            <Link to="/menu" className="mr-3">
                Our Menu
            </Link>
            <Link to="/order/pizza" className="mr-3">
                Our Shop
            </Link>
            <Link to="/about" className="mr-3">
                About Us
            </Link>
            <Link to="/about" className="mr-3">
                <button className="btn">
                    <FaShoppingCart/>
                    <div className="badge badge-secondary ml-2">+0</div>
                </button>
            </Link>
            {user ? (
                <React.Fragment>
                    <button onClick={handleLogout} className="btn">
                        Logout
                    </button>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                    </div>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Link to="/login" className="mr-3">
                        Login
                    </Link>
                    <Link to="/registration" className="mr-3">
                        Register
                    </Link>
                </React.Fragment>
            )}
        </React.Fragment>
    );

    return (
        <div className="navbar fixed z-10 bg-black text-white bg-opacity-40">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost">
                        <img src={logo} className="w-8 h-8" alt="" />
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black  font-semibold lg:hidden"
                    >
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu md:text-white font-semibold menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
