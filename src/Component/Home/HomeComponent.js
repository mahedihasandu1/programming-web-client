import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const HomeComponent = () => {
    return (
        <div className='margineStyle'>
            <div className="hero min-h-screen bg-gray-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt=''  src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=2000" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Programming Web !</h1>
                        <p className="py-6">If you are looking for any Programing courses .Hare Its For You that you can opt for after your primary school studies this is the right place for you. You will find the right course that you can study from the list of options available. We are sure you will not regret the course you have chosen as you will get complete details related to the particular course. Courses under Various streams are arranged and you can choose your dream ones and study accordingly.</p>
                        <Link to="/courses"><button className="btn btn-primary">Get Started</button></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;