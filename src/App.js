import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useState, useEffect } from 'react';
import ProductList from "./ProductList";
import Login from "./login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShowProduct from "./showProduct";

//things to install in react
// npm install sass
// npm install react-router-dom bootstrap react-bootstrap
export const CartContext = React.createContext();

const App = () => {
  const [products,setProducts] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [isCartActive, setIsCartActive] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);


  const getproductRequest = async () => {
    const url = 'https://dummyjson.com/products/category/laptops';
    
    await fetch (url)
    .then(response => response.json())
    .then(response => {
      setProducts(response.products)
    })
  }

  function addToCart(value){
    cartList.push(value);
    console.log(value.title);
  }

  function activeCart(){
    setIsCartActive(!isCartActive);
    let n = 0;
    cartList.map((item,index) => {
      return (
          <>
              {
                  n = n + Number(item.price)
              }
          </>
      )
    })
    setTotalPrice(n);
  }

  function decreaseQuantity() {

  }

  function increaseQuantity() {

  }

  function calculateTotalPrice(value){
    
  }

  useEffect(() => {
    getproductRequest();
  }, []);

  return (
    <CartContext.Provider value = {
        {
          quantity: quantity,
          calculate: calculateTotalPrice,
          totalPrice: totalPrice, 
          cartList: cartList, 
          isCartActive: isCartActive, 
          activeCart: activeCart,
          products: products, 
          addToCart: addToCart
        }}
    >
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

    </CartContext.Provider>
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