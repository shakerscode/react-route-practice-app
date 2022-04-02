import React, { useEffect, useState } from 'react';
import useCart from '../../hooks/useCart';
import useData from '../../hooks/useData';
import { getLocalData, setLocalData } from '../../HooksEx/localdb';
import CartDetails from '../CartDetails/CartDetails';
import Product from '../Product/Product';
import './Shope.css'


const Shope = () => {
    const [products, setProducts] = useData();
    const [cart, setCart] = useCart(products);

    const addToCartBtn = (product) => {
        const isExist = cart.find(cartProduct => cartProduct.id === product.id)
        let newCart = [];
        if (!isExist) {
            product.quantity = 1;
            newCart = [...cart, product]

        } else {
            const restProduct = cart.filter(cartProduct => cartProduct.id !== product.id);
            isExist.quantity = isExist.quantity + 1;
            newCart = [...restProduct, isExist]
        }

        setCart(newCart);
        //work for local storage
        setLocalData(product.id)


    }
    return (
        <div>
            <div className='shopping-tittle-header'>
                <h1>Choose The Best Product For You </h1>
                <p>Choose Best</p>
                <p>Wear Best</p>
            </div>

            <div className='shop-order-box'>

                <div className='product-container'>
                    {
                        products.map(product => <Product addToCartBtn={addToCartBtn} key={product.id} product={product}></Product>)
                    }
                </div>

                <div className='order-cart'>
                    <CartDetails cart={cart}></CartDetails>
                </div>
            </div>

        </div>
    );
};

export default Shope;