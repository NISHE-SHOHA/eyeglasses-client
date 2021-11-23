import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://morning-ravine-75355.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className="container">
            <h2 className="text-primary mt-5 mb-2">Our Products</h2>
            <div className="row">
                {
                    products.slice(0,6).map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>   
        </div>
        <div>
            <h2 className="text-primary fw-bold">Reviews</h2>
            <Reviews></Reviews>
        </div>
        </div>
    );
};

export default Home;