import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';
import MediaHanger from './MediaHanger';

const Courses = () => {
    const data = useLoaderData()
        
    return (
        <div className='flex flex-col md:flex-row spacey-6  md:space-y-0 md:space-x-12 mt-10'>
            <div  >
                <MediaHanger></MediaHanger>
            </div>
            <div className='md:flex-grow '>
               <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-3 sm:grid-cols-1'>
                {
                    data.map(course=> (<Course course={course} key={course.id} ></Course>) )
                }
               </div>
            </div>
        </div>
    );
};

export default Courses;