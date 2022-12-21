import { waitFor, render, screen } from '@testing-library/react';
import React from 'react';
import { CartContext } from './App';
import Navbar from './Navbar';
// import ProductList from './ProductList';
// import Login from './login';
import Cart from './Cart';
// import CartItem from './CartItem';
// import { useContext } from 'react';

describe("Nav bar", () => {
    it("checks the cart button and search bar in navbar", () => {
      const NavbarComponent = () => {
        const { activeCart, handleUserSearch} = React.useContext(CartContext)

        return <>
            <div>{activeCart}</div>
            <input type="inputBox" placeholder='Search' autoFocus data-testid="inputBox" onChange = {handleUserSearch}/>
        </>
      }
    });
}); 

describe("Cart Item", () => {
    it("has a cart list", () => {
        const CartComponent = () => {
            const {removeFromCart, decreaseQuantity, increaseQuantity} = React.useContext(CartContext);

            return <>
                <button className='xbutton' onClick = {() => removeFromCart(item)}>✕</button>
                <button className='btns IncDec' onClick = {() => increaseQuantity(item)}>INCREASE</button>
                                    <button className='btns IncDec' onClick = {() => decreaseQuantity(item)}>DECREASE</button>
            </>
        }
    });
});

describe("Add to cart", () => {
    it("adds to cart", () => {
        const ProductComponent = () => {
            const { addToCart } = React.useContext(CartContext);

            return <>
                <button className="btn Add" onClick = {() => addToCart(product)}>Add to Cart</button>
            </>
        }
    });
});

describe("shows the cart list, total price", () => {
    it("cart list, total price", () => {
        const CartlistComponent = () => {
            const { totalPrice } = React.useContext(CartContext);

            return <>
                <label className="totalprice">Total Price: ${totalPrice}.00 </label>
            </>
            
        }
    });
});



// describe("shows the cart", () => {
//     it("check out", () => {
//         render(<Cart />);
//         const container = screen.getByTestId("cart");
//         expect(container).toBeInTheDocument();
//     });
// });

// describe("shows the cart items", () => {
//     it("has a button container", () => {
//         render(<CartItem />);
//         const container = screen.getByTestId("xbutton_container");
//         expect(container).toBeInTheDocument();
//     });
//     it("has a delete button", () => {
//         render(<CartItem />);
//         const btn = screen.getByTestId("xbutton");
//         expect(btn).toBeInTheDocument();
//     });
//     it("has a increase button", () => {
//         render(<CartItem />);
//         const btn = screen.getByTestId("btns IncDec");
//         expect(btn).toBeInTheDocument();
//     });
//     it("has a decrease button", () => {
//         render(<CartItem />);
//         const btn = screen.getByTestId("btns IncDec");
//         expect(btn).toBeInTheDocument();
//     });
// });
// describe("Checks if the user is valid", () => {
//     it("returns a token", async () => {
//         axios.post.mockResolvedValue(mockToken);
//     })
//     it("user is valid", async () => {
//         axios.post.mockResolvedValueOnce(validUser);
//     })
// });