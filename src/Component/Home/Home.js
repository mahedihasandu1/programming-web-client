import React from 'react';
import './Home.css'
import HomeComponent from './HomeComponent';

const Home = () => {


    return (
        <div  className='w-[80%] mx-auto'>
            <div className='coustom-css'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img alt="" src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png" className="w-full h-5/6 " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img alt="" src="https://www.programming-hero.com/blog/assets/images/blog/web-development-from-scratch.png" className="w-full h-5/6  " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img alt="" src="https://hackr.io/blog/best-web-development-courses/thumbnail/large" className="w-full h-5/6" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
        
        </div>

        <HomeComponent></HomeComponent>
        </div>

    );
};

export default Home;