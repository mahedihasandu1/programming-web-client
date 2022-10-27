import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ReactSwitch from 'react-switch'
import { AuthContext } from '../../UserContext/UserContext';

const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  console.log(user);

  return (
    <div className="sm:px-0 md:px-[10%] navbar  bg-cyan-700  text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-info rounded-box w-52">


            <li><NavLink to='/home'
              title='Home'
              className={({ isActive }) => isActive ? 'font-medium mr-4 px-3 py-2 rounded tracking-wide text-white  transition-colors  bg-cyan-900 duration-200 hover:text-white' : 'font-medium tracking-wide text-white  transition-colors duration-200 hover:text-deep-purple-accent-800 mr-4'}
            >Home</NavLink></li>
            <li><NavLink to='courses'
              className={({ isActive }) => isActive ? 'font-medium mr-4  px-3 py-2 rounded tracking-wide text-white e transition-colors bg-cyan-900  duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-white  transition-colors duration-200 hover:text-deep-purple-accent-800 mr-4 '}
              title='Courses'
            >Courses</NavLink></li>
            <li><NavLink to='faq'
              className={({ isActive }) => isActive ? 'font-medium mr-4  px-3 py-2 rounded tracking-wide text-white e transition-colors bg-cyan-900 duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-white  transition-colors duration-200 hover:text-deep-purple-accent-800 mr-4 '}
              title='FAQ'
            >FAQ</NavLink></li>
            <li><NavLink to='blog'
              title='Blog'
              className={({ isActive }) => isActive ? 'font-medium mr-4 px-3 py-2 rounded tracking-wide text-white transition-colors bg-cyan-900 duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-800 mr-4 '}>Blog</NavLink></li>


          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">Programing Web</NavLink>
      </div>
      <div className="navbar-middle hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><NavLink to='/home'
            title='Home'
            className={({ isActive }) => isActive ? 'font-medium mr-4 px-3 py-2 rounded tracking-wide text-white  transition-colors bg-cyan-900 duration-200 hover:text-white' : 'font-medium tracking-wide text-white  transition-colors duration-200 hover:text-deep-purple-accent-800 mr-4'}
          >Home</NavLink></li>
          <li><NavLink to='courses'
            className={({ isActive }) => isActive ? 'font-medium mr-4  px-3 py-2 rounded tracking-wide text-white e transition-colors bg-cyan-900 duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-white  transition-colors duration-200 hover:text-deep-purple-accent-800 mr-4 '}
            title='Courses'
          >Courses</NavLink></li>
          <li><NavLink to='faq'
            className={({ isActive }) => isActive ? 'font-medium mr-4  px-3 py-2 rounded tracking-wide text-white e transition-colors bg-cyan-900 duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-white  transition-colors duration-200 hover:text-deep-purple-accent-800 mr-4 '}
            title='FAQ'
          >FAQ</NavLink></li>
          <li><NavLink to='blog'
            title='Blog'
            className={({ isActive }) => isActive ? 'font-medium mr-4 px-3 py-2 rounded tracking-wide text-white transition-colors bg-cyan-900  duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-800 mr-4 '}>Blog</NavLink></li>
        </ul>

      </div>



      {/* dynamic navbar */}


      <div className=" navbar-end ">
        <ReactSwitch></ReactSwitch>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt='' title={user.displayName} src={user.photoURL} />
          </div>
        </label>

        {
          user?.uid ?
            <button className='aa' onClick={logOut}>logOut</button > :
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
        }


      </div>



    </div>

  );
};



export default Header;