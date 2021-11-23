import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';


const Booking = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    const history = useHistory();

    useEffect( ()=>{
       fetch(`https://morning-ravine-75355.herokuapp.com/products/${productId}`) 
       .then(res => res.json())
       .then(data => setProduct(data))
    }, [])

    const handleDelete = id =>{
        alert('Do you want to delete this Product')
        const url = `https://morning-ravine-75355.herokuapp.com/products/${id}`
        fetch(url, {
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data =>{
           
        
            if(data.deletedCount){
               history.push('/')
               alert('Your Product Has Been Deleted')
            }
        })
    }

    const handleOrder = (data) =>{
        const order ={
            name: data.name,
            description: data.description,
            img: data.img,
            price: data.price
        }
        axios.post('https://morning-ravine-75355.herokuapp.com/orders', order)
        .then(res => {
            if(res.data.insertedId){
                alert('Your Order Placed Successfully'); 
                history.push('/orders') 
            }
        })
    }

    return (
         <div className="container bg-light text-dark fw-bold mt-5 mb-5 pt-5 pb-5">
            <h2 className="text-primary fw-bold">===Your Order===</h2>
            <img src={product.img} alt="" />
            <h3>Name: {product.name}</h3>
            <h4>Price: {product.price}</h4>
            <p>Description: {product.description}</p>
            <div className="d-flex justify-content-center align-items-center">
            <button onClick={()=> handleDelete(product._id)} className="btn btn-danger fw-bold me-5">Delete</button>
            <button onClick={ () => handleOrder(product)} className="btn btn-primary fw-bold">Order Place</button>
            </div>
         </div>   
    );
};

export default Booking;