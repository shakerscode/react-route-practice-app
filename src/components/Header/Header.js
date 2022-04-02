import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    const mainCart = () => {
        
    }
    return (
        <div className='header-container'>
            <div>
                <h1>Logo Section</h1>
            </div>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/shope">Shop</Link>
                    <Link onClick={mainCart()} to="/cart">Cart <sup className='cart-sup'>0</sup>
                        <div className='cart-section'>
                        <div className='blank'> || </div>
                            <h4>hi</h4>
                            <p>name</p>
                            <p>name</p>
                            <p>name</p>
                            <p>name</p>
                            <p>name</p>   
                        </div></Link>
                    <Link to="/orders">Order</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/form">LogIn / SignIn</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;