import React from 'react';
import './Product.css'
const Product = ({product, addToCartBtn}) => {
    const {id, name, img, category, seller, price, stock} = product
    return (
        <div className='product'>
            <img src={img} alt="images" width={'300px'} />
            <h5>{name}</h5>
            <p>Category: {category}</p>
            <p>Seller: {seller}</p>
            <p>Price: {price}$</p>
            <p>Stock: {stock}</p>
            <button onClick={()=> addToCartBtn(product)} className='add-to-cart-btn'>Add To Cart</button>
        </div>
    );
};

export default Product;