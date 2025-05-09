import React from 'react'
import busPic from "../../assets/images/busPic.jpg"
import Form from './Form'

const Hero = () => {
    return (
        <section>
            <div className='w-[95%] sm:max-w-[620px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1260px] m-auto'>
                <h3 className='text-center text-gray-700'>Get You Bus Tickets</h3>
                <h1 className='text-center font-bold text-4xl pt-[10px]'>Find Best Bus For You</h1>
                <Form />
                <div className='m-auto flex max-w-[700px]'>
                    {/* <img className='w-[100%]' src={busPic} alt="" /> */}
                </div>
            </div>
        </section>
    )
}

export default Hero