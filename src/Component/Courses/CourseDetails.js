import React from 'react';
import Pdf from "react-to-pdf";
import { useLoaderData } from 'react-router-dom';


const ref = React.createRef();
const CourseDetails = () => {

    const courseData = useLoaderData()
    const { id, image, title, price, description, duration } = courseData

    return (
        <div className='my-24 sm:w-0  md:w-[60%] mx-auto'>

            <div ref={ref} className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl italic font-bold text-info">{title}</h2>
                    <h3 className='text-2xl font-semibold text-red-600'><span className='text-black'>Course Duration </span>:{duration}</h3>
                    <p className='text-2xl'>BDT: <span className='text-blue-600'>{price}</span></p>
                    <p className='text-zinc-500'> {description}</p>

                    <div>
                        <Pdf  targetRef={ref} filename="Course-Details.pdf">
                            {({ toPdf }) => <button className=" btn btn-primary" onClick={toPdf}>Download</button>}
                        </Pdf>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default CourseDetails;