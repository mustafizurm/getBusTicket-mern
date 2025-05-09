import React, { useState } from 'react'

const Login = () => {
   
  return (
    <section className='w-[100%] h-[86vh] flex items-center'>
        <div className='w-[70%] sm:max-w-[400px] m-auto bg-red-50 py-[20px] rounded'>
            <h2 className='text-[34px] font-bold text-center'>Login</h2>
            <form action="" className='py-[10px] px-[18px] flex flex-col gap-5'>
                <label htmlFor="">
                    <span>Email:</span> <br />
                    <input className='border border-gray-400 w-[100%] mt-[8px] outline-0 p-[4px]' type="email" />
                </label>
                <label htmlFor="">
                    <span>Password:</span> <br />
                    <input className='border border-gray-400 w-[100%] mt-[8px] outline-0 p-[4px]' type="password" />
                </label>
                <div className='flex justify-end'>
                    <h4 className='cursor-pointer'>Forgate Password</h4>
                </div>
                <div>
                    <p>dont have account? <span className='cursor-pointer'> SignUp</span></p>
                </div>
                <button className='cursor-pointer py-[3px] px-[23px] bg-red-400  text-white'>Submit</button>
            </form>
        </div>
    </section>
  )
}

export default Login