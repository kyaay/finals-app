import './Styles/ProductList.scss';

const ProductList = ({products}) => {
    return (
        <div className = "product-list" data-testid="product-list">
            {
                products.map((product,index) => {
                    return (
                        <div className = "product" key = {index}>
                            <img src = {product.thumbnail} alt = "image1"></img>
                            <div className='prodtitle'>
                                <h3>{product.title} </h3>
                            </div>
                            <div className='price'>
                                <label>Price: ${product.price} </label>
                            </div>
                            <div className='prodbutton'>
                                <button className="btn Add">Add to Cart</button>
                                <button className="btn Buy">Buy Now</button>
                            </div>
                            
                            <div className='overlay'>
                                <div className='sampleText'>Hello World</div>                                
                            </div>
                          
                        </div>)
                    }
                )
            }
        </div>
    )
    /* 
            Jerick mao ni ang sample gikan sa API na link sa mga laptop producs
            'https://dummyjson.com/products/category/laptops'

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
    */
}

export default ProductList;