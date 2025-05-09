import React from 'react'

const Form = () => {
    return (
        <form action="" className='flex flex-col gap-5 mt-[40px] border border-gray-300 p-[15px] md:flex md:flex-row shadow shadow-gray-400'>
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
    )
}

export default Form