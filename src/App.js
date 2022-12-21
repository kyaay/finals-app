import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useState, useEffect } from 'react';
import ProductList from "./ProductList";
import Data from "./products.json";
import Login from "./login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from './Cart'

//things to install in react
// npm install sass
// npm install react-router-dom bootstrap react-bootstrap
export const CartContext = React.createContext();

const App = () => {
  const [products,setProducts] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [isCartActive, setIsCartActive] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loginStatus, setLoginStatus] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchList, setSearchList] = useState([]);

  const activeCart = () => setIsCartActive(!isCartActive);
  const openCart = () => setIsCartActive(true);

  const getproductRequest = async () => {
    setProducts(Data);
  }

  function addToCart(selected){
    if(cartList.indexOf(selected) === -1){
      const newList = [...cartList];
      newList.push(selected);
      setCartList(newList);
      localStorage.setItem('listItems', JSON.stringify(newList));
    }
    openCart();
  }

  function removeFromCart(selected) {
    const index = cartList.indexOf(selected);
    cartList[index].quantity = 1;

    const newList = cartList.filter((item) => item !== selected);
    setCartList(newList);
    localStorage.setItem('listItems', JSON.stringify(newList));
  }

  function decreaseQuantity(selected){
    const productList = [...cartList];
    const index = productList.indexOf(selected);
    if(productList[index].quantity - 1 > 0){
      productList[index].quantity--;
      setCartList(productList);
      localStorage.setItem("cart", JSON.stringify(productList));
    } else {
      removeFromCart(selected);
    }
  }

  function increaseQuantity(selected){
    const productList = [...cartList];
    const index = productList.indexOf(selected);
    productList[index].quantity++;
    setCartList(productList);
    localStorage.setItem("cart", JSON.stringify(productList));
  }

  useEffect(() => {
    getproductRequest();
    let storedItems = JSON.parse(localStorage.getItem('listItems'));
    if(storedItems){
      setCartList(storedItems);
    }
  }, []);

  return (
    <CartContext.Provider value = {
        {
          searchList: searchList,
          loginStatus: loginStatus,
          setLoginStatus: setLoginStatus,
          totalPrice: totalPrice, 
          cartList: cartList, 
          isCartActive: isCartActive, 
          activeCart: activeCart,
          products: products, 
          addToCart: addToCart,
          removeFromCart: removeFromCart,
          decreaseQuantity: decreaseQuantity,
          increaseQuantity: increaseQuantity,
          setTotalPrice: setTotalPrice,
          searchValue: searchValue,
        }}
    >
      <Router>
      <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path={"/"} >
          <div className="Home">
              <div className="container">
                  <div className="bodycontent">
                    <h1 className="featured">Featured Products</h1>
                  </div>
                  <div className="proddiv">
                    <ProductList products = {products}/>
                  </div>
                  <div className="bodycontent2">
                    <h1 className="featured"></h1>
                  </div>
              </div>
            <Footer/>
            </div>
         </Route>
         <Route exact path={"/login"}>
              <Login/>
         </Route>
         <Route exact path={"/cart"}>
              <Cart />
         </Route>
        </Switch>
      </div>
    </Router>
    <Cart />
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