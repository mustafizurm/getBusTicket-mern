import React, { useState } from 'react'
import { Link } from "react-router"
import Login from '../page/login/Login'
import Signup from '../page/signup/Signup'

const Header = () => {
  return (
    <header className='relative'>
      <div className='w-[95%] sm:max-w-[620px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1260px] m-auto flex items-center justify-between py-[25px]'>
        <Link> <h3 className='text-3xl cursor-pointer'>Bus<span className='text-red-400'>Ticket</span></h3></Link>
        <div className='flex items-center gap-[100px]'>
          <nav className='list-none sm:flex ism:tems-center sm:gap-6 hidden text-gray-600'>
            <Link to={'/'}><li className='cursor-pointer'>Home</li></Link>
            <li className='cursor-pointer'>Services</li>
            <Link to={'/tickets'}><li className='cursor-pointer'>Tickets</li></Link>
            <li className='cursor-pointer'>About</li>
          </nav>
          <div className='flex gap-9 items-center'>
            <button className='py-[4px] px-[25px] bg-red-400 text-white rounded-2xl cursor-pointer'>Login</button>
            {/* <i className="fa-solid fa-bars cursor-pointer text-2xl block lg:hidden"></i> */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header