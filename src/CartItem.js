import React, { useContext } from 'react';
import { CartContext } from './App'

const CartItem = () => {
    const {quantity, cartList, removeFromCart, decreaseQuantity, increaseQuantity} = useContext(CartContext);
    return (
        <div className = "cart-items">
            {
                cartList.map((item, index) => {
                return(
                        <div className='sidecontent'>
                            <div className='productcart'>
                                <div className='xbutton_container'>
                                <button className='xbutton' onClick = {() => removeFromCart(item)}>✕</button>
                                </div>
                                <img src = {item.thumbnail} alt = "image1"></img>      
                                <div className='prodtitle'>
                                    <h3 data-testid="prodtitle">{item.title} </h3>
                                </div>
                                <div className='price'>
                                    <label data-testid="price">Price: ${item.price}.00 </label>
                                </div>
                                <div className='cartbuttons'>
                                <button className='btns IncDec' onClick = {() => increaseQuantity(item)}>INCREASE</button>
                                    <button className='btns IncDec' onClick = {() => decreaseQuantity(item)}>DECREASE</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CartItem