import React from 'react';
import './CartDetails'

const CartDetails = ({cart, children}) => {
    let price = 0;
    let shippingCharge = 0;
    let tax = 0;
    let totalPrice = 0;
    let productQuantity = 0;


    for (const info of cart) {

        productQuantity = productQuantity + info.quantity;

        const newprice = price + (info.price);
        price = newprice * info.quantity;
        const newShippingCharge = (info.shipping) + shippingCharge;
        shippingCharge = newShippingCharge;
        const taxIs = (newprice * 0.1).toFixed(2);
        tax = parseInt(taxIs);
        const thePriceIs = price + shippingCharge + tax;
        totalPrice = thePriceIs;
    }
    return (
        <div>
             <h3>Order Summery</h3>
                    <p>Product Quantity: {productQuantity}</p>
                    <p>Product Price: {price}$</p>
                    <p>Shipping Charge: {shippingCharge}$</p>
                    <p>Tax: {tax}$</p>
                    <p>Total Cost: {totalPrice}$</p>
                    <button className='order-btn'>Complete Order</button>
                    <button className='delete-cart'>Delete Cart</button>
                    {children}
            
        </div>
    );
};

export default CartDetails;