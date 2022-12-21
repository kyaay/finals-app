import React, { useContext } from 'react';
import { CartContext } from './App'

const CartItem = () => {
    const {quantity, cartList, removeFromCart, decreaseQuantity, increaseQuantity} = useContext(CartContext);
    return (
        <div className = "cart-items">
            {
                cartList.map((item, index) => {
                return(
                        <>
                            {/* <img src={item.thumbnail} alt="image1" /> */}
                            <label>Title = {item.title} </label>
                            <label>Quantity = {item.quantity} </label>
                            <label>Price = {item.price} </label>
                            <button onClick = {() => decreaseQuantity(item)}>DECREASE</button>
                            <button onClick = {() => increaseQuantity(item)}>INCREASE</button>
                            <button onClick = {() => removeFromCart(item)}>REMOVE</button>
                            <br></br>
                        </>
                    )
                })
            }
        </div>
    )
}

export default CartItem