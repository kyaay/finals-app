import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useState, useEffect } from 'react';
import ProductList from "./ProductList";
import Login from "./login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
    <Router>
      <div className="App">
      <div>
        <Navbar/>
      </div>
      <Switch>
        <Route path={"/home"}>
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
         </Route>
            <Route path={"/buy"}>
              <ShowProduct />
            </Route>
      </Switch>
      <div>
          <Footer/>
      </div>
    </div>
  </Router>
  );
}

export default App;

/*
 <Router>
      <div className="App">
        <div>
          <Navbar/>
        </div>
        <Switch>
            <Route path={"/home"}>
                <div>
                  <div className="bodycontent">
                    <h1 className="featured">Featured Products</h1>
                  </div>
                      <div>
                        <ProductList products = {products}/>
                        { <ShowProduct/> }
                      </div>     
                    </div>
                </Route>
                <Route path={"/buy"}>
                  <ShowProduct />
                </Route>
         </Switch>
            <div>
            <Footer/>
            </div>
      </div>
      <div>
        <Footer />
      </div>
    </Router>
*/