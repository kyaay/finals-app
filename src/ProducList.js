const ProductList = (props) => {
    return <product>
        <div className = "product-list">
            {props.products.map((product,index) => 
                <div>
                <img src={product.images} className = 'row_poster'alt = 'movie'></img> <text className="product-title">{product.title}</text>
                </div>)
            }
        </div>

    </product>
    /* 
            Jerick mao ni ang sample gikan sa API na link sa mga laptop producs
            'https://dummyjson.com/products/category/laptops'

    {"id":6,
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

export default  ProductList;