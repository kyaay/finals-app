import { useHistory } from 'react-router';
import React, { useContext } from 'react';
import { CartContext } from './App'
import './Styles/ProductList.scss';

const ProductList = () => {
    let history = useHistory();
    const {products, addToCart, activeCart} = useContext(CartContext);

    return (
        <div className = "product-list" data-testid="product-list">
            {
                products.map((product,index) => {
                    return (
                        <div className = "product" key = {index}>
                            <div className='overlaycontainer'>
                                <img src = {product.thumbnail} alt = "image1"></img>
                                <div className='overlay'>
                                    <div className='sampleText'><h3>Product description:</h3><p> ${product.description}</p></div>                                
                                </div>
                            </div>
                            <div className='prodtitle'>
                                <h3>{product.title} </h3>
                            </div>
                            <div className='price'>
                                <label>Price: ${product.price} </label>
                            </div>
                            <div className='prodbutton'>
                                <button className="btn Add" onClick = {() => {addToCart(product);activeCart()}}>Add to Cart</button>
                                <a className="btn Buy" onClick={() => {history.push('/buy')}}>Buy Now</a>
                            </div>
        
                          
                        </div>)
                    }
                )
            }
        </div>
    )
    /* 
            Jerick mao ni ang sample gikan sa API na link sa mga laptop producs
           Laptops: 'https://dummyjson.com/products/category/laptops'
           Phones: https://dummyjson.com/products/search?q=phone


    Laptops
    {"id":6
    "title":"MacBook Pro",
    "description":"MacBook Pro 2021 with mini-LED display may launch between September, November",
    "price":1749,"discountPercentage":11.02,"rating":4.57,"stock":83,
    "brand":"APPle",
    "category":"laptops",
    "thumbnail":"https://i.dummyjson.com/data/products/6/thumbnail.png",
    "images":["https://i.dummyjson.com/data/products/6/1.png",
    "https://i.dummyjson.com/data/products/6/2.jpg",
    "https://i.dummyjson.com/data/products/6/3.png",
    "https://i.dummyjson.com/data/products/6/4.jpg"]}

    Phones
    {"products":
    [{"id":1,
    "title":"iPhone 9",
    "description":"An apple mobile which is nothing like apple",
    "price":549,
    "discountPercentage":12.96,
    "rating":4.69,
    "stock":94,
    "brand":"Apple",
    "category":"smartphones",
    "thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images":["https://i.dummyjson.com/data/products/1/1.jpg","https://i.dummyjson.com/data/products/1/2.jpg","https://i.dummyjson.com/data/products/1/3.jpg","https://i.dummyjson.com/data/products/1/4.jpg","https://i.dummyjson.com/data/products/1/thumbnail.jpg"]},
    */
}

export default ProductList;