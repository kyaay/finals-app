import Navbar from "./Navbar";
import React, { useState, useEffect } from 'react';
import ProductList from "./ProducList";

//things to install in react
// npm install sass

const App = () => {
  const [products,setProducts] = useState([ ]);

  const getproductRequest = async () => {
    const url = 'https://dummyjson.com/products/category/laptops';

    const response = await fetch(url);
    const responseJson = await response.json();
    
    setProducts(responseJson.Search);
  }

  useEffect(() => {
    getproductRequest();
  },[]);


  return (
    <div className="App">
      <div>
      <Navbar/>
      </div>
      <div>
        <ProductList products = {products}/>
      </div>     
    </div>
  );
}

export default App;
