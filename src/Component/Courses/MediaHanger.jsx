import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const MediaHanger = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                        <li className='text-center border-2 mb-2'><a href="/"> Facebook  </a></li>
                        <li className='text-center border-2 mb-2'><a href="/">Twitter</a></li>
                        <li className='text-center border-2 mb-2'><a href="/">Youtube</a></li>
                        <li className='text-center border-2 mb-2'><a href="/">GitHub</a></li>
                        <li className='text-center border-2 mb-2'><a href="/">Programmin-Web</a></li>
                        <li className='text-center border-2 mb-2'><a href="/">google</a></li>
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default MediaHanger;