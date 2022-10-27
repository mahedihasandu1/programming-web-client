import React from 'react';
import { FaFacebook, FaGoogle, FaGithub, FaTwitter, FaYoutube, } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const MediaHanger = () => {
    return (
        <div >
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                <li className='text-center border-2 mb-2'><a href="https://www.facebook.com/mahedihasandu1"> Facebook <FaFacebook /> </a></li>
                <li className='text-center border-2 mb-2'><a href="https://twitter.com/_mahedihasan">Twitter <FaTwitter /></a></li>
                <li className='text-center border-2 mb-2'><a href="https://www.youtube.com/">Youtube <FaYoutube /></a></li>
                <li className='text-center border-2 mb-2'><a href="https://github.com/mahedihasandu1">GitHub <FaGithub /></a></li>
                <li className='text-center border-2 mb-2'><Link to="/">Programmin-Web </Link></li>
                <li className='text-center border-2 mb-2'><a href="https://www.google.com/">Google <FaGoogle /></a></li>
            </ul>
        </div>
    );
};

export default MediaHanger;