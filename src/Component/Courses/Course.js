import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css'

const Course = ({ course }) => {
    const { id, image, title, price, description} = course;
    const details=description.slice(0,200) +"..." ;
    console.log(id)
    
    return (
        <Link to={`../courses/${id}`} Link-label='View Item'>
            <div className="card mx-auto w-96 bg-base-100 shadow-xl p-2">
                <img src={image} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        {/* <p className='font-bold text-violet-900'>BDT :{price}</p> */}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Course;