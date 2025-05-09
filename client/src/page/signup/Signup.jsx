import React, { useState } from 'react'
import Users from '../../assets/data/Users'

const Signup = () => {

    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const changeHandler = async (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value})
    }

    const submitHandler = async (e) => {
        e.preventDefault()
    }



  return (
    <section className='w-[100%] h-[86vh] flex items-center'>
        <div className='w-[70%] sm:max-w-[400px] m-auto bg-red-50 py-[20px] rounded'>
            <h2 className='text-[34px] font-bold text-center'>Signup</h2>
            <form action="" className='py-[10px] px-[18px] flex flex-col gap-5'>
            <label htmlFor="">
                    <span>Name:</span> <br />
                    <input className='border border-gray-400 w-[100%] mt-[8px] outline-0 p-[4px]' type="text" name='name' value={data.name} onChange={(e)=> {changeHandler(e)}}  />
                </label>

                <label htmlFor="">
                    <span>Email:</span> <br />
                    <input className='border border-gray-400 w-[100%] mt-[8px] outline-0 p-[4px]' type="email" name='email' value={data.email} onChange={(e)=> {changeHandler(e)}} />
                </label>
                <label htmlFor="">
                    <span>Password:</span> <br />
                    <input className='border border-gray-400 w-[100%] mt-[8px] outline-0 p-[4px]' type="password" name='password' value={data.password} onChange={(e)=> {changeHandler(e)}} />
                </label>
                <div>
                    <p>already have account? <span className='cursor-pointer'> Login</span></p>
                </div>
                <button className='cursor-pointer py-[3px] px-[23px] bg-red-400  text-white' onClick={submitHandler}>Submit</button>
            </form>
        </div>
    </section>
  )
}

export default Signup