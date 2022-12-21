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
            <div id = "sidebar" className={isCartActive? "active": "inactive"}>
                <div className = "sidebar-content">
                <div className="cartbar">
                    <h1 className="featured">ITEMS IN CART</h1>
                </div>
                    <div className = "cart">
                        <div className="cartcontainer">
                            {
                                (cartList.length > 0) ? <div className="cart-list"> <CartItem /> </div>: <label>No items in cart.</label>
                            }
                        </div>
                        <div className="cartbarfooter">
                        <h1 className="featured"></h1>
                        </div>
                        <div className = "cart-total-price">
                            {
                                (cartList.length > 0) ? <label className="totalprice">Total Price: {totalPrice} </label> : <label></label>
                            }
                        </div>
                    </div>
                    <button>Check Out</button>
                </div>
            </div>
        </>
    )
}

export default Cart;
