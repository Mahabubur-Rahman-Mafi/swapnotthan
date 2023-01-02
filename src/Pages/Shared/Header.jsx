import React from 'react';
import { BiPhoneCall } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Header = () => {

  const menu = <>
    <li className='text-primary text-xl font-medium hover:text-secondary'><Link to='/'>Home</Link></li>
    <li className='text-primary text-xl font-medium hover:text-secondary'><Link to='/about'>About</Link></li>
    <li className='text-primary text-xl font-medium hover:text-secondary'><Link to='/events'>Event</Link></li>
    <li className='text-primary text-xl font-medium hover:text-secondary'><Link to='/member'>Meet Our member</Link></li>
    <li className='text-primary text-xl font-medium hover:text-secondary'><Link to='/contact'>Contact Us</Link></li>
  </>
    return (
      <div className="navbar mt-2 items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="#701B2E"
                viewBox="0 0 24 24"
                stroke="#701B2E"g 
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <Link
            to="/"
            className=" normal-case text-[44px] text-primary hover:transform-cpu"
          >
            Swapno
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          <Link className="btn-primary text-base font-semibold text-white px-4 py-3 rounded-full hover:border-2 hover:bg-transparent hover:text-primary">
            <span className="flex items-center">
              <BiPhoneCall className="mr-2 text-lg" />
              <span className='hidden md:inline-block'>Call Now</span>
            </span>
          </Link>
        </div>
      </div>
    );
};

export default Header;