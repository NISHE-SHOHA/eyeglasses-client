import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        console.log(data);
        axios.post('https://morning-ravine-75355.herokuapp.com/products', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Added Successfully');
                reset();
            }
        })
    }

    return (
        <div className="add-product mt-5 mb-5">
            <h2 className="mb-3 text-primary">Please Add A Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image Url" />
                <input className="fw-bold bg-danger text-light" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;