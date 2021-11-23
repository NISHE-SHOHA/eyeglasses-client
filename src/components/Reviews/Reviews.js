import React, { useEffect, useState } from 'react';

const Reviews = () => {
        const [reviews, setReviews] = useState([])
        useEffect(() => {
            fetch('https://morning-ravine-75355.herokuapp.com/reviews')
                .then(res => res.json())
                .then(data => setReviews(data));
        }, [])
        
    return (
        <div className="row">
            {
            reviews.map(review =>(
            <div className="col-md-6 col-lg-4 pb-3 mt-3 fw-bold">
            <div className="card products rounded-3 h-100">
            <div className="card-body">
            <h5 className="card-title fw-bold">{review.name}</h5>
            <h4>Ratting: {review.ratting}</h4>
            <p classN ="card-text ms-2">{review.description}</p>
            </div>
         </div>
        </div>
                ))
            }
        </div>
    );
}
export default Reviews;