import React from 'react';
import './CardProducts.css'

const CardProducts = ({product, removeProduct}) => {
    
   
    return (
        <div className='orders-product-details'>
            <div>
            <img src={product.img} alt="" width={'150px'} />
            </div>
            <div className='details'>
                <div className='details-class'>
                    <h4>{product.name}</h4>
                    <p>Price: {product.price}$</p>
                    <p>Qunt: {product.quantity}</p>
                </div>
                <div onClick={()=>removeProduct(product)} className='delete'>
                    <p>X</p>
                </div>
            </div>
            
        </div>
    );
};

export default CardProducts;