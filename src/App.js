import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useState, useEffect } from 'react';
import ProductList from "./ProductList";
import Login from "./login";

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
      <Login/>
      {/* <div>
        <Navbar/>
      </div>
      <div className="container">
          <div className="bodycontent">
            <h1 className="featured">Featured Products</h1>
          </div>
          <div className="proddiv">
            <ProductList products = {products}/>
          </div>
          <div className="bodycontent2">
            <h1 className="featured">Phones Products</h1>
          </div>
      </div>
      <div>
        <Footer/>
      </div> */}
    </div>
  );
}

export default App;
