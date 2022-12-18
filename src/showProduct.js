// import { useState } from "react";
import './Styles/showProduct.scss';

const ShowProduct = () =>{

    return(
        <div className="singleProd">
            <div className="row">
            <div className="column">
            <div className="productImg">
                <image src="https://i.dummyjson.com/data/products/6/thumbnail.png"></image>
            </div>
            </div>
            <div className="column">
            <div className="productDetails">
                <h1>MacBook Pro</h1>
                <p>MacBook Pro 2021 with mini-LED display may launch between September, November</p>
                <hr class="solid"></hr>
                <p><b>Rating: </b>4.57%</p>
                <p><b>Stock: </b>83</p>
                <p><b>Brand: </b>Apple</p>
                <p><b>Category: </b>laptop</p>
            </div>
            </div>
            <div className="column">
            <div className="checkoutBt">
                <h1>₱ 1,749.00</h1>
                <div className='quantity'>
                    <label>Quantity:</label>
                    <input type="number" min="1" max="100" id='quantity'></input>
                </div>
                <button>Checkout</button>

            </div>

            </div>

            </div>
          
        </div>
    );
}

export default ShowProduct;