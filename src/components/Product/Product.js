import React from 'react';
import './Product.css';
import { Link, useLocation } from 'react-router-dom';


const Product = ({product}) => {
    const { _id, name, description, img, price } = product;
    const location = useLocation();
    return (
        <div className="col-md-6 col-lg-4 pb-3 mt-3 fw-bold">
           <div className="card products rounded-3 h-100">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title fw-bold">{name}</h5>
            <h4>Price: {price}</h4>
            <p classN ="card-text ms-2">{description}</p>
            {!location.pathname.includes('/orders') && <Link to={`/booking/${_id}`}>
            <button className="btn btn-primary text-light fw-bold border border-warning">BUY NOW</button>
            </Link>}
            </div>
         </div>
        </div>
    );
};

export default Product;