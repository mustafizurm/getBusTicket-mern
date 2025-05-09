import React from 'react'

const Header = () => {
  return (
    <header>
      <div className='w-[95%] sm:max-w-[620px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1260px] m-auto flex items-center justify-between py-[25px]'>
        <h3 className='text-3xl'>Bus<span className='text-red-600'>Ticket</span></h3>
        <div className='flex items-center gap-[100px]'>
          <nav className='list-none sm:flex ism:tems-center sm:gap-6 hidden text-gray-600'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>Tickets</li>
            <li className='cursor-pointer'>About</li>
          </nav>
          <div className='flex gap-9 items-center'>
            <button className='py-[4px] px-[25px] bg-red-600 text-white rounded-2xl cursor-pointer'>Login</button>
            {/* <i className="fa-solid fa-bars cursor-pointer text-2xl block lg:hidden"></i> */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header