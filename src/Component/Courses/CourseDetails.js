import React from 'react';
import { useLoaderData } from 'react-router-dom';


const CourseDetails = () => {

    const courseData = useLoaderData()
    const { id, image, title, price, description ,duration } = courseData

    return (
        <div className='my-24 w-[60%] mx-auto'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl italic font-bold text-info">{title}</h2>
                    <h3>{duration}</h3>
                    <p className='text-current'>{description}</p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Download</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseDetails;