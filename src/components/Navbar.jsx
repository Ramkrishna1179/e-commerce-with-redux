import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const cartCount = useSelector((state) => state.cart.cartCount);
    const dispatch = useDispatch();

    const handleToggleCart = () => {
        navigate('/Cart')
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">

                <Link to="/" style={{ textDecoration: "none", color: "white" }}> My E-Commerce App</Link>
                <Link to="/Cart" style={{ textDecoration: "none", color: "white" }}> Cart ({cartCount})</Link>
            </div>
        </nav>
    );
};

export default Navbar;
