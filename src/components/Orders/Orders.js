import React, { } from 'react';
import useCart from '../../hooks/useCart';
import useData from '../../hooks/useData';
import { removeFromDatabase } from '../../HooksEx/localdb';
import CardProducts from '../CardProducts/CardProducts';
import CartDetails from '../CartDetails/CartDetails';
import Product from '../Product/Product';
import './Orders.css'

const Orders = () => {
    const [products, setProduct] = useData();
    const [cart, setCart] = useCart(products);

    const removeProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDatabase(product.id)
    }
    return (
        <div className='order-products'>
            <div className='ordered-products'>
                {
                    cart.map(product => <CardProducts key={product.id} product={product} removeProduct={removeProduct}></CardProducts>)
                }

            </div>
            <div className='ordered-carts'>
                <CartDetails cart={cart}> 
               <button>Remove Cart</button>
                
                </CartDetails>
            </div>
        </div>
    );
};

export default Orders;