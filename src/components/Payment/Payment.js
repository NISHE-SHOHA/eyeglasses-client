import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <div>
           <h2 className="text-primary fw-bold">Payment Here</h2> 
           <h4 className="text-warning fw-bold">Thanks For Your Payment</h4>
           <img src="https://image.freepik.com/free-vector/cash-payment-concept-illustration_114360-2771.jpghttps://image.freepik.com/free-vector/cash-payment-concept-illustration_114360-2771.jpg" alt="" />
           <div>
           <h3 className="text-primary fw-bold">Our Home Delivery System avilable Now</h3>
           <Link className="btn btn-primary mb-2" to="/orderPlace">Delivery System</Link>
           </div>
        </div>
    );
};

export default Payment;