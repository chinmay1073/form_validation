import React from 'react';
import './Result.css'
const Result = ({ formData }) => {
    return (
    
        <div>
            <h2>Displaying Form Data</h2>
            <div className='display'>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Phone Number: {formData.phoneNumber}</p>
            <p>City: {formData.city}</p>
            <p>Country: {formData.country}</p>
            </div>
        </div>
    
    );
};

export default Result;
