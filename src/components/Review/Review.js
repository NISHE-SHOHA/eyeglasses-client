import axios from 'axios';
import * as React from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        console.log(data);
        axios.post('https://morning-ravine-75355.herokuapp.com/reviews', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Added Successfully');
                reset();
            }
        })
    }

    
    return (
        <div className="add-product mt-5 mb-5">
        <h2 className="mb-3 text-primary">Please Add A Review</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
            <textarea {...register("description")} placeholder="Description" />
            <input type="number" {...register("ratting")} placeholder="Ratting" />
            <input className="fw-bold bg-primary text-light" type="submit" />
        </form>
    </div>
    );
};

export default Review;