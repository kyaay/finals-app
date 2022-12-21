import React from 'react'
import { CartContext } from './App';
import './Styles/ProductList.scss';

const ProductList = () => {
    const {handleUserSearch, products, addToCart, searchValue, removeFromCart, increaseQuantity, decreaseQuantity} = React.useContext(CartContext);

    return (searchValue === '') ? (
        <div className = "product-list" data-testid="product-list">
            {
                products?.map((product,index) => {
                    return (
                        <div className = "product" key = {index}>
                            <div className='overlaycontainer'>
                                <img src = {product.thumbnail} alt = "image1"></img>
                                <div className='overlay'>
                                    <div className='sampleText'><h3>Product description:</h3><p> {product.description}</p></div>                                
                                </div>
                            </div>
                            <div className='prodtitle'>
                                <h3 data-testid="prodtitle">{product.title} </h3>
                            </div>
                            <div className='price'>
                                <label data-testid="price">Price: ${product.price}.00 </label>
                            </div>
                            <div className='prodbutton'>
                                <button className="btn Add" onClick = {() => addToCart(product)}>Add to Cart</button>
                            </div>
                        </div>)
                    }
                )
            }
        </div>
    ) : (
        <div className = "search-list">
            {
                products.filter(items => {
                    const value = searchValue.toLowerCase();
                    const title = items.title.toLowerCase();
                    return value && title.startsWith(value);
                }).map((product , index) => {
                        return (
                            <>
                                <div className = "product" key = {index}>
                                    <div className='overlaycontainer'>
                                        <img src = {product.thumbnail} alt = "image1"></img>
                                        <div className='overlay'>
                                            <div className='sampleText'><h3>Product description:</h3><p> {product.description}</p></div>                                
                                        </div>
                                    </div>
                                        <div className='prodtitle'>
                                            <h3 data-testid="prodtitle">{product.title} </h3>
                                        </div>
                                        <div className='price'>
                                            <label data-testid="price">Price: ${product.price}.00 </label>
                                        </div>
                                    <div className='prodbutton'>
                                        <button className="btn Add" onClick = {() => addToCart(product)}>Add to Cart</button>
                                    </div>
                                </div>
                            </>
                        )
                        })
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