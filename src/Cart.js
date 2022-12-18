import { Offcanvas, Stack } from "react-bootstrap";
import React from 'react';
import { CartContext } from './App'
import CartItem from './CartItem'

function Cart(){
    const {totalPrice, cartList, isCartActive} = React.useContext(CartContext);
    return(
        <>
            <Offcanvas show = {isCartActive} placement = "end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        Cart
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Stack gap = {3}>
                        <CartItem />
                        {(cartList.length > 0) ? <label>Total Price: ${totalPrice} </label> : <label> Your shopping is empty. </label> }
                    </Stack>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Cart;