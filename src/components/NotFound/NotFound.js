import React from 'react';
import picture from '../../images/error.jpg';

const NotFound = () => {
    return (
        <div>
           <img className="h-100 w-100" src={picture} alt="" />
        </div>
    );
};

export default NotFound;