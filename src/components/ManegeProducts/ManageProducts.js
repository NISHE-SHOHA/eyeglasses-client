import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([])

    useEffect( ()=>{
       fetch('https://morning-ravine-75355.herokuapp.com/products')
       .then(res=>res.json())
       .then(data => setProducts(data))
    }, [])

    const handleDelete = id =>{
        const url = `https://morning-ravine-75355.herokuapp.com/products/${id}`
        fetch(url, {
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount){
                alert('deleted')
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            }
        });
    }

    return (
        <div className="mt-3 mb-3 fw-bold">
            <h2 className="text-primary fw-bold">===Manage Products===</h2>
            {
                products.map(product => <div
                    key={product._id}>
                    <img src={product.img} alt="" />
                    <h3> Name: {product.name}</h3>
                    <h4>Price: {product.price}</h4>
                    <p>Details: {product.description}</p>
                    <button className="mb-5 btn btn-danger fw-bold" onClick={()=> handleDelete(product._id)}>Delete</button>
                    </div>)
            }
        </div>
    );
};

export default ManageProducts;