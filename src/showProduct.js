// import { useState } from "react";
import './Styles/showProduct.scss';

const ShowProduct = () =>{
    // const[product, setProduct] = useState([
    //     {
    //         "id":'6',
    //         "title":"MacBook Pro",
    //         "description":"MacBook Pro 2021 with mini-LED display may launch between September, November",
    //         "price":1749,
    //         "discountPercentage":11.02,
    //         "rating":4.57,"stock":83,"brand":"APPle","category":"laptops",
    //         "thumbnail":"https://i.dummyjson.com/data/products/6/thumbnail.png",            
    //     },

    // ])

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
                <p><b>Category: </b>laptops</p>
            </div>
            </div>
            <div className="column">
            <div className="checkoutBt">
                <h1>₱ 1,749.00</h1>
                <button>Checkout</button>

            </div>

            </div>

            </div>
          
        </div>
    );
}

export default ShowProduct;