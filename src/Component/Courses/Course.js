import React from 'react';
import './Course.css'

const Course = ({ course }) => {
    const { id, image, title, price, description} = course;
    const details=description.slice(0,200) +"..." ;
    console.log(id, image, title, price, description)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl p-2">
                <img src={image} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;