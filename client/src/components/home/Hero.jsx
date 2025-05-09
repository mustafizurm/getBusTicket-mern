import React from 'react'
import busPic from "../../assets/images/busPic.jpg"

const Hero = () => {
    return (
        <section>
            <div className='w-[95%] sm:max-w-[620px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1260px] m-auto'>
                <h3 className='text-center text-gray-700'>Get You Bus Tickets</h3>
                <h1 className='text-center font-bold text-4xl pt-[10px]'>Find Best Bus For You</h1>
                <form action="" className='flex flex-col gap-5 mt-[40px] border border-gray-300 p-[15px] md:flex md:flex-row'>
                    <label htmlFor="" className='relative w-[100%]'>
                        <input type="text" placeholder='From..' className='p-[7px] w-[100%] outline-red-200 border border-gray-300' />
                        <i className="fa-solid fa-location-dot text-gray-400 absolute top-1 md:top-3 right-4"></i>
                    </label>
                    <label htmlFor="" className='relative w-[100%]'>
                        <input type="text" placeholder='To..' className='p-[7px] w-[100%] outline-red-200 border border-gray-300' />
                        <i className="fa-solid fa-location-dot text-gray-400 absolute top-1 md:top-3 right-4"></i>
                    </label>
                    <label htmlFor="" className='relative w-[100%]'>
                        <input type="date" placeholder='From..' className='p-[7px] w-[100%] outline-red-200 border border-gray-300 text-gray-400 ' />
                        {/* <i className="fa-solid fa-location-dot text-gray-400 absolute top-1 md:top-3 right-4"></i> */}
                    </label>
                    <button className='bg-red-600 py-[6px] px-[20px] text-white rounded cursor-pointer'>Search</button>
                </form>
                <div className='m-auto flex max-w-[700px]'>
                    {/* <img className='w-[100%]' src={busPic} alt="" /> */}
                </div>
            </div>
        </section>
    )
}

export default Hero