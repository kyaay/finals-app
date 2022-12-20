import './Styles/showProduct.scss';

const ShowProduct = () =>{

    return(
        <div className="singleProd">
            <div className='singleProd_container'>
                <div className="row1">
                    <div className="column">
                        <div className="productImg">
                            <img src="https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png"></img>
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
                            <hr class="solid"></hr>
                            <h2>₱ 1,749.00</h2>
                            <div className='quantity'>
                                <label>Quantity: </label>
                                <input type="number" min="1" max="100" id='quantity'></input>
                            </div>
                            <button>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowProduct;