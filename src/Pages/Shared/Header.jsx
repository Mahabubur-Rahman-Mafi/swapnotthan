import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../accest/logo.png'
import text from '../../accest/text.png'
import { BiPhoneCall } from "react-icons/bi";

const Header = () => {

  const menu = <>
    <li className='text-primary text-xl font-medium hover:text-secondary'><Link to='/'>Home</Link></li>
    <li className='text-primary text-xl font-medium hover:text-secondary'><Link to='/about'>About</Link></li>
    <li className='text-primary text-xl font-medium hover:text-secondary'><Link to='/events'>Event</Link></li>
    <li className='text-primary text-xl font-medium hover:text-secondary'><Link to='/member'>Meet Our member</Link></li>
    <li className='text-primary text-xl font-medium hover:text-secondary'><Link to='/contact'>Contact Us</Link></li>
  </>
    return (
      <div className="navbar max-w-[1190px] mx-auto my-auto justify-center align-center w-full">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-outline lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 text-primary bg-transparent text-xl md:text-2xl lg:text-3xl hover:text-secondary border-0 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content bg-base-100 mt-3  shadow  rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <Link to="/">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-primary">
              Swapnotthan
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  p-2">{menu}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-primary  text-l rounded-2xl hover:bg-transparent hover:text-primary hover:border-2 px-3 font-medium text-transform: capitalize">
            <BiPhoneCall className="mr-2 text-xl" /> Call
            Now
          </button>
        </div>
      </div>
    );
};

export default Header;