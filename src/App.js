import Navbar from "./Navbar";
import React, { useState, useEffect } from 'react';
// import ProductList from "./ProductList";
import ShowProduct from "./showProduct";

//things to install in react
// npm install sass

const App = () => {
  const [products,setProducts] = useState([]);

  const getproductRequest = async () => {
    const url = 'https://dummyjson.com/products/category/laptops';

    await fetch (url)
    .then(response => response.json())
    .then(response => {
      setProducts(response.products)
    })
  }

  useEffect(() => {
    getproductRequest();
  }, []);


  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <div>
        <div className="bodycontent">
          <h1 className="featured">Featured Products</h1>
        </div>
        <div>
          {/* <ProductList products = {products}/> */}
          <ShowProduct/>
        </div>     
      </div>
    </div>
  );
}

export default App;
