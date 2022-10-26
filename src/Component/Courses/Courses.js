import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const data = useLoaderData()
    
        
    return (
        <div className='flex flex-warp gap-10 px-10 mt-10'>
            <div className='flex-initial'>
                <h1>Hi this is flex box</h1>
            </div>
            <div className='flex-auto'>
               <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-1'>
                {
                    data.map(course=> (<Course course={course} key={course.id} ></Course>) )
                }
               </div>
            </div>
        </div>
    );
};

export default Courses;