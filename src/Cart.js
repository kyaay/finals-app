import { Offcanvas, Stack } from "react-bootstrap";
import React, { useEffect } from 'react';
import { CartContext } from './App'
import CartItem from './CartItem'
import './Styles/Cart.scss';

function Cart(){
    const {cartList, setTotalPrice, totalPrice, isCartActive} = React.useContext(CartContext);

    const calculateTotalPrice = () => {
        let sum = 0;
        sum = cartList.reduce((accumulator, object) => {
            return accumulator + (object.price * object.quantity);
        }, 0)
        setTotalPrice(sum);
    }   

    useEffect(() => {
       calculateTotalPrice();
    }, [cartList])

    return(
        <>
            <h1>HELLO</h1>
            <h1>HELLO</h1>
            <h1>HELLO</h1>
            <h1>HELLO</h1>
            <h1>HELLO</h1>
            <div id = "sidebar" className={isCartActive? "active": "inactive"}>
                <div className = "sidebar-content">
                    <div className = "cart">
                        <CartItem />
                        <div className = "cart-total-price">
                            {
                                (cartList.length > 0) ? <label>Total Price: {totalPrice} </label> : <label></label>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;