import React, { useContext } from 'react';
import { CartContext } from './App'

const CartItem = () => {
    const {quantity, cartList} = useContext(CartContext);

    return (
        <div>
            {
                cartList.map((item, index) => {
                    return(
                        <div>
                            <div>
                                <img src= {item.thumbnail} alt="image1" />
                                <label>Price: ${item.price}</label>
                                <button>-</button>
                                <label>{quantity}</label> 
                                <button>+</button>
                                <button>X</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CartItem